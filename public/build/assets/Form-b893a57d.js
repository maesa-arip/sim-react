import{r as x,j as s,F as h,a}from"./app-f5e75cbf.js";import{I as l}from"./InputError-9a19ede7.js";import{I as n}from"./InputLabel-4c7d594a.js";import{L as g}from"./ListBoxPage-c829aeee.js";import{P as v}from"./PrimaryButton-8f268ebf.js";import{S as N}from"./SecondaryButton-bc67938b.js";import{T as y}from"./TextInput-fd8f85ce.js";import"./transition-8157427c.js";import"./keyboard-0fc7e943.js";import"./use-tracked-pointer-e3e568b6.js";import"./use-resolve-button-type-b44da143.js";function E({errors:r,submit:c,data:t,setData:i,ShouldMap:m,model:o,closeButton:d}){const p=[{name:"Pilih"}],[f,u]=x.useState(()=>o?m.find(e=>e.id===o.location.id):p[0]);return s(h,{children:[a("div",{className:"px-4 py-5 bg-white sm:p-6",children:s("div",{className:"grid grid-cols-12 gap-6",children:[s("div",{className:"col-span-12",children:[a(n,{for:"name",value:"Nama"}),a(y,{id:"name",value:t.name,handleChange:e=>i("name",e.target.value),type:"text",className:"block w-full mt-1"}),a(l,{message:r.name,className:"mt-2"})]}),s("div",{className:"col-span-12",children:[a(n,{for:"location",value:"Lokasi"}),a(g,{ShouldMap:m,selected:f,onChange:e=>{i({...t,location_id:e.id}),u(e)}}),a(l,{message:r.location_id,className:"mt-2"})]})]})}),s("div",{className:"px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[a(v,{children:c}),a(N,{className:"mx-2",onClick:d,children:"Batal"})]})]})}export{E as default};