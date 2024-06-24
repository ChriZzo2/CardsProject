import{j as e}from"./jsx-runtime-CexXSJP5.js";import{a as S,z as m,u as j,F as p,t as v}from"./index-CqkZnmtt.js";import{B as w}from"./button-IQQmPvgr.js";import{C as y}from"./card-CNbBWklm.js";import{C as I}from"./checkbox-CiVotHYg.js";import{T as i}from"./typography-hRcQ7HT3.js";import"./index-BP8_t0zE.js";import"./input-DxJd6Y6X.js";import"./clsx-B-dksMZM.js";import"./index-D4nElVWN.js";import"./index-BxmsGmlx.js";import"./index-CF1bRcOk.js";import"./index-B97UCZvV.js";import"./index-BDUOduoq.js";const _=({control:r,defaultValue:s,disabled:a,name:l,rules:d,shouldUnregister:n,...t})=>{const{field:{onChange:k,value:f,...x}}=S({control:r,defaultValue:s,disabled:a,name:l,rules:d,shouldUnregister:n});return e.jsx(I,{...t,checked:f,onCheckedChange:k,...x})};_.__docgenInfo={description:"",methods:[],displayName:"FormCheckbox"};const F="_card_1kmkq_1",C="_form_1kmkq_7",N="_checkbox_1kmkq_15",q="_title_1kmkq_19",P="_recoverPassword_1kmkq_24",U="_button_1kmkq_34",E="_caption_1kmkq_38",T="_signUp_1kmkq_44",o={card:F,form:C,checkbox:N,title:q,recoverPassword:P,button:U,caption:E,signUp:T},z=m.object({email:m.string().email("Invalid email address"),password:m.string().min(3),rememberMe:m.boolean().default(!1)}),b=r=>{var n,t;const{control:s,formState:{errors:a},handleSubmit:l}=j({resolver:v(z)}),d=l(r.onSubmit);return e.jsx(e.Fragment,{children:e.jsxs(y,{className:o.card,children:[e.jsx(i,{className:o.title,variant:"h1",children:"Sign In"}),e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{className:o.form,children:[e.jsx(p,{control:s,error:(n=a.email)==null?void 0:n.message,label:"Email",name:"email",placeholder:"Email"}),e.jsx(p,{control:s,error:(t=a.password)==null?void 0:t.message,label:"Password",name:"password",placeholder:"Password",type:"password"})]}),e.jsx(_,{className:o.checkbox,control:s,label:"Remember me",name:"rememberMe"}),e.jsx(i,{className:o.recoverPassword,variant:"body2",children:"Forgot Password?"}),e.jsx(w,{className:o.button,fullWidth:!0,type:"submit",children:"Sign In"})]}),e.jsx(i,{className:o.caption,variant:"body2",children:"Don't have an account?"}),e.jsx(i,{className:o.signUp,variant:"link1",children:"Sign Up"})]})})};b.__docgenInfo={description:"",methods:[],displayName:"SignIn",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormType) => void",signature:{arguments:[{type:{name:"z.infer",elements:[{name:"loginSchema"}],raw:"z.infer<typeof loginSchema>"},name:"data"}],return:{name:"void"}}},description:""}}};const Y={component:b,tags:["autodocs"],title:"Auth/LoginForm"},B=r=>{console.log("Form Data:",r)},c={args:{onSubmit:B}};var u,g,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onSubmit: handleSignIn
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Z=["SingIn"];export{c as SingIn,Z as __namedExportsOrder,Y as default};
