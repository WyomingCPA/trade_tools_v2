import{j as x,G as y,l as o,z as E,r as m,o as T,c as C,h as t,u as r,d,g as _,L as U,I as j,k as g,t as i}from"./index.40ff95d5.js";const B={class:"auth-layout__options d-flex align-center justify-space-between"},N={class:"ml-2"},S={class:"va-link"},q={class:"d-flex justify-center mt-3"},D=x({__name:"Signup",setup(I){const{t:s}=y(),c=o(""),v=o(""),p=o(!1),l=o([]),n=o([]),u=o([]),b=E(()=>!(l.value.length||n.value.length||u.value.length));function f(){!b.value||(l.value=c.value?[]:["Email is required"],n.value=v.value?[]:["Password is required"],u.value=p.value?[]:["You must agree to the terms of use to continue"],j().push({name:"dashboard"}))}return(R,e)=>{const h=m("va-input"),V=m("va-checkbox"),k=m("router-link"),w=m("va-button");return T(),C("form",{onSubmit:e[3]||(e[3]=U(a=>f(),["prevent"]))},[t(h,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a),class:"mb-3",type:"email",label:r(s)("auth.email"),error:!!l.value.length,"error-messages":l.value},null,8,["modelValue","label","error","error-messages"]),t(h,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=a=>v.value=a),class:"mb-3",type:"password",label:r(s)("auth.password"),error:!!n.value.length,"error-messages":n.value},null,8,["modelValue","label","error","error-messages"]),d("div",B,[t(V,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),class:"mb-0",error:!!u.value.length,"error-messages":u.value},{label:_(()=>[d("span",N,[g(i(r(s)("auth.agree"))+" ",1),d("span",S,i(r(s)("auth.termsOfUse")),1)])]),_:1},8,["modelValue","error","error-messages"]),t(k,{class:"ml-1 va-link",to:{name:"recover-password"}},{default:_(()=>[g(i(r(s)("auth.recover_password")),1)]),_:1})]),d("div",q,[t(w,{class:"my-0",onClick:f},{default:_(()=>[g(i(r(s)("auth.sign_up")),1)]),_:1})])],32)}}});export{D as default};