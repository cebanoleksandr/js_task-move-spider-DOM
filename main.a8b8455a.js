parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".wall"),t=document.querySelector(".spider"),l=document.querySelector("body");document.addEventListener("click",function(c){if(c.target.closest(".wall")){var i=getComputedStyle(e),d=getComputedStyle(t),o=getComputedStyle(l),s=+d.width.slice(0,-2)/2,r=+d.height.slice(0,-2)/2,u=+o.width.slice(0,-2)/2,n=+o.height.slice(0,-2)/2,h=+i.width.slice(0,-2)/2,y=+i.height.slice(0,-2)/2,g=n-y,m=u-h,p=c.clientX-r-m,a=c.clientY-s-g;p<0&&(p+=s),a<0&&(a+=r),p>2*h-2*s&&(p-=s),a>2*y-2*r&&(a-=r),t.style.top=a+"px",t.style.left=p+"px"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a8b8455a.js.map