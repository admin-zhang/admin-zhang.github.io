import{b as E}from"./chunk-KZSKOY4M.js";import{M as j,N as A,V as q,b as L,d as h,g as _,h as P,j as I,l as $,o as T,p as F,r as k,s as O}from"./chunk-QWLQUKSX.js";import{c as b}from"./chunk-I6CY6N4A.js";b();b();var v={set(t,o){localStorage.setItem(t,o)},get(t){return localStorage.getItem(t)},del(t){localStorage.removeItem(t)}};var B=t=>{if(!t)return;let o=h(O,"div",{innerHTML:t,className:"tip"});setTimeout(()=>{o.addClass("hide"),setTimeout(()=>{O.removeChild(o)},300)},3e3)},se=()=>{T.auto_scroll&&v.set(A,String(F.y))},ne=t=>{let o=window.location.hash,c=null;if(j){v.del(A);return}o?c=L(decodeURI(o)):c=T.auto_scroll?parseInt(v.get(A)):0,c&&(E(c),q(1)),t&&o&&!j&&(E(c),q(1))},ie=(t,o)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{o&&o(!0)},()=>{o&&o(!1)}):(console.error("Too old browser, clipborad API not supported."),o&&o(!1))};b();b();var U=()=>{let t;L.each("div.tab",o=>{if(o.getAttribute("data-ready"))return;let c=o.getAttribute("data-id"),p=o.getAttribute("data-title"),n=L("#"+c);n?t=!1:(n=document.createElement("div"),n.className="tabs",n.id=c,n.innerHTML='<div class="show-btn"></div>',n.child(".show-btn").addEventListener("click",()=>{E(n)}),o.parentNode.insertBefore(n,o),t=!0);let f=n.child(".nav ul");f||(f=h(n,"div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));let l=h(f,"li",{innerHTML:p});t&&(l.addClass("active"),o.addClass("active")),l.addEventListener("click",i=>{let x=i.currentTarget;n.find(".active").forEach(y=>{y.removeClass("active")}),o.addClass("active"),x.addClass("active")}),n.appendChild(o),o.setAttribute("data-ready",String(!0))})};var S=null,D=/mobile/i.test(window.navigator.userAgent),we=(t,o)=>{let c={el:{},create(){t.player.options.btns&&t.player.options.btns.forEach(e=>{c.el[e]||(c.el[e]=h(t,"div",{className:e+" btn",onclick(a){t.player.fetch().then(()=>{t.player.options.events[e](a)})}}))})}},p={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!t.player.options.controls)return;let e=p;t.player.options.controls.forEach(a=>{if(e.btns[a])return;let r={onclick(u){e.events[a]?e.events[a](u):t.player.options.events[a](u)}};switch(a){case"volume":r.className=" "+(l.muted?"off":"on"),r.innerHTML='<div class="bar"></div>',r["on"+m.nameMap.dragStart]=e.events.volume,r.onclick=null;break;case"mode":r.className=" "+t.player.options.mode;break;default:r.className="";break}r.className=a+r.className+" btn",e.btns[a]=h(e.el,"div",r)}),e.btns.volume.bar=e.btns.volume.child(".bar")},events:{mode(e){switch(t.player.options.mode){case"loop":t.player.options.mode="random";break;case"random":t.player.options.mode="order";break;default:t.player.options.mode="loop"}p.btns.mode.className="mode "+t.player.options.mode+" btn",v.set("_PlayerMode",t.player.options.mode)},volume(e){e.preventDefault();let a=e.currentTarget,r=!1,u=d=>{d.preventDefault(),t.player.volume(p.percent(d,a)),r=!0},s=d=>{d.preventDefault(),a.removeEventListener(m.nameMap.dragEnd,s),a.removeEventListener(m.nameMap.dragMove,u),r?(t.player.muted(),t.player.volume(p.percent(d,a))):l.muted?(t.player.muted(),t.player.volume(l.volume)):(t.player.muted("muted"),p.update(0))};a.addEventListener(m.nameMap.dragMove,u),a.addEventListener(m.nameMap.dragEnd,s)},backward(e){p.step="prev",t.player.mode()},forward(e){p.step="next",t.player.mode()}},update(e){p.btns.volume.className="volume "+(!l.muted&&e>0?"on":"off")+" btn",_(p.btns.volume.bar,Math.floor(e*100)+"%")},percent(e,a){let r=((e.clientX||e.changedTouches[0].clientX)-I(a))/P(a);return r=Math.max(r,0),Math.min(r,1)}},n={el:null,bar:null,create(){let e=i.current().el;e&&(n.el&&(n.el.parentNode.removeClass("current").removeEventListener(m.nameMap.dragStart,n.drag),n.el.remove()),n.el=h(e,"div",{className:"progress"}),n.el.setAttribute("data-dtime",m.secondToTime(0)),n.bar=h(n.el,"div",{className:"bar"}),e.addClass("current"),e.addEventListener(m.nameMap.dragStart,n.drag),i.scroll())},update(e){_(n.bar,Math.floor(e*100)+"%"),n.el.setAttribute("data-ptime",m.secondToTime(e*l.duration))},seeking(e){e?n.el.addClass("seeking"):n.el.removeClass("seeking")},percent(e,a){let r=((e.clientX||e.changedTouches[0].clientX)-I(a))/P(a);return r=Math.max(r,0),Math.min(r,1)},drag(e){e.preventDefault();let a=i.current().el,r=s=>{s.preventDefault();let d=n.percent(s,a);n.update(d),H.update(d*l.duration)},u=s=>{s.preventDefault(),a.removeEventListener(m.nameMap.dragEnd,u),a.removeEventListener(m.nameMap.dragMove,r);let d=n.percent(s,a);n.update(d),t.player.seek(d*l.duration),l.disableTimeupdate=!1,n.seeking(!1)};l.disableTimeupdate=!0,n.seeking(!0),a.addEventListener(m.nameMap.dragMove,r),a.addEventListener(m.nameMap.dragEnd,u)}},f={el:null,create(){let e=i.current();f.el.innerHTML='<div class="cover"><div class="disc"><img src="'+e.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+e.name+"</h4><span>"+e.artist+'</span><div class="lrc"></div></div>',f.el.child(".cover").addEventListener("click",t.player.options.events["play-pause"]),H.create(f.el.child(".lrc"))}},l,i={el:null,data:[],index:-1,errnum:0,add:(e,a)=>{a.forEach(r=>{r.group=e,r.name=r.name||r.title||"Meida name",r.artist=r.artist||r.author||"Anonymous",r.cover=r.cover||r.pic,r.type=r.type||"normal",i.data.push(r)})},clear(){i.data=[],i.el.innerHTML="",i.index!==-1&&(i.index=-1,t.player.fetch())},create(){let e=i.el;i.data.map((a,r)=>{if(a.el)return null;let u="list-"+t.player._id+"-"+a.group,s=L("#"+u);return s||(s=h(e,"div",{id:u,className:t.player.group?"tab":"",innerHTML:"<ol></ol>"}),t.player.group&&(s.setAttribute("data-title",t.player.options.rawList[a.group].title),s.setAttribute("data-id",t.player._id))),a.el=h(s.child("ol"),"li",{title:a.name+" - "+a.artist,innerHTML:'<span class="info"><span>'+a.name+"</span><span>"+a.artist+"</span></span>",onclick(d){let w=d.currentTarget;if(i.index===r&&n.el){l.paused?t.player.play():t.player.seek(l.duration*n.percent(d,w));return}t.player.switch(r),t.player.play()}}),a}),U()},current(){return this.data[this.index]},scroll(){let e=this.current(),a=this.el.child("li.active");a&&a.removeClass("active");let r=this.el.child(".tab.active");return r&&r.removeClass("active"),a=this.el.find(".nav li")[e.group],a&&a.addClass("active"),r=this.el.find(".tab")[e.group],r&&r.addClass("active"),E(e.el,e.el.offsetTop),this},title(){if(l.paused)return;let e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+k},error(){let e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},x={el:null,create(){this.el||(this.el=h(t,"div",{className:"player-info",innerHTML:(t.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),f.el=this.el.child(".preview"),i.el=this.el.child(".playlist"),p.el=this.el.child(".controller"))},hide(){let e=this.el;e.addClass("hide"),window.setTimeout(()=>{e.removeClass("show hide")},300)}},y={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(e){l.paused?t.player.play():t.player.pause()},music(e){x.el.hasClass("show")?x.hide():(x.el.addClass("show"),i.scroll().title())}}},m={random(e){return Math.floor(Math.random()*e)},parse(e){let a=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(r=>{let s=new RegExp(r[0]).exec(e);s!==null&&(a=[r[1],r[2],s[1]])}),a},fetch(e){let a=[];return new Promise((r,u)=>{e.forEach(s=>{let d=m.parse(s);if(d[0]){let w=JSON.stringify(d),M=v.get(w);M?(a.push(...JSON.parse(M)),r(a)):fetch(`${T.playerAPI}/meting/?server=`+d[0]+"&type="+d[1]+"&id="+d[2]+"&r="+Math.random()).then(g=>g.json()).then(g=>{v.set(w,JSON.stringify(g)),a.push(...g),r(a)}).catch(g=>{})}else a.push(s),r(a)})})},secondToTime(e){let a=d=>isNaN(d)?"00":d<10?"0"+d:""+d,r=Math.floor(e/3600),u=Math.floor((e-r*3600)/60),s=Math.floor(e-r*3600-u*60);return(r>0?[r,u,s]:[u,s]).map(a).join(":")},nameMap:{dragStart:D?"touchstart":"mousedown",dragMove:D?"touchmove":"mousemove",dragEnd:D?"touchend":"mouseup"}};l=null,t.player={_id:m.random(999999),group:!0,load(e){let a="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,i.clear(),this.fetch()):(a="none",this.pause());for(let r in c.el)$(c.el[r],a);return this},fetch(){return new Promise((e,a)=>{if(i.data.length>0)e(!0);else if(this.options.rawList){let r=[];this.options.rawList.forEach((u,s)=>{r.push(new Promise((d,w)=>{let M=s,g;u.list?(this.group=!0,g=u.list):(M=0,this.group=!1,g=[u]),m.fetch(g).then(C=>{i.add(M,C),d(0)})}))}),Promise.all(r).then(()=>{e(!0)})}}).then(e=>{e&&(i.create(),p.create(),this.mode())})},mode(){let e=i.data.length;if(!e||i.errnum===e)return;let a=p.step==="next"?1:-1,r=()=>{let s=i.index+a;(s>e||s<0)&&(s=p.step==="next"?0:e-1),i.index=s},u=()=>{let s=m.random(e);i.index!==s?i.index=s:r()};switch(this.options.mode){case"random":u();break;case"order":r();break;case"loop":p.step&&r(),i.index===-1&&u();break}this.init()},switch(e){typeof e=="number"&&e!==i.index&&i.current()&&!i.current().error&&(i.index=e,this.init())},init(){let e=i.current();if(!e||e.error){this.mode();return}let a=!1;l.paused||(a=!0,this.stop()),l.setAttribute("src",e.url),l.setAttribute("title",e.name+" - "+e.artist),this.volume(v.get("_PlayerVolume")||"0.7"),this.muted(v.get("_PlayerMuted")),n.create(),this.options.type==="audio"&&f.create(),a===!0&&this.play()},play(){if(S&&S.player.pause(),i.current().error){this.mode();return}l.play().then(()=>{i.scroll()}).catch(e=>{})},pause(){l.pause(),document.title=k},stop(){l.pause(),l.currentTime=0,document.title=k},seek(e){e=Math.max(e,0),e=Math.min(e,l.duration),l.currentTime=e,n.update(e/l.duration)},muted(e){e==="muted"?(l.muted=e,v.set("_PlayerMuted",e),p.update(0)):(v.del("_PlayerMuted"),l.muted=!1,p.update(l.volume))},volume(e){isNaN(e)||(p.update(e),v.set("_PlayerVolume",e),l.volume=e)},mini(){x.hide()}};let H={el:null,data:null,index:0,create(e){let a=i.index,r=i.current().lrc,u=s=>{if(a!==i.index)return;this.data=this.parse(s);let d="";this.data.forEach((w,M)=>{d+="<p"+(M===0?' class="current"':"")+">"+w[1]+"</p>"}),this.el=h(e,"div",{className:"inner",innerHTML:d},"replace"),this.index=0};r.startsWith("http")?this.fetch(r,u):u(r)},update(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(let a=0;a<this.data.length;a++)if(e>=this.data[a][0]&&(!this.data[a+1]||e<this.data[a+1][0])){this.index=a;let r=-(this.index-1);this.el.style.transform="translateY("+r+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[a].addClass("current")}}},parse(e){if(e){e=e.replace(/([^\]^\n])\[/g,(s,d)=>d+`
[`);let a=e.split(`
`),r=[],u=a.length;for(let s=0;s<u;s++){let d=a[s].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),w=a[s].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(d){let M=d.length;for(let g=0;g<M;g++){let C=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(d[g]),X=C[1]*60,R=parseInt(C[2]),Y=C[4]?parseInt(C[4])/((C[4]+"").length===2?100:1e3):0,V=X+R+Y;r.push([V,w])}}}return r=r.filter(s=>s[1]),r.sort((s,d)=>s[0]-d[0]),r}else return[]},fetch(e,a){fetch(e).then(r=>r.text()).then(r=>{a(r)}).catch(r=>{})}},W={onerror(){i.error(),t.player.mode()},ondurationchange(){l.duration!==1&&n.el.setAttribute("data-dtime",m.secondToTime(l.duration))},onloadedmetadata(){t.player.seek(0),n.el.setAttribute("data-dtime",m.secondToTime(l.duration))},onplay(){t.parentNode.addClass("playing"),B(this.getAttribute("title")),S=t},onpause(){t.parentNode.removeClass("playing"),S=null},ontimeupdate(){this.disableTimeupdate||(n.update(this.currentTime/this.duration),H.update(this.currentTime))},onended(e){t.player.mode(),t.player.play()}};return(e=>{t.player.created||(t.player.options=Object.assign(y,e),t.player.options.mode=v.get("_PlayerMode")||t.player.options.mode,c.create(),l=h(t,t.player.options.type,W),x.create(),t.parentNode.addClass(t.player.options.type),t.player.created=!0)})(o),t};b();function Le(){let t=!0;window.addEventListener("DOMContentLoaded",function(){t=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){t&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running(rocket & minify)","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var G=(t,o,c)=>{if(c)o();else{let p=document.createElement("script");p.onload=function(n,f){(f||!p.readyState)&&(console.log("abort!"),p.onload=null,p=void 0,!f&&o&&setTimeout(o,0))},p.src=t,document.head.appendChild(p)}},Te=t=>{let{text:o,parentNode:c,id:p,className:n,type:f,src:l,dataset:i}=t,x=o||t.textContent||t.innerHTML||"";c.removeChild(t);let y=document.createElement("script");p&&(y.id=p),n&&(y.className=n),f&&(y.type=f),l&&(y.src=l,y.async=!1),i.pjax!==void 0&&(y.dataset.pjax=""),x!==""&&y.appendChild(document.createTextNode(x)),c.appendChild(y)};b();var J=(t,o)=>{let c=T[t][o];return c.includes("http")?c:c.includes("gh")||c.includes("combine")?`https://cdn.jsdelivr.net/${c}`:c.includes("npm")?`https://cdn.jsdelivr.net/${c}`:`/${c}`},He=(t,o,c)=>{LOCAL[t]&&G(J("js",t),o||function(){window[t]=!0},c||window[t])},_e=(t,o)=>{window["css"+t]||LOCAL[t]&&(h(document.head,"link",{rel:"stylesheet",href:J("css",t)}),window["css"+t]=!0)};export{v as a,B as b,se as c,ne as d,ie as e,U as f,we as g,Le as h,Te as i,He as j,_e as k};
/*! For license information please see chunk-2N4DYD35.js.LEGAL.txt */
