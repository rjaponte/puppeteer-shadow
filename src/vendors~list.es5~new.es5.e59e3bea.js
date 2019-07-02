(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var o=r(17),i=r(164),s=r(28),n=r(5),a=r(27);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(s.a)(Object(i.a)(Object(a.a)(o.a)))){static get template(){return n.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.4.7"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(l.is,l)},128:function(e,t,r){"use strict";r(49),r(73),r(65),r(71),r(67),r(163),r(92),r(130);const o=r(5).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);r(126)},130:function(e,t,r){"use strict";r(49),r(92),r(73),r(71);const o=document.createElement("template");o.innerHTML='<dom-module id="lumo-field-button"><template><style>[part$="button"] { flex: none; width: 1em; height: 1em; line-height: 1; font-size: var(--lumo-icon-size-m); text-align: center; color: var(--lumo-contrast-60pct); transition: 0.2s color; cursor: var(--lumo-clickable-cursor); } :host(:not([readonly])) [part$="button"]:hover { color: var(--lumo-contrast-90pct); } :host([disabled]) [part$="button"], :host([readonly]) [part$="button"] { color: var(--lumo-contrast-20pct); } [part$="button"]::before { font-family: "lumo-icons"; display: block; }</style></template></dom-module>',document.head.appendChild(o.content)},160:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r(108);var o=r(45);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const i={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var r=this.domHost;this.scrollTarget=r&&r.$?r.$[e]:Object(o.a)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var r;"object"==typeof e?(r=e.left,t=e.top):r=e,r=r||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(r,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=r,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var r=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),r.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(r.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},163:function(e,t,r){"use strict";r(49),r(65),r(71),r(67);const o=document.createElement("template");o.innerHTML='<dom-module id="lumo-required-field"><template><style>[part="label"] { align-self: flex-start; color: var(--lumo-secondary-text-color); font-weight: 500; font-size: var(--lumo-font-size-s); margin-left: calc(var(--lumo-border-radius-m) / 4); transition: color 0.2s; line-height: 1; padding-bottom: 0.5em; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: relative; max-width: 100%; box-sizing: border-box; } :host([has-label])::before { margin-top: calc(var(--lumo-font-size-s) * 1.5); } :host([has-label]) { padding-top: var(--lumo-space-m); } :host([required]) [part="label"] { padding-right: 1em; } [part="label"]::after { content: var(--lumo-required-field-indicator, "•"); transition: opacity 0.2s; opacity: 0; color: var(--lumo-primary-text-color); position: absolute; right: 0; width: 1em; text-align: center; } :host([required]:not([has-value])) [part="label"]::after { opacity: 1; } :host([invalid]) [part="label"]::after { color: var(--lumo-error-text-color); } [part="error-message"] { margin-left: calc(var(--lumo-border-radius-m) / 4); font-size: var(--lumo-font-size-xs); line-height: var(--lumo-line-height-xs); color: var(--lumo-error-text-color); will-change: max-height; transition: 0.4s max-height; max-height: 5em; } /* Margin that doesn’t reserve space when there’s no error message */ [part="error-message"]:not(:empty)::before, [part="error-message"]:not(:empty)::after { content: ""; display: block; height: 0.4em; } :host(:not([invalid])) [part="error-message"] { max-height: 0; overflow: hidden; }</style></template></dom-module>',document.head.appendChild(o.content)},164:function(e,t,r){"use strict";r.d(t,"a",function(){return u});r(27);var o=r(75),i=r(11),s=r(19);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const n=document.createElement("template");n.innerHTML='<dom-module id="vaadin-text-field-shared-styles"><template><style>:host { display: inline-flex; outline: none; } :host::before { content: "\\2003"; width: 0; display: inline-block; /* Size and position this element on the same vertical position as the input-field element to make vertical align for the host element work as expected */ } :host([hidden]) { display: none !important; } .vaadin-text-field-container, .vaadin-text-area-container { display: flex; flex-direction: column; min-width: 100%; max-width: 100%; width: var(--vaadin-text-field-default-width, 12em); } [part="label"]:empty { display: none; } [part="input-field"] { display: flex; align-items: center; flex: auto; } .vaadin-text-field-container [part="input-field"] { flex-grow: 0; } /* Reset the native input styles */ [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea) { -webkit-appearance: none; -moz-appearance: none; outline: none; margin: 0; padding: 0; border: 0; border-radius: 0; min-width: 0; font: inherit; font-size: 1em; line-height: normal; color: inherit; background-color: transparent; /* Disable default invalid style in Firefox */ box-shadow: none; } [part="input-field"] ::slotted(*) { flex: none; } [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea), /* Slotted by vaadin-select-text-field */ [part="input-field"] ::slotted([part="value"]) { flex: auto; white-space: nowrap; overflow: hidden; width: 100%; height: 100%; } [part="input-field"] ::slotted(textarea) { resize: none; } [part="value"]::-ms-clear, [part="input-field"] ::slotted(input)::-ms-clear { display: none; } [part="clear-button"] { cursor: default; } [part="clear-button"]::before { content: "✕"; }</style></template></dom-module>',document.head.appendChild(n.content);const a={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},l={DEFAULT:"default",ACCESSIBLE:"accessible"},u=e=>(class extends(Object(o.a)(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+a.default.join(", ")+")","_hostAccessiblePropsChanged("+a.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=s.a.debounce(this._inputDebouncer,i.d.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value}_stateChanged(e,t,r,o){!e&&!t&&r&&o?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput?this.__userInput=!1:(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(l).map(e=>l[e]).forEach(e=>this._propagateHostAttributes(a[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,l.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,l.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const r=this.inputElement,o=a[t];"accessible"===t?o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],r),this._setOrToggleAttribute(`aria-${t}`,e[o],r)}):o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],r)})}_setOrToggleAttribute(e,t,r){e&&r&&(t?r.setAttribute(e,"boolean"==typeof t?"":t):r.removeAttribute(e))}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=u._uniqueId=1+u._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{this.inputElement.setSelectionRange(0,9999)}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const r=new Event("change",{bubbles:!this._slottedInput});r.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(r)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const e=!!this.value;this.clear(),e&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,r){this._setOrToggleAttribute("aria-describedby",t&&e?r:void 0,this.focusElement)}_getActiveLabelId(e,t,r){let o=r;e&&(o=`${t} ${r}`),this.focusElement.setAttribute("aria-labelledby",o)}_getErrorMessageAriaHidden(e,t,r){return(!(t&&e?r:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){const r="__previous"+e;void 0!==this[r]&&this[r]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[r]=t}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}})},179:function(e,t,r){"use strict";var o=r(96),i=r(108);
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
Object(o.a)({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(e,t){this.resolveCompletes=e,this.rejectCompletes=t}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut)return!1;var e=this.xhr.status||0;return 0===e||e>=200&&e<300},send:function(e){var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("progress",function(e){this._setProgress({lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total}),this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this)),t.addEventListener("error",function(t){this._setErrored(!0),this._updateStatus();var r=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(r)}.bind(this)),t.addEventListener("timeout",function(t){this._setTimedOut(!0),this._updateStatus();var r=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(r)}.bind(this)),t.addEventListener("abort",function(){this._setAborted(!0),this._updateStatus();var t=new Error("Request aborted."),r=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(r)}.bind(this)),t.addEventListener("loadend",function(){if(this._updateStatus(),this._setResponse(this.parseResponse()),this.succeeded)this.resolveCompletes(this);else{var t=new Error("The request failed with status code: "+this.xhr.status),r=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(r)}}.bind(this)),this.url=e.url;var r=!1!==e.async;t.open(e.method||"GET",e.url,r);var o={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[e.handleAs],s=e.headers||Object.create(null),n=Object.create(null);for(var a in s)n[a.toLowerCase()]=s[a];if(s=n,o&&!s.accept&&(s.accept=o),Object.keys(s).forEach(function(e){/[A-Z]/.test(e)&&i.a._error("Headers must be lower case, got",e),t.setRequestHeader(e,s[e])},this),r){t.timeout=e.timeout;var l=e.handleAs;!e.jsonPrefix&&l||(l="text"),t.responseType=t._responseType=l,e.jsonPrefix&&(t._jsonPrefix=e.jsonPrefix)}t.withCredentials=!!e.withCredentials;var u=this._encodeBodyObject(e.body,s["content-type"]);return t.send(u),this.completes},parseResponse:function(){var e=this.xhr,t=e.responseType||e._responseType,r=!this.xhr.responseType,o=e._jsonPrefix&&e._jsonPrefix.length||0;try{switch(t){case"json":if(r||void 0===e.response)try{return JSON.parse(e.responseText)}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.response;case"xml":return e.responseXML;case"blob":case"document":case"arraybuffer":return e.response;case"text":default:if(o)try{return JSON.parse(e.responseText.substring(o))}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.responseText}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0),this.xhr.abort()},_encodeBodyObject:function(e,t){if("string"==typeof e)return e;var r=e;switch(t){case"application/json":return JSON.stringify(r);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(r)}return e},_wwwFormUrlEncode:function(e){if(!e)return"";var t=[];return Object.keys(e).forEach(function(r){t.push(this._wwwFormUrlEncodePiece(r)+"="+this._wwwFormUrlEncodePiece(e[r]))},this),t.join("&")},_wwwFormUrlEncodePiece:function(e){return null!=e&&e.toString?encodeURIComponent(e.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+"):""},_updateStatus:function(){this._setStatus(this.xhr.status),this._setStatusText(void 0===this.xhr.statusText?"":this.xhr.statusText)}}),
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
Object(o.a)({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var e,t,r=[];for(e in this.params)if(t=this.params[e],e=window.encodeURIComponent(e),Array.isArray(t))for(var o=0;o<t.length;o++)r.push(e+"="+window.encodeURIComponent(t[o]));else null!==t?r.push(e+"="+window.encodeURIComponent(t)):r.push(e);return r.join("&")},get requestUrl(){var e=this.queryString,t=this.url||"";if(e){var r=t.indexOf("?")>=0?"&":"?";return t+r+e}return t},get requestHeaders(){var e,t={},r=this.contentType;if(null==r&&"string"==typeof this.body&&(r="application/x-www-form-urlencoded"),r&&(t["content-type"]=r),"object"==typeof this.headers)for(e in this.headers)t[e]=this.headers[e].toString();return t},_onProgressChanged:function(e){this._setLastProgress(e.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var e=document.createElement("iron-request"),t=this.toRequestOptions();return this.push("activeRequests",e),e.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,e)).then(this._discardRequest.bind(this,e)),this.fire("iron-ajax-presend",{request:e,options:t},{bubbles:this.bubbles,cancelable:!0}).defaultPrevented?(e.abort(),e.rejectCompletes(e),e):(this.lastRequest&&this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.send(t),this._setLastProgress(null),this._setLastRequest(e),this._setLoading(!0),this.fire("request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),e)},_handleResponse:function(e){e===this.lastRequest&&(this._setLastResponse(e.response),this._setLastError(null),this._setLoading(!1)),this.fire("response",e,{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-response",e,{bubbles:this.bubbles,composed:!0})},_handleError:function(e,t){this.verbose&&i.a._error(t),e===this.lastRequest&&(this._setLastError({request:e,error:t,status:e.xhr.status,statusText:e.xhr.statusText,response:e.xhr.response}),this._setLastResponse(null),this._setLoading(!1)),this.fire("iron-ajax-error",{request:e,error:t},{bubbles:this.bubbles,composed:!0}),this.fire("error",{request:e,error:t},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(e){var t=this.activeRequests.indexOf(e);t>-1&&this.splice("activeRequests",t,1)},_requestOptionsChanged:function(){this.debounce("generate-request",function(){null!=this.url&&this.auto&&this.generateRequest()},this.debounceDuration)}})}}]);
//# sourceMappingURL=vendors~list.es5~new.es5.e59e3bea.js.map