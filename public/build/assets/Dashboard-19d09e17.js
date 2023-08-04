import{_ as S,r as l,l as x,g as C,j as i,F as _,a as e,n as j}from"./app-f5e75cbf.js";import{D as m,A as D}from"./App-88d42771.js";import"./ApplicationLogo-6dd736e9.js";import"./transition-8157427c.js";import"./dialog-2f0b74f9.js";import"./keyboard-0fc7e943.js";import"./description-31fa1b6e.js";import"./LarsDHP-8ec69998.js";import"./InputLabel-4c7d594a.js";import"./PrimaryButton-8f268ebf.js";import"./SecondaryButton-bc67938b.js";import"./TextInput-fd8f85ce.js";import"./index-98e9b39e.js";import"./use-resolve-button-type-b44da143.js";const c=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),d=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function T(r){const{data:h,meta:u,filtered:f,attributes:o}=r.riskRegisterKlinis;S().props,r.riskCategories,r.identificationSources,r.locations,r.riskVarieties,r.riskTypes,r.pics,r.impactValues,r.probabilityValues,r.controlValues,r.indikatorFitur04s;const[w,b]=l.useState([]),[a,p]=l.useState(f),y=l.useCallback(x.debounce(t=>{C.get(route("dashboard"),{...x.pickBy(t),page:t.page},{preserveState:!0,preserveScroll:!0})},150),[]);l.useEffect(()=>y(a),[a]),l.useEffect(()=>{let t=[];for(let s=o.per_page;s<o.total/o.per_page;s=s+o.per_page)t.push(s);b(t)},[]);const g=t=>p({...a,[t.target.name]:t.target.value}),n=t=>{p({...a,field:t,direction:a.direction=="asc"?"desc":"asc"})},N=t=>{k(t),v(!0)};l.useState(!1);const[R,v]=l.useState(!1);l.useState(!1);const[V,k]=l.useState([]);return i(_,{children:[e(j,{title:"Dashboard"}),e("div",{className:"px-2 py-12 bg-white border rounded-xl",children:i("div",{className:"mx-auto sm:px-6 lg:px-8",children:[i("div",{className:"flex items-center justify-between mb-2",children:[e("div",{className:"w-1/2"}),e("div",{className:"w-1/2",children:i("div",{className:"flex items-center justify-end mt-2 mb-0 gap-x-1",children:[e("select",{name:"load",id:"load",onChange:g,value:a.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:w.map((t,s)=>e("option",{children:t},s))}),i("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",autoComplete:"off",name:"q",id:"q",onChange:g,value:a.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),e("div",{className:"flex flex-col p-1",children:e("div",{className:"-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8",children:i("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:[e("div",{className:"border-b border-gray-200 shadow sm:rounded-lg",children:i("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:i("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:i("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("pernyataan_risiko"),children:["Kejadian",a.field=="pernyataan_risiko"&&a.direction=="asc"&&e(c,{}),a.field=="pernyataan_risiko"&&a.direction=="desc"&&e(d,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:i("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("sebab"),children:["Sebab",a.field=="sebab"&&a.direction=="asc"&&e(c,{}),a.field=="sebab"&&a.direction=="desc"&&e(d,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:i("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("pic_id"),children:["Penanggung Jawab",a.field=="pic_id"&&a.direction=="asc"&&e(c,{}),a.field=="pic_id"&&a.direction=="desc"&&e(d,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:i("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("user_id"),children:["Pemilik Risiko",a.field=="user_id"&&a.direction=="asc"&&e(c,{}),a.field=="user_id"&&a.direction=="desc"&&e(d,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:i("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("created_at"),children:["Opsi",a.field=="created_at"&&a.direction=="asc"&&e(c,{}),a.field=="created_at"&&a.direction=="desc"&&e(d,{})]})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:h.map((t,s)=>i("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:u.from+s}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.currently_id==1?e("span",{className:"px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full",children:"'Sedang Terjadi"}):"Tidak Sedang Terjadi"}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.sebab}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.pic.name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.user.name}),e("td",{children:i(m,{children:[e(m.Trigger,{children:e("button",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),e(m.Content,{children:e("button",{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",onClick:()=>N(t),children:"Lihat History"})})]})})]},s))})]})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:u.links.map((t,s)=>e("button",{disabled:t.url==null,className:`${t.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>p({...a,page:new URL(t.url).searchParams.get("page")}),children:t.label},s))})]})})})]})})]})}T.layout=r=>e(D,{children:r});export{T as default};
