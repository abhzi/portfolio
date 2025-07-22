import Commons from "./Commons";
import * as THREE from "three";

import fragmentShader from "../../shaders/text/text.frag";
import vertexShader from "../../shaders/text/text.vert";

// @ts-ignore
import { Text } from 'troika-three-text';


import { inView, animate } from "motion";

interface Props {
  scene: THREE.Scene;
  element: HTMLElement;
}

export default class WebGLText {
  private commons: Commons;
  private scene: THREE.Scene;
  private element: HTMLElement;

  private computedStyle: CSSStyleDeclaration;
  private font: string = "";
  private bounds: DOMRect = new DOMRect();
  private color: THREE.Color = new THREE.Color(0xffffff);
  private material!: THREE.ShaderMaterial;
  private mesh!: Text;

  private y: number = 0;
  private isVisible: boolean = false;

  constructor({ scene, element }: Props) {
    this.commons = Commons.getInstance();
    this.scene = scene;
    this.element = element;

    this.computedStyle = window.getComputedStyle(this.element);

    this.createFont();
    this.createColor();
    this.createBounds();
    this.createMaterial();
    this.createMesh();
    this.setStaticValues();

    this.scene.add(this.mesh);
    this.element.style.color = "transparent";

    this.addEventListeners();
  }

  private createFont(): void {
    const weight = this.computedStyle.fontWeight || "400";

    const weightToFontMap: Record<string, string> = {
      "900": "/fonts/Orbitron-Bold.ttf",
      "800": "/fonts/Orbitron-Bold.ttf",
      "700": "/fonts/Orbitron-Bold.ttf",
      "600": "/fonts/Orbitron-Medium.ttf",
      "500": "/fonts/Orbitron-Medium.ttf",
      "400": "/fonts/Orbitron-Regular.ttf",
      "300": "/fonts/Orbitron-Light.ttf",
      "200": "/fonts/Orbitron-ExtraLight.ttf",
      "100": "/fonts/Orbitron-Thin.ttf",
    };

    this.font = weightToFontMap[weight] || "/fonts/Orbitron-Regular.ttf";
  }

  private createBounds(): void {
    this.bounds = this.element.getBoundingClientRect();
    this.y = this.bounds.top + this.commons.lenis.actualScroll;
  }

  private createColor(): void {
    this.color = new THREE.Color(this.computedStyle.color);
  }

  private createMaterial(): void {
    this.material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        uProgress: new THREE.Uniform(0),
        uHeight: new THREE.Uniform(this.bounds.height),
        uColor: new THREE.Uniform(this.color),
      },
      transparent: true,
    });
  }

  private createMesh(): void {
    this.mesh = new Text();
    this.mesh.text = this.element.innerText;
    this.mesh.font = this.font;

    this.mesh.anchorX = "0%";
    this.mesh.anchorY = "50%";

    this.mesh.material = this.material;
  }

  private setStaticValues(): void {
    const { fontSize, letterSpacing, lineHeight, whiteSpace, textAlign } = this.computedStyle;
    const fontSizeNum = parseFloat(fontSize);

    this.mesh.fontSize = fontSizeNum;
    this.mesh.textAlign = textAlign;
    this.mesh.letterSpacing = parseFloat(letterSpacing) / fontSizeNum;
    this.mesh.lineHeight = parseFloat(lineHeight) / fontSizeNum;
    this.mesh.maxWidth = this.bounds.width;
    this.mesh.whiteSpace = whiteSpace as "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
  }

  public show(): void {
    this.isVisible = true;

    animate(this.material.uniforms.uProgress, { value: 1 }, {
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1],
    });
  }

  public hide(): void {
    animate(this.material.uniforms.uProgress, { value: 0 }, {
      duration: 1.8,
      onComplete: () => {
        this.isVisible = false;
      },
    });
  }

  public onResize(): void {
    this.computedStyle = window.getComputedStyle(this.element);
    this.createBounds();
    this.setStaticValues();
    this.material.uniforms.uHeight.value = this.bounds.height;
  }

  public update(): void {
    if (!this.isVisible) return;

    this.mesh.position.y =
      -this.y +
      this.commons.lenis.animatedScroll +
      this.commons.sizes.screen.height / 2 -
      this.bounds.height / 2;

    this.mesh.position.x =
      this.bounds.left - this.commons.sizes.screen.width / 2;
  }

  private addEventListeners(): void {
    inView(this.element, () => {
      this.show();
      return () => this.hide();
    });
  }
}
