import{j as v}from"./jsx-runtime-CexXSJP5.js";import{a as M,c as q,e as T,_ as b,f as m}from"./index-D4nElVWN.js";import{r as i}from"./index-BP8_t0zE.js";import{$ as y,a as D,b as N}from"./index-CVcCIkVJ.js";import{a as j}from"./index-CA47nhQn.js";import{$ as k}from"./index-BPPu71LY.js";import"./index-BxmsGmlx.js";const C="Tabs",[B,ne]=M(C,[y]),E=y(),[L,V]=B(C),P=i.forwardRef((e,r)=>{const{__scopeTabs:s,value:a,onValueChange:t,defaultValue:c,orientation:o="horizontal",dir:f,activationMode:$="automatic",...p}=e,d=j(f),[n,A]=q({prop:a,onChange:t,defaultProp:c});return i.createElement(L,{scope:s,baseId:k(),value:n,onValueChange:A,orientation:o,dir:d,activationMode:$},i.createElement(T.div,b({dir:d,"data-orientation":o},p,{ref:r})))}),F="TabsList",G=i.forwardRef((e,r)=>{const{__scopeTabs:s,loop:a=!0,...t}=e,c=V(F,s),o=E(s);return i.createElement(D,b({asChild:!0},o,{orientation:c.orientation,dir:c.dir,loop:a}),i.createElement(T.div,b({role:"tablist","aria-orientation":c.orientation},t,{ref:r})))}),K="TabsTrigger",W=i.forwardRef((e,r)=>{const{__scopeTabs:s,value:a,disabled:t=!1,...c}=e,o=V(K,s),f=E(s),$=z(o.baseId,a),p=O(o.baseId,a),d=a===o.value;return i.createElement(N,b({asChild:!0},f,{focusable:!t,active:d}),i.createElement(T.button,b({type:"button",role:"tab","aria-selected":d,"aria-controls":p,"data-state":d?"active":"inactive","data-disabled":t?"":void 0,disabled:t,id:$},c,{ref:r,onMouseDown:m(e.onMouseDown,n=>{!t&&n.button===0&&n.ctrlKey===!1?o.onValueChange(a):n.preventDefault()}),onKeyDown:m(e.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&o.onValueChange(a)}),onFocus:m(e.onFocus,()=>{const n=o.activationMode!=="manual";!d&&!t&&n&&o.onValueChange(a)})})))});function z(e,r){return`${e}-trigger-${r}`}function O(e,r){return`${e}-content-${r}`}const H=P,J=G,Q=W,U="_RadixTabsRoot_b1ivy_1",X="_RadixTabsList_b1ivy_5",Y="_RadixTabsTrigger_b1ivy_9",g={RadixTabsRoot:U,RadixTabsList:X,RadixTabsTrigger:Y},I=({defaultValue:e,onValueChange:r,tabs:s,value:a})=>v.jsx(H,{className:g.RadixTabsRoot,defaultValue:e,onValueChange:r,value:a,children:v.jsx(J,{className:g.RadixTabsList,children:s.map(t=>v.jsx(Q,{className:g.RadixTabsTrigger,disabled:t.disabled,value:t.value,children:t.title},t.value))})});I.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  disabled?: boolean\r
  title: string\r
  // A unique value that associates the trigger with a content\r
  value: string\r
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"TabType[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};const ie={component:I,tags:["autodocs"],title:"Components/Tab"},l={args:{tabs:[{title:"Switch 1",value:"Switch 1"},{title:"Switch 2",value:"Switch 2"},{title:"Switch 3",value:"Switch 3"}]}},u={args:{tabs:[{title:"Switch 1",value:"Switch 1"},{title:"Switch 2",value:"Switch 2"},{disabled:!0,title:"Switch 3",value:"Switch 3"}]}};var h,x,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: [{
      title: 'Switch 1',
      value: 'Switch 1'
    }, {
      title: 'Switch 2',
      value: 'Switch 2'
    }, {
      title: 'Switch 3',
      value: 'Switch 3'
    }]
  }
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,_,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: [{
      title: 'Switch 1',
      value: 'Switch 1'
    }, {
      title: 'Switch 2',
      value: 'Switch 2'
    }, {
      disabled: true,
      title: 'Switch 3',
      value: 'Switch 3'
    }]
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ce=["BaseTab","BaseTabWithDisabled"];export{l as BaseTab,u as BaseTabWithDisabled,ce as __namedExportsOrder,ie as default};
