(()=>{var e={602:(e,t,n)=>{e.exports=n.p+"images/foodmenu.0d38dc666beeb8f0d071b2f97d0da473.jpg"}},t={};function n(d){var o=t[d];if(void 0!==o)return o.exports;var c=t[d]={exports:{}};return e[d](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var d=t.getElementsByTagName("script");d.length&&(e=d[d.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";const e=()=>{let e=document.querySelector("#content");for(;e.children.length>1;)e.children[1].remove();let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div");t.classList.add("homeimg"),d.classList.add("homeintro"),n.classList.add("hometext"),c.id="openModal",c.textContent="OPEN MODAL",d.textContent="Discover This Iconic Fort On The Banks Of The River Shannon",o.textContent="Step back in time to explore this unique Fortification, visit our free exhibition, soak up the panoramic views that Shannonbridge Fort has to offer and take time to enjoy our Café & Gift Shop",n.appendChild(d),n.appendChild(o),t.appendChild(n),t.appendChild(c);let i=document.createElement("div");i.id="videoModal";let a=document.createElement("div");a.id="modalContent";let r=document.createElement("iframe");r.setAttribute("src","https://www.youtube.com/embed/4Z55di2gEXM"),r.id="iframe",console.log(r.innerHTML),a.appendChild(r),i.appendChild(a),e.appendChild(t),e.appendChild(i)};var t=n(602),d=n.n(t);(()=>{const e=document.querySelector("#content");let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div");t.classList.add("nav"),d.classList.add("tabs"),n.textContent="ShannonBridge Fort",o.id="home",c.id="menu",i.id="contact",o.textContent="Home",c.textContent="Menu",i.textContent="Contact",d.appendChild(o),d.appendChild(c),d.appendChild(i),t.appendChild(n),t.appendChild(d),e.appendChild(t)})(),e();let o=document.querySelector("#home"),c=document.querySelector("#menu"),i=document.querySelector("#contact"),a=document.querySelector("#openModal");document.addEventListener("DOMContentLoaded",(function(){o=document.querySelector("#home"),c=document.querySelector("#menu"),i=document.querySelector("#contact"),a=document.querySelector("#openModal")})),document.addEventListener("DOMContentLoaded",(function(){o.addEventListener("click",(function(){e()}))})),document.addEventListener("DOMContentLoaded",(function(){c.addEventListener("click",(function(){(()=>{let e=document.querySelector("#content");for(;e.children.length>1;)e.children[1].remove();let t=document.createElement("div");t.classList.add("menubody");let n=document.createElement("div"),o=document.createElement("img");o.src=d(),n.classList.add("menu"),o.classList.add("foodmenu"),n.appendChild(o),t.appendChild(n),e.appendChild(t)})()}))})),document.addEventListener("DOMContentLoaded",(function(){i.addEventListener("click",(function(){(()=>{let e=document.querySelector("#content");for(;e.children.length>1;)e.children[1].remove();let t=document.createElement("div"),n=document.createElement("div");t.classList.add("contactimg"),n.classList.add("contactdiv");let d=document.createElement("form"),o=document.createElement("h2"),c=document.createElement("input"),i=document.createElement("input"),a=document.createElement("textarea"),r=document.createElement("button");o.textContent="Contact Us",c.placeholder="Name",c.classList.add("input"),i.placeholder="Email",i.classList.add("input"),a.placeholder="Message",a.classList.add("text"),r.textContent="Send",r.classList.add("submit"),n.appendChild(d),n.appendChild(o),n.appendChild(c),n.appendChild(i),n.appendChild(a),n.appendChild(r),t.appendChild(n),e.appendChild(t)})()}))})),document.addEventListener("DOMContentLoaded",(function(){a.addEventListener("click",(function(){document.querySelector("#videoModal").style.display="block"}))})),window.onclick=function(e){const t=document.querySelector("#modalContent"),n=document.querySelector("#videoModal");e.target==t&&(n.style.display="none")}})()})();