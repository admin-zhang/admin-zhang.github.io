import{c as r,d as s}from"./chunk-I6CY6N4A.js";r();var B=()=>n("main > .inner").offsetHeight,n=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);n.all=(t,e=document)=>e.querySelectorAll(t);n.each=(t,e,o)=>{n.all(t,o).forEach(e)};r();var d=function(t,e){let o=t.parentNode;o.lastChild===t?o.appendChild(e):o.insertBefore(e,t.nextSibling)},j=function(t,e,o,a){let i=document.createElement(e);switch(Object.assign(i,o),a){case"after":d(t,i);break;case"replace":t.innerHTML="",t.appendChild(i);break;default:t.appendChild(i)}return i},k=function(t,e){let o=document.createElement("div");Object.assign(o,e),t.parentNode.insertBefore(o,t),t.parentNode.removeChild(t),o.appendChild(t)},D=function(t){return t.getBoundingClientRect().height},W=function(t,e){t.style.width=typeof e=="number"?e+"rem":e},P=function(t){return t.getBoundingClientRect().width},_=function(t){return t.getBoundingClientRect().top},A=function(t){return t.getBoundingClientRect().left},I=function(t){return t.style.display},R=function(t,e){return t.style.display=e,t},q=function(t,e){return n(e,t)};function l(){Object.assign(HTMLElement.prototype,{child(t){return n(t,this)},find(t){return n.all(t,this)},_class(t,e,o){(e.indexOf(" ")?e.split(" "):[e]).forEach(i=>{t==="toggle"?this.classList.toggle(i,o):this.classList[t](i)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}r();var c=s;l();var J=c.statics.indexOf("//")>0?c.statics:c.root,U={x:0,y:0},u=0,m;var z=document.getElementsByTagName("body")[0],K=document.documentElement,Q=n("#container"),V=n("#loading"),p=n("#nav"),X=n("#header"),Z=p.child(".toggle"),tt=n("#quick"),et=n("#sidebar"),nt=n("#brand"),g=n("#tool"),x,f,h,T,H=n("#search"),L,E,b,v=window.innerHeight,M=window.innerWidth,C=0,y=window.location.href,O;function ot(t){L=t}function it(t){E=t}function rt(t){b=t}function st(t){v=t}function lt(t){M=t}function ct(t){u=t}function at(t){C=t}function dt(t){y=t}function ut(t){O=t}function mt(t){m=t}function pt(t){x=t}function gt(t){f=t}function xt(t){h=t}function ft(t){T=t}function ht(t){g=t}function Tt(t){H=t}export{B as a,n as b,d as c,j as d,k as e,D as f,W as g,P as h,_ as i,A as j,I as k,R as l,q as m,l as n,c as o,U as p,u as q,m as r,z as s,K as t,Q as u,V as v,p as w,X as x,Z as y,tt as z,et as A,nt as B,g as C,x as D,f as E,h as F,T as G,H,L as I,E as J,b as K,M as L,C as M,y as N,O,ot as P,it as Q,rt as R,st as S,lt as T,ct as U,at as V,dt as W,ut as X,mt as Y,pt as Z,gt as _,xt as $,ft as aa,ht as ba,Tt as ca};
/*! For license information please see chunk-QWLQUKSX.js.LEGAL.txt */
