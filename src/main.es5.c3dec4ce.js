!function(t){function e(e){for(var o,n,i=e[0],s=e[1],a=0,c=[];a<i.length;a++)n=i[a],r[n]&&c.push(r[n][0]),r[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(l&&l(e);c.length;)c.shift()()}var o={},r={7:0};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(t){return n.p+""+({0:"vendors~list.es5~new.es5",3:"404.es5",5:"list.es5",9:"new.es5",11:"router.es5",13:"vendors~list.es5",15:"vendors~new.es5",17:"vendors~router.es5"}[t]||t)+"."+{0:"e59e3bea",3:"87713f9b",5:"8e87f5a1",9:"188813ef",11:"3aafe7d2",13:"b031273b",15:"10d43255",17:"fd1f72b6"}[t]+".js"}(t);var l=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(c);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}r[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:a})},12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},n.m=t,n.c=o,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=s;n(n.s=122)}([,function(t,e,o){"use strict";o.d(e,"a",function(){return r});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},,function(t,e,o){"use strict";o.d(e,"d",function(){return r}),o.d(e,"g",function(){return n}),o.d(e,"b",function(){return i}),o.d(e,"c",function(){return s}),o.d(e,"i",function(){return a}),o.d(e,"e",function(){return l}),o.d(e,"f",function(){return c}),o.d(e,"a",function(){return u}),o.d(e,"h",function(){return h});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t){return t.indexOf(".")>=0}function n(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function i(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,o){return e+o.slice(t.length)}function l(t,e){return t===e||i(t,e)||s(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let o=0;o<t.length;o++){let r=t[o].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function u(t,e,o){let r=t,n=d(e);for(let t=0;t<n.length;t++){if(!r)return;r=r[n[t]]}return o&&(o.path=n.join(".")),r}function h(t,e,o){let r=t,n=d(e),i=n[n.length-1];if(n.length>1){for(let t=0;t<n.length-1;t++){if(!(r=r[n[t]]))return}r[i]=o}else r[e]=o;return n.join(".")}},,function(t,e,o){"use strict";o.d(e,"a",function(){return i});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(t){this.value=t.toString()}toString(){return this.value}}function n(t){if(t instanceof r)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const i=function(t,...e){const o=document.createElement("template");return o.innerHTML=e.reduce((e,o,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof r)return n(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(o)+t[i+1],t[0]),o}},,function(t,e,o){"use strict";o.d(e,"j",function(){return n}),o.d(e,"e",function(){return i}),o.d(e,"f",function(){return s}),o.d(e,"d",function(){return a}),o.d(e,"g",function(){return l}),o.d(e,"h",function(){return c}),o.d(e,"a",function(){return d}),o.d(e,"c",function(){return u}),o.d(e,"i",function(){return h}),o.d(e,"b",function(){return p});o(9);var r=o(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let i=Object(r.a)(document.baseURI||window.location.href);let s=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let a=!1;const l=function(t){a=t};let c=!1;let d=!1;let u=!1;let h=!1;let p=!0},,function(t,e,o){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},,function(t,e,o){"use strict";o.d(e,"d",function(){return l}),o.d(e,"a",function(){return c}),o.d(e,"b",function(){return d}),o.d(e,"c",function(){return u});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0,n=0,i=[],s=0,a=document.createTextNode("");new window.MutationObserver(function(){const t=i.length;for(let e=0;e<t;e++){let t=i[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),n+=t}).observe(a,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},d={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},u={run:t=>(a.textContent=s++,i.push(t),r++),cancel(t){const e=t-n;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},,function(t,e,o){"use strict";o.d(e,"a",function(){return i});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=0;function n(){}n.prototype.__mixinApplications,n.prototype.__mixinSet;const i=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let o=r++;return function(r){let n=r.__mixinSet;if(n&&n[o])return r;let i=e,s=i.get(r);s||(s=t(r),i.set(r,s));let a=Object.create(s.__mixinSet||n||null);return a[o]=!0,s.__mixinSet=a,s}}},,function(t,e,o){"use strict";o.d(e,"d",function(){return r}),o.d(e,"a",function(){return i}),o.d(e,"b",function(){return a}),o.d(e,"c",function(){return l});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=!(window.ShadyDOM&&window.ShadyDOM.inUse);let n,i;function s(t){n=(!t||!t.shimcssproperties)&&(r||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?n=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=n},,function(t,e,o){"use strict";o.d(e,"a",function(){return n});var r=o(54);o(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=Object(r.a)(HTMLElement)},,function(t,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return i}),o.d(e,"c",function(){return s});o(9),o(13),o(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,n.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),n.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,o){return t instanceof r?t._cancelAsync():t=new r,t.setConfig(e,o),t}}let n=new Set;const i=function(t){n.add(t)},s=function(){const t=Boolean(n.size);return n.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},,function(t,e,o){"use strict";o.d(e,"c",function(){return a}),o.d(e,"b",function(){return l}),o.d(e,"a",function(){return c});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,n,i=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===r){r=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",r="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),r)try{return new URL(t,e).href}catch(e){return t}return n||((n=document.implementation.createHTMLDocument("temp")).base=n.createElement("base"),n.head.appendChild(n.base),n.anchor=n.createElement("a"),n.body.appendChild(n.anchor)),n.base.href=e,n.anchor.href=t,n.anchor.href||t}function l(t,e){return t.replace(i,function(t,o,r,n){return o+"'"+a(r.replace(/["']/g,""),e)+"'"+n})}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},,function(t,e,o){"use strict";o.d(e,"b",function(){return n});o(9);var r=o(19);o.d(e,"a",function(){return r.b});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(r.c)()}while(t||e)}},,function(t,e,o){"use strict";o.d(e,"c",function(){return r}),o.d(e,"b",function(){return n}),o.d(e,"a",function(){return i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,n=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},,function(t,e,o){"use strict";o.d(e,"a",function(){return i});var r=o(31),n=o(94);const i=t=>(class extends(Object(n.a)(t)){static finalize(){super.finalize();const t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,o=Object.getPrototypeOf(this.prototype)._template;o&&!e&&Array.from(o.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=r.a.prototype.modules;let o=!1;const n=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{const o=0===t.indexOf("vaadin-"),r=0===e.indexOf("vaadin-"),n=["lumo-","material-"],i=n.filter(e=>0===t.indexOf(e)).length>0,s=n.filter(t=>0===e.indexOf(t)).length>0;return o!==r?o?-1:1:i!==s?i?-1:1:0}).forEach(r=>{if(r!==n){const n=e[r].getAttribute("theme-for");n&&n.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(o=!0,this._includeStyle(r,t))})}}),!o&&e[n]&&this._includeStyle(n,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const o=document.createElement("style");o.setAttribute("include",t),e.content.appendChild(o)}}})},function(t,e,o){"use strict";var r=o(11),n=o(19),i=o(23);const s=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,a=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function l(t,e){if("function"!=typeof t)return;const o=s.exec(t.toString());if(o)try{t=new Function(o[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const c=function(t,e){if(window.Vaadin.developmentMode)return l(t,e)};function d(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(a?!function(){if(a){const t=Object.keys(a).map(t=>a[t]).filter(t=>t.productionMode);if(t.length>0)return!0}return!1}():!l(function(){return!0}))}catch(t){return!1}}());const u=function(){return c(d)};let h;o.d(e,"a",function(){return p}),window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){u&&u()};const p=t=>(class extends t{static _finalizeClass(){super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(h=n.a.debounce(h,r.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(i.a)(h)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}})},,,function(t,e,o){"use strict";o.d(e,"a",function(){return c});o(9);var r=o(21),n=o(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i={},s={};function a(t,e){i[t]=s[t.toLowerCase()]=e}function l(t){return i[t]||s[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let o=l(t);return o&&e?o.querySelector(e):o}return null}attributeChangedCallback(t,e,o,r){e!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(r.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(r.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(n.h&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=i,customElements.define("dom-module",c)},,function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return s});var r=o(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e,o,r,n){let i;n&&(i="object"==typeof o&&null!==o)&&(r=t.__dataTemp[e]);let s=r!==o&&(r==r||o==o);return i&&s&&(t.__dataTemp[e]=o),s}const i=Object(r.a)(t=>{return class extends t{_shouldPropertyChange(t,e,o){return n(this,t,e,o,!0)}}}),s=Object(r.a)(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,o){return n(this,t,e,o,this.mutableData)}}});i._mutablePropertyChange=n},,function(t,e,o){"use strict";o.d(e,"c",function(){return n}),o.d(e,"b",function(){return i}),o.d(e,"a",function(){return s});var r=o(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e){for(let o in e)null===o?t.style.removeProperty(o):t.style.setProperty(o,e[o])}function i(t,e){const o=window.getComputedStyle(t).getPropertyValue(e);return o?o.trim():""}function s(t){const e=r.b.test(t)||r.c.test(t);return r.b.lastIndex=0,r.c.lastIndex=0,e}},,function(t,e,o){"use strict";var r=o(90),n=o(35),i=o(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=new r.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,o){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,o){},styleSubtree(t,e){s.processStyles(),Object(n.c)(t,e)},styleElement(t){s.processStyles()},styleDocument(t){s.processStyles(),Object(n.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(n.b)(t,e),flushCustomStyles(){},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b}),window.ShadyCSS.CustomStyleInterface=s;var a=o(69);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l="include",c=window.ShadyCSS.CustomStyleInterface;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,c.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(l);return e&&(t.removeAttribute(l),t.textContent=Object(a.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}})},,,function(t,e,o){"use strict";o.d(e,"a",function(){return i});o(9);var r=o(13),n=o(44);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Object(r.a)(t=>{return class extends t{_addEventListenerToNode(t,e,o){Object(n.a)(t,e,o)||super._addEventListenerToNode(t,e,o)}_removeEventListenerFromNode(t,e,o){Object(n.b)(t,e,o)||super._removeEventListenerFromNode(t,e,o)}}})},function(t,e,o){"use strict";o.d(e,"b",function(){return v}),o.d(e,"a",function(){return g});o(9);var r=o(57),n=o(33),i=o(7),s=o(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(r.a)(l),d=Object(n.a)(c);const u=Object(r.a)(class{});class h extends u{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let o=this.__templatizeOptions;(t&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,o){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,o(t)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,o)}}_showHideChildren(t){let e=this.children;for(let o=0;o<e.length;o++){let r=e[o];if(Boolean(t)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)t?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(t)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(s.a)(Object(s.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const t=r.__polymerReplaced__;t&&Object(s.a)(Object(s.a)(t).parentNode).replaceChild(r,t)}else r.style&&(t?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=t,r._showHideChildren&&r._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,o){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=o:super._setUnmanagedPropertyToNode(t,e,o)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}h.prototype.__dataHost,h.prototype.__templatizeOptions,h.prototype._methodHost,h.prototype.__templatizeOwner,h.prototype.__hostProps;const p=Object(n.a)(h);function m(t){let e=t.__dataHost;return e&&e._methodHost||e}function f(t,e,o){let r=o.mutableData?p:h;v.mixin&&(r=v.mixin(r));let n=class extends r{};return n.prototype.__templatizeOptions=o,n.prototype._bindTemplate(t),function(t,e,o,r){let n=o.hostProps||{};for(let e in r.instanceProps){delete n[e];let o=r.notifyInstanceProp;o&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:y(e,o)})}if(r.forwardHostProp&&e.__dataHost)for(let e in n)o.hasHostProps||(o.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,o){t.__dataHost._setPendingPropertyOrPath("_host_"+e,o[e],!0,!0)}})}(n,t,e,o),n}function _(t,e,o){let r=o.forwardHostProp;if(r&&e.hasHostProps){let n=e.templatizeTemplateClass;if(!n){let t=o.mutableData?d:c;n=e.templatizeTemplateClass=class extends t{};let i=e.hostProps;for(let t in i)n.prototype._addPropertyEffect("_host_"+t,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:b(t,r)}),n.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){a=t,Object.setPrototypeOf(t,e.prototype),new e,a=null}(t,n),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function b(t,e){return function(t,o,r){e.call(t.__templatizeOwner,o.substring("_host_".length),r[o])}}function y(t,e){return function(t,o,r){e.call(t.__templatizeOwner,t,o,r[o])}}function v(t,e,o){if(i.h&&!m(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(o=o||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:h)._parseTemplate(t),n=r.templatizeInstanceClass;n||(n=f(t,r,o),r.templatizeInstanceClass=n),_(t,r,o);let s=class extends n{};return s.prototype._methodHost=m(t),s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=r.hostProps,s=s}function g(t,e){let o;for(;e;)if(o=e.__templatizeInstance){if(o.__dataHost==t)return o;e=o.__dataHost}else e=Object(s.a)(e).parentNode;return null}},,,function(t,e,o){"use strict";o.d(e,"a",function(){return L}),o.d(e,"b",function(){return M}),o.d(e,"d",function(){return F}),o.d(e,"c",function(){return q});o(9);var r=o(11),n=o(19),i=o(7),s=o(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGestures",c="__polymerGesturesHandled",d="__polymerGesturesTouchAction",u=25,h=5,p=2500,m=["mousedown","mousemove","mouseup","click"],f=[0,1,4,2],_=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function b(t){return m.indexOf(t)>-1}let y=!1;function v(t){if(!b(t)&&"touchend"!==t)return a&&y&&i.d?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){y=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let g=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const w=[],C={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},O={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function x(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let o=t.getRootNode();if(t.id){let r=o.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<r.length;t++)e.push(r[t])}}return e}let A=function(t){let e=t.sourceCapabilities;var o;if((!e||e.firesTouchEvents)&&(t[c]={skip:!0},"click"===t.type)){let e=!1,r=z(t);for(let t=0;t<r.length;t++){if(r[t].nodeType===Node.ELEMENT_NODE)if("label"===r[t].localName)w.push(r[t]);else if(o=r[t],C[o.localName]){let o=x(r[t]);for(let t=0;t<o.length;t++)e=e||w.indexOf(o[t])>-1}if(r[t]===E.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function S(t){let e=g?["click"]:m;for(let o,r=0;r<e.length;r++)o=e[r],t?(w.length=0,document.addEventListener(o,A,!0)):document.removeEventListener(o,A,!0)}function P(t){let e=t.type;if(!b(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!_&&(e=f[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let E={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function k(t,e,o){t.movefn=e,t.upfn=o,document.addEventListener("mousemove",e),document.addEventListener("mouseup",o)}function T(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}i.b&&document.addEventListener("touchend",function(t){if(!i.b)return;E.mouse.mouseIgnoreJob||S(!0),E.mouse.target=z(t)[0],E.mouse.mouseIgnoreJob=n.a.debounce(E.mouse.mouseIgnoreJob,r.d.after(p),function(){S(),E.mouse.target=null,E.mouse.mouseIgnoreJob=null})},!!y&&{passive:!0});const z=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],N={},j=[];function I(t){const e=z(t);return e.length>0?e[0]:t.target}function R(t){let e,o=t.type,r=t.currentTarget[l];if(!r)return;let n=r[o];if(n){if(!t[c]&&(t[c]={},"touch"===o.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===o&&1===t.touches.length&&(E.touch.id=e.identifier),E.touch.id!==e.identifier)return;a||"touchstart"!==o&&"touchmove"!==o||function(t){let e=t.changedTouches[0],o=t.type;if("touchstart"===o)E.touch.x=e.clientX,E.touch.y=e.clientY,E.touch.scrollDecided=!1;else if("touchmove"===o){if(E.touch.scrollDecided)return;E.touch.scrollDecided=!0;let o=function(t){let e="auto",o=z(t);for(let t,r=0;r<o.length;r++)if((t=o[r])[d]){e=t[d];break}return e}(t),r=!1,n=Math.abs(E.touch.x-e.clientX),i=Math.abs(E.touch.y-e.clientY);t.cancelable&&("none"===o?r=!0:"pan-x"===o?r=i>n:"pan-y"===o&&(r=n>i)),r?t.preventDefault():H("track")}}(t)}if(!(e=t[c]).skip){for(let o,r=0;r<j.length;r++)n[(o=j[r]).name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let r,i=0;i<j.length;i++)n[(r=j[i]).name]&&!e[r.name]&&(e[r.name]=!0,r[o](t))}}}function L(t,e,o){return!!N[e]&&(function(t,e,o){let r=N[e],n=r.deps,i=r.name,s=t[l];s||(t[l]=s={});for(let e,o,r=0;r<n.length;r++)e=n[r],g&&b(e)&&"click"!==e||((o=s[e])||(s[e]=o={_count:0}),0===o._count&&t.addEventListener(e,R,v(e)),o[i]=(o[i]||0)+1,o._count=(o._count||0)+1);t.addEventListener(e,o),r.touchAction&&F(t,r.touchAction)}(t,e,o),!0)}function M(t,e,o){return!!N[e]&&(function(t,e,o){let r=N[e],n=r.deps,i=r.name,s=t[l];if(s)for(let e,o,r=0;r<n.length;r++)e=n[r],(o=s[e])&&o[i]&&(o[i]=(o[i]||1)-1,o._count=(o._count||1)-1,0===o._count&&t.removeEventListener(e,R,v(e)));t.removeEventListener(e,o)}(t,e,o),!0)}function D(t){j.push(t);for(let e=0;e<t.emits.length;e++)N[t.emits[e]]=t}function F(t,e){a&&t instanceof HTMLElement&&r.c.run(()=>{t.style.touchAction=e}),t[d]=e}function B(t,e,o){let r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=o,Object(s.a)(t).dispatchEvent(r),r.defaultPrevented){let t=o.preventer||o.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function H(t){let e=function(t){for(let e,o=0;o<j.length;o++){e=j[o];for(let o,r=0;r<e.emits.length;r++)if((o=e.emits[r])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function q(){E.mouse.mouseIgnoreJob&&E.mouse.mouseIgnoreJob.flush()}function Y(t,e,o,r){e&&B(e,t,{x:o.clientX,y:o.clientY,sourceEvent:o,preventer:r,prevent:function(t){return H(t)}})}function V(t,e,o){if(t.prevent)return!1;if(t.started)return!0;let r=Math.abs(t.x-e),n=Math.abs(t.y-o);return r>=h||n>=h}function U(t,e,o){if(!e)return;let r,n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],s=i.x-t.x,a=i.y-t.y,l=0;n&&(r=i.x-n.x,l=i.y-n.y),B(e,"track",{state:t.state,x:o.clientX,y:o.clientY,dx:s,dy:a,ddx:r,ddy:l,sourceEvent:o,hover:function(){return function(t,e){let o=document.elementFromPoint(t,e),r=o;for(;r&&r.shadowRoot&&!window.ShadyDOM&&r!==(r=r.shadowRoot.elementFromPoint(t,e));)r&&(o=r);return o}(o.clientX,o.clientY)}})}function J(t,e,o){let r=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),i=I(o||e);!i||O[i.localName]&&i.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=u&&n<=u||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=I(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let o=e.getBoundingClientRect(),r=t.pageX,n=t.pageY;return!(r>=o.left&&r<=o.right&&n>=o.top&&n<=o.bottom)}return!1}(e))&&(t.prevent||B(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:o}))}D({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){T(this.info)},mousedown:function(t){if(!P(t))return;let e=I(t),o=this;k(this.info,function(t){P(t)||(Y("up",e,t),T(o.info))},function(t){P(t)&&Y("up",e,t),T(o.info)}),Y("down",e,t)},touchstart:function(t){Y("down",I(t),t.changedTouches[0],t)},touchend:function(t){Y("up",I(t),t.changedTouches[0],t)}}),D({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,T(this.info)},mousedown:function(t){if(!P(t))return;let e=I(t),o=this,r=function(t){let r=t.clientX,n=t.clientY;V(o.info,r,n)&&(o.info.state=o.info.started?"mouseup"===t.type?"end":"track":"start","start"===o.info.state&&H("tap"),o.info.addMove({x:r,y:n}),P(t)||(o.info.state="end",T(o.info)),e&&U(o.info,e,t),o.info.started=!0)};k(this.info,r,function(t){o.info.started&&r(t),T(o.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=I(t),o=t.changedTouches[0],r=o.clientX,n=o.clientY;V(this.info,r,n)&&("start"===this.info.state&&H("tap"),this.info.addMove({x:r,y:n}),U(this.info,e,o),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=I(t),o=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:o.clientX,y:o.clientY}),U(this.info,e,o))}}),D({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){P(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){P(t)&&J(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){J(this.info,t.changedTouches[0],t)}})},function(t,e,o){"use strict";o.d(e,"c",function(){return l}),o.d(e,"a",function(){return p});o(9);var r=o(1),n=(o(7),o(51)),i=o(23);o.d(e,"b",function(){return i.b});o(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s=Element.prototype,a=s.matches||s.matchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector,l=function(t,e){return a.call(t,e)};class c{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new n.a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(r.a)(this.node).contains(t))return!0;let e=t,o=t.ownerDocument;for(;e&&e!==o&&e!==this.node;)e=Object(r.a)(e).parentNode||Object(r.a)(e).host;return e===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(r.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(r.a)(e).assignedSlot;return t}importNode(t,e){let o=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(o).importNode(t,e)}getEffectiveChildNodes(){return n.a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),o=[];for(let r,n=0,i=e.length;n<i&&(r=e[n]);n++)r.nodeType===Node.ELEMENT_NODE&&l(r,t)&&o.push(r);return o}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function d(t,e){for(let o=0;o<e.length;o++){let r=e[o];Object.defineProperty(t,r,{get:function(){return this.node[r]},configurable:!0})}}class u{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}c.prototype.cloneNode,c.prototype.appendChild,c.prototype.insertBefore,c.prototype.removeChild,c.prototype.replaceChild,c.prototype.setAttribute,c.prototype.removeAttribute,c.prototype.querySelector,c.prototype.querySelectorAll,c.prototype.parentNode,c.prototype.firstChild,c.prototype.lastChild,c.prototype.nextSibling,c.prototype.previousSibling,c.prototype.firstElementChild,c.prototype.lastElementChild,c.prototype.nextElementSibling,c.prototype.previousElementSibling,c.prototype.childNodes,c.prototype.children,c.prototype.classList,c.prototype.textContent,c.prototype.innerHTML;let h=c;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(c.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=c.prototype[e])}),d(t.prototype,["classList"]),h=t,Object.defineProperties(u.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&p(t).getOwnerRoot(),o=this.path;for(let t=0;t<o.length;t++){const r=o[t];if(p(r).getOwnerRoot()===e)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let o=0;o<e.length;o++){let r=e[o];t[r]=function(){return this.node[r].apply(this.node,arguments)}}}(c.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),d(c.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let o=0;o<e.length;o++){let r=e[o];Object.defineProperty(t,r,{get:function(){return this.node[r]},set:function(t){this.node[r]=t},configurable:!0})}}(c.prototype,["textContent","innerHTML","className"]);const p=function(t){if((t=t||document)instanceof h)return t;if(t instanceof u)return t;let e=t.__domApi;return e||(e=t instanceof Event?new u(t):new h(t),t.__domApi=e),e}},,function(t,e,o){"use strict";o.d(e,"b",function(){return s}),o.d(e,"a",function(){return a});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const r={},n=/-[a-z]/g,i=/([A-Z])/g;function s(t){return r[t]||(r[t]=t.indexOf("-")<0?t:t.replace(n,t=>t[1].toUpperCase()))}function a(t){return r[t]||(r[t]=t.replace(i,"-$1").toLowerCase())}},,function(t,e,o){"use strict";o(59),o(37),o(31);const r=document.createElement("template");r.innerHTML='<custom-style><style>html { /* Base (background) */ --lumo-base-color: #FFF; /* Tint */ --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3); --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37); --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44); --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5); --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57); --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64); --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7); --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77); --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84); --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9); --lumo-tint: #FFF; /* Shade */ --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05); --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1); --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16); --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26); --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38); --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5); --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61); --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72); --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83); --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94); --lumo-shade: hsl(214, 35%, 15%); /* Contrast */ --lumo-contrast-5pct: var(--lumo-shade-5pct); --lumo-contrast-10pct: var(--lumo-shade-10pct); --lumo-contrast-20pct: var(--lumo-shade-20pct); --lumo-contrast-30pct: var(--lumo-shade-30pct); --lumo-contrast-40pct: var(--lumo-shade-40pct); --lumo-contrast-50pct: var(--lumo-shade-50pct); --lumo-contrast-60pct: var(--lumo-shade-60pct); --lumo-contrast-70pct: var(--lumo-shade-70pct); --lumo-contrast-80pct: var(--lumo-shade-80pct); --lumo-contrast-90pct: var(--lumo-shade-90pct); --lumo-contrast: var(--lumo-shade); /* Text */ --lumo-header-text-color: var(--lumo-contrast); --lumo-body-text-color: var(--lumo-contrast-90pct); --lumo-secondary-text-color: var(--lumo-contrast-70pct); --lumo-tertiary-text-color: var(--lumo-contrast-50pct); --lumo-disabled-text-color: var(--lumo-contrast-30pct); /* Primary */ --lumo-primary-color: hsl(214, 90%, 52%); --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5); --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1); --lumo-primary-text-color: var(--lumo-primary-color); --lumo-primary-contrast-color: #FFF; /* Error */ --lumo-error-color: hsl(3, 100%, 61%); --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5); --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1); --lumo-error-text-color: hsl(3, 92%, 53%); --lumo-error-contrast-color: #FFF; /* Success */ --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */ --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55); --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12); --lumo-success-text-color: hsl(145, 100%, 32%); --lumo-success-contrast-color: #FFF; }</style></custom-style><dom-module id="lumo-color"><template><style>[theme~="dark"] { /* Base (background) */ --lumo-base-color: hsl(214, 35%, 21%); /* Tint */ --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06); --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14); --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23); --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32); --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41); --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5); --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6); --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7); --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8); --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9); --lumo-tint: hsl(214, 100%, 98%); /* Shade */ --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07); --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15); --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23); --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32); --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41); --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5); --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6); --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7); --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8); --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9); --lumo-shade: hsl(214, 33%, 13%); /* Contrast */ --lumo-contrast-5pct: var(--lumo-tint-5pct); --lumo-contrast-10pct: var(--lumo-tint-10pct); --lumo-contrast-20pct: var(--lumo-tint-20pct); --lumo-contrast-30pct: var(--lumo-tint-30pct); --lumo-contrast-40pct: var(--lumo-tint-40pct); --lumo-contrast-50pct: var(--lumo-tint-50pct); --lumo-contrast-60pct: var(--lumo-tint-60pct); --lumo-contrast-70pct: var(--lumo-tint-70pct); --lumo-contrast-80pct: var(--lumo-tint-80pct); --lumo-contrast-90pct: var(--lumo-tint-90pct); --lumo-contrast: var(--lumo-tint); /* Text */ --lumo-header-text-color: var(--lumo-contrast); --lumo-body-text-color: var(--lumo-contrast-90pct); --lumo-secondary-text-color: var(--lumo-contrast-70pct); --lumo-tertiary-text-color: var(--lumo-contrast-50pct); --lumo-disabled-text-color: var(--lumo-contrast-30pct); /* Primary */ --lumo-primary-color: hsl(214, 86%, 55%); --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5); --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1); --lumo-primary-text-color: hsl(214, 100%, 70%); --lumo-primary-contrast-color: #FFF; /* Error */ --lumo-error-color: hsl(3, 90%, 63%); --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5); --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1); --lumo-error-text-color: hsl(3, 100%, 67%); /* Success */ --lumo-success-color: hsl(145, 65%, 42%); --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5); --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1); --lumo-success-text-color: hsl(145, 85%, 47%); } html { color: var(--lumo-body-text-color); background-color: var(--lumo-base-color); } [theme~="dark"] { color: var(--lumo-body-text-color); background-color: var(--lumo-base-color); } h1, h2, h3, h4, h5, h6 { color: var(--lumo-header-text-color); } a { color: var(--lumo-primary-text-color); } blockquote { color: var(--lumo-secondary-text-color); } code, pre { background-color: var(--lumo-contrast-10pct); border-radius: var(--lumo-border-radius-m); }</style></template></dom-module><dom-module id="lumo-color-legacy"><template><style include="lumo-color">:host { color: var(--lumo-body-text-color) !important; background-color: var(--lumo-base-color) !important; }</style></template></dom-module>',document.head.appendChild(r.content)},,function(t,e,o){"use strict";o.d(e,"a",function(){return a});o(9);var r=o(85),n=o(11),i=o(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(i.a)(t);return s(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>s(t)?(t=t,Object(i.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(i.a)(this._target).children&&(this._listenSlots(Object(i.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(i.a)(this._target).children&&(this._unlistenSlots(Object(i.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,n.c.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let o=t[e];o.addedNodes&&this._listenSlots(o.addedNodes),o.removedNodes&&this._unlistenSlots(o.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),o=Object(r.a)(e,this._effectiveNodes);for(let e,r=0;r<o.length&&(e=o[r]);r++)for(let o,r=0;r<e.removed.length&&(o=e.removed[r]);r++)t.removedNodes.push(o);for(let r,n=0;n<o.length&&(r=o[n]);n++)for(let o=r.index;o<r.index+r.addedCount;o++)t.addedNodes.push(e[o]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let o=t[e];s(o)&&o.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let o=t[e];s(o)&&o.removeEventListener("slotchange",this._boundSchedule)}}}},,function(t,e,o){"use strict";o.d(e,"b",function(){return c}),o.d(e,"a",function(){return d});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r=!1,n=[],i=[];function s(){r=!0,requestAnimationFrame(function(){r=!1,a(n),setTimeout(function(){!function(t){for(let e=0,o=t.length;e<o;e++)l(t.shift())}(i)})})}function a(t){for(;t.length;)l(t.shift())}function l(t){const e=t[0],o=t[1],r=t[2];try{o.apply(e,r)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,o){r||s(),n.push([t,e,o])}function d(t,e,o){r||s(),i.push([t,e,o])}},function(t,e,o){"use strict";o(9);var r=o(7),n=o(13),i=o(69),s=o(21),a=o(31),l=o(57);const c=[];var d=o(84);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const u=Object(n.a)(t=>{const e=Object(d.a)(t);function o(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const o=t.properties;o&&(e=function(t){const e={};for(let o in t){const r=t[o];e[o]="function"==typeof r?{type:r}:r}return e}(o))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,c.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=o(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=o(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});var h=o(1);o.d(e,"a",function(){return f});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const p="3.3.0",m=window.ShadyCSS&&window.ShadyCSS.cssBuild,f=Object(n.a)(t=>{const e=u(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return p}static _finalizeClass(){e._finalizeClass.call(this);const t=((o=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",o))||(o.__ownObservers=o.hasOwnProperty(JSCompiler_renameProperty("observers",o))?o.observers:null),o.__ownObservers);var o;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):r.c||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,o=i,r=t[i],n=t,r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(o)?console.warn(`Cannot redefine computed property '${o}'.`):e._createComputedProperty(o,r.computed,n)),r.readOnly&&!e._hasReadOnlyEffect(o)?e._createReadOnlyProperty(o,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(o)&&console.warn(`Cannot make readOnly property '${o}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(o)?e._createReflectedProperty(o):!1===r.reflectToAttribute&&e._hasReflectEffect(o)&&console.warn(`Cannot make reflected property '${o}' non-reflected.`),r.notify&&!e._hasNotifyEffect(o)?e._createNotifyingProperty(o):!1===r.notify&&e._hasNotifyEffect(o)&&console.warn(`Cannot make notify property '${o}' non-notify.`),r.observer&&e._createPropertyObserver(o,r.observer,n[r.observer]),e._addPropertyToAttributeMap(o);var e,o,r,n}static createObservers(t,e){const o=this.prototype;for(let r=0;r<t.length;r++)o._createMethodObserver(t[r],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!r.h||r.a)&&(e=a.a.import(t,"template"),r.h&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.e,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let o in e){let r=e[o];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[o]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let o=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof o.value?o.value.call(this):o.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const o=this.importPath;!function(t,e,o,r){if(!m){const n=e.content.querySelectorAll("style"),s=Object(i.c)(e),a=Object(i.b)(o),l=e.content.firstElementChild;for(let o=0;o<a.length;o++){let n=a[o];n.textContent=t._processStyleText(n.textContent,r),e.content.insertBefore(n,l)}let c=0;for(let e=0;e<s.length;e++){let o=s[e],i=n[c];i!==o?(o=o.cloneNode(!0),i.parentNode.insertBefore(o,i)):c++,o.textContent=t._processStyleText(o.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,o)}(this,e,t,o?Object(s.c)(o):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(h.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),r.i&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,o,r){return o.dynamicFns=o.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,o,r)}static _addTemplatePropertyEffect(t,o,n){return!r.c||o in this._properties||console.warn(`Property '${o}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,o,n)}}})},,,function(t,e,o){"use strict";o(9);var r=o(1),n=o(13),i=o(3),s=o(47),a=o(83);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};function c(t){let e=t.getAttribute("is");if(e&&l[e]){let o=t;for(o.removeAttribute("is"),t=o.ownerDocument.createElement(e),o.parentNode.replaceChild(t,o),t.appendChild(o);o.attributes.length;)t.setAttribute(o.attributes[0].name,o.attributes[0].value),o.removeAttribute(o.attributes[0].name)}return t}function d(t,e){let o=e.parentInfo&&d(t,e.parentInfo);if(!o)return t;for(let t=o.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function u(t,e,o,r){r.id&&(e[r.id]=o)}function h(t,e,o){if(o.events&&o.events.length)for(let r,n=0,i=o.events;n<i.length&&(r=i[n]);n++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function p(t,e,o){o.templateInfo&&(e._templateInfo=o.templateInfo)}const m=Object(n.a)(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let o=t._templateInfo={};o.nodeInfoList=[],o.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,o,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,o){return this._parseTemplateNode(t.content,e,o)}static _parseTemplateNode(t,e,o){let r=!1,n=t;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,e,o)||r,n.firstChild&&this._parseTemplateChildNodes(n,e,o),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,e,o)||r),r}static _parseTemplateChildNodes(t,e,o){if("script"!==t.localName&&"style"!==t.localName)for(let r,n=t.firstChild,i=0;n;n=r){if("template"==n.localName&&(n=c(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let o=r;for(;o&&o.nodeType===Node.TEXT_NODE;)n.textContent+=o.textContent,r=o.nextSibling,t.removeChild(o),o=r;if(e.stripWhiteSpace&&!n.textContent.trim()){t.removeChild(n);continue}}let s={parentIndex:i,parentInfo:o};this._parseTemplateNode(n,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),n.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,o){let r=t,n=this._parseTemplate(r,e);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),o.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,o){let r=!1,n=Array.from(t.attributes);for(let i,s=n.length-1;i=n[s];s--)r=this._parseTemplateNodeAttribute(t,e,o,i.name,i.value)||r;return r}static _parseTemplateNodeAttribute(t,e,o,r,n){return"on-"===r.slice(0,3)?(t.removeAttribute(r),o.events=o.events||[],o.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(o.id=n,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),o=e.nodeInfoList,r=e.content||t.content,n=document.importNode(r,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let i=n.nodeList=new Array(o.length);n.$={};for(let t,e=0,r=o.length;e<r&&(t=o[e]);e++){let o=i[e]=d(n,t);u(0,n.$,o,t),p(0,o,t),h(this,o,t)}return n=n}_addMethodEventListenerToNode(t,e,o,r){let n=function(t,e,o){return t=t._methodHost||t,function(e){t[o]?t[o](e,e.detail):console.warn("listener method `"+o+"` not defined")}}(r=r||t,0,o);return this._addEventListenerToNode(t,e,n),n}_addEventListenerToNode(t,e,o){t.addEventListener(e,o)}_removeEventListenerFromNode(t,e,o){t.removeEventListener(e,o)}}});var f=o(7);o.d(e,"a",function(){return V});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
let _=0;const b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},y=/[A-Z]/;function v(t,e){let o=t[e];if(o){if(!t.hasOwnProperty(e)){o=t[e]=Object.create(t[e]);for(let t in o){let e=o[t],r=o[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}}else o=t[e]={};return o}function g(t,e,o,r,n,i){if(e){let s=!1,a=_++;for(let l in o)w(t,e,a,l,o,r,n,i)&&(s=!0);return s}return!1}function w(t,e,o,r,n,s,a,l){let c=!1,d=e[a?Object(i.g)(r):r];if(d)for(let e,i=0,u=d.length;i<u&&(e=d[i]);i++)e.info&&e.info.lastRun===o||a&&!C(r,e.trigger)||(e.info&&(e.info.lastRun=o),e.fn(t,r,n,s,e.info,a,l),c=!0);return c}function C(t,e){if(e){let o=e.name;return o==t||!(!e.structured||!Object(i.b)(o,t))||!(!e.wildcard||!Object(i.c)(o,t))}return!0}function O(t,e,o,r,n){let i="string"==typeof n.method?t[n.method]:n.method,s=n.property;i?i.call(t,t.__data[s],r[s]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function x(t,e,o){let r=Object(i.g)(e);if(r!==e){return A(t,Object(s.a)(r)+"-changed",o[e],e),!0}return!1}function A(t,e,o,n){let i={value:o,queueProperty:!0};n&&(i.path=n),Object(r.a)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function S(t,e,o,r,n,s){let a=(s?Object(i.g)(e):e)!=e?e:null,l=a?Object(i.a)(t,a):t.__data[e];a&&void 0===l&&(l=o[e]),A(t,n.eventName,l,a)}function P(t,e,o,r,n){let i=t.__data[e];f.f&&(i=Object(f.f)(i,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,i)}function E(t,e,o,r,n){let i=R(t,e,o,r,n),s=n.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):t[s]=i}function k(t,e,o,r,n,i,a){o.bindings=o.bindings||[];let l={kind:r,target:n,parts:i,literal:a,isCompound:1!==i.length};if(o.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(n)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let o=0;o<l.parts.length;o++){let r=l.parts[o];r.compoundIndex=o,T(t,e,l,r,c)}}function T(t,e,o,r,n){if(!r.literal)if("attribute"===o.kind&&"-"===o.target[0])console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let i=r.dependencies,s={index:n,binding:o,part:r,evaluator:t};for(let o=0;o<i.length;o++){let r=i[o];"string"==typeof r&&((r=B(r)).wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:z,info:s,trigger:r})}}}function z(t,e,o,r,n,s,a){let l=a[n.index],c=n.binding,d=n.part;if(s&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let r=o[e];e=Object(i.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(l)}else{!function(t,e,o,r,n){n=function(t,e,o,r){if(o.isCompound){let n=t.__dataCompoundStorage[o.target];n[r.compoundIndex]=e,e=n.join("")}return"attribute"!==o.kind&&("textContent"!==o.target&&("value"!==o.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,n,o,r),f.f&&(n=Object(f.f)(n,o.target,o.kind,e));if("attribute"==o.kind)t._valueToNodeAttribute(e,n,o.target);else{let r=o.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[b.READ_ONLY]&&e[b.READ_ONLY][r]||e._setPendingProperty(r,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,n)}}(t,l,c,d,n.evaluator._evaluateBinding(t,d,e,o,r,s))}}function N(t,e){if(e.isCompound){let o=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let t=0;t<n.length;t++)i[t]=n[t].literal;let s=e.target;o[s]=i,e.literal&&"property"==e.kind&&("className"===s&&(t=Object(r.a)(t)),t[s]=e.literal)}}function j(t,e,o){if(o.listenerEvent){let r=o.parts[0];t.addEventListener(o.listenerEvent,function(t){!function(t,e,o,r,n){let s,a=t.detail,l=a&&a.path;l?(r=Object(i.i)(o,r,l),s=a&&a.value):s=t.currentTarget[o],s=n?!s:s,e[b.READ_ONLY]&&e[b.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,o.target,r.source,r.negate)})}}function I(t,e,o,r,n,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:i};for(let n,i=0;i<e.args.length&&(n=e.args[i]);i++)n.literal||t._addPropertyEffect(n.rootProperty,o,{fn:r,info:s,trigger:n});i&&t._addPropertyEffect(e.methodName,o,{fn:r,info:s})}function R(t,e,o,r,n){let i=t._methodHost||t,s=i[n.methodName];if(s){let r=t._marshalArgs(n.args,e,o);return s.apply(i,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const L=[],M=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function D(t){let e="";for(let o=0;o<t.length;o++){e+=t[o].literal||""}return e}function F(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:L};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let o=B(t);return o.literal||(e.static=!1),o},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function B(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':o.value=e.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(e),o.literal=!0}return o.literal||(o.rootProperty=Object(i.g)(e),o.structured=Object(i.d)(e),o.structured&&(o.wildcard=".*"==e.slice(-2),o.wildcard&&(o.name=e.slice(0,-2)))),o}function H(t,e,o){let r=Object(i.a)(t,o);return void 0===r&&(r=e[o]),r}function q(t,e,o,r){t.notifyPath(o+".splices",{indexSplices:r}),t.notifyPath(o+".length",e.length)}function Y(t,e,o,r,n,i){q(t,e,o,[{index:r,addedCount:n,removed:i,object:e,type:"splice"}])}const V=Object(n.a)(t=>{const e=m(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),U.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[b.READ_ONLY];for(let o in t)e&&e[o]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=t[o])}_addPropertyEffect(t,e,o){this._createPropertyAccessor(t,e==b.READ_ONLY);let r=v(this,e)[t];r||(r=this[e][t]=[]),r.push(o)}_removePropertyEffect(t,e,o){let r=v(this,e)[t],n=r.indexOf(o);n>=0&&r.splice(n,1)}_hasPropertyEffect(t,e){let o=this[e];return Boolean(o&&o[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,b.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,b.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,b.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,b.COMPUTE)}_setPendingPropertyOrPath(t,e,o,r){if(r||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!r){let o=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,o))return function(t,e,o){let r=t.__dataLinkedPaths;if(r){let n;for(let s in r){let a=r[s];Object(i.c)(s,e)?(n=Object(i.i)(s,a,e),t._setPendingPropertyOrPath(n,o,!0,!0)):Object(i.c)(a,e)&&(n=Object(i.i)(a,s,e),t._setPendingPropertyOrPath(n,o,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,o);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,o){o===t[e]&&"object"!=typeof o||("className"===e&&(t=Object(r.a)(t)),t[e]=o)}_setPendingProperty(t,e,o){let r=this.__dataHasPaths&&Object(i.d)(t),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[b.NOTIFY]&&this[b.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=o),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let o=t[e];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let o in t)!e&&this[b.READ_ONLY]&&this[b.READ_ONLY][o]||this._setPendingPropertyOrPath(o,t[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,o){let r=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,o,r){let n=t[b.COMPUTE];if(n){let i=e;for(;g(t,n,i,o,r);)Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,o,r);let n=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,o,r),this._flushClients(),g(this,this[b.REFLECT],e,o,r),g(this,this[b.OBSERVE],e,o,r),n&&function(t,e,o,r,n){let i,s,a=t[b.NOTIFY],l=_++;for(let s in e)e[s]&&(a&&w(t,a,l,s,o,r,n)?i=!0:n&&x(t,s,o)&&(i=!0));i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,n,e,o,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,o){this[b.PROPAGATE]&&g(this,this[b.PROPAGATE],t,e,o);let r=this.__templateInfo;for(;r;)g(this,r.propertyEffects,t,e,o,r.nodeList),r=r.nextTemplateInfo}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let o={path:""};q(this,Object(i.a)(this,t,o),o.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,o){o?Object(i.h)(o,t,e):this[b.READ_ONLY]&&this[b.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let o={path:""},r=Object(i.a)(this,t,o),n=r.length,s=r.push(...e);return e.length&&Y(this,r,o.path,n,e.length,[]),s}pop(t){let e={path:""},o=Object(i.a)(this,t,e),r=Boolean(o.length),n=o.pop();return r&&Y(this,o,e.path,o.length,0,[n]),n}splice(t,e,o,...r){let n,s={path:""},a=Object(i.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2===arguments.length?a.splice(e):a.splice(e,o,...r),(r.length||n.length)&&Y(this,a,s.path,e,r.length,n),n}shift(t){let e={path:""},o=Object(i.a)(this,t,e),r=Boolean(o.length),n=o.shift();return r&&Y(this,o,e.path,0,0,[n]),n}unshift(t,...e){let o={path:""},r=Object(i.a)(this,t,o),n=r.unshift(...e);return e.length&&Y(this,r,o.path,0,e.length,[]),n}notifyPath(t,e){let o;if(1==arguments.length){let r={path:""};e=Object(i.a)(this,t,r),o=r.path}else o=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(o,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var o;this._addPropertyEffect(t,b.READ_ONLY),e&&(this["_set"+(o=t,o[0].toUpperCase()+o.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,o){let r={property:t,method:e,dynamicFn:Boolean(o)};this._addPropertyEffect(t,b.OBSERVE,{fn:O,info:r,trigger:{name:t}}),o&&this._addPropertyEffect(e,b.OBSERVE,{fn:O,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let o=F(t);if(!o)throw new Error("Malformed observer expression '"+t+"'");I(this,o,b.OBSERVE,R,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,b.NOTIFY,{fn:S,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,b.REFLECT,{fn:P,info:{attrName:e}})}_createComputedProperty(t,e,o){let r=F(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");I(this,r,b.COMPUTE,E,t,o)}_marshalArgs(t,e,o){const r=this.__data,n=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:c,value:d,literal:u}=t[s];if(!u)if(c){const t=Object(i.c)(a,e),n=H(r,o,t?e:a);d={path:t?e:a,value:n,base:t?Object(i.a)(r,a):n}}else d=l?H(r,o,a):r[a];n[s]=d}return n}static addPropertyEffect(t,e,o){this.prototype._addPropertyEffect(t,e,o)}static createPropertyObserver(t,e,o){this.prototype._createPropertyObserver(t,e,o)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,o){this.prototype._createComputedProperty(t,e,o)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let o=this.constructor._parseTemplate(t),r=this.__templateInfo==o;if(!r)for(let t in o.propertyEffects)this._createPropertyAccessor(t);if(e&&((o=Object.create(o)).wasPreBound=r,!r&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=o,o.previousTemplateInfo=t,o}return this.__templateInfo=o}static _addTemplatePropertyEffect(t,e,o){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(o)}_stampTemplate(t){U.beginHosting(this);let e=super._stampTemplate(t);U.endHosting(this);let o=this._bindTemplate(t,!0);if(o.nodeList=e.nodeList,!o.wasPreBound){let t=o.childNodes=[];for(let o=e.firstChild;o;o=o.nextSibling)t.push(o)}return e.templateInfo=o,function(t,e){let{nodeList:o,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let n=r[e],i=o[e],s=n.bindings;if(s)for(let e=0;e<s.length;e++){let o=s[e];N(i,o),j(i,t,o)}i.__dataHost=t}}(this,o),this.__dataReady&&g(this,o.propertyEffects,this.__data,null,!1,o.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let o=e.childNodes;for(let t=0;t<o.length;t++){let e=o[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,o,r){let n=e._parseTemplateNode.call(this,t,o,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,o);e&&(t.textContent=D(e)||" ",k(this,o,r,"text","textContent",e),n=!0)}return n}static _parseTemplateNodeAttribute(t,o,r,n,i){let a=this._parseBindings(i,o);if(a){let e=n,i="property";y.test(n)?i="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),i="attribute");let l=D(a);return l&&"attribute"==i&&("class"==n&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(n)),t.setAttribute(n,l)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(n=Object(s.b)(n)),k(this,o,r,i,n,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,o,r,n,i)}static _parseTemplateNestedTemplate(t,o,r){let n=e._parseTemplateNestedTemplate.call(this,t,o,r),i=r.templateInfo.hostProps;for(let t in i)k(this,o,r,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}]);return n}static _parseBindings(t,e){let o,r=[],n=0;for(;null!==(o=M.exec(t));){o.index>n&&r.push({literal:t.slice(n,o.index)});let i=o[1][0],s=Boolean(o[2]),a=o[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let u=F(a),h=[];if(u){let{args:t,methodName:o}=u;for(let e=0;e<t.length;e++){let o=t[e];o.literal||h.push(o)}let r=e.dynamicFns;(r&&r[o]||u.static)&&(h.push(o),u.dynamicFn=!0)}else h.push(a);r.push({source:a,mode:i,negate:s,customEvent:l,signature:u,dependencies:h,event:c}),n=M.lastIndex}if(n&&n<t.length){let e=t.substring(n);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,o,r,n,s){let a;return a=e.signature?R(t,o,r,0,e.signature):o!=e.source?Object(i.a)(t,e.source):s&&Object(i.d)(o)?Object(i.a)(t,o):t.__data[o],e.negate&&(a=!a),a}}});const U=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}}},,function(t,e,o){"use strict";customElements.define("vaadin-lumo-styles",class extends HTMLElement{static get version(){return"1.5.0"}})},,function(t,e,o){"use strict";o.d(e,"a",function(){return i});var r=o(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=!1;function i(){if(r.c&&!r.j){if(!n){n=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}},,function(t,e,o){"use strict";var r=o(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(t){return function t(e,o){let r=o.substring(e.start,e.end-1);e.parsedCssText=e.cssText=r.trim();if(e.parent){let t=e.previous?e.previous.end:e.parent.start;r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})}(r=o.substring(t,e.start-1))).replace(d.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=r.trim();e.atRule=0===n.indexOf(p),e.atRule?0===n.indexOf(h)?e.type=a.MEDIA_RULE:n.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===n.indexOf(u)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let n=e.rules;if(n)for(let e,r=0,i=n.length;r<i&&(e=n[r]);r++)t(e,o);return e}(function(t){let e=new n;e.start=0,e.end=t.length;let o=e;for(let r=0,i=t.length;r<i;r++)if(t[r]===l){o.rules||(o.rules=[]);let t=o,e=t.rules[t.rules.length-1]||null;(o=new n).start=r+1,o.parent=t,o.previous=e,t.rules.push(o)}else t[r]===c&&(o.end=r+1,o=o.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function s(t,e,o=""){let r="";if(t.cssText||t.rules){let o=t.rules;if(o&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(u)}(o))for(let t,n=0,i=o.length;n<i&&(t=o[n]);n++)r=s(t,e,r);else(r=(r=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText)).trim())&&(r="  "+r+"\n")}return r&&(t.selector&&(o+=t.selector+" "+l+"\n"),o+=r,t.selector&&(o+=c+"\n\n")),o}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",h="@media",p="@";var m=o(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=new Set,_="shady-unscoped";function b(t){const e=t.textContent;if(!f.has(e)){f.add(e);const o=t.cloneNode(!0);document.head.appendChild(o)}}function y(t){return t.hasAttribute(_)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function v(t,e){return t?("string"==typeof t&&(t=i(t)),e&&w(t,e),s(t,r.c)):""}function g(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=i(t.textContent)),t.__cssRules||null}function w(t,e,o,r){if(!t)return;let n=!1,i=t.type;if(r&&i===a.MEDIA_RULE){let e=t.selector.match(m.a);e&&(window.matchMedia(e[1]).matches||(n=!0))}i===a.STYLE_RULE?e(t):o&&i===a.KEYFRAMES_RULE?o(t):i===a.MIXIN_RULE&&(n=!0);let s=t.rules;if(s&&!n)for(let t,n=0,i=s.length;n<i&&(t=s[n]);n++)w(t,e,o,r)}function C(t,e){let o=0;for(let r=e,n=t.length;r<n;r++)if("("===t[r])o++;else if(")"===t[r]&&0==--o)return r;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const O="css-build";function x(t){if(void 0!==r.a)return r.a;if(void 0===t.__cssBuild){const e=t.getAttribute(O);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===O)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function A(t){return""!==x(t)}var S=o(35);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=/;\s*/m,E=/^\s*(initial)|(inherit)\s*$/,k=/\s*!important/,T="_-_";class z{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let N=null;class j{constructor(){this._currentElement=null,this._measureElement=null,this._map=new z}detectMixin(t){return Object(S.a)(t)}gatherStyles(t){const e=function(t){const e=[],o=t.querySelectorAll("style");for(let t=0;t<o.length;t++){const n=o[t];y(n)?r.d||(b(n),n.parentNode.removeChild(n)):(e.push(n.textContent),n.parentNode.removeChild(n))}return e.join("").trim()}(t.content);if(e){const o=document.createElement("style");return o.textContent=e,t.content.insertBefore(o,t.content.firstChild),o}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const o=t._gatheredStyle;return o?this.transformStyle(o,e):null}transformStyle(t,e=""){let o=g(t);return this.transformRules(o,e),t.textContent=v(o),o}transformCustomStyle(t){let e=g(t);return w(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=v(e),e}transformRules(t,e){this._currentElement=e,w(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(m.c,(t,o,r,n)=>this._produceCssProperties(t,o,r,n,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const o={};let r=!1;return w(e,e=>{(r=r||e===t)||e.selector===t.selector&&Object.assign(o,this._cssTextToMap(e.parsedCssText))}),o}_consumeCssProperties(t,e){let o=null;for(;o=m.b.exec(t);){let r=o[0],n=o[1],i=o.index,s=i+r.indexOf("@apply"),a=i+r.length,l=t.slice(0,s),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let u=this._atApplyToCssProperties(n,d);t=`${l}${u}${c}`,m.b.lastIndex=i+u.length}return t}_atApplyToCssProperties(t,e){t=t.replace(P,"");let o=[],r=this._map.get(t);if(r||(this._map.set(t,{}),r=this._map.get(t)),r){let n,i,s;this._currentElement&&(r.dependants[this._currentElement]=!0);const a=r.properties;for(n in a)s=e&&e[n],i=[n,": var(",t,T,n],s&&i.push(",",s.replace(k,"")),i.push(")"),k.test(a[n])&&i.push(" !important"),o.push(i.join(""))}return o.join("; ")}_replaceInitialOrInherit(t,e){let o=E.exec(e);return o&&(e=o[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let o,r,n=t.split(";"),i={};for(let t,s,a=0;a<n.length;a++)(t=n[a])&&(s=t.split(":")).length>1&&(o=s[0].trim(),r=s.slice(1).join(":"),e&&(r=this._replaceInitialOrInherit(o,r)),i[o]=r);return i}_invalidateMixinEntry(t){if(N)for(let e in t.dependants)e!==this._currentElement&&N(e)}_produceCssProperties(t,e,o,r,n){if(o&&function t(e,o){let r=e.indexOf("var(");if(-1===r)return o(e,"","","");let n=C(e,r+3),i=e.substring(r+4,n),s=e.substring(0,r),a=t(e.substring(n+1),o),l=i.indexOf(",");return-1===l?o(s,i.trim(),"",a):o(s,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(o,(t,e)=>{e&&this._map.get(e)&&(r=`@apply ${e};`)}),!r)return t;let i=this._consumeCssProperties(""+r,n),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let u,h,p=[],m=!1;for(u in l)void 0===(h=a[u])&&(h="initial"),!d||u in d||(m=!0),p.push(`${e}${T}${u}: ${h}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),o&&(s=`${t};${s}`),`${s}${p.join("; ")};`}}j.prototype.detectMixin=j.prototype.detectMixin,j.prototype.transformStyle=j.prototype.transformStyle,j.prototype.transformCustomStyle=j.prototype.transformCustomStyle,j.prototype.transformRules=j.prototype.transformRules,j.prototype.transformRule=j.prototype.transformRule,j.prototype.transformTemplate=j.prototype.transformTemplate,j.prototype._separator=T,Object.defineProperty(j.prototype,"invalidCallback",{get:()=>N,set(t){N=t}});var I=j;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var R={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const L="_applyShimCurrentVersion",M="_applyShimNextVersion",D="_applyShimValidatingVersion",F=Promise.resolve();function B(t){let e=R[t];e&&function(t){t[L]=t[L]||0,t[D]=t[D]||0,t[M]=(t[M]||0)+1}(e)}function H(t){return t[L]===t[M]}function q(t){return!H(t)&&t[D]===t[M]}function Y(t){t[D]=t[M],t._validating||(t._validating=!0,F.then(function(){t[L]=t[M],t._validating=!1}))}o(90);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const V=new I;class U{constructor(){this.customStyleInterface=null,V.invalidCallback=B}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{V.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),A(t))return;R[e]=t;let o=V.transformTemplate(t,e);t._styleAst=o}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let o=t[e],r=this.customStyleInterface.getStyleForCustomStyle(o);r&&V.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(S.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,o="",r="";return e?e.indexOf("-")>-1?o=e:(r=e,o=t.getAttribute&&t.getAttribute("is")||""):(o=t.is,r=t.extends),{is:o,typeExtension:r}}(t),o=R[e];if((!o||!A(o))&&o&&!H(o)){q(o)||(this.prepareTemplate(o,e),Y(o));let r=t.shadowRoot;if(r){let t=r.querySelector("style");t&&(t.__cssRules=o._styleAst,t.textContent=v(o._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new U;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,o,r){t.flushCustomStyles(),t.prepareTemplate(e,o)},prepareTemplateStyles(t,e,o){window.ShadyCSS.prepareTemplate(t,e,o)},prepareTemplateDom(t,e){},styleSubtree(e,o){t.flushCustomStyles(),t.styleSubtree(e,o)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(S.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:r.c,nativeShadow:r.d,cssBuild:r.a,disableRuntime:r.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=V;var J=o(54),G=o(40),W=o(83),X=o(13);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const K=/:host\(:dir\((ltr|rtl)\)\)/g,Z=':host([dir="$1"])',Q=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,$=':host([dir="$2"]) $1',tt=/:dir\((?:ltr|rtl)\)/,et=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),ot=[];let rt=null,nt="";function it(){nt=document.documentElement.getAttribute("dir")}function st(t){if(!t.__autoDirOptOut){t.setAttribute("dir",nt)}}function at(){it(),nt=document.documentElement.getAttribute("dir");for(let t=0;t<ot.length;t++)st(ot[t])}const lt=Object(X.a)(t=>{et||rt||(it(),(rt=new MutationObserver(at)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(W.a)(t);class o extends e{static _processStyleText(t,o){return t=e._processStyleText.call(this,t,o),!et&&tt.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=(e=e.replace(K,Z)).replace(Q,$)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(rt&&rt.takeRecords().length&&at(),ot.push(this),st(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=ot.indexOf(this);t>-1&&ot.splice(t,1)}}}return o.__activateDir=!1,o});o(53);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ct(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ct():window.addEventListener("DOMContentLoaded",ct);var dt=o(45),ut=o(44),ht=o(19),pt=o(11),mt=o(3),ft=o(1);o(9);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _t=window.ShadyDOM,bt=window.ShadyCSS;function yt(t,e){return Object(ft.a)(t).getRootNode()===e}o.d(e,"a",function(){return gt});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let vt=window.ShadyCSS;const gt=Object(X.a)(t=>{const e=lt(Object(G.a)(Object(J.a)(t))),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,o,r){e!==o&&(super.attributeChangedCallback(t,e,o,r),this.attributeChanged(t,e,o))}attributeChanged(t,e,o){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,o){this._propertyToAttribute(t,e,o)}serializeValueToAttribute(t,e,o){this._valueToNodeAttribute(o||this,t,e)}extend(t,e){if(!t||!e)return t||e;let o=Object.getOwnPropertyNames(e);for(let r,n=0;n<o.length&&(r=o[n]);n++){let o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o)}return t}mixin(t,e){for(let o in e)t[o]=e[o];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,o){o=o||{},e=null==e?{}:e;let r=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});r.detail=e;let n=o.node||this;return Object(ft.a)(n).dispatchEvent(r),r}listen(t,e,o){t=t||this;let r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(t);n||(n={},r.set(t,n));let i=e+o;n[i]||(n[i]=this._addMethodEventListenerToNode(t,e,o,this))}unlisten(t,e,o){t=t||this;let r=this.__boundListeners&&this.__boundListeners.get(t),n=e+o,i=r&&r[n];i&&(this._removeEventListenerFromNode(t,e,i),r[n]=null)}setScrollDirection(t,e){Object(ut.d)(e||this,o[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ft.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(dt.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(dt.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(dt.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let o,r=0;o=t[r];r++)o.nodeType!==Node.COMMENT_NODE&&e.push(o.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(dt.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}isLightDescendant(t){return this!==t&&Object(ft.a)(this).contains(t)&&Object(ft.a)(this).getRootNode()===Object(ft.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ft.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!_t||!bt)return null;if(!_t.handlesDynamicScoping)return null;const o=bt.ScopingShim;if(!o)return null;const r=o.scopeForNode(t),n=Object(ft.a)(t).getRootNode(),i=t=>{if(!yt(t,n))return;const e=Array.from(_t.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!yt(i,n))continue;const s=o.currentScopeForNode(i);s!==r&&(""!==s&&o.unscopeNode(i,s),o.scopeNode(i,r))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const o=t[e];for(let t=0;t<o.addedNodes.length;t++){const e=o.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return vt.getComputedStyleValue(this,t)}debounce(t,e,o){return this._debouncers=this._debouncers||{},this._debouncers[t]=ht.a.debounce(this._debouncers[t],o>0?pt.d.after(o):pt.c,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?pt.d.run(t.bind(this),e):~pt.c.run(t.bind(this))}cancelAsync(t){t<0?pt.c.cancel(~t):pt.d.cancel(t)}create(t,e){let o=document.createElement(t);if(e)if(o.setProperties)o.setProperties(e);else for(let t in e)o[t]=e[t];return o}elementMatches(t,e){return Object(dt.c)(e||this,t)}toggleAttribute(t,e){let o=this;return 3===arguments.length&&(o=arguments[2]),1==arguments.length&&(e=!o.hasAttribute(t)),e?(Object(ft.a)(o).setAttribute(t,""),!0):(Object(ft.a)(o).removeAttribute(t),!1)}toggleClass(t,e,o){o=o||this,1==arguments.length&&(e=!o.classList.contains(t)),e?o.classList.add(t):o.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,o,r){r=r||this,this.transform("translate3d("+t+","+e+","+o+")",r)}arrayDelete(t,e){let o;if(Array.isArray(t)){if((o=t.indexOf(e))>=0)return t.splice(o,1)}else{if((o=Object(mt.a)(this,t).indexOf(e))>=0)return this.splice(t,o,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},,function(t,e,o){"use strict";o(59),o(37);const r=document.createElement("template");r.innerHTML="<custom-style><style>html { /* Square */ --lumo-space-xs: 0.25rem; --lumo-space-s: 0.5rem; --lumo-space-m: 1rem; --lumo-space-l: 1.5rem; --lumo-space-xl: 2.5rem; /* Wide */ --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs); --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s); --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m); --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l); --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl); /* Tall */ --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2); --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2); --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2); --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2); --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2); }</style></custom-style>",document.head.appendChild(r.content)},,function(t,e,o){"use strict";o(59),o(37),o(31);const r=document.createElement("template");r.innerHTML='<custom-style><style>html { /* Font families */ --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; /* Font sizes */ --lumo-font-size-xxs: .75rem; --lumo-font-size-xs: .8125rem; --lumo-font-size-s: .875rem; --lumo-font-size-m: 1rem; --lumo-font-size-l: 1.125rem; --lumo-font-size-xl: 1.375rem; --lumo-font-size-xxl: 1.75rem; --lumo-font-size-xxxl: 2.5rem; /* Line heights */ --lumo-line-height-xs: 1.25; --lumo-line-height-s: 1.375; --lumo-line-height-m: 1.625; }</style></custom-style><dom-module id="lumo-typography"><template><style>html { font-family: var(--lumo-font-family); font-size: var(--lumo-font-size, var(--lumo-font-size-m)); line-height: var(--lumo-line-height-m); -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */ :host { font-family: var(--lumo-font-family); font-size: var(--lumo-font-size, var(--lumo-font-size-m)); line-height: var(--lumo-line-height-m); -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } small, [theme~="font-size-s"] { font-size: var(--lumo-font-size-s); line-height: var(--lumo-line-height-s); } [theme~="font-size-xs"] { font-size: var(--lumo-font-size-xs); line-height: var(--lumo-line-height-xs); } h1, h2, h3, h4, h5, h6 { font-weight: 600; line-height: var(--lumo-line-height-xs); margin-top: 1.25em; } h1 { font-size: var(--lumo-font-size-xxxl); margin-bottom: 0.75em; } h2 { font-size: var(--lumo-font-size-xxl); margin-bottom: 0.5em; } h3 { font-size: var(--lumo-font-size-xl); margin-bottom: 0.5em; } h4 { font-size: var(--lumo-font-size-l); margin-bottom: 0.5em; } h5 { font-size: var(--lumo-font-size-m); margin-bottom: 0.25em; } h6 { font-size: var(--lumo-font-size-xs); margin-bottom: 0; text-transform: uppercase; letter-spacing: 0.03em; } p, blockquote { margin-top: 0.5em; margin-bottom: 0.75em; } a { text-decoration: none; } a:hover { text-decoration: underline; } hr { display: block; align-self: stretch; height: 1px; border: 0; padding: 0; margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2); background-color: var(--lumo-contrast-10pct); } blockquote { border-left: 2px solid var(--lumo-contrast-30pct); } b, strong { font-weight: 600; }</style></template></dom-module>',document.head.appendChild(r.content)},,function(t,e,o){"use strict";o.d(e,"c",function(){return h}),o.d(e,"b",function(){return p}),o.d(e,"a",function(){return f});var r=o(31),n=o(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i="link[rel=import][type~=css]",s="include",a="shady-unscoped";function l(t){return r.a.import(t)}function c(t){let e=t.body?t.body:t;const o=Object(n.b)(e.textContent,t.baseURI),r=document.createElement("style");return r.textContent=o,r}function d(t){const e=t.trim().split(/\s+/),o=[];for(let t=0;t<e.length;t++)o.push(...u(e[t]));return o}function u(t){const e=l(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...m(e));const o=e.querySelector("template");o&&t.push(...h(o,e.assetpath)),e._styles=t}return e._styles}function h(t,e){if(!t._styles){const o=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let i=r[t],a=i.getAttribute(s);a&&o.push(...d(a).filter(function(t,e,o){return o.indexOf(t)===e})),e&&(i.textContent=Object(n.b)(i.textContent,e)),o.push(i)}t._styles=o}return t._styles}function p(t){let e=l(t);return e?m(e):[]}function m(t){const e=[],o=t.querySelectorAll(i);for(let t=0;t<o.length;t++){let r=o[t];if(r.import){const t=r.import,o=r.hasAttribute(a);if(o&&!t._unscopedStyle){const e=c(t);e.setAttribute(a,""),t._unscopedStyle=e}else t._style||(t._style=c(t));e.push(o?t._unscopedStyle:t._style)}}return e}function f(t){let e=t.trim().split(/\s+/),o="";for(let t=0;t<e.length;t++)o+=_(e[t]);return o}function _(t){let e=l(t);if(e&&void 0===e._cssText){let t=b(e),o=e.querySelector("template");o&&(t+=function(t,e){let o="";const r=h(t,e);for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),o+=e.textContent}return o}(o,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function b(t){let e="",o=m(t);for(let t=0;t<o.length;t++)e+=o[t].textContent;return e}},,function(t,e,o){"use strict";o(59),o(37);const r=document.createElement("template");r.innerHTML="<custom-style><style>html { /* Border radius */ --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */ --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */ --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */ --lumo-border-radius: 0.25em; /* Deprecated */ /* Shadow */ --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct); --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct); --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct); --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct); --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct); /* Clickable element cursor */ --lumo-clickable-cursor: default; }</style></custom-style>",document.head.appendChild(r.content)},,function(t,e,o){"use strict";o(59),o(37);const r=document.createElement("template");r.innerHTML="<custom-style><style>html { --lumo-size-xs: 1.625rem; --lumo-size-s: 1.875rem; --lumo-size-m: 2.25rem; --lumo-size-l: 2.75rem; --lumo-size-xl: 3.5rem; /* Icons */ --lumo-icon-size-s: 1.25em; --lumo-icon-size-m: 1.5em; --lumo-icon-size-l: 2.25em; /* For backwards compatibility */ --lumo-icon-size: var(--lumo-icon-size-m); }</style></custom-style>",document.head.appendChild(r.content)},,function(t,e,o){"use strict";o.d(e,"a",function(){return r});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const r=t=>(class extends((t=>(class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}}))(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this._focus(t):-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){const t=document.createElement("input");t.style.position="absolute",t.style.opacity=0,t.tabIndex=this.tabIndex,this.parentNode.insertBefore(t,this.nextSibling),t.focus(),t.addEventListener("focusout",()=>this.parentNode.removeChild(t))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(t){this._tabPressed=9===t.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(t){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}})},,function(t,e,o){"use strict";o.d(e,"b",function(){return l}),o.d(e,"a",function(){return h});var r=o(63),n=o(7);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(t,e){return u({},Object(r.a)(e),t)}function c(t,e,o,r){!function(t,e,o){const r=t._noAccessors,n=Object.getOwnPropertyNames(t);for(let i=0;i<n.length;i++){let s=n[i];if(!(s in o))if(r)e[s]=t[s];else{let o=Object.getOwnPropertyDescriptor(t,s);o&&(o.configurable=!0,Object.defineProperty(e,s,o))}}}(e,t,r);for(let t in i)e[t]&&(o[t]=o[t]||[],o[t].push(e[t]))}function d(t,e){for(const o in e){const r=t[o],n=e[o];t[o]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}function u(t,e,o){let r;const i={};class l extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let t,e=0;e<r.length;e++)(t=r[e]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(r)for(let t=0;t<r.length;t++)d(e,r[t].properties);return d(e,t.properties),e}static get observers(){let e=[];if(r)for(let t,o=0;o<r.length;o++)(t=r[o]).observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=i.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=l.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),n.c&&u(t);const e=Object.getPrototypeOf(this);let o=i.beforeRegister;if(o)for(let t=0;t<o.length;t++)o[t].call(e);if(o=i.registered)for(let t=0;t<o.length;t++)o[t].call(e)}}_applyListeners(){super._applyListeners();const t=i.listeners;if(t)for(let e=0;e<t.length;e++){const o=t[e];if(o)for(let t in o)this._addMethodEventListenerToNode(this,t,o[t])}}_ensureAttributes(){const t=i.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const o=t[e];for(let t in o)this._ensureAttribute(t,o[t])}super._ensureAttributes()}ready(){super.ready();let t=i.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=i.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=i.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,o){super.attributeChanged();let r=i.attributeChanged;if(r)for(let n=0;n<r.length;n++)r[n].call(this,t,e,o)}}if(o){Array.isArray(o)||(o=[o]);let t=e.prototype.behaviors;r=function t(e,o,r){o=o||[];for(let n=e.length-1;n>=0;n--){let i=e[n];i?Array.isArray(i)?t(i,o):o.indexOf(i)<0&&(!r||r.indexOf(i)<0)&&o.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return o}(o,null,t),l.prototype.behaviors=t?t.concat(o):r}const u=e=>{r&&function(t,e,o){for(let r=0;r<e.length;r++)c(t,e[r],o,a)}(e,r,i),c(e,t,i,s)};return n.c||u(l.prototype),l.generatedFrom=t,l}const h=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let o=e?e(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(o=u(t,o,t.behaviors)).is=o.prototype.is=t.is,o}},,function(t,e,o){"use strict";o.d(e,"a",function(){return r});const r=t=>document.head.appendChild(t.content)},,,,function(t,e,o){"use strict";o.d(e,"a",function(){return l});o(9);var r=o(13),n=o(47),i=o(84);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(r.a)(t=>{const e=Object(i.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(n.b)(t[e]))}static attributeNameForProperty(t){return Object(n.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const o=this;o.hasAttribute(t)||this._valueToNodeAttribute(o,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let o;switch(e){case Object:try{o=JSON.parse(t)}catch(e){o=t}break;case Array:try{o=JSON.parse(t)}catch(e){o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:o=isNaN(t)?String(t):Number(t),o=new Date(o);break;default:o=super._deserializeValue(t,e)}return o}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let o=t[e];void 0!==o&&(t.__data?t._setPendingProperty(e,o):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=o))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,o){"use strict";o.d(e,"a",function(){return a});o(9);var r=o(13),n=o(11),i=o(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=n.c,a=Object(r.a)(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let o in t)o in e||e._createPropertyAccessor(o)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,o){let r=this.__data[t],n=this._shouldPropertyChange(t,e,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(t,e,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,o))}_shouldPropertiesChange(t,e,o){return Boolean(e)}_propertiesChanged(t,e,o){}_shouldPropertyChange(t,e,o){return o!==e&&(o==o||e==e)}attributeChangedCallback(t,e,o,r){e!==o&&this._attributeToProperty(t,o),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,o,r)}_attributeToProperty(t,e,o){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[t]||t;this[n]=this._deserializeValue(e,o||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,o){this.__serializing=!0,o=arguments.length<3?this[t]:o,this._valueToNodeAttribute(this,o,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,o){const r=this._serializeValue(e);"class"!==o&&"name"!==o&&"slot"!==o||(t=Object(i.a)(t)),void 0===r?t.removeAttribute(o):t.setAttribute(o,r)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}})},function(t,e,o){"use strict";o.d(e,"a",function(){return c});o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(t,e,o){return{index:t,removed:e,addedCount:o}}const n=0,i=1,s=2,a=3;function l(t,e,o,l,c,u){let h,p=0,m=0,f=Math.min(o-e,u-c);if(0==e&&0==c&&(p=function(t,e,o){for(let r=0;r<o;r++)if(!d(t[r],e[r]))return r;return o}(t,l,f)),o==t.length&&u==l.length&&(m=function(t,e,o){let r=t.length,n=e.length,i=0;for(;i<o&&d(t[--r],e[--n]);)i++;return i}(t,l,f-p)),c+=p,u-=m,(o-=m)-(e+=p)==0&&u-c==0)return[];if(e==o){for(h=r(e,[],0);c<u;)h.removed.push(l[c++]);return[h]}if(c==u)return[r(e,[],o-e)];let _=function(t){let e=t.length-1,o=t[0].length-1,r=t[e][o],l=[];for(;e>0||o>0;){if(0==e){l.push(s),o--;continue}if(0==o){l.push(a),e--;continue}let c,d=t[e-1][o-1],u=t[e-1][o],h=t[e][o-1];(c=u<h?u<d?u:d:h<d?h:d)==d?(d==r?l.push(n):(l.push(i),r=d),e--,o--):c==u?(l.push(a),e--,r=u):(l.push(s),o--,r=h)}return l.reverse(),l}(function(t,e,o,r,n,i){let s=i-n+1,a=o-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let o=1;o<s;o++)for(let i=1;i<a;i++)if(d(t[e+i-1],r[n+o-1]))l[o][i]=l[o-1][i-1];else{let t=l[o-1][i]+1,e=l[o][i-1]+1;l[o][i]=t<e?t:e}return l}(t,e,o,l,c,u));h=void 0;let b=[],y=e,v=c;for(let t=0;t<_.length;t++)switch(_[t]){case n:h&&(b.push(h),h=void 0),y++,v++;break;case i:h||(h=r(y,[],0)),h.addedCount++,y++,h.removed.push(l[v]),v++;break;case s:h||(h=r(y,[],0)),h.addedCount++,y++;break;case a:h||(h=r(y,[],0)),h.removed.push(l[v]),v++}return h&&b.push(h),b}function c(t,e){return l(t,0,t.length,e,0,e.length)}function d(t,e){return t===e}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},,function(t,e,o){"use strict";o.d(e,"a",function(){return r}),o.d(e,"b",function(){return n});const r="/employee-list",n="/employee-new"},,function(t,e,o){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let r,n=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame(function(){i?i(t):(n||(n=new Promise(t=>{r=t}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),n.then(function(){t&&t()}))})}o.d(e,"a",function(){return u});const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let c=null,d=null;class u{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,s(d))}addCustomStyle(t){t[a]||(t[a]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const o=t[e];if(o[l])continue;const r=this.getStyleForCustomStyle(o);if(r){const t=r.__appliedElement||r;c&&c(t),o[l]=t}}return t}}u.prototype.addCustomStyle=u.prototype.addCustomStyle,u.prototype.getStyleForCustomStyle=u.prototype.getStyleForCustomStyle,u.prototype.processStyles=u.prototype.processStyles,Object.defineProperties(u.prototype,{transformCallback:{get:()=>c,set(t){c=t}},validateCallback:{get:()=>d,set(t){let e=!1;d||(e=!0),d=t,e&&this.enqueueDocumentValidation()}}})},,function(t,e,o){"use strict";o(37),o(59);const r=document.createElement("template");r.innerHTML='<custom-style><style>@font-face { font-family: \'lumo-icons\'; src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\'); font-weight: normal; font-style: normal; } html { --lumo-icons-align-center: "\\ea01"; --lumo-icons-align-left: "\\ea02"; --lumo-icons-align-right: "\\ea03"; --lumo-icons-angle-down: "\\ea04"; --lumo-icons-angle-left: "\\ea05"; --lumo-icons-angle-right: "\\ea06"; --lumo-icons-angle-up: "\\ea07"; --lumo-icons-arrow-down: "\\ea08"; --lumo-icons-arrow-left: "\\ea09"; --lumo-icons-arrow-right: "\\ea0a"; --lumo-icons-arrow-up: "\\ea0b"; --lumo-icons-bar-chart: "\\ea0c"; --lumo-icons-bell: "\\ea0d"; --lumo-icons-calendar: "\\ea0e"; --lumo-icons-checkmark: "\\ea0f"; --lumo-icons-chevron-down: "\\ea10"; --lumo-icons-chevron-left: "\\ea11"; --lumo-icons-chevron-right: "\\ea12"; --lumo-icons-chevron-up: "\\ea13"; --lumo-icons-clock: "\\ea14"; --lumo-icons-cog: "\\ea15"; --lumo-icons-cross: "\\ea16"; --lumo-icons-download: "\\ea17"; --lumo-icons-dropdown: "\\ea18"; --lumo-icons-edit: "\\ea19"; --lumo-icons-error: "\\ea1a"; --lumo-icons-eye: "\\ea1b"; --lumo-icons-eye-disabled: "\\ea1c"; --lumo-icons-menu: "\\ea1d"; --lumo-icons-minus: "\\ea1e"; --lumo-icons-ordered-list: "\\ea1f"; --lumo-icons-phone: "\\ea20"; --lumo-icons-photo: "\\ea21"; --lumo-icons-play: "\\ea22"; --lumo-icons-plus: "\\ea23"; --lumo-icons-redo: "\\ea24"; --lumo-icons-reload: "\\ea25"; --lumo-icons-search: "\\ea26"; --lumo-icons-undo: "\\ea27"; --lumo-icons-unordered-list: "\\ea28"; --lumo-icons-upload: "\\ea29"; --lumo-icons-user: "\\ea2a"; }</style></custom-style>',document.head.appendChild(r.content)},,function(t,e,o){"use strict";o.d(e,"a",function(){return r});const r=t=>(class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),"theme"===t&&this._setTheme(o)}})},,function(t,e,o){"use strict";o.d(e,"a",function(){return n});var r=o(77);o(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=function(t){let e;return e="function"==typeof t?t:n.Class(t),customElements.define(e.is,e),e};n.Class=r.a},,function(t,e,o){"use strict";o.d(e,"a",function(){return s});o(108);var r=o(45),n=o(7),i=new Set;const s={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(i.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():n.j||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(r.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(i.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?i.delete(this):i.add(this)}}},,function(t,e,o){"use strict";o.d(e,"a",function(){return d});var r=o(17),n=o(40),i=o(27),s=o(75),a=o(28),l=o(5),c=o(44);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(a.a)(Object(s.a)(Object(i.a)(Object(n.a)(r.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(c.a)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(c.a)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(d.is,d)},,,,function(t,e,o){"use strict";o.d(e,"a",function(){return r});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const r=t=>(class extends t{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");null!==t&&(this.value=t),this.addEventListener("focus",t=>this._setFocused(!0),!0),this.addEventListener("blur",t=>this._setFocused(!1),!0),this.addEventListener("mousedown",t=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("keyup",t=>this._onKeyup(t))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){t?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(t){t?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(t){t?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(t){/^( |SpaceBar|Enter)$/.test(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this._setActive(!0))}_onKeyup(t){this.hasAttribute("active")&&(this._setActive(!1),this.click())}})},function(t,e,o){"use strict";o.d(e,"a",function(){return s});var r=o(51),n=o(19),i=o(11);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const s=t=>(class extends t{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected)"]}ready(){super.ready(),this.addEventListener("keydown",t=>this._onKeydown(t)),this.addEventListener("click",t=>this._onClick(t)),this._observer=new r.a(this,t=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(t,e,o){if(t){this.setAttribute("aria-orientation",e||"vertical"),this.items.forEach(t=>{e?t.setAttribute("orientation",e):t.removeAttribute("orientation"),t.updateStyles()}),this._setFocusable(o);const r=t[o];t.forEach(t=>t.selected=t===r),r&&!r.disabled&&this._scrollToItem(o)}}get focused(){return this.getRootNode().activeElement}_filterItems(t){return t.filter(t=>t._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey)return;const e=this._filterItems(t.composedPath())[0];let o;e&&!e.disabled&&(o=this.items.indexOf(e))>=0&&(this.selected=o)}_searchKey(t,e){this._searchReset=n.a.debounce(this._searchReset,i.d.after(500),()=>this._searchBuf=""),this._searchBuf+=e.toLowerCase();this.items.some(t=>0===t.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=e.toLowerCase());const o=1===this._searchBuf.length?t+1:t;return this._getAvailableIndex(o,1,t=>!t.disabled&&0===t.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}_onKeydown(t){if(t.metaKey||t.ctrlKey)return;const e=t.key.replace(/^Arrow/,""),o=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(e)&&1===e.length){const t=this._searchKey(o,e);return void(t>=0&&this._focus(t))}let r,n;this._vertical&&"Up"===e||!this._vertical&&"Left"===e?(n=-1,r=o-1):this._vertical&&"Down"===e||!this._vertical&&"Right"===e?(n=1,r=o+1):"Home"===e?(n=1,r=0):"End"===e&&(n=-1,r=this.items.length-1),(r=this._getAvailableIndex(r,n,t=>!t.disabled))>=0&&(this._focus(r),t.preventDefault())}_getAvailableIndex(t,e,o){const r=this.items.length;for(let n=0;"number"==typeof t&&n<r;n++,t+=e||1){if(t<0?t=r-1:t>=r&&(t=0),o(this.items[t]))return t}return-1}_setFocusable(t){t=this._getAvailableIndex(t,1,t=>!t.disabled);const e=this.items[t]||this.items[0];this.items.forEach(t=>t.tabIndex=t===e?0:-1)}_focus(t){const e=this.items[t];this.items.forEach(t=>t.focused=t===e),this._setFocusable(t),this._scrollToItem(t),e.focus()}focus(){this._observer&&this._observer.flush();const t=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);t&&t.focus()}get _scrollerElement(){}_scrollToItem(t){const e=this.items[t];if(!e)return;const o=this._vertical?["top","bottom"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[t+1]||e).getBoundingClientRect(),i=(this.items[t-1]||e).getBoundingClientRect();let s=0;n[o[1]]>=r[o[1]]?s=n[o[1]]-r[o[1]]:i[o[0]]<=r[o[0]]&&(s=i[o[0]]-r[o[0]]),this._scroll(s)}get _vertical(){return"horizontal"!==this.orientation}_scroll(t){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=t}})},function(t,e,o){"use strict";o.d(e,"b",function(){return r}),o.d(e,"a",function(){return n});const r=t=>{window.addEventListener("vaadin-router-location-changed",t)},n=t=>{window.dispatchEvent(new CustomEvent("vaadin-router-go",{detail:{pathname:t}}))}},,function(t,e,o){"use strict";var r=o(63),n=(o(96),o(118),o(9),o(57)),i=o(33),s=o(40),a=o(7),l=o(1),c=o(61);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const d=Object(s.a)(Object(i.b)(Object(n.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.h)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,o,r){this.mutableData=!0}connectedCallback(){Object(c.a)()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});o(110);var u=o(17),h=o(41),p=o(19),m=o(23),f=o(11),_=o(3);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class b extends u.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=p.a.debounce(this.__renderDebouncer,f.c,()=>this.__render()),Object(m.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(l.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(l.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Object(c.a)()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Object(m.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Object(l.a)(this).parentNode;if(t){if(!this.__ctor){let t=Object(l.a)(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Object(l.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=Object(h.b)(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(_.g)(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Object(l.a)(this).previousSibling!==e[e.length-1])for(let o,r=0;r<e.length&&(o=e[r]);r++)Object(l.a)(t).insertBefore(o,this)}}else this.__instance=new this.__ctor,Object(l.a)(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(l.a)(t[0]).parentNode;if(e){e=Object(l.a)(e);for(let o,r=0;r<t.length&&(o=t[r]);r++)e.removeChild(o)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(b.is,b);var y=o(13),v=o(85),g=o(54);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let w=Object(y.a)(t=>{let e=Object(g.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let o=e.path;if(o==JSCompiler_renameProperty("items",this)){let o=e.base||[],r=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),r){let t=Object(v.a)(o,r);this.__applySplices(t)}this.__lastItems=o,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let o=0;o<t.length;o++){let r=t[o];e.forEach((t,o)=>{t<r.index||(t>=r.index+r.removed.length?e.set(o,t+r.addedCount-r.removed.length):e.set(o,-1))});for(let t=0;t<r.addedCount;t++){let o=r.index+t;e.has(this.items[o])&&e.set(this.items[o],o)}}this.__updateLinks();let o=0;e.forEach((t,r)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,e.delete(r)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((o,r)=>{e==t++&&this.deselect(r)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let o;this.__selectedMap.delete(t),this.multi&&(o=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(u.a);class C extends w{static get is(){return"array-selector"}static get template(){return null}}customElements.define(C.is,C);o(37),o(119),o(5);o.d(e,"a",function(){return O});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const O=Object(r.a)(HTMLElement).prototype},,function(t,e,o){"use strict";var r=o(17),n=o(41),i=o(19),s=o(23),a=o(33),l=o(3),c=o(11),d=o(1),u=o(61);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h=Object(a.b)(r.a);class p extends h{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),Object(u.a)()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(d.a)(Object(d.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=Object(n.b)(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let o=this.__instances;for(let r,n=0;n<o.length&&(r=o[n]);n++)r.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,o){if(Object(l.e)(this.as,e)){let r=t[this.itemsIndexAs];e==this.as&&(this.items[r]=o);let n=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,e);this.notifyPath(n,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,o=this.__getMethodHost();return function(){return o[e].apply(o,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let o=0;o<e.length;o++)0===t.indexOf(e[o])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=i.a.debounce(this.__renderDebouncer,e>0?c.d.after(e):c.c,t.bind(this)),Object(s.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(s.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let o=0;o<t.length;o++)e[o]=o;this.__filterFn&&(e=e.filter((e,o,r)=>this.__filterFn(t[e],o,r))),this.__sortFn&&e.sort((e,o)=>this.__sortFn(t[e],t[o]));const o=this.__itemsIdxToInstIdx={};let r=0;const n=Math.min(e.length,this.__limit);for(;r<n;r++){let n=this.__instances[r],i=e[r],s=t[i];o[i]=r,n?(n._setPendingProperty(this.as,s),n._setPendingProperty(this.indexAs,r),n._setPendingProperty(this.itemsIndexAs,i),n._flushProperties()):this.__insertInstance(s,r,i)}for(let t=this.__instances.length-1;t>=r;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const o=Object(d.a)(e.root);for(let t=0;t<e.children.length;t++){let r=e.children[t];o.appendChild(r)}return e}__attachInstance(t,e){let o=this.__instances[t];e.insertBefore(o.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,o){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=o,new this.__ctor(r)}__insertInstance(t,e,o){let r=this.__pool.pop();r?(r._setPendingProperty(this.as,t),r._setPendingProperty(this.indexAs,e),r._setPendingProperty(this.itemsIndexAs,o),r._flushProperties()):r=this.__stampInstance(t,e,o);let n=this.__instances[e+1],i=n?n.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(r.root,i),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let o=t.slice(6),r=o.indexOf("."),n=r<0?o:o.substring(0,r);if(n==parseInt(n,10)){let t=r<0?"":o.substring(r+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[n],s=this.__instances[i];if(s){let o=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(o,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(n.a)(this.template,t)}}customElements.define(p.is,p)},,function(t,e,o){"use strict";o(49),o(71);var r=o(5);const n=r.a`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);var i=o(17),s=o(40),a=o(27),l=o(75),c=o(28);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(c.a)(Object(l.a)(Object(a.a)(Object(s.a)(i.a))))){static get template(){return r.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.10"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(t){this._storedName=t}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const t=this.getAttribute("name");t&&(this.name=t),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const t=this.shadowRoot.querySelector('[part~="label"]'),e=t.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(e)?t.setAttribute("empty",""):t.removeAttribute("empty")}_isAssignedNodesEmpty(t){return 0===t.length||1==t.length&&t[0].nodeType==Node.TEXT_NODE&&""===t[0].textContent.trim()}_checkedChanged(t){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",t)}_indeterminateChanged(t){t?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",t=>{this.__interactionsAllowed(t)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>{this.__interactionsAllowed(t)&&32===t.keyCode&&(t.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",t=>{this.__interactionsAllowed(t)&&32===t.keyCode&&(t.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(t){return!this.disabled&&"a"!==t.target.localName}_handleClick(t){this.__interactionsAllowed(t)&&(this.indeterminate?(this.indeterminate=!1,t.preventDefault(),this._toggleChecked()):t.composedPath()[0]!==this._nativeCheckbox&&(t.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(d.is,d)},,,,,function(t,e,o){"use strict";o(49),o(73),o(65),o(71),o(67);const r=o(5).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},function(t,e,o){"use strict";o.d(e,"a",function(){return n});var r=o(41);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n={templatize(t,e){this._templatizerTemplate=t,this.ctor=Object(r.b)(t,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(t){return new this.ctor(t)},modelForElement(t){return Object(r.a)(this._templatizerTemplate,t)}}},function(t,e,o){"use strict";o.d(e,"a",function(){return i});var r=o(33);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n;n=r.a._mutablePropertyChange;const i={properties:{mutableData:Boolean},_shouldPropertyChange(t,e,o){return n(this,t,e,o,this.mutableData)}}},function(t,e,o){"use strict";o(112)},,function(t,e,o){"use strict";o.r(e),function(t){o(123);const e=function(t,e){if("string"!=typeof e)throw"Parameter selectors is not a string";let o=t,r=e.split("::shadowRoot");for(let[t,e]of r.entries())if(t>0&&(o=o.shadowRoot),o&&(o=o.querySelector(e)),t<r.length-1&&!o)return null;return o};Element.prototype.querySelectorShadowDom=function(t){return e(this,t)},Document.prototype.querySelectorShadowDom=function(t){return e(this,t)},t.exports={querySelectorShadowDom:e}}.call(this,o(86)(t))},function(t,e,o){"use strict";var r=o(17),n=o(5),i=o(7);o(49),o(65),o(67);const s=n.a`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      [part="navbar"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      }

      :host(:not([overlay])) [part="drawer"] {
        border-right: 1px solid var(--lumo-contrast-10pct);
      }

      :host([overlay]) [part="drawer"] {
        background: var(--lumo-base-color);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        opacity: 1;
      }

      [part] ::slotted(h2),
      [part] ::slotted(h3),
      [part] ::slotted(h4) {
        margin-top: var(--lumo-space-xs) !important;
        margin-bottom: var(--lumo-space-xs) !important;
      }

      @supports (-webkit-backdrop-filter: blur(1px)) {
        [part="navbar"] {
          /* TODO(jouni): should use a Lumo color, but we don’t have a suitable one */
          background: rgba(255, 255, 255, 0.8) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
          -webkit-backdrop-filter: blur(24px);
        }

        :host([overlay]) [part="drawer"] {
          /* TODO(jouni): should use a Lumo color, but we don’t have a suitable one */
          background: rgba(255, 255, 255, 0.9);
          -webkit-backdrop-filter: blur(24px);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);o(37);const a=document.createElement("template");a.innerHTML="<custom-style><style>/* stylelint-disable length-zero-no-unit */ /* Use units so that the values can be used in calc() */ html { --safe-area-inset-top: constant(safe-area-inset-top, 0px); --safe-area-inset-right: constant(safe-area-inset-right, 0px); --safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px); --safe-area-inset-left: constant(safe-area-inset-left, 0px); } @supports (padding-left: env(safe-area-inset-left)) { html { --safe-area-inset-top: env(safe-area-inset-top, 0px); --safe-area-inset-right: env(safe-area-inset-right, 0px); --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px); --safe-area-inset-left: env(safe-area-inset-left, 0px); } } /* stylelint-enable */</style></custom-style>",document.head.appendChild(a.content);const l=function(){if(window.navigator.userAgent.match(/iPhone|iPad/i)){const t=window.innerHeight,e=window.innerWidth>t,o=document.documentElement.clientHeight;e&&o>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",o-t+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}};l(),window.addEventListener("resize",l);var c=o(53),d=o(27),u=o(28),h=o(51);
/**
@license
Vaadin App Layout
Copyright (C) 2019 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class p extends(Object(u.a)(Object(d.a)(r.a))){static get template(){return n.a`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        --vaadin-app-layout-transition: 200ms;
        transition: padding var(--vaadin-app-layout-transition);
        --vaadin-app-layout-touch-optimized: false;
        --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
        --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
        padding-top: var(--vaadin-app-layout-navbar-offset-top);
        padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
        padding-left: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([no-anim]) {
        --vaadin-app-layout-transition: none !important;
      }

      :host([drawer-opened]) {
        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
      }

      :host([overlay]) {
        --vaadin-app-layout-drawer-offset-left: 0;
        --vaadin-app-layout-navbar-offset-left: 0;
      }

      :host(:not([no-scroll])) [content] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [content] {
        height: 100%;
      }

      @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
        :host {
          --vaadin-app-layout-touch-optimized: true;
        }
      }

      [part="navbar"] {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        left: 0;
        transition: left var(--vaadin-app-layout-transition);
        padding-top: var(--safe-area-inset-top);
        padding-left: var(--safe-area-inset-left);
        padding-right: var(--safe-area-inset-right);
        z-index: 1;
      }

      :host([primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        left: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([primary-section="drawer"]) [part="drawer"] {
        top: 0;
      }

      [part="navbar"][bottom] {
        top: auto;
        bottom: 0;
        padding-bottom: var(--safe-area-inset-bottom);
      }

      [part="drawer"] {
        position: fixed;
        top: var(--vaadin-app-layout-navbar-offset-top, 0);
        right: auto;
        bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
        left: var(--vaadin-app-layout-navbar-offset-left, 0);
        transition: transform var(--vaadin-app-layout-transition);
        transform: translateX(-100%);
        max-width: 90%;
        width: 16em;
        box-sizing: border-box;
        padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
        outline: none;
      }

      :host([drawer-opened]) [part="drawer"] {
        transform: translateX(0%);
        touch-action: manipulation;
      }

      [part="backdrop"] {
        background-color: #000;
        opacity: 0.3;
      }

      :host(:not([drawer-opened])) [part="backdrop"] {
        opacity: 0;
      }

      :host([overlay]) [part="backdrop"] {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        transition: opacity var(--vaadin-app-layout-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([overlay]) [part="drawer"] {
        top: 0;
        bottom: 0;
      }

      :host([overlay]) [part="drawer"],
      :host([overlay]) [part="backdrop"] {
        z-index: 1;
      }

      :host([drawer-opened][overlay]) [part="backdrop"] {
        pointer-events: auto;
        touch-action: manipulation;
      }

      :host([drawer-opened]:not([overlay])) {
        padding-left: var(--vaadin-app-layout-drawer-offset-left);
      }

      @media (max-width: 800px),
      (max-height: 600px) {
        :host {
          --vaadin-app-layout-drawer-overlay: true;
        }

        [part="drawer"] {
          width: 20em;
        }
      }
    </style>
    <div part="navbar">
      <slot name="navbar"></slot>
    </div>
    <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
    <div part="drawer" id="drawer">
      <slot name="drawer" id="drawerSlot"></slot>
    </div>
    <div content="">
      <slot></slot>
    </div>
    <div part="navbar" bottom="" hidden="">
      <slot name="navbar-bottom"></slot>
    </div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"2.0.2"}static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"_primarySectionObserver"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"_drawerOpenedObserver"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.HTMLImports&&!window.HTMLImports.useNative?Array.from(this.querySelectorAll("*")).forEach(t=>{t.localName.indexOf("-")>-1&&window.customElements.whenDefined(t.localName).then(()=>{Object(c.b)(this,this._afterFirstRender)})}):Object(c.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._navbarChildObserver=new h.a(this.$.drawerSlot,t=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),this.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}_primarySectionObserver(t){-1!==["navbar","drawer"].indexOf(t)||this.set("primarySection","navbar")}_drawerOpenedObserver(){const t=this.$.drawer;t.removeAttribute("tabindex"),this.overlay&&this.drawerOpened&&(t.setAttribute("tabindex",0),t.focus())}_isShadyCSS(){return window.ShadyCSS&&!window.ShadyCSS.nativeCss}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.shadowRoot.querySelector("[part=drawer]");0===t?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const t=this.shadowRoot.querySelector('[part="navbar"]').getBoundingClientRect(),e=this.shadowRoot.querySelector('[part="navbar"][bottom]').getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-navbar-offset-size":t.height+"px","--_vaadin-app-layout-navbar-offset-size-bottom":e.height+"px"}):(this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",t.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",e.height+"px"));const o=this.$.drawer.getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-offset-size":o.width+"px","--vaadin-app-layout-drawer-offset-left":"var(--_vaadin-app-layout-drawer-offset-size)"}):this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",o.width+"px")}_updateOverlayMode(){const t="true"==this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),e=this.$.drawer;!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","drawer")):(this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label"))}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){let e;return this._isShadyCSS()?(window.ShadyCSS.styleSubtree(this),e=window.ShadyCSS.getComputedStyleValue(this,t)):e=getComputedStyle(this).getPropertyValue(t),(e||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t="true"==this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),e=this.shadowRoot.querySelector('[part="navbar"][bottom]'),o=this.querySelectorAll('[slot*="navbar"]');o.length>0&&Array.from(o).forEach(e=>{e.getAttribute("slot").indexOf("touch-optimized")>-1&&(e.__touchOptimized=!0),t&&e.__touchOptimized?e.setAttribute("slot","navbar-bottom"):e.setAttribute("slot","navbar")}),t?e.removeAttribute("hidden"):e.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(c.a)(this,()=>{this.removeAttribute("no-anim"),this._isShadyCSS()&&window.ShadyCSS.styleSubtree(this)})}}customElements.define(p.is,p);o(117),o(92);const m=n.a`<dom-module id="lumo-drawer-toggle" theme-for="vaadin-drawer-toggle">
  <template>
    <style include="lumo-button">
      :host {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
        min-width: auto;
        margin: 0 var(--lumo-space-s);
        padding: 0;
        background: transparent;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: inherit;
        height: auto;
        width: auto;
        background: transparent;
        top: auto;
      }

      [part=icon]::before {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        content: var(--lumo-icons-menu);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(m.content);var f=o(100);
/**
@license
Vaadin Drawer Toggle
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class _ extends f.a{static get template(){return n.a`
    <style>
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        position: relative;
        outline: none;
        height: 24px;
        width: 24px;
        padding: 4px;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: absolute;
        top: 8px;
        height: 3px;
        width: 24px;
        background-color: #000;
      }

      [part="icon"]::after,
      [part="icon"]::before {
        content: "";
      }

      [part="icon"]::after {
        top: 6px;
      }

      [part="icon"]::before {
        top: 12px;
      }
    </style>
    <slot>
      <div part="icon"></div>
    </slot>
    <button id="button" type="button" aria-label\$="[[ariaLabel]]"></button>
`}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:String}}constructor(){super(),this.addEventListener("click",t=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}}customElements.define(_.is,_);o(73),o(71);const b=n.a`<dom-module id="lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>
      :host {
        box-sizing: border-box;
        padding: 0.5rem 0.75rem;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        font-weight: 500;
        opacity: 1;
        color: var(--lumo-contrast-60pct);
        transition: 0.15s color, 0.2s transform;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transform-origin: 50% 100%;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        min-width: var(--lumo-size-m);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host(:not([orientation="vertical"])) {
        text-align: center;
      }

      :host([orientation="vertical"]) {
        transform-origin: 0% 50%;
        padding: 0.25rem 1rem;
        min-height: var(--lumo-size-m);
        min-width: 0;
      }

      :host(:hover),
      :host([focus-ring]) {
        color: var(--lumo-body-text-color);
      }

      :host([selected]) {
        color: var(--lumo-primary-text-color);
        transition: 0.6s color;
      }

      :host([active]:not([selected])) {
        color: var(--lumo-primary-text-color);
        transition-duration: 0.1s;
      }

      :host::before,
      :host::after {
        content: "";
        position: absolute;
        display: var(--_lumo-tab-marker-display, block);
        bottom: 0;
        left: 50%;
        width: var(--lumo-size-s);
        height: 2px;
        background-color: var(--lumo-contrast-60pct);
        border-radius: var(--lumo-border-radius) var(--lumo-border-radius) 0 0;
        transform: translateX(-50%) scale(0);
        transform-origin: 50% 100%;
        transition: 0.14s transform cubic-bezier(.12, .32, .54, 1);
        will-change: transform;
      }

      :host([selected])::before,
      :host([selected])::after {
        background-color: var(--lumo-primary-color);
      }

      :host([orientation="vertical"])::before,
      :host([orientation="vertical"])::after {
        left: 0;
        bottom: 50%;
        transform: translateY(50%) scale(0);
        width: 2px;
        height: var(--lumo-size-xs);
        border-radius: 0 var(--lumo-border-radius) var(--lumo-border-radius) 0;
        transform-origin: 100% 50%;
      }

      :host::after {
        box-shadow: 0 0 0 4px var(--lumo-primary-color);
        opacity: 0.15;
        transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
      }

      :host([selected])::before,
      :host([selected])::after {
        transform: translateX(-50%) scale(1);
        transition-timing-function: cubic-bezier(.12, .32, .54, 1.5);
      }

      :host([orientation="vertical"][selected])::before,
      :host([orientation="vertical"][selected])::after {
        transform: translateY(50%) scale(1);
      }

      :host([selected]:not([active]))::after {
        opacity: 0;
      }

      :host(:not([orientation="vertical"])) ::slotted(a[href]) {
        justify-content: center;
      }

      :host ::slotted(a) {
        display: flex;
        width: 100%;
        align-items: center;
        height: 100%;
        margin: -0.5rem -0.75rem;
        padding: 0.5rem 0.75rem;
        outline: none;

        /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
        text-decoration: none !important;
        color: inherit !important;
      }

      :host ::slotted(iron-icon) {
        margin: 0 4px;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      :host ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25rem;
        box-sizing: border-box !important;
      }

      :host ::slotted(iron-icon:first-child) {
        margin-left: 0;
      }

      :host ::slotted(iron-icon:last-child) {
        margin-right: 0;
      }

      :host([theme~="icon-on-top"]) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.5rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(a) {
        flex-direction: column;
        align-items: center;
        margin-top: -0.25rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(iron-icon) {
        margin: 0;
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        opacity: 1;
        color: var(--lumo-disabled-text-color);
      }

      /* Focus-ring */

      :host([focus-ring]) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
        border-radius: var(--lumo-border-radius);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(b.content);var y=o(104);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class v extends(Object(u.a)(Object(d.a)(Object(y.a)(r.a)))){static get template(){return n.a`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"3.0.4"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(t){const e=this.hasAttribute("active");if(super._onKeyup(t),e){const t=this.querySelector("a");t&&t.click()}}}customElements.define(v.is,v);const g=n.a`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([orientation="vertical"])) {
        box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
        position: relative;
        min-height: var(--lumo-size-l);
      }

      :host([orientation="horizontal"]) [part="tabs"] ::slotted(vaadin-tab:not([theme~="icon-on-top"])) {
        justify-content: center;
      }

      :host([orientation="vertical"]) {
        box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0 0.75rem;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        width: 100%;
        margin: 0.5rem 0;
      }

      [part="forward-button"],
      [part="back-button"] {
        position: absolute;
        z-index: 1;
        font-family: lumo-icons;
        color: var(--lumo-tertiary-text-color);
        font-size: var(--lumo-icon-size-m);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5em;
        height: 100%;
        transition: 0.2s opacity;
        top: 0;
      }

      [part="forward-button"]:hover,
      [part="back-button"]:hover {
        color: inherit;
      }

      [part="forward-button"] {
        right: 0;
      }

      [part="forward-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      [part="back-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      /* Tabs overflow */

      [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: none;
        -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
        /* For IE11 */
        min-height: var(--lumo-size-l);
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="tabs"] {
          mask-image: var(--_lumo-tabs-overflow-mask-image);
        }
      }

      /* Horizontal tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
      }

      /* Vertical tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
      }

      /* End overflowing */
      :host([overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
      }

      /* Start overflowing */
      :host([overflow~="start"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
      }

      :host [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: var(--lumo-space-m);
      }

      /* Centered */

      :host([theme~="centered"][orientation="horizontal"]) [part="tabs"] {
        justify-content: center;
      }

      /* Small */

      :host([theme~="small"]),
      :host([theme~="small"]) [part="tabs"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="small"]) [part="tabs"] ::slotted(vaadin-tab) {
        font-size: var(--lumo-font-size-s);
      }

      /* Minimal */

      :host([theme~="minimal"]) {
        box-shadow: none;
        /* This doesn't work with ShadyCSS */
        --_lumo-tab-marker-display: none;
      }

      /* Workaround for the above ShadyCSS issue */
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::before,
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::after {
        display: none;
      }

      /* Hide-scroll-buttons */

      :host([theme~="hide-scroll-buttons"]) [part="back-button"],
      :host([theme~="hide-scroll-buttons"]) [part="forward-button"] {
        display: none;
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
      }

      /* Equal-width tabs */
      :host([theme~="equal-width-tabs"]) {
        flex: auto;
      }

      :host([theme~="equal-width-tabs"]) [part="tabs"] ::slotted(vaadin-tab) {
        flex: 1 0 0%;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(g.content);var w=o(105),C=o(98),O=o(77);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const x=/Apple.* Version\/(9|10)/.test(navigator.userAgent);class A extends(Object(u.a)(Object(w.a)(Object(d.a)(Object(O.b)([C.a],r.a))))){static get template(){return n.a`
    <style>
      :host {
        display: flex;
        align-items: center;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        display: block;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        flex-grow: 1;
        display: flex;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
      @-moz-document url-prefix() {
        :host([orientation="horizontal"]) [part="tabs"] {
          overflow: hidden;
        }
      }

      :host([orientation="horizontal"]) [part="tabs"]::-webkit-scrollbar {
        display: none;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="back-button"],
      [part="forward-button"] {
        pointer-events: none;
        opacity: 0;
        cursor: default;
      }

      :host([overflow~="start"]) [part="back-button"],
      :host([overflow~="end"]) [part="forward-button"] {
        pointer-events: auto;
        opacity: 1;
      }

      [part="back-button"]::after {
        content: '◀';
      }

      [part="forward-button"]::after {
        content: '▶';
      }

      :host([orientation="vertical"]) [part="back-button"],
      :host([orientation="vertical"]) [part="forward-button"] {
        display: none;
      }
    </style>
    <div on-click="_scrollBack" part="back-button"></div>

    <div id="scroll" part="tabs">
      <slot></slot>
    </div>

    <div on-click="_scrollForward" part="forward-button"></div>
`}static get is(){return"vaadin-tabs"}static get version(){return"3.0.4"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Object(c.a)(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(this._scrollOffset)}_scrollBack(){this._scroll(-1*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this._scrollerElement.scrollLeft;let e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;e-=1;let o=t>0?"start":"";(o+=t+this._scrollOffset<e?" end":"")?this.setAttribute("overflow",o.trim()):this.removeAttribute("overflow"),this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(x&&this.root){const t="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(e=>{e.style[t]="visible",e.style[t]=""})}}}customElements.define(A.is,A);o(120);var S=o(79);Object(S.a)(n.a`
  <custom-style>
    <style include="lumo-color">
      html {
        background-image: linear-gradient(
          var(--lumo-contrast-5pct),
          var(--lumo-contrast-5pct)
        );
      }
    </style>
  </custom-style>
`),Object(S.a)(n.a`
  <dom-module id="layout-styles" theme-for="vaadin-app-layout">
    <template>
      <style>
        [part='drawer'] {
          background: var(--lumo-base-color);
        }

        [part='navbar'] {
          color: var(--lumo-primary-contrast-color);
          background: var(--lumo-primary-color);
        }
      </style>
    </template>
  </dom-module>
`),Object(S.a)(n.a`
  <dom-module id="drawer-styles" theme-for="vaadin-drawer-toggle">
    <template>
      <style>
        :host {
          margin: 0 var(--lumo-space-m);
          color: currentColor;
        }
      </style>
    </template>
  </dom-module>
`);var P=o(88),E=o(106);class k extends r.a{static get template(){return n.a`
      <style include="lumo-typography">
        :host {
          display: block;
        }
        [main-title] {
          padding: var(--lumo-space-m) 0;
          font-size: var(--lumo-font-size-xl);
          line-height: var(--lumo-line-height-m);
          font-weight: 400;
        }
        section {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .dark-mode {
          margin: auto var(--lumo-space-m) var(--lumo-space-m);
        }
      </style>

      <vaadin-app-layout>
        <!-- Navbar content -->
        <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
        <div main-title slot="navbar">
          <slot></slot>
        </div>

        <!-- Drawer content -->
        <section slot="drawer">
          <vaadin-tabs
            selected="{{selected}}"
            orientation="vertical"
            aria-controls="mainContent"
          >
            <vaadin-tab>
              <a href="/employee-list">Employee list</a>
            </vaadin-tab>
            <vaadin-tab>
              <a href="/employee-new">New employee</a>
            </vaadin-tab>
          </vaadin-tabs>
          <vaadin-checkbox checked="{{dark}}" class="dark-mode">
            Use dark mode
          </vaadin-checkbox>
        </section>

        <!-- Main content -->
        <main aria-live="polite" id="mainContent">
          <!-- view content -->
        </main>
      </vaadin-app-layout>
    `}static get is(){return"starter-app"}static get properties(){return{selected:Number,dark:{type:Boolean,observer:"_darkChanged"}}}constructor(){super(),Object(i.g)(!0)}ready(){super.ready(),this.removeAttribute("unresolved"),Object(E.b)(this.__onRouteChanged.bind(this)),Promise.all([o.e(17),o.e(11)]).then(o.bind(null,230)).then(t=>{t.init(this.shadowRoot.querySelector("main"))})}_darkChanged(t,e){t?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")}__onRouteChanged(t){switch(t.detail.location.pathname){case P.a:this.selected=0;break;case P.b:this.selected=1;break;default:this.selected=null}}}customElements.define(k.is,k)}]);
//# sourceMappingURL=main.es5.c3dec4ce.js.map