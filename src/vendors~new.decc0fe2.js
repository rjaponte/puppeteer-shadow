(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{132:function(e,t,i){"use strict";i.d(t,"a",function(){return _});i(107);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var s={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},o={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},a={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},n=/[a-z0-9*]/,r=/U\+/,l=/^arrow/,d=/^space(bar)?/,h=/^escape$/;function c(e,t){var i="";if(e){var s=e.toLowerCase();" "===s||d.test(s)?i="space":h.test(s)?i="esc":1==s.length?t&&!n.test(s)||(i=s):i=l.test(s)?s.replace("arrow",""):"multiply"==s?"*":s}return i}function u(e,t){return e.key?c(e.key,t):e.detail&&e.detail.key?c(e.detail.key,t):(i=e.keyIdentifier,a="",i&&(i in s?a=s[i]:r.test(i)?(i=parseInt(i.replace("U+","0x"),16),a=String.fromCharCode(i).toLowerCase()):a=i.toLowerCase()),a||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):o[e]),t}(e.keyCode)||"");var i,a}function m(e,t){return u(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function p(e){return e.trim().split(" ").map(function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(e,t){var i=t.split(":"),s=i[0],o=i[1];return s in a?(e[a[s]]=!0,e.hasModifiers=!0):(e.key=s,e.event=o||"keydown"),e},{combo:e.split(":").shift()})}(e)})}const _={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=p(t),s=0;s<i.length;++s)if(m(i[s],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1})},_addKeyBinding:function(e,t){p(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)},this)},_unlistenKeyEventListeners:function(){for(var e,t,i,s;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],s=e[2],t.removeEventListener(i,s)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var s=e[i][0],o=e[i][1];if(m(s,t)&&(this._triggerKeyHandler(s,o,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var s=Object.create(e);s.keyboardEvent=i;var o=new CustomEvent(e.event,{detail:s,cancelable:!0});this[t].call(this,o),o.defaultPrevented&&i.preventDefault()}}},135:function(e,t,i){"use strict";var s=i(16),o=i(39),a=i(52),n=i(50),r=i(26);const l=Element.prototype,d=l.matches||l.matchesSelector||l.mozMatchesSelector||l.msMatchesSelector||l.oMatchesSelector||l.webkitMatchesSelector,h={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return d.call(e,"input, select, textarea, button, object")?d.call(e,":not([disabled])"):d.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&d.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const i=e,s=this._normalizedTabIndex(i);let o,a=s>0;s>=0&&t.push(i),o="slot"===i.localName?i.assignedNodes({flatten:!0}):(i.shadowRoot||i).children;for(let e=0;e<o.length;e++)a=this._collectTabbableNodes(o[e],t)||a;return a},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const i=Math.ceil(t/2),s=this._sortByTabIndex(e.slice(0,i)),o=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(s,o)},_mergeSortByTabIndex:function(e,t){const i=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)},_hasLowerTabOrder:function(e,t){const i=Math.max(e.tabIndex,0),s=Math.max(t.tabIndex,0);return 0===i||0===s?s>i:i>s}};var c=i(4);i.d(t,"a",function(){return v});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let u=0;const m={},p=e=>{const t=m[e]||_(e);return document.createElement(t)},_=e=>{const t=`vaadin-overlay-content-${++u}`,i=document.createElement("template"),s=document.createElement("style");s.textContent=":host { display: block; }"+e,i.content.appendChild(s),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);const o=(()=>(class extends HTMLElement{static get is(){return t}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}}))();return customElements.define(o.is,o),m[e]=t,t};class v extends(Object(r.a)(s.a)){static get template(){return c.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new n.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(a.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const i=`__${e}Handler`,s=()=>{t(),this.removeEventListener("animationend",s),delete this[i]};this[i]=s,this.addEventListener("animationend",s)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.setAttribute("opening","");const e=()=>{this.removeAttribute("opening"),document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.modeless||this._enterModalState()};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this.setAttribute("closing","");const e=()=>{if(this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this._exitModalState(),document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.removeAttribute("closing"),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof v)}get _last(){return this===v.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),v.__attachedInstances.forEach(e=>{e===this||e.hasAttribute("opening")||e.hasAttribute("closing")||(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=v.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(o.b)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const i=e._templateRoot||(e._templateRoot=e.getRootNode());if(i!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(i.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(i.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"))if(e){const e=p(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,s){e!==t?this.template=void 0:i!==s&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,s,o,a){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const n=this._oldOwner!==i||this._oldModel!==s;this._oldModel=s,this._oldOwner=i;const r=this._oldInstanceProps!==o||this._oldTemplate!==e;this._oldInstanceProps=o,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const d=this._oldOpened!==a;if(this._oldOpened=a,e&&r)this._stampOverlayTemplate(e,o);else if(t&&(l||d||n)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);a&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return h.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}}customElements.define(v.is,v)},137:function(e,t,i){"use strict";i(113),i(99)},138:function(e,t,i){"use strict";i(48),i(64),i(70),i(66);const s=document.createElement("template");s.innerHTML='<dom-module id="lumo-overlay"><template><style>:host { top: var(--lumo-space-m); right: var(--lumo-space-m); bottom: var(--lumo-space-m); left: var(--lumo-space-m); /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */ /* stylelint-disable-next-line */ outline: 0px solid transparent; } [part="overlay"] { background-color: var(--lumo-base-color); background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct)); border-radius: var(--lumo-border-radius-m); box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m); color: var(--lumo-body-text-color); font-family: var(--lumo-font-family); font-size: var(--lumo-font-size-m); font-weight: 400; line-height: var(--lumo-line-height-m); letter-spacing: 0; text-transform: none; -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } [part="content"] { padding: var(--lumo-space-xs); } [part="backdrop"] { background-color: var(--lumo-shade-20pct); animation: 0.2s lumo-overlay-backdrop-enter both; will-change: opacity; } @keyframes lumo-overlay-backdrop-enter { 0% { opacity: 0; } } :host([closing]) [part="backdrop"] { animation: 0.2s lumo-overlay-backdrop-exit both; } @keyframes lumo-overlay-backdrop-exit { 100% { opacity: 0; } } @keyframes lumo-overlay-dummy-animation { 0% { opacity: 1; } 100% { opacity: 1; } }</style></template></dom-module>',document.head.appendChild(s.content)},139:function(e,t,i){"use strict";i(64),i(70),i(138);const s=document.createElement("template");s.innerHTML='<dom-module id="lumo-menu-overlay-core"><template><style>:host([opening]), :host([closing]) { animation: 0.14s lumo-overlay-dummy-animation; } [part="overlay"] { will-change: opacity, transform; } :host([opening]) [part="overlay"] { animation: 0.1s lumo-menu-overlay-enter ease-out both; } @keyframes lumo-menu-overlay-enter { 0% { opacity: 0; transform: translateY(-4px); } } :host([closing]) [part="overlay"] { animation: 0.1s lumo-menu-overlay-exit both; } @keyframes lumo-menu-overlay-exit { 100% { opacity: 0; } }</style></template></dom-module><dom-module id="lumo-menu-overlay"><template><style include="lumo-overlay lumo-menu-overlay-core">/* Small viewport (bottom sheet) styles */ /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(s.content)},140:function(e,t,i){"use strict";i.d(t,"a",function(){return s});
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const s=class{toString(){return""}}},141:function(e,t,i){"use strict";i(107);var s=i(95);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},147:function(e,t,i){"use strict";i(91),i(72),i(64),i(70),i(66);var s=i(4);const o=s.a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=i(26),r=i(101);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(r.a)(Object(n.a)(a.a))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.1"}constructor(){super(),this.value}}customElements.define(l.is,l)},154:function(e,t,i){"use strict";i(48),i(64),i(70),i(147);const s=i(4).a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content)},155:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var s=i(10),o=i(18),a=i(22),n=i(39),r=i(156),l=i(132),d=i(50),h=i(140);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const c=e=>(class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}ready(){super.ready(),this.addEventListener("focusout",e=>{const t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this._closeOnBlurIsPrevented||this.close()}),this._lastCommittedValue=this.value,r.a.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._overlaySelectedItemChanged.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-closed",this.close.bind(this)),this.addEventListener("vaadin-combo-box-dropdown-opened",this._onOpened.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this)),this.addEventListener("click",this._onClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._onOverlayTouchAction.bind(this)),this.addEventListener("touchend",e=>{this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}),this._observer=new d.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(e=>e._render())}_setTemplateFromNodes(e){this._itemTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(e,t,i,s){e!==t?this._itemTemplate=void 0:i!==s&&(this.renderer=void 0)}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=e,this._oldRenderer=t}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.hasAttribute("focused")||this.$.overlay.touchDevice||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(e){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();-1!==t.indexOf(this._clearElement)||"clear-button"===t[0].getAttribute("part")?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){this._isEventKey(e,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"enter")?this._onEnter(e):this._isEventKey(e,"esc")&&this._onEscape(e)}_isEventKey(e,t){return l.a.keyboardEventMatchesKeys(e,t)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(e,t){const i=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&i&&i.setSelectionRange)try{i.setSelectionRange(e,t)}catch(e){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_onEnter(e){this.opened&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this.close(),e.preventDefault(),e.stopPropagation())}_onEscape(e){this.opened&&(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("click",e=>{this.$.overlay.touchDevice&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this.close()}_onOpened(){Object(a.b)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){if(this.opened&&this.close(),this.$.overlay._items&&this._focusedIndex>-1){const e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else if(this.allowCustomValue){const e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(e),!e.defaultPrevented){const e=this._inputElementValue;this._selectItemForValue(e),this.value=e}}else this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):"";this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput(e))}_filterFromInput(e){this.opened||e.__fromClearButton||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e,t){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e,t){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){if(this._isValidValue(e)){let t;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):t=this.selectedItem,!t&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value)}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t})}_itemsOrPathsChanged(e,t,i){if(void 0!==e.value&&("items"===e.path||"items.splices"===e.path)){this.filteredItems=this.items?this.items.slice(0):this.items;const e=this._indexOfValue(this.value,this.items);this._focusedIndex=e;const t=e>-1&&this.items[e];t&&(this.selectedItem=t)}}_filteredItemsChanged(e,t,i){void 0!==e.value&&("filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay()))}_filterItems(e,t){return e?e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)):e}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e)}_repositionOverlay(){this.__repositionOverlayDebouncer=o.a.debounce(this.__repositionOverlayDebouncer,s.d.after(500),()=>{this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.notifyResize(),Object(a.b)()})}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(let i=0;i<t.length;i++)if(this._getItemValue(t[i])===e)return i;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof h.a||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){const e=this._itemTemplate||this._getRootTemplate();e&&(this._TemplateClass=Object(n.b)(e,this,{instanceProps:this._instanceProps,forwardHostProp:function(e,t){const i=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(i,i=>{i._itemTemplateInstance&&(i._itemTemplateInstance.set(e,t),i._itemTemplateInstance.notifyPath(e,t,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,e=>"TEMPLATE"===e.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}})},156:function(e,t,i){"use strict";i.d(t,"a",function(){return a});i(107);var s=i(95),o=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const a=Object(s.a)({_template:o.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){a.instance||(a.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});a.instance=null,a.requestAvailability=function(){a.instance||(a.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(a.instance)}},157:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var s=i(55),o=i(12);
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
const a="disable-upgrade",n=Object(o.a)(e=>{const t=Object(s.a)(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat(a)}attributeChangedCallback(e,t,i,s){e==a?!this.__dataEnabled&&null==i&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,i,s)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute(a)||super.connectedCallback()}_enableProperties(){this.hasAttribute(a)||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}})},158:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var s=i(140);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const o=e=>(class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new s.a}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){e&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",e=>{const t=e.detail.index;if(void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}})}_dataProviderFilterChanged(){this.dataProvider&&this.opened&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof s.a:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},i=(s,o)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,s.length,...s);else{const e=[];e.splice(t.page*t.pageSize,s.length,...s),this.filteredItems=e}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.size=o,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1),0===e&&this.__repositionOverlayDebouncer&&s.length>(this.__maxRenderedItems||0)&&(setTimeout(()=>this.__repositionOverlayDebouncer.flush()),this.__maxRenderedItems=s.length)}};this._pendingRequests[e]=i,this.dataProvider(t,i)}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this.opened?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t}_pageSizeChanged(e,t){if(Math.floor(e)!==e||0===e)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t})}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported")}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}})},159:function(e,t,i){"use strict";i.d(t,"a",function(){return d});var s=i(16),o=i(38),a=i(26),n=i(74),r=i(29),l=i(4);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(r.a)(Object(n.a)(Object(a.a)(Object(o.a)(s.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="radio"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="radio"] {
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
      <span part="radio">
        <input type="radio" checked="{{checked::change}}" disabled\$="[[disabled]]" role="presentation" on-change="_onChange" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-radio-button"}static get version(){return"1.2.3"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},name:String,value:{type:String,value:"on"}}}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),/^(disabled|checked)$/.test(e)){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.shadowRoot&&parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10)){const e="-webkit-backface-visibility";this.shadowRoot.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}ready(){super.ready(),this.setAttribute("role","radio"),this._addListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.setAttribute("aria-checked",e)}_addListeners(){this._addEventListenerToNode(this,"down",e=>{this.disabled||this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",e=>{this.removeAttribute("active"),this.checked||this.disabled||(this.checked=!0)}),this.addEventListener("keydown",e=>{this.disabled||32!==e.keyCode||(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.disabled||32!==e.keyCode||(e.preventDefault(),this.click(),this.removeAttribute("active"))})}click(){this.shadowRoot.querySelector("input").click()}get focusElement(){return this.shadowRoot.querySelector("input")}_onChange(e){const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}customElements.define(d.is,d)},171:function(e,t,i){"use strict";var s=i(16),o=(i(107),i(132),i(97)),a=i(149),n=i(115),r=i(95),l=i(43),d=i(114),h=i(10),c=i(18),u=i(22),m=i(4),p=i(2),_=(i(39),navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)),v=_&&_[1]>=8;Object(r.a)({_template:m.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[d.a,o.a,a.a,n.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(l.a)(Object(l.a)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems(function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0})||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems(function(i,s){t<this._scrollBottom&&(e=s),t+=this._getPhysicalSizeIncrement(i)})}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,h.a),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,h.a)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var s=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+s,this._physicalStart=this._physicalStart+s,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var o=this._getReusables(i);i?(this._physicalTop=o.physicalTop,this._virtualStart=this._virtualStart+o.indexes.length,this._physicalStart=this._physicalStart+o.indexes.length):(this._virtualStart=this._virtualStart-o.indexes.length,this._physicalStart=this._physicalStart-o.indexes.length),this._update(o.indexes,i?null:o.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),h.c)}},_getReusables:function(e){var t,i,s,o=[],a=this._hiddenContentSize*this._ratio,n=this._virtualStart,r=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,h=this._physicalBottom+this._scrollOffset,c=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,i=c-d):(t=this._physicalEnd,this._physicalStart,i=h-u);i-=s=this._getPhysicalSizeIncrement(t),!(o.length>=l||i<=a);)if(e){if(r+o.length+1>=this._virtualCount)break;if(d+s>=c-this._scrollOffset)break;o.push(t),d+=s,t=(t+1)%l}else{if(n-o.length<=0)break;if(d+this._physicalSize-s<=u)break;o.push(t),d-=s,t=0===t?l-1:t-1}return{indexes:o,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,i;this._ensureTemplatized();var s=new Array(e);for(t=0;t<e;t++)i=this.stamp(null),s[t]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return s},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var s=t-this._physicalCount,o=Math.round(.5*this._physicalCount);if(!(s<0)){if(s>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(s));for(var n=0;n<s;n++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+s,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+s),this._update(),this._templateCost=(window.performance.now()-a)/s,o=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===o||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,o)),h.b):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,o),h.c))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),Object(u.b)(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,h.a);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some(function(e){return e.addedCount>0||e.removed.length>0})){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some(function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd},this);this._isClientFull()&&!i||this._debounce("_render",this._render,h.a)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var i,s,o,a=(e=e.slice(6)).indexOf(".");-1===a&&(a=e.length);var n=this.modelForElement(this._offscreenFocusedItem),r=parseInt(e.substring(0,a),10);(i=this._isIndexRendered(r))?(s=this._getPhysicalIndex(r),o=this.modelForElement(this._physicalItems[s])):n&&(o=n),o&&o[this.indexAs]===r&&(e=e.substring(a+1),e=this.as+(e?"."+e:""),o._setPendingPropertyOrPath(e,t,!1,!0),o._flushProperties&&o._flushProperties(!0),i&&(this._updateMetrics([s]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach(function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}},this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var i,s,o,a;if(2===arguments.length&&t){for(a=0;a<t.length;a++)if(i=t[a],s=this._computeVidx(i),null!=(o=e.call(this,i,s)))return o}else{for(i=this._physicalStart,s=this._virtualStart;i<this._physicalCount;i++,s++)if(null!=(o=e.call(this,i,s)))return o;for(i=0;i<this._physicalStart;i++,s++)if(null!=(o=e.call(this,i,s)))return o}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems(function(e,t){var i=this._physicalItems[e],s=this.items&&this.items[t];if(null!=s){var o=this.modelForElement(i);o.__key__=null,this._forwardProperty(o,this.as,s),this._forwardProperty(o,this.selectedAs,this.$.selector.isSelected(s)),this._forwardProperty(o,this.indexAs,t),this._forwardProperty(o,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[o.__key__]=e,o._flushProperties&&o._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")},e)},_updateMetrics:function(e){Object(u.b)();var t=0,i=0,s=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems(function(e,s){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0},e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((o*s+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems(function(t,s){var o=s%this._itemsPerRow,a=Math.floor(o*this._itemWidth+i);this._isRTL&&(a*=-1),this.translate3d(a+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(s)&&(e+=this._rowHeight)})}else this._iterateItems(function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]})},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!v&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(u.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,s=0,o=this._hiddenContentSize;i<e&&s<=o;)s+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},h.a)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems(function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var i,s,o=Object(l.a)(e).path[0],a=this._getActiveElement(),n=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==o.localName&&"button"!==o.localName&&"select"!==o.localName&&(i=t.tabIndex,t.tabIndex=-100,s=a?a.tabIndex:-1,t.tabIndex=i,a&&n!==a&&n.contains(a)&&-100!==s||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,i=this._physicalItems[this._getPhysicalIndex(e)],s=this.modelForElement(i);s.tabIndex=-100,-100===i.tabIndex&&(t=i),t||(t=Object(l.a)(i).querySelector('[tabindex="-100"]')),s.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var i=this.modelForElement(t),s=this.modelForElement(this._offscreenFocusedItem);i[this.as]===s[this.as]?(this._focusBackfillItem=t,i.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),i=this.modelForElement(this._focusedItem),s=null!==this._offscreenFocusedItem,o=this._focusedVirtualIndex;t&&(i===t?this._isIndexVisible(o)||this.scrollToIndex(o):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),t.tabIndex=0,o=t[this.indexAs],this._focusedVirtualIndex=o,this._focusedPhysicalIndex=this._getPhysicalIndex(o),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],s&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=c.a.debounce(this._debouncers[e],i,t.bind(this)),Object(u.a)(this._debouncers[e])},_forwardProperty:function(e,t,i){e._setPendingProperty(t,i)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(i){i&&this.modelForElement(i).forwardHostProp(e,t)},this)},_notifyInstancePropV2:function(e,t,i){if(Object(p.e)(this.as,t)){var s=e[this.indexAs];t==this.as&&(this.items[s]=i),this.notifyPath(Object(p.i)(this.as,"items."+s,t),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,i){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),i)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(i){i&&this.modelForElement(i).notifyPath(e,t,!0)},this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(i){i&&(this.modelForElement(i)[e]=t)},this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return Object(l.a)(e?e.root:document).activeElement}});var f=i(26);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class g extends(Object(f.a)(s.a)){static get template(){return m.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){const e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}}_render(){if(!this.renderer)return;const e={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,e)}_rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML=""),e&&(this._oldRenderer=e,this._render()))}_updateLabel(e,t){void 0===t&&this.$.content&&!this.renderer&&(this.$.content.textContent=e)}_updateTemplateInstanceVariable(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&(i[e]=t)}}customElements.define(g.is,g);var b=i(157),A=i(135),y=i(76);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class w extends A.a{static get is(){return"vaadin-combo-box-overlay"}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector(['[part~="content"]']);t.parentNode.insertBefore(e,t)}}customElements.define(w.is,w);class x extends(Object(b.a)(Object(y.b)(o.a,s.a))){static get template(){return m.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(e){const t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(e){const t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;const t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_setPosition(e){if(this.hidden)return;if(e&&e.target){const t=e.target===document?document.body:e.target,i=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||i!==document.body)return}const t=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(t);const i=this.$.overlay.getBoundingClientRect();this._translateX=t.left-i.left+(this._translateX||0),this._translateY=t.top-i.top+(this._translateY||0)+this._verticalOffset(i,t);const s=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*s)/s,this._translateY=Math.round(this._translateY*s)/s,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.width=this.positionTarget.clientWidth+"px",this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(x.is,x);var E=i(140);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const C=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class I extends class extends s.a{}{static get template(){return m.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:C},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){return e?t:[]}_openedChanged(e,t,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this.$.dropdown.opened=!(!e||!(i||this.$.dropdown.opened||t&&t.length))}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(e){this._patchWheelOverScrolling()}_setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector)return;const e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";const t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}_maxOverlayHeight(e){const t=Math.min(window.innerHeight,document.body.scrollHeight-document.body.scrollTop);return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(t-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,i){return!(e instanceof E.a)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}_onItemClick(e){e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation&&this._stopPropagation(e.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t){return e instanceof E.a&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;let i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();if(void 0===t)return;let i=e;e>this._selector.lastVisibleIndex-1?(this._selector.scrollToIndex(e),i=e-t+1):e>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));const s=this._selector._getPhysicalIndex(e),o=this._selector._physicalItems[s];if(!o)return;const a=o.getBoundingClientRect(),n=this._scroller.getBoundingClientRect(),r=a.bottom-n.bottom+this._viewportTotalPaddingBottom;r>0&&(this._scroller.scrollTop+=r)}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){const e=this._selector;e.addEventListener("wheel",t=>{const i=e._scroller||e.scrollTarget,s=0===i.scrollTop,o=i.scrollHeight-i.scrollTop-i.clientHeight<=1;s&&t.deltaY<0?t.preventDefault():o&&t.deltaY>0&&t.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(e){e="number"==typeof e?this._items[e]:e,this._selector.selectedItem!==e&&this._selector.selectItem(e)}_preventDefault(e){e.cancelable&&e.preventDefault()}_stopPropagation(e){e.stopPropagation()}_hidden(e){return!(this.loading||this._items&&this._items.length)}}customElements.define(I.is,I)},173:function(e,t,i){"use strict";i(48),i(64),i(70);var s=i(4);const o=s.a`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=i(26),r=i(102),l=i(29);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(l.a)(Object(r.a)(Object(n.a)(a.a)))){static get template(){return s.a`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.1.1"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list")}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}}customElements.define(d.is,d)},176:function(e,t,i){"use strict";i(48),i(64),i(70),i(138);var s=i(4);const o=s.a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);i(135),i(139);const a=s.a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content)},178:function(e,t,i){"use strict";i(48),i(70);const s=i(4).a`<dom-module id="lumo-radio-button" theme-for="vaadin-radio-button">
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

      [part="radio"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: 50%;
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        will-change: transform;
        line-height: 1.2;
        transform: translateZ(0); /* Workaround IE11 jumpiness */
      }

      /* Used for activation "halo" */
      [part="radio"]::before {
        /* Needed to align the radio-button nicely on the baseline */
        content: "\\2003";
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
        will-change: transform, opacity;
      }

      /* Used for the dot */
      [part="radio"]::after {
        content: "";
        width: 0;
        height: 0;
        border: 3px solid var(--lumo-primary-contrast-color);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: 0.25s transform;
        will-change: transform;
        background-clip: content-box;
      }

      :host([checked]) [part="radio"] {
        background-color: var(--lumo-primary-color);
      }

      :host([checked]) [part="radio"]::after {
        transform: translate(-50%, -50%) scale(1);
      }

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="radio"] {
        background-color: var(--lumo-contrast-30pct);
      }

      :host([active]) [part="radio"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="radio"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="radio"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }

      :host([focus-ring]) [part="radio"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="radio"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="radio"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      /* IE11 only */
      ::-ms-backdrop,
      [part="radio"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);i(159)},185:function(e,t,i){"use strict";i(107),i(180);var s=i(95),o=i(43),a=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:a.a`
    <style>
      :host {
        display: block;
      }
    </style>

    <!-- This form is used to collect the elements that should be submitted -->
    <slot></slot>

    <!-- This form is used for submission -->
    <form id="helper" action\$="[[action]]" method\$="[[method]]" enctype\$="[[enctype]]"></form>
`,is:"iron-form",properties:{allowRedirect:{type:Boolean,value:!1},headers:{type:Object,value:function(){return{}}},withCredentials:{type:Boolean,value:!1}},attached:function(){this._form||(this._form=Object(o.a)(this).querySelector("form"),this._form?(this._init(),this.async(this._saveInitialValues.bind(this),1)):this._nodeObserver=Object(o.a)(this).observeNodes(function(e){for(var t=0;t<e.addedNodes.length;t++)"FORM"===e.addedNodes[t].tagName&&(this._form=e.addedNodes[t],this._init(),Object(o.a)(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)}.bind(this)))},detached:function(){this._nodeObserver&&(Object(o.a)(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)},_init:function(){this._form.addEventListener("submit",this.submit.bind(this)),this._form.addEventListener("reset",this.reset.bind(this)),this._defaults=this._defaults||new WeakMap,this._saveInitialValues()},saveResetValues:function(){this._saveInitialValues(!0)},_saveInitialValues:function(e){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var s=t[i];if(!this._defaults.has(s)||e){var o={value:s.value};"checked"in s&&(o.checked=s.checked),"invalid"in s&&(o.invalid=s.invalid),this._defaults.set(s,o)}}},validate:function(){if(!this._form)return!1;if(""===this._form.getAttribute("novalidate"))return!0;for(var e,t=this._form.checkValidity(),i=this._getValidatableElements(),s=0;e=i[s],s<i.length;s++){var o=e;o.validate&&(t=!!o.validate()&&t)}return t},submit:function(e){if(e&&e.preventDefault(),this._form)if(this.validate()){this.$.helper.textContent="";var t=this.serializeForm();if(this.allowRedirect){for(var i in t)this.$.helper.appendChild(this._createHiddenElement(i,t[i]));this.$.helper.action=this._form.getAttribute("action"),this.$.helper.method=this._form.getAttribute("method")||"GET",this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.$.helper.submit(),this.fire("iron-form-submit")}else this._makeAjaxRequest(t)}else this.fire("iron-form-invalid")},reset:function(e){if(e&&e.preventDefault(),this._form)if(e&&"reset"===e.type&&e.target===this._form){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var s=t[i];if(this._defaults.has(s)){var o=this._defaults.get(s);for(var a in o)s[a]=o[a]}}this.fire("iron-form-reset")}else this._form.reset()},serializeForm:function(){for(var e=this._getSubmittableElements(),t={},i=0;i<e.length;i++)for(var s=this._serializeElementValues(e[i]),o=0;o<s.length;o++)this._addSerializedElement(t,e[i].name,s[o]);return t},_handleFormResponse:function(e){this.fire("iron-form-response",e.detail)},_handleFormError:function(e){this.fire("iron-form-error",e.detail)},_makeAjaxRequest:function(e){this.request||(this.request=document.createElement("iron-ajax"),this.request.addEventListener("response",this._handleFormResponse.bind(this)),this.request.addEventListener("error",this._handleFormError.bind(this))),this.request.url=this._form.getAttribute("action"),this.request.method=this._form.getAttribute("method")||"GET",this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.request.withCredentials=this.withCredentials,this.request.headers=this.headers,"POST"===this._form.method.toUpperCase()?this.request.body=e:this.request.params=e,this.fire("iron-form-presubmit",{},{cancelable:!0}).defaultPrevented||(this.request.generateRequest(),this.fire("iron-form-submit",e))},_getValidatableElements:function(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function(){return this._findElements(this._form,!1,!1)},_findElements:function(e,t,i,s){s=s||[];for(var a=Object(o.a)(e).querySelectorAll("*"),n=0;n<a.length;n++)i||"slot"!==a[n].localName&&"content"!==a[n].localName?this._searchSubmittable(s,a[n],t):this._searchSubmittableInSlot(s,a[n],t);return s},_searchSubmittableInSlot:function(e,t,i){for(var s=Object(o.a)(t).getDistributedNodes(),a=0;a<s.length;a++)if(s[a].nodeType!==Node.TEXT_NODE){this._searchSubmittable(e,s[a],i);for(var n=Object(o.a)(s[a]).querySelectorAll("*"),r=0;r<n.length;r++)this._searchSubmittable(e,n[r],i)}},_searchSubmittable:function(e,t,i){this._isSubmittable(t,i)?e.push(t):t.root&&this._findElements(t.root,i,!0,e)},_isSubmittable:function(e,t){return!e.disabled&&(t?e.name||"function"==typeof e.validate:e.name)},_serializeElementValues:function(e){var t=e.tagName.toLowerCase();return"button"===t||"input"===t&&("submit"===e.type||"reset"===e.type)?[]:"select"===t?this._serializeSelectValues(e):"input"===t?this._serializeInputValues(e):e._hasIronCheckedElementBehavior&&!e.checked?[]:[e.value]},_serializeSelectValues:function(e){for(var t=[],i=0;i<e.options.length;i++)e.options[i].selected&&t.push(e.options[i].value);return t},_serializeInputValues:function(e){var t=e.type.toLowerCase();return("checkbox"!==t&&"radio"!==t||e.checked)&&"file"!==t?[e.value]:[]},_createHiddenElement:function(e,t){var i=document.createElement("input");return i.setAttribute("type","hidden"),i.setAttribute("name",e),i.setAttribute("value",t),i},_addSerializedElement:function(e,t,i){void 0===e[t]?e[t]=i:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(i))}})},186:function(e,t,i){"use strict";i(137)},187:function(e,t,i){"use strict";i(147)},188:function(e,t,i){"use strict";i(173)},189:function(e,t,i){"use strict";i(178)},201:function(e,t,i){"use strict";i(72),i(64),i(139);var s=i(4);const o=s.a`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);i(48),i(70),i(66),i(137);const a=s.a`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);const n=s.a`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(n.content);i(91),i(129),i(127);const r=s.a`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);var l=i(16),d=i(38),h=(i(141),i(26)),c=i(93),u=i(74),m=i(135),p=i(157);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class _ extends(Object(p.a)(m.a)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(_.is,_);var v=i(132),f=i(156);i(99),i(109);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const g=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var i=4-t,s=new Date(e.getTime()+24*i*3600*1e3),o=new Date(0,0);o.setFullYear(s.getFullYear());var a=s.getTime()-o.getTime(),n=Math.round(a/864e5);return Math.floor(n/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,i)=>{return i?t?Math.abs(e.getTime()-i.getTime())<Math.abs(t.getTime()-e.getTime())?i:t:i:t})}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class b extends(Object(h.a)(Object(d.a)(l.a))){static get template(){return s.a`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return g._dateEquals(e,t)}_dateAllowed(e,t,i){return g._dateAllowed(e,t,i)}_isDisabled(e,t,i){var s=new Date(0,0);s.setFullYear(e.getFullYear()),s.setMonth(e.getMonth()),s.setDate(1);var o=new Date(0,0);return o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()+1),o.setDate(0),!(t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0)&&(!this._dateAllowed(s,t,i)&&!this._dateAllowed(o,t,i))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,s){if(void 0!==e&&void 0!==t&&void 0!==i&&void 0!==s)return e=this._applyFirstDayOfWeek(e,s),t=this._applyFirstDayOfWeek(t,s),e=e.map((e,i)=>({weekDay:e,weekDayShort:t[i]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);for(var s=[],o=i.getMonth(),a=e.getMonth();i.getMonth()===a||i.getMonth()===o;)s.push(i.getMonth()===a?new Date(i.getTime()):null),this._dateAdd(i,1);return s}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),g._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,i)=>i.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentation"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,i){if(void 0!==e&&void 0!==t&&void 0!==i)return this._dateAllowed(e,t,i)?"false":"true"}}customElements.define(b.is,b);var A=i(10),y=i(18),w=i(22),x=i(39),E=i(52);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class C extends l.a{static get template(){return s.a`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Object(x.b)(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(i=>{[].forEach.call(i.children,i=>{i._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.root.querySelector(".buffer").offsetTop,i=e>this._buffers[1].translateY+this.itemHeight+t,s=e<this._buffers[0].translateY+this.itemHeight+t;(i||s)&&(this._translateBuffer(s),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=y.a.debounce(this._debouncerScrollFinish,A.d.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();const e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=y.a.debounce(this._debouncerUpdateClones,A.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(var i=0;i<this.bufferSize;i++){const i=document.createElement("div");i.style.height=this.itemHeight+"px",i.instance={};const s="vaadin-infinite-scroller-item-content-"+(C._contentIndex=C._contentIndex+1||0),o=document.createElement("slot");o.setAttribute("name",s),o._itemWrapper=i,t.appendChild(o),i.setAttribute("slot",s),this.appendChild(i),Object(w.b)(),setTimeout(()=>{this._isVisible(i,e)&&this._ensureStampedInstance(i)},1)}},this),setTimeout(()=>{Object(E.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(i=>{e.instance.set(i,t[i])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,s)=>{if(!i.updated){var o=this._firstIndex+this.bufferSize*s;[].forEach.call(i.children,(i,s)=>{const a=i._itemWrapper;e&&!this._isVisible(a,t)||(a.instance.index=o+s)}),i.updated=!0}},this)}_isVisible(e,t){var i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(C.is,C);i(36);const I=document.createElement("template");I.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay"><template><style>:host { align-items: flex-start; justify-content: flex-start; } :host([bottom-aligned]) { justify-content: flex-end; } :host([right-aligned]) { align-items: flex-end; } :host([right-aligned][dir="rtl"]) { align-items: flex-start; } [part="overlay"] { display: flex; flex: auto; } [part~="content"] { flex: auto; }</style></template></dom-module>',document.head.appendChild(I.content);var S=i(42);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class k extends(Object(h.a)(Object(c.a)(Object(d.a)(l.a)))){static get template(){return s.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(S.a)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(S.d)(this.$.scrollers,"pan-y"),f.a.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];g._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(g._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e){if(e){var t=this._differenceInMonths(e,this._originDate),i=this.$.monthScroller.position>t,s=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,o=this.$.monthScroller.position+s-1<t;i?this._scrollToPosition(t,!0):o&&this._scrollToPosition(t-s+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=y.a.debounce(this._debouncer,A.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,i){return e?t(g._extractDateParts(e)):i}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var i=t?300:0,s=0,o=this.$.monthScroller.position,a=e=>{var t=e-(s=s||e);if(t<i){var n=((e,t,i,s)=>(e/=s/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t)(t,o,this._targetPosition-o,i);this.$.monthScroller.position=n,window.requestAnimationFrame(a)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(a)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){const e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0;i<t.length;i++){var s=t[i];if(v.a.keyboardEventMatchesKeys(e,s))return s}}_onKeydown(e){var t=this._currentlyFocusedDate();const i=e.composedPath().indexOf(this.$.todayButton)>=0,s=e.composedPath().indexOf(this.$.cancelButton)>=0,o=!i&&!s;var a=this._eventKey(e);if("tab"===a){e.stopPropagation();const t=this.hasAttribute("fullscreen"),a=e.shiftKey;t?e.preventDefault():a&&o||!a&&s?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):a&&i?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(a)switch(e.preventDefault(),e.stopPropagation(),a){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":o&&this._moveFocusByDays(1);break;case"left":o&&this._moveFocusByDays(-1);break;case"enter":o||s?this._close():i&&this._onTodayTap();break;case"space":if(s)this._close();else if(i)this._onTodayTap();else{var n=this.focusedDate;g._dateEquals(n,this.selectedDate)?(this.selectedDate="",this.focusedDate=n):this.selectedDate=n}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(e){this.focusedDate=e,this._focusedMonthDate=e.getDate()}_focusClosestDate(e){this._focusDate(g._getClosestDate(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);var s=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==s&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusedDate=i:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var i=new Date(0,0);i.setFullYear(e.getFullYear()),"minDate"===t?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this._focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){var i=new Date,s=new Date(0,0);return s.setFullYear(i.getFullYear()),s.setMonth(i.getMonth()),s.setDate(i.getDate()),this._dateAllowed(s,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(k.is,k);var D=i(97),T=i(76);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const P=e=>(class extends(Object(T.b)([D.a],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{const t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{const t=e.split("/"),i=new Date;let s,o=i.getMonth(),a=i.getFullYear();if(3===t.length?(a=parseInt(t[2]),t[2].length<3&&a>=0&&(a+=a<50?2e3:1900),o=parseInt(t[0])-1,s=parseInt(t[1])):2===t.length?(o=parseInt(t[0])-1,s=parseInt(t[1])):1===t.length&&(s=parseInt(t[0])),void 0!==s)return{day:s,month:o,year:a}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_validateInput(_selectedDate, _minDate, _maxDate)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this),Object(S.a)(this,"tap",e=>{const t=e.composedPath().indexOf(this._inputElement);0===e.composedPath().slice(0,t).filter(e=>e.getAttribute&&"clear-button"===e.getAttribute("part")).length&&this.open()}),this.addEventListener("touchend",this._preventDefault.bind(this)),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur())}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){this._overlayInitialized&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var i=new Date(0,0);return i.setFullYear(parseInt(t[1],10)),i.setMonth(parseInt(t[2],10)-1),i.setDate(parseInt(t[3],10)),i}}_isNoInput(e,t,i){return!this._inputElement||e||t||!i.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const t=(e,t="00")=>(t+e).substr((t+e).length-t.length);let i="",s="0000",o=e.getFullYear();return o<0?(o=-o,i="-",s="000000"):e.getFullYear()>=1e4&&(i="+",s="000000"),[i+t(o,s),t(e.getMonth()+1),t(e.getDate())].join("-")}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){if(void 0===e||void 0===t)return;this.__userInputOccurred&&(this.__dispatchChange=!0);const i=e&&t(g._extractDateParts(e)),s=this._formatISO(e);s!==this.value&&(this.validate(i),this.value=s),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._focusedDate=e,this._inputValue=e?i:""}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||(this._inputValue=e?t(g._extractDateParts(e)):""))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,i){if(t){var s=this._parseDate(t);s?g._dateEquals(this[e],s)||(this[e]=s):this.value=i}else this[e]=""}_valueChanged(e,t){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){const e=this._inputElement.getBoundingClientRect(),t=e.top>window.innerHeight/2;if(e.left+this.clientWidth/2>window.innerWidth/2){const t=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=t-e.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=e.left+"px";if(t){const t=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=t-e.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=e.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||g._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=g._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var i=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:i})}e=e.parentElement}return t}_onOverlayClosed(){if(this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"";const t=this.i18n.parseDate(e),i=t&&this._parseDate(`${t.year}-${t.month+1}-${t.day}`);this._isValidDate(i)?this._selectedDate=i:(this._selectedDate=null,this._inputValue=e)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1,this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.validate()}validate(e){return this.invalid=!1,e=void 0!==e?e:this._inputValue,!(this.invalid=!this.checkValidity(e))}checkValidity(e){var t=!e||this._selectedDate&&e===this.i18n.formatDate(g._extractDateParts(this._selectedDate)),i=!this._selectedDate||g._dateAllowed(this._selectedDate,this._minDate,this._maxDate),s=!0;return this._inputElement&&(this._inputElement.checkValidity?s=this._inputElement.checkValidity(e):this._inputElement.validate&&(s=this._inputElement.validate(e))),t&&i&&s}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","enter","esc","tab"],i=0;i<t.length;i++){var s=t[i];if(v.a.keyboardEventMatchesKeys(e,s))return s}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":{const e=this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(e.year+"-"+(e.month+1)+"-"+e.day);this._overlayInitialized&&this._overlayContent.focusedDate&&this._isValidDate(t)&&(this._selectedDate=this._overlayContent.focusedDate),this.close();break}case"esc":this._focusedDate=this._selectedDate,this._close();break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_validateInput(e,t,i){e&&(t||i)&&(this.invalid=!g._dateAllowed(e,t,i))}_onUserInput(e){!this.opened&&this._inputElement.value&&this.open(),this._userInputValueChanged()}_userInputValueChanged(e){if(this.opened&&this._inputValue){const e=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),t=e&&this._parseDate(`${e.year}-${e.month+1}-${e.day}`);this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,g._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,i){t&&!i&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}});i(125);var O=i(29);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class B extends(Object(O.a)(Object(u.a)(Object(h.a)(Object(c.a)(P(Object(d.a)(l.a))))))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"4.0.2"}static get properties(){return{clearButtonVisible:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}ready(){super.ready(),Object(E.a)(this,()=>this._inputElement.validate=()=>{}),this._inputElement.addEventListener("change",()=>{""===this._inputElement.value&&(this.__dispatchChange=!0,this.value="",this.__dispatchChange=!1)})}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}_setClearButtonLabel(e){this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute("aria-label",e)}}customElements.define(B.is,B)},204:function(e,t,i){"use strict";i(91),i(48),i(72),i(64),i(70),i(66),i(129),i(137),i(36);var s=i(4);const o=s.a`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild(o.content);var a=i(16);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/const n=e=>(class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){const s=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",s),this.updateStyles({"--vaadin-progress-value":String(s)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){let s;return e||0==e?t>=i?s=1:(s=(e-t)/(i-t),s=Math.min(Math.max(s,0),1)):s=0,s}});var r=i(26),l=i(29);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(l.a)(Object(r.a)(n(a.a)))){static get template(){return s.a`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.1.2"}}customElements.define(d.is,d);const h=s.a`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(h.content);var c=i(42);i(109),i(99);const u=document.createElement("template");u.innerHTML="<custom-style><style>@font-face { font-family: 'vaadin-upload-icons'; src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff'); font-weight: normal; font-style: normal; }</style></custom-style>",document.head.appendChild(u.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class m extends(Object(r.a)(a.a)){static get template(){return s.a`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(m.is,m);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class p extends(Object(l.a)(Object(r.a)(a.a))){static get template(){return s.a`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.2.2"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),s=Math.max(0,Math.min(3,i-1));return parseFloat((e/Math.pow(t,i)).toFixed(s))+" "+this.i18n.units.size[i]}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(var s=0;s<t.length&&e>0;s++)i[s]=e%t[s],e=Math.floor(e/t[s]);return i}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,s){e.elapsed=s,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(s*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/s/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr(e);let s,o;i.upload.onprogress=a=>{clearTimeout(s);const n=((o=Date.now())-t)/1e3,r=a.loaded,l=a.total,d=~~(r/l*100);e.loaded=r,e.progress=d,e.indeterminate=r<=0||r>=l,e.error?e.indeterminate=e.status=void 0:e.abort||(d<100?(this._setStatus(e,l,r,n),s=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(4==i.readyState){if(clearTimeout(s),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);if(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;0===i.status?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)}};const a=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0}))&&(a.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:a},cancelable:!0}))&&i.send(a))}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var i in e)e.hasOwnProperty(i)&&this.notifyPath(t+i,e[i])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^\.]*$|$/)[0],i=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||i.test(e.type)||i.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){Object(c.c)()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(p.is,p)},205:function(e,t,i){"use strict";i(176),i(154);var s=i(16),o=i(26),a=i(93),n=i(155),r=i(158),l=(i(171),i(4)),d=i(46);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(a.a)(Object(o.a)(Object(r.a)(Object(n.a)(s.a))))){static get template(){return l.a`
    <style>
      :host([opened]) {
        pointer-events: auto;
      }
    </style>

    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this),this.__boundInputValueCommitted=this.__inputValueCommitted.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button"),this._clearElement&&this._clearElement.addEventListener("mousedown",e=>{e.preventDefault(),(this.inputElement._focusableElement||this.inputElement).focus()})}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this.inputElement.addEventListener("change",this.__boundInputValueCommitted),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this.inputElement.removeEventListener("change",this.__boundInputValueCommitted),this._restoreInputBlur()}__inputValueCommitted(e){e.__fromClearButton&&this._clear()}get _propertyForValue(){return Object(d.b)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}}customElements.define(h.is,h);i(127),i(129),i(91);const c=l.a`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(c.content);var u=i(29),m=i(132),p=i(125);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class _ extends p.a{static get is(){return"vaadin-time-picker-text-field"}}customElements.define(_.is,_);var v=i(74);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class f extends(Object(u.a)(Object(v.a)(Object(o.a)(Object(a.a)(s.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part~="toggle-button"] {
        cursor: pointer;
      }

      .input {
        width: 100%;
        min-width: 0;
      }
    </style>
    <vaadin-combo-box-light allow-custom-value="" item-label-path="value" filtered-items="[[__dropdownItems]]" disabled="[[disabled]]" readonly="[[readonly]]" theme\$="[[theme]]">
      <template>
        [[item.label]]
      </template>
      <vaadin-time-picker-text-field class="input" name="[[name]]" invalid="[[invalid]]" autocomplete="off" label="[[label]]" required="[[required]]" disabled="[[disabled]]" prevent-invalid-input="[[preventInvalidInput]]" pattern="[[pattern]]" error-message="[[errorMessage]]" autofocus="[[autofocus]]" placeholder="[[placeholder]]" readonly="[[readonly]]" role="application" aria-live="assertive" min\$="[[min]]" max\$="[[max]]" aria-label\$="[[label]]" clear-button-visible="[[clearButtonVisible]]" i18n="[[i18n]]" theme\$="[[theme]]">
        <span slot="suffix" part="toggle-button" role="button" aria-label\$="[[i18n.selector]]"></span>
      </vaadin-time-picker-text-field>
    </vaadin-combo-box-light>
`}static get is(){return"vaadin-time-picker"}static get version(){return"2.0.1"}static get properties(){return{name:{type:String},value:{type:String,observer:"__valueChanged",notify:!0,value:""},label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},clearButtonVisible:{type:Boolean,value:!1},__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(e=0,t="00")=>(t+e).substr((t+e).length-t.length);let i=`${t(e.hours)}:${t(e.minutes)}`;return void 0!==e.seconds&&(i+=`:${t(e.seconds)}`),void 0!==e.milliseconds&&(i+=`.${t(e.milliseconds,"000")}`),i},parseTime:e=>{const t=new RegExp("^(\\d|[0-1]\\d|2[0-3])(?::(\\d|[0-5]\\d)(?::(\\d|[0-5]\\d)(?:\\.(\\d{1,3}))?)?)?$").exec(e);if(t){if(t[4])for(;t[4].length<3;)t[4]+="0";return{hours:t[1],minutes:t[2],seconds:t[3],milliseconds:t[4]}}},selector:"Time selector",clear:"Clear"})}}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}ready(){super.ready(),this.__dropdownElement.addEventListener("value-changed",e=>this.__onInputChange(e)),this.__inputElement.addEventListener("keydown",this.__onKeyDown.bind(this)),this.__dropdownElement.addEventListener("change",e=>{e.composedPath()[0]!==this.__inputElement&&this.__dispatchChange()})}__validDayDivisor(e){return!e||86400%e==0||e<1&&e%1*1e3%1==0}__onKeyDown(e){if(this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;m.a.keyboardEventMatchesKeys(e,"down")?this.__onArrowPressWithStep(-t):m.a.keyboardEventMatchesKeys(e,"up")&&this.__onArrowPressWithStep(t)}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.__inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=60*(e&&e.hours||0)*60*1e3;return t+=60*(e&&e.minutes||0)*1e3,t+=1e3*(e&&e.seconds||0),t+=e&&e.milliseconds||0}__getSec(e){let t=60*(e&&e.hours||0)*60;return t+=60*(e&&e.minutes||0),t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0}__addStep(e,t,i){0===e&&t<0&&(e=864e5);const s=1e3*t,o=e%s;s<0&&o&&i?e-=o:s>0&&o&&i?e-=o-s:e+=s;var a=Math.floor(e/1e3/60/60);e-=1e3*a*60*60;var n=Math.floor(e/1e3/60);e-=1e3*n*60;var r=Math.floor(e/1e3);return{hours:a<24?a:0,minutes:n,seconds:r,milliseconds:e-=1e3*r}}__updateDropdownItems(e,t,i,s){const o=this.__validateTime(this.__parseISO(t)),a=this.__getSec(o),n=this.__validateTime(this.__parseISO(i)),r=this.__getSec(n);if(this.__adjustValue(a,r,o,n),this.__dropdownItems=this.__generateDropdownList(a,r,s),s!==this.__oldStep){this.__oldStep=s;const e=this.__validateTime(this.__parseISO(this.value));this.__updateValue(e)}this.value&&(this.__dropdownElement.value=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,i){if(i<900||!this.__validDayDivisor(i))return[];const s=[];let o=-(i=i||3600)+e;for(;o+i>=e&&o+i<=t;){const e=this.__validateTime(this.__addStep(1e3*o,i));o+=i;const t=this.i18n.formatTime(e);s.push({label:t,value:t})}return s}__adjustValue(e,t,i,s){const o=this.__getSec(this.__memoValue);o<e?this.__updateValue(i):o>t&&this.__updateValue(s)}__valueChanged(e,t){const i=this.__memoValue=this.__parseISO(e),s=this.__formatISO(i)||"";""===this.value||null===this.value||i?this.value!==s?this.value=s:this.__updateInputValue(i):this.value=t}__onInputChange(e){const t=this.i18n.parseTime(this.__dropdownElement.value),i=this.i18n.formatTime(t)||"";t?this.__dropdownElement.value!==i?this.__dropdownElement.value=i:this.__updateValue(t):this.value="",this.validate()}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this.__dropdownElement.value=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(e){return f.properties.i18n.value().formatTime(e)}__parseISO(e){return f.properties.i18n.value().parseTime(e)}get __inputElement(){return this.__memoInput||(this.__memoInput=this.shadowRoot.querySelector("vaadin-time-picker-text-field"))}get __dropdownElement(){return this.__memoDropdown||(this.__memoDropdown=this.shadowRoot.querySelector("vaadin-combo-box-light"))}get focusElement(){return this.__inputElement}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return this.__inputElement.focusElement.checkValidity()&&(!this.__dropdownElement.value||this.i18n.parseTime(this.__dropdownElement.value))}}customElements.define(f.is,f)},207:function(e,t,i){"use strict";i(72),i(64),i(70),i(91),i(139),i(129),i(127),i(147),i(173);var s=i(4);const o=s.a`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
        flex: auto;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      :host([theme~="align-right"]) [selected] {
        text-align: right;
      }

      :host([theme~="align-center"]) [selected] {
        text-align: center;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }

      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=(i(36),i(26)),r=i(93),l=i(74),d=i(97),h=(i(141),i(29)),c=(i(30),i(135));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const u=document.createElement("template");u.innerHTML='<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay"><template><style>:host { align-items: flex-start; justify-content: flex-start; }</style></template></dom-module>',document.head.appendChild(u.content);class m extends c.a{static get is(){return"vaadin-select-overlay"}}customElements.define(m.is,m);var p=i(125);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/let _;class v extends p.a{static get is(){return"vaadin-select-text-field"}static get template(){if(super.template.content.querySelector('slot[name="input"]'))return super.template;if(!_){_=super.template.cloneNode(!0);const e=document.createElement("slot");e.setAttribute("name","value");const t=_.content.querySelector("input");t.parentElement.replaceChild(e,t),e.appendChild(t)}return _}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(v.is,v);var f=i(50),g=i(76);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const b=document.createElement("template");b.innerHTML="<custom-style><style>@font-face { font-family: \"vaadin-select-icons\"; src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff'); font-weight: normal; font-style: normal; }</style></custom-style>",document.head.appendChild(b.content);class A extends(Object(h.a)(Object(l.a)(Object(n.a)(Object(r.a)(Object(g.b)(d.a,a.a)))))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`}static get is(){return"vaadin-select"}static get version(){return"2.1.5"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,errorMessage:{type:String,value:""},label:{type:String},value:{type:String,value:"",notify:!0,observer:"_valueChanged"},required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._valueElement=this.shadowRoot.querySelector('[part="value"]'),this._toggleElement=this.shadowRoot.querySelector('[part="toggle-button"]'),this._nativeInput=this.focusElement.shadowRoot.querySelector("input"),this._nativeInput.setAttribute("aria-hidden",!0),this._nativeInput.setAttribute("tabindex",-1),this._nativeInput.style.pointerEvents="none",this.focusElement.addEventListener("click",e=>this.opened=!this.readonly),this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e)),this._observer=new f.a(this,e=>this._setTemplateFromNodes(e.addedNodes)),this._observer.flush()}_setTemplateFromNodes(e){const t=Array.from(e).filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=t,this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){const e=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;this._overlayElement._instance&&(this._overlayElement._instance.forwardHostProp=(...t)=>{e.apply(this._overlayElement._instance,t),setTimeout(()=>{this._updateValueSlot()})},this._assignMenuElement())}}render(){this._overlayElement.render(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items)}_removeNewRendererOrTemplate(e,t,i,s){e!==t?this._contentTemplate=void 0:i!==s&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for select content");this._oldTemplate=e,this._oldRenderer=t,t&&(i.setProperties({owner:this,renderer:t}),this.render(),i.content.firstChild&&this._assignMenuElement())}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(e=>"style"!==e.localName)[0],this._menuElement&&(this._menuElement.addEventListener("items-changed",e=>{this._items=this._menuElement.items,this._items.forEach(e=>e.setAttribute("role","option"))}),this._menuElement.addEventListener("selected-changed",e=>this._updateValueSlot()),this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e)),this._menuElement.addEventListener("click",e=>{this.__userInteraction=!0,this.opened=!1},!0),this._menuElement.setAttribute("role","listbox"))}get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_requiredChanged(e){this.setAttribute("aria-required",e)}_valueChanged(e,t){""===e?this.focusElement.removeAttribute("has-value"):this.focusElement.setAttribute("has-value",""),""===e&&void 0===t||this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened)if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key))e.preventDefault(),this.opened=!0;else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){const t=this._menuElement.selected,i=void 0!==t?t:-1,s=this._menuElement._searchKey(i,e.key);s>=0&&(this.__userInteraction=!0,this._updateSelectedItem(this._items[s].value,this._items))}}_onKeyDownInside(e){/^(Tab)$/.test(e.key)&&(this.opened=!1)}_openedChanged(e,t){if(e){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly)return void(this.opened=!1);this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring"),this._menuElement.focus(),this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0)}else t&&(this._phone?this._setFocused(!1):(this.focusElement.focus(),this._openedWithFocusRing&&this.focusElement.setAttribute("focus-ring","")),this.validate(),window.removeEventListener("scroll",this._boundSetPosition,!0))}_hasContent(e){return!!e&&Boolean(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()||e.children.length)}_attachSelectedItem(e){if(!e)return;let t;e.hasAttribute("label")?(t=document.createElement("vaadin-item")).textContent=e.getAttribute("label"):t=e.cloneNode(!0),t._sourceItem=e,t.removeAttribute("tabindex"),this._valueElement.appendChild(t),t.selected=!0}_updateAriaExpanded(e,t,i){t&&t.setAttribute("aria-expanded",e),i&&i.focusElement&&i.focusElement.setAttribute("aria-expanded",e)}_updateValueSlot(){this.opened=!1,this._valueElement.innerHTML="";const e=this._items[this._menuElement.selected],t=this._hasContent(e),i=this._inputElement.shadowRoot.querySelector('slot[name="input"]')?"input":"value";this._valueElement.slot=t?i:"",t&&window.ShadyDOM&&window.ShadyDOM.flush(),this._attachSelectedItem(e),!this._valueChanging&&e&&(this._selectedChanging=!0,this.value=e.value||"",this.__userInteraction&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging)}_updateSelectedItem(e,t){t&&(this._menuElement.selected=t.reduce((t,i,s)=>void 0===t&&i.value===e?s:t,void 0),this._selectedChanging||(this._valueChanging=!0,this._updateValueSlot(),delete this._valueChanging))}_setFocused(e){super._setFocused(this.opened||e),this.focusElement._setFocused(this.hasAttribute("focused")),!this.hasAttribute("focused")&&this.validate()}_setPosition(){const e=this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect(),t=Math.min(window.innerHeight,document.documentElement.clientHeight),i=e.top>(t-e.height)/2;this._overlayElement.style.left=e.left+"px",i?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=t-e.bottom+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=e.top+"px"),this._overlayElement.updateStyles({"--vaadin-select-text-field-width":e.width+"px"})}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}}customElements.define(A.is,A)},211:function(e,t,i){"use strict";i(64);const s=document.createElement("template");s.innerHTML='<dom-module id="lumo-ordered-layout"><template><style>:host([theme~="margin"]) { margin: var(--lumo-space-m); } :host([theme~="padding"]) { padding: var(--lumo-space-m); }</style></template></dom-module>',document.head.appendChild(s.content);const o=document.createElement("template");o.innerHTML='<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout"><template><style include="lumo-ordered-layout">:host([theme~="spacing-xs"]) ::slotted(*) { margin-top: var(--lumo-space-xs); } :host([theme~="spacing-s"]) ::slotted(*) { margin-top: var(--lumo-space-s); } :host([theme~="spacing"]) ::slotted(*) { margin-top: var(--lumo-space-m); } :host([theme~="spacing-l"]) ::slotted(*) { margin-top: var(--lumo-space-l); } :host([theme~="spacing-xl"]) ::slotted(*) { margin-top: var(--lumo-space-xl); } /* Compensate for the first item margin, so that there is no gap around the layout itself. */ :host([theme~="spacing-xs"])::before { content: ""; margin-top: calc(var(--lumo-space-xs) * -1); } :host([theme~="spacing-s"])::before { content: ""; margin-top: calc(var(--lumo-space-s) * -1); } :host([theme~="spacing"])::before { content: ""; margin-top: calc(var(--lumo-space-m) * -1); } :host([theme~="spacing-l"])::before { content: ""; margin-top: calc(var(--lumo-space-l) * -1); } :host([theme~="spacing-xl"])::before { content: ""; margin-top: calc(var(--lumo-space-xl) * -1); }</style></template></dom-module>',document.head.appendChild(o.content);var a=i(16),n=i(26),r=i(29),l=i(4);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(r.a)(Object(n.a)(a.a))){static get template(){return l.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.1.0"}}customElements.define(d.is,d)},216:function(e,t,i){"use strict";i(176),i(154),i(91),i(129),i(127);var s=i(4);const o=s.a`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=(i(125),i(74)),r=i(26),l=i(93),d=i(155),h=(i(171),i(158)),c=i(29);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(c.a)(Object(n.a)(Object(l.a)(Object(r.a)(Object(h.a)(Object(d.a)(a.a))))))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}constructor(){super(),this.theme}static get is(){return"vaadin-combo-box"}static get version(){return"5.0.4"}static get properties(){return{label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},autofocus:{type:Boolean},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1}}}static get observers(){return["_updateAriaExpanded(opened)"]}attributeChanged(e,t){/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&Array.prototype.forEach.call(this.root.querySelectorAll("*"),e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}ready(){super.ready(),this._nativeInput=this.inputElement.focusElement,this._toggleElement=this.$.toggleButton,this._clearElement=this.inputElement.shadowRoot.querySelector('[part="clear-button"]'),this.inputElement.addEventListener("keydown",e=>{this._isEventKey(e,"esc")&&(this._stopPropagation(e),this._onEscape(e))},!0),this._nativeInput.setAttribute("role","combobox"),this._nativeInput.setAttribute("aria-autocomplete","list"),this._updateAriaExpanded()}connectedCallback(){super.connectedCallback(),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this._restoreInputBlur()}_getPositionTarget(){return this.$.input}_updateAriaExpanded(){this._nativeInput&&(this._nativeInput.setAttribute("aria-expanded",this.opened),this._toggleElement.setAttribute("aria-expanded",this.opened))}get inputElement(){return this.$.input}get focusElement(){return this.inputElement||this}}customElements.define(u.is,u)},218:function(e,t,i){"use strict";i(64),i(138);var s=i(4);const o=s.a`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=(i(39),i(135)),r=i(29),l=i(50),d=i(93);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const h=document.createElement("template");h.innerHTML='<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay"><template><style>/* NOTE(platosha): Make some min-width to prevent collapsing of the content taking the parent width, e. g.,<vaadin-grid>and such. */ [part="content"] { min-width: 12em; /* matches the default<vaadin-text-field>width */ }</style></template></dom-module>',document.head.appendChild(h.content);class c extends n.a{static get is(){return"vaadin-dialog-overlay"}}customElements.define(c.is,c);class u extends(Object(d.a)(Object(r.a)(a.a))){static get template(){return s.a`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.2.1"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._observer=new l.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(e,t,i,s){e!==t?this._contentTemplate=void 0:i!==s&&(this.renderer=void 0)}render(){this.$.overlay.render()}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for dialog content");this._oldTemplate=e,this._oldRenderer=t,t&&this.$.overlay.setProperties({owner:this,renderer:t})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){e&&(this.$.overlay.template=this.querySelector("template")),this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}}customElements.define(u.is,u)},221:function(e,t,i){"use strict";i(48),i(72),i(66);var s=i(4);const o=s.a`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);i(127);var a=i(16),n=i(153),r=i(29),l=i(26);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(r.a)(Object(n.a)(Object(l.a)(a.a)))){static get template(){return s.a`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label and the error message should neither grow nor shrink. */
      [part="label"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.4.7"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd)}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){const e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,i=this.inputElement,s=getComputedStyle(i).width,o=this.value?this.value.length:0;this._oldValueLength>=o&&(i.style.maxWidth=s,i.style.height="auto",e.style.display="block"),this._oldValueLength=o;const a=i.scrollHeight;a>i.clientHeight&&(i.style.height=a+"px"),i.style.removeProperty("max-width"),e.style.removeProperty("display"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",a)}}customElements.define(d.is,d)},222:function(e,t,i){"use strict";i(64);var s=i(4);const o=s.a`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=i(50),r=i(97),l=i(26),d=i(29),h=i(52),c=i(76);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class u extends(Object(d.a)(Object(l.a)(Object(c.b)([r.a],a.a)))){static get template(){return s.a`
    <style>
      :host {
        display: block;
        max-width: 100%;
        animation: 1ms vaadin-form-layout-appear;
        /* CSS API for host */
        --vaadin-form-layout-column-spacing: 2em; /* (default) */
        align-self: stretch;
      }

      @keyframes vaadin-form-layout-appear {
        to {
          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
        }
      }

      :host([hidden]) {
        display: none !important;
      }

      #layout {
        display: flex;

        align-items: baseline; /* default \`stretch\` is not appropriate */

        flex-wrap: wrap; /* the items should wrap */
      }

      #layout ::slotted(*) {
        /* Items should neither grow nor shrink. */
        flex-grow: 0;
        flex-shrink: 0;

        /* Margins make spacing between the columns */
        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
      }

      #layout ::slotted(br) {
        display: none;
      }
    </style>
    <div id="layout">
      <slot id="slot"></slot>
    </div>
