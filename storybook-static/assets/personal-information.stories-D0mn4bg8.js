import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{C as R}from"./card-CNbBWklm.js";import{T as f}from"./typography-hRcQ7HT3.js";import{B as w}from"./button-IQQmPvgr.js";import{c as T}from"./clsx-B-dksMZM.js";import{z as j,u as $,t as A,F as L}from"./index-CqkZnmtt.js";import"./input-DxJd6Y6X.js";const P=""+new URL("avatar-DlKfOaW5.png",import.meta.url).href,Z="_PersonalInformation_1j7ea_1",D="_Title_1j7ea_6",H="_ButtonEdit_1j7ea_10",k="_ButtonEditTransparent_1j7ea_21",c={PersonalInformation:Z,Title:D,ButtonEdit:H,ButtonEditTransparent:k},V=(t,n)=>e.jsx("svg",{fill:"none",height:16,ref:n,width:16,xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12.667 13.333H3.333a.667.667 0 1 0 0 1.334h9.334a.666.666 0 1 0 0-1.334ZM3.333 12h.06l2.78-.253c.305-.03.59-.165.807-.38l6-6a1.28 1.28 0 0 0-.047-1.807l-1.826-1.827a1.333 1.333 0 0 0-1.774-.046l-6 6c-.215.217-.35.502-.38.806l-.286 2.78a.667.667 0 0 0 .666.727Zm6.847-9.333L12 4.487l-1.333 1.3L8.88 4l1.3-1.333Zm-5.933 5.94L8 4.88l1.8 1.8-3.733 3.733-2 .187.18-1.993Z",fill:"#fff"})}),_=l.forwardRef(V);_.__docgenInfo={description:"",methods:[],displayName:"ForwardRef"};const z=(t,n)=>e.jsx("svg",{fill:"none",height:16,ref:n,width:16,xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M4.667 4a.667.667 0 0 0 0-1.333H3.333a.667.667 0 0 0-.666.666v9.334a.667.667 0 0 0 .666.666h1.334a.666.666 0 1 0 0-1.333H4V4h.667ZM13.88 7.613 12 4.947a.667.667 0 1 0-1.087.773l1.147 1.613H6.667a.667.667 0 0 0 0 1.334H12l-1.2 1.6a.67.67 0 0 0 .133.933.666.666 0 0 0 .934-.133l2-2.667a.667.667 0 0 0 .013-.787Z",fill:"#fff"})}),S=l.forwardRef(z);S.__docgenInfo={description:"",methods:[],displayName:"ForwardRef"};const O="_Name_1yeb6_1",U="_ButtonEdit_1yeb6_6",W="_Email_1yeb6_10",g={Name:O,ButtonEdit:U,Email:W},b=({email:t,name:n,setEditMode:o})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:g.Name,children:[e.jsx(f,{as:"span",variant:"h2",children:n}),e.jsx("button",{className:T(c.ButtonEdit,c.ButtonEditTransparent,g.ButtonEdit),onClick:()=>o(!0),children:e.jsx(_,{})})]}),e.jsx(f,{as:"div",className:g.Email,variant:"body2",children:t}),e.jsxs(w,{variant:"secondary",children:[e.jsx(S,{}),e.jsx(f,{as:"span",variant:"subtitle2",children:"Logout"})]})]});b.__docgenInfo={description:"",methods:[],displayName:"PersonalInformationInfo",props:{email:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},setEditMode:{required:!0,tsType:{name:"signature",type:"function",raw:"(editMode: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"editMode"}],return:{name:"void"}}},description:""}}};const K="_Avatar_vfrp8_1",G="_ButtonEdit_vfrp8_15",J="_ButtonEditInput_vfrp8_21",h={Avatar:K,ButtonEdit:G,ButtonEditInput:J},F=({editMode:t,img:n})=>{const[o,m]=l.useState(n),r=s=>{var i;const a=(i=s.target.files)==null?void 0:i[0];if(a){const d=new FileReader;d.onloadend=()=>{m(d.result)},d.readAsDataURL(a)}};return e.jsxs("div",{className:h.Avatar,children:[e.jsx("img",{alt:"avatar",src:o}),!t&&e.jsxs("button",{className:T(c.ButtonEdit,h.ButtonEdit),children:[e.jsx("input",{accept:"image/png, image/jpeg",className:h.ButtonEditInput,onChange:r,type:"file"}),e.jsx(_,{})]})]})};F.__docgenInfo={description:"",methods:[],displayName:"PersonalInformationAvatar",props:{editMode:{required:!0,tsType:{name:"boolean"},description:""},img:{required:!0,tsType:{name:"string"},description:""}}};const Q="_Form_166vp_1",X="_Button_166vp_5",v={Form:Q,Button:X},Y=j.object({name:j.string().min(2)}),M=({name:t,onSubmit:n})=>{var a;const{control:o,formState:{errors:m},handleSubmit:r}=$({resolver:A(Y)}),s=r(i=>{n(i)});return e.jsxs("form",{className:v.Form,onSubmit:s,children:[e.jsx(L,{control:o,defaultValue:t,error:(a=m.name)==null?void 0:a.message,label:"Nickname",name:"name",placeholder:""}),e.jsx(w,{className:v.Button,fullWidth:!0,children:"Save Changes"})]})};M.__docgenInfo={description:"",methods:[],displayName:"PersonalInformationForm",props:{name:{required:!0,tsType:{name:"string"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProfileEditValues) => void",signature:{arguments:[{type:{name:"z.infer",elements:[{name:"profileSchema"}],raw:"z.infer<typeof profileSchema>"},name:"data"}],return:{name:"void"}}},description:""}}};const C=({editModeDefault:t=!1,email:n,img:o,name:m})=>{const[r,s]=l.useState(t),[a,i]=l.useState(m),d=q=>{i(q.name),s(!1)};return e.jsxs(R,{className:c.PersonalInformation,children:[e.jsx(f,{as:"h1",className:c.Title,variant:"h1",children:"Personal Information"}),e.jsx(F,{editMode:r,img:o}),r?e.jsx(M,{name:a,onSubmit:d}):e.jsx(b,{email:n,name:a,setEditMode:s})]})};C.__docgenInfo={description:"",methods:[],displayName:"PersonalInformation",props:{editModeDefault:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},email:{required:!0,tsType:{name:"string"},description:""},img:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const me={component:C,tags:["autodocs"],title:"Profile/PersonalInformation"},u={args:{email:"j&johnson@gmail.com",img:P,name:"Ivan"}},p={args:{editModeDefault:!0,email:"j&johnson@gmail.com",img:P,name:"Ivan"}};var I,x,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    email: 'j&johnson@gmail.com',
    img: avatar,
    name: 'Ivan'
  }
}`,...(E=(x=u.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,B,N;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    editModeDefault: true,
    email: 'j&johnson@gmail.com',
    img: avatar,
    name: 'Ivan'
  }
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const de=["PersonalInformationCard","PersonalInformationCardEditMode"];export{u as PersonalInformationCard,p as PersonalInformationCardEditMode,de as __namedExportsOrder,me as default};
