import{a as t,r as C}from"./index-BP8_t0zE.js";import{a as v,b as p,g as m}from"./index-D4nElVWN.js";function N(l){const i=l+"CollectionProvider",[$,x]=v(i),[R,f]=$(i,{collectionRef:{current:null},itemMap:new Map}),M=r=>{const{scope:e,children:s}=r,o=t.useRef(null),c=t.useRef(new Map).current;return t.createElement(R,{scope:e,itemMap:c,collectionRef:o},s)},b=l+"CollectionSlot",E=t.forwardRef((r,e)=>{const{scope:s,children:o}=r,c=f(b,s),n=p(e,c.collectionRef);return t.createElement(m,{ref:n},o)}),I=l+"CollectionItemSlot",d="data-radix-collection-item",S=t.forwardRef((r,e)=>{const{scope:s,children:o,...c}=r,n=t.useRef(null),u=p(e,n),a=f(I,s);return t.useEffect(()=>(a.itemMap.set(n,{ref:n,...c}),()=>void a.itemMap.delete(n))),t.createElement(m,{[d]:"",ref:u},o)});function A(r){const e=f(l+"CollectionConsumer",r);return t.useCallback(()=>{const o=e.collectionRef.current;if(!o)return[];const c=Array.from(o.querySelectorAll(`[${d}]`));return Array.from(e.itemMap.values()).sort((a,T)=>c.indexOf(a.ref.current)-c.indexOf(T.ref.current))},[e.collectionRef,e.itemMap])}return[{Provider:M,Slot:E,ItemSlot:S},A,x]}const O=C.createContext(void 0);function D(l){const i=C.useContext(O);return l||i||"ltr"}export{N as $,D as a};
