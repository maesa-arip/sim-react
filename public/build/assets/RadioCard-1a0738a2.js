import{r as i,e as A,a as y,j as H,F as Ce}from"./app-f5e75cbf.js";import{i as ce,u as Ae,T as Oe,a as P,e as we,x as _e,p as je}from"./use-tracked-pointer-e3e568b6.js";import{c as K,V as z,j as ve,y as X,b as ie,o as g,X as q,s as Ge,p as ue,a as ye,u as Q,C as Ve,P as Se,m as xe,K as Be}from"./transition-8157427c.js";import{e as $e,I as Y,b as Ke,h as Ie,s as Ee,o as $,r as se,A as Te,a as ge,L as ae,N as Re}from"./keyboard-0fc7e943.js";import{s as Ue}from"./use-resolve-button-type-b44da143.js";import{m as he,F as We,k as Pe}from"./description-31fa1b6e.js";function ke({container:e,accept:o,walk:r,enabled:t=!0}){let l=i.useRef(o),a=i.useRef(r);i.useEffect(()=>{l.current=o,a.current=r},[o,r]),K(()=>{if(!e||!t)return;let u=$e(e);if(!u)return;let s=l.current,d=a.current,p=Object.assign(S=>s(S),{acceptNode:s}),C=u.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;C.nextNode();)d(C.currentNode)},[e,t,l,a])}var ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ze||{}),qe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(qe||{}),He=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(He||{}),Xe=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Xe||{});function le(e,o=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Te(o(e.options.slice()),a=>a.dataRef.current.domRef.current),l=r?t.indexOf(r):null;return l===-1&&(l=null),{options:t,activeOptionIndex:l}}let Ye={[1](e){return e.dataRef.current.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){if(e.dataRef.current.disabled||e.comboboxState===0)return e;let o=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,t=e.options.findIndex(l=>r(l.dataRef.current.value));return t!==-1&&(o=t),{...e,comboboxState:0,activeOptionIndex:o}},[2](e,o){var r;if(e.dataRef.current.disabled||e.dataRef.current.optionsRef.current&&!e.dataRef.current.optionsPropsRef.current.static&&e.comboboxState===1)return e;let t=le(e);if(t.activeOptionIndex===null){let a=t.options.findIndex(u=>!u.dataRef.current.disabled);a!==-1&&(t.activeOptionIndex=a)}let l=_e(o,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...t,activeOptionIndex:l,activationTrigger:(r=o.trigger)!=null?r:1}},[3]:(e,o)=>{let r={id:o.id,dataRef:o.dataRef},t=le(e,a=>[...a,r]);e.activeOptionIndex===null&&e.dataRef.current.isSelected(o.dataRef.current.value)&&(t.activeOptionIndex=t.options.indexOf(r));let l={...e,...t,activationTrigger:1};return e.dataRef.current.__demoMode&&e.dataRef.current.value===void 0&&(l.activeOptionIndex=0),l},[4]:(e,o)=>{let r=le(e,t=>{let l=t.findIndex(a=>a.id===o.id);return l!==-1&&t.splice(l,1),t});return{...e,...r,activationTrigger:1}},[5]:(e,o)=>({...e,labelId:o.id})},de=i.createContext(null);de.displayName="ComboboxActionsContext";function re(e){let o=i.useContext(de);if(o===null){let r=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,re),r}return o}let pe=i.createContext(null);pe.displayName="ComboboxDataContext";function ee(e){let o=i.useContext(pe);if(o===null){let r=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ee),r}return o}function Je(e,o){return Q(o.type,Ye,e,o)}let Qe=i.Fragment;function Ze(e,o){let{value:r,defaultValue:t,onChange:l,name:a,by:u=(c,h)=>c===h,disabled:s=!1,__demoMode:d=!1,nullable:p=!1,multiple:C=!1,...S}=e,[n=C?[]:void 0,b]=Oe(r,l,t),[O,m]=i.useReducer(Je,{dataRef:i.createRef(),comboboxState:d?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),w=i.useRef(!1),V=i.useRef({static:!1,hold:!1}),k=i.useRef(null),D=i.useRef(null),_=i.useRef(null),E=i.useRef(null),L=g(typeof u=="string"?(c,h)=>{let M=u;return(c==null?void 0:c[M])===(h==null?void 0:h[M])}:u),j=i.useCallback(c=>Q(v.mode,{[1]:()=>n.some(h=>L(h,c)),[0]:()=>L(n,c)}),[n]),v=i.useMemo(()=>({...O,optionsPropsRef:V,labelRef:k,inputRef:D,buttonRef:_,optionsRef:E,value:n,defaultValue:t,disabled:s,mode:C?1:0,get activeOptionIndex(){if(w.current&&O.activeOptionIndex===null&&O.options.length>0){let c=O.options.findIndex(h=>!h.dataRef.current.disabled);if(c!==-1)return c}return O.activeOptionIndex},compare:L,isSelected:j,nullable:p,__demoMode:d}),[n,t,s,C,p,d,O]);K(()=>{O.dataRef.current=v},[v]),Ke([v.buttonRef,v.inputRef,v.optionsRef],()=>x.closeCombobox(),v.comboboxState===0);let R=i.useMemo(()=>({open:v.comboboxState===0,disabled:s,activeIndex:v.activeOptionIndex,activeOption:v.activeOptionIndex===null?null:v.options[v.activeOptionIndex].dataRef.current.value,value:n}),[v,s,n]),G=g(c=>{let h=v.options.find(M=>M.id===c);!h||B(h.dataRef.current.value)}),f=g(()=>{if(v.activeOptionIndex!==null){let{dataRef:c,id:h}=v.options[v.activeOptionIndex];B(c.current.value),x.goToOption(P.Specific,h)}}),F=g(()=>{m({type:0}),w.current=!0}),T=g(()=>{m({type:1}),w.current=!1}),J=g((c,h,M)=>(w.current=!1,c===P.Specific?m({type:2,focus:P.Specific,id:h,trigger:M}):m({type:2,focus:c,trigger:M}))),Z=g((c,h)=>(m({type:3,id:c,dataRef:h}),()=>m({type:4,id:c}))),U=g(c=>(m({type:5,id:c}),()=>m({type:5,id:null}))),B=g(c=>Q(v.mode,{[0](){return b==null?void 0:b(c)},[1](){let h=v.value.slice(),M=h.findIndex(ne=>L(ne,c));return M===-1?h.push(c):h.splice(M,1),b==null?void 0:b(h)}})),x=i.useMemo(()=>({onChange:B,registerOption:Z,registerLabel:U,goToOption:J,closeCombobox:T,openCombobox:F,selectActiveOption:f,selectOption:G}),[]),N=o===null?{}:{ref:o},I=i.useRef(null),W=ie();return i.useEffect(()=>{!I.current||t!==void 0&&W.addEventListener(I.current,"reset",()=>{B(t)})},[I,B]),A.createElement(de.Provider,{value:x},A.createElement(pe.Provider,{value:v},A.createElement(Ve,{value:Q(v.comboboxState,{[0]:ue.Open,[1]:ue.Closed})},a!=null&&n!=null&&we({[a]:n}).map(([c,h],M)=>A.createElement(Ie,{features:Ee.Hidden,ref:M===0?ne=>{var me;I.current=(me=ne==null?void 0:ne.closest("form"))!=null?me:null}:void 0,...Se({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:c,value:h})})),q({ourProps:N,theirProps:S,slot:R,defaultTag:Qe,name:"Combobox"}))))}let et=z(Ze),tt="input",ot=z(function(e,o){var r,t,l,a;let u=Y(),{id:s=`headlessui-combobox-input-${u}`,onChange:d,displayValue:p,type:C="text",...S}=e,n=ee("Combobox.Input"),b=re("Combobox.Input"),O=X(n.inputRef,o),m=i.useRef(!1),w=ie(),V=function(){var f;return typeof p=="function"&&n.value!==void 0?(f=p(n.value))!=null?f:"":typeof n.value=="string"?n.value:""}();he(([f,F],[T,J])=>{m.current||!n.inputRef.current||(J===0&&F===1||f!==T)&&(n.inputRef.current.value=f)},[V,n.comboboxState]),he(([f],[F])=>{if(f===0&&F===1){let T=n.inputRef.current;if(!T)return;let J=T.value,{selectionStart:Z,selectionEnd:U,selectionDirection:B}=T;T.value="",T.value=J,B!==null?T.setSelectionRange(Z,U,B):T.setSelectionRange(Z,U)}},[n.comboboxState]);let k=i.useRef(!1),D=g(()=>{k.current=!0}),_=g(()=>{setTimeout(()=>{k.current=!1})}),E=g(f=>{switch(m.current=!0,f.key){case $.Backspace:case $.Delete:if(n.mode!==0||!n.nullable)return;let F=f.currentTarget;w.requestAnimationFrame(()=>{F.value===""&&(b.onChange(null),n.optionsRef.current&&(n.optionsRef.current.scrollTop=0),b.goToOption(P.Nothing))});break;case $.Enter:if(m.current=!1,n.comboboxState!==0||k.current)return;if(f.preventDefault(),f.stopPropagation(),n.activeOptionIndex===null){b.closeCombobox();return}b.selectActiveOption(),n.mode===0&&b.closeCombobox();break;case $.ArrowDown:return m.current=!1,f.preventDefault(),f.stopPropagation(),Q(n.comboboxState,{[0]:()=>{b.goToOption(P.Next)},[1]:()=>{b.openCombobox()}});case $.ArrowUp:return m.current=!1,f.preventDefault(),f.stopPropagation(),Q(n.comboboxState,{[0]:()=>{b.goToOption(P.Previous)},[1]:()=>{b.openCombobox(),w.nextFrame(()=>{n.value||b.goToOption(P.Last)})}});case $.Home:if(f.shiftKey)break;return m.current=!1,f.preventDefault(),f.stopPropagation(),b.goToOption(P.First);case $.PageUp:return m.current=!1,f.preventDefault(),f.stopPropagation(),b.goToOption(P.First);case $.End:if(f.shiftKey)break;return m.current=!1,f.preventDefault(),f.stopPropagation(),b.goToOption(P.Last);case $.PageDown:return m.current=!1,f.preventDefault(),f.stopPropagation(),b.goToOption(P.Last);case $.Escape:return m.current=!1,n.comboboxState!==0?void 0:(f.preventDefault(),n.optionsRef.current&&!n.optionsPropsRef.current.static&&f.stopPropagation(),b.closeCombobox());case $.Tab:if(m.current=!1,n.comboboxState!==0)return;n.mode===0&&b.selectActiveOption(),b.closeCombobox();break}}),L=g(f=>{b.openCombobox(),d==null||d(f)}),j=g(()=>{m.current=!1}),v=ce(()=>{if(n.labelId)return[n.labelId].join(" ")},[n.labelId]),R=i.useMemo(()=>({open:n.comboboxState===0,disabled:n.disabled}),[n]),G={ref:O,id:s,role:"combobox",type:C,"aria-controls":(r=n.optionsRef.current)==null?void 0:r.id,"aria-expanded":n.disabled?void 0:n.comboboxState===0,"aria-activedescendant":n.activeOptionIndex===null||(t=n.options[n.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":n.mode===1?!0:void 0,"aria-labelledby":v,"aria-autocomplete":"list",defaultValue:(a=(l=e.defaultValue)!=null?l:n.defaultValue!==void 0?p==null?void 0:p(n.defaultValue):null)!=null?a:n.defaultValue,disabled:n.disabled,onCompositionStart:D,onCompositionEnd:_,onKeyDown:E,onChange:L,onBlur:j};return q({ourProps:G,theirProps:S,slot:R,defaultTag:tt,name:"Combobox.Input"})}),rt="button",nt=z(function(e,o){var r;let t=ee("Combobox.Button"),l=re("Combobox.Button"),a=X(t.buttonRef,o),u=Y(),{id:s=`headlessui-combobox-button-${u}`,...d}=e,p=ie(),C=g(m=>{switch(m.key){case $.ArrowDown:return m.preventDefault(),m.stopPropagation(),t.comboboxState===1&&l.openCombobox(),p.nextFrame(()=>{var w;return(w=t.inputRef.current)==null?void 0:w.focus({preventScroll:!0})});case $.ArrowUp:return m.preventDefault(),m.stopPropagation(),t.comboboxState===1&&(l.openCombobox(),p.nextFrame(()=>{t.value||l.goToOption(P.Last)})),p.nextFrame(()=>{var w;return(w=t.inputRef.current)==null?void 0:w.focus({preventScroll:!0})});case $.Escape:return t.comboboxState!==0?void 0:(m.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&m.stopPropagation(),l.closeCombobox(),p.nextFrame(()=>{var w;return(w=t.inputRef.current)==null?void 0:w.focus({preventScroll:!0})}));default:return}}),S=g(m=>{if(se(m.currentTarget))return m.preventDefault();t.comboboxState===0?l.closeCombobox():(m.preventDefault(),l.openCombobox()),p.nextFrame(()=>{var w;return(w=t.inputRef.current)==null?void 0:w.focus({preventScroll:!0})})}),n=ce(()=>{if(t.labelId)return[t.labelId,s].join(" ")},[t.labelId,s]),b=i.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),O={ref:a,id:s,type:Ue(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(r=t.optionsRef.current)==null?void 0:r.id,"aria-expanded":t.disabled?void 0:t.comboboxState===0,"aria-labelledby":n,disabled:t.disabled,onClick:S,onKeyDown:C};return q({ourProps:O,theirProps:d,slot:b,defaultTag:rt,name:"Combobox.Button"})}),at="label",it=z(function(e,o){let r=Y(),{id:t=`headlessui-combobox-label-${r}`,...l}=e,a=ee("Combobox.Label"),u=re("Combobox.Label"),s=X(a.labelRef,o);K(()=>u.registerLabel(t),[t]);let d=g(()=>{var C;return(C=a.inputRef.current)==null?void 0:C.focus({preventScroll:!0})}),p=i.useMemo(()=>({open:a.comboboxState===0,disabled:a.disabled}),[a]);return q({ourProps:{ref:s,id:t,onClick:d},theirProps:l,slot:p,defaultTag:at,name:"Combobox.Label"})}),lt="ul",ut=ve.RenderStrategy|ve.Static,st=z(function(e,o){let r=Y(),{id:t=`headlessui-combobox-options-${r}`,hold:l=!1,...a}=e,u=ee("Combobox.Options"),s=X(u.optionsRef,o),d=Ge(),p=(()=>d!==null?d===ue.Open:u.comboboxState===0)();K(()=>{var n;u.optionsPropsRef.current.static=(n=e.static)!=null?n:!1},[u.optionsPropsRef,e.static]),K(()=>{u.optionsPropsRef.current.hold=l},[u.optionsPropsRef,l]),ke({container:u.optionsRef.current,enabled:u.comboboxState===0,accept(n){return n.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});let C=ce(()=>{var n,b;return(b=u.labelId)!=null?b:(n=u.buttonRef.current)==null?void 0:n.id},[u.labelId,u.buttonRef.current]),S=i.useMemo(()=>({open:u.comboboxState===0}),[u]);return q({ourProps:{"aria-labelledby":C,role:"listbox",id:t,ref:s},theirProps:a,slot:S,defaultTag:lt,features:ut,visible:p,name:"Combobox.Options"})}),ct="li",dt=z(function(e,o){var r,t;let l=Y(),{id:a=`headlessui-combobox-option-${l}`,disabled:u=!1,value:s,...d}=e,p=ee("Combobox.Option"),C=re("Combobox.Option"),S=p.activeOptionIndex!==null?p.options[p.activeOptionIndex].id===a:!1,n=p.isSelected(s),b=i.useRef(null),O=ye({disabled:u,value:s,domRef:b,textValue:(t=(r=b.current)==null?void 0:r.textContent)==null?void 0:t.toLowerCase()}),m=X(o,b),w=g(()=>C.selectOption(a));K(()=>C.registerOption(a,O),[O,a]);let V=i.useRef(!p.__demoMode);K(()=>{if(!p.__demoMode)return;let R=xe();return R.requestAnimationFrame(()=>{V.current=!0}),R.dispose},[]),K(()=>{if(p.comboboxState!==0||!S||!V.current||p.activationTrigger===0)return;let R=xe();return R.requestAnimationFrame(()=>{var G,f;(f=(G=b.current)==null?void 0:G.scrollIntoView)==null||f.call(G,{block:"nearest"})}),R.dispose},[b,S,p.comboboxState,p.activationTrigger,p.activeOptionIndex]);let k=g(R=>{if(u)return R.preventDefault();w(),p.mode===0&&C.closeCombobox()}),D=g(()=>{if(u)return C.goToOption(P.Nothing);C.goToOption(P.Specific,a)}),_=Ae(),E=g(R=>_.update(R)),L=g(R=>{!_.wasMoved(R)||u||S||C.goToOption(P.Specific,a,0)}),j=g(R=>{!_.wasMoved(R)||u||!S||p.optionsPropsRef.current.hold||C.goToOption(P.Nothing)}),v=i.useMemo(()=>({active:S,selected:n,disabled:u}),[S,n,u]);return q({ourProps:{id:a,ref:m,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":n,disabled:void 0,onClick:k,onFocus:D,onPointerEnter:E,onMouseEnter:E,onPointerMove:L,onMouseMove:L,onPointerLeave:j,onMouseLeave:j},theirProps:d,slot:v,defaultTag:ct,name:"Combobox.Option"})}),te=Object.assign(et,{Input:ot,Button:nt,Label:it,Options:st,Option:dt});function pt(e=0){let[o,r]=i.useState(e),t=i.useCallback(s=>r(d=>d|s),[o]),l=i.useCallback(s=>Boolean(o&s),[o]),a=i.useCallback(s=>r(d=>d&~s),[r]),u=i.useCallback(s=>r(d=>d^s),[r]);return{addFlag:t,hasFlag:l,removeFlag:a,toggleFlag:u}}let Fe=i.createContext(null);function Ne(){let e=i.useContext(Fe);if(e===null){let o=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(o,Ne),o}return e}function Le(){let[e,o]=i.useState([]);return[e.length>0?e.join(" "):void 0,i.useMemo(()=>function(r){let t=g(a=>(o(u=>[...u,a]),()=>o(u=>{let s=u.slice(),d=s.indexOf(a);return d!==-1&&s.splice(d,1),s}))),l=i.useMemo(()=>({register:t,slot:r.slot,name:r.name,props:r.props}),[t,r.slot,r.name,r.props]);return A.createElement(Fe.Provider,{value:l},r.children)},[o])]}let ft="label",bt=z(function(e,o){let r=Y(),{id:t=`headlessui-label-${r}`,passive:l=!1,...a}=e,u=Ne(),s=X(o);K(()=>u.register(t),[t,u.register]);let d={ref:s,...u.props,id:t};return l&&("onClick"in d&&delete d.onClick,"onClick"in a&&delete a.onClick),q({ourProps:d,theirProps:a,slot:u.slot||{},defaultTag:ft,name:u.name||"Label"})});var mt=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(mt||{});let vt={[0](e,o){let r=[...e.options,{id:o.id,element:o.element,propsRef:o.propsRef}];return{...e,options:Te(r,t=>t.element.current)}},[1](e,o){let r=e.options.slice(),t=e.options.findIndex(l=>l.id===o.id);return t===-1?e:(r.splice(t,1),{...e,options:r})}},fe=i.createContext(null);fe.displayName="RadioGroupDataContext";function De(e){let o=i.useContext(fe);if(o===null){let r=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,De),r}return o}let be=i.createContext(null);be.displayName="RadioGroupActionsContext";function Me(e){let o=i.useContext(be);if(o===null){let r=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Me),r}return o}function xt(e,o){return Q(o.type,vt,e,o)}let gt="div",Rt=z(function(e,o){let r=Y(),{id:t=`headlessui-radiogroup-${r}`,value:l,defaultValue:a,name:u,onChange:s,by:d=(x,N)=>x===N,disabled:p=!1,...C}=e,S=g(typeof d=="string"?(x,N)=>{let I=d;return(x==null?void 0:x[I])===(N==null?void 0:N[I])}:d),[n,b]=i.useReducer(xt,{options:[]}),O=n.options,[m,w]=Le(),[V,k]=Pe(),D=i.useRef(null),_=X(D,o),[E,L]=Oe(l,s,a),j=i.useMemo(()=>O.find(x=>!x.propsRef.current.disabled),[O]),v=i.useMemo(()=>O.some(x=>S(x.propsRef.current.value,E)),[O,E]),R=g(x=>{var N;if(p||S(x,E))return!1;let I=(N=O.find(W=>S(W.propsRef.current.value,x)))==null?void 0:N.propsRef.current;return I!=null&&I.disabled?!1:(L==null||L(x),!0)});ke({container:D.current,accept(x){return x.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:x.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(x){x.setAttribute("role","none")}});let G=g(x=>{let N=D.current;if(!N)return;let I=$e(N),W=O.filter(c=>c.propsRef.current.disabled===!1).map(c=>c.element.current);switch(x.key){case $.Enter:je(x.currentTarget);break;case $.ArrowLeft:case $.ArrowUp:if(x.preventDefault(),x.stopPropagation(),ge(W,ae.Previous|ae.WrapAround)===Re.Success){let c=O.find(h=>h.element.current===(I==null?void 0:I.activeElement));c&&R(c.propsRef.current.value)}break;case $.ArrowRight:case $.ArrowDown:if(x.preventDefault(),x.stopPropagation(),ge(W,ae.Next|ae.WrapAround)===Re.Success){let c=O.find(h=>h.element.current===(I==null?void 0:I.activeElement));c&&R(c.propsRef.current.value)}break;case $.Space:{x.preventDefault(),x.stopPropagation();let c=O.find(h=>h.element.current===(I==null?void 0:I.activeElement));c&&R(c.propsRef.current.value)}break}}),f=g(x=>(b({type:0,...x}),()=>b({type:1,id:x.id}))),F=i.useMemo(()=>({value:E,firstOption:j,containsCheckedOption:v,disabled:p,compare:S,...n}),[E,j,v,p,S,n]),T=i.useMemo(()=>({registerOption:f,change:R}),[f,R]),J={ref:_,id:t,role:"radiogroup","aria-labelledby":m,"aria-describedby":V,onKeyDown:G},Z=i.useMemo(()=>({value:E}),[E]),U=i.useRef(null),B=ie();return i.useEffect(()=>{!U.current||a!==void 0&&B.addEventListener(U.current,"reset",()=>{R(a)})},[U,R]),A.createElement(k,{name:"RadioGroup.Description"},A.createElement(w,{name:"RadioGroup.Label"},A.createElement(be.Provider,{value:T},A.createElement(fe.Provider,{value:F},u!=null&&E!=null&&we({[u]:E}).map(([x,N],I)=>A.createElement(Ie,{features:Ee.Hidden,ref:I===0?W=>{var c;U.current=(c=W==null?void 0:W.closest("form"))!=null?c:null}:void 0,...Se({key:x,as:"input",type:"radio",checked:N!=null,hidden:!0,readOnly:!0,name:x,value:N})})),q({ourProps:J,theirProps:C,slot:Z,defaultTag:gt,name:"RadioGroup"})))))});var ht=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(ht||{});let Ct="div",Ot=z(function(e,o){var r;let t=Y(),{id:l=`headlessui-radiogroup-option-${t}`,value:a,disabled:u=!1,...s}=e,d=i.useRef(null),p=X(d,o),[C,S]=Le(),[n,b]=Pe(),{addFlag:O,removeFlag:m,hasFlag:w}=pt(1),V=ye({value:a,disabled:u}),k=De("RadioGroup.Option"),D=Me("RadioGroup.Option");K(()=>D.registerOption({id:l,element:d,propsRef:V}),[l,D,d,e]);let _=g(F=>{var T;if(se(F.currentTarget))return F.preventDefault();!D.change(a)||(O(2),(T=d.current)==null||T.focus())}),E=g(F=>{if(se(F.currentTarget))return F.preventDefault();O(2)}),L=g(()=>m(2)),j=((r=k.firstOption)==null?void 0:r.id)===l,v=k.disabled||u,R=k.compare(k.value,a),G={ref:p,id:l,role:"radio","aria-checked":R?"true":"false","aria-labelledby":C,"aria-describedby":n,"aria-disabled":v?!0:void 0,tabIndex:(()=>v?-1:R||!k.containsCheckedOption&&j?0:-1)(),onClick:v?void 0:_,onFocus:v?void 0:E,onBlur:v?void 0:L},f=i.useMemo(()=>({checked:R,disabled:v,active:w(2)}),[R,v,w]);return A.createElement(b,{name:"RadioGroup.Description"},A.createElement(S,{name:"RadioGroup.Label"},q({ourProps:G,theirProps:s,slot:f,defaultTag:Ct,name:"RadioGroup.Option"})))}),oe=Object.assign(Rt,{Option:Ot,Label:bt,Description:We});function wt({title:e,titleId:o,...r},t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},r),e?i.createElement("title",{id:o},e):null,i.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"}))}const yt=i.forwardRef(wt),St=yt;function $t({title:e,titleId:o,...r},t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},r),e?i.createElement("title",{id:o},e):null,i.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",clipRule:"evenodd"}))}const It=i.forwardRef($t),Et=It;function Mt({ShouldMap:e,selected:o,onChange:r,name:t}){const[l,a]=i.useState(""),u=l===""?e:e.filter(s=>s.name.toLowerCase().replace(/\s+/g,"").includes(l.toLowerCase().replace(/\s+/g,"")));return y("div",{className:"",children:y(te,{value:o,onChange:r,name:t,children:H("div",{className:"relative mt-1",children:[H("div",{className:"relative w-full overflow-hidden text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300",children:[y(te.Input,{className:"w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 break-words border-none focus:ring-0",autoComplete:"off",displayValue:s=>s.name,onChange:s=>a(s.target.value)}),y(te.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:y(Et,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),y(Be,{as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>a(""),children:y(te.Options,{className:"absolute z-10 w-full py-1 mt-1 overflow-auto text-base break-words bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:u.length===0&&l!==""?y("div",{className:"relative px-4 py-2 text-gray-700 cursor-default select-none",children:"Nothing found."}):u.map(s=>y(te.Option,{className:({active:d})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${d?"bg-teal-600 text-white":"text-gray-900"}`,value:s,children:({selected:d,active:p})=>H(Ce,{children:[y("span",{className:`block truncate ${d?"font-medium":"font-normal"}`,children:s.name}),d?y("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${p?"text-white":"text-teal-600"}`,children:y(St,{className:"w-5 h-5","aria-hidden":"true"})}):null]})},s.id))})})]})})})}function At({ShouldMap:e,selected:o,onChange:r}){return y("div",{className:"w-full",children:y("div",{className:"w-full max-w-md mx-auto",children:H(oe,{value:o,onChange:r,children:[y(oe.Label,{className:"sr-only",children:"Server size"}),y("div",{className:"space-y-2",children:e.map(t=>y(oe.Option,{onChange:l=>handleChange(l),value:t,className:({active:l,checked:a})=>`${l?"ring-2 ring-white ring-opacity-60 ring-offset-2 ":""}
                  ${a&&t.id==1?"bg-red-500 bg-opacity-75 text-white ring-offset-red-300":"bg-white"}
                  ${a&&t.id!=1?"bg-teal-500 bg-opacity-75 text-white ring-offset-teal-300":"bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`,children:({active:l,checked:a})=>y(Ce,{children:H("div",{className:"flex items-center justify-between w-full",children:[y("div",{className:"flex items-center",children:H("div",{className:"text-sm",children:[y(oe.Label,{as:"p",className:`font-medium mb-2  ${a?"text-white":"text-gray-900"}`,children:t.name}),H(oe.Description,{as:"span",className:`inline ${a?"text-sky-100":"text-gray-500"}`,children:[y("span",{children:t.description})," "]})]})}),a&&y("div",{className:"text-white shrink-0",children:y(Tt,{className:"w-6 h-6"})})]})})},t.name))})]})})})}function Tt(e){return H("svg",{viewBox:"0 0 24 24",fill:"none",...e,children:[y("circle",{cx:12,cy:12,r:12,fill:"#fff",opacity:"0.2"}),y("path",{d:"M7 13l3 3 7-7",stroke:"#fff",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]})}export{Mt as C,At as R};
