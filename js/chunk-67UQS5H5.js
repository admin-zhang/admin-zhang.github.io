import{I as c,i as u,l}from"./chunk-K2PHPRS3.js";import{a as s}from"./chunk-HNF3JZAQ.js";import{c as b}from"./chunk-VZCI2WEE.js";b();var p=(a,t,n,r)=>{let e,o="none";switch(t){case 0:e={opacity:[1,0]};break;case 1:e={opacity:[0,1]},o="block";break;case"bounceUpIn":e={begin(i){l(a,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},o="block";break;case"shrinkIn":e={begin(i){l(a,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},o="block";break;case"slideRightIn":e={begin(i){l(a,"block")},translateX:["100%","0%"],opacity:[0,1]},o="block";break;case"slideRightOut":e={translateX:["0%","100%"],opacity:[1,0]};break;default:e=t,o=t.display;break}s(Object.assign({targets:a,duration:200,easing:"linear",begin(){r&&r()},complete(){l(a,o),n&&n()}},e)).play()},d=(a,t,n)=>{s({targets:typeof t=="number"&&typeof a!="number"?a.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof a=="number"?a:a?u(a)+document.documentElement.scrollTop-c:0),complete(){n&&n()}}).play()};export{p as a,d as b};/*! For license information please see chunk-67UQS5H5.js.LEGAL.txt */
