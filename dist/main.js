(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"html {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  --lightGrey: rgb(244, 244, 244);\r\n  --white: rgb(255, 255, 255);\r\n  --darkGrey: rgb(36, 36, 36);\r\n  --black: rgb(19, 19, 19);\r\n  --ligthGray: rgb(147, 141, 141);\r\n  --crame: rgb(240, 240, 238);\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: x-large;\r\n  font-family: 'Inter', sans-serif;\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\ntextarea,\r\noptgroup,\r\noption {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-style: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/* rest of your styles; like: */\r\nbody {\r\n  font-size: 0.875em;\r\n}\r\n\r\n.list-title {\r\n  color: var(--black);\r\n  font-size: large;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nul li del {\r\n  text-decoration: none;\r\n}\r\n\r\n.do-list {\r\n  display: flex;\r\n  background-color: var(--crame);\r\n  width: 100%;\r\n  height: 100vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n  outline: none;\r\n}\r\n\r\n.list-input {\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  width: 80vw;\r\n  margin: 5%;\r\n  flex-direction: column;\r\n  background-color: white;\r\n  box-shadow: 5px 5px 5px 5px rgb(124, 124, 124);\r\n}\r\n\r\n.form-container > * {\r\n  margin: 0;\r\n}\r\n\r\ninput[type='checkbox']:checked ~ del {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  width: 99%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 1%;\r\n}\r\n\r\n.task-text {\r\n  width: 100%;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.check-box {\r\n  margin-right: 1%;\r\n  padding-top: 1%;\r\n}\r\n\r\n.complete-btn {\r\n  border: none;\r\n  height: 8vh;\r\n  background-color: rgb(224, 220, 212);\r\n  color: #888;\r\n  margin: 0;\r\n}\r\n\r\n.list-line {\r\n  border: 0;\r\n  width: 100%;\r\n  background-color: gray;\r\n  height: 1px;\r\n  margin-left: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.icon-container {\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 98%;\r\n}\r\n\r\n.edit-icon {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.edit-mode {\r\n  background-color: rgb(255, 255, 211);\r\n  color: black;\r\n}\r\n\r\n.edit-icon::after {\r\n  content: '\\2807';\r\n  font-size: 23px;\r\n}\r\n\r\n.add-btn,\r\n.complete-btn,\r\n.trash-btn,\r\n.refresh {\r\n  cursor: pointer;\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(569),c=t.n(a),s=t(565),l=t.n(s),d=t(216),u=t.n(d),p=t(589),f=t.n(p),h=t(426),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),r()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=()=>JSON.parse(localStorage.getItem("tasks"))||[],v=n=>{localStorage.setItem("tasks",JSON.stringify(n))},b=document.querySelector(".list-container");b.addEventListener("click",(()=>{e.target.closest(".trash-btn")&&console.log("click")}));const y=n=>{b.innerHTML="",n.length>0&&n.forEach((r=>{const{description:e,index:t}=r;b.innerHTML+=`\n    <li class="task-container">\n    <div class="task">\n    <div class="task-text">\n    <input type="checkbox" id="${t}" class="check-box" name="task"/><del class="input-text" contenteditable="false">${e}</del>\n    </div>\n    <div class="edit-icon "></div>\n    <i class="trash trash-btn fa fa-trash" aria-hidden="true"></i>\n    </div>\n    <hr class="list-line" />\n    </li>\n    `;const o=document.querySelectorAll(".task-container"),i=document.querySelectorAll(".input-text"),a=document.querySelectorAll(".edit-icon");let c=document.querySelectorAll(".trash-btn");const s=document.querySelectorAll("input[type=checkbox]");a.forEach(((r,e)=>{r.addEventListener("click",(()=>{r.classList.add("hide"),o[e].classList.add("edit-mode"),c[e].classList.remove("trash"),i[e].contentEditable="true",i[e].setAttribute("contenteditable","true"),v(n)}))})),i.forEach(((r,e)=>{r.addEventListener("input",(()=>{n[e].description=r.textContent,v(n)}),!1)})),s.forEach(((r,e)=>{!0===n[e].completed&&(r.checked=!0,i[e].previousElementSibling.disabled=!0),r.addEventListener("change",(()=>{n[e].completed=!0,i[e].disabled=!0,i[e].previousElementSibling.disabled=!0,v(n)}))})),c.forEach(((n,r)=>{n.addEventListener("click",(()=>{})),c=document.querySelectorAll(".trash-btn")}))}))},x=document.querySelector(".refresh"),k=document.querySelector(".add-btn"),S=document.querySelector(".list-input");k.addEventListener("click",(()=>{var n,r;S.value&&(v((n=S.value,r?r.push({description:n,completed:!1,index:r.length+1}):r=[{description:n,completed:!1,index:1}],r)),S.value="",y(g()))})),x.addEventListener("click",(()=>{v([]),y(g())})),window.addEventListener("load",(()=>{localStorage.getItem("tasks")&&y(g())})),document.querySelector(".complete-btn").addEventListener("click",(()=>{let n=JSON.parse(localStorage.getItem("tasks"))||[];n&&(n=n.filter((n=>!n.completed))),n.forEach(((n,r)=>{n.index=r+1})),localStorage.setItem("tasks",JSON.stringify(n)),y()})),document.addEventListener("DOMContentLoaded",y)})()})();