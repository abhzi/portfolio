import{r as o,j as t}from"./index-NY4oXdwp.js";const l=()=>{const[r,s]=o.useState(!1),e=()=>{s(window.scrollY>300)},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.useEffect(()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}),[]),t.jsx(t.Fragment,{children:r&&t.jsx("button",{onClick:n,className:`fixed bottom-4 right-4 bg-gradient-to-r bg-black text-white rounded-full w-12 h-12 flex items-center justify-center\r
                text-xl cursor-pointer transition-opacity duration-300\r
                `,children:"↥"})})};export{l as default};
