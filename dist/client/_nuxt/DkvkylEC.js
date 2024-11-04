import{n as ee,q as pe,s as te,u as Ue,v as me,x as k,y as se,r as R,h as H,z as le,A as ve,b as l,B as z,F as U,C as $e,D as Ae,E as Be,G as L,o as f,c as N,H as s,I as Me,J as ze,V as J,_ as fe,K as w,w as p,L as Z,M as ge,N as _e,d as B,O as ye,P as Ne,Q as ue,R as De,S as Ve,a as P,T as Oe,U as je,W as Te,X as ie,t as E,Y as Ee,Z as Ge,$ as Le,a0 as Qe,a1 as qe,p as Ke,e as He}from"./dlBUJPxP.js";import{m as he,a as Je,u as We,V as W,f as Xe,b as Ye,c as Ze,d as et,e as tt,g as A,h as lt,i as K}from"./B34bF4Mc.js";import{V as at,m as ot,a as be,b as nt,c as rt,d as ce}from"./_65was-Q.js";import{V as M,a as G}from"./4c4Tojpe.js";import{V as Ce}from"./DOYfp3UE.js";import{c as st}from"./BahAKmWJ.js";import"./CIZ9W13C.js";import"./BICbpnbA.js";import"./BtsD_yie.js";const ut=ee({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...he({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>pe(e).every(o=>o!=null&&typeof o=="object")},...Je({clearable:!0})},"VFileInput"),it=te()({name:"VFileInput",inheritAttrs:!1,props:ut(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:m,emit:c,slots:n}=o;const{t:r}=Ue(),i=me(e,"modelValue",e.modelValue,t=>pe(t),t=>e.multiple||Array.isArray(e.modelValue)?t:t[0]),{isFocused:v,focus:g,blur:_}=We(e),b=k(()=>typeof e.showSize!="boolean"?e.showSize:void 0),h=k(()=>(i.value??[]).reduce((t,d)=>{let{size:O=0}=d;return t+O},0)),C=k(()=>se(h.value,b.value)),y=k(()=>(i.value??[]).map(t=>{const{name:d="",size:O=0}=t;return e.showSize?`${d} (${se(O,b.value)})`:d})),S=k(()=>{var d;const t=((d=i.value)==null?void 0:d.length)??0;return e.showSize?r(e.counterSizeString,t,C.value):r(e.counterString,t)}),$=R(),x=R(),V=R(),X=k(()=>v.value||e.active),Q=k(()=>["plain","underlined"].includes(e.variant));function D(){var t;V.value!==document.activeElement&&((t=V.value)==null||t.focus()),v.value||g()}function Y(t){var d;(d=V.value)==null||d.click()}function a(t){c("mousedown:control",t)}function u(t){var d;(d=V.value)==null||d.click(),c("click:control",t)}function F(t){t.stopPropagation(),D(),Ae(()=>{i.value=[],Be(e["onClick:clear"],t)})}return H(i,t=>{(!Array.isArray(t)||!t.length)&&V.value&&(V.value.value="")}),le(()=>{const t=!!(n.counter||e.counter),d=!!(t||n.details),[O,Se]=ve(m),{modelValue:Ft,...ke}=W.filterProps(e),Pe=Xe(e);return l(W,z({ref:$,modelValue:i.value,"onUpdate:modelValue":j=>i.value=j,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":Q.value},e.class],style:e.style,"onClick:prepend":Y},O,ke,{centerAffix:!Q.value,focused:v.value}),{...n,default:j=>{let{id:q,isDisabled:T,isDirty:oe,isReadonly:ne,isValid:Fe}=j;return l(Ye,z({ref:x,"prepend-icon":e.prependIcon,onMousedown:a,onClick:u,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},Pe,{id:q.value,active:X.value||oe.value,dirty:oe.value,disabled:T.value,focused:v.value,error:Fe.value===!1}),{...n,default:Ie=>{var re;let{props:{class:we,...xe}}=Ie;return l(U,null,[l("input",z({ref:V,type:"file",readonly:ne.value,disabled:T.value,multiple:e.multiple,name:e.name,onClick:I=>{I.stopPropagation(),ne.value&&I.preventDefault(),D()},onChange:I=>{if(!I.target)return;const Re=I.target;i.value=[...Re.files??[]]},onFocus:D,onBlur:_},xe,Se),null),l("div",{class:we},[!!((re=i.value)!=null&&re.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:y.value,totalBytes:h.value,totalBytesReadable:C.value}):e.chips?y.value.map(I=>l(at,{key:I,size:"small",text:I},null)):y.value.join(", "))])])}})},details:d?j=>{var q,T;return l(U,null,[(q=n.details)==null?void 0:q.call(n,j),t&&l(U,null,[l("span",null,null),l(Ze,{active:!!((T=i.value)!=null&&T.length),value:S.value,disabled:e.disabled},n.counter)])])}:void 0})}),$e({},$,x,V)}}),ct={__name:"Uploader",setup(e){const o=L(),m="https://shop-back-mh7t.onrender.com",c=async()=>{const n=new FormData;for(let r=0;r<o.currentFiles.length;r++)n.append("files",o.currentFiles[r]);try{const r=await Me.post(`${m}/api/upload-multiple`,n,{headers:{"Content-Type":"multipart/form-data"}});o.uploadedFiles=r.data.filenames}catch(r){console.error("Ошибка при загрузке файлов:",r)}};return(n,r)=>(f(),N("div",null,[l(it,{multiple:"",modelValue:s(o).currentFiles,"onUpdate:modelValue":r[0]||(r[0]=i=>s(o).currentFiles=i),variant:"solo",label:"Загрузить файлы",accept:"image/*","show-size":"","prepend-icon":"mdi-camera",onChange:c},null,8,["modelValue"])]))}},dt=ct,pt={__name:"SelectPhoto",setup(e){const o=L(),m=ze(),c=()=>{o.getUploadedFiles(),m.modalData.content=[{type:"component",dir:"organism",component:"SelectableImgBlock"}],m.isShowModal=!0};return(n,r)=>(f(),N("div",null,[l(J,{text:"Выбрать фото",type:"button",block:"",onClick:c})]))}},mt=pt,vt={__name:"Preview",setup(e){const o=L(),m="https://shop-back-mh7t.onrender.com";let c="";function n(r){o.previews.splice(r,1),c=="upload"?(o.currentFiles.splice(r,1),o.uploadedFiles.splice(r,1)):c=="select"&&o.selectedFiles.splice(r,1)}return H(()=>o.currentFiles,(r,i)=>{if(r){c="upload",o.previews.length=0;for(let v=0;v<o.currentFiles.length;v++){const g=o.currentFiles[v],_=new FileReader;_.onload=b=>{o.previews.push(b.target.result)},_.readAsDataURL(g)}}}),H(()=>o.selectedFiles,(r,i)=>{r&&(c="select",o.previews.length=0,o.previews=o.selectedFiles.map(v=>m+"/"+v))}),(r,i)=>s(o).previews.length?(f(),w(G,{key:0},{default:p(()=>[(f(!0),N(U,null,Z(s(o).previews,(v,g)=>(f(),w(M,{key:g,cols:"4",class:"d-flex justify-center position-relative"},{default:p(()=>[l(ge,{src:v,alt:`Превью ${g+1}`,"max-width":"100%","max-height":"150px",contain:""},null,8,["src","alt"]),l(J,{icon:"",small:"",class:"close-btn",onClick:_=>n(g)},{default:p(()=>[l(_e,null,{default:p(()=>[B("mdi-close")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})):ye("",!0)}},ft=fe(vt,[["__scopeId","data-v-1c52596c"]]),gt=ee({...ot({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),de=te()({name:"VRadio",props:gt(),setup(e,o){let{slots:m}=o;return le(()=>l(be,z(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),m)),{}}}),_t=ee({height:{type:[Number,String],default:"auto"},...he(),...Ne(nt(),["multiple"]),trueIcon:{type:ue,default:"$radioOn"},falseIcon:{type:ue,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),yt=te()({name:"VRadioGroup",inheritAttrs:!1,props:_t(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:m,slots:c}=o;const n=De(),r=k(()=>e.id||`radio-group-${n}`),i=me(e,"modelValue");return le(()=>{const[v,g]=ve(m),_=W.filterProps(e),b=be.filterProps(e),h=c.label?c.label({label:e.label,props:{for:r.value}}):e.label;return l(W,z({class:["v-radio-group",e.class],style:e.style},v,_,{modelValue:i.value,"onUpdate:modelValue":C=>i.value=C,id:r.value}),{...c,default:C=>{let{id:y,messagesId:S,isDisabled:$,isReadonly:x}=C;return l(U,null,[h&&l(et,{id:y.value},{default:()=>[h]}),l(rt,z(b,{id:y.value,"aria-describedby":S.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:$.value,readonly:x.value,"aria-labelledby":h?y.value:void 0,multiple:!1},g,{modelValue:i.value,"onUpdate:modelValue":V=>i.value=V}),c)])}})}),{}}}),Vt=Ve({__name:"AddPhoto",setup(e){const o=L(),m=R("choose");function c(){o.uploadedFiles.length=0,o.currentFiles.length=0,o.selectedFiles.length=0,o.previews.length=0}return(n,r)=>{const i=dt,v=mt,g=ft;return f(),N("div",null,[m.value=="download"?(f(),w(i,{key:0})):(f(),w(v,{key:1})),P("div",null,[l(Ce,{fluid:""},{default:p(()=>[l(yt,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=_=>m.value=_),inline:""},{default:p(()=>[l(G,{justify:"space-around"},{default:p(()=>[l(de,{label:"Загрузить фото",value:"download",onClick:c}),l(de,{label:"Выбрать фото",value:"choose",onClick:c})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),l(g)])}}}),ae=e=>(Ke("data-v-1102c9df"),e=e(),He(),e),ht=["onClick"],bt=["disabled","onUpdate:modelValue"],Ct=ae(()=>P("b",null,"Price:",-1)),St=ae(()=>P("b",null,"Category:",-1)),kt=ae(()=>P("b",null,"Subcategory:",-1)),Pt=Ve({__name:"index",setup(e){const m=Te().public.apiUrl,c=R([...st]),n=L();R(null);const r=a=>a.map(u=>({title:u.name.ru,value:u.id})),i=a=>{const u=ie.find(F=>F.id===a);return u?u.items.map(F=>({title:F.name.ru,value:F.id})):[]};Oe(()=>{n.getProducts()});const{handleSubmit:v,handleReset:g}=tt({validationSchema:{productName(a){return a!=null&&a.length?(a==null?void 0:a.length)>=2?!0:"Имя содержит минимум 2 символа":"Введите название"},productPrice(a){return a>0?!0:"Введите цену"},productQuantity(a){return a>0?!0:"Введите количество"},productCategory(a){return a?!0:"Выберите категорию"},productSubcategory(a){return a?!0:"Выберите подкатегорию"}}}),_=A("productName"),b=A("productOldPrice"),h=A("productPrice"),C=A("productQuantity"),y=A("productCategory"),S=A("productSubcategory"),$=r(ie),x=R([]),V=a=>{x.value=i(a),S.value.value&&(S.value.value="")},X=v(async a=>{const u={name:a.productName,oldPrice:a.productOldPrice,price:a.productPrice,quantitiesInStore:a.productQuantity,category:a.productCategory,subcategory:a.productSubcategory,description:"",image:n.uploadedFiles.length?n.uploadedFiles:n.selectedFiles,characteristics:D.value};await n.postProduct(u),g(),Y(),n.uploadedFiles.length=0,n.currentFiles.length=0,n.selectedFiles.length=0,n.previews.length=0}),Q=a=>{n.deleteProduct(a)};H(y.value,a=>{V(a)});const D=k(()=>{let a={};return c.value.forEach(u=>{u.value&&(a[u.key]=u.value)}),a});function Y(){c.value.forEach(a=>{a.value="",a.active=!1})}return(a,u)=>{const F=Vt;return f(),w(Ce,null,{default:p(()=>[l(G,{justify:"center"},{default:p(()=>[l(M,{cols:"12",md:"6"},{default:p(()=>[l(lt,{onSubmit:je(s(X),["prevent"])},{default:p(()=>[l(K,{variant:"solo",modelValue:s(_).value.value,"onUpdate:modelValue":u[0]||(u[0]=t=>s(_).value.value=t),"error-messages":s(_).errorMessage.value,label:"Product Name"},null,8,["modelValue","error-messages"]),l(ce,{label:"Category",items:s($),"error-messages":s(y).errorMessage.value,modelValue:s(y).value.value,"onUpdate:modelValue":u[1]||(u[1]=t=>s(y).value.value=t),variant:"solo",onChange:V},null,8,["items","error-messages","modelValue"]),l(ce,{label:"Subcategory",items:x.value,"error-messages":s(S).errorMessage.value,modelValue:s(S).value.value,"onUpdate:modelValue":u[2]||(u[2]=t=>s(S).value.value=t),variant:"solo",disabled:!s(y).value.value},null,8,["items","error-messages","modelValue","disabled"]),l(K,{variant:"solo",modelValue:s(b).value.value,"onUpdate:modelValue":u[3]||(u[3]=t=>s(b).value.value=t),"error-messages":s(b).errorMessage.value,label:"Product Old Price",type:"number",min:s(h).value.value},null,8,["modelValue","error-messages","min"]),l(K,{variant:"solo",modelValue:s(h).value.value,"onUpdate:modelValue":u[4]||(u[4]=t=>s(h).value.value=t),"error-messages":s(h).errorMessage.value,label:"Product Price",type:"number",min:"0"},null,8,["modelValue","error-messages"]),l(K,{variant:"solo",modelValue:s(C).value.value,"onUpdate:modelValue":u[5]||(u[5]=t=>s(C).value.value=t),"error-messages":s(C).errorMessage.value,label:"Количество в наличии",type:"number",min:"0"},null,8,["modelValue","error-messages"]),l(F),l(J,{class:"mt-2",text:"Submit",type:"submit",block:""})]),_:1},8,["onSubmit"])]),_:1}),l(M,{cols:"12",md:"6",id:"scroll-target",class:"overflow-y-auto",style:{"max-height":"500px"}},{default:p(()=>[(f(!0),N(U,null,Z(c.value,t=>(f(),w(G,{class:"product__characteristic d-flex align-center",key:t.key},{default:p(()=>[l(M,{cols:"12",sm:"6"},{default:p(()=>[P("span",{class:"product__characteristic-title",onClick:d=>t.active=!t.active},E(t.title),9,ht)]),_:2},1024),l(M,{class:Ee({"product__characteristic-input--active":t.active}),cols:"12",sm:"6"},{default:p(()=>[Ge(P("input",{class:"product__characteristic-input",type:"text",disabled:!t.active,placeholder:"Enter value","onUpdate:modelValue":d=>t.value=d},null,8,bt),[[Le,t.value]]),t.active?(f(),w(_e,{key:0,onClick:d=>t.active=!1,class:"product__characteristic-close",icon:"mdi-close"},null,8,["onClick"])):ye("",!0)]),_:2},1032,["class"])]),_:2},1024))),128))]),_:1})]),_:1}),l(G,null,{default:p(()=>[(f(!0),N(U,null,Z(s(n).products,t=>(f(),w(M,{key:t._id,cols:"12",md:"4"},{default:p(()=>[l(Qe,{class:"product-card"},{default:p(()=>[l(ge,{src:t.image[0]?`${s(m)}/`+t.image[0]:""},null,8,["src"]),l(qe,null,{default:p(()=>[B(E(t.name),1)]),_:2},1024),P("p",null,[Ct,B(" $"+E(t.price),1)]),P("p",null,[St,B(" "+E(t.category),1)]),P("p",null,[kt,B(" "+E(t.subcategory),1)]),l(J,{color:"error",onClick:d=>Q(t._id)},{default:p(()=>[B("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}}),zt=fe(Pt,[["__scopeId","data-v-1102c9df"]]);export{zt as default};
