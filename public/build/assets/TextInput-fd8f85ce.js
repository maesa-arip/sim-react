import{r as e,a as s}from"./app-f5e75cbf.js";const h=e.forwardRef(function({type:o="text",name:n,id:a,value:c,readOnly:f,className:i,autoComplete:u,required:d,isFocused:x,handleChange:m},r){const t=r||e.useRef();return e.useEffect(()=>{x&&t.current.focus()},[]),s("div",{className:"flex flex-col items-start",children:s("input",{type:o,name:n,id:a,value:c,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+i,ref:t,readOnly:f,autoComplete:u,required:d,onChange:p=>m(p)})})});export{h as T};
