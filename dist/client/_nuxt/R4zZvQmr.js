import{n as $,P as Z,a3 as de,s as R,a4 as ue,r as C,x as W,z as M,C as ie,V as U,b as s,F as A,B as T,a5 as ce,a6 as me,a7 as be,v as ee,a8 as fe,a9 as ve,aa as ge,ab as pe,ac as w,ad as Ve,ae as we,af as ye,S as ke,ag as Se,J as he,T as xe,o as x,K as B,w as d,d as F,U as X,H as m,c as Ce,L as Te,a0 as _e,a1 as Pe,t as Be,p as Ie,e as We,a as Ue,_ as $e}from"./dlBUJPxP.js";import{j as Re,k as Y,e as Me,g as q,h as J,i as I}from"./B34bF4Mc.js";import{m as Ee,V as K,a as Fe,b as Q}from"./BaXzzKG1.js";import{V as z}from"./DOYfp3UE.js";import{a as N,V as O}from"./4c4Tojpe.js";import"./CIZ9W13C.js";import"./BtsD_yie.js";const D=Symbol.for("vuetify:v-tabs"),ze=$({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Z(de({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),j=R()({name:"VTab",props:ze(),setup(e,b){let{slots:a,attrs:u}=b;const{textColorClasses:v,textColorStyles:V}=ue(e,"sliderColor"),i=C(),g=C(),c=W(()=>e.direction==="horizontal"),p=W(()=>{var r,t;return((t=(r=i.value)==null?void 0:r.group)==null?void 0:t.isSelected.value)??!1});function f(r){var o,n;let{value:t}=r;if(t){const l=(n=(o=i.value)==null?void 0:o.$el.parentElement)==null?void 0:n.querySelector(".v-tab--selected .v-tab__slider"),E=g.value;if(!l||!E)return;const te=getComputedStyle(l).color,y=l.getBoundingClientRect(),k=E.getBoundingClientRect(),_=c.value?"x":"y",P=c.value?"X":"Y",G=c.value?"right":"bottom",S=c.value?"width":"height",se=y[_],oe=k[_],h=se>oe?y[G]-k[G]:y[_]-k[_],le=Math.sign(h)>0?c.value?"right":"bottom":Math.sign(h)<0?c.value?"left":"top":"center",ne=(Math.abs(h)+(Math.sign(h)<0?y[S]:k[S]))/Math.max(y[S],k[S])||0,re=y[S]/k[S]||0,H=1.5;ce(E,{backgroundColor:[te,"currentcolor"],transform:[`translate${P}(${h}px) scale${P}(${re})`,`translate${P}(${h/H}px) scale${P}(${(ne-1)/H+1})`,"none"],transformOrigin:Array(3).fill(le)},{duration:225,easing:me})}}return M(()=>{const r=U.filterProps(e);return s(U,T({symbol:D,ref:i,class:["v-tab",e.class],style:e.style,tabindex:p.value?0:-1,role:"tab","aria-selected":String(p.value),active:!1},r,u,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":f}),{...a,default:()=>{var t;return s(A,null,[((t=a.default)==null?void 0:t.call(a))??e.text,!e.hideSlider&&s("div",{ref:g,class:["v-tab__slider",v.value],style:V.value},null)])}})}),ie({},i)}}),Ne=$({...Z(Ee(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),ae=R()({name:"VTabsWindow",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,b){let{slots:a}=b;const u=be(D,null),v=ee(e,"modelValue"),V=W({get(){var i;return v.value!=null||!u?v.value:(i=u.items.value.find(g=>u.selected.value.includes(g.id)))==null?void 0:i.value},set(i){v.value=i}});return M(()=>{const i=K.filterProps(e);return s(K,T({_as:"VTabsWindow"},i,{modelValue:V.value,"onUpdate:modelValue":g=>V.value=g,class:"v-tabs-window",mandatory:!1,touch:!1}),a)}),{}}}),Oe=$({...Fe()},"VTabsWindowItem"),L=R()({name:"VTabsWindowItem",props:Oe(),setup(e,b){let{slots:a}=b;return M(()=>{const u=Q.filterProps(e);return s(Q,T({_as:"VTabsWindowItem"},u,{class:["v-tabs-window-item",e.class],style:e.style}),a)}),{}}});function je(e){return e?e.map(b=>ye(b)?b:{text:b,value:b}):[]}const Le=$({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Re({mandatory:"force",selectedClass:"v-tab-item--selected"}),...fe(),...ve()},"VTabs"),Ae=R()({name:"VTabs",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,b){let{slots:a}=b;const u=ee(e,"modelValue"),v=W(()=>je(e.items)),{densityClasses:V}=ge(e),{backgroundColorClasses:i,backgroundColorStyles:g}=pe(w(e,"bgColor"));return Ve({VTab:{color:w(e,"color"),direction:w(e,"direction"),stacked:w(e,"stacked"),fixed:w(e,"fixedTabs"),sliderColor:w(e,"sliderColor"),hideSlider:w(e,"hideSlider")}}),M(()=>{const c=Y.filterProps(e),p=!!(a.window||e.items.length>0);return s(A,null,[s(Y,T(c,{modelValue:u.value,"onUpdate:modelValue":f=>u.value=f,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},V.value,i.value,e.class],style:[{"--v-tabs-height":we(e.height)},g.value,e.style],role:"tablist",symbol:D}),{default:()=>{var f;return[((f=a.default)==null?void 0:f.call(a))??v.value.map(r=>{var t;return((t=a.tab)==null?void 0:t.call(a,{item:r}))??s(j,T(r,{key:r.text,value:r.value}),{default:()=>{var o;return(o=a[`tab.${r.value}`])==null?void 0:o.call(a,{item:r})}})})]}}),p&&s(ae,{modelValue:u.value,"onUpdate:modelValue":f=>u.value=f,key:"tabs-window"},{default:()=>{var f;return[v.value.map(r=>{var t;return((t=a.item)==null?void 0:t.call(a,{item:r}))??s(L,{value:r.value},{default:()=>{var o;return(o=a[`item.${r.value}`])==null?void 0:o.call(a,{item:r})}})}),(f=a.window)==null?void 0:f.call(a)]}})])}),{}}}),De=e=>(Ie("data-v-06f4d3b4"),e=e(),We(),e),Ge=De(()=>Ue("h2",null,"Все пользователи",-1)),He=ke({__name:"auth",setup(e){const b=Se(),a=he(),u=C(null),v=C(""),V=C("");xe(()=>{a.getUsers()});const{handleSubmit:i,handleReset:g}=Me({validationSchema:{phone(t){return t!=null&&t.length?(t==null?void 0:t.length)>=2?!0:"Имя содержит минимум 2 символа":"Введите имя"},password(t){return t!=null&&t.length?(t==null?void 0:t.length)>=4?!0:"Пароль содержит минимум 4 символа":"Введите парооль"}}}),c=q("phone"),p=q("password"),f=i(async t=>{const{phone:o,password:n}=t,l=await a.register({phone:o,password:n});l!=null&&l.data.ok?(a.snackbarText=l==null?void 0:l.data.message,a.snackbarColor="success",a.isOpenSnackbar=!0,u.value=1):(a.snackbarText=l==null?void 0:l.data.message,a.snackbarColor="error",a.snackbarTimeout=4e3,a.isOpenSnackbar=!0,v.value=l==null?void 0:l.data.message),g(),a.getUsers()}),r=i(async t=>{const{phone:o,password:n}=t,l=await a.login({phone:o,password:n});l!=null&&l.ok?(a.snackbarText=l==null?void 0:l.message,a.snackbarColor="success",a.isOpenSnackbar=!0,b.push("/")):typeof l=="string"&&(a.snackbarText=l,a.snackbarColor="error",a.isOpenSnackbar=!0,V.value=l),g()});return(t,o)=>(x(),B(z,null,{default:d(()=>[s(Ae,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=n=>u.value=n),"align-tabs":"center",color:"primary"},{default:d(()=>[s(j,{value:1},{default:d(()=>[F("Login")]),_:1}),s(j,{value:2},{default:d(()=>[F("Registration")]),_:1})]),_:1},8,["modelValue"]),s(ae,{modelValue:u.value,"onUpdate:modelValue":o[7]||(o[7]=n=>u.value=n)},{default:d(()=>[(x(),B(L,{key:2,value:2},{default:d(()=>[s(z,{fluid:""},{default:d(()=>[s(J,{onSubmit:X(m(f),["prevent"])},{default:d(()=>[s(N,{justify:"center"},{default:d(()=>[s(O,{cols:"12",md:"6"},{default:d(()=>[s(I,{variant:"solo",modelValue:m(c).value.value,"onUpdate:modelValue":o[1]||(o[1]=n=>m(c).value.value=n),"error-messages":m(c).errorMessage.value||v.value,label:"User Name",onInput:o[2]||(o[2]=n=>v.value="")},null,8,["modelValue","error-messages"]),s(I,{variant:"solo",modelValue:m(p).value.value,"onUpdate:modelValue":o[3]||(o[3]=n=>m(p).value.value=n),"error-messages":m(p).errorMessage.value,label:"password",type:"password",min:"0"},null,8,["modelValue","error-messages"]),s(U,{class:"mt-2",text:"Submit",type:"submit",block:""})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})),(x(),B(L,{key:1,value:1},{default:d(()=>[s(z,{fluid:""},{default:d(()=>[s(J,{onSubmit:X(m(r),["prevent"])},{default:d(()=>[s(N,{justify:"center"},{default:d(()=>[s(O,{cols:"12",md:"6"},{default:d(()=>[s(I,{variant:"solo",modelValue:m(c).value.value,"onUpdate:modelValue":o[4]||(o[4]=n=>m(c).value.value=n),"error-messages":m(c).errorMessage.value||V.value,onInput:o[5]||(o[5]=n=>V.value=""),label:"User Name"},null,8,["modelValue","error-messages"]),s(I,{variant:"solo",modelValue:m(p).value.value,"onUpdate:modelValue":o[6]||(o[6]=n=>m(p).value.value=n),"error-messages":m(p).errorMessage.value,label:"password",type:"password",min:"0"},null,8,["modelValue","error-messages"]),s(U,{class:"mt-2",text:"Submit",type:"submit",block:""})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))]),_:1},8,["modelValue"]),Ge,s(N,null,{default:d(()=>[(x(!0),Ce(A,null,Te(m(a).users,n=>(x(),B(O,{key:n._id,cols:"12",md:"4"},{default:d(()=>[s(_e,null,{default:d(()=>[s(Pe,null,{default:d(()=>[F(Be(n.phone),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),aa=$e(He,[["__scopeId","data-v-06f4d3b4"]]);export{aa as default};