import{r as a,j as N,J as M,d as T,R as k,C as O,a as F}from"./vendor.0a686178.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};B();function P(o,t){const[n,s]=a.exports.useState(t),[r,l]=a.exports.useState(!0);return a.exports.useEffect(()=>{setTimeout(()=>{const i=localStorage.getItem(o);let u;i?u=JSON.parse(i):(localStorage.setItem(o,JSON.stringify(t)),u=t),s(u),l(!1)},2e3)},[]),{item:n,setItem:i=>{const u=JSON.stringify(i);localStorage.setItem(o,u),s(i)},loading:r,setLoading:l}}const A=[{text:"Learn about React",completed:!1},{text:"Meet friend for lunch",completed:!1},{text:"Build really cool todo app",completed:!1},{text:"Get a job",completed:!0},{text:"Buy a house djaslkdjsalkdjsalkdjsaldkjsadlkasjdlkasjdlaskjdsalkjdsalkjdsalkjdsalkd",completed:!0}],e=N.exports.jsx,p=N.exports.jsxs,E=N.exports.Fragment,m=a.exports.createContext({});function J(o){const t=new M,{item:n,setItem:s,loading:r}=P("todo_v1",A),[l,d]=a.exports.useState(""),[i,u]=a.exports.useState(!1),[C,y]=a.exports.useState("all");let x;C==="completed"?x=c=>c.completed:C==="active"?x=c=>!c.completed:x=()=>!0;const g=n.filter(c=>c.completed).length,S=n.length,b=n.filter(c=>x(c)&&c.text.toLowerCase().includes(l.toLowerCase())),_=c=>{const f=n.findIndex(L=>L.text===c),h=[...n],$=h[f].completed=!h[f].completed;s(h),$&&t.addConfetti()},j=c=>{const f=n.filter(h=>h.text!==c);s(f)},I=c=>{const f=[...n,{text:c,completed:!1}];s(f)},w=(c,f)=>{const h=[...n];h[c].text=f,s(h)};return e(m.Provider,{value:{todos:n,setTodos:s,loading:r,completedTodos:g,totalTodos:S,filterTodos:b,searchValue:l,setSearchValue:d,toggleComplete:_,deleteTodo:j,addTodo:I,editTodo:w,openModal:i,setOpenModal:u,filter:C,setFilter:y},children:o.children})}function R(){const{openModal:o,setOpenModal:t}=a.exports.useContext(m);return e("button",{type:"button",className:`button-create ${o?"close":""}`,onClick:()=>t(!o),children:e(T.Plus,{size:40})})}function V(){const{completedTodos:o,totalTodos:t}=a.exports.useContext(m);return p("h2",{className:"TodoCounter",children:["You have completed ",o," of ",t," todo's "]})}function D(o){const{text:t,completed:n,index:s}=o,{editTodo:r,toggleComplete:l,deleteTodo:d}=a.exports.useContext(m),[i,u]=a.exports.useState(t),C=g=>{u(g.target.value)},y=g=>{g.key==="Enter"&&(u(i),g.currentTarget.blur())},x=()=>{r(s,i)};return p("li",{className:`todo-item ${n?"completed":""}`,children:[e("span",{className:"todo-item__check",onClick:()=>l(t),children:e(T.Check,{})}),e("span",{className:"todo-item__text",children:e("input",{type:"text",className:"todo-item__input","aria-label":"todo-text",disabled:n,value:i,onChange:C,onKeyDown:y,onBlur:x})}),e("span",{className:"todo-item__delete",onClick:()=>d(t),children:e(T.X,{})})]})}function z(o){return e("section",{className:"todo-list__wrapper",children:e("ul",{className:"todo-list",children:o.children})})}function K(){const{searchValue:o,setSearchValue:t}=a.exports.useContext(m);return e("section",{className:"search-wrapper",children:p("div",{className:"input-container",children:[e("input",{type:"text",placeholder:"Search...",value:o,className:"search-input",onChange:s=>{t(s.target.value)}}),e("span",{className:"search-icon",children:e(T.Search,{})})]})})}function q({children:o}){const{openModal:t,setOpenModal:n}=a.exports.useContext(m);return k.createPortal(t&&e("div",{className:"modal-wrapper",onClick:()=>n(!1),children:e("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:o})}),document.getElementById("modal"))}function G(){const[o,t]=a.exports.useState(""),{addTodo:n,setOpenModal:s}=a.exports.useContext(m);return p("form",{onSubmit:d=>{d.preventDefault(),n(o),t(""),s(!1)},children:[e("h2",{children:"Create new todo"}),e("input",{type:"text",placeholder:"Build an amazing todo app","aria-label":"todo-input",name:"todo-text",value:o,className:"form-input",onChange:d=>t(d.target.value)}),p("div",{className:"button-group",children:[e("button",{type:"submit",className:"button primary",children:"Add"}),e("button",{type:"reset",className:"button secondary",onClick:()=>{s(!1)},children:"Cancel"})]})]})}const v=()=>e("div",{className:"skeleton__item-wrapper",children:p(O,{speed:2,width:500,height:50,viewBox:"0 0 500 50",backgroundColor:"#f3f3f3",foregroundColor:"gray",children:[e("rect",{x:"60",y:"12",rx:"3",ry:"3",width:"406",height:"8"}),e("rect",{x:"60",y:"32",rx:"3",ry:"3",width:"250",height:"8"}),e("circle",{cx:"30",cy:"25",r:"20"})]})});function U(){return p("div",{className:"skeleton",children:[e(v,{}),e(v,{}),e(v,{}),e(v,{}),e(v,{})]})}function X(){const{filter:o,setFilter:t}=a.exports.useContext(m),n=s=>{t(s)};return e("div",{className:"todo-filter__wrapper",children:p("div",{className:"todo-filter",children:[e("a",{className:`todo-filter__item ${o==="all"?"active":""}`,onClick:()=>n("all"),children:"All"}),e("a",{className:`todo-filter__item ${o==="active"?"active":""}`,onClick:()=>n("active"),children:"Active"}),e("a",{className:`todo-filter__item ${o==="completed"?"active":""}`,onClick:()=>n("completed"),children:"Completed"})]})})}function Y(){const{loading:o,filterTodos:t,todos:n}=a.exports.useContext(m);return p(E,{children:[e(V,{}),e(X,{}),e(K,{}),e(z,{children:o?e(U,{}):n.length===0?e("p",{children:"No todos"}):t.length===0?e("p",{children:"No todos match your search"}):t.map((s,r)=>e(D,{index:r,text:s.text,completed:s.completed},s.text))}),e(R,{}),e(q,{children:e(G,{})})]})}function H(){return e(J,{children:e(Y,{})})}k.render(e(F.StrictMode,{children:e(H,{})}),document.getElementById("root"));
