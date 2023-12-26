import{_ as D,j as S,x as H,G as I,l as M,r as _,o as i,c as d,w as K,u as y,N as C,F as Y,e as z,P as F,d as x,t as b,h as c,Z as L,g,k as N}from"./index.c2d02297.js";const O={mounted:(e,n)=>{const l=n.value.duration||500,m=n.value.animate,r=o=>{const v=e.scrollTop,s=e.scrollHeight-v,f=20;function B(t,p,V,$){return t/=$/2,t<1?V/2*t*t+p:(t-=1,-V/2*(t*(t-2)-1)+p)}function k(t){t+=f;const p=B(t,v,s,o);e.scrollTop=p,t<o&&setTimeout(()=>{k(t)},f)}k(0)},a=()=>{m?r(l):e.scrollTop=e.scrollHeight},u=new MutationObserver(a),h={childList:!0};u.observe(e,h)}};const P={class:"va-chat"},T={class:"va-chat__message-text"},U={class:"va-chat__controls"},j=S({__name:"Chat",props:{modelValue:{default:()=>[{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]},height:{default:"20rem"}},emits:["update:modelValue"],setup(e,{emit:n}){const l=e,{colors:m}=H(),{t:r}=I(),a=M("");function u(){!a.value||(n("update:modelValue",l.modelValue.concat({text:a.value,yours:!0})),a.value="")}return(h,o)=>{const v=_("va-input"),w=_("va-button");return i(),d("div",P,[K((i(),d("div",{class:"va-chat__body",style:C({height:e.height})},[(i(!0),d(Y,null,z(e.modelValue,(s,f)=>(i(),d("div",{key:f,class:F(["va-chat__message",{"va-chat__message--yours":s.yours}]),style:C({backgroundColor:s.yours?y(m).primary:void 0})},[x("span",T,b(s.text),1)],6))),128))],4)),[[y(O),{animate:!0,duration:500}]]),x("div",U,[c(v,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),placeholder:"Type your message...",class:"va-chat__input mr-2",onKeypress:L(u,["enter"])},null,8,["modelValue","onKeypress"]),c(w,{onClick:o[1]||(o[1]=s=>u())},{default:g(()=>[N(b(y(r)("chat.sendButton")),1)]),_:1})])])}}});var A=D(j,[["__scopeId","data-v-451f73c6"]]);const E={class:"chat"},G={class:"row"},Z={class:"flex xs12 md12"},J=S({__name:"ChatPage",setup(e){const{t:n}=I(),l=M([{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]);return(m,r)=>{const a=_("va-card-title"),u=_("va-card-content"),h=_("va-card");return i(),d("div",E,[x("div",G,[x("div",Z,[c(h,null,{default:g(()=>[c(a,null,{default:g(()=>[N(b(y(n)("chat.title")),1)]),_:1}),c(u,null,{default:g(()=>[c(A,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=o=>l.value=o)},null,8,["modelValue"])]),_:1})]),_:1})])])])}}});export{J as default};