`}static get is(){return"vaadin-form-layout"}static get version(){return"2.1.4"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.root.appendChild(this._styleElement),this._styleElement.textContent=" ",window.ShadyDOM&&window.ShadyDOM.flush(),super.ready(),this.addEventListener("iron-resize",this._selectResponsiveStep),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),Object(h.b)(this,this._selectResponsiveStep),Object(h.b)(this,this.updateStyles),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"colspan"===e.attributeName&&this._invokeUpdateStyles()})}),this.__childObserver=new n.a(this,t=>{const i=["template","style","dom-repeat","dom-if"],s=Array.from(t.addedNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&-1===i.indexOf(e.localName.toLowerCase()));s.forEach(t=>{this.__mutationObserver.observe(t,e)}),s.some(e=>e.hasAttribute("colspan"))&&this._invokeUpdateStyles()})}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){t&&t!==e?(console.warn(`${i.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=t):(console.warn(`${i.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty("background-position",t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(e=t)}),this.$.layout.style.removeProperty("background-position"),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition),/\b(Edge|Trident)\//.test(navigator.userAgent)&&this.offsetWidth!==this._lastOffsetWidth&&(this.updateStyles(),this._lastOffsetWidth=this.offsetWidth)}_invokeUpdateStyles(){this.updateStyles()}updateStyles(...e){super.updateStyles(...e);const t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),i=getComputedStyle(this).direction,s="margin-"+("ltr"===i?"left":"right"),o="margin-"+("ltr"===i?"right":"left"),a=this.offsetWidth;window.ShadyDOM&&window.ShadyDOM.flush();let n=0;Array.from(this.children).filter(e=>"br"===e.localName||"none"!==getComputedStyle(e).display).forEach((e,i,r)=>{if("br"===e.localName)return void(n=0);let l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan")));const d=(l=Math.min(l,this._columnCount))/this._columnCount;e.style.width=`calc(${99.9*d}% - ${1-d} * ${t})`,n+l>this._columnCount&&(n=0),0===n?e.style.setProperty(s,"0px"):e.style.removeProperty(s);const h=i+1,c=h<r.length&&"br"===r[h].localName;if(n+l===this._columnCount)e.style.setProperty(o,"0px");else if(c){const i=(this._columnCount-n-l)/this._columnCount;e.style.setProperty(o,`calc(${i*a}px + ${i} * ${t})`)}else e.style.removeProperty(o);n=(n+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?e.setAttribute("label-position","top"):e.removeAttribute("label-position"))})}}customElements.define(u.is,u)},223:function(e,t,i){"use strict";i(178),i(48),i(152);var s=i(4);const o=s.a`<dom-module id="lumo-radio-group" theme-for="vaadin-radio-group">
  <template>
    <style include="lumo-required-field">
      :host {
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-size-m);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([theme~="vertical"]) [part="group-field"] {
        display: flex;
        flex-direction: column;
      }

      [part="label"] {
        padding-bottom: 0.7em;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=i(50),r=i(26),l=i(159);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(r.a)(a.a)){static get template(){return s.a`
    <style>
      :host {
        display: inline-flex;

        /* Prevent horizontal overflow in IE 11 instead of wrapping radios */
        max-width: 100%;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-group-field-container {
        display: flex;
        flex-direction: column;

        /* Prevent horizontal overflow in IE 11 instead of wrapping radios */
        width: 100%;
      }

      [part="label"]:empty {
        display: none;
      }
    </style>

    <div class="vaadin-group-field-container">
      <label part="label">[[label]]</label>

      <div part="group-field">
        <slot id="slot"></slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-radio-group"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0,observer:"_disabledChanged"},readonly:{type:Boolean,reflectToAttribute:!0,observer:"_readonlyChanged"},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0},errorMessage:{type:String,value:""},_errorId:{type:String},_checkedButton:{type:Object},label:{type:String,value:"",observer:"_labelChanged"},value:{type:String,notify:!0,observer:"_valueChanged"}}}ready(){super.ready(),this._addListeners(),this._observer=new n.a(this,e=>{const t=e=>{e.target.checked&&this._changeSelectedButton(e.target)};this._filterRadioButtons(e.addedNodes).reverse().forEach(e=>{e.addEventListener("checked-changed",t),this.disabled&&(e.disabled=!0),e.checked&&this._changeSelectedButton(e)}),this._filterRadioButtons(e.removedNodes).forEach(e=>{e.removeEventListener("checked-changed",t),e.checked&&(this.value=void 0)})}),this._radioButtons.length&&this._setFocusable(0),this.setAttribute("role","radiogroup");const e=d._uniqueId=1+d._uniqueId||0;this._errorId=`${this.constructor.is}-error-${e}`}get _radioButtons(){return this._filterRadioButtons(this.querySelectorAll("*"))}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused")}_filterRadioButtons(e){return Array.from(e).filter(e=>e instanceof l.a)}_disabledChanged(e){this.setAttribute("aria-disabled",e),this._updateDisableButtons()}_updateDisableButtons(){this._radioButtons.forEach(e=>{this.disabled?e.disabled=!0:this.readonly?e.disabled=e!==this._checkedButton&&this.readonly:e.disabled=!1})}_readonlyChanged(e,t){(e||t)&&this._updateDisableButtons()}_addListeners(){this.addEventListener("keydown",e=>{var t=e.target==this?this._checkedButton:e.target;37!==e.keyCode&&38!==e.keyCode||(e.preventDefault(),this._selectPreviousButton(t)),39!==e.keyCode&&40!==e.keyCode||(e.preventDefault(),this._selectNextButton(t))}),this.addEventListener("focusin",()=>this._setFocused(this._containsFocus())),this.addEventListener("focusout",e=>{e.composed&&this.validate(),this._setFocused(!1)})}_selectButton(e,t){this._containsFocus()&&(e.focus(),t&&e.setAttribute("focus-ring","")),this._changeSelectedButton(e,t)}_containsFocus(){const e=this.getRootNode(),t=void 0!==e._activeElement?e._activeElement:e.activeElement;return this.contains(t)}_hasEnabledButtons(){return!this._radioButtons.every(e=>e.disabled)}_selectNextButton(e){if(this._hasEnabledButtons()){var t=e.nextElementSibling||this.firstElementChild;t.disabled?this._selectNextButton(t):this._selectButton(t,!0)}}_selectPreviousButton(e){if(this._hasEnabledButtons()){var t=e.previousElementSibling||this.lastElementChild;t.disabled?this._selectPreviousButton(t):this._selectButton(t,!0)}}_changeSelectedButton(e,t){this._checkedButton!==e&&(this._checkedButton=e,this._radioButtons.forEach(e=>{e===this._checkedButton?t?e.click():e.checked=!0:e.checked=!1}),this._checkedButton&&(this.value=this._checkedButton.value),this.validate(),this.readonly&&this._updateDisableButtons(),e&&this._setFocusable(this._radioButtons.indexOf(e)))}_valueChanged(e,t){if(t&&(""===e||null==e))return this._changeSelectedButton(null),void this.removeAttribute("has-value");if(!this._checkedButton||e!=this._checkedButton.value){const t=this._radioButtons.filter(t=>t.value==e)[0];t?(this._selectButton(t),this.setAttribute("has-value","")):console.warn(`No <vaadin-radio-button> with value ${e} found.`)}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}_setFocusable(e){const t=this._radioButtons;t.forEach(i=>i.tabindex=i===t[e]?0:-1)}_labelChanged(e){e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_getActiveErrorId(e,t,i){return t&&e?i:void 0}_getErrorMessageAriaHidden(e,t,i){return(!this._getActiveErrorId(e,t,i)).toString()}}customElements.define(d.is,d)},225:function(e,t,i){"use strict";i(48),i(64),i(70),i(66);var s=i(4);const o=s.a`<dom-module id="lumo-notification-card" theme-for="vaadin-notification-card">
  <template>
    <style>
      :host {
        position: relative;
        margin: var(--lumo-space-s);
      }

      [part="overlay"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-s);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-wide-l);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      [part="content"] ::slotted(vaadin-button) {
        flex: none;
        margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
      }

      :host([slot^="middle"]) {
        width: 20em;
        max-width: 80vw;
        margin: var(--lumo-space-s) auto;
      }

      :host([slot\$="stretch"]) {
        margin: 0;
      }

      :host([slot\$="stretch"]) [part="overlay"] {
        border-radius: 0;
      }

      @media (min-width: 421px) {
        :host(:not([slot\$="stretch"])) {
          display: flex;
        }

        :host([slot\$="end"]) {
          justify-content: flex-end;
        }

        :host([slot^="middle"]),
        :host([slot\$="center"]) {
          display: flex;
          justify-content: center;
        }
      }

      @keyframes lumo-notification-exit-fade-out {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-down {
        0% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-up {
        100% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-up {
        0% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-down {
        100% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      :host([slot="middle"][opening]) {
        animation: lumo-notification-enter-fade-in 300ms;
      }

      :host([slot="middle"][closing]) {
        animation: lumo-notification-exit-fade-out 300ms;
      }

      :host([slot^="top"][opening]) {
        animation: lumo-notification-enter-slide-down 300ms;
      }

      :host([slot^="top"][closing]) {
        animation: lumo-notification-exit-slide-up 300ms;
      }

      :host([slot^="bottom"][opening]) {
        animation: lumo-notification-enter-slide-up 300ms;
      }

      :host([slot^="bottom"][closing]) {
        animation: lumo-notification-exit-slide-down 300ms;
      }

      :host([theme~="primary"]) [part="overlay"] {
        background: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-color: var(--lumo-primary-text-color);
      }

      :host([theme~="contrast"]) [part="overlay"] {
        background: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"]) {
        --_lumo-button-background-color: var(--lumo-contrast-20pct);
        --_lumo-button-color: var(--lumo-base-color);
        --_lumo-button-primary-background-color: var(--lumo-base-color);
        --_lumo-button-primary-color: var(--lumo-contrast);
      }

      :host([theme~="success"]) [part="overlay"] {
        background: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-color: var(--lumo-success-text-color);
      }

      :host([theme~="error"]) [part="overlay"] {
        background: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-color: var(--lumo-error-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=i(39),r=i(29),l=i(26),d=i(93),h=i(50);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(l.a)(Object(r.a)(a.a))){static get template(){return s.a`
    <style>
      :host {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        pointer-events: none;
      }

      [region-group] {
        flex: 1 1 0%;
        display: flex;
      }

      [region-group="top"] {
        align-items: flex-start;
      }

      [region-group="bottom"] {
        align-items: flex-end;
      }

      [region-group] > [region] {
        flex: 1 1 0%;
      }

      @media (max-width: 420px) {
        [region-group] {
          flex-direction: column;
          align-items: stretch;
        }

        [region-group="top"] {
          justify-content: flex-start;
        }

        [region-group="bottom"] {
          justify-content: flex-end;
        }

        [region-group] > [region] {
          flex: initial;
        }
      }
    </style>

    <div region="top-stretch"><slot name="top-stretch"></slot></div>
    <div region-group="top">
      <div region="top-start"><slot name="top-start"></slot></div>
      <div region="top-center"><slot name="top-center"></slot></div>
      <div region="top-end"><slot name="top-end"></slot></div>
    </div>
    <div region="middle"><slot name="middle"></slot></div>
    <div region-group="bottom">
      <div region="bottom-start"><slot name="bottom-start"></slot></div>
      <div region="bottom-center"><slot name="bottom-center"></slot></div>
      <div region="bottom-end"><slot name="bottom-end"></slot></div>
    </div>
    <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
`}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(e){e?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){const e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;this.style.bottom=t&&i>e?i-e+"px":"0"}}class u extends(Object(l.a)(a.a)){static get template(){return s.a`
    <style>
      :host {
        display: block;
        pointer-events: auto;
      }
    </style>

    <div part="overlay">
      <div part="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class m extends(Object(d.a)(Object(r.a)(a.a))){static get template(){return s.a`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`}static get is(){return"vaadin-notification"}static get version(){return"1.4.0"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function,_notificationTemplate:Object}}static get observers(){return["_durationChanged(duration, opened)","_templateOrRendererChanged(_notificationTemplate, renderer, opened)"]}ready(){super.ready(),this._observer=new h.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._notificationTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._notificationTemplate}render(){"function"==typeof this.renderer&&this.renderer(this._card,this)}_removeNewRendererOrTemplate(e,t,i,s){e!==t?this._notificationTemplate=void 0:i!==s&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for notification content");this._oldTemplate=e;const s=this._oldRenderer!==t;if(this._oldRenderer=t,t){if(this._card=this.$["vaadin-notification-card"],s)for(;this._card.firstChild;)this._card.removeChild(this._card.firstChild);i&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.render())}}open(){this.opened=!0}close(){this.opened=!1}get _container(){return m._container||(m._container=document.createElement("vaadin-notification-container"),document.body.appendChild(m._container)),m._container}_openedChanged(e){e?(this._container.opened=!0,this._instance||this.renderer||this._ensureTemplatized(),this._animatedAppendNotificationCard(),setTimeout(()=>this._updateShadyButtonStyles())):this._card&&this._closeNotificationCard()}_ensureTemplatized(){if(this._notificationTemplate=this.querySelector("template")||this._notificationTemplate,!this._notificationTemplate)return;this._notificationTemplate._Templatizer||(this._notificationTemplate._Templatizer=Object(n.b)(this._notificationTemplate,this,{forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new this._notificationTemplate._Templatizer({});const e=this._notificationTemplate.getRootNode(),t=e!==document;if(this._card=this.$["vaadin-notification-card"],this._cardContent=this._card.shadowRoot.querySelector('[part~="content"]'),t){if(this._cardContent.shadowRoot||this._cardContent.attachShadow({mode:"open"}),window.ShadyCSS&&!window.ShadyCSS.nativeShadow){var i=e.host&&e.host.localName;i&&-1===i.indexOf("-")&&(i=e.host.getAttribute("is")),i&&this._cardContent.setAttribute("is",i)}else{const t=Array.from(e.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"").replace(/:host/g,":host-nomatch");if(t){const e=document.createElement("style");e.textContent=t,this._cardContent.shadowRoot.appendChild(e)}}this._cardContent.shadowRoot.appendChild(this._instance.root)}else this._card.appendChild(this._instance.root);this._card.setAttribute("aria-label",this._card.textContent.trim())}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):window.console.warn(`Invalid alignment parameter provided: position=${this.position}`))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&"none"!=e){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(e){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}_updateShadyButtonStyles(){window.ShadyCSS&&!this.__buttonStylesPending&&(customElements.whenDefined("vaadin-button").then(()=>{Array.from(this._card.querySelectorAll("*")).filter(e=>e instanceof customElements.get("vaadin-button")).forEach(e=>{const t=["--_lumo-button-color","--_lumo-button-background-color","--_lumo-button-primary-color","--_lumo-button-primary-background-color"].reduce((e,t)=>{const i=window.ShadyCSS.getComputedStyleValue(this._card,t);return i&&(e[t]=i),e},{});e.updateStyles(t)}),this.__buttonStylesPending=!1}),this.__buttonStylesPending=!0)}}customElements.define(c.is,c),customElements.define(u.is,u),customElements.define(m.is,m)},226:function(e,t,i){"use strict";i(48),i(64),i(70),i(66);var s=i(4);const o=s.a`<dom-module id="lumo-form-item" theme-for="vaadin-form-item">
  <template>
    <style>
      :host {
        --vaadin-form-item-row-spacing: 0;
      }

      /* font-weight, margin-bottom, transition and line-height same values as for part label in text-field */
      [part="label"] {
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
        margin-top: var(--lumo-space-m);
        margin-left: calc(var(--lumo-border-radius) / 4);
        margin-bottom: var(--lumo-space-xs);
        transition: color 0.4s;
        line-height: 1.333;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var a=i(16),n=i(26);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class r extends(Object(n.a)(a.a)){static get template(){return s.a`
    <style>
      :host {
        display: inline-flex;
        flex-direction: row;
        align-items: baseline;

        /* CSS API for host */
        --vaadin-form-item-label-width: 8em;
        --vaadin-form-item-label-spacing: 1em;
        --vaadin-form-item-row-spacing: 1em;

        margin: calc(0.5 * var(--vaadin-form-item-row-spacing)) 0;
      }

      :host([label-position="top"]) {
        flex-direction: column;
        align-items: stretch;
      }

      #label {
        width: var(--vaadin-form-item-label-width);
        flex: 0 0 auto;
      }

      :host([label-position="top"]) #label {
        width: auto;
      }

      #spacing {
        width: var(--vaadin-form-item-label-spacing);
        flex: 0 0 auto;
      }

      #content {
        flex: 1 1 auto;
      }

      #content ::slotted(.full-width) {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
      }
    </style>
    <div id="label" part="label" on-click="_onLabelClick">
      <slot name="label" id="labelSlot"></slot>
    </div>
    <div id="spacing"></div>
    <div id="content">
      <slot id="contentSlot"></slot>
    </div>
`}static get is(){return"vaadin-form-item"}static get properties(){return{}}_onLabelClick(e){const t=Array.prototype.filter.call(this.$.contentSlot.assignedNodes(),e=>e.nodeType===Node.ELEMENT_NODE)[0];t&&(t.focus(),t.click())}}customElements.define(r.is,r)},227:function(e,t,i){"use strict";i(127),i(16),i(36);var s=i(125);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class o extends s.a{static get is(){return"vaadin-email-field"}static get version(){return"2.4.7"}ready(){super.ready(),this.inputElement.type="email",this.inputElement.autocapitalize="off",this.pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"}}customElements.define(o.is,o)}}]);
//# sourceMappingURL=vendors~new.decc0fe2.js.map