(function(){"use strict";var t={270:function(t,n,e){var o=e(8735),r={setup(t){const n={},e={},r=[{type:"upload",field:"pic",title:"轮播图",value:["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg","http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"],props:{type:"select",uploadType:"image",action:"/upload.php",name:"pic",multiple:!0,accept:"image/*",limit:2,onSuccess:function(t,n){n.url=t.data.filePath}}}],u={onSubmit:t=>{alert(JSON.stringify(t))},resetBtn:!0};return(t,i)=>{const a=(0,o.up)("form-create");return(0,o.wg)(),(0,o.j4)(a,{modelValue:e,"onUpdate:modelValue":i[0]||(i[0]=t=>e=t),api:n,"onUpdate:api":i[1]||(i[1]=t=>n=t),rule:r,option:u})}}};const u=r;var i=u,a=e(8806),c=(e(4415),e(9131)),l=e(812);(0,o.ri)(i).use(a.Z,{locale:l.Z}).use(c.Z).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return t[o].call(u.exports,u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,u){if(!o){var i=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],u=t[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){t.splice(f--,1);var l=r();void 0!==l&&(n=l)}}return n}u=u||0;for(var f=t.length;f>0&&t[f-1][2]>u;f--)t[f]=t[f-1];t[f]=[o,r,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.j=650}(),function(){var t={650:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,u,i=o[0],a=o[1],c=o[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var f=c(e)}for(n&&n(o);l<i.length;l++)u=i[l],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(f)},o=self["webpackChunktpl_mpa_vuecli5_vue3"]=self["webpackChunktpl_mpa_vuecli5_vue3"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(270)}));o=e.O(o)})();
//# sourceMappingURL=upload.4f0335c0.js.map