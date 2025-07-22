var yf=Object.defineProperty;var Mf=(n,e,t)=>e in n?yf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var be=(n,e,t)=>Mf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="175",Ef=0,Ul=1,Tf=2,_u=1,bf=2,Mn=3,Yn=0,zt=1,pn=2,bn=0,Ni=1,Ll=2,Il=3,Fl=4,Af=5,ii=100,wf=101,Rf=102,Cf=103,Pf=104,Df=200,Uf=201,Lf=202,If=203,Oa=204,Ba=205,Ff=206,Nf=207,Of=208,Bf=209,kf=210,zf=211,Vf=212,Gf=213,Hf=214,ka=0,za=1,Va=2,ki=3,Ga=4,Ha=5,Wa=6,Xa=7,xu=0,Wf=1,Xf=2,Wn=0,Yf=1,qf=2,Kf=3,jf=4,Zf=5,Jf=6,Qf=7,Su=300,zi=301,Vi=302,Ya=303,qa=304,Ns=306,Ka=1e3,si=1001,ja=1002,ln=1003,$f=1004,Xr=1005,Jt=1006,ta=1007,ai=1008,Cn=1009,yu=1010,Mu=1011,Mr=1012,Wo=1013,hi=1014,En=1015,Yi=1016,Xo=1017,Yo=1018,Er=1020,Eu=35902,Tu=1021,bu=1022,on=1023,Au=1024,wu=1025,Tr=1026,br=1027,Ru=1028,qo=1029,Cu=1030,Ko=1031,jo=1033,vs=33776,_s=33777,xs=33778,Ss=33779,Za=35840,Ja=35841,Qa=35842,$a=35843,eo=36196,to=37492,no=37496,io=37808,ro=37809,so=37810,ao=37811,oo=37812,lo=37813,co=37814,uo=37815,ho=37816,fo=37817,po=37818,mo=37819,go=37820,vo=37821,ys=36492,_o=36494,xo=36495,Pu=36283,So=36284,yo=36285,Mo=36286,ed=3200,Du=3201,td=0,nd=1,Hn="",jt="srgb",Gi="srgb-linear",ws="linear",rt="srgb",xi=7680,Nl=519,id=512,rd=513,sd=514,Uu=515,ad=516,od=517,ld=518,cd=519,Ol=35044,Bl="300 es",Tn=2e3,Rs=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const i=r[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Eo=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*r-a*i+e.x,this.y=s*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,r,i,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,s,a,o,l,c)}set(e,t,r,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],d=r[5],g=r[8],v=i[0],m=i[3],p=i[6],T=i[1],E=i[4],x=i[7],A=i[2],C=i[5],b=i[8];return s[0]=a*v+o*T+l*A,s[3]=a*m+o*E+l*C,s[6]=a*p+o*x+l*b,s[1]=c*v+u*T+h*A,s[4]=c*m+u*E+h*C,s[7]=c*p+u*x+h*b,s[2]=f*v+d*T+g*A,s[5]=f*m+d*E+g*C,s[8]=f*p+d*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-r*s*u+r*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+r*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*r)*v,e[2]=(o*r-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=d*v,e[7]=(r*l-c*t)*v,e[8]=(a*t-r*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new qe;function Lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){const n=Cs("canvas");return n.style.display="block",n}const kl={};function Ms(n){n in kl||(kl[n]=!0,console.warn(n))}function fd(n,e,t){return new Promise(function(r,i){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:r()}}setTimeout(s,t)})}function dd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){const n={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?ws:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Gi]:{primaries:e,whitePoint:r,transfer:ws,toXYZ:zl,fromXYZ:Vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:r,transfer:rt,toXYZ:zl,fromXYZ:Vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const it=md();function An(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class gd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Si===void 0&&(Si=Cs("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=Si}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cs("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=An(s[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(An(t[r]/255)*255):t[r]=An(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vd=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(sa(i[a].image)):s.push(sa(i[a]))}else s=sa(i);r.url=s}return t||(e.images[this.uuid]=r),r}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class It extends qi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,r=si,i=si,s=Jt,a=ai,o=on,l=Cn,c=It.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Lr(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Su;It.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,r=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*r+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*r+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*r+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(d+1)/2,A=(p+1)/2,C=(u+f)/4,b=(h+v)/4,R=(g+m)/4;return E>x&&E>A?E<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(E),i=C/r,s=b/r):x>A?x<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),r=C/i,s=R/i):A<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),r=b/s,i=R/s),this.set(r,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends qi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new It(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends xd{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Iu extends It{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sd extends It{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,s,a,o){let l=r[i+0],c=r[i+1],u=r[i+2],h=r[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*v,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const A=Math.sqrt(E),C=Math.atan2(A,p*T);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const x=o*T;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,i,s,a){const o=r[i],l=r[i+1],c=r[i+2],u=r[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(i/2),h=o(s/2),f=l(r/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-r*c,this._z=s*u+a*c+r*l-i*o,this._w=a*u-r*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+r*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=r*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6]*i,this.y=s[1]*t+s[4]*r+s[7]*i,this.z=s[2]*t+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*r+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*r+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*r+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*r),u=2*(o*t-s*i),h=2*(s*r-a*t);return this.x=t+l*c+a*h-o*u,this.y=r+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i,this.y=s[1]*t+s[5]*r+s[9]*i,this.z=s[2]*t+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-r*l,this.z=r*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new re,Gl=new Ir;class di{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(s,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yr.copy(r.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),qr.subVectors(this.max,ur),yi.subVectors(e.a,ur),Mi.subVectors(e.b,ur),Ei.subVectors(e.c,ur),Fn.subVectors(Mi,yi),Nn.subVectors(Ei,Mi),Kn.subVectors(yi,Ei);let t=[0,-Fn.z,Fn.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,Fn.z,0,-Fn.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-Fn.y,Fn.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!oa(t,yi,Mi,Ei,qr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,yi,Mi,Ei,qr))?!1:(Kr.crossVectors(Fn,Nn),t=[Kr.x,Kr.y,Kr.z],oa(t,yi,Mi,Ei,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new re,new re,new re,new re,new re,new re,new re,new re],nn=new re,Yr=new di,yi=new re,Mi=new re,Ei=new re,Fn=new re,Nn=new re,Kn=new re,ur=new re,qr=new re,Kr=new re,jn=new re;function oa(n,e,t,r,i){for(let s=0,a=n.length-3;s<=a;s+=3){jn.fromArray(n,s);const o=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=r.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yd=new di,hr=new re,la=new re;class Os{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):yd.setFromPoints(e).getCenter(r);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(hr,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(la)),this.expandByPoint(hr.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new re,ca=new re,jr=new re,On=new re,ua=new re,Zr=new re,ha=new re;class Md{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){ca.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=On.dot(this.direction),l=-On.dot(jr),c=On.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ca).addScaledVector(jr,f),d}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const r=_n.dot(this.direction),i=_n.dot(_n)-r*r,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),r>a||s>i||((s>r||isNaN(r))&&(r=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,r,i,s){ua.subVectors(t,e),Zr.subVectors(r,e),ha.crossVectors(ua,Zr);let a=this.direction.dot(ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(Zr.crossVectors(On,Zr));if(l<0)return null;const c=o*this.direction.dot(ua.cross(On));if(c<0||l+c>a)return null;const u=-o*On.dot(ha);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,r,i,s,a,o,l,c,u,h,f,d,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,s,a,o,l,c,u,h,f,d,g,v,m)}set(e,t,r,i,s,a,o,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*s,t[5]=r[5]*s,t[6]=r[6]*s,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,s=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ed,e,Td)}lookAt(e,t,r){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Bn.crossVectors(r,Ht),Bn.lengthSq()===0&&(Math.abs(r.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Bn.crossVectors(r,Ht)),Bn.normalize(),Jr.crossVectors(Ht,Bn),i[0]=Bn.x,i[4]=Jr.x,i[8]=Ht.x,i[1]=Bn.y,i[5]=Jr.y,i[9]=Ht.y,i[2]=Bn.z,i[6]=Jr.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,s=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],d=r[13],g=r[2],v=r[6],m=r[10],p=r[14],T=r[3],E=r[7],x=r[11],A=r[15],C=i[0],b=i[4],R=i[8],y=i[12],_=i[1],D=i[5],P=i[9],L=i[13],N=i[2],X=i[6],z=i[10],Z=i[14],G=i[3],j=i[7],K=i[11],I=i[15];return s[0]=a*C+o*_+l*N+c*G,s[4]=a*b+o*D+l*X+c*j,s[8]=a*R+o*P+l*z+c*K,s[12]=a*y+o*L+l*Z+c*I,s[1]=u*C+h*_+f*N+d*G,s[5]=u*b+h*D+f*X+d*j,s[9]=u*R+h*P+f*z+d*K,s[13]=u*y+h*L+f*Z+d*I,s[2]=g*C+v*_+m*N+p*G,s[6]=g*b+v*D+m*X+p*j,s[10]=g*R+v*P+m*z+p*K,s[14]=g*y+v*L+m*Z+p*I,s[3]=T*C+E*_+x*N+A*G,s[7]=T*b+E*D+x*X+A*j,s[11]=T*R+E*P+x*z+A*K,s[15]=T*y+E*L+x*Z+A*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*f+r*c*f+i*o*d-r*l*d)+v*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+r*a*d+s*o*u-r*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-r*a*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=h*m*c-v*f*c+v*l*d-o*m*d-h*l*p+o*f*p,E=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,x=u*v*c-g*h*c+g*o*d-a*v*d-u*o*p+a*h*p,A=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,C=t*T+r*E+i*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=T*b,e[1]=(v*f*s-h*m*s-v*i*d+r*m*d+h*i*p-r*f*p)*b,e[2]=(o*m*s-v*l*s+v*i*c-r*m*c-o*i*p+r*l*p)*b,e[3]=(h*l*s-o*f*s-h*i*c+r*f*c+o*i*d-r*l*d)*b,e[4]=E*b,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*b,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*b,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*b,e[8]=x*b,e[9]=(g*h*s-u*v*s-g*r*d+t*v*d+u*r*p-t*h*p)*b,e[10]=(a*v*s-g*o*s+g*r*c-t*v*c-a*r*p+t*o*p)*b,e[11]=(u*o*s-a*h*s-u*r*c+t*h*c+a*r*d-t*o*d)*b,e[12]=A*b,e[13]=(u*v*i-g*h*i+g*r*f-t*v*f-u*r*m+t*h*m)*b,e[14]=(g*o*i-a*v*i-g*r*l+t*v*l+a*r*m-t*o*m)*b,e[15]=(a*h*i-u*o*i+u*r*l-t*h*l-a*r*f+t*o*f)*b,this}scale(e){const t=this.elements,r=e.x,i=e.y,s=e.z;return t[0]*=r,t[4]*=i,t[8]*=s,t[1]*=r,t[5]*=i,t[9]*=s,t[2]*=r,t[6]*=i,t[10]*=s,t[3]*=r,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),s=1-r,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+r,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+r,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,s,a){return this.set(1,r,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,v=a*u,m=a*h,p=o*h,T=l*c,E=l*u,x=l*h,A=r.x,C=r.y,b=r.z;return i[0]=(1-(v+p))*A,i[1]=(d+x)*A,i[2]=(g-E)*A,i[3]=0,i[4]=(d-x)*C,i[5]=(1-(f+p))*C,i[6]=(m+T)*C,i[7]=0,i[8]=(g+E)*b,i[9]=(m-T)*b,i[10]=(1-(f+v))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let s=Ti.set(i[0],i[1],i[2]).length();const a=Ti.set(i[4],i[5],i[6]).length(),o=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/s,u=1/a,h=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),r.x=s,r.y=a,r.z=o,this}makePerspective(e,t,r,i,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),u=2*s/(r-i),h=(t+e)/(t-e),f=(r+i)/(r-i);let d,g;if(o===Tn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Rs)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,s,a,o=Tn){const l=this.elements,c=1/(t-e),u=1/(r-i),h=1/(a-s),f=(t+e)*c,d=(r+i)*u;let g,v;if(o===Tn)g=(a+s)*h,v=-2*h;else if(o===Rs)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ti=new re,rn=new pt,Ed=new re(0,0,0),Td=new re(1,1,1),Bn=new re,Jr=new re,Ht=new re,Hl=new pt,Wl=new Ir;class Pn{constructor(e=0,t=0,r=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bd=0;const Xl=new re,bi=new Ir,xn=new pt,Qr=new re,fr=new re,Ad=new re,wd=new Ir,Yl=new re(1,0,0),ql=new re(0,1,0),Kl=new re(0,0,1),jl={type:"added"},Rd={type:"removed"},Ai={type:"childadded",child:null},fa={type:"childremoved",child:null};class Yt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new re,t=new Pn,r=new Ir,i=new re(1,1,1);function s(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Qr.copy(e):Qr.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(fr,Qr,this.up):xn.lookAt(Qr,fr,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(xn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rd),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=i,r;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Yt.DEFAULT_UP=new re(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new re,Sn=new re,da=new re,yn=new re,wi=new re,Ri=new re,Zl=new re,pa=new re,ma=new re,ga=new re,va=new ut,_a=new ut,xa=new ut;class an{constructor(e=new re,t=new re,r=new re){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),sn.subVectors(e,t),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,r,i,s){sn.subVectors(i,t),Sn.subVectors(r,t),da.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Sn),l=sn.dot(da),c=Sn.dot(Sn),u=Sn.dot(da),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,r,i,s,a,o,l){return this.getBarycoord(e,t,r,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,r,i,s,a){return va.setScalar(0),_a.setScalar(0),xa.setScalar(0),va.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,r),xa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(va,s.x),a.addScaledVector(_a,s.y),a.addScaledVector(xa,s.z),a}static isFrontFacing(e,t,r,i){return sn.subVectors(r,t),Sn.subVectors(e,t),sn.cross(Sn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,s){return an.getInterpolation(e,this.a,this.b,this.c,t,r,i,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,s=this.c;let a,o;wi.subVectors(i,r),Ri.subVectors(s,r),pa.subVectors(e,r);const l=wi.dot(pa),c=Ri.dot(pa);if(l<=0&&c<=0)return t.copy(r);ma.subVectors(e,i);const u=wi.dot(ma),h=Ri.dot(ma);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(r).addScaledVector(wi,a);ga.subVectors(e,s);const d=wi.dot(ga),g=Ri.dot(ga);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Ri,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Zl.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Zl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(r).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Sa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=r,it.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=it.workingColorSpace){if(e=ud(e,1),t=et(t,0,1),r=et(r,0,1),t===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+t):r+t-r*t,a=2*r-s;this.r=Sa(a,s,e+1/3),this.g=Sa(a,s,e),this.b=Sa(a,s,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const r=Nu[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return it.fromWorkingColorSpace(Ct.copy(this),e),Math.round(et(Ct.r*255,0,255))*65536+Math.round(et(Ct.g*255,0,255))*256+Math.round(et(Ct.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ct.copy(this),t);const r=Ct.r,i=Ct.g,s=Ct.b,a=Math.max(r,i,s),o=Math.min(r,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case r:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-r)/h+2;break;case s:l=(r-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=jt){it.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,r=Ct.g,i=Ct.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL($r);const r=ia(kn.h,$r.h,t),i=ia(kn.s,$r.s,t),s=ia(kn.l,$r.l,t);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*r+s[6]*i,this.g=s[1]*t+s[4]*r+s[7]*i,this.b=s[2]*t+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new tt;tt.NAMES=Nu;let Cd=0;class Bs extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ni,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(r.blending=this.blending),this.side!==Yn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oa&&(r.blendSrc=this.blendSrc),this.blendDst!==Ba&&(r.blendDst=this.blendDst),this.blendEquation!==ii&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(r.textures=s),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=t[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jo extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new re,es=new nt;let Pd=0;class cn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ol,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=cr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),r=kt(r,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}}class Ou extends cn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Bu extends cn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class wn extends cn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Dd=0;const Kt=new pt,ya=new Yt,Ci=new re,Wt=new di,dr=new di,Mt=new re;class Dn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Bu:Ou)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new qe().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,r){return Kt.makeTranslation(e,t,r),this.applyMatrix4(Kt),this}scale(e,t,r){return Kt.makeScale(e,t,r),this.applyMatrix4(Kt),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wn(r,3))}else{const r=Math.min(e.length,t.count);for(let i=0;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const s=t[r];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Wt.min,dr.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,dr.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(dr.min),Wt.expandByPoint(dr.max))}Wt.getCenter(r);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),Mt.add(Ci)),i=Math.max(i,r.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<r.count;R++)o[R]=new re,l[R]=new re;const c=new re,u=new re,h=new re,f=new nt,d=new nt,g=new nt,v=new re,m=new re;function p(R,y,_){c.fromBufferAttribute(r,R),u.fromBufferAttribute(r,y),h.fromBufferAttribute(r,_),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[R].add(v),o[y].add(v),o[_].add(v),l[R].add(m),l[y].add(m),l[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,y=T.length;R<y;++R){const _=T[R],D=_.start,P=_.count;for(let L=D,N=D+P;L<N;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new re,x=new re,A=new re,C=new re;function b(R){A.fromBufferAttribute(i,R),C.copy(A);const y=o[R];E.copy(y),E.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(C,y);const D=x.dot(l[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,D)}for(let R=0,y=T.length;R<y;++R){const _=T[R],D=_.start,P=_.count;for(let L=D,N=D+P;L<N;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const i=new re,s=new re,a=new re,o=new re,l=new re,c=new re,u=new re,h=new re;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,r);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new pt,Zn=new Md,ts=new Os,Ql=new re,ns=new re,is=new re,rs=new re,Ma=new re,ss=new re,$l=new re,as=new re;class Xt extends Yt{constructor(e=new Dn,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ma.fromBufferAttribute(h,e),a?ss.addScaledVector(Ma,u):ss.addScaledVector(Ma.sub(t),u))}t.add(ss)}return t}raycast(e,t){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ts.copy(r.boundingSphere),ts.applyMatrix4(s),Zn.copy(e.ray).recast(e.near),!(ts.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(ts,Ql)===null||Zn.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(s).invert(),Zn.copy(e.ray).applyMatrix4(Jl),!(r.boundingBox!==null&&Zn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,r){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,A=E;x<A;x+=3){const C=o.getX(x),b=o.getX(x+1),R=o.getX(x+2);i=os(this,p,e,r,c,u,h,C,b,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);i=os(this,a,e,r,c,u,h,T,E,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,A=E;x<A;x+=3){const C=x,b=x+1,R=x+2;i=os(this,p,e,r,c,u,h,C,b,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=m,E=m+1,x=m+2;i=os(this,a,e,r,c,u,h,T,E,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ud(n,e,t,r,i,s,a,o){let l;if(e.side===zt?l=r.intersectTriangle(a,s,i,!0,o):l=r.intersectTriangle(i,s,a,e.side===Yn,o),l===null)return null;as.copy(o),as.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:n}}function os(n,e,t,r,i,s,a,o,l,c){n.getVertexPosition(o,ns),n.getVertexPosition(l,is),n.getVertexPosition(c,rs);const u=Ud(n,e,t,r,ns,is,rs,$l);if(u){const h=new re;an.getBarycoord($l,ns,is,rs,h),i&&(u.uv=an.getInterpolatedAttribute(i,o,l,c,h,new nt)),s&&(u.uv1=an.getInterpolatedAttribute(s,o,l,c,h,new nt)),a&&(u.normal=an.getInterpolatedAttribute(a,o,l,c,h,new re),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new re,materialIndex:0};an.getNormal(ns,is,rs,f.normal),u.face=f,u.barycoord=h}return u}class Fr extends Dn{constructor(e=1,t=1,r=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,a,s,0),g("z","y","x",1,-1,r,t,-e,a,s,1),g("x","z","y",1,1,e,r,t,i,a,2),g("x","z","y",1,-1,e,r,-t,i,a,3),g("x","y","z",1,-1,e,t,r,i,s,4),g("x","y","z",-1,-1,e,t,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(u,3)),this.setAttribute("uv",new wn(h,2));function g(v,m,p,T,E,x,A,C,b,R,y){const _=x/b,D=A/R,P=x/2,L=A/2,N=C/2,X=b+1,z=R+1;let Z=0,G=0;const j=new re;for(let K=0;K<z;K++){const I=K*D-L;for(let W=0;W<X;W++){const ee=W*_-P;j[v]=ee*T,j[m]=I*E,j[p]=N,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[p]=C>0?1:-1,u.push(j.x,j.y,j.z),h.push(W/b),h.push(1-K/R),Z+=1}}for(let K=0;K<R;K++)for(let I=0;I<b;I++){const W=f+I+X*K,ee=f+I+X*(K+1),F=f+(I+1)+X*(K+1),B=f+(I+1)+X*K;l.push(W,ee,B),l.push(ee,F,B),G+=6}o.addGroup(d,G,y),d+=G,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const r=Hi(n[t]);for(const i in r)e[i]=r[i]}return e}function Ld(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ku(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Qo={clone:Hi,merge:Ut};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class zu extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new re,ec=new nt,tc=new nt;class Zt extends zu{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,r,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*r/c,i*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Di=1;class Nd extends Yt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(Pi,Di,e,t);i.layers=this.layers,this.add(i);const s=new Zt(Pi,Di,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Pi,Di,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Pi,Di,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Pi,Di,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Pi,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rs)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,s),e.setRenderTarget(r,1,i),e.render(t,a),e.setRenderTarget(r,2,i),e.render(t,o),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Vu extends It{constructor(e=[],t=zi,r,i,s,a,o,l,c,u){super(e,t,r,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Od extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new Vu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Hi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zt,blending:bn});s.uniforms.tEquirect.value=t;const a=new Xt(i,s),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=Jt),new Nd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,r=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(s)}}class ls extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ls;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class kd extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zd extends cn{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ta=new re,Vd=new re,Gd=new qe;class ti{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Ta.subVectors(r,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ta),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Gd.getNormalMatrix(e),i=this.coplanarPoint(Ta).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Os,cs=new re;class Gu{constructor(e=new ti,t=new ti,r=new ti,i=new ti,s=new ti,a=new ti){this.planes=[e,t,r,i,s,a]}set(e,t,r,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Tn){const r=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],T=i[13],E=i[14],x=i[15];if(r[0].setComponents(l-s,f-c,m-d,x-p).normalize(),r[1].setComponents(l+s,f+c,m+d,x+p).normalize(),r[2].setComponents(l+a,f+u,m+g,x+T).normalize(),r[3].setComponents(l-a,f-u,m-g,x-T).normalize(),r[4].setComponents(l-o,f-h,m-v,x-E).normalize(),t===Tn)r[5].setComponents(l+o,f+h,m+v,x+E).normalize();else if(t===Rs)r[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(cs.x=i.normal.x>0?e.max.x:e.min.x,cs.y=i.normal.y>0?e.max.y:e.min.y,cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hu extends It{constructor(e,t,r=hi,i,s,a,o=ln,l=ln,c,u=Tr){if(u!==Tr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pi extends Dn{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(r),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*f-a;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,x=T+c*(p+1),A=T+1+c*(p+1),C=T+1+c*p;d.push(E,x,C),d.push(x,A,C)}this.setIndex(d),this.setAttribute("position",new wn(g,3)),this.setAttribute("normal",new wn(v,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wu extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xu extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yu extends zu{constructor(e=-1,t=1,r=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,a=r+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hd extends Dn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Wd extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class qu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nc(){return performance.now()}class _r{constructor(e){this.value=e}clone(){return new _r(this.value.clone===void 0?this.value:this.value.clone())}}function ic(n,e,t,r){const i=Xd(r);switch(t){case Tu:return n*e;case Au:return n*e;case wu:return n*e*2;case Ru:return n*e/i.components*i.byteLength;case qo:return n*e/i.components*i.byteLength;case Cu:return n*e*2/i.components*i.byteLength;case Ko:return n*e*2/i.components*i.byteLength;case bu:return n*e*3/i.components*i.byteLength;case on:return n*e*4/i.components*i.byteLength;case jo:return n*e*4/i.components*i.byteLength;case vs:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xs:case Ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:case $a:return Math.max(n,16)*Math.max(e,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(e,8)/2;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ys:case _o:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pu:case So:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yo:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xd(n){switch(n){case Cn:case yu:return{byteLength:1,components:1};case Mr:case Mu:case Yi:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case hi:case Wo:case En:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ku(){let n=null,e=!1,t=null,r=null;function i(s,a){t(s,a),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Yd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:qd,alphahash_pars_fragment:Kd,alphamap_fragment:jd,alphamap_pars_fragment:Zd,alphatest_fragment:Jd,alphatest_pars_fragment:Qd,aomap_fragment:$d,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:sp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:up,clipping_planes_vertex:hp,color_fragment:fp,color_pars_fragment:dp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:_p,displacementmap_pars_vertex:xp,displacementmap_vertex:Sp,emissivemap_fragment:yp,emissivemap_pars_fragment:Mp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:bp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:wp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Dp,fog_fragment:Up,fog_pars_fragment:Lp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Fp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:qp,lights_fragment_end:Kp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:$p,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:rm,morphinstance_vertex:sm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:um,normal_fragment_maps:hm,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:xm,opaque_fragment:Sm,packing:ym,premultiplied_alpha_fragment:Mm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:bm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Dm,skinbase_vertex:Um,skinning_pars_vertex:Lm,skinning_vertex:Im,skinnormal_vertex:Fm,specularmap_fragment:Nm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Vm,uv_pars_fragment:Gm,uv_pars_vertex:Hm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:Ym,background_frag:qm,backgroundCube_vert:Km,backgroundCube_frag:jm,cube_vert:Zm,cube_frag:Jm,depth_vert:Qm,depth_frag:$m,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:rg,linedashed_frag:sg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:hg,meshnormal_vert:fg,meshnormal_frag:dg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:vg,meshtoon_vert:_g,meshtoon_frag:xg,points_vert:Sg,points_frag:yg,shadow_vert:Mg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:bg},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},dn={basic:{uniforms:Ut([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ut([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ut([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ut([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ut([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ut([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ut([Pe.points,Pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ut([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ut([Pe.common,Pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ut([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ut([Pe.sprite,Pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ut([Pe.common,Pe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ut([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};dn.physical={uniforms:Ut([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const us={r:0,b:0,g:0},Qn=new Pn,Ag=new pt;function wg(n,e,t,r,i,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const A=g(E);A===null?p(o,l):A&&A.isColor&&(p(A,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Ns)?(u===void 0&&(u=new Xt(new Fr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Hi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Qn.copy(x.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Qn)),u.material.toneMapped=it.getTransfer(A.colorSpace)!==rt,(h!==A||f!==A.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Xt(new pi(2,2),new un({name:"BackgroundMaterial",uniforms:Hi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=it.getTransfer(A.colorSpace)!==rt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(us,ku(n)),r.buffers.color.setClear(us.r,us.g,us.b,x,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:v,addToRenderList:m,dispose:T}}function Rg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},i=f(null);let s=i,a=!1;function o(_,D,P,L,N){let X=!1;const z=h(L,P,D);s!==z&&(s=z,c(s.object)),X=d(_,L,P,N),X&&g(_,L,P,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(_,D,P,L),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,D,P){const L=P.wireframe===!0;let N=r[_.id];N===void 0&&(N={},r[_.id]=N);let X=N[D.id];X===void 0&&(X={},N[D.id]=X);let z=X[L];return z===void 0&&(z=f(l()),X[L]=z),z}function f(_){const D=[],P=[],L=[];for(let N=0;N<t;N++)D[N]=0,P[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,D,P,L){const N=s.attributes,X=D.attributes;let z=0;const Z=P.getAttributes();for(const G in Z)if(Z[G].location>=0){const K=N[G];let I=X[G];if(I===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(I=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(I=_.instanceColor)),K===void 0||K.attribute!==I||I&&K.data!==I.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function g(_,D,P,L){const N={},X=D.attributes;let z=0;const Z=P.getAttributes();for(const G in Z)if(Z[G].location>=0){let K=X[G];K===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(K=_.instanceColor));const I={};I.attribute=K,K&&K.data&&(I.data=K.data),N[G]=I,z++}s.attributes=N,s.attributesNum=z,s.index=L}function v(){const _=s.newAttributes;for(let D=0,P=_.length;D<P;D++)_[D]=0}function m(_){p(_,0)}function p(_,D){const P=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;P[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),N[_]!==D&&(n.vertexAttribDivisor(_,D),N[_]=D)}function T(){const _=s.newAttributes,D=s.enabledAttributes;for(let P=0,L=D.length;P<L;P++)D[P]!==_[P]&&(n.disableVertexAttribArray(P),D[P]=0)}function E(_,D,P,L,N,X,z){z===!0?n.vertexAttribIPointer(_,D,P,N,X):n.vertexAttribPointer(_,D,P,L,N,X)}function x(_,D,P,L){v();const N=L.attributes,X=P.getAttributes(),z=D.defaultAttributeValues;for(const Z in X){const G=X[Z];if(G.location>=0){let j=N[Z];if(j===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const K=j.normalized,I=j.itemSize,W=e.get(j);if(W===void 0)continue;const ee=W.buffer,F=W.type,B=W.bytesPerElement,$=F===n.INT||F===n.UNSIGNED_INT||j.gpuType===Wo;if(j.isInterleavedBufferAttribute){const H=j.data,ne=H.stride,ve=j.offset;if(H.isInstancedInterleavedBuffer){for(let _e=0;_e<G.locationSize;_e++)p(G.location+_e,H.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let _e=0;_e<G.locationSize;_e++)m(G.location+_e);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let _e=0;_e<G.locationSize;_e++)E(G.location+_e,I/G.locationSize,F,K,ne*B,(ve+I/G.locationSize*_e)*B,$)}else{if(j.isInstancedBufferAttribute){for(let H=0;H<G.locationSize;H++)p(G.location+H,j.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let H=0;H<G.locationSize;H++)m(G.location+H);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let H=0;H<G.locationSize;H++)E(G.location+H,I/G.locationSize,F,K,I*B,I/G.locationSize*H*B,$)}}else if(z!==void 0){const K=z[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(G.location,K);break;case 3:n.vertexAttrib3fv(G.location,K);break;case 4:n.vertexAttrib4fv(G.location,K);break;default:n.vertexAttrib1fv(G.location,K)}}}}T()}function A(){R();for(const _ in r){const D=r[_];for(const P in D){const L=D[P];for(const N in L)u(L[N].object),delete L[N];delete D[P]}delete r[_]}}function C(_){if(r[_.id]===void 0)return;const D=r[_.id];for(const P in D){const L=D[P];for(const N in L)u(L[N].object),delete L[N];delete D[P]}delete r[_.id]}function b(_){for(const D in r){const P=r[D];if(P[_.id]===void 0)continue;const L=P[_.id];for(const N in L)u(L[N].object),delete L[N];delete P[_.id]}}function R(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Cg(n,e,t){let r;function i(c){r=c}function s(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(r,c,u,h),t.update(u,r,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,r,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,r,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pg(n,e,t,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==on&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Cn&&r.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==En&&!R)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function Dg(n){const e=this;let t=null,r=0,i=!1,s=!1;const a=new ti,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||i;return i=f,r=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:r,E=T*4;let x=p.clippingState||null;l.value=x,x=u(g,f,E,d);for(let A=0;A!==E;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==v;++E,x+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ug(n){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=zi:o===qa&&(a.mapping=Vi),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Od(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}const Ii=4,rc=[.125,.215,.35,.446,.526,.582],ri=20,ba=new Yu,sc=new tt;let Aa=null,wa=0,Ra=0,Ca=!1;const ni=(1+Math.sqrt(5))/2,Ui=1/ni,ac=[new re(-ni,Ui,0),new re(ni,Ui,0),new re(-Ui,0,ni),new re(Ui,0,ni),new re(0,ni,-Ui),new re(0,ni,Ui),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],Lg=new re;class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100,s={}){const{size:a=256,position:o=Lg}=s;Aa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,wa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Yi,format:on,colorSpace:Gi,depthBuffer:!1},i=lc(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(s)),this._blurMaterial=Fg(s,e,t)}return i}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,r,i,s){const l=new Zt(90,1,t,r),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(sc),h.toneMapping=Wn,h.autoClear=!1;const g=new Jo({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),v=new Xt(new Fr,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(sc),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const x=this._cubeSize;hs(i,E*x,T>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===zi||e.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,ba)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ac[(i-s-1)%ac.length];this._blur(e,s-1,s,a,o)}t.autoClear=r}_blur(e,t,r,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",s),this._halfBlur(a,e,r,r,i,"longitudinal",s)}_halfBlur(e,t,r,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Xt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ri-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ri;m>ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let T=0;for(let b=0;b<ri;++b){const R=b/v,y=Math.exp(-R*R/2);p.push(y),b===0?T+=y:b<m&&(T+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-r;const x=this._sizeLods[i],A=3*x*(i>E-Ii?i-E+Ii:0),C=4*(this._cubeSize-x);hs(t,A,C,3*x,2*x),l.setRenderTarget(t),l.render(h,ba)}}function Ig(n){const e=[],t=[],r=[];let i=n;const s=n-Ii+1+rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>n-Ii?l=rc[a-n+Ii-1]:a===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*d),E=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const b=C%3*2/3-1,R=C>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];T.set(y,v*g*C),E.set(f,m*g*C);const _=[C,C,C,C,C,C];x.set(_,p*g*C)}const A=new Dn;A.setAttribute("position",new cn(T,v)),A.setAttribute("uv",new cn(E,m)),A.setAttribute("faceIndex",new cn(x,p)),e.push(A),i>Ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function lc(n,e,t){const r=new qn(n,e,t);return r.texture.mapping=Ns,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hs(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function Fg(n,e,t){const r=new Float32Array(ri),i=new re(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function cc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function uc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(n){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===qa,u=l===zi||l===Vi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new oc(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new oc(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function Og(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&Ms("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Bg(n,e,t,r){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let E=0,x=T.length;E<x;E+=3){const A=T[E+0],C=T[E+1],b=T[E+2];f.push(A,C,C,b,b,A)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,x=T.length/3-1;E<x;E+=3){const A=E+0,C=E+1,b=E+2;f.push(A,C,C,b,b,A)}}else return;const m=new(Lu(f)?Bu:Ou)(f,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function kg(n,e,t){let r;function i(f){r=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(r,d,s,f*a),t.update(d,r,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(r,d,s,f*a,g),t.update(d,r,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,r,1)}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(r,d,0,s,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*v[T];t.update(p,r,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function Vg(n,e,t){const r=new WeakMap,i=new ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(o);if(f===void 0||f.count!==h){let _=function(){R.dispose(),r.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*h),R=new Iu(b,A,C,h);R.type=En,R.needsUpdate=!0;const y=x*4;for(let D=0;D<h;D++){const P=p[D],L=T[D],N=E[D],X=A*C*4*D;for(let z=0;z<P.count;z++){const Z=z*y;g===!0&&(i.fromBufferAttribute(P,z),b[X+Z+0]=i.x,b[X+Z+1]=i.y,b[X+Z+2]=i.z,b[X+Z+3]=0),v===!0&&(i.fromBufferAttribute(L,z),b[X+Z+4]=i.x,b[X+Z+5]=i.y,b[X+Z+6]=i.z,b[X+Z+7]=0),m===!0&&(i.fromBufferAttribute(N,z),b[X+Z+8]=i.x,b[X+Z+9]=i.y,b[X+Z+10]=i.z,b[X+Z+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new nt(A,C)},r.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Gg(n,e,t,r){let i=new WeakMap;function s(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ju=new It,hc=new Hu(1,1),Zu=new Iu,Ju=new Sd,Qu=new Vu,fc=[],dc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function Ki(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let s=fc[i];if(s===void 0&&(s=new Float32Array(i),fc[i]=s),e!==0){r.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ks(n,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function qg(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,r))return;gc.set(r),n.uniformMatrix2fv(this.addr,!1,gc),_t(t,r)}}function Kg(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,r))return;mc.set(r),n.uniformMatrix3fv(this.addr,!1,mc),_t(t,r)}}function jg(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,r))return;pc.set(r),n.uniformMatrix4fv(this.addr,!1,pc),_t(t,r)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function rv(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);let s;this.type===n.SAMPLER_2D_SHADOW?(hc.compareFunction=Uu,s=hc):s=ju,t.setTexture2D(e||s,i)}function sv(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||Ju,i)}function av(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||Qu,i)}function ov(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||Zu,i)}function lv(n){switch(n){case 5126:return Hg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return Kg;case 35676:return jg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return $g;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(n,e){n.uniform1fv(this.addr,e)}function uv(n,e){const t=Ki(e,this.size,2);n.uniform2fv(this.addr,t)}function hv(n,e){const t=Ki(e,this.size,3);n.uniform3fv(this.addr,t)}function fv(n,e){const t=Ki(e,this.size,4);n.uniform4fv(this.addr,t)}function dv(n,e){const t=Ki(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pv(n,e){const t=Ki(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mv(n,e){const t=Ki(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gv(n,e){n.uniform1iv(this.addr,e)}function vv(n,e){n.uniform2iv(this.addr,e)}function _v(n,e){n.uniform3iv(this.addr,e)}function xv(n,e){n.uniform4iv(this.addr,e)}function Sv(n,e){n.uniform1uiv(this.addr,e)}function yv(n,e){n.uniform2uiv(this.addr,e)}function Mv(n,e){n.uniform3uiv(this.addr,e)}function Ev(n,e){n.uniform4uiv(this.addr,e)}function Tv(n,e,t){const r=this.cache,i=e.length,s=ks(t,i);vt(r,s)||(n.uniform1iv(this.addr,s),_t(r,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ju,s[a])}function bv(n,e,t){const r=this.cache,i=e.length,s=ks(t,i);vt(r,s)||(n.uniform1iv(this.addr,s),_t(r,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ju,s[a])}function Av(n,e,t){const r=this.cache,i=e.length,s=ks(t,i);vt(r,s)||(n.uniform1iv(this.addr,s),_t(r,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qu,s[a])}function wv(n,e,t){const r=this.cache,i=e.length,s=ks(t,i);vt(r,s)||(n.uniform1iv(this.addr,s),_t(r,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Zu,s[a])}function Rv(n){switch(n){case 5126:return cv;case 35664:return uv;case 35665:return hv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return vv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return Sv;case 36294:return yv;case 36295:return Mv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return wv}}class Cv{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=lv(t.type)}}class Pv{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rv(t.type)}}class Dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],r)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function vc(n,e){n.seq.push(e),n.map[e.id]=e}function Uv(n,e,t){const r=n.name,i=r.length;for(Pa.lastIndex=0;;){const s=Pa.exec(r),a=Pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){vc(t,c===void 0?new Cv(o,n,e):new Pv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Dv(o),vc(t,h)),t=h}}}class Es{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Uv(s,a,this)}}setValue(e,t,r,i){const s=this.map[t];s!==void 0&&s.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&r.push(a)}return r}}function _c(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const Lv=37297;let Iv=0;function Fv(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}const xc=new qe;function Nv(n){it._getMatrix(xc,it.workingColorSpace,n);const e=`mat3( ${xc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case ws:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sc(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Fv(n.getShaderSource(e),a)}else return i}function Ov(n,e){const t=Nv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bv(n,e){let t;switch(e){case Yf:t="Linear";break;case qf:t="Reinhard";break;case Kf:t="Cineon";break;case jf:t="ACESFilmic";break;case Jf:t="AgX";break;case Qf:t="Neutral";break;case Zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new re;function kv(){it.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Vv(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Gv(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=n.getActiveAttrib(e,i),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function yc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(n){return n.replace(Hv,Xv)}const Wv=new Map;function Xv(n,e){let t=je[e];if(t===void 0){const r=Wv.get(e);if(r!==void 0)t=je[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return To(t)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(n){return n.replace(Yv,qv)}function qv(n,e,t,r){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function jv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zi:case Vi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Jv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Wf:e="ENVMAP_BLENDING_MIX";break;case Xf:e="ENVMAP_BLENDING_ADD";break}return e}function Qv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function $v(n,e,t,r){const i=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kv(t),c=jv(t),u=Zv(t),h=Jv(t),f=Qv(t),d=zv(t),g=Vv(s),v=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?je.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Ov("linearToOutputTexel",t.outputColorSpace),kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=To(a),a=yc(a,t),a=Mc(a,t),o=To(o),o=yc(o,t),o=Mc(o,t),a=Ec(a),o=Ec(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+a,x=T+p+o,A=_c(i,i.VERTEX_SHADER,E),C=_c(i,i.FRAGMENT_SHADER,x);i.attachShader(v,A),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function b(D){if(n.debug.checkShaderErrors){const P=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(C).trim();let X=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,v,A,C);else{const Z=Sc(i,A,"vertex"),G=Sc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+Z+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||N==="")&&(z=!1);z&&(D.diagnostics={runnable:X,programLog:P,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(A),i.deleteShader(C),R=new Es(i,v),y=Gv(i,v)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,Lv)),_},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let e_=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new n_(e),t.set(e,r)),r}}class n_{constructor(e){this.id=e_++,this.code=e,this.usedTimes=0}}function i_(n,e,t,r,i,s,a){const o=new Fu,l=new t_,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,_,D,P,L){const N=P.fog,X=L.geometry,z=y.isMeshStandardMaterial?P.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),G=Z&&Z.mapping===Ns?Z.image.height:null,j=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,I=K!==void 0?K.length:0;let W=0;X.morphAttributes.position!==void 0&&(W=1),X.morphAttributes.normal!==void 0&&(W=2),X.morphAttributes.color!==void 0&&(W=3);let ee,F,B,$;if(j){const Ge=dn[j];ee=Ge.vertexShader,F=Ge.fragmentShader}else ee=y.vertexShader,F=y.fragmentShader,l.update(y),B=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);const H=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),ve=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,xe=!!y.map,he=!!y.matcap,De=!!Z,U=!!y.aoMap,Be=!!y.lightMap,we=!!y.bumpMap,Ce=!!y.normalMap,ae=!!y.displacementMap,Ae=!!y.emissiveMap,de=!!y.metalnessMap,M=!!y.roughnessMap,S=y.anisotropy>0,O=y.clearcoat>0,J=y.dispersion>0,Q=y.iridescence>0,se=y.sheen>0,fe=y.transmission>0,le=S&&!!y.anisotropyMap,me=O&&!!y.clearcoatMap,Le=O&&!!y.clearcoatNormalMap,ce=O&&!!y.clearcoatRoughnessMap,ye=Q&&!!y.iridescenceMap,Ee=Q&&!!y.iridescenceThicknessMap,Te=se&&!!y.sheenColorMap,oe=se&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Ne=!!y.specularColorMap,Ke=!!y.specularIntensityMap,k=fe&&!!y.transmissionMap,ue=fe&&!!y.thicknessMap,te=!!y.gradientMap,pe=!!y.alphaMap,Se=y.alphaTest>0,ge=!!y.alphaHash,Oe=!!y.extensions;let Ye=Wn;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const ke={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:F,defines:y.defines,customVertexShaderID:B,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:ve,instancingColor:ve&&L.instanceColor!==null,instancingMorph:ve&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Gi,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:he,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Be,bumpMap:we,normalMap:Ce,displacementMap:f&&ae,emissiveMap:Ae,normalMapObjectSpace:Ce&&y.normalMapType===nd,normalMapTangentSpace:Ce&&y.normalMapType===td,metalnessMap:de,roughnessMap:M,anisotropy:S,anisotropyMap:le,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:Le,clearcoatRoughnessMap:ce,dispersion:J,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:Ee,sheen:se,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:Ie,specularColorMap:Ne,specularIntensityMap:Ke,transmission:fe,transmissionMap:k,thicknessMap:ue,gradientMap:te,opaque:y.transparent===!1&&y.blending===Ni&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:Se,alphaHash:ge,combine:y.combine,mapUv:xe&&v(y.map.channel),aoMapUv:U&&v(y.aoMap.channel),lightMapUv:Be&&v(y.lightMap.channel),bumpMapUv:we&&v(y.bumpMap.channel),normalMapUv:Ce&&v(y.normalMap.channel),displacementMapUv:ae&&v(y.displacementMap.channel),emissiveMapUv:Ae&&v(y.emissiveMap.channel),metalnessMapUv:de&&v(y.metalnessMap.channel),roughnessMapUv:M&&v(y.roughnessMap.channel),anisotropyMapUv:le&&v(y.anisotropyMap.channel),clearcoatMapUv:me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:oe&&v(y.sheenRoughnessMap.channel),specularMapUv:Ie&&v(y.specularMap.channel),specularColorMapUv:Ne&&v(y.specularColorMap.channel),specularIntensityMapUv:Ke&&v(y.specularIntensityMap.channel),transmissionMapUv:k&&v(y.transmissionMap.channel),thicknessMapUv:ue&&v(y.thicknessMap.channel),alphaMapUv:pe&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ce||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(xe||pe),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:Ae&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||_e)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)_.push(D),_.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(_,y),E(_,y),_.push(n.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function T(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function E(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const _=g[y.type];let D;if(_){const P=dn[_];D=Qo.clone(P.uniforms)}else D=y.uniforms;return D}function A(y,_){let D;for(let P=0,L=u.length;P<L;P++){const N=u[P];if(N.cacheKey===_){D=N,++D.usedTimes;break}}return D===void 0&&(D=new $v(n,_,y,s),u.push(D)),D}function C(y){if(--y.usedTimes===0){const _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:R}}function r_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function r(a){n.delete(a)}function i(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:s}}function s_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ac(){const n=[];let e=0;const t=[],r=[],i=[];function s(){e=0,t.length=0,r.length=0,i.length=0}function a(h,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?r.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=a(h,f,d,g,v,m);d.transmission>0?r.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||s_),r.length>1&&r.sort(f||bc),i.length>1&&i.sort(f||bc)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function a_(){let n=new WeakMap;function e(r,i){const s=n.get(r);let a;return s===void 0?(a=new Ac,n.set(r,[a])):i>=s.length?(a=new Ac,s.push(a)):a=s[i],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function o_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new tt};break;case"SpotLight":t={position:new re,direction:new re,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function l_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let c_=0;function u_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function h_(n){const e=new o_,t=l_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new re);const i=new re,s=new pt,a=new pt;function o(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)r.probe[y].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,T=0,E=0,x=0,A=0,C=0,b=0;c.sort(u_);for(let y=0,_=c.length;y<_;y++){const D=c[y],P=D.color,L=D.intensity,N=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*L,h+=P.g*L,f+=P.b*L;else if(D.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(D.sh.coefficients[z],L);b++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,G=t.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,r.directionalShadow[d]=G,r.directionalShadowMap[d]=X,r.directionalShadowMatrix[d]=D.shadow.matrix,T++}r.directional[d]=z,d++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(P).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,r.spot[v]=z;const Z=D.shadow;if(D.map&&(r.spotLightMap[A]=D.map,A++,Z.updateMatrices(D),D.castShadow&&C++),r.spotLightMatrix[v]=Z.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,r.spotShadow[v]=G,r.spotShadowMap[v]=X,x++}v++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(P).multiplyScalar(L),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const Z=D.shadow,G=t.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,r.pointShadow[g]=G,r.pointShadowMap[g]=X,r.pointShadowMatrix[g]=D.shadow.matrix,E++}r.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(L),z.groundColor.copy(D.groundColor).multiplyScalar(L),r.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=f;const R=r.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==b)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=x+A-C,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=b,r.version=c_++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=r.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const x=r.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=r.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=r.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:r}}function wc(n){const e=new h_(n),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function s(u){t.push(u)}function a(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function f_(n){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new wc(n),e.set(i,[o])):s>=a.length?(o=new wc(n),a.push(o)):o=a[s],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m_(n,e,t){let r=new Gu;const i=new nt,s=new nt,a=new ut,o=new Wu({depthPacking:Du}),l=new Xu,c={},u=t.maxTextureSize,h={[Yn]:zt,[zt]:Yn,[pn]:pn},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:d_,fragmentShader:p_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let p=this.type;this.render=function(C,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),_=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),P=n.state;P.setBlending(bn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=p!==Mn&&this.type===Mn,N=p===Mn&&this.type!==Mn;for(let X=0,z=C.length;X<z;X++){const Z=C[X],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const j=G.getFrameExtents();if(i.multiply(j),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,G.mapSize.y=s.y)),G.map===null||L===!0||N===!0){const I=this.type!==Mn?{minFilter:ln,magFilter:ln}:{};G.map!==null&&G.map.dispose(),G.map=new qn(i.x,i.y,I),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const K=G.getViewportCount();for(let I=0;I<K;I++){const W=G.getViewport(I);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),P.viewport(a),G.updateMatrices(Z,I),r=G.getFrustum(),x(b,R,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&T(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,_,D)};function T(C,b){const R=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qn(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,R,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,R,d,v,null)}function E(C,b,R,y){let _=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)_=D;else if(_=R.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const P=_.uuid,L=b.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let X=N[L];X===void 0&&(X=_.clone(),N[L]=X,b.addEventListener("dispose",A)),_=X}if(_.visible=b.visible,_.wireframe=b.wireframe,y===Mn?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:h[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=n.properties.get(_);P.light=R}return _}function x(C,b,R,y,_){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Mn)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const L=e.update(C),N=C.material;if(Array.isArray(N)){const X=L.groups;for(let z=0,Z=X.length;z<Z;z++){const G=X[z],j=N[G.materialIndex];if(j&&j.visible){const K=E(C,j,y,_);C.onBeforeShadow(n,C,b,R,L,K,G),n.renderBufferDirect(R,null,L,K,C,G),C.onAfterShadow(n,C,b,R,L,K,G)}}}else if(N.visible){const X=E(C,N,y,_);C.onBeforeShadow(n,C,b,R,L,X,null),n.renderBufferDirect(R,null,L,X,C,null),C.onAfterShadow(n,C,b,R,L,X,null)}}const P=C.children;for(let L=0,N=P.length;L<N;L++)x(P[L],b,R,y,_)}function A(C){C.target.removeEventListener("dispose",A);for(const R in c){const y=c[R],_=C.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const g_={[ka]:za,[Va]:Wa,[Ga]:Xa,[ki]:Ha,[za]:ka,[Wa]:Va,[Xa]:Ga,[Ha]:ki};function v_(n,e){function t(){let k=!1;const ue=new ut;let te=null;const pe=new ut(0,0,0,0);return{setMask:function(Se){te!==Se&&!k&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){k=Se},setClear:function(Se,ge,Oe,Ye,ke){ke===!0&&(Se*=Ye,ge*=Ye,Oe*=Ye),ue.set(Se,ge,Oe,Ye),pe.equals(ue)===!1&&(n.clearColor(Se,ge,Oe,Ye),pe.copy(ue))},reset:function(){k=!1,te=null,pe.set(-1,0,0,0)}}}function r(){let k=!1,ue=!1,te=null,pe=null,Se=null;return{setReversed:function(ge){if(ue!==ge){const Oe=e.get("EXT_clip_control");ge?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ue=ge;const Ye=Se;Se=null,this.setClear(Ye)}},getReversed:function(){return ue},setTest:function(ge){ge?H(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(ge){te!==ge&&!k&&(n.depthMask(ge),te=ge)},setFunc:function(ge){if(ue&&(ge=g_[ge]),pe!==ge){switch(ge){case ka:n.depthFunc(n.NEVER);break;case za:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case ki:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Wa:n.depthFunc(n.GREATER);break;case Xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ge}},setLocked:function(ge){k=ge},setClear:function(ge){Se!==ge&&(ue&&(ge=1-ge),n.clearDepth(ge),Se=ge)},reset:function(){k=!1,te=null,pe=null,Se=null,ue=!1}}}function i(){let k=!1,ue=null,te=null,pe=null,Se=null,ge=null,Oe=null,Ye=null,ke=null;return{setTest:function(Ge){k||(Ge?H(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!k&&(n.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,st,at){(te!==Ge||pe!==st||Se!==at)&&(n.stencilFunc(Ge,st,at),te=Ge,pe=st,Se=at)},setOp:function(Ge,st,at){(ge!==Ge||Oe!==st||Ye!==at)&&(n.stencilOp(Ge,st,at),ge=Ge,Oe=st,Ye=at)},setLocked:function(Ge){k=Ge},setClear:function(Ge){ke!==Ge&&(n.clearStencil(Ge),ke=Ge)},reset:function(){k=!1,ue=null,te=null,pe=null,Se=null,ge=null,Oe=null,Ye=null,ke=null}}}const s=new t,a=new r,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,T=null,E=null,x=null,A=null,C=null,b=new tt(0,0,0),R=0,y=!1,_=null,D=null,P=null,L=null,N=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=Z>=2);let j=null,K={};const I=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),ee=new ut().fromArray(I),F=new ut().fromArray(W);function B(k,ue,te,pe){const Se=new Uint8Array(4),ge=n.createTexture();n.bindTexture(k,ge),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<te;Oe++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ue+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ge}const $={};$[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(n.DEPTH_TEST),a.setFunc(ki),we(!1),Ce(Ul),H(n.CULL_FACE),U(bn);function H(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ne(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ve(k,ue){return h[k]!==ue?(n.bindFramebuffer(k,ue),h[k]=ue,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(k,ue){let te=d,pe=!1;if(k){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));const Se=k.textures;if(te.length!==Se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Oe=Se.length;ge<Oe;ge++)te[ge]=n.COLOR_ATTACHMENT0+ge;te.length=Se.length,pe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,pe=!0);pe&&n.drawBuffers(te)}function xe(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const he={[ii]:n.FUNC_ADD,[wf]:n.FUNC_SUBTRACT,[Rf]:n.FUNC_REVERSE_SUBTRACT};he[Cf]=n.MIN,he[Pf]=n.MAX;const De={[Df]:n.ZERO,[Uf]:n.ONE,[Lf]:n.SRC_COLOR,[Oa]:n.SRC_ALPHA,[kf]:n.SRC_ALPHA_SATURATE,[Of]:n.DST_COLOR,[Ff]:n.DST_ALPHA,[If]:n.ONE_MINUS_SRC_COLOR,[Ba]:n.ONE_MINUS_SRC_ALPHA,[Bf]:n.ONE_MINUS_DST_COLOR,[Nf]:n.ONE_MINUS_DST_ALPHA,[zf]:n.CONSTANT_COLOR,[Vf]:n.ONE_MINUS_CONSTANT_COLOR,[Gf]:n.CONSTANT_ALPHA,[Hf]:n.ONE_MINUS_CONSTANT_ALPHA};function U(k,ue,te,pe,Se,ge,Oe,Ye,ke,Ge){if(k===bn){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(H(n.BLEND),v=!0),k!==Af){if(k!==m||Ge!==y){if((p!==ii||x!==ii)&&(n.blendEquation(n.FUNC_ADD),p=ii,x=ii),Ge)switch(k){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,E=null,A=null,C=null,b.set(0,0,0),R=0,m=k,y=Ge}return}Se=Se||ue,ge=ge||te,Oe=Oe||pe,(ue!==p||Se!==x)&&(n.blendEquationSeparate(he[ue],he[Se]),p=ue,x=Se),(te!==T||pe!==E||ge!==A||Oe!==C)&&(n.blendFuncSeparate(De[te],De[pe],De[ge],De[Oe]),T=te,E=pe,A=ge,C=Oe),(Ye.equals(b)===!1||ke!==R)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ke),b.copy(Ye),R=ke),m=k,y=!1}function Be(k,ue){k.side===pn?ne(n.CULL_FACE):H(n.CULL_FACE);let te=k.side===zt;ue&&(te=!te),we(te),k.blending===Ni&&k.transparent===!1?U(bn):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const pe=k.stencilWrite;o.setTest(pe),pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function Ce(k){k!==Ef?(H(n.CULL_FACE),k!==D&&(k===Ul?n.cullFace(n.BACK):k===Tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),D=k}function ae(k){k!==P&&(z&&n.lineWidth(k),P=k)}function Ae(k,ue,te){k?(H(n.POLYGON_OFFSET_FILL),(L!==ue||N!==te)&&(n.polygonOffset(ue,te),L=ue,N=te)):ne(n.POLYGON_OFFSET_FILL)}function de(k){k?H(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function M(k){k===void 0&&(k=n.TEXTURE0+X-1),j!==k&&(n.activeTexture(k),j=k)}function S(k,ue,te){te===void 0&&(j===null?te=n.TEXTURE0+X-1:te=j);let pe=K[te];pe===void 0&&(pe={type:void 0,texture:void 0},K[te]=pe),(pe.type!==k||pe.texture!==ue)&&(j!==te&&(n.activeTexture(te),j=te),n.bindTexture(k,ue||$[k]),pe.type=k,pe.texture=ue)}function O(){const k=K[j];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){ee.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ee.copy(k))}function oe(k){F.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),F.copy(k))}function Ie(k,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(k);pe===void 0&&(pe=n.getUniformBlockIndex(ue,k.name),te.set(k,pe))}function Ne(k,ue){const pe=c.get(ue).get(k);l.get(ue)!==pe&&(n.uniformBlockBinding(ue,pe,k.__bindingPointIndex),l.set(ue,pe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},j=null,K={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,T=null,E=null,x=null,A=null,C=null,b=new tt(0,0,0),R=0,y=!1,_=null,D=null,P=null,L=null,N=null,ee.set(0,0,n.canvas.width,n.canvas.height),F.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:H,disable:ne,bindFramebuffer:ve,drawBuffers:_e,useProgram:xe,setBlending:U,setMaterial:Be,setFlipSided:we,setCullFace:Ce,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:de,activeTexture:M,bindTexture:S,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ye,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:Le,texStorage3D:ce,texSubImage2D:se,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Te,viewport:oe,reset:Ke}}function __(n,e,t,r,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,S){return d?new OffscreenCanvas(M,S):Cs("canvas")}function v(M,S,O){let J=1;const Q=de(M);if((Q.width>O||Q.height>O)&&(J=O/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const se=Math.floor(J*Q.width),fe=Math.floor(J*Q.height);h===void 0&&(h=g(se,fe));const le=S?g(se,fe):h;return le.width=se,le.height=fe,le.getContext("2d").drawImage(M,0,0,se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+fe+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,S,O,J,Q=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let se=S;if(S===n.RED&&(O===n.FLOAT&&(se=n.R32F),O===n.HALF_FLOAT&&(se=n.R16F),O===n.UNSIGNED_BYTE&&(se=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(se=n.R8UI),O===n.UNSIGNED_SHORT&&(se=n.R16UI),O===n.UNSIGNED_INT&&(se=n.R32UI),O===n.BYTE&&(se=n.R8I),O===n.SHORT&&(se=n.R16I),O===n.INT&&(se=n.R32I)),S===n.RG&&(O===n.FLOAT&&(se=n.RG32F),O===n.HALF_FLOAT&&(se=n.RG16F),O===n.UNSIGNED_BYTE&&(se=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(se=n.RG8UI),O===n.UNSIGNED_SHORT&&(se=n.RG16UI),O===n.UNSIGNED_INT&&(se=n.RG32UI),O===n.BYTE&&(se=n.RG8I),O===n.SHORT&&(se=n.RG16I),O===n.INT&&(se=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(se=n.RGB8UI),O===n.UNSIGNED_SHORT&&(se=n.RGB16UI),O===n.UNSIGNED_INT&&(se=n.RGB32UI),O===n.BYTE&&(se=n.RGB8I),O===n.SHORT&&(se=n.RGB16I),O===n.INT&&(se=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),O===n.UNSIGNED_INT&&(se=n.RGBA32UI),O===n.BYTE&&(se=n.RGBA8I),O===n.SHORT&&(se=n.RGBA16I),O===n.INT&&(se=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),S===n.RGBA){const fe=Q?ws:it.getTransfer(J);O===n.FLOAT&&(se=n.RGBA32F),O===n.HALF_FLOAT&&(se=n.RGBA16F),O===n.UNSIGNED_BYTE&&(se=fe===rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(M,S){let O;return M?S===null||S===hi||S===Er?O=n.DEPTH24_STENCIL8:S===En?O=n.DEPTH32F_STENCIL8:S===Mr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===Er?O=n.DEPTH_COMPONENT24:S===En?O=n.DEPTH_COMPONENT32F:S===Mr&&(O=n.DEPTH_COMPONENT16),O}function A(M,S){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==ln&&M.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?S.mipmaps.length:1}function C(M){const S=M.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&u.delete(S)}function b(M){const S=M.target;S.removeEventListener("dispose",b),_(S)}function R(M){const S=r.get(M);if(S.__webglInit===void 0)return;const O=M.source,J=f.get(O);if(J){const Q=J[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(M),Object.keys(J).length===0&&f.delete(O)}r.remove(M)}function y(M){const S=r.get(M);n.deleteTexture(S.__webglTexture);const O=M.source,J=f.get(O);delete J[S.__cacheKey],a.memory.textures--}function _(M){const S=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let Q=0;Q<S.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=M.textures;for(let J=0,Q=O.length;J<Q;J++){const se=r.get(O[J]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),r.remove(O[J])}r.remove(M)}let D=0;function P(){D=0}function L(){const M=D;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),D+=1,M}function N(M){const S=[];return S.push(M.wrapS),S.push(M.wrapT),S.push(M.wrapR||0),S.push(M.magFilter),S.push(M.minFilter),S.push(M.anisotropy),S.push(M.internalFormat),S.push(M.format),S.push(M.type),S.push(M.generateMipmaps),S.push(M.premultiplyAlpha),S.push(M.flipY),S.push(M.unpackAlignment),S.push(M.colorSpace),S.join()}function X(M,S){const O=r.get(M);if(M.isVideoTexture&&ae(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(O,M,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function z(M,S){const O=r.get(M);if(M.version>0&&O.__version!==M.version){F(O,M,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function Z(M,S){const O=r.get(M);if(M.version>0&&O.__version!==M.version){F(O,M,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function G(M,S){const O=r.get(M);if(M.version>0&&O.__version!==M.version){B(O,M,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}const j={[Ka]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},K={[ln]:n.NEAREST,[$f]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[ai]:n.LINEAR_MIPMAP_LINEAR},I={[id]:n.NEVER,[cd]:n.ALWAYS,[rd]:n.LESS,[Uu]:n.LEQUAL,[sd]:n.EQUAL,[ld]:n.GEQUAL,[ad]:n.GREATER,[od]:n.NOTEQUAL};function W(M,S){if(S.type===En&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===ta||S.magFilter===Xr||S.magFilter===ai||S.minFilter===Jt||S.minFilter===ta||S.minFilter===Xr||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,j[S.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,K[S.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,I[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Xr&&S.minFilter!==ai||S.type===En&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function ee(M,S){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,S.addEventListener("dispose",C));const J=S.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const se=N(S);if(se!==M.__cacheKey){Q[se]===void 0&&(Q[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[se].usedTimes++;const fe=Q[M.__cacheKey];fe!==void 0&&(Q[M.__cacheKey].usedTimes--,fe.usedTimes===0&&y(S)),M.__cacheKey=se,M.__webglTexture=Q[se].texture}return O}function F(M,S,O){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);const Q=ee(M,S),se=S.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+O);const fe=r.get(se);if(se.version!==fe.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const le=it.getPrimaries(it.workingColorSpace),me=S.colorSpace===Hn?null:it.getPrimaries(S.colorSpace),Le=S.colorSpace===Hn||le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=v(S.image,!1,i.maxTextureSize);ce=Ae(S,ce);const ye=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let Te=E(S.internalFormat,ye,Ee,S.colorSpace,S.isVideoTexture);W(J,S);let oe;const Ie=S.mipmaps,Ne=S.isVideoTexture!==!0,Ke=fe.__version===void 0||Q===!0,k=se.dataReady,ue=A(S,ce);if(S.isDepthTexture)Te=x(S.format===br,S.type),Ke&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Te,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Te,ce.width,ce.height,0,ye,Ee,null));else if(S.isDataTexture)if(Ie.length>0){Ne&&Ke&&t.texStorage2D(n.TEXTURE_2D,ue,Te,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)oe=Ie[te],Ne?k&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,oe.width,oe.height,ye,Ee,oe.data):t.texImage2D(n.TEXTURE_2D,te,Te,oe.width,oe.height,0,ye,Ee,oe.data);S.generateMipmaps=!1}else Ne?(Ke&&t.texStorage2D(n.TEXTURE_2D,ue,Te,ce.width,ce.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,Ee,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ce.width,ce.height,0,ye,Ee,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Te,Ie[0].width,Ie[0].height,ce.depth);for(let te=0,pe=Ie.length;te<pe;te++)if(oe=Ie[te],S.format!==on)if(ye!==null)if(Ne){if(k)if(S.layerUpdates.size>0){const Se=ic(oe.width,oe.height,S.format,S.type);for(const ge of S.layerUpdates){const Oe=oe.data.subarray(ge*Se/oe.data.BYTES_PER_ELEMENT,(ge+1)*Se/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ge,oe.width,oe.height,1,ye,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,ye,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Te,oe.width,oe.height,ce.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,ye,Ee,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Te,oe.width,oe.height,ce.depth,0,ye,Ee,oe.data)}else{Ne&&Ke&&t.texStorage2D(n.TEXTURE_2D,ue,Te,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)oe=Ie[te],S.format!==on?ye!==null?Ne?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,oe.width,oe.height,ye,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Te,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?k&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,oe.width,oe.height,ye,Ee,oe.data):t.texImage2D(n.TEXTURE_2D,te,Te,oe.width,oe.height,0,ye,Ee,oe.data)}else if(S.isDataArrayTexture)if(Ne){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Te,ce.width,ce.height,ce.depth),k)if(S.layerUpdates.size>0){const te=ic(ce.width,ce.height,S.format,S.type);for(const pe of S.layerUpdates){const Se=ce.data.subarray(pe*te/ce.data.BYTES_PER_ELEMENT,(pe+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,ce.width,ce.height,1,ye,Ee,Se)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ee,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ce.width,ce.height,ce.depth,0,ye,Ee,ce.data);else if(S.isData3DTexture)Ne?(Ke&&t.texStorage3D(n.TEXTURE_3D,ue,Te,ce.width,ce.height,ce.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ee,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ce.width,ce.height,ce.depth,0,ye,Ee,ce.data);else if(S.isFramebufferTexture){if(Ke)if(Ne)t.texStorage2D(n.TEXTURE_2D,ue,Te,ce.width,ce.height);else{let te=ce.width,pe=ce.height;for(let Se=0;Se<ue;Se++)t.texImage2D(n.TEXTURE_2D,Se,Te,te,pe,0,ye,Ee,null),te>>=1,pe>>=1}}else if(Ie.length>0){if(Ne&&Ke){const te=de(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ue,Te,te.width,te.height)}for(let te=0,pe=Ie.length;te<pe;te++)oe=Ie[te],Ne?k&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ye,Ee,oe):t.texImage2D(n.TEXTURE_2D,te,Te,ye,Ee,oe);S.generateMipmaps=!1}else if(Ne){if(Ke){const te=de(ce);t.texStorage2D(n.TEXTURE_2D,ue,Te,te.width,te.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ee,ce)}else t.texImage2D(n.TEXTURE_2D,0,Te,ye,Ee,ce);m(S)&&p(J),fe.__version=se.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function B(M,S,O){if(S.image.length!==6)return;const J=ee(M,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const se=r.get(Q);if(Q.version!==se.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const fe=it.getPrimaries(it.workingColorSpace),le=S.colorSpace===Hn?null:it.getPrimaries(S.colorSpace),me=S.colorSpace===Hn||fe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let pe=0;pe<6;pe++)!Le&&!ce?ye[pe]=v(S.image[pe],!0,i.maxCubemapSize):ye[pe]=ce?S.image[pe].image:S.image[pe],ye[pe]=Ae(S,ye[pe]);const Ee=ye[0],Te=s.convert(S.format,S.colorSpace),oe=s.convert(S.type),Ie=E(S.internalFormat,Te,oe,S.colorSpace),Ne=S.isVideoTexture!==!0,Ke=se.__version===void 0||J===!0,k=Q.dataReady;let ue=A(S,Ee);W(n.TEXTURE_CUBE_MAP,S);let te;if(Le){Ne&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ie,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){te=ye[pe].mipmaps;for(let Se=0;Se<te.length;Se++){const ge=te[Se];S.format!==on?Te!==null?Ne?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,ge.width,ge.height,Te,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,ge.width,ge.height,Te,oe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,Ie,ge.width,ge.height,0,Te,oe,ge.data)}}}else{if(te=S.mipmaps,Ne&&Ke){te.length>0&&ue++;const pe=de(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ie,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ce){Ne?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye[pe].width,ye[pe].height,Te,oe,ye[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ie,ye[pe].width,ye[pe].height,0,Te,oe,ye[pe].data);for(let Se=0;Se<te.length;Se++){const Oe=te[Se].image[pe].image;Ne?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Oe.width,Oe.height,Te,oe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,Ie,Oe.width,Oe.height,0,Te,oe,Oe.data)}}else{Ne?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te,oe,ye[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ie,Te,oe,ye[pe]);for(let Se=0;Se<te.length;Se++){const ge=te[Se];Ne?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Te,oe,ge.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,Ie,Te,oe,ge.image[pe])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),se.__version=Q.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function $(M,S,O,J,Q,se){const fe=s.convert(O.format,O.colorSpace),le=s.convert(O.type),me=E(O.internalFormat,fe,le,O.colorSpace),Le=r.get(S),ce=r.get(O);if(ce.__renderTarget=S,!Le.__hasExternalTextures){const ye=Math.max(1,S.width>>se),Ee=Math.max(1,S.height>>se);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,me,ye,Ee,S.depth,0,fe,le,null):t.texImage2D(Q,se,me,ye,Ee,0,fe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Ce(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,ce.__webglTexture,0,we(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,ce.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(M,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),S.depthBuffer){const J=S.depthTexture,Q=J&&J.isDepthTexture?J.type:null,se=x(S.stencilBuffer,Q),fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=we(S);Ce(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,se,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,M)}else{const J=S.textures;for(let Q=0;Q<J.length;Q++){const se=J[Q],fe=s.convert(se.format,se.colorSpace),le=s.convert(se.type),me=E(se.internalFormat,fe,le,se.colorSpace),Le=we(S);O&&Ce(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,me,S.width,S.height):Ce(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,me,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,me,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(M,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Q=J.__webglTexture,se=we(S);if(S.depthTexture.format===Tr)Ce(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===br)Ce(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ve(M){const S=r.get(M),O=M.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==M.depthTexture){const J=M.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=J}if(M.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ne(S.__webglFramebuffer,M)}else if(O){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=n.createRenderbuffer(),H(S.__webglDepthbuffer[J],M,!1);else{const Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),H(S.__webglDepthbuffer,M,!1);else{const J=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(M,S,O){const J=r.get(M);S!==void 0&&$(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ve(M)}function xe(M){const S=M.texture,O=r.get(M),J=r.get(S);M.addEventListener("dispose",b);const Q=M.textures,se=M.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<S.mipmaps.length;me++)O.__webglFramebuffer[le][me]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(fe)for(let le=0,me=Q.length;le<me;le++){const Le=r.get(Q[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Ce(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const me=Q[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Le=s.convert(me.format,me.colorSpace),ce=s.convert(me.type),ye=E(me.internalFormat,Le,ce,me.colorSpace,M.isXRRenderTarget===!0),Ee=we(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),H(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),W(n.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)$(O.__webglFramebuffer[le][me],M,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else $(O.__webglFramebuffer[le],M,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,me=Q.length;le<me;le++){const Le=Q[le],ce=r.get(Le);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),W(n.TEXTURE_2D,Le),$(O.__webglFramebuffer,M,Le,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),W(le,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)$(O.__webglFramebuffer[me],M,S,n.COLOR_ATTACHMENT0,le,me);else $(O.__webglFramebuffer,M,S,n.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}M.depthBuffer&&ve(M)}function he(M){const S=M.textures;for(let O=0,J=S.length;O<J;O++){const Q=S[O];if(m(Q)){const se=T(M),fe=r.get(Q).__webglTexture;t.bindTexture(se,fe),p(se),t.unbindTexture()}}}const De=[],U=[];function Be(M){if(M.samples>0){if(Ce(M)===!1){const S=M.textures,O=M.width,J=M.height;let Q=n.COLOR_BUFFER_BIT;const se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=r.get(M),le=S.length>1;if(le)for(let me=0;me<S.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<S.length;me++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Le=r.get(S[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,Q,n.NEAREST),l===!0&&(De.length=0,U.length=0,De.push(n.COLOR_ATTACHMENT0+me),M.depthBuffer&&M.resolveDepthBuffer===!1&&(De.push(se),U.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<S.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Le=r.get(S[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const S=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function we(M){return Math.min(i.maxSamples,M.samples)}function Ce(M){const S=r.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(M){const S=a.render.frame;u.get(M)!==S&&(u.set(M,S),M.update())}function Ae(M,S){const O=M.colorSpace,J=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==Gi&&O!==Hn&&(it.getTransfer(O)===rt?(J!==on||Q!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function de(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=_e,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ce}function x_(n,e){function t(r,i=Hn){let s;const a=it.getTransfer(i);if(r===Cn)return n.UNSIGNED_BYTE;if(r===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===yu)return n.BYTE;if(r===Mu)return n.SHORT;if(r===Mr)return n.UNSIGNED_SHORT;if(r===Wo)return n.INT;if(r===hi)return n.UNSIGNED_INT;if(r===En)return n.FLOAT;if(r===Yi)return n.HALF_FLOAT;if(r===Tu)return n.ALPHA;if(r===bu)return n.RGB;if(r===on)return n.RGBA;if(r===Au)return n.LUMINANCE;if(r===wu)return n.LUMINANCE_ALPHA;if(r===Tr)return n.DEPTH_COMPONENT;if(r===br)return n.DEPTH_STENCIL;if(r===Ru)return n.RED;if(r===qo)return n.RED_INTEGER;if(r===Cu)return n.RG;if(r===Ko)return n.RG_INTEGER;if(r===jo)return n.RGBA_INTEGER;if(r===vs||r===_s||r===xs||r===Ss)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ja||r===Qa||r===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eo||r===to||r===no)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===eo||r===to)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===no)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===io||r===ro||r===so||r===ao||r===oo||r===lo||r===co||r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===io)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ro)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===so)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ao)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===co)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ho)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===po)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===go)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ys||r===_o||r===xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===ys)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pu||r===So||r===yo||r===Mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===ys)return s.COMPRESSED_RED_RGTC1_EXT;if(r===So)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Er?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const i=new It,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new un({vertexShader:S_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new pi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends qi{constructor(e,t){super();const r=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new M_,m=t.getContextAttributes();let p=null,T=null;const E=[],x=[],A=new nt;let C=null;const b=new Zt;b.viewport=new ut;const R=new Zt;R.viewport=new ut;const y=[b,R],_=new Wd;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=E[F];return B===void 0&&(B=new Ea,E[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=E[F];return B===void 0&&(B=new Ea,E[F]=B),B.getGripSpace()},this.getHand=function(F){let B=E[F];return B===void 0&&(B=new Ea,E[F]=B),B.getHandSpace()};function L(F){const B=x.indexOf(F.inputSource);if(B===-1)return;const $=E[B];$!==void 0&&($.update(F.inputSource,F.frame,c||a),$.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let F=0;F<E.length;F++){const B=x[F];B!==null&&(x[F]=null,E[F].disconnect(B))}D=null,P=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,T=null,ee.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,H=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?br:Tr,H=m.stencil?Er:hi);const ve={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new qn(f.textureWidth,f.textureHeight,{format:on,type:Cn,depthTexture:new Hu(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new qn(d.framebufferWidth,d.framebufferHeight,{format:on,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(F){for(let B=0;B<F.removed.length;B++){const $=F.removed[B],H=x.indexOf($);H>=0&&(x[H]=null,E[H].disconnect($))}for(let B=0;B<F.added.length;B++){const $=F.added[B];let H=x.indexOf($);if(H===-1){for(let ve=0;ve<E.length;ve++)if(ve>=x.length){x.push($),H=ve;break}else if(x[ve]===null){x[ve]=$,H=ve;break}if(H===-1)break}const ne=E[H];ne&&ne.connect($)}}const z=new re,Z=new re;function G(F,B,$){z.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition($.matrixWorld);const H=z.distanceTo(Z),ne=B.projectionMatrix.elements,ve=$.projectionMatrix.elements,_e=ne[14]/(ne[10]-1),xe=ne[14]/(ne[10]+1),he=(ne[9]+1)/ne[5],De=(ne[9]-1)/ne[5],U=(ne[8]-1)/ne[0],Be=(ve[8]+1)/ve[0],we=_e*U,Ce=_e*Be,ae=H/(-U+Be),Ae=ae*-U;if(B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ae),F.translateZ(ae),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ne[10]===-1)F.projectionMatrix.copy(B.projectionMatrix),F.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const de=_e+ae,M=xe+ae,S=we-Ae,O=Ce+(H-Ae),J=he*xe/M*de,Q=De*xe/M*de;F.projectionMatrix.makePerspective(S,O,J,Q,de,M),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function j(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let B=F.near,$=F.far;v.texture!==null&&(v.depthNear>0&&(B=v.depthNear),v.depthFar>0&&($=v.depthFar)),_.near=R.near=b.near=B,_.far=R.far=b.far=$,(D!==_.near||P!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,P=_.far),b.layers.mask=F.layers.mask|2,R.layers.mask=F.layers.mask|4,_.layers.mask=b.layers.mask|R.layers.mask;const H=F.parent,ne=_.cameras;j(_,H);for(let ve=0;ve<ne.length;ve++)j(ne[ve],H);ne.length===2?G(_,b,R):_.projectionMatrix.copy(b.projectionMatrix),K(F,_,H)};function K(F,B,$){$===null?F.matrix.copy(B.matrixWorld):(F.matrix.copy($.matrixWorld),F.matrix.invert(),F.matrix.multiply(B.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(B.projectionMatrix),F.projectionMatrixInverse.copy(B.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Eo*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let I=null;function W(F,B){if(u=B.getViewerPose(c||a),g=B,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let H=!1;$.length!==_.cameras.length&&(_.cameras.length=0,H=!0);for(let _e=0;_e<$.length;_e++){const xe=$[_e];let he=null;if(d!==null)he=d.getViewport(xe);else{const U=h.getViewSubImage(f,xe);he=U.viewport,_e===0&&(e.setRenderTargetTextures(T,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(T))}let De=y[_e];De===void 0&&(De=new Zt,De.layers.enable(_e),De.viewport=new ut,y[_e]=De),De.matrix.fromArray(xe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(xe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(he.x,he.y,he.width,he.height),_e===0&&(_.matrix.copy(De.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),H===!0&&_.cameras.push(De)}const ne=i.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const _e=h.getDepthInformation($[0]);_e&&_e.isValid&&_e.texture&&v.init(e,_e,i.renderState)}}for(let $=0;$<E.length;$++){const H=x[$],ne=E[$];H!==null&&ne!==void 0&&ne.update(H,B,c||a)}I&&I(F,B),B.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:B}),g=null}const ee=new Ku;ee.setAnimationLoop(W),this.setAnimationLoop=function(F){I=F},this.dispose=function(){}}}const $n=new Pn,T_=new pt;function b_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,ku(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,x=T.envMapRotation;E&&(m.envMap.value=E,$n.copy(x),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler($n)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function A_(n,e,t,r){let i={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const x=E.program;r.uniformBlockBinding(T,x)}function c(T,E){let x=i[T.id];x===void 0&&(g(T),x=u(T),i[T.id]=x,T.addEventListener("dispose",m));const A=E.program;r.updateUBOMapping(T,A);const C=e.render.frame;s[T.id]!==C&&(f(T),s[T.id]=C)}function u(T){const E=h();T.__bindingPointIndex=E;const x=n.createBuffer(),A=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=i[T.id],x=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,b=x.length;C<b;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,_=R.length;y<_;y++){const D=R[y];if(d(D,C,y,A)===!0){const P=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let X=0;X<L.length;X++){const z=L[X],Z=v(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,P+N,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,E,x,A){const C=T.value,b=E+"_"+x;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const R=A[b];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return A[b]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(T){const E=T.uniforms;let x=0;const A=16;for(let b=0,R=E.length;b<R;b++){const y=Array.isArray(E[b])?E[b]:[E[b]];for(let _=0,D=y.length;_<D;_++){const P=y[_],L=Array.isArray(P.value)?P.value:[P.value];for(let N=0,X=L.length;N<X;N++){const z=L[N],Z=v(z),G=x%A,j=G%Z.boundary,K=G+j;x+=j,K!==0&&A-K<Z.storage&&(x+=A-K),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=Z.storage}}}const C=x%A;return C>0&&(x+=A-C),T.__size=x,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)n.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class w_{constructor(e={}){const{canvas:t=hd(),context:r=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=jt;let C=0,b=0,R=null,y=-1,_=null;const D=new ut,P=new ut;let L=null;const N=new tt(0);let X=0,z=t.width,Z=t.height,G=1,j=null,K=null;const I=new ut(0,0,z,Z),W=new ut(0,0,z,Z);let ee=!1;const F=new Gu;let B=!1,$=!1;const H=new pt,ne=new pt,ve=new re,_e=new ut,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function De(){return R===null?G:1}let U=r;function Be(w,Y){return t.getContext(w,Y)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const Y="webgl2";if(U=Be(Y,w),U===null)throw Be(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let we,Ce,ae,Ae,de,M,S,O,J,Q,se,fe,le,me,Le,ce,ye,Ee,Te,oe,Ie,Ne,Ke,k;function ue(){we=new Og(U),we.init(),Ne=new x_(U,we),Ce=new Pg(U,we,e,Ne),ae=new v_(U,we),Ce.reverseDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Ae=new zg(U),de=new r_,M=new __(U,we,ae,de,Ce,Ne,Ae),S=new Ug(x),O=new Ng(x),J=new Yd(U),Ke=new Rg(U,J),Q=new Bg(U,J,Ae,Ke),se=new Gg(U,Q,J,Ae),Te=new Vg(U,Ce,M),ce=new Dg(de),fe=new i_(x,S,O,we,Ce,Ke,ce),le=new b_(x,de),me=new a_,Le=new f_(we),Ee=new wg(x,S,O,ae,se,d,l),ye=new m_(x,se,Ce),k=new A_(U,Ae,Ce,ae),oe=new Cg(U,we,Ae),Ie=new kg(U,we,Ae),Ae.programs=fe.programs,x.capabilities=Ce,x.extensions=we,x.properties=de,x.renderLists=me,x.shadowMap=ye,x.state=ae,x.info=Ae}ue();const te=new E_(x,U);this.xr=te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=we.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=we.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(z,Z,!1))},this.getSize=function(w){return w.set(z,Z)},this.setSize=function(w,Y,ie=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,Z=Y,t.width=Math.floor(w*G),t.height=Math.floor(Y*G),ie===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(z*G,Z*G).floor()},this.setDrawingBufferSize=function(w,Y,ie){z=w,Z=Y,G=ie,t.width=Math.floor(w*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,Y,ie,V){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,Y,ie,V),ae.viewport(D.copy(I).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(W)},this.setScissor=function(w,Y,ie,V){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,Y,ie,V),ae.scissor(P.copy(W).multiplyScalar(G).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){ae.setScissorTest(ee=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ie=!0){let V=0;if(w){let q=!1;if(R!==null){const Me=R.texture.format;q=Me===jo||Me===Ko||Me===qo}if(q){const Me=R.texture.type,Re=Me===Cn||Me===hi||Me===Mr||Me===Er||Me===Xo||Me===Yo,Ue=Ee.getClearColor(),Fe=Ee.getClearAlpha(),We=Ue.r,He=Ue.g,ze=Ue.b;Re?(g[0]=We,g[1]=He,g[2]=ze,g[3]=Fe,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=We,v[1]=He,v[2]=ze,v[3]=Fe,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}Y&&(V|=U.DEPTH_BUFFER_BIT),ie&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ee.dispose(),me.dispose(),Le.dispose(),de.dispose(),S.dispose(),O.dispose(),se.dispose(),Ke.dispose(),k.dispose(),fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",ht),te.removeEventListener("sessionend",Ft),At.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Ae.autoReset,Y=ye.enabled,ie=ye.autoUpdate,V=ye.needsUpdate,q=ye.type;ue(),Ae.autoReset=w,ye.enabled=Y,ye.autoUpdate=ie,ye.needsUpdate=V,ye.type=q}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const Y=w.target;Y.removeEventListener("dispose",Oe),Ye(Y)}function Ye(w){ke(w),de.remove(w)}function ke(w){const Y=de.get(w).programs;Y!==void 0&&(Y.forEach(function(ie){fe.releaseProgram(ie)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ie,V,q,Me){Y===null&&(Y=xe);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Ue=Ws(w,Y,ie,V,q);ae.setMaterial(V,Re);let Fe=ie.index,We=1;if(V.wireframe===!0){if(Fe=Q.getWireframeAttribute(ie),Fe===void 0)return;We=2}const He=ie.drawRange,ze=ie.attributes.position;let Je=He.start*We,Qe=(He.start+He.count)*We;Me!==null&&(Je=Math.max(Je,Me.start*We),Qe=Math.min(Qe,(Me.start+Me.count)*We)),Fe!==null?(Je=Math.max(Je,0),Qe=Math.min(Qe,Fe.count)):ze!=null&&(Je=Math.max(Je,0),Qe=Math.min(Qe,ze.count));const ct=Qe-Je;if(ct<0||ct===1/0)return;Ke.setup(q,V,Ue,ie,Fe);let ot,$e=oe;if(Fe!==null&&(ot=J.get(Fe),$e=Ie,$e.setIndex(ot)),q.isMesh)V.wireframe===!0?(ae.setLineWidth(V.wireframeLinewidth*De()),$e.setMode(U.LINES)):$e.setMode(U.TRIANGLES);else if(q.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),ae.setLineWidth(Ve*De()),q.isLineSegments?$e.setMode(U.LINES):q.isLineLoop?$e.setMode(U.LINE_LOOP):$e.setMode(U.LINE_STRIP)}else q.isPoints?$e.setMode(U.POINTS):q.isSprite&&$e.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))$e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ve=q._multiDrawStarts,dt=q._multiDrawCounts,Ze=q._multiDrawCount,Dt=Fe?J.get(Fe).bytesPerElement:1,fn=de.get(V).currentProgram.getUniforms();for(let Et=0;Et<Ze;Et++)fn.setValue(U,"_gl_DrawID",Et),$e.render(Ve[Et]/Dt,dt[Et])}else if(q.isInstancedMesh)$e.renderInstances(Je,ct,q.count);else if(ie.isInstancedBufferGeometry){const Ve=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,dt=Math.min(ie.instanceCount,Ve);$e.renderInstances(Je,ct,dt)}else $e.render(Je,ct)};function Ge(w,Y,ie){w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,qt(w,Y,ie),w.side=Yn,w.needsUpdate=!0,qt(w,Y,ie),w.side=pn):qt(w,Y,ie)}this.compile=function(w,Y,ie=null){ie===null&&(ie=w),p=Le.get(ie),p.init(Y),E.push(p),ie.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),w!==ie&&w.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const V=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ue=Me[Re];Ge(Ue,ie,q),V.add(Ue)}else Ge(Me,ie,q),V.add(Me)}),p=E.pop(),V},this.compileAsync=function(w,Y,ie=null){const V=this.compile(w,Y,ie);return new Promise(q=>{function Me(){if(V.forEach(function(Re){de.get(Re).currentProgram.isReady()&&V.delete(Re)}),V.size===0){q(w);return}setTimeout(Me,10)}we.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let st=null;function at(w){st&&st(w)}function ht(){At.stop()}function Ft(){At.start()}const At=new Ku;At.setAnimationLoop(at),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(w){st=w,te.setAnimationLoop(w),w===null?At.stop():At.start()},te.addEventListener("sessionstart",ht),te.addEventListener("sessionend",Ft),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(Y),Y=te.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,Y,R),p=Le.get(w,E.length),p.init(Y),E.push(p),ne.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F.setFromProjectionMatrix(ne),$=this.localClippingEnabled,B=ce.init(this.clippingPlanes,$),m=me.get(w,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&Vt(Me,Y,-1/0,x.sortObjects)}Vt(w,Y,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,K),he=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,he&&Ee.addToRenderList(m,w),this.info.render.frame++,B===!0&&ce.beginShadows();const ie=p.state.shadowsArray;ye.render(ie,w,Y),B===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,q=m.transmissive;if(p.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(q.length>0)for(let Re=0,Ue=Me.length;Re<Ue;Re++){const Fe=Me[Re];hn(V,q,w,Fe)}he&&Ee.render(w);for(let Re=0,Ue=Me.length;Re<Ue;Re++){const Fe=Me[Re];Qt(m,w,Fe,Fe.viewport)}}else q.length>0&&hn(V,q,w,Y),he&&Ee.render(w),Qt(m,w,Y);R!==null&&b===0&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,Y),Ke.resetDefaultState(),y=-1,_=null,E.pop(),E.length>0?(p=E[E.length-1],B===!0&&ce.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Vt(w,Y,ie,V){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){V&&_e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ne);const Re=se.update(w),Ue=w.material;Ue.visible&&m.push(w,Re,Ue,ie,_e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){const Re=se.update(w),Ue=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_e.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),_e.copy(Re.boundingSphere.center)),_e.applyMatrix4(w.matrixWorld).applyMatrix4(ne)),Array.isArray(Ue)){const Fe=Re.groups;for(let We=0,He=Fe.length;We<He;We++){const ze=Fe[We],Je=Ue[ze.materialIndex];Je&&Je.visible&&m.push(w,Re,Je,ie,_e.z,ze)}}else Ue.visible&&m.push(w,Re,Ue,ie,_e.z,null)}}const Me=w.children;for(let Re=0,Ue=Me.length;Re<Ue;Re++)Vt(Me[Re],Y,ie,V)}function Qt(w,Y,ie,V){const q=w.opaque,Me=w.transmissive,Re=w.transparent;p.setupLightsView(ie),B===!0&&ce.setGlobalState(x.clippingPlanes,ie),V&&ae.viewport(D.copy(V)),q.length>0&&Nt(q,Y,ie),Me.length>0&&Nt(Me,Y,ie),Re.length>0&&Nt(Re,Y,ie),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function hn(w,Y,ie,V){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new qn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Yi:Cn,minFilter:ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Me=p.state.transmissionRenderTarget[V.id],Re=V.viewport||D;Me.setSize(Re.z*x.transmissionResolutionScale,Re.w*x.transmissionResolutionScale);const Ue=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(N),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),he&&Ee.render(ie);const Fe=x.toneMapping;x.toneMapping=Wn;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),B===!0&&ce.setGlobalState(x.clippingPlanes,V),Nt(w,ie,V),M.updateMultisampleRenderTarget(Me),M.updateRenderTargetMipmap(Me),we.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ze=0,Je=Y.length;ze<Je;ze++){const Qe=Y[ze],ct=Qe.object,ot=Qe.geometry,$e=Qe.material,Ve=Qe.group;if($e.side===pn&&ct.layers.test(V.layers)){const dt=$e.side;$e.side=zt,$e.needsUpdate=!0,xt(ct,ie,V,ot,$e,Ve),$e.side=dt,$e.needsUpdate=!0,He=!0}}He===!0&&(M.updateMultisampleRenderTarget(Me),M.updateRenderTargetMipmap(Me))}x.setRenderTarget(Ue),x.setClearColor(N,X),We!==void 0&&(V.viewport=We),x.toneMapping=Fe}function Nt(w,Y,ie){const V=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,Me=w.length;q<Me;q++){const Re=w[q],Ue=Re.object,Fe=Re.geometry,We=Re.group;let He=Re.material;He.allowOverride===!0&&V!==null&&(He=V),Ue.layers.test(ie.layers)&&xt(Ue,Y,ie,Fe,He,We)}}function xt(w,Y,ie,V,q,Me){w.onBeforeRender(x,Y,ie,V,q,Me),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(x,Y,ie,V,w,Me),q.transparent===!0&&q.side===pn&&q.forceSinglePass===!1?(q.side=zt,q.needsUpdate=!0,x.renderBufferDirect(ie,Y,V,q,w,Me),q.side=Yn,q.needsUpdate=!0,x.renderBufferDirect(ie,Y,V,q,w,Me),q.side=pn):x.renderBufferDirect(ie,Y,V,q,w,Me),w.onAfterRender(x,Y,ie,V,q,Me)}function qt(w,Y,ie){Y.isScene!==!0&&(Y=xe);const V=de.get(w),q=p.state.lights,Me=p.state.shadowsArray,Re=q.state.version,Ue=fe.getParameters(w,q.state,Me,Y,ie),Fe=fe.getProgramCacheKey(Ue);let We=V.programs;V.environment=w.isMeshStandardMaterial?Y.environment:null,V.fog=Y.fog,V.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Oe),We=new Map,V.programs=We);let He=We.get(Fe);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===Re)return mi(w,Ue),He}else Ue.uniforms=fe.getUniforms(w),w.onBeforeCompile(Ue,x),He=fe.acquireProgram(Ue,Fe),We.set(Fe,He),V.uniforms=Ue.uniforms;const ze=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=ce.uniform),mi(w,Ue),V.needsLights=gi(w),V.lightsStateVersion=Re,V.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function er(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Es.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function mi(w,Y){const ie=de.get(w);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Ws(w,Y,ie,V,q){Y.isScene!==!0&&(Y=xe),M.resetTextureUnits();const Me=Y.fog,Re=V.isMeshStandardMaterial?Y.environment:null,Ue=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gi,Fe=(V.isMeshStandardMaterial?O:S).get(V.envMap||Re),We=V.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,He=!!ie.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!ie.morphAttributes.position,Je=!!ie.morphAttributes.normal,Qe=!!ie.morphAttributes.color;let ct=Wn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ct=x.toneMapping);const ot=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,$e=ot!==void 0?ot.length:0,Ve=de.get(V),dt=p.state.lights;if(B===!0&&($===!0||w!==_)){const yt=w===_&&V.id===y;ce.setState(V,w,yt)}let Ze=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==dt.state.version||Ve.outputColorSpace!==Ue||q.isBatchedMesh&&Ve.batching===!1||!q.isBatchedMesh&&Ve.batching===!0||q.isBatchedMesh&&Ve.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ve.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ve.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ve.instancingMorph===!1&&q.morphTexture!==null||Ve.envMap!==Fe||V.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ce.numPlanes||Ve.numIntersection!==ce.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==He||Ve.morphTargets!==ze||Ve.morphNormals!==Je||Ve.morphColors!==Qe||Ve.toneMapping!==ct||Ve.morphTargetsCount!==$e)&&(Ze=!0):(Ze=!0,Ve.__version=V.version);let Dt=Ve.currentProgram;Ze===!0&&(Dt=qt(V,Y,q));let fn=!1,Et=!1,wt=!1;const lt=Dt.getUniforms(),Tt=Ve.uniforms;if(ae.useProgram(Dt.program)&&(fn=!0,Et=!0,wt=!0),V.id!==y&&(y=V.id,Et=!0),fn||_!==w){ae.buffers.depth.getReversed()?(H.copy(w.projectionMatrix),dd(H),pd(H),lt.setValue(U,"projectionMatrix",H)):lt.setValue(U,"projectionMatrix",w.projectionMatrix),lt.setValue(U,"viewMatrix",w.matrixWorldInverse);const gt=lt.map.cameraPosition;gt!==void 0&&gt.setValue(U,ve.setFromMatrixPosition(w.matrixWorld)),Ce.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Et=!0,wt=!0)}if(q.isSkinnedMesh){lt.setOptional(U,q,"bindMatrix"),lt.setOptional(U,q,"bindMatrixInverse");const yt=q.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),lt.setValue(U,"boneTexture",yt.boneTexture,M))}q.isBatchedMesh&&(lt.setOptional(U,q,"batchingTexture"),lt.setValue(U,"batchingTexture",q._matricesTexture,M),lt.setOptional(U,q,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",q._indirectTexture,M),lt.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",q._colorsTexture,M));const St=ie.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&Te.update(q,ie,Dt),(Et||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,lt.setValue(U,"receiveShadow",q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Tt.envMap.value=Fe,Tt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&Y.environment!==null&&(Tt.envMapIntensity.value=Y.environmentIntensity),Et&&(lt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&kr(Tt,wt),Me&&V.fog===!0&&le.refreshFogUniforms(Tt,Me),le.refreshMaterialUniforms(Tt,V,G,Z,p.state.transmissionRenderTarget[w.id]),Es.upload(U,er(Ve),Tt,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Es.upload(U,er(Ve),Tt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(U,"center",q.center),lt.setValue(U,"modelViewMatrix",q.modelViewMatrix),lt.setValue(U,"normalMatrix",q.normalMatrix),lt.setValue(U,"modelMatrix",q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const yt=V.uniformsGroups;for(let gt=0,Un=yt.length;gt<Un;gt++){const $t=yt[gt];k.update($t,Dt),k.bind($t,Dt)}}return Dt}function kr(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function gi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,Y,ie){const V=de.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),de.get(w.texture).__webglTexture=Y,de.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:ie,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ie=de.get(w);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0};const tr=U.createFramebuffer();this.setRenderTarget=function(w,Y=0,ie=0){R=w,C=Y,b=ie;let V=!0,q=null,Me=!1,Re=!1;if(w){const Fe=de.get(w);if(Fe.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Fe.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(Fe.__hasExternalTextures)M.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Fe.__boundDepthTexture!==ze){if(ze!==null&&de.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const He=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[Y])?q=He[Y][ie]:q=He[Y],Me=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?q=de.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?q=He[ie]:q=He,D.copy(w.viewport),P.copy(w.scissor),L=w.scissorTest}else D.copy(I).multiplyScalar(G).floor(),P.copy(W).multiplyScalar(G).floor(),L=ee;if(ie!==0&&(q=tr),ae.bindFramebuffer(U.FRAMEBUFFER,q)&&V&&ae.drawBuffers(w,q),ae.viewport(D),ae.scissor(P),ae.setScissorTest(L),Me){const Fe=de.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ie)}else if(Re){const Fe=de.get(w.texture),We=Y;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.__webglTexture,ie,We)}else if(w!==null&&ie!==0){const Fe=de.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,ie)}y=-1},this.readRenderTargetPixels=function(w,Y,ie,V,q,Me,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){ae.bindFramebuffer(U.FRAMEBUFFER,Ue);try{const Fe=w.texture,We=Fe.format,He=Fe.type;if(!Ce.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-V&&ie>=0&&ie<=w.height-q&&U.readPixels(Y,ie,V,q,Ne.convert(We),Ne.convert(He),Me)}finally{const Fe=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ie,V,q,Me,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue)if(Y>=0&&Y<=w.width-V&&ie>=0&&ie<=w.height-q){ae.bindFramebuffer(U.FRAMEBUFFER,Ue);const Fe=w.texture,We=Fe.format,He=Fe.type;if(!Ce.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(Y,ie,V,q,Ne.convert(We),Ne.convert(He),0);const Je=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,Je);const Qe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await fd(U,Qe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.deleteBuffer(ze),U.deleteSync(Qe),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ie=0){const V=Math.pow(2,-ie),q=Math.floor(w.image.width*V),Me=Math.floor(w.image.height*V),Re=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;M.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,ie,0,0,Re,Ue,q,Me),ae.unbindTexture()};const Xs=U.createFramebuffer(),zr=U.createFramebuffer();this.copyTextureToTexture=function(w,Y,ie=null,V=null,q=0,Me=null){Me===null&&(q!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Re,Ue,Fe,We,He,ze,Je,Qe,ct;const ot=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(ie!==null)Re=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,We=ie.min.x,He=ie.min.y,ze=ie.isBox3?ie.min.z:0;else{const St=Math.pow(2,-q);Re=Math.floor(ot.width*St),Ue=Math.floor(ot.height*St),w.isDataArrayTexture?Fe=ot.depth:w.isData3DTexture?Fe=Math.floor(ot.depth*St):Fe=1,We=0,He=0,ze=0}V!==null?(Je=V.x,Qe=V.y,ct=V.z):(Je=0,Qe=0,ct=0);const $e=Ne.convert(Y.format),Ve=Ne.convert(Y.type);let dt;Y.isData3DTexture?(M.setTexture3D(Y,0),dt=U.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(M.setTexture2DArray(Y,0),dt=U.TEXTURE_2D_ARRAY):(M.setTexture2D(Y,0),dt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ze=U.getParameter(U.UNPACK_ROW_LENGTH),Dt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fn=U.getParameter(U.UNPACK_SKIP_PIXELS),Et=U.getParameter(U.UNPACK_SKIP_ROWS),wt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,He),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze);const lt=w.isDataArrayTexture||w.isData3DTexture,Tt=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const St=de.get(w),yt=de.get(Y),gt=de.get(St.__renderTarget),Un=de.get(yt.__renderTarget);ae.bindFramebuffer(U.READ_FRAMEBUFFER,gt.__webglFramebuffer),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let $t=0;$t<Fe;$t++)lt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(w).__webglTexture,q,ze+$t),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(Y).__webglTexture,Me,ct+$t)),U.blitFramebuffer(We,He,Re,Ue,Je,Qe,Re,Ue,U.DEPTH_BUFFER_BIT,U.NEAREST);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||de.has(w)){const St=de.get(w),yt=de.get(Y);ae.bindFramebuffer(U.READ_FRAMEBUFFER,Xs),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,zr);for(let gt=0;gt<Fe;gt++)lt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,q,ze+gt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,q),Tt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,Me,ct+gt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,Me),q!==0?U.blitFramebuffer(We,He,Re,Ue,Je,Qe,Re,Ue,U.COLOR_BUFFER_BIT,U.NEAREST):Tt?U.copyTexSubImage3D(dt,Me,Je,Qe,ct+gt,We,He,Re,Ue):U.copyTexSubImage2D(dt,Me,Je,Qe,We,He,Re,Ue);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(dt,Me,Je,Qe,ct,Re,Ue,Fe,$e,Ve,ot.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(dt,Me,Je,Qe,ct,Re,Ue,Fe,$e,ot.data):U.texSubImage3D(dt,Me,Je,Qe,ct,Re,Ue,Fe,$e,Ve,ot):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Me,Je,Qe,Re,Ue,$e,Ve,ot.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Me,Je,Qe,ot.width,ot.height,$e,ot.data):U.texSubImage2D(U.TEXTURE_2D,Me,Je,Qe,Re,Ue,$e,Ve,ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wt),Me===0&&Y.generateMipmaps&&U.generateMipmap(dt),ae.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,ie=null,V=null,q=0){return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Y,ie,V,q)},this.initRenderTarget=function(w){de.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),ae.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,ae.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}var R_="1.2.3";function $u(n,e,t){return Math.max(n,Math.min(e,t))}function C_(n,e,t){return(1-t)*n+t*e}function P_(n,e,t,r){return C_(n,e,1-Math.exp(-t*r))}function D_(n,e){return(n%e+e)%e}var U_=class{constructor(){be(this,"isRunning",!1);be(this,"value",0);be(this,"from",0);be(this,"to",0);be(this,"currentTime",0);be(this,"lerp");be(this,"duration");be(this,"easing");be(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const r=$u(0,this.currentTime/this.duration,1);e=r>=1;const i=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=P_(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:r,easing:i,onStart:s,onUpdate:a}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function L_(n,e){let t;return function(...r){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(i,r)},e)}}var I_=class{constructor(n,e,{autoResize:t=!0,debounce:r=250}={}){be(this,"width",0);be(this,"height",0);be(this,"scrollHeight",0);be(this,"scrollWidth",0);be(this,"debouncedResize");be(this,"wrapperResizeObserver");be(this,"contentResizeObserver");be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=L_(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},eh=class{constructor(){be(this,"events",{})}emit(n,...e){var r;let t=this.events[n]||[];for(let i=0,s=t.length;i<s;i++)(r=t[i])==null||r.call(t,...e)}on(n,e){var t;return(t=this.events[n])!=null&&t.push(e)||(this.events[n]=[e]),()=>{var r;this.events[n]=(r=this.events[n])==null?void 0:r.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}},Rc=100/6,Vn={passive:!1},F_=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){be(this,"touchStart",{x:0,y:0});be(this,"lastDelta",{x:0,y:0});be(this,"window",{width:0,height:0});be(this,"emitter",new eh);be(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});be(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,r=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:n})});be(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});be(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:r}=n;const i=r===1?Rc:r===2?this.window.width:1,s=r===1?Rc:r===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vn),this.element.addEventListener("touchstart",this.onTouchStart,Vn),this.element.addEventListener("touchmove",this.onTouchMove,Vn),this.element.addEventListener("touchend",this.onTouchEnd,Vn)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Vn),this.element.removeEventListener("touchstart",this.onTouchStart,Vn),this.element.removeEventListener("touchmove",this.onTouchMove,Vn),this.element.removeEventListener("touchend",this.onTouchEnd,Vn)}},N_=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:v=!0,prevent:m,virtualScroll:p,overscroll:T=!0,autoRaf:E=!1,anchors:x=!1,__experimental__naiveDimensions:A=!1}={}){be(this,"_isScrolling",!1);be(this,"_isStopped",!1);be(this,"_isLocked",!1);be(this,"_preventNextNativeScrollEvent",!1);be(this,"_resetVelocityTimeout",null);be(this,"__rafID",null);be(this,"isTouching");be(this,"time",0);be(this,"userData",{});be(this,"lastVelocity",0);be(this,"velocity",0);be(this,"direction",0);be(this,"options");be(this,"targetScroll");be(this,"animatedScroll");be(this,"animate",new U_);be(this,"emitter",new eh);be(this,"dimensions");be(this,"virtualScroll");be(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});be(this,"onClick",n=>{const t=n.composedPath().find(r=>{var i,s,a;return r instanceof HTMLAnchorElement&&(((i=r.getAttribute("href"))==null?void 0:i.startsWith("#"))||((s=r.getAttribute("href"))==null?void 0:s.startsWith("/#"))||((a=r.getAttribute("href"))==null?void 0:a.startsWith("./#")))});if(t){const r=t.getAttribute("href");if(r){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(`#${r.split("#")[1]}`,i)}}});be(this,"onPointerDown",n=>{n.button===1&&this.reset()});be(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:r}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),s=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var p,T,E;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||i&&((T=m.hasAttribute)==null?void 0:T.call(m,"data-lenis-prevent-touch"))||s&&((E=m.hasAttribute)==null?void 0:E.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.preventDefault();const d=i&&this.options.syncTouch,v=i&&r.type==="touchend"&&Math.abs(f)>5;v&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:v?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});be(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=R_,(!n||n===document.documentElement)&&(n=window),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:r,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:v,prevent:m,virtualScroll:p,overscroll:T,autoRaf:E,anchors:x,__experimental__naiveDimensions:A},this.dimensions=new I_(n,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new F_(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(n,{offset:e=0,immediate:t=!1,lock:r=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof n=="string"&&["top","left","start"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let f;if(typeof n=="string"?f=document.querySelector(n):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(f=n),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();n=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof n=="number"){if(n+=e,n=Math.round(n),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):n=$u(0,n,this.limit),n===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=n),this.animate.fromTo(this.animatedScroll,n,{duration:i,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?D_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Fs=class Fs{constructor(){be(this,"lenis");be(this,"camera");be(this,"renderer");be(this,"time",new qu);be(this,"elapsedTime");be(this,"sizes",{screen:{width:window.innerWidth,height:window.innerHeight,aspect:window.innerWidth/window.innerHeight},pixelRatio:this.getPixelRatio()});be(this,"distanceFromCamera",1e3)}static getInstance(){return this.instance?this.instance:(this.instance=new Fs,this.instance)}init(){this.createLenis(),this.createCamera(),this.createRenderer()}createLenis(){this.lenis=new N_({autoRaf:!0,duration:2})}createCamera(){this.camera=new Zt(70,this.sizes.screen.aspect,200,2e3),this.camera.position.z=this.distanceFromCamera,this.syncDimensions(),this.camera.updateProjectionMatrix()}createRenderer(){this.renderer=new w_({alpha:!0,antialias:!0}),this.renderer.setSize(this.sizes.screen.width,this.sizes.screen.height),this.renderer.setPixelRatio(this.sizes.pixelRatio),document.body.appendChild(this.renderer.domElement)}getPixelRatio(){return Math.min(window.devicePixelRatio,2)}onResize(){this.sizes.screen={width:window.innerWidth,height:window.innerHeight,aspect:window.innerWidth/window.innerHeight},this.sizes.pixelRatio=this.getPixelRatio(),this.renderer.setSize(this.sizes.screen.width,this.sizes.screen.height),this.renderer.setPixelRatio(this.sizes.pixelRatio),this.onResizeCamera()}onResizeCamera(){this.syncDimensions(),this.camera.aspect=this.sizes.screen.aspect,this.camera.updateProjectionMatrix()}syncDimensions(){this.camera.fov=2*Math.atan(this.sizes.screen.height/2/this.distanceFromCamera)*(180/Math.PI)}update(){this.elapsedTime=this.time.getElapsedTime()}};be(Fs,"instance");let Ar=Fs;var O_=`uniform float uProgress;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
    
    float reveal = 1.0 - vUv.y;
    
    
    if (reveal > uProgress) discard;

    
    gl_FragColor = vec4(uColor, 1.0);
}`,B_=`uniform float uProgress;
uniform float uHeight;

varying vec2 vUv;

void main() {
    vUv = uv;
    
    vec3 transformedPosition = position;
    
    transformedPosition.y -= uHeight * (1.0 - uProgress);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformedPosition, 1.0);
}`;function k_(){var n=Object.create(null);function e(i,s){var a=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!n[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=n[f.id].value),f}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),n[a]={id:a,value:h,getTransferables:u},s(h)}catch(f){f&&f.noLog||console.error(f),s(f)}}function t(i,s){var a,o=i.id,l=i.args;(!n[o]||typeof n[o].value!="function")&&s(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=n[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return s(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){s(h)}function u(h){try{var f=n[o].getTransferables&&n[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),s(h,f)}catch(d){console.error(d),s(d)}}}function r(i,s){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+s+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(i){var s=i.data,a=s.messageId,o=s.action,l=s.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function z_(n){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=n.dependencies,r=n.init;t=Array.isArray(t)?t.map(function(s){return s&&(s=s.onMainThread||s,s._getInitResult&&(s=s._getInitResult())),s}):[];var i=Promise.all(t).then(function(s){return r.apply(null,s)});return e._getInitResult=function(){return i},i},e}var th=function(){var n=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),n=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return th=function(){return n},n},V_=0,G_=0,Da=!1,xr=Object.create(null),Sr=Object.create(null),bo=Object.create(null);function ji(n){if((!n||typeof n.init!="function")&&!Da)throw new Error("requires `options.init` function");var e=n.dependencies,t=n.init,r=n.getTransferables,i=n.workerId,s=z_(n);i==null&&(i="#default");var a="workerModule"+ ++V_,o=n.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Da=!0,u=ji({workerId:i,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Ts(u)+`
)}`}),Da=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!th())return s.apply(void 0,u);if(!l){l=Cc(i,"registerModule",c.workerModuleData);var f=function(){l=null,Sr[i].delete(f)};(Sr[i]||(Sr[i]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return Cc(i,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:Ts(t),getTransferables:r&&Ts(r)},c.onMainThread=s,c}function H_(n){Sr[n]&&Sr[n].forEach(function(e){e()}),xr[n]&&(xr[n].terminate(),delete xr[n])}function Ts(n){var e=n.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function W_(n){var e=xr[n];if(!e){var t=Ts(k_);e=xr[n]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+n.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var i=r.data,s=i.messageId,a=bo[s];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete bo[s],a(i)}}return e}function Cc(n,e,t){return new Promise(function(r,i){var s=++G_;bo[s]=function(a){a.success?r(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},W_(n).postMessage({messageId:s,action:e,data:t})})}function nh(){var n=function(e){function t(j,K,I,W,ee,F,B,$){var H=1-B;$.x=H*H*j+2*H*B*I+B*B*ee,$.y=H*H*K+2*H*B*W+B*B*F}function r(j,K,I,W,ee,F,B,$,H,ne){var ve=1-H;ne.x=ve*ve*ve*j+3*ve*ve*H*I+3*ve*H*H*ee+H*H*H*B,ne.y=ve*ve*ve*K+3*ve*ve*H*W+3*ve*H*H*F+H*H*H*$}function i(j,K){for(var I=/([MLQCZ])([^MLQCZ]*)/g,W,ee,F,B,$;W=I.exec(j);){var H=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(W[1]){case"M":B=ee=H[0],$=F=H[1];break;case"L":(H[0]!==B||H[1]!==$)&&K("L",B,$,B=H[0],$=H[1]);break;case"Q":{K("Q",B,$,B=H[2],$=H[3],H[0],H[1]);break}case"C":{K("C",B,$,B=H[4],$=H[5],H[0],H[1],H[2],H[3]);break}case"Z":(B!==ee||$!==F)&&K("L",B,$,ee,F);break}}}function s(j,K,I){I===void 0&&(I=16);var W={x:0,y:0};i(j,function(ee,F,B,$,H,ne,ve,_e,xe){switch(ee){case"L":K(F,B,$,H);break;case"Q":{for(var he=F,De=B,U=1;U<I;U++)t(F,B,ne,ve,$,H,U/(I-1),W),K(he,De,W.x,W.y),he=W.x,De=W.y;break}case"C":{for(var Be=F,we=B,Ce=1;Ce<I;Ce++)r(F,B,ne,ve,_e,xe,$,H,Ce/(I-1),W),K(Be,we,W.x,W.y),Be=W.x,we=W.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(j,K){var I=j.getContext?j.getContext("webgl",c):j,W=l.get(I);if(!W){let Be=function(M){var S=F[M];if(!S&&(S=F[M]=I.getExtension(M),!S))throw new Error(M+" not supported");return S},we=function(M,S){var O=I.createShader(S);return I.shaderSource(O,M),I.compileShader(O),O},Ce=function(M,S,O,J){if(!B[M]){var Q={},se={},fe=I.createProgram();I.attachShader(fe,we(S,I.VERTEX_SHADER)),I.attachShader(fe,we(O,I.FRAGMENT_SHADER)),I.linkProgram(fe),B[M]={program:fe,transaction:function(me){I.useProgram(fe),me({setUniform:function(ce,ye){for(var Ee=[],Te=arguments.length-2;Te-- >0;)Ee[Te]=arguments[Te+2];var oe=se[ye]||(se[ye]=I.getUniformLocation(fe,ye));I["uniform"+ce].apply(I,[oe].concat(Ee))},setAttribute:function(ce,ye,Ee,Te,oe){var Ie=Q[ce];Ie||(Ie=Q[ce]={buf:I.createBuffer(),loc:I.getAttribLocation(fe,ce),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Ie.buf),I.vertexAttribPointer(Ie.loc,ye,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Ie.loc),ee?I.vertexAttribDivisor(Ie.loc,Te):Be("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ie.loc,Te),oe!==Ie.data&&(I.bufferData(I.ARRAY_BUFFER,oe,Ee),Ie.data=oe)}})}}}B[M].transaction(J)},ae=function(M,S){H++;try{I.activeTexture(I.TEXTURE0+H);var O=$[M];O||(O=$[M]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,O),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,O),S(O,H)}finally{H--}},Ae=function(M,S,O){var J=I.createFramebuffer();ne.push(J),I.bindFramebuffer(I.FRAMEBUFFER,J),I.activeTexture(I.TEXTURE0+S),I.bindTexture(I.TEXTURE_2D,M),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,M,0);try{O(J)}finally{I.deleteFramebuffer(J),I.bindFramebuffer(I.FRAMEBUFFER,ne[--ne.length-1]||null)}},de=function(){F={},B={},$={},H=-1,ne.length=0};var ve=Be,_e=we,xe=Ce,he=ae,De=Ae,U=de,ee=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,F={},B={},$={},H=-1,ne=[];I.canvas.addEventListener("webglcontextlost",function(M){de(),M.preventDefault()},!1),l.set(I,W={gl:I,isWebGL2:ee,getExtension:Be,withProgram:Ce,withTexture:ae,withTextureFramebuffer:Ae,handleContextLoss:de})}K(W)}function h(j,K,I,W,ee,F,B,$){B===void 0&&(B=15),$===void 0&&($=null),u(j,function(H){var ne=H.gl,ve=H.withProgram,_e=H.withTexture;_e("copy",function(xe,he){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ee,F,0,ne.RGBA,ne.UNSIGNED_BYTE,K),ve("copy",a,o,function(De){var U=De.setUniform,Be=De.setAttribute;Be("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),U("1i","image",he),ne.bindFramebuffer(ne.FRAMEBUFFER,$||null),ne.disable(ne.BLEND),ne.colorMask(B&8,B&4,B&2,B&1),ne.viewport(I,W,ee,F),ne.scissor(I,W,ee,F),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function f(j,K,I){var W=j.width,ee=j.height;u(j,function(F){var B=F.gl,$=new Uint8Array(W*ee*4);B.readPixels(0,0,W,ee,B.RGBA,B.UNSIGNED_BYTE,$),j.width=K,j.height=I,h(B,$,0,0,W,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(j,K,I,W,ee,F){F===void 0&&(F=1);var B=new Uint8Array(j*K),$=W[2]-W[0],H=W[3]-W[1],ne=[];s(I,function(Be,we,Ce,ae){ne.push({x1:Be,y1:we,x2:Ce,y2:ae,minX:Math.min(Be,Ce),minY:Math.min(we,ae),maxX:Math.max(Be,Ce),maxY:Math.max(we,ae)})}),ne.sort(function(Be,we){return Be.maxX-we.maxX});for(var ve=0;ve<j;ve++)for(var _e=0;_e<K;_e++){var xe=De(W[0]+$*(ve+.5)/j,W[1]+H*(_e+.5)/K),he=Math.pow(1-Math.abs(xe)/ee,F)/2;xe<0&&(he=1-he),he=Math.max(0,Math.min(255,Math.round(he*255))),B[_e*j+ve]=he}return B;function De(Be,we){for(var Ce=1/0,ae=1/0,Ae=ne.length;Ae--;){var de=ne[Ae];if(de.maxX+ae<=Be)break;if(Be+ae>de.minX&&we-ae<de.maxY&&we+ae>de.minY){var M=p(Be,we,de.x1,de.y1,de.x2,de.y2);M<Ce&&(Ce=M,ae=Math.sqrt(Ce))}}return U(Be,we)&&(ae=-ae),ae}function U(Be,we){for(var Ce=0,ae=ne.length;ae--;){var Ae=ne[ae];if(Ae.maxX<=Be)break;var de=Ae.y1>we!=Ae.y2>we&&Be<(Ae.x2-Ae.x1)*(we-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;de&&(Ce+=Ae.y1<Ae.y2?1:-1)}return Ce!==0}}function v(j,K,I,W,ee,F,B,$,H,ne){F===void 0&&(F=1),$===void 0&&($=0),H===void 0&&(H=0),ne===void 0&&(ne=0),m(j,K,I,W,ee,F,B,null,$,H,ne)}function m(j,K,I,W,ee,F,B,$,H,ne,ve){F===void 0&&(F=1),H===void 0&&(H=0),ne===void 0&&(ne=0),ve===void 0&&(ve=0);for(var _e=g(j,K,I,W,ee,F),xe=new Uint8Array(_e.length*4),he=0;he<_e.length;he++)xe[he*4+ve]=_e[he];h(B,xe,H,ne,j,K,1<<3-ve,$)}function p(j,K,I,W,ee,F){var B=ee-I,$=F-W,H=B*B+$*$,ne=H?Math.max(0,Math.min(1,((j-I)*B+(K-W)*$)/H)):0,ve=j-(I+ne*B),_e=K-(W+ne*$);return ve*ve+_e*_e}var T=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:m}),E="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",A="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),b=null,R=!1,y={},_=new WeakMap;function D(j){if(!R&&!X(j))throw new Error("WebGL generation not supported")}function P(j,K,I,W,ee,F,B){if(F===void 0&&(F=1),B===void 0&&(B=null),!B&&(B=b,!B)){var $=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!$)throw new Error("OffscreenCanvas or DOM canvas not supported");B=b=$.getContext("webgl",{depth:!1})}D(B);var H=new Uint8Array(j*K*4);u(B,function(xe){var he=xe.gl,De=xe.withTexture,U=xe.withTextureFramebuffer;De("readable",function(Be,we){he.texImage2D(he.TEXTURE_2D,0,he.RGBA,j,K,0,he.RGBA,he.UNSIGNED_BYTE,null),U(Be,we,function(Ce){N(j,K,I,W,ee,F,he,Ce,0,0,0),he.readPixels(0,0,j,K,he.RGBA,he.UNSIGNED_BYTE,H)})})});for(var ne=new Uint8Array(j*K),ve=0,_e=0;ve<H.length;ve+=4)ne[_e++]=H[ve];return ne}function L(j,K,I,W,ee,F,B,$,H,ne){F===void 0&&(F=1),$===void 0&&($=0),H===void 0&&(H=0),ne===void 0&&(ne=0),N(j,K,I,W,ee,F,B,null,$,H,ne)}function N(j,K,I,W,ee,F,B,$,H,ne,ve){F===void 0&&(F=1),H===void 0&&(H=0),ne===void 0&&(ne=0),ve===void 0&&(ve=0),D(B);var _e=[];s(I,function(xe,he,De,U){_e.push(xe,he,De,U)}),_e=new Float32Array(_e),u(B,function(xe){var he=xe.gl,De=xe.isWebGL2,U=xe.getExtension,Be=xe.withProgram,we=xe.withTexture,Ce=xe.withTextureFramebuffer,ae=xe.handleContextLoss;if(we("rawDistances",function(Ae,de){(j!==Ae._lastWidth||K!==Ae._lastHeight)&&he.texImage2D(he.TEXTURE_2D,0,he.RGBA,Ae._lastWidth=j,Ae._lastHeight=K,0,he.RGBA,he.UNSIGNED_BYTE,null),Be("main",E,x,function(M){var S=M.setAttribute,O=M.setUniform,J=!De&&U("ANGLE_instanced_arrays"),Q=!De&&U("EXT_blend_minmax");S("aUV",2,he.STATIC_DRAW,0,C),S("aLineSegment",4,he.DYNAMIC_DRAW,1,_e),O.apply(void 0,["4f","uGlyphBounds"].concat(W)),O("1f","uMaxDistance",ee),O("1f","uExponent",F),Ce(Ae,de,function(se){he.enable(he.BLEND),he.colorMask(!0,!0,!0,!0),he.viewport(0,0,j,K),he.scissor(0,0,j,K),he.blendFunc(he.ONE,he.ONE),he.blendEquationSeparate(he.FUNC_ADD,De?he.MAX:Q.MAX_EXT),he.clear(he.COLOR_BUFFER_BIT),De?he.drawArraysInstanced(he.TRIANGLES,0,3,_e.length/4):J.drawArraysInstancedANGLE(he.TRIANGLES,0,3,_e.length/4)})}),Be("post",a,A,function(M){M.setAttribute("aUV",2,he.STATIC_DRAW,0,C),M.setUniform("1i","tex",de),he.bindFramebuffer(he.FRAMEBUFFER,$),he.disable(he.BLEND),he.colorMask(ve===0,ve===1,ve===2,ve===3),he.viewport(H,ne,j,K),he.scissor(H,ne,j,K),he.drawArrays(he.TRIANGLES,0,3)})}),he.isContextLost())throw ae(),new Error("webgl context lost")})}function X(j){var K=!j||j===b?y:j.canvas||j,I=_.get(K);if(I===void 0){R=!0;var W=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,j);I=F&&ee.length===F.length&&F.every(function(B,$){return B===ee[$]}),I||(W="bad trial run results",console.info(ee,F))}catch(B){I=!1,W=B.message}W&&console.warn("WebGL SDF generation not supported:",W),R=!1,_.set(K,I)}return I}var z=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:L,generateIntoFramebuffer:N,isSupported:X});function Z(j,K,I,W,ee,F){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),F===void 0&&(F=1);try{return P.apply(z,arguments)}catch(B){return console.info("WebGL SDF generation failed, falling back to JS",B),g.apply(T,arguments)}}function G(j,K,I,W,ee,F,B,$,H,ne){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),F===void 0&&(F=1),$===void 0&&($=0),H===void 0&&(H=0),ne===void 0&&(ne=0);try{return L.apply(z,arguments)}catch(ve){return console.info("WebGL SDF generation failed, falling back to JS",ve),v.apply(T,arguments)}}return e.forEachPathCommand=i,e.generate=Z,e.generateIntoCanvas=G,e.javascript=T,e.pathToLineSegments=s,e.webgl=z,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return n}function X_(){var n=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},i={};r.L=1,i[1]="L",Object.keys(t).forEach(function(ae,Ae){r[ae]=1<<Ae+1,i[r[ae]]=ae}),Object.freeze(r);var s=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|s|r.PDI|l,u=null;function h(){if(!u){u=new Map;var ae=function(de){if(t.hasOwnProperty(de)){var M=0;t[de].split(",").forEach(function(S){var O=S.split("+"),J=O[0],Q=O[1];J=parseInt(J,36),Q=Q?parseInt(Q,36):0,u.set(M+=J,r[de]);for(var se=0;se<Q;se++)u.set(++M,r[de])})}};for(var Ae in t)ae(Ae)}}function f(ae){return h(),u.get(ae.codePointAt(0))||r.L}function d(ae){return i[f(ae)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(ae,Ae){var de=36,M=0,S=new Map,O=Ae&&new Map,J;return ae.split(",").forEach(function Q(se){if(se.indexOf("+")!==-1)for(var fe=+se;fe--;)Q(J);else{J=se;var le=se.split(">"),me=le[0],Le=le[1];me=String.fromCodePoint(M+=parseInt(me,de)),Le=String.fromCodePoint(M+=parseInt(Le,de)),S.set(me,Le),Ae&&O.set(Le,me)}}),{map:S,reverseMap:O}}var m,p,T;function E(){if(!m){var ae=v(g.pairs,!0),Ae=ae.map,de=ae.reverseMap;m=Ae,p=de,T=v(g.canonical,!1).map}}function x(ae){return E(),m.get(ae)||null}function A(ae){return E(),p.get(ae)||null}function C(ae){return E(),T.get(ae)||null}var b=r.L,R=r.R,y=r.EN,_=r.ES,D=r.ET,P=r.AN,L=r.CS,N=r.B,X=r.S,z=r.ON,Z=r.BN,G=r.NSM,j=r.AL,K=r.LRO,I=r.RLO,W=r.LRE,ee=r.RLE,F=r.PDF,B=r.LRI,$=r.RLI,H=r.FSI,ne=r.PDI;function ve(ae,Ae){for(var de=125,M=new Uint32Array(ae.length),S=0;S<ae.length;S++)M[S]=f(ae[S]);var O=new Map;function J(Ot,tn){var Bt=M[Ot];M[Ot]=tn,O.set(Bt,O.get(Bt)-1),Bt&o&&O.set(o,O.get(o)-1),O.set(tn,(O.get(tn)||0)+1),tn&o&&O.set(o,(O.get(o)||0)+1)}for(var Q=new Uint8Array(ae.length),se=new Map,fe=[],le=null,me=0;me<ae.length;me++)le||fe.push(le={start:me,end:ae.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:Pl(me,!1)}),M[me]&N&&(le.end=me,le=null);for(var Le=ee|W|I|K|s|ne|F|N,ce=function(Ot){return Ot+(Ot&1?1:2)},ye=function(Ot){return Ot+(Ot&1?2:1)},Ee=0;Ee<fe.length;Ee++){le=fe[Ee];var Te=[{_level:le.level,_override:0,_isolate:0}],oe=void 0,Ie=0,Ne=0,Ke=0;O.clear();for(var k=le.start;k<=le.end;k++){var ue=M[k];if(oe=Te[Te.length-1],O.set(ue,(O.get(ue)||0)+1),ue&o&&O.set(o,(O.get(o)||0)+1),ue&Le)if(ue&(ee|W)){Q[k]=oe._level;var te=(ue===ee?ye:ce)(oe._level);te<=de&&!Ie&&!Ne?Te.push({_level:te,_override:0,_isolate:0}):Ie||Ne++}else if(ue&(I|K)){Q[k]=oe._level;var pe=(ue===I?ye:ce)(oe._level);pe<=de&&!Ie&&!Ne?Te.push({_level:pe,_override:ue&I?R:b,_isolate:0}):Ie||Ne++}else if(ue&s){ue&H&&(ue=Pl(k+1,!0)===1?$:B),Q[k]=oe._level,oe._override&&J(k,oe._override);var Se=(ue===$?ye:ce)(oe._level);Se<=de&&Ie===0&&Ne===0?(Ke++,Te.push({_level:Se,_override:0,_isolate:1,_isolInitIndex:k})):Ie++}else if(ue&ne){if(Ie>0)Ie--;else if(Ke>0){for(Ne=0;!Te[Te.length-1]._isolate;)Te.pop();var ge=Te[Te.length-1]._isolInitIndex;ge!=null&&(se.set(ge,k),se.set(k,ge)),Te.pop(),Ke--}oe=Te[Te.length-1],Q[k]=oe._level,oe._override&&J(k,oe._override)}else ue&F?(Ie===0&&(Ne>0?Ne--:!oe._isolate&&Te.length>1&&(Te.pop(),oe=Te[Te.length-1])),Q[k]=oe._level):ue&N&&(Q[k]=le.level);else Q[k]=oe._level,oe._override&&ue!==Z&&J(k,oe._override)}for(var Oe=[],Ye=null,ke=le.start;ke<=le.end;ke++){var Ge=M[ke];if(!(Ge&l)){var st=Q[ke],at=Ge&s,ht=Ge===ne;Ye&&st===Ye._level?(Ye._end=ke,Ye._endsWithIsolInit=at):Oe.push(Ye={_start:ke,_end:ke,_level:st,_startsWithPDI:ht,_endsWithIsolInit:at})}}for(var Ft=[],At=0;At<Oe.length;At++){var Vt=Oe[At];if(!Vt._startsWithPDI||Vt._startsWithPDI&&!se.has(Vt._start)){for(var Qt=[Ye=Vt],hn=void 0;Ye&&Ye._endsWithIsolInit&&(hn=se.get(Ye._end))!=null;)for(var Nt=At+1;Nt<Oe.length;Nt++)if(Oe[Nt]._start===hn){Qt.push(Ye=Oe[Nt]);break}for(var xt=[],qt=0;qt<Qt.length;qt++)for(var er=Qt[qt],mi=er._start;mi<=er._end;mi++)xt.push(mi);for(var Ws=Q[xt[0]],kr=le.level,gi=xt[0]-1;gi>=0;gi--)if(!(M[gi]&l)){kr=Q[gi];break}var tr=xt[xt.length-1],Xs=Q[tr],zr=le.level;if(!(M[tr]&s)){for(var w=tr+1;w<=le.end;w++)if(!(M[w]&l)){zr=Q[w];break}}Ft.push({_seqIndices:xt,_sosType:Math.max(kr,Ws)%2?R:b,_eosType:Math.max(zr,Xs)%2?R:b})}}for(var Y=0;Y<Ft.length;Y++){var ie=Ft[Y],V=ie._seqIndices,q=ie._sosType,Me=ie._eosType,Re=Q[V[0]]&1?R:b;if(O.get(G))for(var Ue=0;Ue<V.length;Ue++){var Fe=V[Ue];if(M[Fe]&G){for(var We=q,He=Ue-1;He>=0;He--)if(!(M[V[He]]&l)){We=M[V[He]];break}J(Fe,We&(s|ne)?z:We)}}if(O.get(y))for(var ze=0;ze<V.length;ze++){var Je=V[ze];if(M[Je]&y)for(var Qe=ze-1;Qe>=-1;Qe--){var ct=Qe===-1?q:M[V[Qe]];if(ct&a){ct===j&&J(Je,P);break}}}if(O.get(j))for(var ot=0;ot<V.length;ot++){var $e=V[ot];M[$e]&j&&J($e,R)}if(O.get(_)||O.get(L))for(var Ve=1;Ve<V.length-1;Ve++){var dt=V[Ve];if(M[dt]&(_|L)){for(var Ze=0,Dt=0,fn=Ve-1;fn>=0&&(Ze=M[V[fn]],!!(Ze&l));fn--);for(var Et=Ve+1;Et<V.length&&(Dt=M[V[Et]],!!(Dt&l));Et++);Ze===Dt&&(M[dt]===_?Ze===y:Ze&(y|P))&&J(dt,Ze)}}if(O.get(y))for(var wt=0;wt<V.length;wt++){var lt=V[wt];if(M[lt]&y){for(var Tt=wt-1;Tt>=0&&M[V[Tt]]&(D|l);Tt--)J(V[Tt],y);for(wt++;wt<V.length&&M[V[wt]]&(D|l|y);wt++)M[V[wt]]!==y&&J(V[wt],y)}}if(O.get(D)||O.get(_)||O.get(L))for(var St=0;St<V.length;St++){var yt=V[St];if(M[yt]&(D|_|L)){J(yt,z);for(var gt=St-1;gt>=0&&M[V[gt]]&l;gt--)J(V[gt],z);for(var Un=St+1;Un<V.length&&M[V[Un]]&l;Un++)J(V[Un],z)}}if(O.get(y))for(var $t=0,_l=q;$t<V.length;$t++){var xl=V[$t],Ys=M[xl];Ys&y?_l===b&&J(xl,b):Ys&a&&(_l=Ys)}if(O.get(o)){var nr=R|y|P,Sl=nr|b,Vr=[];{for(var vi=[],_i=0;_i<V.length;_i++)if(M[V[_i]]&o){var ir=ae[V[_i]],yl=void 0;if(x(ir)!==null)if(vi.length<63)vi.push({char:ir,seqIndex:_i});else break;else if((yl=A(ir))!==null)for(var rr=vi.length-1;rr>=0;rr--){var qs=vi[rr].char;if(qs===yl||qs===A(C(ir))||x(C(qs))===ir){Vr.push([vi[rr].seqIndex,_i]),vi.length=rr;break}}}Vr.sort(function(Ot,tn){return Ot[0]-tn[0]})}for(var Ks=0;Ks<Vr.length;Ks++){for(var Ml=Vr[Ks],Gr=Ml[0],js=Ml[1],El=!1,en=0,Zs=Gr+1;Zs<js;Zs++){var Tl=V[Zs];if(M[Tl]&Sl){El=!0;var bl=M[Tl]&nr?R:b;if(bl===Re){en=bl;break}}}if(El&&!en){en=q;for(var Js=Gr-1;Js>=0;Js--){var Al=V[Js];if(M[Al]&Sl){var wl=M[Al]&nr?R:b;wl!==Re?en=wl:en=Re;break}}}if(en){if(M[V[Gr]]=M[V[js]]=en,en!==Re){for(var sr=Gr+1;sr<V.length;sr++)if(!(M[V[sr]]&l)){f(ae[V[sr]])&G&&(M[V[sr]]=en);break}}if(en!==Re){for(var ar=js+1;ar<V.length;ar++)if(!(M[V[ar]]&l)){f(ae[V[ar]])&G&&(M[V[ar]]=en);break}}}}for(var Ln=0;Ln<V.length;Ln++)if(M[V[Ln]]&o){for(var Rl=Ln,Qs=Ln,$s=q,or=Ln-1;or>=0;or--)if(M[V[or]]&l)Rl=or;else{$s=M[V[or]]&nr?R:b;break}for(var Cl=Me,lr=Ln+1;lr<V.length;lr++)if(M[V[lr]]&(o|l))Qs=lr;else{Cl=M[V[lr]]&nr?R:b;break}for(var ea=Rl;ea<=Qs;ea++)M[V[ea]]=$s===Cl?$s:Re;Ln=Qs}}}for(var Gt=le.start;Gt<=le.end;Gt++){var xf=Q[Gt],Hr=M[Gt];if(xf&1?Hr&(b|y|P)&&Q[Gt]++:Hr&R?Q[Gt]++:Hr&(P|y)&&(Q[Gt]+=2),Hr&l&&(Q[Gt]=Gt===0?le.level:Q[Gt-1]),Gt===le.end||f(ae[Gt])&(X|N))for(var Wr=Gt;Wr>=0&&f(ae[Wr])&c;Wr--)Q[Wr]=le.level}}return{levels:Q,paragraphs:fe};function Pl(Ot,tn){for(var Bt=Ot;Bt<ae.length;Bt++){var In=M[Bt];if(In&(R|j))return 1;if(In&(N|b)||tn&&In===ne)return 0;if(In&s){var Dl=Sf(Bt);Bt=Dl===-1?ae.length:Dl}}return 0}function Sf(Ot){for(var tn=1,Bt=Ot+1;Bt<ae.length;Bt++){var In=M[Bt];if(In&N)break;if(In&ne){if(--tn===0)return Bt}else In&s&&tn++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",xe;function he(){if(!xe){var ae=v(_e,!0),Ae=ae.map,de=ae.reverseMap;de.forEach(function(M,S){Ae.set(S,M)}),xe=Ae}}function De(ae){return he(),xe.get(ae)||null}function U(ae,Ae,de,M){var S=ae.length;de=Math.max(0,de==null?0:+de),M=Math.min(S-1,M==null?S-1:+M);for(var O=new Map,J=de;J<=M;J++)if(Ae[J]&1){var Q=De(ae[J]);Q!==null&&O.set(J,Q)}return O}function Be(ae,Ae,de,M){var S=ae.length;de=Math.max(0,de==null?0:+de),M=Math.min(S-1,M==null?S-1:+M);var O=[];return Ae.paragraphs.forEach(function(J){var Q=Math.max(de,J.start),se=Math.min(M,J.end);if(Q<se){for(var fe=Ae.levels.slice(Q,se+1),le=se;le>=Q&&f(ae[le])&c;le--)fe[le]=J.level;for(var me=J.level,Le=1/0,ce=0;ce<fe.length;ce++){var ye=fe[ce];ye>me&&(me=ye),ye<Le&&(Le=ye|1)}for(var Ee=me;Ee>=Le;Ee--)for(var Te=0;Te<fe.length;Te++)if(fe[Te]>=Ee){for(var oe=Te;Te+1<fe.length&&fe[Te+1]>=Ee;)Te++;Te>oe&&O.push([oe+Q,Te+Q])}}}),O}function we(ae,Ae,de,M){var S=Ce(ae,Ae,de,M),O=[].concat(ae);return S.forEach(function(J,Q){O[Q]=(Ae.levels[J]&1?De(ae[J]):null)||ae[J]}),O.join("")}function Ce(ae,Ae,de,M){for(var S=Be(ae,Ae,de,M),O=[],J=0;J<ae.length;J++)O[J]=J;return S.forEach(function(Q){for(var se=Q[0],fe=Q[1],le=O.slice(se,fe+1),me=le.length;me--;)O[fe-me]=le[me]}),O}return e.closingToOpeningBracket=A,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=ve,e.getMirroredCharacter=De,e.getMirroredCharactersMap=U,e.getReorderSegments=Be,e.getReorderedIndices=Ce,e.getReorderedString=we,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return n}const ih=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ao(n){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,i){let s=je[i];return s?Ao(s):r}return n.replace(e,t)}const bt=[];for(let n=0;n<256;n++)bt[n]=(n<16?"0":"")+n.toString(16);function Y_(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toUpperCase()}const ei=Object.assign||function(){let n=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},q_=Date.now(),Pc=new WeakMap,Dc=new Map;let K_=1e10;function wo(n,e){const t=Q_(e);let r=Pc.get(n);if(r||Pc.set(n,r=Object.create(null)),r[t])return new r[t];const i=`_onBeforeCompile${t}`,s=function(c,u){n.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Dc[h];if(!f){const d=j_(this,c,e,t);f=Dc[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,ei(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-q_}}),this[i]&&this[i](c)},a=function(){return o(e.chained?n:n.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:n}),Object.defineProperty(u,"id",{value:K_++}),u.uuid=Y_(),u.uniforms=ei({},c.uniforms,e.uniforms),u.defines=ei({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ei({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>n.type,set:c=>{n.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return n.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return s},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return n.copy.call(this,c),!n.isShaderMaterial&&!n.isDerivedMaterial&&(ei(this.extensions,c.extensions),ei(this.defines,c.defines),ei(this.uniforms,Qo.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new n.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=wo(n.isDerivedMaterial?n.getDepthMaterial():new Wu({depthPacking:Du}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=wo(n.isDerivedMaterial?n.getDistanceMaterial():new Xu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),n.dispose.call(this)}}};return r[t]=a,new a}function j_(n,{vertexShader:e,fragmentShader:t},r,i){let{vertexDefs:s,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(s=s||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=Ao(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ao(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;s=v+s,c=v+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,s=`${s}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,p,T)=>/\battribute\s+vec[23]\s+$/.test(T.substr(0,p))?m:`troika_${m}_${i}`),n.map&&n.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=Uc(e,i,s,a,o),t=Uc(t,i,c,u,h),{vertexShader:e,fragmentShader:t}}function Uc(n,e,t,r,i){return(r||i||t)&&(n=n.replace(ih,`
${t}
void troikaOrigMain${e}() {`),n+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${i}
}`),n}function Z_(n,e){return n==="uniforms"?void 0:typeof e=="function"?e.toString():e}let J_=0;const Lc=new Map;function Q_(n){const e=JSON.stringify(n,Z_);let t=Lc.get(e);return t==null&&Lc.set(e,t=++J_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function $_(){return typeof window>"u"&&(self.window=self),function(n){var e={parse:function(i){var s=e._bin,a=new Uint8Array(i);if(s.readASCII(a,0,4)=="ttcf"){var o=4;s.readUshort(a,o),o+=2,s.readUshort(a,o),o+=2;var l=s.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=s.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(i,s){var a=e._bin,o=s;a.readFixed(i,s),s+=4;var l=a.readUshort(i,s);s+=2,a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(i,s,4);s+=4,a.readUint(i,s),s+=4;var g=a.readUint(i,s);s+=4;var v=a.readUint(i,s);s+=4,h[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var m=c[f];h[m]&&(u[m.trim()]=e[m.trim()].parse(i,h[m].offset,h[m].length,u))}return u},_tabOffset:function(i,s,a){for(var o=e._bin,l=o.readUshort(i,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var f=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,h==s)return f}return 0}};e._bin={readFixed:function(i,s){return(i[s]<<8|i[s+1])+(i[s+2]<<8|i[s+3])/65540},readF2dot14:function(i,s){return e._bin.readShort(i,s)/16384},readInt:function(i,s){return e._bin._view(i).getInt32(s)},readInt8:function(i,s){return e._bin._view(i).getInt8(s)},readShort:function(i,s){return e._bin._view(i).getInt16(s)},readUshort:function(i,s){return e._bin._view(i).getUint16(s)},readUshorts:function(i,s,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(i,s+2*l));return o},readUint:function(i,s){return e._bin._view(i).getUint32(s)},readUint64:function(i,s){return 4294967296*e._bin.readUint(i,s)+e._bin.readUint(i,s+4)},readASCII:function(i,s,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(i[s+l]);return o},readUnicode:function(i,s,a){for(var o="",l=0;l<a;l++){var c=i[s++]<<8|i[s++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,s,a){var o=e._bin._tdec;return o&&s==0&&a==i.length?o.decode(i):e._bin.readASCII(i,s,a)},readBytes:function(i,s,a){for(var o=[],l=0;l<a;l++)o.push(i[s+l]);return o},readASCIIArray:function(i,s,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(i[s+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,s,a,o,l){var c=e._bin,u={},h=s;c.readFixed(i,s),s+=4;var f=c.readUshort(i,s);s+=2;var d=c.readUshort(i,s);s+=2;var g=c.readUshort(i,s);return s+=2,u.scriptList=e._lctf.readScriptList(i,h+f),u.featureList=e._lctf.readFeatureList(i,h+d),u.lookupList=e._lctf.readLookupList(i,h+g,l),u},e._lctf.readLookupList=function(i,s,a){var o=e._bin,l=s,c=[],u=o.readUshort(i,s);s+=2;for(var h=0;h<u;h++){var f=o.readUshort(i,s);s+=2;var d=e._lctf.readLookupTable(i,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(i,s,a){var o=e._bin,l=s,c={tabs:[]};c.ltype=o.readUshort(i,s),s+=2,c.flag=o.readUshort(i,s),s+=2;var u=o.readUshort(i,s);s+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(i,s);s+=2;var g=a(i,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var s=0,a=0;a<32;a++)(i>>>a&1)!=0&&s++;return s},e._lctf.readClassDef=function(i,s){var a=e._bin,o=[],l=a.readUshort(i,s);if(s+=2,l==1){var c=a.readUshort(i,s);s+=2;var u=a.readUshort(i,s);s+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(i,s)),s+=2}if(l==2){var f=a.readUshort(i,s);for(s+=2,h=0;h<f;h++)o.push(a.readUshort(i,s)),s+=2,o.push(a.readUshort(i,s)),s+=2,o.push(a.readUshort(i,s)),s+=2}return o},e._lctf.getInterval=function(i,s){for(var a=0;a<i.length;a+=3){var o=i[a],l=i[a+1];if(i[a+2],o<=s&&s<=l)return a}return-1},e._lctf.readCoverage=function(i,s){var a=e._bin,o={};o.fmt=a.readUshort(i,s),s+=2;var l=a.readUshort(i,s);return s+=2,o.fmt==1&&(o.tab=a.readUshorts(i,s,l)),o.fmt==2&&(o.tab=a.readUshorts(i,s,3*l)),o},e._lctf.coverageIndex=function(i,s){var a=i.tab;if(i.fmt==1)return a.indexOf(s);if(i.fmt==2){var o=e._lctf.getInterval(a,s);if(o!=-1)return a[o+2]+(s-a[o])}return-1},e._lctf.readFeatureList=function(i,s){var a=e._bin,o=s,l=[],c=a.readUshort(i,s);s+=2;for(var u=0;u<c;u++){var h=a.readASCII(i,s,4);s+=4;var f=a.readUshort(i,s);s+=2;var d=e._lctf.readFeatureTable(i,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,s){var a=e._bin,o=s,l={},c=a.readUshort(i,s);s+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(i,s);s+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(i,s+2*h));return l},e._lctf.readScriptList=function(i,s){var a=e._bin,o=s,l={},c=a.readUshort(i,s);s+=2;for(var u=0;u<c;u++){var h=a.readASCII(i,s,4);s+=4;var f=a.readUshort(i,s);s+=2,l[h.trim()]=e._lctf.readScriptTable(i,o+f)}return l},e._lctf.readScriptTable=function(i,s){var a=e._bin,o=s,l={},c=a.readUshort(i,s);s+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var u=a.readUshort(i,s);s+=2;for(var h=0;h<u;h++){var f=a.readASCII(i,s,4);s+=4;var d=a.readUshort(i,s);s+=2,l[f.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,s){var a=e._bin,o={};a.readUshort(i,s),s+=2,o.reqFeature=a.readUshort(i,s),s+=2;var l=a.readUshort(i,s);return s+=2,o.features=a.readUshorts(i,s,l),o},e.CFF={},e.CFF.parse=function(i,s,a){var o=e._bin;(i=new Uint8Array(i.buffer,s,a))[s=0],i[++s],i[++s],i[++s],s++;var l=[];s=e.CFF.readIndex(i,s,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(i,s+l[u],l[u+1]-l[u]));s+=l[l.length-1];var h=[];s=e.CFF.readIndex(i,s,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(i,s+h[u],s+h[u+1]));s+=h[h.length-1];var d=f[0],g=[];s=e.CFF.readIndex(i,s,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(i,s+g[u],g[u+1]-g[u]));if(s+=g[g.length-1],e.CFF.readSubrs(i,s,d),d.CharStrings){s=d.CharStrings,g=[],s=e.CFF.readIndex(i,s,g);var m=[];for(u=0;u<g.length-1;u++)m.push(o.readBytes(i,s+g[u],g[u+1]-g[u]));d.CharStrings=m}if(d.ROS){s=d.FDArray;var p=[];for(s=e.CFF.readIndex(i,s,p),d.FDArray=[],u=0;u<p.length-1;u++){var T=e.CFF.readDict(i,s+p[u],s+p[u+1]);e.CFF._readFDict(i,T,v),d.FDArray.push(T)}s+=p[p.length-1],s=d.FDSelect,d.FDSelect=[];var E=i[s];if(s++,E!=3)throw E;var x=o.readUshort(i,s);for(s+=2,u=0;u<x+1;u++)d.FDSelect.push(o.readUshort(i,s),i[s+2]),s+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,v),d},e.CFF._readFDict=function(i,s,a){var o;for(var l in s.Private&&(o=s.Private[1],s.Private=e.CFF.readDict(i,o,o+s.Private[0]),s.Private.Subrs&&e.CFF.readSubrs(i,o+s.Private.Subrs,s.Private)),s)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(s[l]=a[s[l]-426+35])},e.CFF.readSubrs=function(i,s,a){var o=e._bin,l=[];s=e.CFF.readIndex(i,s,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(i,s+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,s){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==s)return a;return-1},e.CFF.glyphBySE=function(i,s){return s<0||s>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[s])},e.CFF.readEncoding=function(i,s,a){e._bin;var o=[".notdef"],l=i[s];if(s++,l!=0)throw"error: unknown encoding format: "+l;var c=i[s];s++;for(var u=0;u<c;u++)o.push(i[s+u]);return o},e.CFF.readCharset=function(i,s,a){var o=e._bin,l=[".notdef"],c=i[s];if(s++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(i,s);s+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(i,s),s+=2;var f=0;for(c==1?(f=i[s],s++):(f=o.readUshort(i,s),s+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,s,a){var o=e._bin,l=o.readUshort(i,s)+1,c=i[s+=2];if(s++,c==1)for(var u=0;u<l;u++)a.push(i[s+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(i,s+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(i,s+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(s+=l*c)-1},e.CFF.getCharString=function(i,s,a){var o=e._bin,l=i[s],c=i[s+1];i[s+2],i[s+3],i[s+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(i,s+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(i,s+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(i,s,a){for(var o=s+a,l=e._bin,c=[];s<o;){var u=i[s],h=i[s+1];i[s+2],i[s+3],i[s+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(i,s+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(i,s+1)/65535,f=5),c.push(g??"o"+d),s+=f}return c},e.CFF.readDict=function(i,s,a){for(var o=e._bin,l={},c=[];s<a;){var u=i[s],h=i[s+1];i[s+2],i[s+3],i[s+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(i,s+1),f=3),u==29&&(g=o.readInt(i,s+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(i,s+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var m=i[s+f];f++;var p=m>>4,T=15&m;if(p!=15&&v.push(p),T!=15&&v.push(T),T==15)break}for(var E="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],A=0;A<v.length;A++)E+=x[v[A]];g=parseFloat(E)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),s+=f}return l},e.cmap={},e.cmap.parse=function(i,s,a){i=new Uint8Array(i.buffer,s,a),s=0;var o=e._bin,l={};o.readUshort(i,s),s+=2;var c=o.readUshort(i,s);s+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(i,s);s+=2;var d=o.readUshort(i,s);s+=2;var g=o.readUint(i,s);s+=4;var v="p"+f+"e"+d,m=u.indexOf(g);if(m==-1){var p;m=l.tables.length,u.push(g);var T=o.readUshort(i,g);T==0?p=e.cmap.parse0(i,g):T==4?p=e.cmap.parse4(i,g):T==6?p=e.cmap.parse6(i,g):T==12?p=e.cmap.parse12(i,g):console.debug("unknown format: "+T,f,d,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(i,s){var a=e._bin,o={};o.format=a.readUshort(i,s),s+=2;var l=a.readUshort(i,s);s+=2,a.readUshort(i,s),s+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[s+c]);return o},e.cmap.parse4=function(i,s){var a=e._bin,o=s,l={};l.format=a.readUshort(i,s),s+=2;var c=a.readUshort(i,s);s+=2,a.readUshort(i,s),s+=2;var u=a.readUshort(i,s);s+=2;var h=u/2;l.searchRange=a.readUshort(i,s),s+=2,l.entrySelector=a.readUshort(i,s),s+=2,l.rangeShift=a.readUshort(i,s),s+=2,l.endCount=a.readUshorts(i,s,h),s+=2*h,s+=2,l.startCount=a.readUshorts(i,s,h),s+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(i,s)),s+=2;for(l.idRangeOffset=a.readUshorts(i,s,h),s+=2*h,l.glyphIdArray=[];s<o+c;)l.glyphIdArray.push(a.readUshort(i,s)),s+=2;return l},e.cmap.parse6=function(i,s){var a=e._bin,o={};o.format=a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2,a.readUshort(i,s),s+=2,o.firstCode=a.readUshort(i,s),s+=2;var l=a.readUshort(i,s);s+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(i,s)),s+=2;return o},e.cmap.parse12=function(i,s){var a=e._bin,o={};o.format=a.readUshort(i,s),s+=2,s+=2,a.readUint(i,s),s+=4,a.readUint(i,s),s+=4;var l=a.readUint(i,s);s+=4,o.groups=[];for(var c=0;c<l;c++){var u=s+12*c,h=a.readUint(i,u+0),f=a.readUint(i,u+4),d=a.readUint(i,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(i,s,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,s){var a=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[s];if(i.loca[s]==i.loca[s+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var m=(2&c.flags[u])!=0,p=(16&c.flags[u])!=0;m?(c.xs.push(p?o[l]:-o[l]),l++):p?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)m=(4&c.flags[u])!=0,p=(32&c.flags[u])!=0,m?(c.ys.push(p?o[l]:-o[l]),l++):p?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var T=0,E=0;for(u=0;u<f;u++)T+=c.xs[u],E+=c.ys[u],c.xs[u]=T,c.ys[u]=E}else{var x;c.parts=[];do{x=a.readUshort(o,l),l+=2;var A={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(A),A.glyphIndex=a.readUshort(o,l),l+=2,1&x){var C=a.readShort(o,l);l+=2;var b=a.readShort(o,l);l+=2}else C=a.readInt8(o,l),l++,b=a.readInt8(o,l),l++;2&x?(A.m.tx=C,A.m.ty=b):(A.p1=C,A.p2=b),8&x?(A.m.a=A.m.d=a.readF2dot14(o,l),l+=2):64&x?(A.m.a=a.readF2dot14(o,l),l+=2,A.m.d=a.readF2dot14(o,l),l+=2):128&x&&(A.m.a=a.readF2dot14(o,l),l+=2,A.m.b=a.readF2dot14(o,l),l+=2,A.m.c=a.readF2dot14(o,l),l+=2,A.m.d=a.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var R=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<R;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,s,a,o){var l=s;s+=4;var c=e._bin.readUshort(i,s);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,s,a,o){return e._lctf.parse(i,s,a,o,e.GPOS.subt)},e.GPOS.subt=function(i,s,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,s==1||s==2||s==3||s==7||s==8&&u.fmt<=2){var h=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(s==1&&u.fmt==1){var f=l.readUshort(i,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(i,a,f))}else if(s==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(i,a),a+=2;var d=l.readUshort(i,a);a+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,a);a+=2;for(var p=0;p<m;p++){var T=c+l.readUshort(i,a);a+=2;var E=l.readUshort(i,T);T+=2;for(var x=[],A=0;A<E;A++){var C=l.readUshort(i,T);T+=2,f!=0&&(P=e.GPOS.readValueRecord(i,T,f),T+=2*g),d!=0&&(L=e.GPOS.readValueRecord(i,T,d),T+=2*v),x.push({gid2:C,val1:P,val2:L})}u.pairsets.push(x)}}if(u.fmt==2){var b=l.readUshort(i,a);a+=2;var R=l.readUshort(i,a);a+=2;var y=l.readUshort(i,a);a+=2;var _=l.readUshort(i,a);for(a+=2,u.classDef1=e._lctf.readClassDef(i,c+b),u.classDef2=e._lctf.readClassDef(i,c+R),u.matrix=[],p=0;p<y;p++){var D=[];for(A=0;A<_;A++){var P=null,L=null;f!=0&&(P=e.GPOS.readValueRecord(i,a,f),a+=2*g),d!=0&&(L=e.GPOS.readValueRecord(i,a,d),a+=2*v),D.push({val1:P,val2:L})}u.matrix.push(D)}}}else if(s==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else if(s==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else{if(s==9&&u.fmt==1){var N=l.readUshort(i,a);a+=2;var X=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+X)}console.debug("unsupported GPOS table LookupType",s,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,s,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(i,s):0),s+=1&a?2:0,l.push(2&a?o.readShort(i,s):0),s+=2&a?2:0,l.push(4&a?o.readShort(i,s):0),s+=4&a?2:0,l.push(8&a?o.readShort(i,s):0),s+=8&a?2:0,l},e.GPOS.readBaseArray=function(i,s,a){var o=e._bin,l=[],c=s,u=o.readUshort(i,s);s+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,s))),s+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(i,s){var a=e._bin,o=[],l=s,c=a.readUshort(i,s);s+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(i,a.readUshort(i,s+2)+l);h.markClass=a.readUshort(i,s),o.push(h),s+=4}return o},e.GPOS.readAnchorRecord=function(i,s){var a=e._bin,o={};return o.fmt=a.readUshort(i,s),o.x=a.readShort(i,s+2),o.y=a.readShort(i,s+4),o},e.GSUB={},e.GSUB.parse=function(i,s,a,o){return e._lctf.parse(i,s,a,o,e.GSUB.subt)},e.GSUB.subt=function(i,s,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,s!=1&&s!=2&&s!=4&&s!=5&&s!=6)return null;if(s==1||s==2||s==4||s==5&&u.fmt<=2||s==6&&u.fmt<=2){var h=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(s==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,a),a+=2;else if(u.fmt==2){var f=l.readUshort(i,a);a+=2,u.newg=l.readUshorts(i,a,f),a+=2*u.newg.length}}else if(s==2&&u.fmt==1){f=l.readUshort(i,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(i,a)+c;a+=2;var v=l.readUshort(i,g);u.seqs.push(l.readUshorts(i,g+2,v))}}else if(s==4)for(u.vals=[],f=l.readUshort(i,a),a+=2,d=0;d<f;d++){var m=l.readUshort(i,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+m))}else if(s==5&&u.fmt==2){if(u.fmt==2){var p=l.readUshort(i,a);a+=2,u.cDef=e._lctf.readClassDef(i,c+p),u.scset=[];var T=l.readUshort(i,a);for(a+=2,d=0;d<T;d++){var E=l.readUshort(i,a);a+=2,u.scset.push(E==0?null:e.GSUB.readSubClassSet(i,c+E))}}}else if(s==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(i,a),a+=2;for(var x=[],A=0;A<f;A++)x.push(e._lctf.readCoverage(i,c+l.readUshort(i,a+2*A)));a+=2*f,d==0&&(u.backCvg=x),d==1&&(u.inptCvg=x),d==2&&(u.ahedCvg=x)}f=l.readUshort(i,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,a,f)}}else{if(s==7&&u.fmt==1){var C=l.readUshort(i,a);a+=2;var b=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=C;else if(o.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",s,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,s){var a=e._bin.readUshort,o=s,l=[],c=a(i,s);s+=2;for(var u=0;u<c;u++){var h=a(i,s);s+=2,l.push(e.GSUB.readSubClassRule(i,o+h))}return l},e.GSUB.readSubClassRule=function(i,s){var a=e._bin.readUshort,o={},l=a(i,s),c=a(i,s+=2);s+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(i,s)),s+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,s,c),o},e.GSUB.readSubstLookupRecords=function(i,s,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(i,s),o(i,s+2)),s+=4;return l},e.GSUB.readChainSubClassSet=function(i,s){var a=e._bin,o=s,l=[],c=a.readUshort(i,s);s+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,s);s+=2,l.push(e.GSUB.readChainSubClassRule(i,o+h))}return l},e.GSUB.readChainSubClassRule=function(i,s){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(i,s);s+=2,c==1&&u--,o[l[c]]=a.readUshorts(i,s,u),s+=2*o[l[c]].length}return u=a.readUshort(i,s),s+=2,o.subst=a.readUshorts(i,s,2*u),s+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,s){var a=e._bin,o=s,l=[],c=a.readUshort(i,s);s+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,s);s+=2,l.push(e.GSUB.readLigature(i,o+h))}return l},e.GSUB.readLigature=function(i,s){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(i,s),s+=2;var l=a.readUshort(i,s);s+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(i,s)),s+=2;return o},e.head={},e.head.parse=function(i,s,a){var o=e._bin,l={};return o.readFixed(i,s),s+=4,l.fontRevision=o.readFixed(i,s),s+=4,o.readUint(i,s),s+=4,o.readUint(i,s),s+=4,l.flags=o.readUshort(i,s),s+=2,l.unitsPerEm=o.readUshort(i,s),s+=2,l.created=o.readUint64(i,s),s+=8,l.modified=o.readUint64(i,s),s+=8,l.xMin=o.readShort(i,s),s+=2,l.yMin=o.readShort(i,s),s+=2,l.xMax=o.readShort(i,s),s+=2,l.yMax=o.readShort(i,s),s+=2,l.macStyle=o.readUshort(i,s),s+=2,l.lowestRecPPEM=o.readUshort(i,s),s+=2,l.fontDirectionHint=o.readShort(i,s),s+=2,l.indexToLocFormat=o.readShort(i,s),s+=2,l.glyphDataFormat=o.readShort(i,s),s+=2,l},e.hhea={},e.hhea.parse=function(i,s,a){var o=e._bin,l={};return o.readFixed(i,s),s+=4,l.ascender=o.readShort(i,s),s+=2,l.descender=o.readShort(i,s),s+=2,l.lineGap=o.readShort(i,s),s+=2,l.advanceWidthMax=o.readUshort(i,s),s+=2,l.minLeftSideBearing=o.readShort(i,s),s+=2,l.minRightSideBearing=o.readShort(i,s),s+=2,l.xMaxExtent=o.readShort(i,s),s+=2,l.caretSlopeRise=o.readShort(i,s),s+=2,l.caretSlopeRun=o.readShort(i,s),s+=2,l.caretOffset=o.readShort(i,s),s+=2,s+=8,l.metricDataFormat=o.readShort(i,s),s+=2,l.numberOfHMetrics=o.readUshort(i,s),s+=2,l},e.hmtx={},e.hmtx.parse=function(i,s,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(i,s),s+=2,h=l.readShort(i,s),s+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,s,a,o){var l=e._bin,c=l.readUshort(i,s);if(s+=2,c==1)return e.kern.parseV1(i,s-2,a,o);var u=l.readUshort(i,s);s+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){s+=2,a=l.readUshort(i,s),s+=2;var d=l.readUshort(i,s);s+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;s=e.kern.readFormat0(i,s,h)}return h},e.kern.parseV1=function(i,s,a,o){var l=e._bin;l.readFixed(i,s),s+=4;var c=l.readUint(i,s);s+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,s),s+=4;var f=l.readUshort(i,s);s+=2,l.readUshort(i,s),s+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;s=e.kern.readFormat0(i,s,u)}return u},e.kern.readFormat0=function(i,s,a){var o=e._bin,l=-1,c=o.readUshort(i,s);s+=2,o.readUshort(i,s),s+=2,o.readUshort(i,s),s+=2,o.readUshort(i,s),s+=2;for(var u=0;u<c;u++){var h=o.readUshort(i,s);s+=2;var f=o.readUshort(i,s);s+=2;var d=o.readShort(i,s);s+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return s},e.loca={},e.loca.parse=function(i,s,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(i,s+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(i,s+(f<<2)));return c},e.maxp={},e.maxp.parse=function(i,s,a){var o=e._bin,l={},c=o.readUint(i,s);return s+=4,l.numGlyphs=o.readUshort(i,s),s+=2,c==65536&&(l.maxPoints=o.readUshort(i,s),s+=2,l.maxContours=o.readUshort(i,s),s+=2,l.maxCompositePoints=o.readUshort(i,s),s+=2,l.maxCompositeContours=o.readUshort(i,s),s+=2,l.maxZones=o.readUshort(i,s),s+=2,l.maxTwilightPoints=o.readUshort(i,s),s+=2,l.maxStorage=o.readUshort(i,s),s+=2,l.maxFunctionDefs=o.readUshort(i,s),s+=2,l.maxInstructionDefs=o.readUshort(i,s),s+=2,l.maxStackElements=o.readUshort(i,s),s+=2,l.maxSizeOfInstructions=o.readUshort(i,s),s+=2,l.maxComponentElements=o.readUshort(i,s),s+=2,l.maxComponentDepth=o.readUshort(i,s),s+=2),l},e.name={},e.name.parse=function(i,s,a){var o=e._bin,l={};o.readUshort(i,s),s+=2;var c=o.readUshort(i,s);s+=2,o.readUshort(i,s);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=s+=2,d=0;d<c;d++){var g=o.readUshort(i,s);s+=2;var v=o.readUshort(i,s);s+=2;var m=o.readUshort(i,s);s+=2;var p=o.readUshort(i,s);s+=2;var T=o.readUshort(i,s);s+=2;var E=o.readUshort(i,s);s+=2;var x,A=h[p],C=f+12*c+E;if(g==0)x=o.readUnicode(i,C,T/2);else if(g==3&&v==0)x=o.readUnicode(i,C,T/2);else if(v==0)x=o.readASCII(i,C,T);else if(v==1)x=o.readUnicode(i,C,T/2);else if(v==3)x=o.readUnicode(i,C,T/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;x=o.readASCII(i,C,T),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var b="p"+g+","+m.toString(16);l[b]==null&&(l[b]={}),l[b][A!==void 0?A:p]=x,l[b]._lang=m}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){u=R;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,s,a){var o=e._bin.readUshort(i,s);s+=2;var l={};if(o==0)e["OS/2"].version0(i,s,l);else if(o==1)e["OS/2"].version1(i,s,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,s,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,s,l)}return l},e["OS/2"].version0=function(i,s,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(i,s),s+=2,a.usWeightClass=o.readUshort(i,s),s+=2,a.usWidthClass=o.readUshort(i,s),s+=2,a.fsType=o.readUshort(i,s),s+=2,a.ySubscriptXSize=o.readShort(i,s),s+=2,a.ySubscriptYSize=o.readShort(i,s),s+=2,a.ySubscriptXOffset=o.readShort(i,s),s+=2,a.ySubscriptYOffset=o.readShort(i,s),s+=2,a.ySuperscriptXSize=o.readShort(i,s),s+=2,a.ySuperscriptYSize=o.readShort(i,s),s+=2,a.ySuperscriptXOffset=o.readShort(i,s),s+=2,a.ySuperscriptYOffset=o.readShort(i,s),s+=2,a.yStrikeoutSize=o.readShort(i,s),s+=2,a.yStrikeoutPosition=o.readShort(i,s),s+=2,a.sFamilyClass=o.readShort(i,s),s+=2,a.panose=o.readBytes(i,s,10),s+=10,a.ulUnicodeRange1=o.readUint(i,s),s+=4,a.ulUnicodeRange2=o.readUint(i,s),s+=4,a.ulUnicodeRange3=o.readUint(i,s),s+=4,a.ulUnicodeRange4=o.readUint(i,s),s+=4,a.achVendID=[o.readInt8(i,s),o.readInt8(i,s+1),o.readInt8(i,s+2),o.readInt8(i,s+3)],s+=4,a.fsSelection=o.readUshort(i,s),s+=2,a.usFirstCharIndex=o.readUshort(i,s),s+=2,a.usLastCharIndex=o.readUshort(i,s),s+=2,a.sTypoAscender=o.readShort(i,s),s+=2,a.sTypoDescender=o.readShort(i,s),s+=2,a.sTypoLineGap=o.readShort(i,s),s+=2,a.usWinAscent=o.readUshort(i,s),s+=2,a.usWinDescent=o.readUshort(i,s),s+=2},e["OS/2"].version1=function(i,s,a){var o=e._bin;return s=e["OS/2"].version0(i,s,a),a.ulCodePageRange1=o.readUint(i,s),s+=4,a.ulCodePageRange2=o.readUint(i,s),s+=4},e["OS/2"].version2=function(i,s,a){var o=e._bin;return s=e["OS/2"].version1(i,s,a),a.sxHeight=o.readShort(i,s),s+=2,a.sCapHeight=o.readShort(i,s),s+=2,a.usDefault=o.readUshort(i,s),s+=2,a.usBreak=o.readUshort(i,s),s+=2,a.usMaxContext=o.readUshort(i,s),s+=2},e["OS/2"].version5=function(i,s,a){var o=e._bin;return s=e["OS/2"].version2(i,s,a),a.usLowerOpticalPointSize=o.readUshort(i,s),s+=2,a.usUpperOpticalPointSize=o.readUshort(i,s),s+=2},e.post={},e.post.parse=function(i,s,a){var o=e._bin,l={};return l.version=o.readFixed(i,s),s+=4,l.italicAngle=o.readFixed(i,s),s+=4,l.underlinePosition=o.readShort(i,s),s+=2,l.underlineThickness=o.readShort(i,s),s+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,s){var a=i.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return s>=l.map.length?0:l.map[s];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(s<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>s?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[s-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:s+l.idDelta[c])}if(l.format==12){if(s>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=s&&s<=h[1])return h[2]+(s-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,s){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[s]){var o=i.SVG.entries[s];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[s]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=s;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[s],l,c,u,a)}else i.glyf&&e.U._drawGlyf(s,i,a);return a},e.U._drawGlyf=function(i,s,a){var o=s.glyf[i];o==null&&(o=s.glyf[i]=e.glyf._parseGlyf(s,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,s,a))},e.U._simpleGlyph=function(i,s){for(var a=0;a<i.noc;a++){for(var o=a==0?0:i.endPts[a-1]+1,l=i.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&i.flags[c],d=1&i.flags[u],g=1&i.flags[h],v=i.xs[c],m=i.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(s,v,m);continue}e.U.P.moveTo(s,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(s,i.xs[u],i.ys[u]):e.U.P.moveTo(s,(i.xs[u]+v)/2,(i.ys[u]+m)/2);f?d&&e.U.P.lineTo(s,v,m):g?e.U.P.qcurveTo(s,v,m,i.xs[h],i.ys[h]):e.U.P.qcurveTo(s,v,m,(v+i.xs[h])/2,(m+i.ys[h])/2)}e.U.P.closePath(s)}},e.U._compoGlyph=function(i,s,a){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,s,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,s){var a=e._lctf.getInterval(s,i);return a==-1?0:s[a+2]},e.U._applySubs=function(i,s,a,o){for(var l=i.length-s-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[s]))!=-1){if(a.ltype==1)i[s],h.fmt==1?i[s]=i[s]+h.delta:i[s]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,T=0;T<v;T++){for(;i[s+p+(1+T)]==-1;)p++;g.chain[T]!=i[s+p+(1+T)]&&(m=!1)}if(m){for(i[s]=g.nglyph,T=0;T<v+p;T++)i[s+T+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var E=e._lctf.getInterval(h.cDef,i[s]),x=h.cDef[E+2],A=h.scset[x],C=0;C<A.length;C++){var b=A[C],R=b.input;if(!(R.length>l)){for(m=!0,T=0;T<R.length;T++){var y=e._lctf.getInterval(h.cDef,i[s+1+T]);if(E==-1&&h.cDef[y+2]!=R[T]){m=!1;break}}if(m){var _=b.substLookupRecords;for(d=0;d<_.length;d+=2)_[d],_[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,s-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,s)||!e.U._glsCovered(i,h.ahedCvg,s+h.inptCvg.length))continue;var D=h.lookupRec;for(C=0;C<D.length;C+=2){E=D[C];var P=o[D[C+1]];e.U._applySubs(i,s+E,P,o)}}}}},e.U._glsCovered=function(i,s,a){for(var o=0;o<s.length;o++)if(e._lctf.coverageIndex(s[o],i[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,s,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<s.length;c++){var u=s[c];if(u!=-1){for(var h=c<s.length-1&&s[c+1]!=-1?s[c+1]:0,f=e.U.glyphToPath(i,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=i.hmtx.aWidth[u],c<s.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(i,s,a){i.cmds.push("M"),i.crds.push(s,a)},e.U.P.lineTo=function(i,s,a){i.cmds.push("L"),i.crds.push(s,a)},e.U.P.curveTo=function(i,s,a,o,l,c,u){i.cmds.push("C"),i.crds.push(s,a,o,l,c,u)},e.U.P.qcurveTo=function(i,s,a,o,l){i.cmds.push("Q"),i.crds.push(s,a,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,s,a,o,l){for(var c=s.stack,u=s.nStems,h=s.haveWidth,f=s.width,d=s.open,g=0,v=s.x,m=s.y,p=0,T=0,E=0,x=0,A=0,C=0,b=0,R=0,y=0,_=0,D={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,D);var P=D.val;if(g+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(P=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(P=="o6"||P=="o7")for(var L=c.length,N=P=="o6",X=0;X<L;X++){var z=c.shift();N?v+=z:m+=z,N=!N,e.U.P.lineTo(l,v,m)}else if(P=="o8"||P=="o24"){L=c.length;for(var Z=0;Z+6<=L;)p=v+c.shift(),T=m+c.shift(),E=p+c.shift(),x=T+c.shift(),v=E+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,T,E,x,v,m),Z+=6;P=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(T=m,E=(p=v+c.shift())+c.shift(),_=x=T+c.shift(),C=x,R=m,v=(b=(A=(y=E+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,T,E,x,y,_),e.U.P.curveTo(l,A,C,b,R,v,m)),P=="o1235"&&(p=v+c.shift(),T=m+c.shift(),E=p+c.shift(),x=T+c.shift(),y=E+c.shift(),_=x+c.shift(),A=y+c.shift(),C=_+c.shift(),b=A+c.shift(),R=C+c.shift(),v=b+c.shift(),m=R+c.shift(),c.shift(),e.U.P.curveTo(l,p,T,E,x,y,_),e.U.P.curveTo(l,A,C,b,R,v,m)),P=="o1236"&&(p=v+c.shift(),T=m+c.shift(),E=p+c.shift(),_=x=T+c.shift(),C=x,b=(A=(y=E+c.shift())+c.shift())+c.shift(),R=C+c.shift(),v=b+c.shift(),e.U.P.curveTo(l,p,T,E,x,y,_),e.U.P.curveTo(l,A,C,b,R,v,m)),P=="o1237"&&(p=v+c.shift(),T=m+c.shift(),E=p+c.shift(),x=T+c.shift(),y=E+c.shift(),_=x+c.shift(),A=y+c.shift(),C=_+c.shift(),b=A+c.shift(),R=C+c.shift(),Math.abs(b-v)>Math.abs(R-m)?v=b+c.shift():m=R+c.shift(),e.U.P.curveTo(l,p,T,E,x,y,_),e.U.P.curveTo(l,A,C,b,R,v,m));else if(P=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var G=c.shift(),j=c.shift(),K=c.shift(),I=c.shift(),W=e.CFF.glyphBySE(a,K),ee=e.CFF.glyphBySE(a,I);e.U._drawCFF(a.CharStrings[W],s,a,o,l),s.x=G,s.y=j,e.U._drawCFF(a.CharStrings[ee],s,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(P=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(P=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),T=m+c.shift(),E=p+c.shift(),x=T+c.shift(),v=E+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,p,T,E,x,v,m)}else if(P=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,T=m+c.shift(),v=E=p+c.shift(),m=(x=T+c.shift())+c.shift(),e.U.P.curveTo(l,p,T,E,x,v,m);else if(P=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)T=m,E=(p=v+c.shift())+c.shift(),x=T+c.shift(),v=E+c.shift(),m=x,e.U.P.curveTo(l,p,T,E,x,v,m);else if(P=="o10"||P=="o29"){var F=P=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var B=c.pop(),$=F.Subrs[B+F.Bias];s.x=v,s.y=m,s.nStems=u,s.haveWidth=h,s.width=f,s.open=d,e.U._drawCFF($,s,a,o,l),v=s.x,m=s.y,u=s.nStems,h=s.haveWidth,f=s.width,d=s.open}}else if(P=="o30"||P=="o31"){var H=c.length,ne=(Z=0,P=="o31");for(Z+=H-(L=-3&H);Z<L;)ne?(T=m,E=(p=v+c.shift())+c.shift(),m=(x=T+c.shift())+c.shift(),L-Z==5?(v=E+c.shift(),Z++):v=E,ne=!1):(p=v,T=m+c.shift(),E=p+c.shift(),x=T+c.shift(),v=E+c.shift(),L-Z==5?(m=x+c.shift(),Z++):m=x,ne=!0),e.U.P.curveTo(l,p,T,E,x,v,m),Z+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,i),P;c.push(P)}}}s.x=v,s.y=m,s.nStems=u,s.haveWidth=h,s.width=f,s.open=d};var t=e,r={Typr:t};return n.Typr=t,n.default=r,Object.defineProperty(n,"__esModule",{value:!0}),n}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function e0(){return function(n){var e=Uint8Array,t=Uint16Array,r=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,L){for(var N=new t(31),X=0;X<31;++X)N[X]=L+=1<<P[X-1];var z=new r(N[30]);for(X=1;X<30;++X)for(var Z=N[X];Z<N[X+1];++Z)z[Z]=Z-N[X]<<5|X;return[N,z]},l=o(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(s,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(P,L,N){for(var X=P.length,z=0,Z=new t(L);z<X;++z)++Z[P[z]-1];var G,j=new t(L);for(z=0;z<L;++z)j[z]=j[z-1]+Z[z-1]<<1;{G=new t(1<<L);var K=15-L;for(z=0;z<X;++z)if(P[z])for(var I=z<<4|P[z],W=L-P[z],ee=j[P[z]-1]++<<W,F=ee|(1<<W)-1;ee<=F;++ee)G[f[ee]>>>K]=I}return G},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var p=new e(32);for(d=0;d<32;++d)p[d]=5;var T=v(m,9),E=v(p,5),x=function(P){for(var L=P[0],N=1;N<P.length;++N)P[N]>L&&(L=P[N]);return L},A=function(P,L,N){var X=L/8|0;return(P[X]|P[X+1]<<8)>>(7&L)&N},C=function(P,L){var N=L/8|0;return(P[N]|P[N+1]<<8|P[N+2]<<16)>>(7&L)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(P,L,N){var X=new Error(L||b[P]);if(X.code=P,Error.captureStackTrace&&Error.captureStackTrace(X,R),!N)throw X;return X},y=function(P,L,N){var X=P.length;if(!X||N&&!N.l&&X<5)return L||new e(0);var z=!L||N,Z=!N||N.i;N||(N={}),L||(L=new e(3*X));var G,j=function(oe){var Ie=L.length;if(oe>Ie){var Ne=new e(Math.max(2*Ie,oe));Ne.set(L),L=Ne}},K=N.f||0,I=N.p||0,W=N.b||0,ee=N.l,F=N.d,B=N.m,$=N.n,H=8*X;do{if(!ee){N.f=K=A(P,I,1);var ne=A(P,I+1,3);if(I+=3,!ne){var ve=P[(de=((G=I)/8|0)+(7&G&&1)+4)-4]|P[de-3]<<8,_e=de+ve;if(_e>X){Z&&R(0);break}z&&j(W+ve),L.set(P.subarray(de,_e),W),N.b=W+=ve,N.p=I=8*_e;continue}if(ne==1)ee=T,F=E,B=9,$=5;else if(ne==2){var xe=A(P,I,31)+257,he=A(P,I+10,15)+4,De=xe+A(P,I+5,31)+1;I+=14;for(var U=new e(De),Be=new e(19),we=0;we<he;++we)Be[a[we]]=A(P,I+3*we,7);I+=3*he;var Ce=x(Be),ae=(1<<Ce)-1,Ae=v(Be,Ce);for(we=0;we<De;){var de,M=Ae[A(P,I,ae)];if(I+=15&M,(de=M>>>4)<16)U[we++]=de;else{var S=0,O=0;for(de==16?(O=3+A(P,I,3),I+=2,S=U[we-1]):de==17?(O=3+A(P,I,7),I+=3):de==18&&(O=11+A(P,I,127),I+=7);O--;)U[we++]=S}}var J=U.subarray(0,xe),Q=U.subarray(xe);B=x(J),$=x(Q),ee=v(J,B),F=v(Q,$)}else R(1);if(I>H){Z&&R(0);break}}z&&j(W+131072);for(var se=(1<<B)-1,fe=(1<<$)-1,le=I;;le=I){var me=(S=ee[C(P,I)&se])>>>4;if((I+=15&S)>H){Z&&R(0);break}if(S||R(2),me<256)L[W++]=me;else{if(me==256){le=I,ee=null;break}var Le=me-254;if(me>264){var ce=i[we=me-257];Le=A(P,I,(1<<ce)-1)+c[we],I+=ce}var ye=F[C(P,I)&fe],Ee=ye>>>4;if(ye||R(3),I+=15&ye,Q=h[Ee],Ee>3&&(ce=s[Ee],Q+=C(P,I)&(1<<ce)-1,I+=ce),I>H){Z&&R(0);break}z&&j(W+131072);for(var Te=W+Le;W<Te;W+=4)L[W]=L[W-Q],L[W+1]=L[W+1-Q],L[W+2]=L[W+2-Q],L[W+3]=L[W+3-Q];W=Te}}N.l=ee,N.p=le,N.b=W,ee&&(K=1,N.m=B,N.d=F,N.n=$)}while(!K);return W==L.length?L:function(oe,Ie,Ne){(Ne==null||Ne>oe.length)&&(Ne=oe.length);var Ke=new(oe instanceof t?t:oe instanceof r?r:e)(Ne-Ie);return Ke.set(oe.subarray(Ie,Ne)),Ke}(L,0,W)},_=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(_,{stream:!0})}catch{}return n.convert_streams=function(P){var L=new DataView(P),N=0;function X(){var xe=L.getUint16(N);return N+=2,xe}function z(){var xe=L.getUint32(N);return N+=4,xe}function Z(xe){ve.setUint16(_e,xe),_e+=2}function G(xe){ve.setUint32(_e,xe),_e+=4}for(var j={signature:z(),flavor:z(),length:z(),numTables:X(),reserved:X(),totalSfntSize:z(),majorVersion:X(),minorVersion:X(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},K=0;Math.pow(2,K)<=j.numTables;)K++;K--;for(var I=16*Math.pow(2,K),W=16*j.numTables-I,ee=12,F=[],B=0;B<j.numTables;B++)F.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),ee+=16;var $,H=new Uint8Array(12+16*F.length+F.reduce(function(xe,he){return xe+he.origLength+4},0)),ne=H.buffer,ve=new DataView(ne),_e=0;return G(j.flavor),Z(j.numTables),Z(I),Z(K),Z(W),F.forEach(function(xe){G(xe.tag),G(xe.origChecksum),G(ee),G(xe.origLength),xe.outOffset=ee,(ee+=xe.origLength)%4!=0&&(ee+=4-ee%4)}),F.forEach(function(xe){var he,De=P.slice(xe.offset,xe.offset+xe.compLength);if(xe.compLength!=xe.origLength){var U=new Uint8Array(xe.origLength);he=new Uint8Array(De,2),y(he,U)}else U=new Uint8Array(De);H.set(U,xe.outOffset);var Be=0;(ee=xe.outOffset+xe.origLength)%4!=0&&(Be=4-ee%4),H.set(new Uint8Array(Be).buffer,xe.outOffset+xe.origLength),$=ee+Be}),ne.slice(0,$)},Object.defineProperty(n,"__esModule",{value:!0}),n}({}).convert_streams}function t0(n,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,s=2,a=4,o=8,l=16,c=32;let u;function h(b){if(!u){const R={R:s,L:i,D:a,C:l,U:c,T:o};u=new Map;for(let y in r){let _=0;r[y].split(",").forEach(D=>{let[P,L]=D.split("+");P=parseInt(P,36),L=L?parseInt(L,36):0,u.set(_+=P,R[y]);for(let N=L;N--;)u.set(++_,R[y])})}}return u.get(b)||c}const f=1,d=2,g=3,v=4,m=[null,"isol","init","fina","medi"];function p(b){const R=new Uint8Array(b.length);let y=c,_=f,D=-1;for(let P=0;P<b.length;P++){const L=b.codePointAt(P);let N=h(L)|0,X=f;N&o||(y&(i|a|l)?N&(s|a|l)?(X=g,(_===f||_===g)&&R[D]++):N&(i|c)&&(_===d||_===v)&&R[D]--:y&(s|c)&&(_===d||_===v)&&R[D]--,_=R[P]=X,y=N,D=P,L>65535&&P++)}return R}function T(b,R){const y=[];for(let D=0;D<R.length;D++){const P=R.codePointAt(D);P>65535&&D++,y.push(n.U.codeToGlyph(b,P))}const _=b.GSUB;if(_){const{lookupList:D,featureList:P}=_;let L;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,X=[];P.forEach(z=>{if(N.test(z.tag))for(let Z=0;Z<z.tab.length;Z++){if(X[z.tab[Z]])continue;X[z.tab[Z]]=!0;const G=D[z.tab[Z]],j=/^(isol|init|fina|medi)$/.test(z.tag);j&&!L&&(L=p(R));for(let K=0;K<y.length;K++)(!L||!j||m[L[K]]===z.tag)&&n.U._applySubs(y,K,G,D)}})}return y}function E(b,R){const y=new Int16Array(R.length*3);let _=0;for(;_<R.length;_++){const N=R[_];if(N===-1)continue;y[_*3+2]=b.hmtx.aWidth[N];const X=b.GPOS;if(X){const z=X.lookupList;for(let Z=0;Z<z.length;Z++){const G=z[Z];for(let j=0;j<G.tabs.length;j++){const K=G.tabs[j];if(G.ltype===1){if(n._lctf.coverageIndex(K.coverage,N)!==-1&&K.pos){L(K.pos,_);break}}else if(G.ltype===2){let I=null,W=D();if(W!==-1){const ee=n._lctf.coverageIndex(K.coverage,R[W]);if(ee!==-1){if(K.fmt===1){const F=K.pairsets[ee];for(let B=0;B<F.length;B++)F[B].gid2===N&&(I=F[B])}else if(K.fmt===2){const F=n.U._getGlyphClass(R[W],K.classDef1),B=n.U._getGlyphClass(N,K.classDef2);I=K.matrix[F][B]}if(I){I.val1&&L(I.val1,W),I.val2&&L(I.val2,_);break}}}}else if(G.ltype===4){const I=n._lctf.coverageIndex(K.markCoverage,N);if(I!==-1){const W=D(P),ee=W===-1?-1:n._lctf.coverageIndex(K.baseCoverage,R[W]);if(ee!==-1){const F=K.markArray[I],B=K.baseArray[ee][F.markClass];y[_*3]=B.x-F.x+y[W*3]-y[W*3+2],y[_*3+1]=B.y-F.y+y[W*3+1];break}}}else if(G.ltype===6){const I=n._lctf.coverageIndex(K.mark1Coverage,N);if(I!==-1){const W=D();if(W!==-1){const ee=R[W];if(x(b,ee)===3){const F=n._lctf.coverageIndex(K.mark2Coverage,ee);if(F!==-1){const B=K.mark1Array[I],$=K.mark2Array[F][B.markClass];y[_*3]=$.x-B.x+y[W*3]-y[W*3+2],y[_*3+1]=$.y-B.y+y[W*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const z=D();if(z!==-1){const Z=b.kern.glyph1.indexOf(R[z]);if(Z!==-1){const G=b.kern.rval[Z].glyph2.indexOf(N);G!==-1&&(y[z*3+2]+=b.kern.rval[Z].vals[G])}}}}return y;function D(N){for(let X=_-1;X>=0;X--)if(R[X]!==-1&&(!N||N(R[X])))return X;return-1}function P(N){return x(b,N)===1}function L(N,X){for(let z=0;z<3;z++)y[X*3+z]+=N[z]||0}}function x(b,R){const y=b.GDEF&&b.GDEF.glyphClassDef;return y?n.U._getGlyphClass(R,y):0}function A(...b){for(let R=0;R<b.length;R++)if(typeof b[R]=="number")return b[R]}function C(b){const R=Object.create(null),y=b["OS/2"],_=b.hhea,D=b.head.unitsPerEm,P=A(y&&y.sTypoAscender,_&&_.ascender,D),L={unitsPerEm:D,ascender:P,descender:A(y&&y.sTypoDescender,_&&_.descender,0),capHeight:A(y&&y.sCapHeight,P),xHeight:A(y&&y.sxHeight,P),lineGap:A(y&&y.sTypoLineGap,_&&_.lineGap),supportsCodePoint(N){return n.U.codeToGlyph(b,N)>0},forEachGlyph(N,X,z,Z){let G=0;const j=1/L.unitsPerEm*X,K=T(b,N);let I=0;const W=E(b,K);return K.forEach((ee,F)=>{if(ee!==-1){let B=R[ee];if(!B){const{cmds:$,crds:H}=n.U.glyphToPath(b,ee);let ne="",ve=0;for(let U=0,Be=$.length;U<Be;U++){const we=t[$[U]];ne+=$[U];for(let Ce=1;Ce<=we;Ce++)ne+=(Ce>1?",":"")+H[ve++]}let _e,xe,he,De;if(H.length){_e=xe=1/0,he=De=-1/0;for(let U=0,Be=H.length;U<Be;U+=2){let we=H[U],Ce=H[U+1];we<_e&&(_e=we),Ce<xe&&(xe=Ce),we>he&&(he=we),Ce>De&&(De=Ce)}}else _e=he=xe=De=0;B=R[ee]={index:ee,advanceWidth:b.hmtx.aWidth[ee],xMin:_e,yMin:xe,xMax:he,yMax:De,path:ne}}Z.call(null,B,G+W[F*3]*j,W[F*3+1]*j,I),G+=W[F*3+2]*j,z&&(G+=z*X)}I+=N.codePointAt(I)>65535?2:1}),G}};return L}return function(R){const y=new Uint8Array(R,0,4),_=n._bin.readASCII(y,0,4);if(_==="wOFF")R=e(R);else if(_==="wOF2")throw new Error("woff2 fonts not supported");return C(n.parse(R)[0])}}const n0=ji({name:"Typr Font Parser",dependencies:[$_,e0,t0],init(n,e,t){const r=n(),i=e();return t(r,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function i0(){return function(n){var e=function(){this.buckets=new Map};e.prototype.add=function(E){var x=E>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&E))},e.prototype.has=function(E){var x=this.buckets.get(E>>5);return x!==void 0&&(x&1<<(31&E))!=0},e.prototype.serialize=function(){var E=[];return this.buckets.forEach(function(x,A){E.push((+A).toString(36)+":"+x.toString(36))}),E.join(",")},e.prototype.deserialize=function(E){var x=this;this.buckets.clear(),E.split(",").forEach(function(A){var C=A.split(":");x.buckets.set(parseInt(C[0],36),parseInt(C[1],36))})};var t=Math.pow(2,8),r=t-1,i=~r;function s(E){var x=function(C){return C&i}(E).toString(16),A=function(C){return(C&i)+t-1}(E).toString(16);return"codepoint-index/plane"+(E>>16)+"/"+x+"-"+A+".json"}function a(E,x){var A=E&r,C=x.codePointAt(A/6|0);return((C=(C||48)-48)&1<<A%6)!=0}function o(E,x){var A;(A=E,A.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(C){return C.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(C){var b=C[0],R=C[1];R===void 0&&(R=b),x(b,R)})}function l(E,x){o(E,function(A,C){for(var b=A;b<=C;b++)x(b)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(E){var x=h.get(E);return x||(x=new e,l(E.ranges,function(A){return x.add(A)}),h.set(E,x)),x}var g,v=new Map;function m(E,x,A){return E[x]?x:E[A]?A:function(C){for(var b in C)return b}(E)}function p(E,x){var A=x;if(!E.includes(A)){A=1/0;for(var C=0;C<E.length;C++)Math.abs(E[C]-x)<Math.abs(A-x)&&(A=E[C])}return A}function T(E){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){g.add(x)})),g.has(E)}return n.CodePointSet=e,n.clearCache=function(){c={},u={}},n.getFontsForString=function(E,x){x===void 0&&(x={});var A,C=x.lang;C===void 0&&(C=new RegExp("\\p{Script=Hangul}","u").test(A=E)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(A)?"ja":"en");var b=x.category;b===void 0&&(b="sans-serif");var R=x.style;R===void 0&&(R="normal");var y=x.weight;y===void 0&&(y=400);var _=(x.dataUrl||f).replace(/\/$/g,""),D=new Map,P=new Uint8Array(E.length),L={},N={},X=new Array(E.length),z=new Map,Z=!1;function G(I){var W=v.get(I);return W||(W=fetch(_+"/"+I).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(ee){if(_!==f)return Z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+_+'", trying default CDN. '+ee.message),Z=!0),_=f,v.delete(I),G(I);throw ee}),v.set(I,W)),W}for(var j=function(I){var W=E.codePointAt(I),ee=s(W);X[I]=ee,c[ee]||z.has(ee)||z.set(ee,G(ee).then(function(F){c[ee]=F})),W>65535&&(I++,K=I)},K=0;K<E.length;K++)j(K);return Promise.all(z.values()).then(function(){z.clear();for(var I=function(ee){var F=E.codePointAt(ee),B=null,$=c[X[ee]],H=void 0;for(var ne in $){var ve=N[ne];if(ve===void 0&&(ve=N[ne]=new RegExp(ne).test(C||"en")),ve){for(var _e in H=ne,$[ne])if(a(F,$[ne][_e])){B=_e;break}break}}if(!B){e:for(var xe in $)if(xe!==H){for(var he in $[xe])if(a(F,$[xe][he])){B=he;break e}}}B||(console.debug("No font coverage for U+"+F.toString(16)),B="latin"),X[ee]=B,u[B]||z.has(B)||z.set(B,G("font-meta/"+B+".json").then(function(De){u[B]=De})),F>65535&&(ee++,W=ee)},W=0;W<E.length;W++)I(W);return Promise.all(z.values())}).then(function(){for(var I,W=null,ee=0;ee<E.length;ee++){var F=E.codePointAt(ee);if(W&&(T(F)||d(W).has(F)))P[ee]=P[ee-1];else{W=u[X[ee]];var B=L[W.id];if(!B){var $=W.typeforms,H=m($,b,"sans-serif"),ne=m($[H],R,"normal"),ve=p((I=$[H])===null||I===void 0?void 0:I[ne],y);B=L[W.id]=_+"/font-files/"+W.id+"/"+H+"."+ne+"."+ve+".woff"}var _e=D.get(B);_e==null&&(_e=D.size,D.set(B,_e)),P[ee]=_e}F>65535&&(ee++,P[ee]=P[ee-1])}return{fontUrls:Array.from(D.keys()),chars:P}})},Object.defineProperty(n,"__esModule",{value:!0}),n}({})}function r0(n,e){const t=Object.create(null),r=Object.create(null);function i(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=n(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function s(a,o){let l=t[a];l?o(l):r[a]?r[a].push(o):(r[a]=[o],i(a,c=>{c.src=a,t[a]=c,r[a].forEach(u=>u(c)),delete r[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||T();const v=new Map,m=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let b=0;(function R(y=0){for(let _=y,D=a.length;_<D;_++){const P=a.codePointAt(_);if(b===1&&g[d[_-1]].supportsCodePoint(P)||_>0&&/\s/.test(a[_]))d[_]=d[_-1],b===2&&(m[m.length-1][1]=_);else for(let L=d[_],N=c.length;L<=N;L++)if(L===N){const X=b===2?m[m.length-1]:m[m.length]=[_,_];X[1]=_,b=2}else{d[_]=L;const{src:X,unicodeRange:z}=c[L];if(!z||E(P,z)){const Z=t[X];if(!Z){s(X,()=>{R(_)});return}if(Z.supportsCodePoint(P)){let G=v.get(Z);typeof G!="number"&&(G=g.length,g.push(Z),v.set(Z,G)),d[_]=G,b=1;break}}}P>65535&&_+1<D&&(d[_+1]=d[_],_++,b===2&&(m[m.length-1][1]=_))}p()})()}else m.push([0,a.length-1]),p();function p(){if(m.length){const x=m.map(A=>a.substring(A[0],A[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:A,chars:C})=>{const b=g.length;let R=0;m.forEach(_=>{for(let D=0,P=_[1]-_[0];D<=P;D++)d[_[0]+D]=C[R++]+b;R++});let y=0;A.forEach((_,D)=>{s(_,P=>{g[D+b]=P,++y===A.length&&T()})})})}else T()}function T(){o({chars:d,fonts:g})}function E(x,A){for(let C=0;C<A.length;C++){const[b,R=b]=A[C];if(b<=x&&x<=R)return!0}return!1}}}const s0=ji({name:"FontResolver",dependencies:[r0,n0,i0],init(n,e,t){return n(e,t())}});function a0(n,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",s=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:m,style:p,weight:T,preResolvedFonts:E,unicodeFontsURL:x},A){const C=({chars:b,fonts:R})=>{let y,_;const D=[];for(let P=0;P<b.length;P++)b[P]!==_?(_=b[P],D.push(y={start:P,end:P,fontObj:R[b[P]]})):y.end=P;A(D)};E?C(E):n(g,C,{lang:v,fonts:m,style:p,weight:T,unicodeFontsURL:x})}function o({text:g="",font:v,lang:m,sdfGlyphSize:p=64,fontSize:T=400,fontWeight:E=1,fontStyle:x="normal",letterSpacing:A=0,lineHeight:C="normal",maxWidth:b=1/0,direction:R,textAlign:y="left",textIndent:_=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:L=0,anchorY:N=0,metricsOnly:X=!1,unicodeFontsURL:z,preResolvedFonts:Z=null,includeCaretPositions:G=!1,chunkedBoundsSize:j=8192,colorRanges:K=null},I){const W=h(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),T=+T,A=+A,b=+b,C=C||"normal",_=+_,a({text:g,lang:m,style:x,weight:E,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:z,preResolvedFonts:Z},F=>{ee.fontLoad=h()-W;const B=isFinite(b);let $=null,H=null,ne=null,ve=null,_e=null,xe=null,he=null,De=null,U=0,Be=0,we=D!=="nowrap";const Ce=new Map,ae=h();let Ae=_,de=0,M=new f;const S=[M];F.forEach(fe=>{const{fontObj:le}=fe,{ascender:me,descender:Le,unitsPerEm:ce,lineGap:ye,capHeight:Ee,xHeight:Te}=le;let oe=Ce.get(le);if(!oe){const ue=T/ce,te=C==="normal"?(me-Le+ye)*ue:C*T,pe=(te-(me-Le)*ue)/2,Se=Math.min(te,(me-Le)*ue),ge=(me+Le)/2*ue+Se/2;oe={index:Ce.size,src:le.src,fontObj:le,fontSizeMult:ue,unitsPerEm:ce,ascender:me*ue,descender:Le*ue,capHeight:Ee*ue,xHeight:Te*ue,lineHeight:te,baseline:-pe-me*ue,caretTop:ge,caretBottom:ge-Se},Ce.set(le,oe)}const{fontSizeMult:Ie}=oe,Ne=g.slice(fe.start,fe.end+1);let Ke,k;le.forEachGlyph(Ne,T,A,(ue,te,pe,Se)=>{te+=de,Se+=fe.start,Ke=te,k=ue;const ge=g.charAt(Se),Oe=ue.advanceWidth*Ie,Ye=M.count;let ke;if("isEmpty"in ue||(ue.isWhitespace=!!ge&&new RegExp(i).test(ge),ue.canBreakAfter=!!ge&&s.test(ge),ue.isEmpty=ue.xMin===ue.xMax||ue.yMin===ue.yMax||r.test(ge)),!ue.isWhitespace&&!ue.isEmpty&&Be++,we&&B&&!ue.isWhitespace&&te+Oe+Ae>b&&Ye){if(M.glyphAt(Ye-1).glyphObj.canBreakAfter)ke=new f,Ae=-te;else for(let st=Ye;st--;)if(st===0&&P==="break-word"){ke=new f,Ae=-te;break}else if(M.glyphAt(st).glyphObj.canBreakAfter){ke=M.splitAt(st+1);const at=ke.glyphAt(0).x;Ae-=at;for(let ht=ke.count;ht--;)ke.glyphAt(ht).x-=at;break}ke&&(M.isSoftWrapped=!0,M=ke,S.push(M),U=b)}let Ge=M.glyphAt(M.count);Ge.glyphObj=ue,Ge.x=te+Ae,Ge.y=pe,Ge.width=Oe,Ge.charIndex=Se,Ge.fontData=oe,ge===`
`&&(M=new f,S.push(M),Ae=-(te+Oe+A*T)+_)}),de=Ke+k.advanceWidth*Ie+A*T});let O=0;S.forEach(fe=>{let le=!0;for(let me=fe.count;me--;){const Le=fe.glyphAt(me);le&&!Le.glyphObj.isWhitespace&&(fe.width=Le.x+Le.width,fe.width>U&&(U=fe.width),le=!1);let{lineHeight:ce,capHeight:ye,xHeight:Ee,baseline:Te}=Le.fontData;ce>fe.lineHeight&&(fe.lineHeight=ce);const oe=Te-fe.baseline;oe<0&&(fe.baseline+=oe,fe.cap+=oe,fe.ex+=oe),fe.cap=Math.max(fe.cap,fe.baseline+ye),fe.ex=Math.max(fe.ex,fe.baseline+Ee)}fe.baseline-=O,fe.cap-=O,fe.ex-=O,O+=fe.lineHeight});let J=0,Q=0;if(L&&(typeof L=="number"?J=-L:typeof L=="string"&&(J=-U*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),N&&(typeof N=="number"?Q=-N:typeof N=="string"&&(Q=N==="top"?0:N==="top-baseline"?-S[0].baseline:N==="top-cap"?-S[0].cap:N==="top-ex"?-S[0].ex:N==="middle"?O/2:N==="bottom"?O:N==="bottom-baseline"?-S[S.length-1].baseline:c(N)*O)),!X){const fe=e.getEmbeddingLevels(g,R);$=new Uint16Array(Be),H=new Uint8Array(Be),ne=new Float32Array(Be*2),ve={},he=[1/0,1/0,-1/0,-1/0],De=[],G&&(xe=new Float32Array(g.length*4)),K&&(_e=new Uint8Array(Be*3));let le=0,me=-1,Le=-1,ce,ye;if(S.forEach((Ee,Te)=>{let{count:oe,width:Ie}=Ee;if(oe>0){let Ne=0;for(let Se=oe;Se--&&Ee.glyphAt(Se).glyphObj.isWhitespace;)Ne++;let Ke=0,k=0;if(y==="center")Ke=(U-Ie)/2;else if(y==="right")Ke=U-Ie;else if(y==="justify"&&Ee.isSoftWrapped){let Se=0;for(let ge=oe-Ne;ge--;)Ee.glyphAt(ge).glyphObj.isWhitespace&&Se++;k=(U-Ie)/Se}if(k||Ke){let Se=0;for(let ge=0;ge<oe;ge++){let Oe=Ee.glyphAt(ge);const Ye=Oe.glyphObj;Oe.x+=Ke+Se,k!==0&&Ye.isWhitespace&&ge<oe-Ne&&(Se+=k,Oe.width+=k)}}const ue=e.getReorderSegments(g,fe,Ee.glyphAt(0).charIndex,Ee.glyphAt(Ee.count-1).charIndex);for(let Se=0;Se<ue.length;Se++){const[ge,Oe]=ue[Se];let Ye=1/0,ke=-1/0;for(let Ge=0;Ge<oe;Ge++)if(Ee.glyphAt(Ge).charIndex>=ge){let st=Ge,at=Ge;for(;at<oe;at++){let ht=Ee.glyphAt(at);if(ht.charIndex>Oe)break;at<oe-Ne&&(Ye=Math.min(Ye,ht.x),ke=Math.max(ke,ht.x+ht.width))}for(let ht=st;ht<at;ht++){const Ft=Ee.glyphAt(ht);Ft.x=ke-(Ft.x+Ft.width-Ye)}break}}let te;const pe=Se=>te=Se;for(let Se=0;Se<oe;Se++){const ge=Ee.glyphAt(Se);te=ge.glyphObj;const Oe=te.index,Ye=fe.levels[ge.charIndex]&1;if(Ye){const ke=e.getMirroredCharacter(g[ge.charIndex]);ke&&ge.fontData.fontObj.forEachGlyph(ke,0,0,pe)}if(G){const{charIndex:ke,fontData:Ge}=ge,st=ge.x+J,at=ge.x+ge.width+J;xe[ke*4]=Ye?at:st,xe[ke*4+1]=Ye?st:at,xe[ke*4+2]=Ee.baseline+Ge.caretBottom+Q,xe[ke*4+3]=Ee.baseline+Ge.caretTop+Q;const ht=ke-me;ht>1&&u(xe,me,ht),me=ke}if(K){const{charIndex:ke}=ge;for(;ke>Le;)Le++,K.hasOwnProperty(Le)&&(ye=K[Le])}if(!te.isWhitespace&&!te.isEmpty){const ke=le++,{fontSizeMult:Ge,src:st,index:at}=ge.fontData,ht=ve[st]||(ve[st]={});ht[Oe]||(ht[Oe]={path:te.path,pathBounds:[te.xMin,te.yMin,te.xMax,te.yMax]});const Ft=ge.x+J,At=ge.y+Ee.baseline+Q;ne[ke*2]=Ft,ne[ke*2+1]=At;const Vt=Ft+te.xMin*Ge,Qt=At+te.yMin*Ge,hn=Ft+te.xMax*Ge,Nt=At+te.yMax*Ge;Vt<he[0]&&(he[0]=Vt),Qt<he[1]&&(he[1]=Qt),hn>he[2]&&(he[2]=hn),Nt>he[3]&&(he[3]=Nt),ke%j===0&&(ce={start:ke,end:ke,rect:[1/0,1/0,-1/0,-1/0]},De.push(ce)),ce.end++;const xt=ce.rect;if(Vt<xt[0]&&(xt[0]=Vt),Qt<xt[1]&&(xt[1]=Qt),hn>xt[2]&&(xt[2]=hn),Nt>xt[3]&&(xt[3]=Nt),$[ke]=Oe,H[ke]=at,K){const qt=ke*3;_e[qt]=ye>>16&255,_e[qt+1]=ye>>8&255,_e[qt+2]=ye&255}}}}}),xe){const Ee=g.length-me;Ee>1&&u(xe,me,Ee)}}const se=[];Ce.forEach(({index:fe,src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:ye,capHeight:Ee,xHeight:Te})=>{se[fe]={src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:ye,capHeight:Ee,xHeight:Te}}),ee.typesetting=h()-ae,I({glyphIds:$,glyphFontIndices:H,glyphPositions:ne,glyphData:ve,fontData:se,caretPositions:xe,glyphColors:_e,chunkedBounds:De,fontSize:T,topBaseline:Q+S[0].baseline,blockBounds:[J,Q-O,J+U,Q],visibleBounds:he,timings:ee})})}function l(g,v){o({...g,metricsOnly:!0},m=>{const[p,T,E,x]=m.blockBounds;v({width:E-p,height:x-T})})}function c(g){let v=g.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function u(g,v,m){const p=g[v*4],T=g[v*4+1],E=g[v*4+2],x=g[v*4+3],A=(T-p)/m;for(let C=0;C<m;C++){const b=(v+C)*4;g[b]=p+A*C,g[b+1]=p+A*(C+1),g[b+2]=E,g[b+3]=x}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,m,p)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+m]},set(T){this.data[this.index*d.length+m]=T}}),g),{data:null,index:0}),{typeset:o,measure:l}}const ci=()=>(self.performance||Date).now(),zs=nh();let Ic;function o0(n,e,t,r,i,s,a,o,l,c,u=!0){return u?c0(n,e,t,r,i,s,a,o,l,c).then(null,h=>(Ic||(console.warn("WebGL SDF generation failed, falling back to JS",h),Ic=!0),Nc(n,e,t,r,i,s,a,o,l,c))):Nc(n,e,t,r,i,s,a,o,l,c)}const bs=[],l0=5;let Ro=0;function rh(){const n=ci();for(;bs.length&&ci()-n<l0;)bs.shift()();Ro=bs.length?setTimeout(rh,0):0}const c0=(...n)=>new Promise((e,t)=>{bs.push(()=>{const r=ci();try{zs.webgl.generateIntoCanvas(...n),e({timing:ci()-r})}catch(i){t(i)}}),Ro||(Ro=setTimeout(rh,0))}),u0=4,h0=2e3,Fc={};let f0=0;function Nc(n,e,t,r,i,s,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+f0++%u0;let h=Fc[u];return h||(h=Fc[u]={workerModule:ji({name:u,workerId:u,dependencies:[nh,ci],init(f,d){const g=f().javascript.generate;return function(...v){const m=d();return{textureData:g(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(n,e,t,r,i,s).then(({textureData:f,timing:d})=>{const g=ci(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return zs.webglUtils.renderImageData(a,v,o,l,n,e,1<<3-c),d+=ci()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{H_(u)},h0)),{timing:d}})}function d0(n){n._warm||(zs.webgl.isSupported(n),n._warm=!0)}const p0=zs.webglUtils.resizeWebGLCanvasWithoutClearing,gr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},m0=new tt;function Li(){return(self.performance||Date).now()}const Oc=Object.create(null);function g0(n,e){n=_0({},n);const t=Li(),r=[];if(n.font&&r.push({label:"user",src:x0(n.font)}),n.font=r,n.text=""+n.text,n.sdfGlyphSize=n.sdfGlyphSize||gr.sdfGlyphSize,n.unicodeFontsURL=n.unicodeFontsURL||gr.unicodeFontsURL,n.colorRanges!=null){let f={};for(let d in n.colorRanges)if(n.colorRanges.hasOwnProperty(d)){let g=n.colorRanges[d];typeof g!="number"&&(g=m0.set(g).getHex()),f[d]=g}n.colorRanges=f}Object.freeze(n);const{textureWidth:i,sdfExponent:s}=gr,{sdfGlyphSize:a}=n,o=i/a*4;let l=Oc[a];if(!l){const f=document.createElement("canvas");f.width=i,f.height=a*256/o,l=Oc[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new It(f,void 0,void 0,void 0,Jt,Jt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,v0(l)}const{sdfTexture:c,sdfCanvas:u}=l;oh(n).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:m,fontSize:p,timings:T}=f,E=[],x=new Float32Array(d.length*4);let A=0,C=0;const b=Li(),R=v.map(L=>{let N=l.glyphsByFont.get(L.src);return N||l.glyphsByFont.set(L.src,N=new Map),N});d.forEach((L,N)=>{const X=g[N],{src:z,unitsPerEm:Z}=v[X];let G=R[X].get(L);if(!G){const{path:ee,pathBounds:F}=f.glyphData[z][L],B=Math.max(F[2]-F[0],F[3]-F[1])/a*(gr.sdfMargin*a+.5),$=l.glyphCount++,H=[F[0]-B,F[1]-B,F[2]+B,F[3]+B];R[X].set(L,G={path:ee,atlasIndex:$,sdfViewBox:H}),E.push(G)}const{sdfViewBox:j}=G,K=m[C++],I=m[C++],W=p/Z;x[A++]=K+j[0]*W,x[A++]=I+j[1]*W,x[A++]=K+j[2]*W,x[A++]=I+j[3]*W,d[N]=G.atlasIndex}),T.quads=(T.quads||0)+(Li()-b);const y=Li();T.sdf={};const _=u.height,D=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(D*a)));P>_&&(console.info(`Increasing SDF texture size ${_}->${P}`),p0(u,i,P),c.dispose()),Promise.all(E.map(L=>sh(L,l,n.gpuAccelerateSDF).then(({timing:N})=>{T.sdf[L.atlasIndex]=N}))).then(()=>{E.length&&!l.contextLost&&(ah(l),c.needsUpdate=!0),T.sdfTotal=Li()-y,T.total=Li()-t,e(Object.freeze({parameters:n,sdfTexture:c,sdfGlyphSize:a,sdfExponent:s,glyphBounds:x,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||d0(u)})}function sh({path:n,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:i,contextLost:s},a){if(s)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=gr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return o0(r,r,n,t,c,l,i,h,f,d,a)}function v0(n){const e=n.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),n.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),n.contextLost=!1;const r=[];n.glyphsByFont.forEach(i=>{i.forEach(s=>{r.push(sh(s,n,!0))})}),Promise.all(r).then(()=>{ah(n),n.sdfTexture.needsUpdate=!0})})}function _0(n,e){for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}let ds;function x0(n){return ds||(ds=typeof document>"u"?{}:document.createElement("a")),ds.href=n,ds.href}function ah(n){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=n,{width:r,height:i}=e,s=n.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==r*i*4)&&(a=new Uint8Array(r*i*4),t.image={width:r,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),s.readPixels(0,0,r,i,s.RGBA,s.UNSIGNED_BYTE,a)}}const S0=ji({name:"Typesetter",dependencies:[a0,s0,X_],init(n,e,t){return n(e,t())}}),oh=ji({name:"Typesetter",dependencies:[S0],init(n){return function(e){return new Promise(t=>{n.typeset(e,t)})}},getTransferables(n){const e=[];for(let t in n)n[t]&&n[t].buffer&&e.push(n[t].buffer);return e}});oh.onMainThread;const Bc={};function y0(n){let e=Bc[n];return e||(e=Bc[n]=new pi(1,1,n,n).translate(.5,.5,0)),e}const M0="aTroikaGlyphBounds",kc="aTroikaGlyphIndex",E0="aTroikaGlyphColor";class T0 extends Hd{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Os,this.boundingBox=new di}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=y0(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,i,s){this.updateAttributeData(M0,e,4),this.updateAttributeData(kc,t,1),this.updateAttributeData(E0,s,3),this._blockBounds=r,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:i,floor:s,min:a,max:o,sin:l,cos:c}=Math,u=i/2,h=i*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=s((d+u)/h)!==s((g+u)/h)?-f:a(l(d)*f,l(g)*f),m=s((d-u)/h)!==s((g-u)/h)?f:o(l(d)*f,l(g)*f),p=s((d+i)/h)!==s((g+i)/h)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(v,e[1],t<0?-p:0),r.max.set(m,e[3],t<0?0:p)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(kc).count,r=this._chunkedBounds;if(r)for(let i=r.length;i--;){t=r[i].end;let s=r[i].rect;if(s[1]<e.w&&s[3]>e.y&&s[0]<e.z&&s[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new zd(t,r)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const b0=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,A0=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,w0=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,R0=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function C0(n){const e=wo(n,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new nt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ut(0,0,0,0)},uTroikaClipRect:{value:new ut(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new nt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new tt},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:b0,vertexTransform:A0,fragmentDefs:w0,fragmentColorTransform:R0,customRewriter({vertexShader:t,fragmentShader:r}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(r)&&(r=r.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(ih,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const el=new Jo({color:16777215,side:pn,transparent:!0}),zc=8421504,Vc=new pt,ps=new re,Ua=new re,pr=[],P0=new re,La="+x+y";function Gc(n){return Array.isArray(n)?n[0]:n}let lh=()=>{const n=new Xt(new pi(1,1),el);return lh=()=>n,n},ch=()=>{const n=new Xt(new pi(1,1,32,1),el);return ch=()=>n,n};const D0={type:"syncstart"},U0={type:"synccomplete"},uh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],L0=uh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class hh extends Xt{constructor(){const e=new T0;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=zc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=La,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(D0),g0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(i=>i&&i())})),this.dispatchEvent(U0),e&&e()})))}onBeforeRender(e,t,r,i,s,a){this.sync(),s.isTroikaTextMaterial&&this._prepareForRender(s)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return C0(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=el.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Gc(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Gc(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,r.uTroikaSDFExponent.value=i.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,f,d,g,v=0,m=0;if(t){let{outlineWidth:T,outlineOffsetX:E,outlineOffsetY:x,outlineBlur:A,outlineOpacity:C}=this;c=this._parsePercent(T)||0,u=Math.max(0,this._parsePercent(A)||0),f=C,v=this._parsePercent(E)||0,m=this._parsePercent(x)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??zc),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(v,m),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)r.uTroikaClipRect.value.fromArray(p);else{const T=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-T,l[1]-T,l[2]+T,l[3]+T)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const s=t?this.outlineColor||0:this.color;if(s==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new tt;(s!==o._input||typeof s=="object")&&o.set(o._input=s)}let a=this.orientation||La;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==La&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;ps.set(0,0,0)[u]=c==="-"?1:-1,Ua.set(0,0,0)[f]=h==="-"?-1:1,Vc.lookAt(P0,ps.cross(Ua),Ua),o.setFromMatrix4(Vc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new nt){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new nt){return ps.copy(e),this.localPositionToTextCoords(this.worldToLocal(ps),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:i}=this;if(r){const s=r.blockBounds,a=i?ch():lh(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=s[0]+c.getX(u)*(s[2]-s[0]);const f=s[1]+c.getY(u)*(s[3]-s[1]);let d=0;i&&(d=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,pr.length=0,a.raycast(e,pr);for(let u=0;u<pr.length;u++)pr[u].object=this,t.push(pr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,L0.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}uh.forEach(n=>{const e="_private_"+n;Object.defineProperty(hh.prototype,n,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new di;new tt;let fh=()=>{};function I0(n,e){n.indexOf(e)===-1&&n.push(e)}function dh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class ph{constructor(){this.subscriptions=[]}add(e){return I0(this.subscriptions,e),()=>dh(this.subscriptions,e)}notify(e,t,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,t,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function mh(n,e){return e?n*(1e3/e):0}const Wi=n=>n,Co={useManualTiming:!1},ms=["read","resolveKeyframes","update","preRender","render","postRender"];function F0(n,e){let t=new Set,r=new Set,i=!1,s=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),n()),u(o)}const c={schedule:(u,h=!1,f=!1)=>{const g=f&&i?t:r;return h&&a.add(u),g.has(u)||g.add(u),u},cancel:u=>{r.delete(u),a.delete(u)},process:u=>{if(o=u,i){s=!0;return}i=!0,[t,r]=[r,t],t.forEach(l),t.clear(),i=!1,s&&(s=!1,c.process(u))}};return c}const N0=40;function O0(n,e){let t=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,a=ms.reduce((p,T)=>(p[T]=F0(s),p),{}),{read:o,resolveKeyframes:l,update:c,preRender:u,render:h,postRender:f}=a,d=()=>{const p=performance.now();t=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,N0),1),i.timestamp=p,i.isProcessing=!0,o.process(i),l.process(i),c.process(i),u.process(i),h.process(i),f.process(i),i.isProcessing=!1,t&&e&&(r=!1,n(d))},g=()=>{t=!0,r=!0,i.isProcessing||n(d)};return{schedule:ms.reduce((p,T)=>{const E=a[T];return p[T]=(x,A=!1,C=!1)=>(t||g(),E.schedule(x,A,C)),p},{}),cancel:p=>{for(let T=0;T<ms.length;T++)a[ms[T]].cancel(p)},state:i,steps:a}}const{schedule:gn,cancel:Po,state:Ps}=O0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wi,!0);let As;function B0(){As=void 0}const Xn={now:()=>(As===void 0&&Xn.set(Ps.isProcessing||Co.useManualTiming?Ps.timestamp:performance.now()),As),set:n=>{As=n,queueMicrotask(B0)}},Hc=30,k0=n=>!isNaN(parseFloat(n));class z0{constructor(e,t={}){this.version="12.6.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Xn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Xn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=k0(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ph);const r=this.events[e].add(t);return e==="change"?()=>{r(),gn.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Xn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Hc)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Hc);return mh(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wr(n,e){return new z0(n,e)}function gh(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const i=(t==null?void 0:t[n])??r.querySelectorAll(n);return i?Array.from(i):[]}return Array.from(n)}const tl=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};function nl(n){let e;return()=>(e===void 0&&(e=n()),e)}const V0=nl(()=>window.ScrollTimeline!==void 0);class G0{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(i=>{if(V0()&&i.attachTimeline)return i.attachTimeline(e);if(typeof t=="function")return t(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class vh extends G0{then(e,t){return this.finished.finally(e).then(()=>{})}}const mn=n=>n*1e3,Rn=n=>n/1e3,H0={};function W0(n,e){const t=nl(n);return()=>H0[e]??t()}const Rr=W0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_h=(n,e,t=10)=>{let r="";const i=Math.max(Math.round(e/t),2);for(let s=0;s<i;s++)r+=n(s/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`},Ds=2e4;function il(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Ds;)e+=t,r=n.next(e);return e>=Ds?1/0:e}function xh(n,e=100,t){const r=t({...n,keyframes:[0,e]}),i=Math.min(il(r),Ds);return{type:"keyframes",ease:s=>r.next(i*s).value/e,duration:Rn(i)}}const fi=(n,e,t)=>t>e?e:t<n?n:t,X0=5;function Sh(n,e,t){const r=Math.max(e-X0,0);return mh(t-n(r),e-r)}const ft={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Wc=.001;function Y0({duration:n=ft.duration,bounce:e=ft.bounce,velocity:t=ft.velocity,mass:r=ft.mass}){let i,s,a=1-e;a=fi(ft.minDamping,ft.maxDamping,a),n=fi(ft.minDuration,ft.maxDuration,Rn(n)),a<1?(i=c=>{const u=c*a,h=u*n,f=u-t,d=Do(c,a),g=Math.exp(-h);return Wc-f/d*g},s=c=>{const h=c*a*n,f=h*t+t,d=Math.pow(a,2)*Math.pow(c,2)*n,g=Math.exp(-h),v=Do(Math.pow(c,2),a);return(-i(c)+Wc>0?-1:1)*((f-d)*g)/v}):(i=c=>{const u=Math.exp(-c*n),h=(c-t)*n+1;return-.001+u*h},s=c=>{const u=Math.exp(-c*n),h=(t-c)*(n*n);return u*h});const o=5/n,l=K0(i,s,o);if(n=mn(n),isNaN(l))return{stiffness:ft.stiffness,damping:ft.damping,duration:n};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:n}}}const q0=12;function K0(n,e,t){let r=t;for(let i=1;i<q0;i++)r=r-n(r)/e(r);return r}function Do(n,e){return n*Math.sqrt(1-e*e)}const j0=["duration","bounce"],Z0=["stiffness","damping","mass"];function Xc(n,e){return e.some(t=>n[t]!==void 0)}function J0(n){let e={velocity:ft.velocity,stiffness:ft.stiffness,damping:ft.damping,mass:ft.mass,isResolvedFromDuration:!1,...n};if(!Xc(n,Z0)&&Xc(n,j0))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),i=r*r,s=2*fi(.05,1,1-(n.bounce||0))*Math.sqrt(i);e={...e,mass:ft.mass,stiffness:i,damping:s}}else{const t=Y0(n);e={...e,...t,mass:ft.mass},e.isResolvedFromDuration=!0}return e}function Cr(n=ft.visualDuration,e=ft.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:i}=t;const s=t.keyframes[0],a=t.keyframes[t.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:d}=J0({...t,velocity:-Rn(t.velocity||0)}),g=f||0,v=c/(2*Math.sqrt(l*u)),m=a-s,p=Rn(Math.sqrt(l/u)),T=Math.abs(m)<5;r||(r=T?ft.restSpeed.granular:ft.restSpeed.default),i||(i=T?ft.restDelta.granular:ft.restDelta.default);let E;if(v<1){const A=Do(p,v);E=C=>{const b=Math.exp(-v*p*C);return a-b*((g+v*p*m)/A*Math.sin(A*C)+m*Math.cos(A*C))}}else if(v===1)E=A=>a-Math.exp(-p*A)*(m+(g+p*m)*A);else{const A=p*Math.sqrt(v*v-1);E=C=>{const b=Math.exp(-v*p*C),R=Math.min(A*C,300);return a-b*((g+v*p*m)*Math.sinh(R)+A*m*Math.cosh(R))/A}}const x={calculatedDuration:d&&h||null,next:A=>{const C=E(A);if(d)o.done=A>=h;else{let b=0;v<1&&(b=A===0?mn(g):Sh(E,A,C));const R=Math.abs(b)<=r,y=Math.abs(a-C)<=i;o.done=R&&y}return o.value=o.done?a:C,o},toString:()=>{const A=Math.min(il(x),Ds),C=_h(b=>x.next(A*b).value,A,30);return A+"ms "+C},toTransition:()=>{}};return x}Cr.applyToOptions=n=>{const e=xh(n,100,Cr);return n.ease=Rr()?e.ease:"easeOut",n.duration=mn(e.duration),n.type="keyframes",n};function Vs(n){return typeof n=="function"&&"applyToOptions"in n}const Q0=(n,e,t)=>{const r=e-n;return((t-n)%r+r)%r+n},yh=n=>Array.isArray(n)&&typeof n[0]!="number";function Mh(n,e){return yh(n)?n[Q0(0,n.length,e)]:n}const Nr=(n,e,t)=>n+(e-n)*t;function Eh(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const i=tl(0,e,r);n.push(Nr(t,1,i))}}function Th(n){const e=[0];return Eh(e,n.length-1),e}const Lt=n=>!!(n&&n.getVelocity);function rl(n){return typeof n=="object"&&!Array.isArray(n)}function bh(n,e,t,r){return typeof n=="string"&&rl(e)?gh(n,t,r):n instanceof NodeList?Array.from(n):Array.isArray(n)?n:[n]}function $0(n,e,t){return n*(e+1)}function Yc(n,e,t,r){return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,n+parseFloat(e)):e==="<"?t:r.get(e)??n}function ex(n,e,t){for(let r=0;r<n.length;r++){const i=n[r];i.at>e&&i.at<t&&(dh(n,i),r--)}}function tx(n,e,t,r,i,s){ex(n,i,s);for(let a=0;a<e.length;a++)n.push({value:e[a],at:Nr(i,s,r[a]),easing:Mh(t,a)})}function nx(n,e){for(let t=0;t<n.length;t++)n[t]=n[t]/(e+1)}function ix(n,e){return n.at===e.at?n.value===null?1:e.value===null?-1:0:n.at-e.at}const rx="easeInOut";function sx(n,{defaultTransition:e={},...t}={},r,i){const s=e.duration||.3,a=new Map,o=new Map,l={},c=new Map;let u=0,h=0,f=0;for(let d=0;d<n.length;d++){const g=n[d];if(typeof g=="string"){c.set(g,h);continue}else if(!Array.isArray(g)){c.set(g.name,Yc(h,g.at,u,c));continue}let[v,m,p={}]=g;p.at!==void 0&&(h=Yc(h,p.at,u,c));let T=0;const E=(x,A,C,b=0,R=0)=>{const y=ax(x),{delay:_=0,times:D=Th(y),type:P="keyframes",repeat:L,repeatType:N,repeatDelay:X=0,...z}=A;let{ease:Z=e.ease||"easeOut",duration:G}=A;const j=typeof _=="function"?_(b,R):_,K=y.length,I=Vs(P)?P:i==null?void 0:i[P];if(K<=2&&I){let B=100;if(K===2&&cx(y)){const ne=y[1]-y[0];B=Math.abs(ne)}const $={...z};G!==void 0&&($.duration=mn(G));const H=xh($,B,I);Z=H.ease,G=H.duration}G??(G=s);const W=h+j;D.length===1&&D[0]===0&&(D[1]=1);const ee=D.length-y.length;if(ee>0&&Eh(D,ee),y.length===1&&y.unshift(null),L){G=$0(G,L);const B=[...y],$=[...D];Z=Array.isArray(Z)?[...Z]:[Z];const H=[...Z];for(let ne=0;ne<L;ne++){y.push(...B);for(let ve=0;ve<B.length;ve++)D.push($[ve]+(ne+1)),Z.push(ve===0?"linear":Mh(H,ve-1))}nx(D,L)}const F=W+G;tx(C,y,Z,D,W,F),T=Math.max(j+G,T),f=Math.max(F,f)};if(Lt(v)){const x=qc(v,o);E(m,p,Kc("default",x))}else{const x=bh(v,m,r,l),A=x.length;for(let C=0;C<A;C++){m=m,p=p;const b=x[C],R=qc(b,o);for(const y in m)E(m[y],ox(p,y),Kc(y,R),C,A)}}u=h,h+=T}return o.forEach((d,g)=>{for(const v in d){const m=d[v];m.sort(ix);const p=[],T=[],E=[];for(let A=0;A<m.length;A++){const{at:C,value:b,easing:R}=m[A];p.push(b),T.push(tl(0,f,C)),E.push(R||"easeOut")}T[0]!==0&&(T.unshift(0),p.unshift(p[0]),E.unshift(rx)),T[T.length-1]!==1&&(T.push(1),p.push(null)),a.has(g)||a.set(g,{keyframes:{},transition:{}});const x=a.get(g);x.keyframes[v]=p,x.transition[v]={...e,duration:f,ease:E,times:T,...t}}}),a}function qc(n,e){return!e.has(n)&&e.set(n,{}),e.get(n)}function Kc(n,e){return e[n]||(e[n]=[]),e[n]}function ax(n){return Array.isArray(n)?n:[n]}function ox(n,e){return n&&n[e]?{...n,...n[e]}:{...n}}const lx=n=>typeof n=="number",cx=n=>n.every(lx),Pr=new WeakMap;function Ah(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const Zi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ji=new Set(Zi),wh=new Set(["width","height","top","left","right","bottom",...Zi]),ux=n=>Array.isArray(n),hx=n=>ux(n)?n[n.length-1]||0:n;function jc(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Rh(n,e,t,r){if(typeof e=="function"){const[i,s]=jc(r);e=e(t!==void 0?t:n.custom,i,s)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[i,s]=jc(r);e=e(t!==void 0?t:n.custom,i,s)}return e}function fx(n,e,t){const r=n.getProps();return Rh(r,e,r.custom,n)}function dx(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,wr(t))}function px(n,e){const t=fx(n,e);let{transitionEnd:r={},transition:i={},...s}=t||{};s={...s,...r};for(const a in s){const o=hx(s[a]);dx(n,a,o)}}function mx(n){return!!(Lt(n)&&n.add)}function gx(n,e){const t=n.getValue("willChange");if(mx(t))return t.add(e);if(!t&&Co.WillChange){const r=new Co.WillChange("auto");n.addValue("willChange",r),r.add(e)}}const sl=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vx="framerAppearId",_x="data-"+sl(vx);function xx(n){return n.props[_x]}const al=n=>Array.isArray(n)&&typeof n[0]=="number",vr=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Uo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:vr([0,.65,.55,1]),circOut:vr([.55,0,1,.45]),backIn:vr([.31,.01,.66,-.59]),backOut:vr([.33,1.53,.69,.99])};function Ch(n,e){if(n)return typeof n=="function"&&Rr()?_h(n,e):al(n)?vr(n):Array.isArray(n)?n.map(t=>Ch(t,e)||Uo.easeOut):Uo[n]}function Sx(n,e,t,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={},c=void 0){const u={[e]:t};l&&(u.offset=l);const h=Ch(o,i);return Array.isArray(h)&&(u.easing=h),n.animate(u,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal",pseudoElement:c})}function Ph(n){return!!(typeof n=="function"&&Rr()||!n||typeof n=="string"&&(n in Uo||Rr())||al(n)||Array.isArray(n)&&n.every(Ph))}function Zc(n,e){n.timeline=e,n.onfinish=null}const Dh=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,yx=1e-7,Mx=12;function Ex(n,e,t,r,i){let s,a,o=0;do a=e+(t-e)/2,s=Dh(a,r,i)-n,s>0?t=a:e=a;while(Math.abs(s)>yx&&++o<Mx);return a}function Or(n,e,t,r){if(n===e&&t===r)return Wi;const i=s=>Ex(s,0,1,n,t);return s=>s===0||s===1?s:Dh(i(s),e,r)}const Uh=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Lh=n=>e=>1-n(1-e),Ih=Or(.33,1.53,.69,.99),ol=Lh(Ih),Fh=Uh(ol),Nh=n=>(n*=2)<1?.5*ol(n):.5*(2-Math.pow(2,-10*(n-1))),ll=n=>1-Math.sin(Math.acos(n)),Tx=Lh(ll),Oh=Uh(ll),Bh=n=>/^0[^.\s]+$/u.test(n);function bx(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Bh(n):!0}const Qi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Dr={...Qi,transform:n=>fi(0,1,n)},gs={...Qi,default:1},yr=n=>Math.round(n*1e5)/1e5,cl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ax(n){return n==null}const wx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ul=(n,e)=>t=>!!(typeof t=="string"&&wx.test(t)&&t.startsWith(n)||e&&!Ax(t)&&Object.prototype.hasOwnProperty.call(t,e)),kh=(n,e,t)=>r=>{if(typeof r!="string")return r;const[i,s,a,o]=r.match(cl);return{[n]:parseFloat(i),[e]:parseFloat(s),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},Rx=n=>fi(0,255,n),Ia={...Qi,transform:n=>Math.round(Rx(n))},oi={test:ul("rgb","red"),parse:kh("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Ia.transform(n)+", "+Ia.transform(e)+", "+Ia.transform(t)+", "+yr(Dr.transform(r))+")"};function Cx(n){let e="",t="",r="",i="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),i=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),i=n.substring(4,5),e+=e,t+=t,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Lo={test:ul("#"),parse:Cx,transform:oi.transform},Br=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Gn=Br("deg"),Bi=Br("%"),Xe=Br("px"),Px=Br("vh"),Dx=Br("vw"),Jc={...Bi,parse:n=>Bi.parse(n)/100,transform:n=>Bi.transform(n*100)},Fi={test:ul("hsl","hue"),parse:kh("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Bi.transform(yr(e))+", "+Bi.transform(yr(t))+", "+yr(Dr.transform(r))+")"},Pt={test:n=>oi.test(n)||Lo.test(n)||Fi.test(n),parse:n=>oi.test(n)?oi.parse(n):Fi.test(n)?Fi.parse(n):Lo.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?oi.transform(n):Fi.transform(n)},Ux=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Lx(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(cl))==null?void 0:e.length)||0)+(((t=n.match(Ux))==null?void 0:t.length)||0)>0}const zh="number",Vh="color",Ix="var",Fx="var(",Qc="${}",Nx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ur(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},i=[];let s=0;const o=e.replace(Nx,l=>(Pt.test(l)?(r.color.push(s),i.push(Vh),t.push(Pt.parse(l))):l.startsWith(Fx)?(r.var.push(s),i.push(Ix),t.push(l)):(r.number.push(s),i.push(zh),t.push(parseFloat(l))),++s,Qc)).split(Qc);return{values:t,split:o,indexes:r,types:i}}function Gh(n){return Ur(n).values}function Hh(n){const{split:e,types:t}=Ur(n),r=e.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=e[a],i[a]!==void 0){const o=t[a];o===zh?s+=yr(i[a]):o===Vh?s+=Pt.transform(i[a]):s+=i[a]}return s}}const Ox=n=>typeof n=="number"?0:n;function Bx(n){const e=Gh(n);return Hh(n)(e.map(Ox))}const $i={test:Lx,parse:Gh,createTransformer:Hh,getAnimatableNone:Bx},kx=new Set(["brightness","contrast","saturate","opacity"]);function zx(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(cl)||[];if(!r)return n;const i=t.replace(r,"");let s=kx.has(e)?1:0;return r!==t&&(s*=100),e+"("+s+i+")"}const Vx=/\b([a-z-]*)\(.*?\)/gu,Io={...$i,getAnimatableNone:n=>{const e=n.match(Vx);return e?e.map(zx).join(" "):n}},Gx={borderWidth:Xe,borderTopWidth:Xe,borderRightWidth:Xe,borderBottomWidth:Xe,borderLeftWidth:Xe,borderRadius:Xe,radius:Xe,borderTopLeftRadius:Xe,borderTopRightRadius:Xe,borderBottomRightRadius:Xe,borderBottomLeftRadius:Xe,width:Xe,maxWidth:Xe,height:Xe,maxHeight:Xe,top:Xe,right:Xe,bottom:Xe,left:Xe,padding:Xe,paddingTop:Xe,paddingRight:Xe,paddingBottom:Xe,paddingLeft:Xe,margin:Xe,marginTop:Xe,marginRight:Xe,marginBottom:Xe,marginLeft:Xe,backgroundPositionX:Xe,backgroundPositionY:Xe},Hx={rotate:Gn,rotateX:Gn,rotateY:Gn,rotateZ:Gn,scale:gs,scaleX:gs,scaleY:gs,scaleZ:gs,skew:Gn,skewX:Gn,skewY:Gn,distance:Xe,translateX:Xe,translateY:Xe,translateZ:Xe,x:Xe,y:Xe,z:Xe,perspective:Xe,transformPerspective:Xe,opacity:Dr,originX:Jc,originY:Jc,originZ:Xe},$c={...Qi,transform:Math.round},hl={...Gx,...Hx,zIndex:$c,size:Xe,fillOpacity:Dr,strokeOpacity:Dr,numOctaves:$c},Wx={...hl,color:Pt,backgroundColor:Pt,outlineColor:Pt,fill:Pt,stroke:Pt,borderColor:Pt,borderTopColor:Pt,borderRightColor:Pt,borderBottomColor:Pt,borderLeftColor:Pt,filter:Io,WebkitFilter:Io},Wh=n=>Wx[n];function Xh(n,e){let t=Wh(n);return t!==Io&&(t=$i),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const Xx=new Set(["auto","none","0"]);function Yx(n,e,t){let r=0,i;for(;r<n.length&&!i;){const s=n[r];typeof s=="string"&&!Xx.has(s)&&Ur(s).values.length&&(i=n[r]),r++}if(i&&t)for(const s of e)n[s]=Xh(t,i)}const li=n=>n*180/Math.PI,Fo=n=>{const e=li(Math.atan2(n[1],n[0]));return No(e)},qx={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Fo,rotateZ:Fo,skewX:n=>li(Math.atan(n[1])),skewY:n=>li(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},No=n=>(n=n%360,n<0&&(n+=360),n),eu=Fo,tu=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),nu=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Kx={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:tu,scaleY:nu,scale:n=>(tu(n)+nu(n))/2,rotateX:n=>No(li(Math.atan2(n[6],n[5]))),rotateY:n=>No(li(Math.atan2(-n[2],n[0]))),rotateZ:eu,rotate:eu,skewX:n=>li(Math.atan(n[4])),skewY:n=>li(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function iu(n){return n.includes("scale")?1:0}function Oo(n,e){if(!n||n==="none")return iu(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(t)r=Kx,i=t;else{const o=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=qx,i=o}if(!i)return iu(e);const s=r[e],a=i[1].split(",").map(Zx);return typeof s=="function"?s(a):a[s]}const jx=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Oo(t,e)};function Zx(n){return parseFloat(n.trim())}const ru=n=>n===Qi||n===Xe,Jx=new Set(["x","y","z"]),Qx=Zi.filter(n=>!Jx.has(n));function $x(n){const e=[];return Qx.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Xi={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Oo(e,"x"),y:(n,{transform:e})=>Oo(e,"y")};Xi.translateX=Xi.x;Xi.translateY=Xi.y;const ui=new Set;let Bo=!1,ko=!1;function Yh(){if(ko){const n=Array.from(ui).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const i=$x(r);i.length&&(t.set(r,i),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=t.get(r);i&&i.forEach(([s,a])=>{var o;(o=r.getValue(s))==null||o.set(a)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ko=!1,Bo=!1,ui.forEach(n=>n.complete()),ui.clear()}function qh(){ui.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(ko=!0)})}function eS(){qh(),Yh()}class fl{constructor(e,t,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ui.add(this),Bo||(Bo=!0,gn.read(qh),gn.resolveKeyframes(Yh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const a=i==null?void 0:i.get(),o=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const l=r.readValue(t,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),i&&a===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ui.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ui.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Kh=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),jh=n=>e=>typeof e=="string"&&e.startsWith(n),Zh=jh("--"),tS=jh("var(--"),dl=n=>tS(n)?nS.test(n.split("/*")[0].trim()):!1,nS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,iS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rS(n){const e=iS.exec(n);if(!e)return[,];const[,t,r,i]=e;return[`--${t??r}`,i]}function Jh(n,e,t=1){const[r,i]=rS(n);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const a=s.trim();return Kh(a)?parseFloat(a):a}return dl(i)?Jh(i,e,t+1):i}const Qh=n=>e=>e.test(n),sS={test:n=>n==="auto",parse:n=>n},$h=[Qi,Xe,Bi,Gn,Dx,Px,sS],su=n=>$h.find(Qh(n));class ef extends fl{constructor(e,t,r,i,s){super(e,t,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),dl(c))){const u=Jh(c,t.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!wh.has(r)||e.length!==2)return;const[i,s]=e,a=su(i),o=su(s);if(a!==o)if(ru(a)&&ru(o))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let i=0;i<e.length;i++)bx(e[i])&&r.push(i);r.length&&Yx(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Xi[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var o;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(t);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,a=r[s];r[s]=Xi[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const au=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&($i.test(n)||n==="0")&&!n.startsWith("url("));function aS(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function oS(n,e,t,r){const i=n[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=n[n.length-1],a=au(i,e),o=au(s,e);return!a||!o?!1:aS(n)||(t==="spring"||Vs(t))&&r}const lS=n=>n!==null;function Gs(n,{repeat:e,repeatType:t="loop"},r){const i=n.filter(lS),s=e&&t!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const cS=40;class tf{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Xn.now(),this.options={autoplay:e,delay:t,type:r,repeat:i,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>cS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&eS(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Xn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:c}=this.options;if(!c&&!oS(e,r,i,s))if(a)this.options.duration=0;else{l&&l(Gs(e,this.options,t)),o&&o(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,t);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function Fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function uS({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let i=0,s=0,a=0;if(!e)i=s=a=t;else{const o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;i=Fa(l,o,n+1/3),s=Fa(l,o,n),a=Fa(l,o,n-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Us(n,e){return t=>t>0?e:n}const Na=(n,e,t)=>{const r=n*n,i=t*(e*e-r)+r;return i<0?0:Math.sqrt(i)},hS=[Lo,oi,Fi],fS=n=>hS.find(e=>e.test(n));function ou(n){const e=fS(n);if(!e)return!1;let t=e.parse(n);return e===Fi&&(t=uS(t)),t}const lu=(n,e)=>{const t=ou(n),r=ou(e);if(!t||!r)return Us(n,e);const i={...t};return s=>(i.red=Na(t.red,r.red,s),i.green=Na(t.green,r.green,s),i.blue=Na(t.blue,r.blue,s),i.alpha=Nr(t.alpha,r.alpha,s),oi.transform(i))},dS=(n,e)=>t=>e(n(t)),pl=(...n)=>n.reduce(dS),zo=new Set(["none","hidden"]);function pS(n,e){return zo.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function mS(n,e){return t=>Nr(n,e,t)}function ml(n){return typeof n=="number"?mS:typeof n=="string"?dl(n)?Us:Pt.test(n)?lu:_S:Array.isArray(n)?nf:typeof n=="object"?Pt.test(n)?lu:gS:Us}function nf(n,e){const t=[...n],r=t.length,i=n.map((s,a)=>ml(s)(s,e[a]));return s=>{for(let a=0;a<r;a++)t[a]=i[a](s);return t}}function gS(n,e){const t={...n,...e},r={};for(const i in t)n[i]!==void 0&&e[i]!==void 0&&(r[i]=ml(n[i])(n[i],e[i]));return i=>{for(const s in r)t[s]=r[s](i);return t}}function vS(n,e){const t=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const s=e.types[i],a=n.indexes[s][r[s]],o=n.values[a]??0;t[i]=o,r[s]++}return t}const _S=(n,e)=>{const t=$i.createTransformer(e),r=Ur(n),i=Ur(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?zo.has(n)&&!i.values.length||zo.has(e)&&!r.values.length?pS(n,e):pl(nf(vS(r,i),i.values),t):Us(n,e)};function rf(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Nr(n,e,t):ml(n)(n,e)}function cu({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const h=n[0],f={done:!1,value:h},d=R=>o!==void 0&&R<o||l!==void 0&&R>l,g=R=>o===void 0?l:l===void 0||Math.abs(o-R)<Math.abs(l-R)?o:l;let v=t*e;const m=h+v,p=a===void 0?m:a(m);p!==m&&(v=p-h);const T=R=>-v*Math.exp(-R/r),E=R=>p+T(R),x=R=>{const y=T(R),_=E(R);f.done=Math.abs(y)<=c,f.value=f.done?p:_};let A,C;const b=R=>{d(f.value)&&(A=R,C=Cr({keyframes:[f.value,g(f.value)],velocity:Sh(E,R,f.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return b(0),{calculatedDuration:null,next:R=>{let y=!1;return!C&&A===void 0&&(y=!0,x(R),b(R)),A!==void 0&&R>=A?C.next(R-A):(!y&&x(R),f)}}}const xS=Or(.42,0,1,1),SS=Or(0,0,.58,1),sf=Or(.42,0,.58,1),yS={linear:Wi,easeIn:xS,easeInOut:sf,easeOut:SS,circIn:ll,circInOut:Oh,circOut:Tx,backIn:ol,backInOut:Fh,backOut:Ih,anticipate:Nh},uu=n=>{if(al(n)){fh(n.length===4);const[e,t,r,i]=n;return Or(e,t,r,i)}else if(typeof n=="string")return yS[n];return n};function MS(n,e,t){const r=[],i=t||rf,s=n.length-1;for(let a=0;a<s;a++){let o=i(n[a],n[a+1]);if(e){const l=Array.isArray(e)?e[a]||Wi:e;o=pl(l,o)}r.push(o)}return r}function ES(n,e,{clamp:t=!0,ease:r,mixer:i}={}){const s=n.length;if(fh(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=n[0]===n[1];n[0]>n[s-1]&&(n=[...n].reverse(),e=[...e].reverse());const o=MS(e,r,i),l=o.length,c=u=>{if(a&&u<n[0])return e[0];let h=0;if(l>1)for(;h<n.length-2&&!(u<n[h+1]);h++);const f=tl(n[h],n[h+1],u);return o[h](f)};return t?u=>c(fi(n[0],n[s-1],u)):c}function TS(n,e){return n.map(t=>t*e)}function bS(n,e){return n.map(()=>e||sf).splice(0,n.length-1)}function Ls({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const i=yh(r)?r.map(uu):uu(r),s={done:!1,value:e[0]},a=TS(t&&t.length===e.length?t:Th(e),n),o=ES(a,e,{ease:Array.isArray(i)?i:bS(e,i)});return{calculatedDuration:n,next:l=>(s.value=o(l),s.done=l>=n,s)}}const AS=n=>{const e=({timestamp:t})=>n(t);return{start:()=>gn.update(e,!0),stop:()=>Po(e),now:()=>Ps.isProcessing?Ps.timestamp:Xn.now()}},wS={decay:cu,inertia:cu,tween:Ls,keyframes:Ls,spring:Cr},RS=n=>n/100;class gl extends tf{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:t,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||fl,o=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new a(s,o,t,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,o=Vs(t)?t:wS[t]||Ls;let l,c;o!==Ls&&typeof e[0]!="number"&&(l=pl(RS,rf(e[0],e[1])),e=[0,100]);const u=o({...this.options,keyframes:e});s==="mirror"&&(c=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=il(u));const{calculatedDuration:h}=u,f=h+i,d=f*(r+1)-i;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:f,totalDuration:d}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:R}=this.options;return{done:!0,value:R[R.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:h}=r;if(this.startTime===null)return s.next(0);const{delay:f,repeat:d,repeatType:g,repeatDelay:v,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const p=this.currentTime-f*(this.speed>=0?1:-1),T=this.speed>=0?p<0:p>u;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let E=this.currentTime,x=s;if(d){const R=Math.min(this.currentTime,u)/h;let y=Math.floor(R),_=R%1;!_&&R>=1&&(_=1),_===1&&y--,y=Math.min(y,d+1),!!(y%2)&&(g==="reverse"?(_=1-_,v&&(_-=v/h)):g==="mirror"&&(x=a)),E=fi(0,1,_)*h}const A=T?{done:!1,value:l[0]}:x.next(E);o&&(A.value=o(A.value));let{done:C}=A;!T&&c!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return b&&i!==void 0&&(A.value=Gs(l,this.options,i)),m&&m(A.value),b&&this.finish(),A}get duration(){const{resolved:e}=this;return e?Rn(e.calculatedDuration):0}get time(){return Rn(this.currentTime)}set time(e){e=mn(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Rn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=AS,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),t&&t();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=this.currentTime??0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const CS=new Set(["opacity","clipPath","filter","transform"]),PS=nl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Is=10,DS=2e4;function US(n){return Vs(n.type)||n.type==="spring"||!Ph(n.ease)}function LS(n,e){const t=new gl({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const i=[];let s=0;for(;!r.done&&s<DS;)r=t.sample(s),i.push(r.value),s+=Is;return{times:void 0,keyframes:i,duration:s-Is,ease:"linear"}}const af={anticipate:Nh,backInOut:Fh,circInOut:Oh};function IS(n){return n in af}class hu extends tf{constructor(e){super(e);const{name:t,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new ef(s,(a,o)=>this.onKeyframesResolved(a,o),t,r,i),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:i,ease:s,type:a,motionValue:o,name:l,startTime:c}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Rr()&&IS(s)&&(s=af[s]),US(this.options)){const{onComplete:h,onUpdate:f,motionValue:d,element:g,...v}=this.options,m=LS(e,v);e=m.keyframes,e.length===1&&(e[1]=e[0]),r=m.duration,i=m.times,s=m.ease,a="keyframes"}const u=Sx(o.owner.current,l,e,{...this.options,duration:r,times:i,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Zc(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;o.set(Gs(e,this.options,t)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:r,times:i,type:a,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Rn(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Rn(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=mn(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Wi;const{animation:r}=t;Zc(r,e)}return Wi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:i,type:s,ease:a,times:o}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:h,element:f,...d}=this.options,g=new gl({...d,keyframes:r,duration:i,type:s,ease:a,times:o,isGenerator:!0}),v=mn(this.time);c.setWithVelocity(g.sample(v-Is).value,g.sample(v).value,Is)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:i,repeatType:s,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return PS()&&r&&CS.has(r)&&(r!=="transform"||!c)&&!l&&!i&&s!=="mirror"&&a!==0&&o!=="inertia"}}const FS={type:"spring",stiffness:500,damping:25,restSpeed:10},NS=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),OS={type:"keyframes",duration:.8},BS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},kS=(n,{keyframes:e})=>e.length>2?OS:Ji.has(n)?n.startsWith("scale")?NS(e[1]):FS:BS;function zS({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const of=(n,e,t,r={},i,s)=>a=>{const o=Ah(r,n)||{},l=o.delay||r.delay||0;let{elapsed:c=0}=r;c=c-mn(l);let u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:f=>{e.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:n,motionValue:e,element:s?void 0:i};zS(o)||(u={...u,...kS(n,u)}),u.duration&&(u.duration=mn(u.duration)),u.repeatDelay&&(u.repeatDelay=mn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),u.allowFlatten=!o.type&&!o.ease,h&&!s&&e.get()!==void 0){const f=Gs(u.keyframes,o);if(f!==void 0)return gn.update(()=>{u.onUpdate(f),u.onComplete()}),new vh([])}return!s&&hu.supports(u)?new hu(u):new gl(u)};function VS({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function GS(n,e,{delay:t=0,transitionOverride:r,type:i}={}){let{transition:s=n.getDefaultTransition(),transitionEnd:a,...o}=e;r&&(s=r);const l=[],c=i&&n.animationState&&n.animationState.getState()[i];for(const u in o){const h=n.getValue(u,n.latestValues[u]??null),f=o[u];if(f===void 0||c&&VS(c,u))continue;const d={delay:t,...Ah(s||{},u)};let g=!1;if(window.MotionHandoffAnimation){const m=xx(n);if(m){const p=window.MotionHandoffAnimation(m,u,gn);p!==null&&(d.startTime=p,g=!0)}}gx(n,u),h.start(of(u,h,f,n.shouldReduceMotion&&wh.has(u)?{type:!1}:d,n,g));const v=h.animation;v&&l.push(v)}return a&&Promise.all(l).then(()=>{gn.update(()=>{a&&px(n,a)})}),l}function HS(n){return n instanceof SVGElement&&n.tagName!=="svg"}const fu=()=>({min:0,max:0}),vl=()=>({x:fu(),y:fu()}),du={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vo={};for(const n in du)Vo[n]={isEnabled:e=>du[n].some(t=>!!e[t])};const WS=typeof window<"u",Go={current:null},lf={current:!1};function XS(){if(lf.current=!0,!!WS)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Go.current=n.matches;n.addListener(e),e()}else Go.current=!1}const YS=[...$h,Pt,$i],qS=n=>YS.find(Qh(n));function KS(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function jS(n){return typeof n=="string"||Array.isArray(n)}const ZS=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],JS=["initial",...ZS];function cf(n){return KS(n.animate)||JS.some(e=>jS(n[e]))}function QS(n){return!!(cf(n)||n.variants)}function $S(n,e,t){for(const r in e){const i=e[r],s=t[r];if(Lt(i))n.addValue(r,i);else if(Lt(s))n.addValue(r,wr(i,{owner:n}));else if(s!==i)if(n.hasValue(r)){const a=n.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=n.getStaticValue(r);n.addValue(r,wr(a!==void 0?a:i,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const pu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class uf{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=Xn.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,gn.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=a;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=cf(t),this.isVariantNode=QS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in f){const g=f[d];l[d]!==void 0&&Lt(g)&&g.set(l[d],!1)}}mount(e){this.current=e,Pr.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),lf.current||XS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Go.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Po(this.notifyUpdate),Po(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ji.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=t.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&gn.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{i(),s(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Vo){const t=Vo[e];if(!t)continue;const{isEnabled:r,Feature:i}=t;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vl()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<pu.length;r++){const i=pu[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=e[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=$S(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=wr(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Kh(r)||Bh(r))?r=parseFloat(r):!qS(r)&&$i.test(t)&&(r=Xh(e,t)),this.setBaseTarget(e,Lt(r)?r.get():r)),Lt(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var s;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const a=Rh(this.props,t,(s=this.presenceContext)==null?void 0:s.custom);a&&(r=a[e])}if(t&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!Lt(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ph),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class hf extends uf{constructor(){super(...arguments),this.KeyframeResolver=ef}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Lt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}const ff=(n,e)=>e&&typeof n=="number"?e.transform(n):n,ey={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ty=Zi.length;function ny(n,e,t){let r="",i=!0;for(let s=0;s<ty;s++){const a=Zi[s],o=n[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||t){const c=ff(o,hl[a]);if(!l){i=!1;const u=ey[a]||a;r+=`${u}(${c}) `}t&&(e[a]=c)}}return r=r.trim(),t?r=t(e,i?"":r):i&&(r="none"),r}function df(n,e,t){const{style:r,vars:i,transformOrigin:s}=n;let a=!1,o=!1;for(const l in e){const c=e[l];if(Ji.has(l)){a=!0;continue}else if(Zh(l)){i[l]=c;continue}else{const u=ff(c,hl[l]);l.startsWith("origin")?(o=!0,s[l]=u):r[l]=u}}if(e.transform||(a||t?r.transform=ny(e,n.transform,t):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;r.transformOrigin=`${l} ${c} ${u}`}}const iy={offset:"stroke-dashoffset",array:"stroke-dasharray"},ry={offset:"strokeDashoffset",array:"strokeDasharray"};function sy(n,e,t=1,r=0,i=!0){n.pathLength=1;const s=i?iy:ry;n[s.offset]=Xe.transform(-r);const a=Xe.transform(e),o=Xe.transform(t);n[s.array]=`${a} ${o}`}function mu(n,e,t){return typeof n=="string"?n:Xe.transform(e+t*n)}function ay(n,e,t){const r=mu(e,n.x,n.width),i=mu(t,n.y,n.height);return`${r} ${i}`}function oy(n,{attrX:e,attrY:t,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},u,h){if(df(n,c,h),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:f,style:d,dimensions:g}=n;f.transform&&(g&&(d.transform=f.transform),delete f.transform),g&&(i!==void 0||s!==void 0||d.transform)&&(d.transformOrigin=ay(g,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),t!==void 0&&(f.y=t),r!==void 0&&(f.scale=r),a!==void 0&&sy(f,a,o,l,!1)}const pf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ly=n=>typeof n=="string"&&n.toLowerCase()==="svg";function cy(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}function mf(n,{style:e,vars:t},r,i){Object.assign(n.style,e,i&&i.getProjectionStyles(r));for(const s in t)n.style.setProperty(s,t[s])}function uy(n,e,t,r){mf(n,e,void 0,r);for(const i in e.attrs)n.setAttribute(pf.has(i)?i:sl(i),e.attrs[i])}const hy={};function fy(n,{layout:e,layoutId:t}){return Ji.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!hy[n]||n==="opacity")}function gf(n,e,t){var s;const{style:r}=n,i={};for(const a in r)(Lt(r[a])||e.style&&Lt(e.style[a])||fy(a,n)||((s=t==null?void 0:t.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(i[a]=r[a]);return i}function dy(n,e,t){const r=gf(n,e,t);for(const i in n)if(Lt(n[i])||Lt(e[i])){const s=Zi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=n[i]}return r}class py extends hf{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vl,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&cy(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ji.has(t)){const r=Wh(t);return r&&r.default||0}return t=pf.has(t)?t:sl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return dy(e,t,r)}onBindTransform(){this.current&&!this.renderState.dimensions&&gn.postRender(this.updateDimensions)}build(e,t,r){oy(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,i){uy(e,t,r,i)}mount(e){this.isSVGTag=ly(e.tagName),super.mount(e)}}function my({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function gy(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function vy(n,e){return my(gy(n.getBoundingClientRect(),e))}function _y(n){return window.getComputedStyle(n)}class xy extends hf{constructor(){super(...arguments),this.type="html",this.renderInstance=mf}readValueFromInstance(e,t){if(Ji.has(t))return jx(e,t);{const r=_y(e),i=(Zh(t)?r.getPropertyValue(t):r[t])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:t}){return vy(e,t)}build(e,t,r){df(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return gf(e,t,r)}}function Sy(n,e){return n in e}class yy extends uf{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(Sy(t,e)){const r=e[t];if(typeof r=="string"||typeof r=="number")return r}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return vl()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}function My(n){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},t=HS(n)?new py(e):new xy(e);t.mount(n),Pr.set(n,t)}function Ey(n){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},t=new yy(e);t.mount(n),Pr.set(n,t)}function Ty(n,e,t){const r=Lt(n)?n:wr(n);return r.start(of("",r,e,t)),r.animation}function by(n,e){return Lt(n)||typeof n=="number"||typeof n=="string"&&!rl(e)}function vf(n,e,t,r){const i=[];if(by(n,e))i.push(Ty(n,rl(e)&&e.default||e,t&&(t.default||t)));else{const s=bh(n,e,r),a=s.length;for(let o=0;o<a;o++){const l=s[o],c=l instanceof Element?My:Ey;Pr.has(l)||c(l);const u=Pr.get(l),h={...t};"delay"in h&&typeof h.delay=="function"&&(h.delay=h.delay(o,a)),i.push(...GS(u,{...e,transition:h},{}))}}return i}function Ay(n,e,t){const r=[];return sx(n,e,t,{spring:Cr}).forEach(({keyframes:s,transition:a},o)=>{r.push(...vf(o,s,a))}),r}function wy(n){return Array.isArray(n)&&n.some(Array.isArray)}function Ry(n){function e(t,r,i){let s=[];return wy(t)?s=Ay(t,r,n):s=vf(t,r,i,n),new vh(s)}return e}const gu=Ry(),Cy={some:0,all:1};function Py(n,e,{root:t,margin:r,amount:i="some"}={}){const s=gh(n),a=new WeakMap,o=c=>{c.forEach(u=>{const h=a.get(u.target);if(u.isIntersecting!==!!h)if(u.isIntersecting){const f=e(u.target,u);typeof f=="function"?a.set(u.target,f):l.unobserve(u.target)}else typeof h=="function"&&(h(u),a.delete(u.target))})},l=new IntersectionObserver(o,{root:t,rootMargin:r,threshold:typeof i=="number"?i:Cy[i]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}class Dy{constructor({scene:e,element:t}){be(this,"commons");be(this,"scene");be(this,"element");be(this,"computedStyle");be(this,"font");be(this,"bounds");be(this,"color");be(this,"material");be(this,"mesh");be(this,"weightToFontMap",{900:"/fonts/Orbitron-Black.ttf",800:"/fonts/Orbitron-ExtraBold.ttf",700:"/fonts/Orbitron-Bold.ttf",600:"/fonts/Orbitron-SemiBold.ttf",500:"/fonts/Orbitron-Medium.ttf",400:"/fonts/Orbitron-Regular.ttf",300:"/fonts/Orbitron-Light.ttf",200:"/fonts/Orbitron-ExtraLight.ttf",100:"/fonts/Orbitron-Thin.ttf"});be(this,"y",0);be(this,"isVisible",!1);this.commons=Ar.getInstance(),this.scene=e,this.element=t,this.computedStyle=window.getComputedStyle(this.element),this.createFont(),this.createColor(),this.createBounds(),this.createMaterial(),this.createMesh(),this.setStaticValues(),this.scene.add(this.mesh),this.element.style.color="transparent",this.addEventListeners()}createFont(){this.font=this.weightToFontMap[this.computedStyle.fontWeight]||"/fonts/Orbitron-Regular.ttf"}createBounds(){this.bounds=this.element.getBoundingClientRect(),this.y=this.bounds.top+this.commons.lenis.actualScroll}createColor(){this.color=new tt(this.computedStyle.color)}createMaterial(){this.material=new un({fragmentShader:O_,vertexShader:B_,uniforms:{uProgress:new _r(0),uHeight:new _r(this.bounds.height),uColor:new _r(this.color)}})}createMesh(){this.mesh=new hh,this.mesh.text=this.element.innerText,this.mesh.font=this.font,this.mesh.anchorX="0%",this.mesh.anchorY="50%",this.mesh.material=this.material}setStaticValues(){const{fontSize:e,letterSpacing:t,lineHeight:r,whiteSpace:i,textAlign:s}=this.computedStyle,a=window.parseFloat(e);this.mesh.fontSize=a,this.mesh.textAlign=s,this.mesh.letterSpacing=parseFloat(t)/a,this.mesh.lineHeight=parseFloat(r)/a,this.mesh.maxWidth=this.bounds.width,this.mesh.whiteSpace=i}show(){this.isVisible=!0,gu(this.material.uniforms.uProgress,{value:1},{duration:1.8,ease:[.25,1,.5,1]})}hide(){gu(this.material.uniforms.uProgress,{value:0},{duration:1.8,onComplete:()=>this.isVisible=!1})}onResize(){this.computedStyle=window.getComputedStyle(this.element),this.createBounds(),this.setStaticValues(),this.material.uniforms.uHeight.value=this.bounds.height}update(){this.isVisible&&(this.mesh.position.y=-this.y+this.commons.lenis.animatedScroll+this.commons.sizes.screen.height/2-this.bounds.height/2,this.mesh.position.x=this.bounds.left-this.commons.sizes.screen.width/2)}addEventListeners(){Py(this.element,()=>(this.show(),()=>this.hide()))}}class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Uy=new Yu(-1,1,1,-1,0,1);class Ly extends Dn{constructor(){super(),this.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wn([0,2,0,0,2,0],2))}}const Iy=new Ly;class Fy{constructor(e){this._mesh=new Xt(Iy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Uy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Ny={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _f extends Hs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qo.clone(e.uniforms),this.material=new un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fy(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vu extends Hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Oy extends Hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class By{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new nt);this._width=r.width,this._height=r.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _f(Ny),this.copyPass.material.blending=bn,this.clock=new qu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vu!==void 0&&(a instanceof vu?r=!0:a instanceof Oy&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ky extends Hs{constructor(e,t,r=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,r){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}var zy=`uniform sampler2D tDiffuse;
uniform float uVelocity;
uniform float uTime;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    
    float waveAmplitude = uVelocity * 0.0009;
    float waveFrequency = 4.0 + uVelocity * 0.01;
    
    
    vec2 waveUv = uv;
    waveUv.x += sin(uv.y * waveFrequency + uTime) * waveAmplitude;
    waveUv.y += sin(uv.x * waveFrequency * 5. + uTime * 0.8) * waveAmplitude;
    
    
    float r = texture2D(tDiffuse, vec2(waveUv.x, waveUv.y + uVelocity * 0.0005)).r;
    vec2 gb = texture2D(tDiffuse, waveUv).gb;

    gl_FragColor = vec4(r, gb, r);
}`,Vy=`varying vec2 vUv;

void main() {
    vUv = uv;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;class Gy{constructor({scene:e}){be(this,"commons");be(this,"scene");be(this,"composer");be(this,"renderPass");be(this,"shiftPass");be(this,"lerpedVelocity",0);be(this,"lerpFactor",.15);this.commons=Ar.getInstance(),this.scene=e,this.createComposer(),this.createPasses()}createComposer(){this.composer=new By(this.commons.renderer),this.composer.setPixelRatio(this.commons.sizes.pixelRatio),this.composer.setSize(this.commons.sizes.screen.width,this.commons.sizes.screen.height)}createPasses(){this.renderPass=new ky(this.scene,this.commons.camera),this.composer.addPass(this.renderPass);const e={uniforms:{tDiffuse:{value:null},uVelocity:{value:0},uTime:{value:0}},vertexShader:Vy,fragmentShader:zy};this.shiftPass=new _f(e),this.composer.addPass(this.shiftPass)}onResize(){this.composer.setPixelRatio(this.commons.sizes.pixelRatio),this.composer.setSize(this.commons.sizes.screen.width,this.commons.sizes.screen.height)}update(){this.shiftPass.uniforms.uTime.value=this.commons.elapsedTime;const e=this.commons.lenis.velocity;this.lerpedVelocity+=(e-this.lerpedVelocity)*this.lerpFactor,this.shiftPass.uniforms.uVelocity.value=this.lerpedVelocity,this.composer.render()}}class Hy{constructor(){be(this,"commons");be(this,"postProcessing");be(this,"scene");be(this,"texts");document.addEventListener("DOMContentLoaded",async()=>{await document.fonts.ready,document.body.classList.remove("loading"),this.commons=Ar.getInstance(),this.commons.init(),this.createScene(),this.createWebGLTexts(),this.createPostProcessing(),this.addEventListeners(),this.update()})}createScene(){this.scene=new kd}createWebGLTexts(){const e=document.querySelectorAll('[data-animation="webgl-text"]');e&&(this.texts=Array.from(e).map(t=>new Dy({element:t,scene:this.scene})))}createPostProcessing(){this.postProcessing=new Gy({scene:this.scene})}update(){this.commons.update(),this.texts&&this.texts.forEach(e=>e.update()),this.postProcessing.update(),window.requestAnimationFrame(this.update.bind(this))}onResize(){this.commons.onResize(),this.texts&&this.texts.forEach(e=>e.onResize()),this.postProcessing.onResize()}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}}new Hy;
