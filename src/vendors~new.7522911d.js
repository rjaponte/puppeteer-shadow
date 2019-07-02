(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~new"],{

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-announcer/3.0.2/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js?babel-target=es6":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-announcer/3.0.2/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js?babel-target=es6 ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: IronA11yAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yAnnouncer", function() { return IronA11yAnnouncer; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
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



/**
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@group Iron Elements
@demo demo/index.html
*/

const IronA11yAnnouncer = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,
  is: 'iron-a11y-announcer',
  properties: {
    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: 'polite'
    },
    _text: {
      type: String,
      value: ''
    }
  },
  created: function () {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function (text) {
    this._text = '';
    this.async(function () {
      this._text = text;
    }, 100);
  },
  _onIronAnnounce: function (event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});
IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function () {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer.instance);
};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6 ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: IronA11yKeysBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yKeysBehavior", function() { return IronA11yKeysBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es6");
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

/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */

var KEY_IDENTIFIER = {
  'U+0008': 'backspace',
  'U+0009': 'tab',
  'U+001B': 'esc',
  'U+0020': 'space',
  'U+007F': 'del'
};
/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */

var KEY_CODE = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  46: 'del',
  106: '*'
};
/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */

var MODIFIER_KEYS = {
  'shift': 'shiftKey',
  'ctrl': 'ctrlKey',
  'alt': 'altKey',
  'meta': 'metaKey'
};
/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */

var KEY_CHAR = /[a-z0-9*]/;
/**
 * Matches a keyIdentifier string.
 */

var IDENT_CHAR = /U\+/;
/**
 * Matches arrow keys in Gecko 27.0+
 */

var ARROW_KEY = /^arrow/;
/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */

var SPACE_KEY = /^space(bar)?/;
/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */

var ESC_KEY = /^escape$/;
/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */

function transformKey(key, noSpecialChars) {
  var validKey = '';

  if (key) {
    var lKey = key.toLowerCase();

    if (lKey === ' ' || SPACE_KEY.test(lKey)) {
      validKey = 'space';
    } else if (ESC_KEY.test(lKey)) {
      validKey = 'esc';
    } else if (lKey.length == 1) {
      if (!noSpecialChars || KEY_CHAR.test(lKey)) {
        validKey = lKey;
      }
    } else if (ARROW_KEY.test(lKey)) {
      validKey = lKey.replace('arrow', '');
    } else if (lKey == 'multiply') {
      // numpad '*' can map to Multiply on IE/Windows
      validKey = '*';
    } else {
      validKey = lKey;
    }
  }

  return validKey;
}

function transformKeyIdentifier(keyIdent) {
  var validKey = '';

  if (keyIdent) {
    if (keyIdent in KEY_IDENTIFIER) {
      validKey = KEY_IDENTIFIER[keyIdent];
    } else if (IDENT_CHAR.test(keyIdent)) {
      keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
      validKey = String.fromCharCode(keyIdent).toLowerCase();
    } else {
      validKey = keyIdent.toLowerCase();
    }
  }

  return validKey;
}

function transformKeyCode(keyCode) {
  var validKey = '';

  if (Number(keyCode)) {
    if (keyCode >= 65 && keyCode <= 90) {
      // ascii a-z
      // lowercase is 32 offset from uppercase
      validKey = String.fromCharCode(32 + keyCode);
    } else if (keyCode >= 112 && keyCode <= 123) {
      // function keys f1-f12
      validKey = 'f' + (keyCode - 112 + 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // top 0-9 keys
      validKey = String(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      // num pad 0-9
      validKey = String(keyCode - 96);
    } else {
      validKey = KEY_CODE[keyCode];
    }
  }

  return validKey;
}
/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */


function normalizedKeyForEvent(keyEvent, noSpecialChars) {
  // Fall back from .key, to .detail.key for artifical keyboard events,
  // and then to deprecated .keyIdentifier and .keyCode.
  if (keyEvent.key) {
    return transformKey(keyEvent.key, noSpecialChars);
  }

  if (keyEvent.detail && keyEvent.detail.key) {
    return transformKey(keyEvent.detail.key, noSpecialChars);
  }

  return transformKeyIdentifier(keyEvent.keyIdentifier) || transformKeyCode(keyEvent.keyCode) || '';
}

function keyComboMatchesEvent(keyCombo, event) {
  // For combos with modifiers we support only alpha-numeric keys
  var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
  return keyEvent === keyCombo.key && (!keyCombo.hasModifiers || !!event.shiftKey === !!keyCombo.shiftKey && !!event.ctrlKey === !!keyCombo.ctrlKey && !!event.altKey === !!keyCombo.altKey && !!event.metaKey === !!keyCombo.metaKey);
}

function parseKeyComboString(keyComboString) {
  if (keyComboString.length === 1) {
    return {
      combo: keyComboString,
      key: keyComboString,
      event: 'keydown'
    };
  }

  return keyComboString.split('+').reduce(function (parsedKeyCombo, keyComboPart) {
    var eventParts = keyComboPart.split(':');
    var keyName = eventParts[0];
    var event = eventParts[1];

    if (keyName in MODIFIER_KEYS) {
      parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
      parsedKeyCombo.hasModifiers = true;
    } else {
      parsedKeyCombo.key = keyName;
      parsedKeyCombo.event = event || 'keydown';
    }

    return parsedKeyCombo;
  }, {
    combo: keyComboString.split(':').shift()
  });
}

function parseEventString(eventString) {
  return eventString.trim().split(' ').map(function (keyComboString) {
    return parseKeyComboString(keyComboString);
  });
}
/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */


const IronA11yKeysBehavior = {
  properties: {
    /**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */
    keyEventTarget: {
      type: Object,
      value: function () {
        return this;
      }
    },

    /**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */
    stopKeyboardEventPropagation: {
      type: Boolean,
      value: false
    },
    _boundKeyHandlers: {
      type: Array,
      value: function () {
        return [];
      }
    },
    // We use this due to a limitation in IE10 where instances will have
    // own properties of everything on the "prototype".
    _imperativeKeyBindings: {
      type: Object,
      value: function () {
        return {};
      }
    }
  },
  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],

  /**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */
  keyBindings: {},
  registered: function () {
    this._prepKeyBindings();
  },
  attached: function () {
    this._listenKeyEventListeners();
  },
  detached: function () {
    this._unlistenKeyEventListeners();
  },

  /**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */
  addOwnKeyBinding: function (eventString, handlerName) {
    this._imperativeKeyBindings[eventString] = handlerName;

    this._prepKeyBindings();

    this._resetKeyEventListeners();
  },

  /**
   * When called, will remove all imperatively-added key bindings.
   */
  removeOwnKeyBindings: function () {
    this._imperativeKeyBindings = {};

    this._prepKeyBindings();

    this._resetKeyEventListeners();
  },

  /**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */
  keyboardEventMatchesKeys: function (event, eventString) {
    var keyCombos = parseEventString(eventString);

    for (var i = 0; i < keyCombos.length; ++i) {
      if (keyComboMatchesEvent(keyCombos[i], event)) {
        return true;
      }
    }

    return false;
  },
  _collectKeyBindings: function () {
    var keyBindings = this.behaviors.map(function (behavior) {
      return behavior.keyBindings;
    });

    if (keyBindings.indexOf(this.keyBindings) === -1) {
      keyBindings.push(this.keyBindings);
    }

    return keyBindings;
  },
  _prepKeyBindings: function () {
    this._keyBindings = {};

    this._collectKeyBindings().forEach(function (keyBindings) {
      for (var eventString in keyBindings) {
        this._addKeyBinding(eventString, keyBindings[eventString]);
      }
    }, this);

    for (var eventString in this._imperativeKeyBindings) {
      this._addKeyBinding(eventString, this._imperativeKeyBindings[eventString]);
    } // Give precedence to combos with modifiers to be checked first.


    for (var eventName in this._keyBindings) {
      this._keyBindings[eventName].sort(function (kb1, kb2) {
        var b1 = kb1[0].hasModifiers;
        var b2 = kb2[0].hasModifiers;
        return b1 === b2 ? 0 : b1 ? -1 : 1;
      });
    }
  },
  _addKeyBinding: function (eventString, handlerName) {
    parseEventString(eventString).forEach(function (keyCombo) {
      this._keyBindings[keyCombo.event] = this._keyBindings[keyCombo.event] || [];

      this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
    }, this);
  },
  _resetKeyEventListeners: function () {
    this._unlistenKeyEventListeners();

    if (this.isAttached) {
      this._listenKeyEventListeners();
    }
  },
  _listenKeyEventListeners: function () {
    if (!this.keyEventTarget) {
      return;
    }

    Object.keys(this._keyBindings).forEach(function (eventName) {
      var keyBindings = this._keyBindings[eventName];

      var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

      this._boundKeyHandlers.push([this.keyEventTarget, eventName, boundKeyHandler]);

      this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
    }, this);
  },
  _unlistenKeyEventListeners: function () {
    var keyHandlerTuple;
    var keyEventTarget;
    var eventName;
    var boundKeyHandler;

    while (this._boundKeyHandlers.length) {
      // My kingdom for block-scope binding and destructuring assignment..
      keyHandlerTuple = this._boundKeyHandlers.pop();
      keyEventTarget = keyHandlerTuple[0];
      eventName = keyHandlerTuple[1];
      boundKeyHandler = keyHandlerTuple[2];
      keyEventTarget.removeEventListener(eventName, boundKeyHandler);
    }
  },
  _onKeyBindingEvent: function (keyBindings, event) {
    if (this.stopKeyboardEventPropagation) {
      event.stopPropagation();
    } // if event has been already prevented, don't do anything


    if (event.defaultPrevented) {
      return;
    }

    for (var i = 0; i < keyBindings.length; i++) {
      var keyCombo = keyBindings[i][0];
      var handlerName = keyBindings[i][1];

      if (keyComboMatchesEvent(keyCombo, event)) {
        this._triggerKeyHandler(keyCombo, handlerName, event); // exit the loop if eventDefault was prevented


        if (event.defaultPrevented) {
          return;
        }
      }
    }
  },
  _triggerKeyHandler: function (keyCombo, handlerName, keyboardEvent) {
    var detail = Object.create(keyCombo);
    detail.keyboardEvent = keyboardEvent;
    var event = new CustomEvent(keyCombo.event, {
      detail: detail,
      cancelable: true
    });
    this[handlerName].call(this, event);

    if (event.defaultPrevented) {
      keyboardEvent.preventDefault();
    }
  }
};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-form/3.0.1/node_modules/@polymer/iron-form/iron-form.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-form/3.0.1/node_modules/@polymer/iron-form/iron-form.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es6");
/* harmony import */ var _polymer_iron_ajax_iron_ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-ajax/iron-ajax.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-ajax.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
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





/**
`<iron-form>` is a wrapper around the HTML `<form>` element, that can
validate and submit both custom and native HTML elements. Note that this
is a breaking change from iron-form 1.0, which was a type extension.

It has two modes: if `allow-redirect` is true, then after the form submission
you will be redirected to the server response. Otherwise, if it is false, it
will use an `iron-ajax` element to submit the form contents to the server.

  Example:

    <iron-form>
      <form method="get" action="/form/handler">
        <input type="text" name="name" value="Batman">
        <input type="checkbox" name="donuts" checked> I like donuts<br>
        <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
      </form>
    </iron-form>

By default, a native `<button>` element will submit this form. However, if you
want to submit it from a custom element's click handler, you need to explicitly
call the `iron-form`'s `submit` method.

  Example (using `<paper-button>` for the form `<iron-form id="myForm">`):

    <paper-button raised on-click="submitForm">Submit</paper-button>

    function submitForm() {
      this.$.myForm.submit();
    }

  or (using `<button>` for a form in the same document):

    <button raised onclick="submitForm()">Submit</button>

    function submitForm() {
      document.getElementById('myForm').submit();
    }

If you are not using the `allow-redirect` mode, then you also have the option of
customizing the request sent to the server. To do so, you can listen to the
`iron-form-presubmit` event, and modify the form's
[`iron-ajax`](https://elements.polymer-project.org/elements/iron-ajax) object.
However, If you want to not use `iron-ajax` at all, you can cancel the event and
do your own custom submission:

  Example of modifying the request, but still using the build-in form
submission:

    form.addEventListener('iron-form-presubmit', function() {
      this.request.method = 'put';
      this.request.params['extraParam'] = 'someValue';
    });

  Example of bypassing the build-in form submission:

    form.addEventListener('iron-form-presubmit', function(event) {
      event.preventDefault();
      var firebase = new Firebase(form.getAttribute('action'));
      firebase.set(form.serializeForm());
    });

Note that if you're dynamically creating this element, it's mandatory that you
first create the contained `<form>` element and all its children, and only then
attach it to the `<iron-form>`:

  var wrapper = document.createElement('iron-form');
  var form = document.createElement('form');
  var input = document.createElement('input');
  form.appendChild(input);
  document.body.appendChild(wrapper);
  wrapper.appendChild(form);

@element iron-form
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
      }
    </style>

    <!-- This form is used to collect the elements that should be submitted -->
    <slot></slot>

    <!-- This form is used for submission -->
    <form id="helper" action\$="[[action]]" method\$="[[method]]" enctype\$="[[enctype]]"></form>
`,
  is: 'iron-form',
  properties: {
    /*
     * Set this to true if you don't want the form to be submitted through an
     * ajax request, and you want the page to redirect to the action URL
     * after the form has been submitted.
     */
    allowRedirect: {
      type: Boolean,
      value: false
    },

    /**
     * HTTP request headers to send. See PolymerElements/iron-ajax for
     * more details. Only works when `allowRedirect` is false.
     */
    headers: {
      type: Object,
      value: function () {
        return {};
      }
    },

    /**
     * Set the `withCredentials` flag on the request. See
     * PolymerElements/iron-ajax for more details. Only works when
     * `allowRedirect` is false.
     */
    withCredentials: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Fired if the form cannot be submitted because it's invalid.
   *
   * @event iron-form-invalid
   */

  /**
   * Fired after the form is submitted.
   *
   * @event iron-form-submit
   */

  /**
   * Fired before the form is submitted.
   *
   * @event iron-form-presubmit
   */

  /**
   * Fired after the form is reset.
   *
   * @event iron-form-reset
   */

  /**
   * Fired after the form is submitted and a response is received. An
   * IronRequestElement is included as the event.detail object.
   *
   * @event iron-form-response
   */

  /**
   * Fired after the form is submitted and an error is received. An
   * error message is included in event.detail.error and an
   * IronRequestElement is included in event.detail.request.
   *
   * @event iron-form-error
   */

  /**
   * @return {void}
   */
  attached: function () {
    // We might have been detached then re-attached.
    // Avoid searching again for the <form> if we already found it.
    if (this._form) {
      return;
    } // Search for the `<form>`, if we don't find it, observe for
    // mutations.


    this._form = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('form');

    if (this._form) {
      this._init(); // Since some elements might not be upgraded yet at this time,
      // we won't be able to look into their shadowRoots for submittables.
      // We wait a tick and check again for any missing submittable default
      // values.


      this.async(this._saveInitialValues.bind(this), 1);
    } else {
      this._nodeObserver = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).observeNodes(function (mutations) {
        for (var i = 0; i < mutations.addedNodes.length; i++) {
          if (mutations.addedNodes[i].tagName === 'FORM') {
            this._form = mutations.addedNodes[i]; // At this point in time, all custom elements are expected
            // to be upgraded, hence we'll be able to traverse their
            // shadowRoots.

            this._init();

            Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).unobserveNodes(this._nodeObserver);
            this._nodeObserver = null;
          }
        }
      }.bind(this));
    }
  },

  /**
   * @return {void}
   */
  detached: function () {
    if (this._nodeObserver) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).unobserveNodes(this._nodeObserver);
      this._nodeObserver = null;
    }
  },
  _init: function () {
    this._form.addEventListener('submit', this.submit.bind(this));

    this._form.addEventListener('reset', this.reset.bind(this)); // Save the initial values.


    this._defaults = this._defaults || new WeakMap();

    this._saveInitialValues();
  },

  /**
   * Saves the values of all form elements that will be used when resetting
   * the form. Initially called asynchronously on attach. Any time you
   * call this function, the previously saved values for a form element will
   * be overwritten.
   *
   * This function is useful if you are dynamically adding elements to
   * the form, or if your elements are asynchronously setting their values.
   * @return {void}
   */
  saveResetValues: function () {
    this._saveInitialValues(true);
  },

  /**
   * @param {boolean=} overwriteValues
   * @return {void}
   */
  _saveInitialValues: function (overwriteValues) {
    var nodes = this._getValidatableElements();

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (!this._defaults.has(node) || overwriteValues) {
        // Submittables are expected to have `value` property,
        // that's what gets serialized.
        var defaults = {
          value: node.value
        };

        if ('checked' in node) {
          defaults.checked = node.checked;
        } // In 1.x iron-form would reset `invalid`, so
        // keep it here for backwards compat.


        if ('invalid' in node) {
          defaults.invalid = node.invalid;
        }

        this._defaults.set(node, defaults);
      }
    }
  },

  /**
   * Validates all the required elements (custom and native) in the form.
   * @return {boolean} True if all the elements are valid.
   */
  validate: function () {
    // If you've called this before distribution happened, bail out.
    if (!this._form) {
      return false;
    }

    if (this._form.getAttribute('novalidate') === '') return true; // Start by making the form check the native elements it knows about.

    var valid = this._form.checkValidity();

    var elements = this._getValidatableElements(); // Go through all the elements, and validate the custom ones.


    for (var el, i = 0; el = elements[i], i < elements.length; i++) {
      // This is weird to appease the compiler. We assume the custom element
      // has a validate() method, otherwise we can't check it.
      var validatable =
      /** @type {{validate: (function() : boolean)}} */
      el;

      if (validatable.validate) {
        valid = !!validatable.validate() && valid;
      }
    }

    return valid;
  },

  /**
   * Submits the form.
   *
   * @param {Event=} event
   * @return {void}
   */
  submit: function (event) {
    // We are not using this form for submission, so always cancel its event.
    if (event) {
      event.preventDefault();
    } // If you've called this before distribution happened, bail out.


    if (!this._form) {
      return;
    }

    if (!this.validate()) {
      this.fire('iron-form-invalid');
      return;
    } // Remove any existing children in the submission form (from a previous
    // submit).


    this.$.helper.textContent = '';
    var json = this.serializeForm(); // If we want a redirect, submit the form natively.

    if (this.allowRedirect) {
      // If we're submitting the form natively, then create a hidden element for
      // each of the values.
      for (var element in json) {
        this.$.helper.appendChild(this._createHiddenElement(element, json[element]));
      } // Copy the original form attributes.


      this.$.helper.action = this._form.getAttribute('action');
      this.$.helper.method = this._form.getAttribute('method') || 'GET';
      this.$.helper.contentType = this._form.getAttribute('enctype') || 'application/x-www-form-urlencoded';
      this.$.helper.submit();
      this.fire('iron-form-submit');
    } else {
      this._makeAjaxRequest(json);
    }
  },

  /**
   * Resets the form to the default values.
   *
   * @param {Event=} event
   * @return {void}
   */
  reset: function (event) {
    // We are not using this form for submission, so always cancel its event.
    if (event) event.preventDefault(); // If you've called this before distribution happened, bail out.

    if (!this._form) {
      return;
    } // Ensure the native form fired the `reset` event.
    // User might have bound `<button on-click="_resetIronForm">`, or directly
    // called `ironForm.reset()`. In these cases we want to first reset the
    // native form.


    if (!event || event.type !== 'reset' || event.target !== this._form) {
      this._form.reset();

      return;
    } // Load the initial values.


    var nodes = this._getValidatableElements();

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (this._defaults.has(node)) {
        var defaults = this._defaults.get(node);

        for (var propName in defaults) {
          node[propName] = defaults[propName];
        }
      }
    }

    this.fire('iron-form-reset');
  },

  /**
   * Serializes the form as will be used in submission. Note that `serialize`
   * is a Polymer reserved keyword, so calling `someIronForm`.serialize()`
   * will give you unexpected results.
   * @return {!Object<string, *>} An object containing name-value pairs for elements that
   *                  would be submitted.
   */
  serializeForm: function () {
    // Only elements that have a `name` and are not disabled are submittable.
    var elements = this._getSubmittableElements();

    var json = {};

    for (var i = 0; i < elements.length; i++) {
      var values = this._serializeElementValues(elements[i]);

      for (var v = 0; v < values.length; v++) {
        this._addSerializedElement(json, elements[i].name, values[v]);
      }
    }

    return json;
  },
  _handleFormResponse: function (event) {
    this.fire('iron-form-response', event.detail);
  },
  _handleFormError: function (event) {
    this.fire('iron-form-error', event.detail);
  },
  _makeAjaxRequest: function (json) {
    // Initialize the iron-ajax element if we haven't already.
    if (!this.request) {
      this.request = document.createElement('iron-ajax');
      this.request.addEventListener('response', this._handleFormResponse.bind(this));
      this.request.addEventListener('error', this._handleFormError.bind(this));
    } // Native forms can also index elements magically by their name (can't make
    // this up if I tried) so we need to get the correct attributes, not the
    // elements with those names.


    this.request.url = this._form.getAttribute('action');
    this.request.method = this._form.getAttribute('method') || 'GET';
    this.request.contentType = this._form.getAttribute('enctype') || 'application/x-www-form-urlencoded';
    this.request.withCredentials = this.withCredentials;
    this.request.headers = this.headers;

    if (this._form.method.toUpperCase() === 'POST') {
      this.request.body = json;
    } else {
      this.request.params = json;
    } // Allow for a presubmit hook


    var event = this.fire('iron-form-presubmit', {}, {
      cancelable: true
    });

    if (!event.defaultPrevented) {
      this.request.generateRequest();
      this.fire('iron-form-submit', json);
    }
  },
  _getValidatableElements: function () {
    return this._findElements(this._form, true
    /* ignoreName */
    , false
    /* skipSlots */
    );
  },
  _getSubmittableElements: function () {
    return this._findElements(this._form, false
    /* ignoreName */
    , false
    /* skipSlots */
    );
  },

  /**
   * Traverse the parent element to find and add all submittable nodes to
   * `submittable`.
   * @param  {!Node} parent The parent node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @param  {!boolean} skipSlots  Whether to skip traversing of slot elements
   * @param  {!Array<!Node>=} submittable Reference to the array of submittables
   * @return {!Array<!Node>}
   * @private
   */
  _findElements: function (parent, ignoreName, skipSlots, submittable) {
    submittable = submittable || [];
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(parent).querySelectorAll('*');

    for (var i = 0; i < nodes.length; i++) {
      // An element is submittable if it is not disabled, and if it has a
      // name attribute.
      if (!skipSlots && (nodes[i].localName === 'slot' || nodes[i].localName === 'content')) {
        this._searchSubmittableInSlot(submittable, nodes[i], ignoreName);
      } else {
        this._searchSubmittable(submittable, nodes[i], ignoreName);
      }
    }

    return submittable;
  },

  /**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The slot or content node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */
  _searchSubmittableInSlot: function (submittable, node, ignoreName) {
    var assignedNodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(node).getDistributedNodes();

    for (var i = 0; i < assignedNodes.length; i++) {
      if (assignedNodes[i].nodeType === Node.TEXT_NODE) {
        continue;
      } // Note: assignedNodes does not contain <slot> or <content> because
      // getDistributedNodes flattens the tree.


      this._searchSubmittable(submittable, assignedNodes[i], ignoreName);

      var nestedAssignedNodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(assignedNodes[i]).querySelectorAll('*');

      for (var j = 0; j < nestedAssignedNodes.length; j++) {
        this._searchSubmittable(submittable, nestedAssignedNodes[j], ignoreName);
      }
    }
  },

  /**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The node to be
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */
  _searchSubmittable: function (submittable, node, ignoreName) {
    if (this._isSubmittable(node, ignoreName)) {
      submittable.push(node);
    } else if (node.root) {
      this._findElements(node.root, ignoreName, true
      /* skipSlots */
      , submittable);
    }
  },

  /**
   * An element is submittable if it is not disabled, and if it has a
   * 'name' attribute. If we ignore the name, check if is validatable.
   * This allows `_findElements` to decide if to explore an element's shadowRoot
   * or not: an element implementing `validate()` is considered validatable, and
   * we don't search for validatables in its shadowRoot.
   * @param {!Node} node
   * @param {!boolean} ignoreName
   * @return {boolean}
   * @private
   */
  _isSubmittable: function (node, ignoreName) {
    return !node.disabled && (ignoreName ? node.name || typeof node.validate === 'function' : node.name);
  },
  _serializeElementValues: function (element) {
    // We will assume that every custom element that needs to be serialized
    // has a `value` property, and it contains the correct value.
    // The only weird one is an element that implements
    // IronCheckedElementBehaviour, in which case like the native checkbox/radio
    // button, it's only used when checked. For native elements, from
    // https://www.w3.org/TR/html5/forms.html#the-form-element. Native
    // submittable elements: button, input, keygen, object, select, textarea;
    // 1. We will skip `keygen and `object` for this iteration, and deal with
    // them if they're actually required.
    // 2. <button> and <textarea> have a `value` property, so they behave like
    //    the custom elements.
    // 3. <select> can have multiple options selected, in which case its
    //    `value` is incorrect, and we must use the values of each of its
    //    `selectedOptions`
    // 4. <input> can have a whole bunch of behaviours, so it's handled
    // separately.
    // 5. Buttons are hard. The button that was clicked to submit the form
    //    is the one who's name/value gets sent to the server.
    var tag = element.tagName.toLowerCase();

    if (tag === 'button' || tag === 'input' && (element.type === 'submit' || element.type === 'reset')) {
      return [];
    }

    if (tag === 'select') {
      return this._serializeSelectValues(element);
    } else if (tag === 'input') {
      return this._serializeInputValues(element);
    } else {
      if (element['_hasIronCheckedElementBehavior'] && !element.checked) return [];
      return [element.value];
    }
  },
  _serializeSelectValues: function (element) {
    var values = []; // A <select multiple> has an array of options, some of which can be
    // selected.

    for (var i = 0; i < element.options.length; i++) {
      if (element.options[i].selected) {
        values.push(element.options[i].value);
      }
    }

    return values;
  },
  _serializeInputValues: function (element) {
    // Most of the inputs use their 'value' attribute, with the exception
    // of radio buttons, checkboxes and file.
    var type = element.type.toLowerCase(); // Don't do anything for unchecked checkboxes/radio buttons.
    // Don't do anything for file, since that requires a different request.

    if ((type === 'checkbox' || type === 'radio') && !element.checked || type === 'file') {
      return [];
    }

    return [element.value];
  },
  _createHiddenElement: function (name, value) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', name);
    input.setAttribute('value', value);
    return input;
  },
  _addSerializedElement: function (json, name, value) {
    // If the name doesn't exist, add it. Otherwise, serialize it to
    // an array,
    if (json[name] === undefined) {
      json[name] = value;
    } else {
      if (!Array.isArray(json[name])) {
        json[name] = [json[name]];
      }

      json[name].push(value);
    }
  }
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-list/3.0.2/node_modules/@polymer/iron-list/iron-list.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-list/3.0.2/node_modules/@polymer/iron-list/iron-list.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es6");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-resizable-behavior/3.0.1/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-scroll-target-behavior/3.0.1/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/mutable-data-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/templatizer-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flush.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/path.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/path.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es6");
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














var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var SECRET_TABINDEX = -100;
/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Styling

You can use the `--iron-list-items-container` mixin to style the container of
items:

```css
iron-list {
 --iron-list-items-container: {
    margin: auto;
  };
}
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@group Iron Element
@element iron-list
@demo demo/index.html

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"]`
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
`,
  is: 'iron-list',
  properties: {
    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {
      type: Array
    },

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {
      type: String,
      value: 'item'
    },

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {
      type: String,
      value: 'index'
    },

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {
      type: String,
      value: 'selected'
    },

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {
      type: Boolean,
      value: false
    },

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {
      type: Object,
      notify: true
    },

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {
      type: Object,
      notify: true
    },

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {
      type: Boolean,
      value: false
    },

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {
      type: Number,
      value: 0
    }
  },
  observers: ['_itemsChanged(items.*)', '_selectionEnabledChanged(selectionEnabled)', '_multiSelectionChanged(multiSelection)', '_setOverflow(scrollTarget, scrollOffset)'],
  behaviors: [_polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__["Templatizer"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronScrollTargetBehavior"], _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__["OptionalMutableDataBehavior"]],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is the same as `scrollTop`.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplateInstanceBase>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?TemplatizerNode}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);

    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;

    if (val < 0) {
      val = this._physicalCount + val;
    }

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;

    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;
      idx = this._iterateItems(function (pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
        } // Handle a partially rendered final row in grid mode


        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - vidx % this._itemsPerRow;
        }
      }) || 0;
      this._firstVisibleIndexVal = idx;
    }

    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;

    if (idx == null) {
      if (this.grid) {
        idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;

        this._iterateItems(function (pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }

          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }

      this._lastVisibleIndexVal = idx;
    }

    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  ready: function () {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },
  attached: function () {
    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },
  detached: function () {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function (scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : ''; // Clear cache.

    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;

    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function () {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function () {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0; // Track the current scroll position.

    this._scrollPosition = scrollTop; // Clear indexes for first and last visible indexes.

    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null; // Random access.

    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;

      var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;

      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset.

      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;

      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);

      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }

      this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);

      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function (fromTop) {
    var ith, lastIth, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    var scrollTop = this._scrollTop;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      lastIth = this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      lastIth = this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }

    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;

      if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
        break;
      }

      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        } // Check that the index is not visible.


        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }

        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        } // Check that the index is not visible.


        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }

        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = ith === 0 ? physicalCount - 1 : ith - 1;
      }
    }

    return {
      indexes: idxs,
      physicalTop: top - this._scrollOffset
    };
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function (itemSet, movingUp) {
    if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
      return;
    }

    this._manageFocus();

    this._assignModels(itemSet);

    this._updateMetrics(itemSet); // Adjust offset after measuring.


    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }

    this._positionItems();

    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function (size) {
    this._ensureTemplatized();

    var i, inst;
    var physicalItems = new Array(size);

    for (i = 0; i < size; i++) {
      inst = this.stamp(null); // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.

      physicalItems[i] = inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    }

    return physicalItems;
  },
  _isClientFull: function () {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function (count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);

    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;

      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }

      nextPhysicalCount -= correction;
    }

    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }

    if (delta > 0) {
      var ts = window.performance.now(); // Concat arrays in place.

      [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.

      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }

      this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.

      if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }

      this._update();

      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    } // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.


    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {// Do nothing.
    } else if (!this._isClientFull()) {
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["idlePeriod"]);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function () {
    if (!this.isAttached || !this._isVisible) {
      return;
    }

    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);

      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;

      this._update(reusables.indexes);

      this._update();

      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();

      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function () {
    if (this.ctor) {
      return;
    }

    this._userTemplate = this.queryEffectiveChildren('template');

    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }

    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },
  _gridChanged: function (newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined') return;
    this.notifyResize();
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function (change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;

      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }

      this._removeFocusedItem();

      this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);

      this._virtualCount = this.items ? this.items.length : 0; // Only blur if at least one item is added or removed.

      var itemAddedOrRemoved = change.value.indexSplices.some(function (splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });

      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();

        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      } // Render only if the affected index is rendered.


      var affectedIndexRendered = change.value.indexSplices.some(function (splice) {
        return splice.index + splice.addedCount >= this._virtualStart && splice.index <= this._virtualEnd;
      }, this);

      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }
  },
  _forwardItemPath: function (path, value) {
    path = path.slice(6); // 'items.'.length == 6

    var dot = path.indexOf('.');

    if (dot === -1) {
      dot = path.length;
    }

    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    var vidx = parseInt(path.substring(0, dot), 10);
    isIndexRendered = this._isIndexRendered(vidx);

    if (isIndexRendered) {
      pidx = this._getPhysicalIndex(vidx);
      inst = this.modelForElement(this._physicalItems[pidx]);
    } else if (offscreenInstance) {
      inst = offscreenInstance;
    }

    if (!inst || inst[this.indexAs] !== vidx) {
      return;
    }

    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');

    inst._setPendingPropertyOrPath(path, value, false, true);

    inst._flushProperties && inst._flushProperties(true); // TODO(blasten): V1 doesn't do this and it's a bug

    if (isIndexRendered) {
      this._updateMetrics([pidx]);

      this._positionItems();

      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!Object>} splices
   */
  _adjustVirtualIndex: function (splices) {
    splices.forEach(function (splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this); // We only need to care about changes happening above the current position

      if (splice.index < this._virtualStart) {
        var delta = Math.max(splice.addedCount - splice.removed.length, splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;

        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },
  _removeItem: function (item) {
    this.$.selector.deselect(item); // remove the current focused item

    if (this._focusedItem && this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function (fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);

        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;

      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }

      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function (pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }

    return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function (itemSet) {
    this._iterateItems(function (pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];

      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = null;

        this._forwardProperty(inst, this.as, item);

        this._forwardProperty(inst, this.selectedAs, this.$.selector.isSelected(item));

        this._forwardProperty(inst, this.indexAs, vidx);

        this._forwardProperty(inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);

        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function (itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function (pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();

      this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    } // Update the average if it measured something.


    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
    }
  },
  _updateGridMetrics: function () {
    this._itemWidth = this._physicalCount > 0 ? this._physicalItems[0].getBoundingClientRect().width : 200;
    this._rowHeight = this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ? Math.floor(this._viewportWidth / this._itemWidth) : this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function () {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function (pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor(modulus * this._itemWidth + rowOffset);

        if (this._isRTL) {
          x = x * -1;
        }

        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);

        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      this._iterateItems(function (pidx, vidx) {
        this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
        y += this._physicalSizes[pidx];
      });
    }
  },
  _getPhysicalSizeIncrement: function (pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }

    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }

    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function (vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function () {
    var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0); // Note: the delta can be positive or negative.

    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      var scrollTop = this._scrollTop; // juking scroll position during interial scrolling on iOS is no bueno

      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function (pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function (forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
    }

    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight; // Amortize height adjustment, so it won't trigger large repaints too often.

    if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function (item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function (idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }

    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])(); // Items should have been rendered prior scrolling to an index.

    if (this._physicalCount === 0) {
      return;
    }

    idx = this._clamp(idx, 0, this._virtualCount - 1); // Update the virtual start only when needed.

    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
    }

    this._manageFocus();

    this._assignModels();

    this._updateMetrics(); // Estimate new physical offset.


    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize; // scroll to the item as much as we can.

    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }

    this._updateScrollerSize(true);

    this._positionItems();

    this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);

    this._increasePoolIfNeeded(0); // clear cached visible index.


    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function () {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function () {
    this._debounce('_render', function () {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;

      if (this._isVisible) {
        this.updateViewportBoundaries(); // Reinstall the scroll event listener.

        this.toggleScrollListener(true);

        this._resetAverage();

        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function (item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function (index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);

      if (model) {
        model[this.selectedAs] = true;
      }

      this.updateSizeForIndex(index);
    }

    this.$.selector.selectIndex(index);
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function (item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function (index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }

    this.$.selector.deselectIndex(index);
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function (item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function (index) {
    var isSelected = this.$.selector.isIndexSelected ? this.$.selector.isIndexSelected(index) : this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function () {
    this._iterateItems(function (pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });

    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function (selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function (e) {
    var model = this.modelForElement(e.target);

    if (!model) {
      return;
    }

    var modelTabIndex, activeElTabIndex;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(e).path[0];

    var activeEl = this._getActiveElement();

    var physicalItem = this._physicalItems[this._getPhysicalIndex(model[this.indexAs])]; // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043


    if (target.localName === 'input' || target.localName === 'button' || target.localName === 'select') {
      return;
    } // Set a temporary tabindex


    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex; // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`

    if (activeEl && physicalItem !== activeEl && physicalItem.contains(activeEl) && activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }

    this.toggleSelectionForItem(model[this.as]);
  },
  _multiSelectionChanged: function (multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function (item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function (index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }

    this._updateMetrics([this._getPhysicalIndex(index)]);

    this._positionItems();

    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function () {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function (idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
  },
  _isIndexRendered: function (idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },
  _isIndexVisible: function (idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },
  _getPhysicalIndex: function (vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },
  focusItem: function (idx) {
    this._focusPhysicalItem(idx);
  },
  _focusPhysicalItem: function (idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }

    this._restoreFocusedItem(); // scroll to index to make sure it's rendered


    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }

    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];

    var model = this.modelForElement(physicalItem);
    var focusable; // set a secret tab index

    model.tabIndex = SECRET_TABINDEX; // check if focusable element is the physical item

    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    } // search for the element which tabindex is bound to the secret tab index


    if (!focusable) {
      focusable = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(physicalItem).querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    } // restore the tab index


    model.tabIndex = 0; // focus the focusable element

    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },
  _removeFocusedItem: function () {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }

    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },
  _createFocusBackfillItem: function () {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }

    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem = inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    } // Set the offcreen focused physical item.


    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx; // Hide the focused physical.

    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },
  _restoreFocusedItem: function () {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    } // Assign models to the focused index.


    this._assignModels(); // Get the new physical index for the focused index.


    var fpidx = this._focusedPhysicalIndex = this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];

    if (!onScreenItem) {
      return;
    }

    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem); // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').

    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1; // Restore the focused physical item.

      this._physicalItems[fpidx] = this._offscreenFocusedItem; // Hide the physical item that backfills.

      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();

      this._focusBackfillItem = null;
    }

    this._offscreenFocusedItem = null;
  },
  _didFocus: function (e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;

    if (!targetModel) {
      return;
    }

    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem(); // Restore tabIndex for the currently focused item.


      if (focusedModel) {
        focusedModel.tabIndex = -1;
      } // Set the tabIndex for the next focused item.


      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];

      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },
  _keydownHandler: function (e) {
    switch (e.keyCode) {
      case
      /* ARROW_DOWN */
      40:
        if (this._focusedVirtualIndex < this._virtualCount - 1) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_RIGHT */
      39:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;

      case
      /* ARROW_UP */
      38:
        if (this._focusedVirtualIndex > 0) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_LEFT */
      37:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;

      case
      /* ENTER */
      13:
        this._focusPhysicalItem(this._focusedVirtualIndex);

        if (this.selectionEnabled) this._selectionHandler(e);
        break;
    }
  },
  _clamp: function (v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _debounce: function (name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__["Debouncer"].debounce(this._debouncers[name], asyncModule, cb.bind(this));
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["enqueueDebouncer"])(this._debouncers[name]);
  },
  _forwardProperty: function (inst, name, value) {
    inst._setPendingProperty(name, value);
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function (prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).forwardHostProp(prop, value);
      }
    }, this);
  },
  _notifyInstancePropV2: function (inst, prop, value) {
    if (Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["matches"])(this.as, prop)) {
      var idx = inst[this.indexAs];

      if (prop == this.as) {
        this.items[idx] = value;
      }

      this.notifyPath(Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["translate"])(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function () {
    return this._physicalItems;
  },
  _forwardInstancePath: function (inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
    }
  },
  _forwardParentPath: function (path, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).notifyPath(path, value, true);
      }
    }, this);
  },
  _forwardParentProp: function (prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item)[prop] = value;
      }
    }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function () {
    var itemsHost = this._itemsParent.node.domHost;
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(itemsHost ? itemsHost.root : document).activeElement;
  }
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-media-query/3.0.1/node_modules/@polymer/iron-media-query/iron-media-query.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-media-query/3.0.1/node_modules/@polymer/iron-media-query/iron-media-query.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es6");
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


/**
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'iron-media-query',
  properties: {
    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {
      type: Boolean,
      value: false,
      readOnly: true,
      notify: true
    },

    /**
     * The CSS media query to evaluate.
     */
    query: {
      type: String,
      observer: 'queryChanged'
    },

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {
      type: Boolean,
      value: false
    },

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function () {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {
      value: null
    }
  },
  attached: function () {
    this.style.display = 'none';
    this.queryChanged();
  },
  detached: function () {
    this._remove();
  },
  _add: function () {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },
  _remove: function () {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }

    this._mq = null;
  },
  queryChanged: function () {
    this._remove();

    var query = this.query;

    if (!query) {
      return;
    }

    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }

    this._mq = window.matchMedia(query);

    this._add();

    this.queryHandler(this._mq);
  },
  queryHandler: function (mq) {
    this._setQueryMatches(mq.matches);
  }
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: DisableUpgradeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableUpgradeMixin", function() { return DisableUpgradeMixin; });
/* harmony import */ var _element_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/element-mixin.js?babel-target=es6");
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/mixin.js?babel-target=es6");
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


const DISABLED_ATTR = 'disable-upgrade';
/**
 * Element class mixin that allows the element to boot up in a non-enabled
 * state when the `disable-upgrade` attribute is present. This mixin is
 * designed to be used with element classes like PolymerElement that perform
 * initial startup work when they are first connected. When the
 * `disable-upgrade` attribute is removed, if the element is connected, it
 * boots up and "enables" as it otherwise would; if it is not connected, the
 * element boots up when it is next connected.
 *
 * Using `disable-upgrade` with PolymerElement prevents any data propagation
 * to the element, any element DOM from stamping, or any work done in
 * connected/disconnctedCallback from occuring, but it does not prevent work
 * done in the element constructor.
 *
 * Note, this mixin must be applied on top of any element class that
 * itself implements a `connectedCallback` so that it can control the work
 * done in `connectedCallback`. For example,
 *
 *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
 *
 * @mixinFunction
 * @polymer
 * @appliesMixin ElementMixin
 * @template T
 * @param {function(new:T)} superClass Class to apply mixin to.
 * @return {function(new:T)} superClass with mixin applied.
 */

const DisableUpgradeMixin = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(base => {
  /**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */
  const superClass = Object(_element_mixin_js__WEBPACK_IMPORTED_MODULE_0__["ElementMixin"])(base);
  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DisableUpgradeMixin}
   */

  class DisableUpgradeClass extends superClass {
    /**
     * @suppress {missingProperties} go/missingfnprops
     */
    static get observedAttributes() {
      return super.observedAttributes.concat(DISABLED_ATTR);
    }
    /**
     * @override
     * @param {string} name Attribute name.
     * @param {?string} old The previous value for the attribute.
     * @param {?string} value The new value for the attribute.
     * @param {?string} namespace The XML namespace for the attribute.
     * @return {void}
     */


    attributeChangedCallback(name, old, value, namespace) {
      if (name == DISABLED_ATTR) {
        if (!this.__dataEnabled && value == null && this.isConnected) {
          super.connectedCallback();
        }
      } else {
        super.attributeChangedCallback(name, old, value,
        /** @type {null|string} */
        namespace);
      }
    }
    /*
      NOTE: cannot gate on attribute because this is called before
      attributes are delivered. Therefore, we stub this out and
      call `super._initializeProperties()` manually.
    */

    /** @override */


    _initializeProperties() {} // prevent user code in connected from running

    /** @override */


    connectedCallback() {
      if (this.__dataEnabled || !this.hasAttribute(DISABLED_ATTR)) {
        super.connectedCallback();
      }
    } // prevent element from turning on properties

    /** @override */


    _enableProperties() {
      if (!this.hasAttribute(DISABLED_ATTR)) {
        if (!this.__dataEnabled) {
          super._initializeProperties();
        }

        super._enableProperties();
      }
    } // only go if "enabled"

    /** @override */


    disconnectedCallback() {
      if (this.__dataEnabled) {
        super.disconnectedCallback();
      }
    }

  }

  return DisableUpgradeClass;
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-button-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/src/vaadin-button.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/vaadin-button.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/vaadin-button.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: ComboBoxDataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxDataProviderMixin", function() { return ComboBoxDataProviderMixin; });
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js?babel-target=es6");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */

const ComboBoxDataProviderMixin = superClass => class DataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * Number of items fetched at a time from the dataprovider.
       */
      pageSize: {
        type: Number,
        value: 50,
        observer: '_pageSizeChanged'
      },

      /**
       * Total number of items.
       */
      size: {
        type: Number,
        observer: '_sizeChanged'
      },

      /**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filter` Currently applied filter
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items.
       */
      dataProvider: {
        type: Object,
        observer: '_dataProviderChanged'
      },
      _pendingRequests: {
        value: () => {
          return {};
        }
      },
      __placeHolder: {
        value: new _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"]()
      }
    };
  }

  static get observers() {
    return ['_dataProviderFilterChanged(filter, dataProvider)', '_dataProviderClearFilter(dataProvider, opened, value)', '_warnDataProviderValue(dataProvider, value)', '_ensureFirstPage(opened)'];
  }

  _dataProviderClearFilter(dataProvider, opened, value) {
    // Can't depend on filter in this obsever as we don't want
    // to clear the filter whenever it's set
    if (dataProvider && this.filter) {
      this.size = undefined;
      this._pendingRequests = {};
      this.filter = '';
      this.clearCache();
    }
  }

  ready() {
    super.ready();
    this.clearCache();
    this.$.overlay.addEventListener('index-requested', e => {
      const index = e.detail.index;

      if (index !== undefined) {
        const page = this._getPageForIndex(index);

        if (this._shouldLoadPage(page)) {
          this._loadPage(page);
        }
      }
    });
  }

  _dataProviderFilterChanged() {
    if (this.dataProvider && this.opened) {
      this.size = undefined;
      this._pendingRequests = {};
      this.clearCache();
    }
  }

  _ensureFirstPage(opened) {
    if (opened && this._shouldLoadPage(0)) {
      this._loadPage(0);
    }
  }

  _shouldLoadPage(page) {
    if (!this.filteredItems || this._forceNextRequest) {
      this._forceNextRequest = false;
      return true;
    }

    const loadedItem = this.filteredItems[page * this.pageSize];

    if (loadedItem !== undefined) {
      return loadedItem instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"];
    } else {
      return this.size === undefined;
    }
  }

  _loadPage(page) {
    // make sure same page isn't requested multiple times.
    if (!this._pendingRequests[page] && this.dataProvider) {
      this.loading = true;
      const params = {
        page,
        pageSize: this.pageSize,
        filter: this.filter
      };

      const callback = (items, size) => {
        if (this._pendingRequests[page] === callback) {
          if (!this.filteredItems) {
            const filteredItems = [];
            filteredItems.splice(params.page * params.pageSize, items.length, ...items);
            this.filteredItems = filteredItems;
          } else {
            this.splice('filteredItems', params.page * params.pageSize, items.length, ...items);
          } // Update selectedItem from filteredItems if value is set


          if (this._isValidValue(this.value) && this._getItemValue(this.selectedItem) !== this.value) {
            this._selectItemForValue(this.value);
          }

          this.size = size;
          delete this._pendingRequests[page];

          if (Object.keys(this._pendingRequests).length === 0) {
            this.loading = false;
          }

          if (page === 0 && this.__repositionOverlayDebouncer && items.length > (this.__maxRenderedItems || 0)) {
            setTimeout(() => this.__repositionOverlayDebouncer.flush());
            this.__maxRenderedItems = items.length;
          }
        }
      };

      this._pendingRequests[page] = callback;
      this.dataProvider(params, callback);
    }
  }

  _getPageForIndex(index) {
    return Math.floor(index / this.pageSize);
  }
  /**
   * Clears the cached pages and reloads data from dataprovider when needed.
   */


  clearCache() {
    if (!this.dataProvider) {
      return;
    }

    this._pendingRequests = {};
    const filteredItems = [];

    for (let i = 0; i < (this.size || 0); i++) {
      filteredItems.push(this.__placeHolder);
    }

    this.filteredItems = filteredItems;

    if (this.opened) {
      this._loadPage(0);
    } else {
      this._forceNextRequest = true;
    }
  }

  _sizeChanged(size = 0) {
    const filteredItems = (this.filteredItems || []).slice(0, size);

    for (let i = 0; i < size; i++) {
      filteredItems[i] = filteredItems[i] !== undefined ? filteredItems[i] : this.__placeHolder;
    }

    this.filteredItems = filteredItems;
  }

  _pageSizeChanged(pageSize, oldPageSize) {
    if (Math.floor(pageSize) !== pageSize || pageSize === 0) {
      this.pageSize = oldPageSize;
      throw new Error('`pageSize` value must be an integer > 0');
    }

    this.clearCache();
  }

  _dataProviderChanged(dataProvider, oldDataProvider) {
    this._ensureItemsOrDataProvider(() => {
      this.dataProvider = oldDataProvider;
    });
  }

  _ensureItemsOrDataProvider(restoreOldValueCallback) {
    if (this.items !== undefined && this.dataProvider !== undefined) {
      restoreOldValueCallback();
      throw new Error('Using `items` and `dataProvider` together is not supported');
    }
  }

  _warnDataProviderValue(dataProvider, value) {
    if (dataProvider && value !== '' && (this.selectedItem === undefined || this.selectedItem === null)) {
      const valueIndex = this._indexOfValue(value, this.filteredItems);

      if (valueIndex < 0 || !this._getItemLabel(this.filteredItems[valueIndex])) {
        /* eslint-disable no-console */
        console.warn('Warning: unable to determine the label for the provided `value`. ' + 'Nothing to display in the text field. This usually happens when ' + 'setting an initial `value` before any items are returned from ' + 'the `dataProvider` callback. Consider setting `selectedItem` ' + 'instead of `value`');
        /* eslint-enable no-console */
      }
    }
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_iron_list_iron_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-list/iron-list.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-list/3.0.2/node_modules/@polymer/iron-list/iron-list.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-combo-box-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







const TOUCH_DEVICE = (() => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
})();
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */


class ComboBoxDropdownWrapperElement extends class extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {} {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-combo-box-dropdown-wrapper';
  }

  static get properties() {
    return {
      /**
       * True if the device supports touch events.
       */
      touchDevice: {
        type: Boolean,
        value: TOUCH_DEVICE
      },
      opened: Boolean,

      /**
       * The element to position/align the dropdown by.
       */
      positionTarget: {
        type: Object
      },

      /**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */
      renderer: Function,

      /**
       * `true` when new items are being loaded.
       */
      loading: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_setOverlayHeight'
      },

      /**
       * Used to propagate the `theme` attribute from the host element.
       */
      theme: String,
      _selectedItem: {
        type: Object
      },
      _items: {
        type: Object
      },
      _focusedIndex: {
        type: Number,
        value: -1,
        observer: '_focusedIndexChanged'
      },
      _focusedItem: {
        type: String,
        computed: '_getFocusedItem(_focusedIndex)'
      },
      _itemLabelPath: {
        type: String,
        value: 'label'
      },
      _itemValuePath: {
        type: String,
        value: 'value'
      },
      _selector: Object,
      _itemIdPath: String
    };
  }

  static get observers() {
    return ['_selectorChanged(_selector)', '_loadingChanged(loading)', '_openedChanged(opened, _items, loading)'];
  }

  _fireTouchAction(sourceEvent) {
    this.dispatchEvent(new CustomEvent('vaadin-overlay-touch-action', {
      detail: {
        sourceEvent: sourceEvent
      }
    }));
  }

  _getItems(opened, items) {
    return opened ? items : [];
  }

  _openedChanged(opened, items, loading) {
    if (this.$.dropdown.hasAttribute('disable-upgrade')) {
      if (!opened) {
        return;
      } else {
        this._initDropdown();
      }
    } // Do not attach if no items
    // Do not dettach if opened but user types an invalid search


    this.$.dropdown.opened = !!(opened && (loading || this.$.dropdown.opened || items && items.length));
  }

  _initDropdown() {
    this.$.dropdown.removeAttribute('disable-upgrade');

    this._templateChanged();

    this._loadingChanged(this.loading);

    this.$.dropdown.$.overlay.addEventListener('touchend', e => this._fireTouchAction(e));
    this.$.dropdown.$.overlay.addEventListener('touchmove', e => this._fireTouchAction(e)); // Prevent blurring the input when clicking inside the overlay.

    this.$.dropdown.$.overlay.addEventListener('mousedown', e => e.preventDefault()); // IE11: when scrolling with mouse, the focus goes to the scroller.
    // This causes the overlay closing due to defocusing the input field.
    // Prevent focusing the scroller by setting `unselectable="on"`.

    if (/Trident/.test(navigator.userAgent)) {
      this._scroller.setAttribute('unselectable', 'on');
    }
  }

  _templateChanged(e) {
    if (this.$.dropdown.hasAttribute('disable-upgrade')) {
      return;
    }

    this._selector = this.$.dropdown.$.overlay.content.querySelector('#selector');
    this._scroller = this.$.dropdown.$.overlay.content.querySelector('#scroller');
  }

  _loadingChanged(loading) {
    if (this.$.dropdown.hasAttribute('disable-upgrade')) {
      return;
    }

    if (loading) {
      this.$.dropdown.$.overlay.setAttribute('loading', '');
    } else {
      this.$.dropdown.$.overlay.removeAttribute('loading');
    }
  }

  _selectorChanged(selector) {
    this._patchWheelOverScrolling();
  }

  _setOverlayHeight() {
    if (!this.opened || !this.positionTarget || !this._selector) {
      return;
    }

    const targetRect = this.positionTarget.getBoundingClientRect();
    this._scroller.style.maxHeight = (window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-combo-box-overlay-max-height') : getComputedStyle(this).getPropertyValue('--vaadin-combo-box-overlay-max-height')) || '65vh';

    const maxHeight = this._maxOverlayHeight(targetRect); // overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.


    this.$.dropdown.$.overlay.style.maxHeight = maxHeight; // we need to set height for iron-list to make its `firstVisibleIndex` work correctly.

    this._selector.style.maxHeight = maxHeight;
    this.updateViewportBoundaries();
  }

  _maxOverlayHeight(targetRect) {
    const margin = 8;
    const minHeight = 116; // Height of two items in combo-box

    const bottom = Math.min(window.innerHeight, document.body.scrollHeight - document.body.scrollTop);

    if (this.$.dropdown.alignedAbove) {
      return Math.max(targetRect.top - margin + Math.min(document.body.scrollTop, 0), minHeight) + 'px';
    } else {
      return Math.max(bottom - targetRect.bottom - margin, minHeight) + 'px';
    }
  }

  _getFocusedItem(focusedIndex) {
    if (focusedIndex >= 0) {
      return this._items[focusedIndex];
    }
  }

  _isItemSelected(item, selectedItem, itemIdPath) {
    if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"]) {
      return false;
    } else if (itemIdPath && item !== undefined && selectedItem !== undefined) {
      return this.get(itemIdPath, item) === this.get(itemIdPath, selectedItem);
    } else {
      return item === selectedItem;
    }
  }

  _onItemClick(e) {
    if (e.detail && e.detail.sourceEvent && e.detail.sourceEvent.stopPropagation) {
      this._stopPropagation(e.detail.sourceEvent);
    }

    this.dispatchEvent(new CustomEvent('selection-changed', {
      detail: {
        item: e.model.item
      }
    }));
  }
  /**
   * Gets the index of the item with the provided label.
   * @return {Number}
   */


  indexOfLabel(label) {
    if (this._items && label) {
      for (let i = 0; i < this._items.length; i++) {
        if (this.getItemLabel(this._items[i]).toString().toLowerCase() === label.toString().toLowerCase()) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * If dataProvider is used, dispatch a request for the item’s index if
   * the item is a placeholder object.
   *
   * @return {Number}
   */


  __requestItemByIndex(item, index) {
    if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"] && index !== undefined) {
      this.dispatchEvent(new CustomEvent('index-requested', {
        detail: {
          index
        }
      }));
    }

    return index;
  }
  /**
   * Gets the label string for the item based on the `_itemLabelPath`.
   * @return {String}
   */


  getItemLabel(item, itemLabelPath) {
    itemLabelPath = itemLabelPath || this._itemLabelPath;
    let label = item && itemLabelPath ? this.get(itemLabelPath, item) : undefined;

    if (label === undefined || label === null) {
      label = item ? item.toString() : '';
    }

    return label;
  }

  _isItemFocused(focusedIndex, itemIndex) {
    return focusedIndex == itemIndex;
  }

  _getAriaSelected(focusedIndex, itemIndex) {
    return this._isItemFocused(focusedIndex, itemIndex).toString();
  }

  _getAriaRole(itemIndex) {
    return itemIndex !== undefined ? 'option' : false;
  }

  _focusedIndexChanged(index) {
    if (index >= 0) {
      this._scrollIntoView(index);
    }
  }

  _scrollIntoView(index) {
    if (!(this.opened && index >= 0)) {
      return;
    }

    const visibleItemsCount = this._visibleItemsCount();

    if (visibleItemsCount === undefined) {
      // Scroller is not visible. Moving is unnecessary.
      return;
    }

    let targetIndex = index;

    if (index > this._selector.lastVisibleIndex - 1) {
      // Index is below the bottom, scrolling down. Make the item appear at the bottom.
      // First scroll to target (will be at the top of the scroller) to make sure it's rendered.
      this._selector.scrollToIndex(index); // Then calculate the index for the following scroll (to get the target to bottom of the scroller).


      targetIndex = index - visibleItemsCount + 1;
    } else if (index > this._selector.firstVisibleIndex) {
      // The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
      // the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
      targetIndex = this._selector.firstVisibleIndex;
    }

    this._selector.scrollToIndex(Math.max(0, targetIndex)); // Sometimes the item is partly below the bottom edge, detect and adjust.


    const pidx = this._selector._getPhysicalIndex(index),
          physicalItem = this._selector._physicalItems[pidx];

    if (!physicalItem) {
      return;
    }

    const physicalItemRect = physicalItem.getBoundingClientRect(),
          scrollerRect = this._scroller.getBoundingClientRect(),
          scrollTopAdjust = physicalItemRect.bottom - scrollerRect.bottom + this._viewportTotalPaddingBottom;

    if (scrollTopAdjust > 0) {
      this._scroller.scrollTop += scrollTopAdjust;
    }
  }

  ensureItemsRendered() {
    this._selector._render();
  }

  adjustScrollPosition() {
    if (this.opened && this._items) {
      this._scrollIntoView(this._focusedIndex);
    }
  }
  /**
   * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
   * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
   * scrolling the parent similarly to touch scrolling.
   */


  _patchWheelOverScrolling() {
    const selector = this._selector;
    selector.addEventListener('wheel', e => {
      const scroller = selector._scroller || selector.scrollTarget;
      const scrolledToTop = scroller.scrollTop === 0;
      const scrolledToBottom = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 1;

      if (scrolledToTop && e.deltaY < 0) {
        e.preventDefault();
      } else if (scrolledToBottom && e.deltaY > 0) {
        e.preventDefault();
      }
    });
  }

  updateViewportBoundaries() {
    this._cachedViewportTotalPaddingBottom = undefined;

    this._selector.updateViewportBoundaries();
  }

  get _viewportTotalPaddingBottom() {
    if (this._cachedViewportTotalPaddingBottom === undefined) {
      const itemsStyle = window.getComputedStyle(this._selector.$.items);
      this._cachedViewportTotalPaddingBottom = [itemsStyle.paddingBottom, itemsStyle.borderBottomWidth].map(v => {
        return parseInt(v, 10);
      }).reduce((sum, v) => {
        return sum + v;
      });
    }

    return this._cachedViewportTotalPaddingBottom;
  }

  _visibleItemsCount() {
    if (!this._selector) {
      return;
    } // Ensure items are rendered


    this._selector.flushDebouncer('_debounceTemplate'); // Ensure items are positioned


    this._selector.scrollToIndex(this._selector.firstVisibleIndex); // Ensure viewport boundaries are up-to-date


    this.updateViewportBoundaries();
    return this._selector.lastVisibleIndex - this._selector.firstVisibleIndex + 1;
  }

  _selectItem(item) {
    item = typeof item === 'number' ? this._items[item] : item;

    if (this._selector.selectedItem !== item) {
      this._selector.selectItem(item);
    }
  }

  _preventDefault(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

  _hidden(itemsChange) {
    return !this.loading && (!this._items || !this._items.length);
  }

}

customElements.define(ComboBoxDropdownWrapperElement.is, ComboBoxDropdownWrapperElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-resizable-behavior/3.0.1/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/class.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

class ComboBoxOverlayElement extends _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__["OverlayElement"] {
  static get is() {
    return 'vaadin-combo-box-overlay';
  }

  ready() {
    super.ready();
    const loader = document.createElement('div');
    loader.setAttribute('part', 'loader');
    const content = this.shadowRoot.querySelector(['[part~="content"]']);
    content.parentNode.insertBefore(loader, content);
  }

}

customElements.define(ComboBoxOverlayElement.is, ComboBoxOverlayElement);
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */

class ComboBoxDropdownElement extends Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__["mixinBehaviors"])(_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronResizableBehavior"], _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-combo-box-dropdown';
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        observer: '_openedChanged'
      },
      template: {
        type: Object,
        notify: true
      },

      /**
       * The element to position/align the dropdown by.
       */
      positionTarget: {
        type: Object
      },

      /**
       * If `true`, overlay is aligned above the `positionTarget`
       */
      alignedAbove: {
        type: Boolean,
        value: false
      },

      /**
       * Used to propagate the `theme` attribute from the host element.
       */
      theme: String
    };
  }

  constructor() {
    super();
    this._boundSetPosition = this._setPosition.bind(this);
    this._boundOutsideClickListener = this._outsideClickListener.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', this._boundSetPosition);
  }

  ready() {
    super.ready(); // Preventing the default modal behaviour of the overlay on input clicking

    this.$.overlay.addEventListener('vaadin-overlay-outside-click', e => {
      e.preventDefault();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('iron-resize', this._boundSetPosition); // Making sure the overlay is closed and removed from DOM after detaching the dropdown.

    this.opened = false;
  }

  notifyResize() {
    super.notifyResize();

    if (this.positionTarget && this.opened) {
      this._setPosition(); // Schedule another position update (to cover virtual keyboard opening for example)


      requestAnimationFrame(this._setPosition.bind(this));
    }
  }
  /**
   * Fired after the `vaadin-combo-box-dropdown` opens.
   *
   * @event vaadin-combo-box-dropdown-opened
   */

  /**
   * Fired after the `vaadin-combo-box-dropdown` closes.
   *
   * @event vaadin-combo-box-dropdown-closed
   */


  _openedChanged(opened, oldValue) {
    if (!!opened === !!oldValue) {
      return;
    }

    if (opened) {
      this.$.overlay.style.position = this._isPositionFixed(this.positionTarget) ? 'fixed' : 'absolute';

      this._setPosition();

      window.addEventListener('scroll', this._boundSetPosition, true);
      document.addEventListener('click', this._boundOutsideClickListener, true);
      this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-opened', {
        bubbles: true,
        composed: true
      }));
    } else {
      window.removeEventListener('scroll', this._boundSetPosition, true);
      document.removeEventListener('click', this._boundOutsideClickListener, true);
      this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-closed', {
        bubbles: true,
        composed: true
      }));
    }
  } // We need to listen on 'click' event and capture it and close the overlay before
  // propagating the event to the listener in the button. Otherwise, if the clicked button would call
  // open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4


  _outsideClickListener(event) {
    const eventPath = event.composedPath();

    if (eventPath.indexOf(this.positionTarget) < 0 && eventPath.indexOf(this.$.overlay) < 0) {
      this.opened = false;
    }
  }

  _isPositionFixed(element) {
    const offsetParent = this._getOffsetParent(element);

    return window.getComputedStyle(element).position === 'fixed' || offsetParent && this._isPositionFixed(offsetParent);
  }

  _getOffsetParent(element) {
    if (element.assignedSlot) {
      return element.assignedSlot.parentElement;
    } else if (element.parentElement) {
      return element.offsetParent;
    }

    const parent = element.parentNode;

    if (parent && parent.nodeType === 11 && parent.host) {
      return parent.host; // parent is #shadowRoot
    }
  }

  _verticalOffset(overlayRect, targetRect) {
    return this.alignedAbove ? -overlayRect.height : targetRect.height;
  }

  _shouldAlignAbove(targetRect) {
    const spaceBelow = (window.innerHeight - targetRect.bottom - Math.min(document.body.scrollTop, 0)) / window.innerHeight;
    return spaceBelow < 0.30;
  }

  _setPosition(e) {
    if (this.hidden) {
      return;
    }

    if (e && e.target) {
      const target = e.target === document ? document.body : e.target;
      const parent = this.$.overlay.parentElement;

      if (!(target.contains(this.$.overlay) || target.contains(this.positionTarget)) || parent !== document.body) {
        return;
      }
    }

    const targetRect = this.positionTarget.getBoundingClientRect();
    this.alignedAbove = this._shouldAlignAbove(targetRect);
    const overlayRect = this.$.overlay.getBoundingClientRect();
    this._translateX = targetRect.left - overlayRect.left + (this._translateX || 0);
    this._translateY = targetRect.top - overlayRect.top + (this._translateY || 0) + this._verticalOffset(overlayRect, targetRect);

    const _devicePixelRatio = window.devicePixelRatio || 1;

    this._translateX = Math.round(this._translateX * _devicePixelRatio) / _devicePixelRatio;
    this._translateY = Math.round(this._translateY * _devicePixelRatio) / _devicePixelRatio;
    this.$.overlay.style.transform = `translate3d(${this._translateX}px, ${this._translateY}px, 0)`;
    this.$.overlay.style.width = this.positionTarget.clientWidth + 'px';
    this.$.overlay.style.justifyContent = this.alignedAbove ? 'flex-end' : 'flex-start'; // TODO: fire only when position actually changes changes

    this.dispatchEvent(new CustomEvent('position-changed'));
  }

}

customElements.define(ComboBoxDropdownElement.is, ComboBoxDropdownElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * The default element used for items in the vaadin-combo-box.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the item label or template content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `selected` | Set when the item is selected | :host
 * `focused` | Set when the item is focused | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @private
 */

class ComboBoxItemElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`;
  }

  static get is() {
    return 'vaadin-combo-box-item';
  }

  static get properties() {
    return {
      /**
       * The index of the item
       */
      index: Number,

      /**
       * The item to render
       * @type {(String|Object)}
       */
      item: Object,

      /**
       * The text label corresponding to the item
       */
      label: String,

      /**
       * True when item is selected
       */
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * True when item is focused
       */
      focused: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The template instance corresponding to the item
       */
      _itemTemplateInstance: Object,

      /**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */
      renderer: Function,

      /**
       * Saved instance of a custom renderer function.
       */
      _oldRenderer: Function
    };
  }

  static get observers() {
    return ['_rendererOrItemChanged(renderer, index, item.*)', '_updateLabel(label, _itemTemplateInstance)', '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)', '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)', '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)', '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)'];
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this._itemTemplateInstance) {
      // 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
      const overlay = this.getRootNode().host.getRootNode().host;
      const dropdown = overlay.__dataHost;
      const comboBoxOverlay = dropdown.getRootNode().host;
      this._comboBox = comboBoxOverlay.getRootNode().host;

      this._comboBox._ensureTemplatized();

      if (this._comboBox._TemplateClass) {
        this._itemTemplateInstance = new this._comboBox._TemplateClass({});
        this.$.content.textContent = '';
        this.$.content.appendChild(this._itemTemplateInstance.root);
      }
    }
  }

  _render() {
    if (!this.renderer) {
      return;
    }

    const model = {
      index: this.index,
      item: this.item
    };
    this.renderer(this.$.content, this._comboBox, model);
  }

  _rendererOrItemChanged(renderer, index, item) {
    if (item === undefined || index === undefined) {
      return;
    }

    if (this._oldRenderer !== renderer) {
      this.$.content.innerHTML = '';
    }

    if (renderer) {
      this._oldRenderer = renderer;

      this._render();
    }
  }

  _updateLabel(label, _itemTemplateInstance) {
    if (_itemTemplateInstance === undefined && this.$.content && !this.renderer) {
      // Only set label to textContent no template
      this.$.content.textContent = label;
    }
  }

  _updateTemplateInstanceVariable(variable, value, _itemTemplateInstance) {
    if (variable === undefined || value === undefined || _itemTemplateInstance === undefined) {
      return;
    }

    _itemTemplateInstance[variable] = value;
  }

}

customElements.define(ComboBoxItemElement.is, ComboBoxItemElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: ComboBoxLightElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxLightElement", function() { return ComboBoxLightElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-data-provider-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_dropdown_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-wrapper.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/case-map.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * `<vaadin-combo-box-light>` is a customizable version of the `<vaadin-combo-box>` providing
 * only the dropdown functionality and leaving the input field definition to the user.
 *
 * The element has the same API as `<vaadin-combo-box>`.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `value` by default. See the example below for a simplest possible example
 * using a `<vaadin-text-field>` element.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <vaadin-text-field>
 *   </vaadin-text-field>
 * </vaadin-combo-box-light>
 * ```
 *
 * If you are using other custom input fields like `<iron-input>`, you
 * need to define the name of the bindable property with the `attrForValue` attribute.
 *
 * ```html
 * <vaadin-combo-box-light attr-for-value="bind-value">
 *   <iron-input>
 *     <input>
 *   </iron-input>
 * </vaadin-combo-box-light>
 * ```
 *
 * In the next example you can see how to create a custom input field based
 * on a `<paper-input>` decorated with a custom `<iron-icon>` and
 * two `<paper-button>`s to act as the clear and toggle controls.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <paper-input label="Elements" class="input">
 *     <iron-icon icon="toll" slot="prefix"></iron-icon>
 *     <paper-button slot="suffix" class="clear-button">Clear</paper-button>
 *     <paper-button slot="suffix" class="toggle-button">Toggle</paper-button>
 *   </paper-input>
 * </vaadin-combo-box-light>
 * ```
 * @memberof Vaadin
 * @mixes Vaadin.ComboBoxDataProviderMixin
 * @mixes Vaadin.ComboBoxMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 */

class ComboBoxLightElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemePropertyMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxDataProviderMixin"])(Object(_vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ComboBoxMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host([opened]) {
        pointer-events: auto;
      }
    </style>

    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`;
  }

  static get is() {
    return 'vaadin-combo-box-light';
  }

  static get properties() {
    return {
      /**
       * Name of the two-way data-bindable property representing the
       * value of the custom input field.
       */
      attrForValue: {
        type: String,
        value: 'value'
      },
      inputElement: {
        type: Element,
        readOnly: true
      }
    };
  }

  constructor() {
    super();
    this._boundInputValueChanged = this._inputValueChanged.bind(this);
    this.__boundInputValueCommitted = this.__inputValueCommitted.bind(this);
  }

  ready() {
    super.ready();
    this._toggleElement = this.querySelector('.toggle-button');
    this._clearElement = this.querySelector('.clear-button');

    if (this._clearElement) {
      this._clearElement.addEventListener('mousedown', e => {
        e.preventDefault(); // Prevent native focus changes
        // _focusableElement is needed for paper-input

        (this.inputElement._focusableElement || this.inputElement).focus();
      });
    }
  }

  get focused() {
    return this.getRootNode().activeElement === this.inputElement;
  }

  connectedCallback() {
    super.connectedCallback();
    const cssSelector = 'vaadin-text-field,iron-input,paper-input,.paper-input-input,.input';

    this._setInputElement(this.querySelector(cssSelector));

    this._revertInputValue();

    this.inputElement.addEventListener('input', this._boundInputValueChanged);
    this.inputElement.addEventListener('change', this.__boundInputValueCommitted);

    this._preventInputBlur();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.inputElement.removeEventListener('input', this._boundInputValueChanged);
    this.inputElement.removeEventListener('change', this.__boundInputValueCommitted);

    this._restoreInputBlur();
  }

  __inputValueCommitted(e) {
    // Detect if the input was cleared (by clicking the clear button on a vaadin-text-field)
    // and propagate the value change to combo box value immediately.
    if (e.__fromClearButton) {
      this._clear();
    }
  }

  get _propertyForValue() {
    return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__["dashToCamelCase"])(this.attrForValue);
  }

  get _inputElementValue() {
    return this.inputElement && this.inputElement[this._propertyForValue];
  }

  set _inputElementValue(value) {
    if (this.inputElement) {
      this.inputElement[this._propertyForValue] = value;
    }
  }

}

customElements.define(ComboBoxLightElement.is, ComboBoxLightElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: ComboBoxMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxMixin", function() { return ComboBoxMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flush.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es6");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-announcer/3.0.2/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js?babel-target=es6");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * @polymerMixin
 */

const ComboBoxMixin = subclass => class VaadinComboBoxMixinElement extends subclass {
  static get properties() {
    return {
      /**
       * True if the dropdown is open, false otherwise.
       */
      opened: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true,
        observer: '_openedChanged'
      },

      /**
       * Set to true to disable this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * When present, it specifies that the element field is read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
       * - `comboBox` The reference to the `<vaadin-combo-box>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       */
      renderer: Function,

      /**
       * A full set of items to filter the visible options from.
       * The items can be of either `String` or `Object` type.
       */
      items: {
        type: Array,
        observer: '_itemsChanged'
      },

      /**
       * If `true`, the user can input a value that is not present in the items list.
       * `value` property will be set to the input value in this case.
       * Also, when `value` is set programmatically, the input value will be set
       * to reflect that value.
       */
      allowCustomValue: {
        type: Boolean,
        value: false
      },

      /**
       * A subset of items, filtered based on the user input. Filtered items
       * can be assigned directly to omit the internal filtering functionality.
       * The items can be of either `String` or `Object` type.
       */
      filteredItems: {
        type: Array
      },

      /**
       * The `String` value for the selected item of the combo box. Provides
       * the value for `iron-form`.
       *
       * When there’s no item selected, the value is an empty string.
       *
       * Use `selectedItem` property to get the raw selected item from
       * the `items` array.
       */
      value: {
        type: String,
        observer: '_valueChanged',
        notify: true,
        value: ''
      },

      /**
       * Used to detect user value changes and fire `change` events.
       */
      _lastCommittedValue: String,

      /*
       * When set to `true`, "loading" attribute is added to host and the overlay element.
       */
      loading: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      _focusedIndex: {
        type: Number,
        value: -1
      },

      /**
       * Filtering string the user has typed into the input field.
       */
      filter: {
        type: String,
        value: '',
        notify: true
      },

      /**
       * The selected item from the `items` array.
       */
      selectedItem: {
        type: Object,
        notify: true
      },

      /**
       * Path for label of the item. If `items` is an array of objects, the
       * `itemLabelPath` is used to fetch the displayed string label for each
       * item.
       *
       * The item label is also used for matching items when processing user
       * input, i.e., for filtering and selecting items.
       *
       * When using item templates, the property is still needed because it is used
       * for filtering, and for displaying the selected item value in the input box.
       */
      itemLabelPath: {
        type: String,
        value: 'label',
        observer: '_itemLabelPathChanged'
      },

      /**
       * Path for the value of the item. If `items` is an array of objects, the
       * `itemValuePath:` is used to fetch the string value for the selected
       * item.
       *
       * The item value is used in the `value` property of the combo box,
       * to provide the form value.
       */
      itemValuePath: {
        type: String,
        value: 'value'
      },

      /**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem` and `filteredItems` (items given by the
       * `dataProvider` callback).
       */
      itemIdPath: String,

      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * Set to true if the value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },
      _toggleElement: Object,
      _clearElement: Object,
      _inputElementValue: String,
      _closeOnBlurIsPrevented: Boolean,
      _previousDocumentPointerEvents: String,
      _itemTemplate: Object
    };
  }

  static get observers() {
    return ['_filterChanged(filter, itemValuePath, itemLabelPath)', '_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)', '_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)', '_templateOrRendererChanged(_itemTemplate, renderer)', '_loadingChanged(loading)', '_selectedItemChanged(selectedItem, itemLabelPath)', '_toggleElementChanged(_toggleElement)'];
  }

  ready() {
    super.ready();
    this.addEventListener('focusout', e => {
      // Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
      const dropdown = this.$.overlay.$.dropdown;

      if (dropdown && dropdown.$ && e.relatedTarget === dropdown.$.overlay) {
        e.composedPath()[0].focus();
        return;
      }

      if (!this._closeOnBlurIsPrevented) {
        this.close();
      }
    });
    this._lastCommittedValue = this.value;
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability(); // 2.0 does not support 'overlay.selection-changed' syntax in listeners

    this.$.overlay.addEventListener('selection-changed', this._overlaySelectedItemChanged.bind(this));
    this.addEventListener('vaadin-combo-box-dropdown-closed', this.close.bind(this));
    this.addEventListener('vaadin-combo-box-dropdown-opened', this._onOpened.bind(this));
    this.addEventListener('keydown', this._onKeyDown.bind(this));
    this.addEventListener('click', this._onClick.bind(this));
    this.$.overlay.addEventListener('vaadin-overlay-touch-action', this._onOverlayTouchAction.bind(this));
    this.addEventListener('touchend', e => {
      if (!this._clearElement || e.composedPath()[0] !== this._clearElement) {
        return;
      }

      e.preventDefault();

      this._clear();
    });
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__["FlattenedNodesObserver"](this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    });
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    if (this.$.overlay._selector) {
      this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item').forEach(item => item._render());
    }
  }

  _setTemplateFromNodes(nodes) {
    this._itemTemplate = nodes.filter(node => node.localName && node.localName === 'template')[0] || this._itemTemplate;
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._itemTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }

  _templateOrRendererChanged(template, renderer) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for combo box items');
    }

    this._oldTemplate = template;
    this._oldRenderer = renderer;
  }
  /**
   * Opens the dropdown list.
   */


  open() {
    // Prevent _open() being called when input is disabled or read-only
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }
  /**
   * Closes the dropdown list.
   */


  close() {
    this.opened = false;
  }

  _openedChanged(value, old) {
    // Prevent _close() being called when opened is set to its default value (false).
    if (old === undefined) {
      return;
    }

    if (this.opened) {
      this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring'); // For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.

      if (!this.hasAttribute('focused') && !this.$.overlay.touchDevice) {
        this.focus();
      }
    } else {
      this._onClosed();

      if (this._openedWithFocusRing && this.hasAttribute('focused')) {
        this.focusElement.setAttribute('focus-ring', '');
      }
    }
  }

  _onOverlayTouchAction(event) {
    // On touch devices, blur the input on touch start inside the overlay, in order to hide
    // the virtual keyboard. But don't close the overlay on this blur.
    this._closeOnBlurIsPrevented = true;
    this.inputElement.blur();
    this._closeOnBlurIsPrevented = false;
  }

  _onClick(e) {
    this._closeOnBlurIsPrevented = true;
    const path = e.composedPath();
    const isClearElement = path.indexOf(this._clearElement) !== -1 || path[0].getAttribute('part') === 'clear-button';

    if (isClearElement) {
      this._clear();

      this.focus();
    } else if (path.indexOf(this.inputElement) !== -1) {
      if (path.indexOf(this._toggleElement) > -1 && this.opened) {
        this.close();
      } else {
        this.open();
      }
    }

    this._closeOnBlurIsPrevented = false;
  }
  /**
   * Keyboard navigation
   */


  _onKeyDown(e) {
    if (this._isEventKey(e, 'down')) {
      this._closeOnBlurIsPrevented = true;

      this._onArrowDown();

      this._closeOnBlurIsPrevented = false; // prevent caret from moving

      e.preventDefault();
    } else if (this._isEventKey(e, 'up')) {
      this._closeOnBlurIsPrevented = true;

      this._onArrowUp();

      this._closeOnBlurIsPrevented = false; // prevent caret from moving

      e.preventDefault();
    } else if (this._isEventKey(e, 'enter')) {
      this._onEnter(e);
    } else if (this._isEventKey(e, 'esc')) {
      this._onEscape(e);
    }
  }

  _isEventKey(e, k) {
    return _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k);
  }

  _getItemLabel(item) {
    return this.$.overlay.getItemLabel(item);
  }

  _getItemValue(item) {
    let value = item && this.itemValuePath ? this.get(this.itemValuePath, item) : undefined;

    if (value === undefined) {
      value = item ? item.toString() : '';
    }

    return value;
  }

  _onArrowDown() {
    if (this.opened) {
      if (this.$.overlay._items) {
        this._focusedIndex = Math.min(this.$.overlay._items.length - 1, this._focusedIndex + 1);

        this._prefillFocusedItemLabel();
      }
    } else {
      this.open();
    }
  }

  _onArrowUp() {
    if (this.opened) {
      if (this._focusedIndex > -1) {
        this._focusedIndex = Math.max(0, this._focusedIndex - 1);
      } else {
        if (this.$.overlay._items) {
          this._focusedIndex = this.$.overlay._items.length - 1;
        }
      }

      this._prefillFocusedItemLabel();
    } else {
      this.open();
    }
  }

  _prefillFocusedItemLabel() {
    if (this._focusedIndex > -1) {
      // Reset the input value asyncronously to prevent partial value changes
      // announce. Makes OSX VoiceOver to announce the complete value instead.
      this._inputElementValue = ''; // 1ms delay needed for OSX VoiceOver to realise input value was reset

      setTimeout(() => {
        this._inputElementValue = this._getItemLabel(this.$.overlay._focusedItem);

        this._markAllSelectionRange();
      }, 1);
    }
  }

  _setSelectionRange(start, end) {
    // vaadin-text-field does not implement setSelectionRange, hence we need the native input
    const input = this._nativeInput || this.inputElement; // Setting selection range focuses and/or moves the caret in some browsers,
    // and there's no need to modify the selection range if the input isn't focused anyway.
    // This affects Safari. When the overlay is open, and then hiting tab, browser should focus
    // the next focusable element instead of the combo-box itself.
    // Checking the focused property here is enough instead of checking the activeElement.

    if (this.hasAttribute('focused') && input && input.setSelectionRange) {
      try {
        input.setSelectionRange(start, end);
      } catch (ignore) {// IE11 randomly fails when running tests in Sauce.
      }
    }
  }

  _markAllSelectionRange() {
    if (this._inputElementValue !== undefined) {
      this._setSelectionRange(0, this._inputElementValue.length);
    }
  }

  _clearSelectionRange() {
    if (this._inputElementValue !== undefined) {
      const pos = this._inputElementValue ? this._inputElementValue.length : 0;

      this._setSelectionRange(pos, pos);
    }
  }

  _onEnter(e) {
    // should close on enter when custom values are allowed, input field is cleared, or when an existing
    // item is focused with keyboard.
    if (this.opened && (this.allowCustomValue || this._inputElementValue === '' || this._focusedIndex > -1)) {
      this.close(); // Do not submit the surrounding form.

      e.preventDefault(); // Do not trigger global listeners

      e.stopPropagation();
    }
  }

  _onEscape(e) {
    if (this.opened) {
      this._stopPropagation(e);

      if (this._focusedIndex > -1) {
        this._focusedIndex = -1;

        this._revertInputValue();
      } else {
        this.cancel();
      }
    }
  }

  _toggleElementChanged(toggleElement) {
    if (toggleElement) {
      // Don't blur the input on toggle mousedown
      toggleElement.addEventListener('mousedown', e => e.preventDefault()); // Unfocus previously focused element if focus is not inside combo box (on touch devices)

      toggleElement.addEventListener('click', e => {
        if (this.$.overlay.touchDevice && !this.hasAttribute('focused')) {
          document.activeElement.blur();
        }
      });
    }
  }
  /**
   * Clears the current value.
   */


  _clear() {
    this.selectedItem = null;

    if (this.allowCustomValue) {
      this.value = '';
    }

    this._detectAndDispatchChange();
  }
  /**
   * Reverts back to original value.
   */


  cancel() {
    this._revertInputValueToValue(); // In the next _detectAndDispatchChange() call, the change detection should not pass


    this._lastCommittedValue = this.value;
    this.close();
  }

  _onOpened() {
    // Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
    // we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
    // because that will cause problems to say the least.
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])(); // With iron-list v1.3.9, calling `notifyResize()` no longer renders
    // the items synchronously. It is required to have the items rendered
    // before we update the overlay and the list positions and sizes.

    this.$.overlay.ensureItemsRendered();

    this.$.overlay._selector.toggleScrollListener(true); // Ensure metrics are up-to-date


    this.$.overlay.updateViewportBoundaries(); // Force iron-list to create reusable nodes. Otherwise it will only start
    // doing that in scroll listener, which is especially slow in Edge.

    this.$.overlay._selector._increasePoolIfNeeded();

    setTimeout(() => this._resizeDropdown(), 1); // Defer scroll position adjustment to prevent freeze in Edge

    window.requestAnimationFrame(() => this.$.overlay.adjustScrollPosition()); // _detectAndDispatchChange() should not consider value changes done before opening

    this._lastCommittedValue = this.value;
  }

  _onClosed() {
    // Happens when the overlay is closed by clicking outside
    if (this.opened) {
      this.close();
    }

    if (this.$.overlay._items && this._focusedIndex > -1) {
      const focusedItem = this.$.overlay._items[this._focusedIndex];

      if (this.selectedItem !== focusedItem) {
        this.selectedItem = focusedItem;
      } // make sure input field is updated in case value doesn't change (i.e. FOO -> foo)


      this._inputElementValue = this._getItemLabel(this.selectedItem);
    } else if (this._inputElementValue === '' || this._inputElementValue === undefined) {
      this.selectedItem = null;

      if (this.allowCustomValue) {
        this.value = '';
      }
    } else {
      if (this.allowCustomValue) {
        const e = new CustomEvent('custom-value-set', {
          detail: this._inputElementValue,
          composed: true,
          cancelable: true,
          bubbles: true
        });
        this.dispatchEvent(e);

        if (!e.defaultPrevented) {
          const customValue = this._inputElementValue;

          this._selectItemForValue(customValue);

          this.value = customValue;
        }
      } else {
        this._inputElementValue = this.selectedItem ? this._getItemLabel(this.selectedItem) : '';
      }
    }

    this._detectAndDispatchChange();

    this._clearSelectionRange();

    if (!this.dataProvider) {
      this.filter = '';
    }
  }

  get _propertyForValue() {
    return 'value';
  }
  /**
   *  Filtering and items handling
   */


  _inputValueChanged(e) {
    // Handle only input events from our inputElement.
    if (e.composedPath().indexOf(this.inputElement) !== -1) {
      this._inputElementValue = this.inputElement[this._propertyForValue];

      this._filterFromInput(e);
    }
  }

  _filterFromInput(e) {
    if (!this.opened && !e.__fromClearButton) {
      this.open();
    }

    if (this.filter === this._inputElementValue) {
      // Filter and input value might get out of sync, while keyboard navigating for example.
      // Afterwards, input value might be changed to the same value as used in filtering.
      // In situation like these, we need to make sure all the filter changes handlers are run.
      this._filterChanged(this.filter, this.itemValuePath, this.itemLabelPath);
    } else {
      this.filter = this._inputElementValue;
    }
  }

  _itemLabelPathChanged(itemLabelPath, oldItemLabelPath) {
    if (typeof itemLabelPath !== 'string') {
      console.error('You should set itemLabelPath to a valid string');
    }
  }

  _filterChanged(filter, itemValuePath, itemLabelPath) {
    if (filter === undefined) {
      return;
    }

    if (this.items) {
      this.filteredItems = this._filterItems(this.items, filter);
    } else {
      // With certain use cases (e. g., external filtering), `items` are
      // undefined. Filtering is unnecessary per se, but the filteredItems
      // observer should still be invoked to update focused item.
      this._filteredItemsChanged({
        path: 'filteredItems',
        value: this.filteredItems
      }, itemValuePath, itemLabelPath);
    }
  }

  _loadingChanged(loading) {
    if (loading) {
      this._focusedIndex = -1;
    }
  }

  _revertInputValue() {
    if (this.filter !== '') {
      this._inputElementValue = this.filter;
    } else {
      this._revertInputValueToValue();
    }

    this._clearSelectionRange();
  }

  _revertInputValueToValue() {
    if (this.allowCustomValue && !this.selectedItem) {
      this._inputElementValue = this.value;
    } else {
      this._inputElementValue = this._getItemLabel(this.selectedItem);
    }
  }

  _resizeDropdown() {
    this.$.overlay.$.dropdown.notifyResize();
  }

  _updateHasValue(hasValue) {
    if (hasValue) {
      this.setAttribute('has-value', '');
    } else {
      this.removeAttribute('has-value');
    }
  }

  _selectedItemChanged(selectedItem, itemLabelPath) {
    if (selectedItem === null || selectedItem === undefined) {
      if (this.filteredItems) {
        if (!this.allowCustomValue) {
          this.value = '';
        }

        this._updateHasValue(this.value !== '');

        this._inputElementValue = this.value;
      }
    } else {
      const value = this._getItemValue(selectedItem);

      if (this.value !== value) {
        this.value = value;

        if (this.value !== value) {
          // The value was changed to something else in value-changed listener,
          // so prevent from resetting it to the previous value.
          return;
        }
      }

      this._updateHasValue(true);

      this._inputElementValue = this._getItemLabel(selectedItem); // Could not be defined in 1.x because ready is called after all prop-setters

      if (this.inputElement) {
        this.inputElement[this._propertyForValue] = this._inputElementValue;
      }
    }

    this.$.overlay._selectedItem = selectedItem;

    if (this.filteredItems && this.$.overlay._items) {
      this._focusedIndex = this.filteredItems.indexOf(selectedItem);
    }
  }

  _valueChanged(value, oldVal) {
    if (value === '' && oldVal === undefined) {
      // initializing, no need to do anything (#554)
      return;
    }

    if (this._isValidValue(value)) {
      let item;

      if (this._getItemValue(this.selectedItem) !== value) {
        this._selectItemForValue(value);
      } else {
        item = this.selectedItem;
      }

      if (!item && this.allowCustomValue) {
        this._inputElementValue = value;
      }

      this._updateHasValue(this.value !== '');
    } else {
      this.selectedItem = null;
    } // In the next _detectAndDispatchChange() call, the change detection should pass


    this._lastCommittedValue = undefined;
  }

  _detectAndDispatchChange() {
    if (this.value !== this._lastCommittedValue) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true
      }));
      this._lastCommittedValue = this.value;
    }
  }

  _itemsChanged(items, oldItems) {
    this._ensureItemsOrDataProvider(() => {
      this.items = oldItems;
    });
  }

  _itemsOrPathsChanged(e, itemValuePath, itemLabelPath) {
    if (e.value === undefined) {
      return;
    }

    if (e.path === 'items' || e.path === 'items.splices') {
      this.filteredItems = this.items ? this.items.slice(0) : this.items;

      const valueIndex = this._indexOfValue(this.value, this.items);

      this._focusedIndex = valueIndex;
      const item = valueIndex > -1 && this.items[valueIndex];

      if (item) {
        this.selectedItem = item;
      }
    }
  }

  _filteredItemsChanged(e, itemValuePath, itemLabelPath) {
    if (e.value === undefined) {
      return;
    }

    if (e.path === 'filteredItems' || e.path === 'filteredItems.splices') {
      this._setOverlayItems(this.filteredItems);

      this._focusedIndex = this.opened ? this.$.overlay.indexOfLabel(this.filter) : this._indexOfValue(this.value, this.filteredItems);

      if (this.opened) {
        this._repositionOverlay();
      }
    }
  }

  _filterItems(arr, filter) {
    if (!arr) {
      return arr;
    }

    return arr.filter(item => {
      filter = filter ? filter.toString().toLowerCase() : ''; // Check if item contains input value.

      return this._getItemLabel(item).toString().toLowerCase().indexOf(filter) > -1;
    });
  }

  _selectItemForValue(value) {
    const valueIndex = this._indexOfValue(value, this.filteredItems);

    const previouslySelectedItem = this.selectedItem;
    this.selectedItem = valueIndex >= 0 ? this.filteredItems[valueIndex] : this.dataProvider && this.selectedItem === undefined ? undefined : null;

    if (this.selectedItem === null && previouslySelectedItem === null) {
      this._selectedItemChanged(this.selectedItem);
    }
  }

  _setOverlayItems(items) {
    this.$.overlay.set('_items', items);
  }

  _repositionOverlay() {
    // async needed to reposition correctly after filtering
    // (especially when aligned on top of input)
    this.__repositionOverlayDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this.__repositionOverlayDebouncer, // Long debounce: sizing updates invoke multiple styling rounds,
    // which is very slow in Edge
    _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(500), () => {
      this._resizeDropdown();

      this.$.overlay.updateViewportBoundaries();
      this.$.overlay.ensureItemsRendered();

      this.$.overlay._selector.notifyResize();

      Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])();
    });
  }

  _indexOfValue(value, items) {
    if (items && this._isValidValue(value)) {
      for (let i = 0; i < items.length; i++) {
        if (this._getItemValue(items[i]) === value) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * Checks if the value is supported as an item value in this control.
   *
   * @return {boolean}
   */


  _isValidValue(value) {
    return value !== undefined && value !== null;
  }

  _overlaySelectedItemChanged(e) {
    // stop this private event from leaking outside.
    e.stopPropagation();

    if (e.detail.item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_7__["ComboBoxPlaceholder"]) {
      // Placeholder items should not be selectable.
      return;
    }

    if (this.opened) {
      this._focusedIndex = this.filteredItems.indexOf(e.detail.item);
      this.close();
    } else if (this.selectedItem !== e.detail.item) {
      this.selectedItem = e.detail.item;

      this._detectAndDispatchChange();
    }
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * You can override the `checkValidity` method for custom validations.
   */


  checkValidity() {
    if (this.inputElement.validate) {
      return this.inputElement.validate();
    }
  }

  get _instanceProps() {
    return {
      item: true,
      index: true,
      selected: true,
      focused: true
    };
  }

  _ensureTemplatized() {
    if (!this._TemplateClass) {
      const tpl = this._itemTemplate || this._getRootTemplate();

      if (tpl) {
        this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_3__["templatize"])(tpl, this, {
          instanceProps: this._instanceProps,
          forwardHostProp: function (prop, value) {
            const items = this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item');

            Array.prototype.forEach.call(items, item => {
              if (item._itemTemplateInstance) {
                item._itemTemplateInstance.set(prop, value);

                item._itemTemplateInstance.notifyPath(prop, value, true);
              }
            });
          }
        });
      }
    }
  }

  _getRootTemplate() {
    return Array.prototype.filter.call(this.children, elem => elem.tagName === 'TEMPLATE')[0];
  }

  _preventInputBlur() {
    if (this._toggleElement) {
      this._toggleElement.addEventListener('click', this._preventDefault);
    }

    if (this._clearElement) {
      this._clearElement.addEventListener('click', this._preventDefault);
    }
  }

  _restoreInputBlur() {
    if (this._toggleElement) {
      this._toggleElement.removeEventListener('click', this._preventDefault);
    }

    if (this._clearElement) {
      this._clearElement.removeEventListener('click', this._preventDefault);
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }
  /**
   * Fired when the value changes.
   *
   * @event value-changed
   * @param {Object} detail
   *  @param {String} detail.value the combobox value
   */

  /**
   * Fired when selected item changes.
   *
   * @event selected-item-changed
   * @param {Object} detail
   *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
   */

  /**
   * Fired when the user sets a custom value.
   * @event custom-value-set
   * @param {String} detail the custom value
   */

  /**
   * Fired when value changes.
   * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
   * @event change
   */


};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: ComboBoxPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxPlaceholder", function() { return ComboBoxPlaceholder; });
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/*
 * Placeholder object class representing items being loaded.
 *
 * @private
 */
const ComboBoxPlaceholder = class ComboBoxPlaceholder {
  toString() {
    return '';
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: ComboBoxElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxElement", function() { return ComboBoxElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-control-state-mixin/2.1.3/node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-combo-box-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_dropdown_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-wrapper.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-combo-box-data-provider-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/










/**
 * `<vaadin-combo-box>` is a combo box element combining a dropdown list with an
 * input field for filtering the list of items. If you want to replace the default
 * input field with a custom implementation, you should use the
 * [`<vaadin-combo-box-light>`](#/elements/vaadin-combo-box-light) element.
 *
 * Items in the dropdown list must be provided as a list of `String` values.
 * Defining the items is done using the `items` property, which can be assigned
 * with data-binding, using an attribute or directly with the JavaScript property.
 *
 * ```html
 * <vaadin-combo-box
 *     label="Fruit"
 *     items="[[data]]">
 * </vaadin-combo-box>
 * ```
 *
 * ```js
 * combobox.items = ['apple', 'orange', 'banana'];
 * ```
 *
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 * This element can be used within an `iron-form`.
 *
 * ### Item rendering
 *
 * `<vaadin-combo-box>` supports using custom renderer callback function for defining the
 * content of `<vaadin-combo-box-item>`.
 *
 * The renderer function provides `root`, `comboBox`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `comboBox`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-combo-box id="combo-box"></vaadin-combo-box>
 * ```
 * ```js
 * const comboBox = document.querySelector('#combo-box');
 * comboBox.items = [{'label': 'Hydrogen', 'value': 'H'}];
 * comboBox.renderer = function(root, comboBox, model) {
 *   root.innerHTML = model.index + ': ' +
 *                    model.item.label + ' ' +
 *                    '<b>' + model.item.value + '</b>';
 * };
 * ```
 *
 * Renderer is called on the opening of the combo-box and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Item Template
 *
 * Alternatively, the content of the `<vaadin-combo-box-item>` can be populated by using
 * custom item template provided in the light DOM:
 *
 * ```html
 * <vaadin-combo-box items='[{"label": "Hydrogen", "value": "H"}]'>
 *   <template>
 *     [[index]]: [[item.label]] <b>[[item.value]</b>
 *   </template>
 * </vaadin-combo-box>
 * ```
 *
 * The following properties are available for item template bindings:
 *
 * Property name | Type | Description
 * --------------|------|------------
 * `index`| Number | Index of the item in the `items` array
 * `item` | String or Object | The item reference
 * `selected` | Boolean | True when item is selected
 * `focused` | Boolean | True when item is focused
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<vaadin-combo-box>` data through the
 * [`dataProvider`](#/elements/vaadin-combo-box#property-dataProvider) function property.
 * The `<vaadin-combo-box>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the [`dataProvider`](#/elements/vaadin-combo-box#property-dataProvider) in
 * the API reference below for the detailed data provider arguments description,
 * and the “Lazy Loading“ example on “Basics” page in the demos.
 *
 * __Note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * comboBox.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(
 *       response.employees, // requested page of items
 *       response.totalSize  // total number of items
 *     );
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-combo-box-overlay-max-height` | Property that determines the max height of overlay | `65vh`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `text-field` | The text field
 * `toggle-button` | The toggle button
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [`<vaadin-text-field>` documentation](https://vaadin.com/components/vaadin-text-field/html-api/elements/Vaadin.TextFieldElement)
 * for the text field parts.
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `opened` | Set when the combo box dropdown is open | :host
 * `disabled` | Set to a disabled combo box | :host
 * `readonly` | Set to a read only combo box | :host
 * `has-value` | Set when the element has a value | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `loading` | Set when new items are expected | :host
 *
 * In addition to `<vaadin-combo-box>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-combo-box-overlay>`
 * - `<vaadin-combo-box-item>`
 *
 * Note: the `theme` attribute value set on `<vaadin-combo-box>` is
 * propagated to the internal themable components listed above.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ComboBoxDataProviderMixin
 * @mixes Vaadin.ComboBoxMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */

class ComboBoxElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_8__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ComboBoxDataProviderMixin"])(Object(_vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ComboBoxMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_9__["html"]`
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
`;
  }

  constructor() {
    super();
    /**
     * @property
     */

    this.theme;
  }

  static get is() {
    return 'vaadin-combo-box';
  }

  static get version() {
    return '5.0.4';
  }

  static get properties() {
    return {
      /**
       * The label for this element.
       */
      label: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable this input.
       */
      disabled: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to prevent the user from entering invalid input.
       */
      preventInvalidInput: {
        type: Boolean
      },

      /**
       * A pattern to validate the `input` with.
       */
      pattern: {
        type: String
      },

      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: {
        type: String
      },
      autofocus: {
        type: Boolean
      },

      /**
       * A placeholder string in addition to the label.
       */
      placeholder: {
        type: String,
        value: ''
      },
      readonly: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return ['_updateAriaExpanded(opened)'];
  }

  attributeChanged(name, type) {
    // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari && this.root) {
      Array.prototype.forEach.call(this.root.querySelectorAll('*'), el => {
        el.style['-webkit-backface-visibility'] = 'visible';
        el.style['-webkit-backface-visibility'] = '';
      });
    }
  }

  ready() {
    super.ready();
    this._nativeInput = this.inputElement.focusElement;
    this._toggleElement = this.$.toggleButton;
    this._clearElement = this.inputElement.shadowRoot.querySelector('[part="clear-button"]'); // Stop propagation of Esc in capturing phase so that
    // vaadin-text-field will not handle Esc as a shortcut
    // to clear the value.
    // We need to set this listener for "this.inputElement"
    // instead of just "this", otherwise keyboard navigation behaviour
    // breaks a bit on Safari and some related tests fail.

    this.inputElement.addEventListener('keydown', e => {
      if (this._isEventKey(e, 'esc')) {
        this._stopPropagation(e); // Trigger _onEscape method of vaadin-combo-box-mixin because
        // bubbling phase is not reached.


        this._onEscape(e);
      }
    }, true);

    this._nativeInput.setAttribute('role', 'combobox');

    this._nativeInput.setAttribute('aria-autocomplete', 'list');

    this._updateAriaExpanded();
  }

  connectedCallback() {
    super.connectedCallback();

    this._preventInputBlur();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._restoreInputBlur();
  }

  _getPositionTarget() {
    return this.$.input;
  }

  _updateAriaExpanded() {
    if (this._nativeInput) {
      this._nativeInput.setAttribute('aria-expanded', this.opened);

      this._toggleElement.setAttribute('aria-expanded', this.opened);
    }
  }

  get inputElement() {
    return this.$.input;
  }
  /**
   * Focusable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    // inputElement might not be defined on property changes before ready.
    return this.inputElement || this;
  }

}

customElements.define(ComboBoxElement.is, ComboBoxElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_overlay_theme_lumo_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js?babel-target=es6":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js?babel-target=es6 ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_item_theme_lumo_vaadin_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");





const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_combo_box_dropdown_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_item_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-combo-box-item-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-combo-box-light.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js?babel-target=es6");




/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-styles.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-styles.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js?babel-target=es6":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js?babel-target=es6 ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_combo_box_dropdown_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_item_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-combo-box-item-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_combo_box_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-combo-box-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_combo_box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/vaadin-combo-box.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box.js?babel-target=es6");





/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_combo_box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-combo-box.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: DatePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerHelper", function() { return DatePickerHelper; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DatePickerHelper = class VaadinDatePickerHelper {
  /**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */
  static _getISOWeekNumber(date) {
    // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
    var dayOfWeek = date.getDay(); // 0 == sunday
    // ISO 8601 use weeks that start on monday so we use
    // mon=1,tue=2,...sun=7;

    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    } // Find nearest thursday (defines the week in ISO 8601). The week number
    // for the nearest thursday is the same as for the target date.


    var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday

    var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);
    var firstOfJanuary = new Date(0, 0);
    firstOfJanuary.setFullYear(nearestThursday.getFullYear());
    var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime(); // Rounding the result, as the division doesn't result in an integer
    // when the given date is inside daylight saving time period.

    var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));
    return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
  }
  /**
   * Check if two dates are equal.
   *
   * @param {Date} date1
   * @param {Date} date2
   * @return {Boolean} True if the given date objects refer to the same date
   */


  static _dateEquals(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  }
  /**
   * Check if the given date is in the range of allowed dates.
   *
   * @param {Date} date The date to check
   * @param {Date} min Range start
   * @param {Date} max Range end
   * @return {Boolean} True if the date is in the range
   */


  static _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }
  /**
   * Get closest date from array of dates.
   *
   * @param {Date} date The date to compare dates with
   * @param {Array} dates Array of date objects
   * @return {Date} Closest date
   */


  static _getClosestDate(date, dates) {
    return dates.filter(date => date !== undefined).reduce((closestDate, candidate) => {
      if (!candidate) {
        return closestDate;
      }

      if (!closestDate) {
        return candidate;
      }

      var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
      var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
      return candidateDiff < closestDateDiff ? candidate : closestDate;
    });
  }
  /**
   * Extracts the basic component parts of a date (day, month and year)
   * to the expected format.
   */


  static _extractDateParts(date) {
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: DatePickerMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerMixin", function() { return DatePickerMixin; });
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-resizable-behavior/3.0.1/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/gestures.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/class.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * @polymerMixin
 */

const DatePickerMixin = subclass => class VaadinDatePickerMixin extends Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], subclass) {
  static get properties() {
    return {
      /**
       * The current selected date.
       */
      _selectedDate: {
        type: Date
      },
      _focusedDate: Date,

      /**
       * The value for this element.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      value: {
        type: String,
        observer: '_valueChanged',
        notify: true,
        value: ''
      },

      /**
       * Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * Date which should be visible when there is no value selected.
       *
       * The same date formats as for the `value` property are supported.
       */
      initialPosition: String,

      /**
       * The label for this element.
       */
      label: String,

      /**
       * Set true to open the date selector overlay.
       */
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_openedChanged'
      },

      /**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       */
      showWeekNumbers: {
        type: Boolean
      },
      _fullscreen: {
        value: false,
        observer: '_fullscreenChanged'
      },
      _fullscreenMediaQuery: {
        value: '(max-width: 420px), (max-height: 420px)'
      },
      // An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
      // 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
      _touchPrevented: Array,

      /**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
           {
            // An array with the full names of months starting
            // with January.
            monthNames: [
              'January', 'February', 'March', 'April', 'May',
              'June', 'July', 'August', 'September',
              'October', 'November', 'December'
            ],
             // An array of weekday names starting with Sunday. Used
            // in screen reader announcements.
            weekdays: [
              'Sunday', 'Monday', 'Tuesday', 'Wednesday',
              'Thursday', 'Friday', 'Saturday'
            ],
             // An array of short weekday names starting with Sunday.
            // Displayed in the calendar.
            weekdaysShort: [
              'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ],
             // An integer indicating the first day of the week
            // (0 = Sunday, 1 = Monday, etc.).
            firstDayOfWeek: 0,
             // Used in screen reader announcements along with week
            // numbers, if they are displayed.
            week: 'Week',
             // Translation of the Calendar icon button title.
            calendar: 'Calendar',
             // Translation of the Clear icon button title.
            clear: 'Clear',
             // Translation of the Today shortcut button text.
            today: 'Today',
             // Translation of the Cancel button text.
            cancel: 'Cancel',
             // A function to format given `Object` as
            // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            formatDate: d => {
              // returns a string representation of the given
              // object in 'MM/DD/YYYY' -format
            },
             // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            // Must properly parse (at least) text formatted by `formatDate`.
            // Setting the property to null will disable keyboard input feature.
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            parseDate: text => {
              // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
              // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            }
             // A function to format given `monthName` and
            // `fullYear` integer as calendar title string.
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          }
        *
       * @default {English/US}
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            firstDayOfWeek: 0,
            week: 'Week',
            calendar: 'Calendar',
            clear: 'Clear',
            today: 'Today',
            cancel: 'Cancel',
            formatDate: d => {
              const yearStr = String(d.year).replace(/\d+/, y => '0000'.substr(y.length) + y);
              return [d.month + 1, d.day, yearStr].join('/');
            },
            parseDate: text => {
              const parts = text.split('/');
              const today = new Date();
              let date,
                  month = today.getMonth(),
                  year = today.getFullYear();

              if (parts.length === 3) {
                year = parseInt(parts[2]);

                if (parts[2].length < 3 && year >= 0) {
                  year += year < 50 ? 2000 : 1900;
                }

                month = parseInt(parts[0]) - 1;
                date = parseInt(parts[1]);
              } else if (parts.length === 2) {
                month = parseInt(parts[0]) - 1;
                date = parseInt(parts[1]);
              } else if (parts.length === 1) {
                date = parseInt(parts[0]);
              }

              if (date !== undefined) {
                return {
                  day: date,
                  month,
                  year
                };
              }
            },
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          };
        }
      },

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      min: {
        type: String,
        observer: '_minChanged'
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */
      max: {
        type: String,
        observer: '_maxChanged'
      },

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      _minDate: {
        type: Date,
        // null does not work here because minimizer passes undefined to overlay (#351)
        value: ''
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      _maxDate: {
        type: Date,
        value: ''
      },
      _noInput: {
        type: Boolean,
        computed: '_isNoInput(_fullscreen, _ios, i18n, i18n.*)'
      },
      _ios: {
        type: Boolean,
        value: navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)
      },
      _webkitOverflowScroll: {
        type: Boolean,
        value: document.createElement('div').style.webkitOverflowScrolling === ''
      },
      _ignoreAnnounce: {
        value: true
      },
      _focusOverlayOnOpen: Boolean,
      _overlayInitialized: Boolean
    };
  }

  static get observers() {
    return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
  }

  ready() {
    super.ready();
    this._boundOnScroll = this._onScroll.bind(this);
    this._boundFocus = this._focus.bind(this);
    this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__["addListener"])(this, 'tap', e => {
      // FIXME(platosha): use preventDefault in the text field clear button,
      // then the following composedPath check could be simplified down
      // to `if (!e.defaultPrevented)`.
      // https://github.com/vaadin/vaadin-text-field/issues/352
      const inputIndex = e.composedPath().indexOf(this._inputElement);

      if (e.composedPath().slice(0, inputIndex).filter(el => el.getAttribute && el.getAttribute('part') === 'clear-button').length === 0) {
        this.open();
      }
    });
    this.addEventListener('touchend', this._preventDefault.bind(this));
    this.addEventListener('keydown', this._onKeydown.bind(this));
    this.addEventListener('input', this._onUserInput.bind(this));
    this.addEventListener('focus', e => this._noInput && e.target.blur());
  }

  _initOverlay() {
    this.$.overlay.removeAttribute('disable-upgrade');
    this._overlayInitialized = true;
    this.$.overlay.addEventListener('opened-changed', e => this.opened = e.detail.value);

    this._overlayContent.addEventListener('close', this._close.bind(this));

    this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

    this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

    this._overlayContent.addEventListener('focus', () => this.focusElement._setFocused(true));

    this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._overlayInitialized) {
      this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
    }

    this.opened = false;
  }
  /**
   * Opens the dropdown.
   */


  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }

  _close(e) {
    if (e) {
      e.stopPropagation();
    }

    this._focus();

    this.close();
  }
  /**
   * Closes the dropdown.
   */


  close() {
    if (this._overlayInitialized) {
      this.$.overlay.close();
    }
  }

  get _inputElement() {
    return this._input();
  }

  get _nativeInput() {
    if (this._inputElement) {
      // vaadin-text-field's input is focusElement
      // iron-input's input is inputElement
      return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
    }
  }

  _parseDate(str) {
    // Parsing with RegExp to ensure correct format
    var parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);

    if (!parts) {
      return;
    }

    var date = new Date(0, 0); // Wrong date (1900-01-01), but with midnight in local time

    date.setFullYear(parseInt(parts[1], 10));
    date.setMonth(parseInt(parts[2], 10) - 1);
    date.setDate(parseInt(parts[3], 10));
    return date;
  }

  _isNoInput(fullscreen, ios, i18n) {
    return !this._inputElement || fullscreen || ios || !i18n.parseDate;
  }

  _formatISO(date) {
    if (!(date instanceof Date)) {
      return '';
    }

    const pad = (num, fmt = '00') => (fmt + num).substr((fmt + num).length - fmt.length);

    let yearSign = '';
    let yearFmt = '0000';
    let yearAbs = date.getFullYear();

    if (yearAbs < 0) {
      yearAbs = -yearAbs;
      yearSign = '-';
      yearFmt = '000000';
    } else if (date.getFullYear() >= 10000) {
      yearSign = '+';
      yearFmt = '000000';
    }

    const year = yearSign + pad(yearAbs, yearFmt);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    return [year, month, day].join('-');
  }

  _openedChanged(opened) {
    if (opened && !this._overlayInitialized) {
      this._initOverlay();
    }

    if (this._overlayInitialized) {
      this.$.overlay.opened = opened;
    }

    if (opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _selectedDateChanged(selectedDate, formatDate) {
    if (selectedDate === undefined || formatDate === undefined) {
      return;
    }

    if (this.__userInputOccurred) {
      this.__dispatchChange = true;
    }

    const inputValue = selectedDate && formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(selectedDate));

    const value = this._formatISO(selectedDate);

    if (value !== this.value) {
      this.validate(inputValue);
      this.value = value;
    }

    this.__userInputOccurred = false;
    this.__dispatchChange = false;
    this._focusedDate = selectedDate;
    this._inputValue = selectedDate ? inputValue : '';
  }

  _focusedDateChanged(focusedDate, formatDate) {
    if (focusedDate === undefined || formatDate === undefined) {
      return;
    }

    this.__userInputOccurred = true;

    if (!this._ignoreFocusedDateChange && !this._noInput) {
      this._inputValue = focusedDate ? formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(focusedDate)) : '';
    }
  }

  _updateHasValue(value) {
    if (value) {
      this.setAttribute('has-value', '');
    } else {
      this.removeAttribute('has-value');
    }
  }

  __getOverlayTheme(theme, overlayInitialized) {
    if (overlayInitialized) {
      return theme;
    }
  }

  _handleDateChange(property, value, oldValue) {
    if (!value) {
      this[property] = '';
      return;
    }

    var date = this._parseDate(value);

    if (!date) {
      this.value = oldValue;
      return;
    }

    if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(this[property], date)) {
      this[property] = date;
    }
  }

  _valueChanged(value, oldValue) {
    if (this.__dispatchChange) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true
      }));
    }

    this._handleDateChange('_selectedDate', value, oldValue);
  }

  _minChanged(value, oldValue) {
    this._handleDateChange('_minDate', value, oldValue);
  }

  _maxChanged(value, oldValue) {
    this._handleDateChange('_maxDate', value, oldValue);
  }

  _updateAlignmentAndPosition() {
    if (!this._overlayInitialized) {
      return;
    }

    if (!this._fullscreen) {
      const inputRect = this._inputElement.getBoundingClientRect();

      const bottomAlign = inputRect.top > window.innerHeight / 2;
      const rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

      if (rightAlign) {
        const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        this.$.overlay.setAttribute('right-aligned', '');
        this.$.overlay.style.removeProperty('left');
        this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
      } else {
        this.$.overlay.removeAttribute('right-aligned');
        this.$.overlay.style.removeProperty('right');
        this.$.overlay.style.left = inputRect.left + 'px';
      }

      if (bottomAlign) {
        const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
        this.$.overlay.setAttribute('bottom-aligned', '');
        this.$.overlay.style.removeProperty('top');
        this.$.overlay.style.bottom = viewportHeight - inputRect.top + 'px';
      } else {
        this.$.overlay.removeAttribute('bottom-aligned');
        this.$.overlay.style.removeProperty('bottom');
        this.$.overlay.style.top = inputRect.bottom + 'px';
      }
    }

    this.$.overlay.setAttribute('dir', getComputedStyle(this._inputElement).getPropertyValue('direction'));

    this._overlayContent._repositionYearScroller();
  }

  _fullscreenChanged() {
    if (this._overlayInitialized && this.$.overlay.opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _onOverlayOpened() {
    this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring');

    var parsedInitialPosition = this._parseDate(this.initialPosition);

    var initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || new Date();

    if (parsedInitialPosition || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(initialPosition, this._minDate, this._maxDate)) {
      this._overlayContent.initialPosition = initialPosition;
    } else {
      this._overlayContent.initialPosition = _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._getClosestDate(initialPosition, [this._minDate, this._maxDate]);
    }

    this._overlayContent.scrollToDate(this._overlayContent.focusedDate || this._overlayContent.initialPosition); // Have a default focused date


    this._ignoreFocusedDateChange = true;
    this._overlayContent.focusedDate = this._overlayContent.focusedDate || this._overlayContent.initialPosition;
    this._ignoreFocusedDateChange = false;
    window.addEventListener('scroll', this._boundOnScroll, true);
    this.addEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._webkitOverflowScroll) {
      this._touchPrevented = this._preventWebkitOverflowScrollingTouch(this.parentElement);
    }

    if (this._focusOverlayOnOpen) {
      this._overlayContent.focus();

      this._focusOverlayOnOpen = false;
    } else {
      this._focus();
    }

    if (this._noInput && this.focusElement) {
      this.focusElement.blur();
    }

    this.updateStyles();
    this._ignoreAnnounce = false;
  } // A hack needed for iOS to prevent dropdown from being clipped in an
  // ancestor container with -webkit-overflow-scrolling: touch;


  _preventWebkitOverflowScrollingTouch(element) {
    var result = [];

    while (element) {
      if (window.getComputedStyle(element).webkitOverflowScrolling === 'touch') {
        var oldInlineValue = element.style.webkitOverflowScrolling;
        element.style.webkitOverflowScrolling = 'auto';
        result.push({
          element: element,
          oldInlineValue: oldInlineValue
        });
      }

      element = element.parentElement;
    }

    return result;
  }

  _onOverlayClosed() {
    this._ignoreAnnounce = true;
    window.removeEventListener('scroll', this._boundOnScroll, true);
    this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._touchPrevented) {
      this._touchPrevented.forEach(prevented => prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue);

      this._touchPrevented = [];
    }

    this.updateStyles(); // Select the parsed input or focused date

    this._ignoreFocusedDateChange = true;

    if (this.i18n.parseDate) {
      var inputValue = this._inputValue || '';
      const dateObject = this.i18n.parseDate(inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._selectedDate = parsedDate;
      } else {
        this._selectedDate = null;
        this._inputValue = inputValue;
      }
    } else if (this._focusedDate) {
      this._selectedDate = this._focusedDate;
    }

    this._ignoreFocusedDateChange = false;

    if (this._nativeInput && this._nativeInput.selectionStart) {
      this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
    }

    this.validate();
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @param {string} value Value to validate. Optional, defaults to user's input value.
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate(value) {
    // reset invalid state on the underlying text field
    this.invalid = false;
    value = value !== undefined ? value : this._inputValue;
    return !(this.invalid = !this.checkValidity(value));
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * Override the `checkValidity` method for custom validations.
   *
   * @param {string} value Value to validate. Optional, defaults to the selected date.
   * @return {boolean} True if the value is valid
   */


  checkValidity(value) {
    var inputValid = !value || this._selectedDate && value === this.i18n.formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(this._selectedDate));

    var minMaxValid = !this._selectedDate || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(this._selectedDate, this._minDate, this._maxDate);

    var inputValidity = true;

    if (this._inputElement) {
      if (this._inputElement.checkValidity) {
        // vaadin native input elements have the checkValidity method
        inputValidity = this._inputElement.checkValidity(value);
      } else if (this._inputElement.validate) {
        // iron-form-elements have the validate API
        inputValidity = this._inputElement.validate(value);
      }
    }

    return inputValid && minMaxValid && inputValidity;
  }

  _onScroll(e) {
    if (e.target === window || !this._overlayContent.contains(e.target)) {
      this._updateAlignmentAndPosition();
    }
  }

  _focus() {
    if (this._noInput) {
      this._overlayInitialized && this._overlayContent.focus();
    } else {
      this._inputElement.focus();
    }
  }

  _focusAndSelect() {
    this._focus();

    this._setSelectionRange(0, this._inputValue.length);
  }

  _setSelectionRange(a, b) {
    if (this._nativeInput && this._nativeInput.setSelectionRange) {
      this._nativeInput.setSelectionRange(a, b);
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'enter', 'esc', 'tab'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _isValidDate(d) {
    return d && !isNaN(d.getTime());
  }

  _onKeydown(e) {
    if (this._noInput) {
      // The input element cannot be readonly as it would conflict with
      // the required attribute. Both are not allowed on an input element.
      // Therefore we prevent default on most keydown events.
      var allowedKeys = [9 // tab
      ];

      if (allowedKeys.indexOf(e.keyCode) === -1) {
        e.preventDefault();
      }
    }

    switch (this._eventKey(e)) {
      case 'down':
      case 'up':
        // prevent scrolling the page with arrows
        e.preventDefault();

        if (this.opened) {
          this._overlayContent.focus();

          this._overlayContent._onKeydown(e);
        } else {
          this._focusOverlayOnOpen = true;
          this.open();
        }

        break;

      case 'enter':
        {
          const dateObject = this.i18n.parseDate(this._inputValue);

          const parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

          if (this._overlayInitialized && this._overlayContent.focusedDate && this._isValidDate(parsedDate)) {
            this._selectedDate = this._overlayContent.focusedDate;
          }

          this.close();
          break;
        }

      case 'esc':
        this._focusedDate = this._selectedDate;

        this._close();

        break;

      case 'tab':
        if (this.opened) {
          e.preventDefault(); // Clear the selection range (remains visible on IE)

          this._setSelectionRange(0, 0);

          if (e.shiftKey) {
            this._overlayContent.focusCancel();
          } else {
            this._overlayContent.focus();

            this._overlayContent.revealDate(this._focusedDate);
          }
        }

        break;
    }
  }

  _validateInput(date, min, max) {
    if (date && (min || max)) {
      this.invalid = !_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(date, min, max);
    }
  }

  _onUserInput(e) {
    if (!this.opened && this._inputElement.value) {
      this.open();
    }

    this._userInputValueChanged();
  }

  _userInputValueChanged(value) {
    if (this.opened && this._inputValue) {
      const dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._ignoreFocusedDateChange = true;

        if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(parsedDate, this._focusedDate)) {
          this._focusedDate = parsedDate;
        }

        this._ignoreFocusedDateChange = false;
      }
    }
  }

  _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
    if (opened && !_ignoreAnnounce) {
      this._overlayContent.announceFocusedDate();
    }
  }

  get _overlayContent() {
    return this.$.overlay.content.querySelector('#overlay-content');
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */


};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-media-query/3.0.1/node_modules/@polymer/iron-media-query/iron-media-query.js?babel-target=es6");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-announcer/3.0.2/node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_button_src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/src/vaadin-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/src/vaadin-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-month-calendar.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js?babel-target=es6");
/* harmony import */ var _vaadin_infinite_scroller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-infinite-scroller.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/gestures.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
















/**
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayContentElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-date-picker-overlay-content';
  }

  static get properties() {
    return {
      /**
       * The value for this element.
       */
      selectedDate: {
        type: Date,
        notify: true
      },

      /**
       * Date value which is focused using keyboard.
       */
      focusedDate: {
        type: Date,
        notify: true,
        observer: '_focusedDateChanged'
      },
      _focusedMonthDate: Number,

      /**
       * Date which should be visible when there is no value selected.
       */
      initialPosition: {
        type: Date,
        observer: '_initialPositionChanged'
      },
      _originDate: {
        value: new Date()
      },
      _visibleMonthIndex: Number,
      _desktopMode: Boolean,
      _translateX: {
        observer: '_translateXChanged'
      },
      _yearScrollerWidth: {
        value: 50
      },
      i18n: {
        type: Object
      },
      showWeekNumbers: {
        type: Boolean
      },
      _ignoreTaps: Boolean,
      _notTapping: Boolean,

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: Date,

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: Date,
      _focused: Boolean,

      /**
       * Input label
       */
      label: String
    };
  }

  ready() {
    super.ready();
    this.setAttribute('tabindex', 0);
    this.addEventListener('keydown', this._onKeydown.bind(this));
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["addListener"])(this, 'tap', this._stopPropagation);
    this.addEventListener('focus', this._onOverlayFocus.bind(this));
    this.addEventListener('blur', this._onOverlayBlur.bind(this));
  }
  /**
   * Fired when the scroller reaches the target scrolling position.
   * @event scroll-animation-finished
   * @param {Number} detail.position new position
   * @param {Number} detail.oldPosition old position
   */


  connectedCallback() {
    super.connectedCallback();

    this._closeYearScroller();

    this._toggleAnimateClass(true);

    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["setTouchAction"])(this.$.scrollers, 'pan-y');
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability();
  }

  announceFocusedDate() {
    var focusedDate = this._currentlyFocusedDate();

    var announce = [];

    if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, new Date())) {
      announce.push(this.i18n.today);
    }

    announce = announce.concat([this.i18n.weekdays[focusedDate.getDay()], focusedDate.getDate(), this.i18n.monthNames[focusedDate.getMonth()], focusedDate.getFullYear()]);

    if (this.showWeekNumbers && this.i18n.firstDayOfWeek === 1) {
      announce.push(this.i18n.week);
      announce.push(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getISOWeekNumber(focusedDate));
    }

    this.dispatchEvent(new CustomEvent('iron-announce', {
      bubbles: true,
      composed: true,
      detail: {
        text: announce.join(' ')
      }
    }));
    return;
  }
  /**
   * Focuses the cancel button
   */


  focusCancel() {
    this.$.cancelButton.focus();
  }
  /**
   * Scrolls the list to the given Date.
   */


  scrollToDate(date, animate) {
    this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
  }

  _focusedDateChanged(focusedDate) {
    this.revealDate(focusedDate);
  }

  _isCurrentYear(yearsFromNow) {
    return yearsFromNow === 0;
  }

  _isSelectedYear(yearsFromNow, selectedDate) {
    if (selectedDate) {
      return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
    }
  }
  /**
   * Scrolls the month and year scrollers enough to reveal the given date.
   */


  revealDate(date) {
    if (date) {
      var diff = this._differenceInMonths(date, this._originDate);

      var scrolledAboveViewport = this.$.monthScroller.position > diff;
      var visibleItems = this.$.monthScroller.clientHeight / this.$.monthScroller.itemHeight;
      var scrolledBelowViewport = this.$.monthScroller.position + visibleItems - 1 < diff;

      if (scrolledAboveViewport) {
        this._scrollToPosition(diff, true);
      } else if (scrolledBelowViewport) {
        this._scrollToPosition(diff - visibleItems + 1, true);
      }
    }
  }

  _onOverlayFocus() {
    this._focused = true;
  }

  _onOverlayBlur() {
    this._focused = false;
  }

  _initialPositionChanged(initialPosition) {
    this.scrollToDate(initialPosition);
  }

  _repositionYearScroller() {
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
  }

  _repositionMonthScroller() {
    this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
  }

  _onMonthScroll() {
    this._repositionYearScroller();

    this._doIgnoreTaps();
  }

  _onYearScroll() {
    this._repositionMonthScroller();

    this._doIgnoreTaps();
  }

  _onYearScrollTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);

    this._repositionMonthScroller();
  }

  _onMonthScrollTouchStart() {
    this._repositionYearScroller();
  }

  _doIgnoreTaps() {
    this._ignoreTaps = true;
    this._debouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__["timeOut"].after(300), () => this._ignoreTaps = false);
  }

  _formatDisplayed(date, formatDate, label) {
    if (date) {
      return formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._extractDateParts(date));
    } else {
      return label;
    }
  }

  _onTodayTap() {
    var today = new Date();

    if (Math.abs(this.$.monthScroller.position - this._differenceInMonths(today, this._originDate)) < 0.001) {
      // Select today only if the month scroller is positioned approximately
      // at the beginning of the current month
      this.selectedDate = today;

      this._close();
    } else {
      this._scrollToCurrentMonth();
    }
  }

  _scrollToCurrentMonth() {
    if (this.focusedDate) {
      this.focusedDate = new Date();
    }

    this.scrollToDate(new Date(), true);
  }

  _showClear(selectedDate) {
    return !!selectedDate;
  }

  _onYearTap(e) {
    if (!this._ignoreTaps && !this._notTapping) {
      var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
      var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

      this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
    }
  }

  _scrollToPosition(targetPosition, animate) {
    if (this._targetPosition !== undefined) {
      this._targetPosition = targetPosition;
      return;
    }

    if (!animate) {
      this.$.monthScroller.position = targetPosition;
      this._targetPosition = undefined;

      this._repositionYearScroller();

      return;
    }

    this._targetPosition = targetPosition; // http://gizma.com/easing/

    var easingFunction = (t, b, c, d) => {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var duration = animate ? 300 : 0;
    var start = 0;
    var initialPosition = this.$.monthScroller.position;

    var smoothScroll = timestamp => {
      start = start || timestamp;
      var currentTime = timestamp - start;

      if (currentTime < duration) {
        var currentPos = easingFunction(currentTime, initialPosition, this._targetPosition - initialPosition, duration);
        this.$.monthScroller.position = currentPos;
        window.requestAnimationFrame(smoothScroll);
      } else {
        this.dispatchEvent(new CustomEvent('scroll-animation-finished', {
          bubbles: true,
          composed: true,
          detail: {
            position: this._targetPosition,
            oldPosition: initialPosition
          }
        }));
        this.$.monthScroller.position = this._targetPosition;
        this._targetPosition = undefined;
      }

      setTimeout(this._repositionYearScroller.bind(this), 1);
    }; // Start the animation.


    window.requestAnimationFrame(smoothScroll);
  }

  _limit(value, range) {
    return Math.min(range.max, Math.max(range.min, value));
  }

  _handleTrack(e) {
    // Check if horizontal movement threshold (dx) not exceeded or
    // scrolling fast vertically (ddy).
    if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
      return;
    } // If we're flinging quickly -> start animating already.


    if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
      this._toggleAnimateClass(true);
    }

    var newTranslateX = this._translateX + e.detail.ddx;
    this._translateX = this._limit(newTranslateX, {
      min: 0,
      max: this._yearScrollerWidth
    });
  }

  _track(e) {
    if (this._desktopMode) {
      // No need to track for swipe gestures on desktop.
      return;
    }

    switch (e.detail.state) {
      case 'start':
        this._toggleAnimateClass(false);

        break;

      case 'track':
        this._handleTrack(e);

        break;

      case 'end':
        this._toggleAnimateClass(true);

        if (this._translateX >= this._yearScrollerWidth / 2) {
          this._closeYearScroller();
        } else {
          this._openYearScroller();
        }

        break;
    }
  }

  _toggleAnimateClass(enable) {
    if (enable) {
      this.classList.add('animate');
    } else {
      this.classList.remove('animate');
    }
  }

  _toggleYearScroller() {
    this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
  }

  _openYearScroller() {
    this._translateX = 0;
    this.setAttribute('years-visible', '');
  }

  _closeYearScroller() {
    this.removeAttribute('years-visible');
    this._translateX = this._yearScrollerWidth;
  }

  _isYearScrollerVisible() {
    return this._translateX < this._yearScrollerWidth / 2;
  }

  _translateXChanged(x) {
    if (!this._desktopMode) {
      this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
      this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
    }
  }

  _yearAfterXYears(index) {
    var result = new Date(this._originDate);
    result.setFullYear(parseInt(index) + this._originDate.getFullYear());
    return result.getFullYear();
  }

  _yearAfterXMonths(months) {
    return this._dateAfterXMonths(months).getFullYear();
  }

  _dateAfterXMonths(months) {
    var result = new Date(this._originDate);
    result.setDate(1);
    result.setMonth(parseInt(months) + this._originDate.getMonth());
    return result;
  }

  _differenceInMonths(date1, date2) {
    var months = (date1.getFullYear() - date2.getFullYear()) * 12;
    return months - date2.getMonth() + date1.getMonth();
  }

  _differenceInYears(date1, date2) {
    return this._differenceInMonths(date1, date2) / 12;
  }

  _clear() {
    this.selectedDate = '';
  }

  _close() {
    const overlayContent = this.getRootNode().host;
    const overlay = overlayContent ? overlayContent.getRootNode().host : null;

    if (overlay) {
      overlay.opened = false;
    }

    this.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }

  _cancel() {
    this.focusedDate = this.selectedDate;

    this._close();
  }

  _preventDefault(e) {
    e.preventDefault();
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _onKeydown(e) {
    var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
    // previously in the keydown event.


    const isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
    const isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
    const isScroller = !isToday && !isCancel;

    var eventKey = this._eventKey(e);

    if (eventKey === 'tab') {
      // We handle tabs here and don't want to bubble up.
      e.stopPropagation();
      const isFullscreen = this.hasAttribute('fullscreen');
      const isShift = e.shiftKey;

      if (isFullscreen) {
        e.preventDefault();
      } else if (isShift && isScroller || !isShift && isCancel) {
        // Return focus back to the input field
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('focus-input', {
          bubbles: true,
          composed: true
        }));
      } else if (isShift && isToday) {
        // Browser returns focus back to the scrollable area. We need to set
        // the focused flag, and move the scroll to focused date.
        this._focused = true;
        setTimeout(() => this.revealDate(this.focusedDate), 1);
      } else {
        // Browser moves the focus out of the scroller, hence focused flag must
        // set to false.
        this._focused = false;
      }
    } else if (eventKey) {
      e.preventDefault();
      e.stopPropagation();

      switch (eventKey) {
        case 'down':
          this._moveFocusByDays(7);

          this.focus();
          break;

        case 'up':
          this._moveFocusByDays(-7);

          this.focus();
          break;

        case 'right':
          if (isScroller) {
            this._moveFocusByDays(1);
          }

          break;

        case 'left':
          if (isScroller) {
            this._moveFocusByDays(-1);
          }

          break;

        case 'enter':
          if (isScroller || isCancel) {
            this._close();
          } else if (isToday) {
            this._onTodayTap();
          }

          break;

        case 'space':
          if (isCancel) {
            this._close();
          } else if (isToday) {
            this._onTodayTap();
          } else {
            var focusedDate = this.focusedDate;

            if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, this.selectedDate)) {
              this.selectedDate = '';
              this.focusedDate = focusedDate;
            } else {
              this.selectedDate = focusedDate;
            }
          }

          break;

        case 'home':
          this._moveFocusInsideMonth(focus, 'minDate');

          break;

        case 'end':
          this._moveFocusInsideMonth(focus, 'maxDate');

          break;

        case 'pagedown':
          this._moveFocusByMonths(e.shiftKey ? 12 : 1);

          break;

        case 'pageup':
          this._moveFocusByMonths(e.shiftKey ? -12 : -1);

          break;

        case 'esc':
          this._cancel();

          break;
      }
    }
  }

  _currentlyFocusedDate() {
    return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
  }

  _focusDate(dateToFocus) {
    this.focusedDate = dateToFocus;
    this._focusedMonthDate = dateToFocus.getDate();
  }

  _focusClosestDate(focus) {
    this._focusDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getClosestDate(focus, [this.minDate, this.maxDate]));
  }

  _moveFocusByDays(days) {
    var focus = this._currentlyFocusedDate();

    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focus.getFullYear());
    dateToFocus.setMonth(focus.getMonth());
    dateToFocus.setDate(focus.getDate() + days);

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this._focusDate(dateToFocus);
    } else {
      if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
        // Move to min or max date
        if (days > 0) {
          // down or right
          this._focusDate(this.maxDate);
        } else {
          // up or left
          this._focusDate(this.minDate);
        }
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focus);
      }
    }
  }

  _moveFocusByMonths(months) {
    var focus = this._currentlyFocusedDate();

    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focus.getFullYear());
    dateToFocus.setMonth(focus.getMonth() + months);
    var targetMonth = dateToFocus.getMonth();
    dateToFocus.setDate(this._focusedMonthDate || (this._focusedMonthDate = focus.getDate()));

    if (dateToFocus.getMonth() !== targetMonth) {
      dateToFocus.setDate(0);
    }

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this.focusedDate = dateToFocus;
    } else {
      if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
        // Move to min or max date
        if (months > 0) {
          // pagedown
          this._focusDate(this.maxDate);
        } else {
          // pageup
          this._focusDate(this.minDate);
        }
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focus);
      }
    }
  }

  _moveFocusInsideMonth(focusedDate, property) {
    var dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focusedDate.getFullYear());

    if (property === 'minDate') {
      dateToFocus.setMonth(focusedDate.getMonth());
      dateToFocus.setDate(1);
    } else {
      dateToFocus.setMonth(focusedDate.getMonth() + 1);
      dateToFocus.setDate(0);
    }

    if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
      this._focusDate(dateToFocus);
    } else {
      if (this._dateAllowed(focusedDate, this.minDate, this.maxDate)) {
        // Move to minDate or maxDate
        this._focusDate(this[property]);
      } else {
        // Move to closest allowed date
        this._focusClosestDate(focusedDate);
      }
    }
  }

  _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }

  _isTodayAllowed(min, max) {
    var today = new Date();
    var todayMidnight = new Date(0, 0);
    todayMidnight.setFullYear(today.getFullYear());
    todayMidnight.setMonth(today.getMonth());
    todayMidnight.setDate(today.getDate());
    return this._dateAllowed(todayMidnight, min, max);
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

}

customElements.define(DatePickerOverlayContentElement.is, DatePickerOverlayContentElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-date-picker-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends Vaadin.OverlayElement
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayElement extends Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__["OverlayElement"]) {
  static get is() {
    return 'vaadin-date-picker-overlay';
  }

}

customElements.define(DatePickerOverlayElement.is, DatePickerOverlayElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/custom-style.js?babel-target=es6");

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay"><template><style>:host { align-items: flex-start; justify-content: flex-start; } :host([bottom-aligned]) { justify-content: flex-end; } :host([right-aligned]) { align-items: flex-end; } :host([right-aligned][dir="rtl"]) { align-items: flex-start; } [part="overlay"] { display: flex; flex: auto; } [part~="content"] { flex: auto; }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: DatePickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerElement", function() { return DatePickerElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-media-query/3.0.1/node_modules/@polymer/iron-media-query/iron-media-query.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-control-state-mixin/2.1.3/node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-date-picker-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/render-status.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/













/**
 *
 * `<vaadin-date-picker>` is a date selection field which includes a scrollable
 * month calendar view.
 * ```html
 * <vaadin-date-picker label="Birthday"></vaadin-date-picker>
 * ```
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `text-field` | Input element | vaadin-date-picker
 * `clear-button` | Clear button | vaadin-date-picker
 * `toggle-button` | Toggle button | vaadin-date-picker
 * `overlay-content` | The overlay element | vaadin-date-picker
 * `overlay-header` | Fullscreen mode header | vaadin-date-picker-overlay-content
 * `label` | Fullscreen mode value/label | vaadin-date-picker-overlay-content
 * `clear-button` | Fullscreen mode clear button | vaadin-date-picker-overlay-content
 * `toggle-button` | Fullscreen mode toggle button | vaadin-date-picker-overlay-content
 * `years-toggle-button` | Fullscreen mode years scroller toggle | vaadin-date-picker-overlay-content
 * `months` | Months scroller | vaadin-date-picker-overlay-content
 * `years` | Years scroller | vaadin-date-picker-overlay-content
 * `toolbar` | Footer bar with buttons | vaadin-date-picker-overlay-content
 * `today-button` | Today button | vaadin-date-picker-overlay-content
 * `cancel-button` | Cancel button | vaadin-date-picker-overlay-content
 * `month` | Month calendar | vaadin-date-picker-overlay-content
 * `year-number` | Year number | vaadin-date-picker-overlay-content
 * `year-separator` | Year separator | vaadin-date-picker-overlay-content
 * `month-header` | Month title | vaadin-month-calendar
 * `weekdays` | Weekday container | vaadin-month-calendar
 * `weekday` | Weekday element | vaadin-month-calendar
 * `week-numbers` | Week numbers container | vaadin-month-calendar
 * `week-number` | Week number element | vaadin-month-calendar
 * `date` | Date element | vaadin-month-calendar
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `invalid` | Set when the element is invalid | :host
 * `opened` | Set when the date selector overlay is opened | :host
 * `readonly` | Set when the element is readonly | :host
 * `disabled` | Set when the element is disabled | :host
 * `today` | Set on the date corresponding to the current day | date
 * `focused` | Set on the focused date | date
 * `disabled` | Set on the date out of the allowed range | date
 * `selected` | Set on the selected date | date
 *
 * If you want to replace the default input field with a custom implementation, you should use the
 * [`<vaadin-date-picker-light>`](#vaadin-date-picker-light) element.
 *
 * In addition to `<vaadin-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.DatePickerMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

class DatePickerElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DatePickerMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-date-picker';
  }

  static get version() {
    return '4.0.2';
  }

  static get properties() {
    return {
      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: String,

      /**
       * A placeholder string in addition to the label. If this is set, the label will always float.
       */
      placeholder: String,

      /**
       * Set to true to make this element read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * This property is set to true when the control value invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },
      _userInputValue: String
    };
  }

  static get observers() {
    return ['_userInputValueChanged(_userInputValue)', '_setClearButtonLabel(i18n.clear)'];
  }

  ready() {
    super.ready(); // In order to have synchronized invalid property, we need to use the same validate logic.

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__["afterNextRender"])(this, () => this._inputElement.validate = () => {}); // FIXME(platosha): dispatch `input` event on
    // <vaadin-text-field> clear button
    // https://github.com/vaadin/vaadin-text-field/issues/347

    this._inputElement.addEventListener('change', () => {
      if (this._inputElement.value === '') {
        this.__dispatchChange = true;
        this.value = '';
        this.__dispatchChange = false;
      }
    });
  }

  _onVaadinOverlayClose(e) {
    if (this._openedWithFocusRing && this.hasAttribute('focused')) {
      this.focusElement.setAttribute('focus-ring', '');
    } else if (!this.hasAttribute('focused')) {
      this.focusElement.blur();
    }

    if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
      e.preventDefault();
    }
  }

  _toggle(e) {
    e.stopPropagation();
    this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
  }

  _input() {
    return this.$.input;
  }

  set _inputValue(value) {
    this._inputElement.value = value;
  }

  get _inputValue() {
    return this._inputElement.value;
  }

  _getAriaExpanded(opened) {
    return Boolean(opened).toString();
  }
  /**
   * Focussable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    return this._input() || this;
  }

  _setClearButtonLabel(i18nClear) {
    // FIXME(platosha): expose i18n API in <vaadin-text-field>
    // https://github.com/vaadin/vaadin-text-field/issues/348
    this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute('aria-label', i18nClear);
  }

}

customElements.define(DatePickerElement.is, DatePickerElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flush.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/render-status.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * @memberof Vaadin
 * @private
 */

class InfiniteScrollerElement extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-infinite-scroller';
  }

  static get properties() {
    return {
      /**
       * Count of individual items in each buffer.
       * The scroller has 2 buffers altogether so bufferSize of 20
       * will result in 40 buffered DOM items in total.
       * Changing after initialization not supported.
       */
      bufferSize: {
        type: Number,
        value: 20
      },

      /**
       * The amount of initial scroll top. Needed in order for the
       * user to be able to scroll backwards.
       */
      _initialScroll: {
        value: 500000
      },

      /**
       * The index/position mapped at _initialScroll point.
       */
      _initialIndex: {
        value: 0
      },
      _buffers: Array,
      _preventScrollEvent: Boolean,
      _mayHaveMomentum: Boolean,
      _initialized: Boolean,
      active: {
        type: Boolean,
        observer: '_activated'
      }
    };
  }

  ready() {
    super.ready();
    this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
    this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
    var tpl = this.querySelector('template');
    this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__["templatize"])(tpl, this, {
      forwardHostProp: function (prop, value) {
        if (prop !== 'index') {
          this._buffers.forEach(buffer => {
            [].forEach.call(buffer.children, insertionPoint => {
              insertionPoint._itemWrapper.instance[prop] = value;
            });
          });
        }
      }
    }); // Firefox interprets elements with overflow:auto as focusable
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (isFirefox) {
      this.$.scroller.tabIndex = -1;
    }
  }

  _activated(active) {
    if (active && !this._initialized) {
      this._createPool();

      this._initialized = true;
    }
  }

  _finishInit() {
    if (!this._initDone) {
      // Once the first set of items start fading in, stamp the rest
      this._buffers.forEach(buffer => {
        [].forEach.call(buffer.children, insertionPoint => this._ensureStampedInstance(insertionPoint._itemWrapper));
      }, this);

      if (!this._buffers[0].translateY) {
        this._reset();
      }

      this._initDone = true;
    }
  }

  _translateBuffer(up) {
    var index = up ? 1 : 0;
    this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
    this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
    this._buffers[index].updated = false;

    this._buffers.reverse();
  }

  _scroll() {
    if (this._scrollDisabled) {
      return;
    }

    var scrollTop = this.$.scroller.scrollTop;

    if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
      // Scrolled near the end/beginning of the scrollable area -> reset.
      this._initialIndex = ~~this.position;

      this._reset();
    } // Check if we scrolled enough to translate the buffer positions.


    var bufferOffset = this.root.querySelector('.buffer').offsetTop;
    var upperThresholdReached = scrollTop > this._buffers[1].translateY + this.itemHeight + bufferOffset;
    var lowerThresholdReached = scrollTop < this._buffers[0].translateY + this.itemHeight + bufferOffset;

    if (upperThresholdReached || lowerThresholdReached) {
      this._translateBuffer(lowerThresholdReached);

      this._updateClones();
    }

    if (!this._preventScrollEvent) {
      this.dispatchEvent(new CustomEvent('custom-scroll', {
        bubbles: false,
        composed: true
      }));
      this._mayHaveMomentum = true;
    }

    this._preventScrollEvent = false;
    this._debouncerScrollFinish = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerScrollFinish, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), () => {
      var scrollerRect = this.$.scroller.getBoundingClientRect();

      if (!this._isVisible(this._buffers[0], scrollerRect) && !this._isVisible(this._buffers[1], scrollerRect)) {
        this.position = this.position;
      }
    });
  }
  /**
   * Current scroller position as index. Can be a fractional number.
   *
   * @type {Number}
   */


  set position(index) {
    this._preventScrollEvent = true;

    if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
      this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
    } else {
      this._initialIndex = ~~index;

      this._reset();

      this._scrollDisabled = true;
      this.$.scroller.scrollTop += index % 1 * this.itemHeight;
      this._scrollDisabled = false;
    }

    if (this._mayHaveMomentum) {
      // Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
      this.$.scroller.classList.add('notouchscroll');
      this._mayHaveMomentum = false;
      setTimeout(() => {
        // Restore -webkit-overflow-scrolling: touch; after a small delay.
        this.$.scroller.classList.remove('notouchscroll');
      }, 10);
    }
  }
  /**
   * @private
   */


  get position() {
    return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
  }

  get itemHeight() {
    if (!this._itemHeightVal) {
      if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
        this.updateStyles();
      }

      const itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

      const tmpStyleProp = 'background-position';
      this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
      const itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
      this.$.fullHeight.style.removeProperty(tmpStyleProp);
      this._itemHeightVal = parseFloat(itemHeightPx);
    }

    return this._itemHeightVal;
  }

  get _bufferHeight() {
    return this.itemHeight * this.bufferSize;
  }

  _reset() {
    this._scrollDisabled = true;
    this.$.scroller.scrollTop = this._initialScroll;
    this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
    this._buffers[1].translateY = this._initialScroll;

    this._buffers.forEach(buffer => {
      buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
    });

    this._buffers[0].updated = this._buffers[1].updated = false;

    this._updateClones(true);

    this._debouncerUpdateClones = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateClones, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), () => {
      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones();
    });
    this._scrollDisabled = false;
  }

  _createPool() {
    var container = this.getBoundingClientRect();

    this._buffers.forEach(buffer => {
      for (var i = 0; i < this.bufferSize; i++) {
        const itemWrapper = document.createElement('div');
        itemWrapper.style.height = this.itemHeight + 'px';
        itemWrapper.instance = {};
        const contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
        const slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
        const insertionPoint = document.createElement('slot');
        insertionPoint.setAttribute('name', slotName);
        insertionPoint._itemWrapper = itemWrapper;
        buffer.appendChild(insertionPoint);
        itemWrapper.setAttribute('slot', slotName);
        this.appendChild(itemWrapper); // This is needed by IE

        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__["flush"])();
        setTimeout(() => {
          // Only stamp the visible instances first
          if (this._isVisible(itemWrapper, container)) {
            this._ensureStampedInstance(itemWrapper);
          }
        }, 1); // Wait for first reset
      }
    }, this);

    setTimeout(() => {
      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, this._finishInit.bind(this));
    }, 1);
  }

  _ensureStampedInstance(itemWrapper) {
    if (itemWrapper.firstElementChild) {
      return;
    }

    var tmpInstance = itemWrapper.instance;
    itemWrapper.instance = new this._TemplateClass({});
    itemWrapper.appendChild(itemWrapper.instance.root);
    Object.keys(tmpInstance).forEach(prop => {
      itemWrapper.instance.set(prop, tmpInstance[prop]);
    });
  }

  _updateClones(viewPortOnly) {
    this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
    var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

    this._buffers.forEach((buffer, bufferIndex) => {
      if (!buffer.updated) {
        var firstIndex = this._firstIndex + this.bufferSize * bufferIndex;
        [].forEach.call(buffer.children, (insertionPoint, index) => {
          const itemWrapper = insertionPoint._itemWrapper;

          if (!viewPortOnly || this._isVisible(itemWrapper, scrollerRect)) {
            itemWrapper.instance.index = firstIndex + index;
          }
        });
        buffer.updated = true;
      }
    }, this);
  }

  _isVisible(element, container) {
    var rect = element.getBoundingClientRect();
    return rect.bottom > container.top && rect.top < container.bottom;
  }

}

customElements.define(InfiniteScrollerElement.is, InfiniteScrollerElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_elements_dom_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/dom-repeat.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @memberof Vaadin
 * @private
 */

class MonthCalendarElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-month-calendar';
  }

  static get properties() {
    return {
      /**
       * A `Date` object defining the month to be displayed. Only year and
       * month properties are actually used.
       */
      month: {
        type: Date,
        value: new Date()
      },

      /**
       * A `Date` object for the currently selected date.
       */
      selectedDate: {
        type: Date,
        notify: true
      },

      /**
       * A `Date` object for the currently focused date.
       */
      focusedDate: Date,
      showWeekNumbers: {
        type: Boolean,
        value: false
      },
      i18n: {
        type: Object
      },

      /**
       * Flag stating whether taps on the component should be ignored.
       */
      ignoreTaps: Boolean,
      _notTapping: Boolean,

      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: {
        type: Date,
        value: null
      },

      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: {
        type: Date,
        value: null
      },
      _days: {
        type: Array,
        computed: '_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)'
      },
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        computed: '_isDisabled(month, minDate, maxDate)'
      }
    };
  }

  static get observers() {
    return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
  }

  _dateEquals(date1, date2) {
    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateEquals(date1, date2);
  }

  _dateAllowed(date, min, max) {
    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateAllowed(date, min, max);
  }
  /* Returns true if all the dates in the month are out of the allowed range */


  _isDisabled(month, minDate, maxDate) {
    // First day of the month
    var firstDate = new Date(0, 0);
    firstDate.setFullYear(month.getFullYear());
    firstDate.setMonth(month.getMonth());
    firstDate.setDate(1); // Last day of the month

    var lastDate = new Date(0, 0);
    lastDate.setFullYear(month.getFullYear());
    lastDate.setMonth(month.getMonth() + 1);
    lastDate.setDate(0);

    if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
      return false;
    }

    return !this._dateAllowed(firstDate, minDate, maxDate) && !this._dateAllowed(lastDate, minDate, maxDate);
  }

  _getTitle(month, monthNames) {
    if (month === undefined || monthNames === undefined) {
      return;
    }

    return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
  }

  _onMonthGridTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);
  }

  _dateAdd(date, delta) {
    date.setDate(date.getDate() + delta);
  }

  _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
    if (weekDayNames === undefined || firstDayOfWeek === undefined) {
      return;
    }

    return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
  }

  _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
    if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
      return;
    }

    weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
    weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
    weekDayNames = weekDayNames.map((day, index) => {
      return {
        weekDay: day,
        weekDayShort: weekDayNamesShort[index]
      };
    });
    return weekDayNames;
  }

  _getDate(date) {
    return date ? date.getDate() : '';
  }

  _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
    if (showWeekNumbers && firstDayOfWeek === 1) {
      this.setAttribute('week-numbers', '');
    } else {
      this.removeAttribute('week-numbers');
    }
  }

  _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
    // Currently only supported for locales that start the week on Monday.
    return showWeekNumbers && firstDayOfWeek === 1;
  }

  _isToday(date) {
    return this._dateEquals(new Date(), date);
  }

  _getDays(month, firstDayOfWeek) {
    if (month === undefined || firstDayOfWeek === undefined) {
      return;
    } // First day of the month (at midnight).


    var date = new Date(0, 0);
    date.setFullYear(month.getFullYear());
    date.setMonth(month.getMonth());
    date.setDate(1); // Rewind to first day of the week.

    while (date.getDay() !== firstDayOfWeek) {
      this._dateAdd(date, -1);
    }

    var days = [];
    var startMonth = date.getMonth();
    var targetMonth = month.getMonth();

    while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
      days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null); // Advance to next day.

      this._dateAdd(date, 1);
    }

    return days;
  }

  _getWeekNumber(date, days) {
    if (date === undefined || days === undefined) {
      return;
    }

    if (!date) {
      // Get the first non-null date from the days array.
      date = days.reduce((acc, d) => {
        return !acc && d ? d : acc;
      });
    }

    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._getISOWeekNumber(date);
  }

  _getWeekNumbers(dates) {
    return dates.map(date => this._getWeekNumber(date, dates)).filter((week, index, arr) => arr.indexOf(week) === index);
  }

  _handleTap(e) {
    if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
      this.selectedDate = e.target.date;
      this.dispatchEvent(new CustomEvent('date-tap', {
        bubbles: true,
        composed: true
      }));
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _getRole(date) {
    return date ? 'button' : 'presentation';
  }

  _getAriaLabel(date) {
    if (!date) {
      return '';
    }

    var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

    if (this._isToday(date)) {
      ariaLabel += ', ' + this.i18n.today;
    }

    return ariaLabel;
  }

  _getAriaDisabled(date, min, max) {
    if (date === undefined || min === undefined || max === undefined) {
      return;
    }

    return this._dateAllowed(date, min, max) ? 'false' : 'true';
  }

}

customElements.define(MonthCalendarElement.is, MonthCalendarElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_button_theme_lumo_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");







const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_overlay_content_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_month_calendar_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-month-calendar-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/vaadin-date-picker.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js?babel-target=es6");






/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
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
</custom-style>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-date-picker.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/src/vaadin-dialog.js?babel-target=es6":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/src/vaadin-dialog.js?babel-target=es6 ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: DialogElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElement", function() { return DialogElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay"><template><style>/* NOTE(platosha): Make some min-width to prevent collapsing of the content taking the parent width, e. g.,<vaadin-grid>and such. */ [part="content"] { min-width: 12em; /* matches the default<vaadin-text-field>width */ }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);
/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-dialog-overlay>` parts.
 *
 * @memberof Vaadin
 * @private
 */

class DialogOverlayElement extends _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__["OverlayElement"] {
  static get is() {
    return 'vaadin-dialog-overlay';
  }

}

customElements.define(DialogOverlayElement.is, DialogOverlayElement);
/**
 *
 * `<vaadin-dialog>` is a Web Component for creating customized modal dialogs. The content of the
 * dialog can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the dialog uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `dialog` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `dialog`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-dialog id="dialog"></vaadin-dialog>
 * ```
 * ```js
 * const dialog = document.querySelector('#dialog');
 * dialog.renderer = function(root, dialog) {
 *   root.textContent = "Sample dialog";
 * };
 * ```
 *
 * Renderer is called on the opening of the dialog.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Polymer Templates
 *
 * Alternatively, the content can be provided with Polymer's Template.
 * Dialog finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * ```html
 * <vaadin-dialog opened>
 *   <template>
 *     Sample dialog
 *   </template>
 * </vaadin-dialog>
 * ```
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-dialog-overlay>` parts.
 *
 * Note: the `theme` attribute value set on `<vaadin-dialog>` is
 * propagated to the internal `<vaadin-dialog-overlay>` component.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */

class DialogElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ThemePropertyMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ElementMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`;
  }

  static get is() {
    return 'vaadin-dialog';
  }

  static get version() {
    return '2.2.1';
  }

  static get properties() {
    return {
      /**
       * True if the overlay is currently displayed.
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * Set to true to disable closing dialog on outside click
       */
      noCloseOnOutsideClick: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable closing dialog on Escape press
       */
      noCloseOnEsc: {
        type: Boolean,
        value: false
      },

      /**
       * Set the `aria-label` attribute for assistive technologies like
       * screen readers. An `undefined` value for this property (the
       * default) means that the `aria-label` attribute is not present at
       * all.
       */
      ariaLabel: {
        type: String
      },

      /**
       * Theme to apply to the overlay element
       */
      theme: String,
      _contentTemplate: Object,

      /**
       * Custom function for rendering the content of the dialog.
       * Receives two arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `dialog` The reference to the `<vaadin-dialog>` element.
       */
      renderer: Function,
      _oldTemplate: Object,
      _oldRenderer: Object
    };
  }

  static get observers() {
    return ['_openedChanged(opened)', '_ariaLabelChanged(ariaLabel)', '_templateOrRendererChanged(_contentTemplate, renderer)'];
  }

  ready() {
    super.ready();
    this.$.overlay.setAttribute('role', 'dialog');
    this.$.overlay.addEventListener('vaadin-overlay-outside-click', this._handleOutsideClick.bind(this));
    this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._handleEscPress.bind(this));
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_4__["FlattenedNodesObserver"](this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    });
  }

  _setTemplateFromNodes(nodes) {
    this._contentTemplate = nodes.filter(node => node.localName && node.localName === 'template')[0] || this._contentTemplate;
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._contentTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    this.$.overlay.render();
  }

  _templateOrRendererChanged(template, renderer) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for dialog content');
    }

    this._oldTemplate = template;
    this._oldRenderer = renderer;

    if (renderer) {
      this.$.overlay.setProperties({
        owner: this,
        renderer: renderer
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.opened = false;
  }

  _openedChanged(opened) {
    if (opened) {
      this.$.overlay.template = this.querySelector('template');
    }

    this.$.overlay.opened = opened;
  }

  _ariaLabelChanged(ariaLabel) {
    if (ariaLabel !== undefined && ariaLabel !== null) {
      this.$.overlay.setAttribute('aria-label', ariaLabel);
    } else {
      this.$.overlay.removeAttribute('aria-label');
    }
  }

  _onOverlayOpened(e) {
    if (e.detail.value === false) {
      this.opened = false;
    }
  }
  /**
   * Close the dialog if `noCloseOnOutsideClick` isn't set to true
   */


  _handleOutsideClick(e) {
    if (this.noCloseOnOutsideClick) {
      e.preventDefault();
    }
  }
  /**
   * Close the dialog if `noCloseOnEsc` isn't set to true
   */


  _handleEscPress(e) {
    if (this.noCloseOnEsc) {
      e.preventDefault();
    }
  }

}

customElements.define(DialogElement.is, DialogElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog-styles.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog-styles.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");



const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_dialog_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-dialog-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_dialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-dialog.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/src/vaadin-dialog.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/vaadin-dialog.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/vaadin-dialog.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-dialog.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/src/vaadin-form-item.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/src/vaadin-form-item.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: FormItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormItemElement", function() { return FormItemElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * `<vaadin-form-item>` is a Web Component providing labelled form item wrapper
 * for using inside `<vaadin-form-layout>`.
 *
 * `<vaadin-form-item>` accepts any number of children as the input content,
 * and also has a separate named `label` slot:
 *
 * ```html
 * <vaadin-form-item>
 *   <label slot="label">Label aside</label>
 *   <input>
 * </vaadin-form-item>
 * ```
 *
 * Any content can be used. For instance, you can have multiple input elements
 * with surrounding text. The label can be an element of any type:
 *
 * ```html
 * <vaadin-form-item>
 *   <span slot="label">Date of Birth</span>
 *   <input placeholder="YYYY" size="4"> -
 *   <input placeholder="MM" size="2"> -
 *   <input placeholder="DD" size="2"><br>
 *   <em>Example: 1900-01-01</em>
 * </vaadin-form-item>
 * ```
 *
 * The label is optional and can be omitted:
 *
 * ```html
 * <vaadin-form-item>
 *   <input type="checkbox"> Subscribe to our Newsletter
 * </vaadin-form-item>
 * ```
 *
 * By default, the `label` slot content is displayed aside of the input content.
 * When `label-position="top"` is set, the `label` slot content is displayed on top:
 *
 * ```html
 * <vaadin-form-item label-position="top">
 *   <label slot="label">Label on top</label>
 *   <input>
 * </vaadin-form-item>
 * ```
 *
 * **Note:** Normally, `<vaadin-form-item>` is used as a child of
 * a `<vaadin-form-layout>` element. Setting `label-position` is unnecessary,
 * because the `label-position` attribute is triggered automatically by the parent
 * `<vaadin-form-layout>`, depending on its width and responsive behavior.
 *
 * ### Input Width
 *
 * By default, `<vaadin-form-item>` does not manipulate the width of the slotted
 * input elements. Optionally you can stretch the child input element to fill
 * the available width for the input content by adding the `full-width` class:
 *
 * ```html
 * <vaadin-form-item>
 *   <label slot="label">Label</label>
 *   <input class="full-width">
 * </vaadin-form-item>
 * ```
 *
 * ### Styling
 *
 * The `label-position` host attribute can be used to target the label on top state:
 *
 * <pre><code>
 * &lt;dom-module id="my-form-item-theme" theme-for="vaadin-form-item"&gt;
 *   &lt;template&gt;
 *     &lt;style&gt;
 *       :host {
 *         /&#42; default state styles, label aside &#42;/
 *       }
 *
 *       :host([label-position="top"]) {
 *         /&#42; label on top state styles &#42;/
 *       }
 *     &lt;/style&gt;
 *   &lt;/template&gt;
 * &lt;/dom-module&gt;
 * </code></pre>
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * label | The label slot container
 *
 * ### Custom CSS Properties Reference
 *
 * The following custom CSS properties are available on the `<vaadin-form-item>`
 * element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-form-item-label-width` | Width of the label column when the labels are aside | `8em`
 * `--vaadin-form-item-label-spacing` | Spacing between the label column and the input column when the labels are aside | `1em`
 * `--vaadin-form-item-row-spacing` | Height of the spacing between the form item elements | `1em`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class FormItemElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-form-item';
  }

  static get properties() {
    return {};
  }

  _onLabelClick(e) {
    // No `Array.prototype.find` in MSIE, using `filter` instead :-(
    const firstContentElementChild = Array.prototype.filter.call(this.$.contentSlot.assignedNodes(), e => e.nodeType === Node.ELEMENT_NODE)[0];

    if (firstContentElementChild) {
      firstContentElementChild.focus();
      firstContentElementChild.click();
    }
  }

}

customElements.define(FormItemElement.is, FormItemElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/src/vaadin-form-layout.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/src/vaadin-form-layout.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: FormLayoutElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutElement", function() { return FormLayoutElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-resizable-behavior/3.0.1/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/render-status.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/class.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * `<vaadin-form-layout>` is a Web Component providing configurable responsive
 * layout for form elements.
 *
 * ```html
 * <vaadin-form-layout>
 *
 *   <vaadin-form-item>
 *     <label slot="label">First Name</label>
 *     <input class="full-width" value="Jane">
 *   </vaadin-form-item>
 *
 *   <vaadin-form-item>
 *     <label slot="label">Last Name</label>
 *     <input class="full-width" value="Doe">
 *   </vaadin-form-item>
 *
 *   <vaadin-form-item>
 *     <label slot="label">Email</label>
 *     <input class="full-width" value="jane.doe@example.com">
 *   </vaadin-form-item>
 *
 * </vaadin-form-layout>
 * ```
 *
 * It supports any child elements as layout items.
 *
 * By default, it makes a layout of two columns if the element width is equal or
 * wider than 40em, and a single column layout otherwise.
 *
 * The number of columns and the responsive behavior are customizable with
 * the `responsiveSteps` property.
 *
 * ### Spanning Items on Multiple Columns
 *
 * You can use `colspan` attribute on the items.
 * In the example below, the first text field spans on two columns:
 *
 * ```html
 * <vaadin-form-layout>
 *
 *   <vaadin-form-item colspan="2">
 *     <label slot="label">Address</label>
 *     <input class="full-width">
 *   </vaadin-form-item>
 *
 *   <vaadin-form-item>
 *     <label slot="label">First Name</label>
 *     <input class="full-width" value="Jane">
 *   </vaadin-form-item>
 *
 *   <vaadin-form-item>
 *     <label slot="label">Last Name</label>
 *     <input class="full-width" value="Doe">
 *   </vaadin-form-item>
 *
 * </vaadin-form-layout>
 * ```
 *
 * ### Explicit New Row
 *
 * Use the `<br>` line break element to wrap the items on a new row:
 *
 * ```html
 * <vaadin-form-layout>
 *
 *   <vaadin-form-item>
 *     <label slot="label">Email</label>
 *     <input class="full-width">
 *   </vaadin-form-item>
 *
 *   <br>
 *
 *   <vaadin-form-item>
 *     <label slot="label">Confirm Email</label>
 *     <input class="full-width">
 *   </vaadin-form-item>
 *
 * </vaadin-form-layout>
 * ```
 *
 * ### CSS Properties Reference
 *
 * The following custom CSS properties are available on the `<vaadin-form-layout>`
 * element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-form-layout-column-spacing` | Length of the spacing between columns | `2em`
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class FormLayoutElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_7__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"]], _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-form-layout';
  }

  static get version() {
    return '2.1.4';
  }

  static get properties() {
    return {
      /**
       * @typedef ResponsiveStep
       * @type {object}
       * @property {string} minWidth - The threshold value for this step in CSS length units.
       * @property {number} columns - Number of columns. Only natural numbers are valid.
       * @property {string} labelsPosition - Labels position option, valid values: `"aside"` (default), `"top"`.
       */

      /**
       * Allows specifying a responsive behavior with the number of columns
       * and the label position depending on the layout width.
       *
       * Format: array of objects, each object defines one responsive step
       * with `minWidth` CSS length, `columns` number, and optional
       * `labelsPosition` string of `"aside"` or `"top"`. At least one item is required.
       *
       * #### Examples
       *
       * ```javascript
       * formLayout.responsiveSteps = [{columns: 1}];
       * // The layout is always a single column, labels aside.
       * ```
       *
       * ```javascript
       * formLayout.responsiveSteps = [
       *   {minWidth: 0, columns: 1},
       *   {minWidth: '40em', columns: 2}
       * ];
       * // Sets two responsive steps:
       * // 1. When the layout width is < 40em, one column, labels aside.
       * // 2. Width >= 40em, two columns, labels aside.
       * ```
       *
       * ```javascript
       * formLayout.responsiveSteps = [
       *   {minWidth: 0, columns: 1, labelsPosition: 'top'},
       *   {minWidth: '20em', columns: 1},
       *   {minWidth: '40em', columns: 2}
       * ];
       * // Default value. Three responsive steps:
       * // 1. Width < 20em, one column, labels on top.
       * // 2. 20em <= width < 40em, one column, labels aside.
       * // 3. Width >= 40em, two columns, labels aside.
       * ```
       *
       * @type {ResponsiveStep[]}
       */
      responsiveSteps: {
        type: Array,
        value: function () {
          return [{
            minWidth: 0,
            columns: 1,
            labelsPosition: 'top'
          }, {
            minWidth: '20em',
            columns: 1
          }, {
            minWidth: '40em',
            columns: 2
          }];
        },
        observer: '_responsiveStepsChanged'
      },

      /**
       * Current number of columns in the layout
       */
      _columnCount: {
        type: Number
      },

      /**
       * Indicates that labels are on top
       */
      _labelsOnTop: {
        type: Boolean
      }
    };
  }

  static get observers() {
    return ['_invokeUpdateStyles(_columnCount, _labelsOnTop)'];
  }

  ready() {
    // Here we create and attach a style element that we use for validating
    // CSS values in `responsiveSteps`. We can’t add this to the `<template>`,
    // because Polymer will throw it away. We need to create this before
    // `super.ready()`, because `super.ready()` invokes property observers,
    // and the observer for `responsiveSteps` does CSS value validation.
    this._styleElement = document.createElement('style');
    this.root.appendChild(this._styleElement); // Ensure there is a child text node in the style element

    this._styleElement.textContent = ' ';

    if (window.ShadyDOM) {
      // With ShadyDOM, setting textContent attaches text content nodes
      // asynchronously, but we need it right away.
      window.ShadyDOM.flush();
    }

    super.ready();
    this.addEventListener('iron-resize', this._selectResponsiveStep);
    this.addEventListener('animationend', this.__onAnimationEnd);
  }

  connectedCallback() {
    super.connectedCallback();
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["beforeNextRender"])(this, this._selectResponsiveStep);
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["beforeNextRender"])(this, this.updateStyles);

    this._observeChildrenColspanChange();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.__mutationObserver.disconnect();

    this.__childObserver.disconnect();
  }

  _observeChildrenColspanChange() {
    // Observe changes in form items' `colspan` attribute and update styles
    const mutationObserverConfig = {
      attributes: true
    };
    this.__mutationObserver = new MutationObserver(mutationRecord => {
      mutationRecord.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'colspan') {
          this._invokeUpdateStyles();
        }
      });
    });
    this.__childObserver = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"](this, info => {
      const ignore = ['template', 'style', 'dom-repeat', 'dom-if'];
      const nodes = Array.from(info.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE && ignore.indexOf(node.localName.toLowerCase()) === -1);
      nodes.forEach(child => {
        this.__mutationObserver.observe(child, mutationObserverConfig);
      });

      if (nodes.some(node => node.hasAttribute('colspan'))) {
        this._invokeUpdateStyles();
      }
    });
  }

  _naturalNumberOrOne(n) {
    if (typeof n === 'number' && n >= 1 && n < Infinity) {
      return Math.floor(n);
    }

    return 1;
  }

  _isValidCSSLength(value) {
    // Let us choose a CSS property for validating CSS <length> values:
    // - `border-spacing` accepts `<length> | inherit`, it’s the best! But
    //   it does not disallow invalid values at all in MSIE :-(
    // - `letter-spacing` and `word-spacing` accept
    //   `<length> | normal | inherit`, and disallows everything else, like
    //   `<percentage>`, `auto` and such, good enough.
    // - `word-spacing` is used since its shorter.
    // Disallow known keywords allowed as the `word-spacing` value
    if (value === 'inherit' || value === 'normal') {
      return false;
    } // Use the value in a stylesheet and check the parsed value. Invalid
    // input value results in empty parsed value.


    this._styleElement.firstChild.nodeValue = `#styleElement { word-spacing: ${value}; }`;

    if (!this._styleElement.sheet) {
      // Stylesheet is not ready, probably not attached to the document yet.
      return true;
    } // Safari 9 sets invalid CSS rules' value to `null`


    return ['', null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue('word-spacing')) < 0;
  }

  _responsiveStepsChanged(responsiveSteps, oldResponsiveSteps) {
    try {
      if (!Array.isArray(responsiveSteps)) {
        throw new Error('Invalid "responsiveSteps" type, an Array is required.');
      }

      if (responsiveSteps.length < 1) {
        throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');
      }

      responsiveSteps.forEach(step => {
        if (this._naturalNumberOrOne(step.columns) !== step.columns) {
          throw new Error(`Invalid 'columns' value of ${step.columns}, a natural number is required.`);
        }

        if (step.minWidth !== undefined && !this._isValidCSSLength(step.minWidth)) {
          throw new Error(`Invalid 'minWidth' value of ${step.minWidth}, a valid CSS length required.`);
        }

        if (step.labelsPosition !== undefined && ['aside', 'top'].indexOf(step.labelsPosition) === -1) {
          throw new Error(`Invalid 'labelsPosition' value of ${step.labelsPosition}, 'aside' or 'top' string is required.`);
        }
      });
    } catch (e) {
      if (oldResponsiveSteps && oldResponsiveSteps !== responsiveSteps) {
        console.warn(`${e.message} Using previously set 'responsiveSteps' instead.`);
        this.responsiveSteps = oldResponsiveSteps;
      } else {
        console.warn(`${e.message} Using default 'responsiveSteps' instead.`);
        this.responsiveSteps = [{
          minWidth: 0,
          columns: 1,
          labelsPosition: 'top'
        }, {
          minWidth: '20em',
          columns: 1
        }, {
          minWidth: '40em',
          columns: 2
        }];
      }
    }

    this._selectResponsiveStep();
  }

  __onAnimationEnd(e) {
    if (e.animationName.indexOf('vaadin-form-layout-appear') === 0) {
      this._selectResponsiveStep();
    }
  }

  _selectResponsiveStep() {
    // Iterate through responsiveSteps and choose the step
    let selectedStep;
    const tmpStyleProp = 'background-position';
    this.responsiveSteps.forEach(step => {
      // Convert minWidth to px units for comparison
      this.$.layout.style.setProperty(tmpStyleProp, step.minWidth);
      const stepMinWidthPx = parseFloat(getComputedStyle(this.$.layout).getPropertyValue(tmpStyleProp)); // Compare step min-width with the host width, select the passed step

      if (stepMinWidthPx <= this.offsetWidth) {
        selectedStep = step;
      }
    });
    this.$.layout.style.removeProperty(tmpStyleProp); // Sometimes converting units is not possible, e.g, when element is
    // not connected. Then the `selectedStep` stays `undefined`.

    if (selectedStep) {
      // Apply the chosen responsive step’s properties
      this._columnCount = selectedStep.columns;
      this._labelsOnTop = selectedStep.labelsPosition === 'top';
    }

    if (/\b(Edge|Trident)\//.test(navigator.userAgent)) {
      if (this.offsetWidth !== this._lastOffsetWidth) {
        this.updateStyles(); // force breaks sizes update in IE and Edge

        this._lastOffsetWidth = this.offsetWidth;
      }
    }
  }

  _invokeUpdateStyles() {
    this.updateStyles();
  }
  /**
   * Set custom CSS property values and update the layout.
   */


  updateStyles(...args) {
    super.updateStyles(...args);
    /*
      The item width formula:
           itemWidth = colspan / columnCount * 100% - columnSpacing
       We have to subtract columnSpacing, because the column spacing space is taken
      by item margins of 1/2 * spacing on both sides
    */

    const columnSpacing = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-form-layout-column-spacing') : getComputedStyle(this).getPropertyValue('--vaadin-form-layout-column-spacing');
    const direction = getComputedStyle(this).direction;
    const marginStartProp = 'margin-' + (direction === 'ltr' ? 'left' : 'right');
    const marginEndProp = 'margin-' + (direction === 'ltr' ? 'right' : 'left');
    const containerWidth = this.offsetWidth;

    if (window.ShadyDOM) {
      window.ShadyDOM.flush(); // `getComputedStyle` below needs that
    }

    let col = 0;
    Array.from(this.children).filter(child => child.localName === 'br' || getComputedStyle(child).display !== 'none').forEach((child, index, children) => {
      if (child.localName === 'br') {
        // Reset column count on line break
        col = 0;
        return;
      }

      let colspan;
      colspan = this._naturalNumberOrOne(parseFloat(child.getAttribute('colspan'))); // Never span further than the number of columns

      colspan = Math.min(colspan, this._columnCount);
      const childRatio = colspan / this._columnCount; // Note: using 99.9% for 100% fixes rounding errors in MS Edge
      // (< v16), otherwise the items might wrap, resizing is wobbly.

      child.style.width = `calc(${childRatio * 99.9}% - ${1 - childRatio} * ${columnSpacing})`;

      if (col + colspan > this._columnCount) {
        // Too big to fit on this row, let’s wrap it
        col = 0;
      } // At the start edge


      if (col === 0) {
        child.style.setProperty(marginStartProp, '0px');
      } else {
        child.style.removeProperty(marginStartProp);
      }

      const nextIndex = index + 1;
      const nextLineBreak = nextIndex < children.length && children[nextIndex].localName === 'br'; // At the end edge

      if (col + colspan === this._columnCount) {
        child.style.setProperty(marginEndProp, '0px');
      } else if (nextLineBreak) {
        const colspanRatio = (this._columnCount - col - colspan) / this._columnCount;
        child.style.setProperty(marginEndProp, `calc(${colspanRatio * containerWidth}px + ${colspanRatio} * ${columnSpacing})`);
      } else {
        child.style.removeProperty(marginEndProp);
      } // Move the column counter


      col = (col + colspan) % this._columnCount;

      if (child.localName === 'vaadin-form-item') {
        if (this._labelsOnTop) {
          child.setAttribute('label-position', 'top');
        } else {
          child.removeAttribute('label-position');
        }
      }
    });
  }

}

customElements.define(FormLayoutElement.is, FormLayoutElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item-styles.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item-styles.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");





const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`<dom-module id="lumo-form-item" theme-for="vaadin-form-item">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_form_item_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-form-item-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_form_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-form-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/src/vaadin-form-item.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout-styles.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout-styles.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");


const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_form_layout_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-form-layout-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_form_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-form-layout.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/src/vaadin-form-layout.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/vaadin-form-item.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/vaadin-form-item.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_form_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-form-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/vaadin-form-layout.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/vaadin-form-layout.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_form_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-form-layout.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/src/vaadin-item.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/src/vaadin-item.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: ItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemElement", function() { return ItemElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-item-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-item>` is a Web Component providing layout for items in tabs and menus.
 *
 * ```
 *   <vaadin-item>
 *     Item content
 *   </vaadin-item>
 * ```
 *
 * ### Selectable
 *
 * `<vaadin-item>` has the `selected` property and the corresponding state attribute.
 * Currently, the component sets the `selected` to false, when `disabled` property is set to true.
 * But other than that, the `<vaadin-item>` does not switch selection by itself.
 * In general, it is the wrapper component, like `<vaadin-list-box>`, which should update
 * the `selected` property on the items, e. g. on mousedown or when Enter / Spacebar is pressed.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the slot
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled item | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the item is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 *
 * @memberof Vaadin
 * @mixes Vaadin.ItemMixin
 * @mixes Vaadin.ThemableMixin
 */

class ItemElement extends Object(_vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ItemMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-item';
  }

  static get version() {
    return '2.1.1';
  }

  constructor() {
    super();
    /**
     * Submittable string value. The default value is the trimmed text content of the element.
     * @type {string}
     */

    this.value;
  }

}

customElements.define(ItemElement.is, ItemElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="lumo-item" theme-for="vaadin-item">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_item_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-item-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/src/vaadin-item.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/vaadin-item.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/vaadin-item.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/src/vaadin-list-box.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/src/vaadin-list-box.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: ListBoxElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxElement", function() { return ListBoxElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_list_mixin_vaadin_list_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-list-mixin/vaadin-list-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-mixin/2.2.1/node_modules/@vaadin/vaadin-list-mixin/vaadin-list-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-list-box>` is a Web Component for creating menus.
 *
 * ```
 *   <vaadin-list-box selected="2">
 *     <vaadin-item>Item 1</vaadin-item>
 *     <vaadin-item>Item 2</vaadin-item>
 *     <vaadin-item>Item 3</vaadin-item>
 *     <vaadin-item>Item 4</vaadin-item>
 *   </vaadin-list-box>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|------------------------
 * `items`           | The items container
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ListMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class ListBoxElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ElementMixin"])(Object(_vaadin_vaadin_list_mixin_vaadin_list_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ListMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-list-box';
  }

  static get version() {
    return '1.1.1';
  }

  static get properties() {
    return {
      // We don't need to define this property since super default is vertical,
      // but we don't want it to be modified, or be shown in the API docs.

      /** @private */
      orientation: {
        readOnly: true
      }
    };
  }

  constructor() {
    super();
    /** @protected */

    this.focused;
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'list');
  }

  get _scrollerElement() {
    return this.shadowRoot.querySelector('[part="items"]');
  }

}

customElements.define(ListBoxElement.is, ListBoxElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_list_box_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-list-box-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_list_box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-list-box.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/src/vaadin-list-box.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/vaadin-list-box.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/vaadin-list-box.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_list_box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-list-box.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6");



const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="lumo-menu-overlay-core"><template><style>:host([opening]), :host([closing]) { animation: 0.14s lumo-overlay-dummy-animation; } [part="overlay"] { will-change: opacity, transform; } :host([opening]) [part="overlay"] { animation: 0.1s lumo-menu-overlay-enter ease-out both; } @keyframes lumo-menu-overlay-enter { 0% { opacity: 0; transform: translateY(-4px); } } :host([closing]) [part="overlay"] { animation: 0.1s lumo-menu-overlay-exit both; } @keyframes lumo-menu-overlay-exit { 100% { opacity: 0; } }</style></template></dom-module><dom-module id="lumo-menu-overlay"><template><style include="lumo-overlay lumo-menu-overlay-core">/* Small viewport (bottom sheet) styles */ /* Use direct media queries instead of the state attributes (\`[phone]\` and \`[fullscreen]\`) provided by the elements */
      @media (max-width: 420px), (max-height: 420px) {
        :host {
          top: 0 !important;
          right: 0 !important;
          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
          left: 0 !important;
          align-items: stretch !important;
          justify-content: flex-end !important;
        }

        [part="overlay"] {
          max-height: 50vh;
          width: 100vw;
          border-radius: 0;
          box-shadow: var(--lumo-box-shadow-xl);
        }

        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
        [part="content"] {
          padding: 30px var(--lumo-space-m);
          max-height: inherit;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
        }

        [part="backdrop"] {
          display: block;
        }

        /* Animations */

        :host([opening]) [part="overlay"] {
          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;
        }

        :host([closing]),
        :host([closing]) [part="backdrop"] {
          animation-delay: 0.14s;
        }

        :host([closing]) [part="overlay"] {
          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;
        }
      }

      @keyframes lumo-mobile-menu-overlay-enter {
        0% {
          transform: translateY(150%);
        }
      }

      @keyframes lumo-mobile-menu-overlay-exit {
        100% {
          transform: translateY(150%);
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);
/* Split as a separate module because combo box can only use the "fullscreen" styles */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");




const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="lumo-overlay"><template><style>:host { top: var(--lumo-space-m); right: var(--lumo-space-m); bottom: var(--lumo-space-m); left: var(--lumo-space-m); /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */ /* stylelint-disable-next-line */ outline: 0px solid transparent; } [part="overlay"] { background-color: var(--lumo-base-color); background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct)); border-radius: var(--lumo-border-radius-m); box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m); color: var(--lumo-body-text-color); font-family: var(--lumo-font-family); font-size: var(--lumo-font-size-m); font-weight: 400; line-height: var(--lumo-line-height-m); letter-spacing: 0; text-transform: none; -webkit-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } [part="content"] { padding: var(--lumo-space-xs); } [part="backdrop"] { background-color: var(--lumo-shade-20pct); animation: 0.2s lumo-overlay-backdrop-enter both; will-change: opacity; } @keyframes lumo-overlay-backdrop-enter { 0% { opacity: 0; } } :host([closing]) [part="backdrop"] { animation: 0.2s lumo-overlay-backdrop-exit both; } @keyframes lumo-overlay-backdrop-exit { 100% { opacity: 0; } } @keyframes lumo-overlay-dummy-animation { 0% { opacity: 1; } 100% { opacity: 1; } }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/src/vaadin-notification.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/src/vaadin-notification.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: NotificationElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationElement", function() { return NotificationElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * The container element for all notifications.
 *
 * @memberof Vaadin
 */

class NotificationContainer extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-notification-container';
  }

  static get properties() {
    return {
      /**
       * True when the container is opened
       */
      opened: {
        type: Boolean,
        value: false,
        observer: '_openedChanged'
      }
    };
  }

  _openedChanged(opened) {
    if (opened) {
      document.body.appendChild(this);

      if (this._boundIosResizeListener) {
        this._detectIosNavbar();

        window.addEventListener('resize', this._boundIosResizeListener);
      }
    } else {
      document.body.removeChild(this);

      if (this._boundIosResizeListener) {
        window.removeEventListener('resize', this._boundIosResizeListener);
      }
    }
  }

  constructor() {
    super();

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this._boundIosResizeListener = () => this._detectIosNavbar();
    }
  }

  _detectIosNavbar() {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const landscape = innerWidth > innerHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (landscape && clientHeight > innerHeight) {
      this.style.bottom = clientHeight - innerHeight + 'px';
    } else {
      this.style.bottom = '0';
    }
  }

}
/**
 * The container element for the notification
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `overlay` | The notification container
 * `content` | The content of the notification
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 */


class NotificationCard extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-notification-card';
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'alert');
    this.setAttribute('aria-live', 'polite');
  }

}
/**
 *
 * `<vaadin-notification>` is a Web Component providing accessible and customizable notifications (toasts).
 * The content of the notification can be populated in two ways: imperatively by using renderer callback function
 * and declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the notification uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `notification` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `notification`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-notification id="notification"></vaadin-notification>
 * ```
 * ```js
 * const notification = document.querySelector('#notification');
 * notification.renderer = function(root) {
 *   root.textContent = "Your work has been saved";
 * };
 * ```
 *
 * Renderer is called on the opening of the notification.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Polymer Templates
 *
 * Alternatively, the content can be provided with Polymer's Template.
 * Notification finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * ```
 * <vaadin-notification>
 *   <template>
 *     Your work has been saved
 *   </template>
 * </vaadin-notification>
 * ```
 *
 * ### Styling
 *
 * `<vaadin-notification>` uses `<vaadin-notification-card>` internal
 * themable component as the actual visible notification cards. See
 * the stylable parts the
 * [`<vaadin-notification-card>` API](https://vaadin.com/components/vaadin-notification/html-api/elements/Vaadin.NotificationCard).
 *
 * Note: the `theme` attribute value set on `<vaadin-notification>` is
 * propagated to the internal `<vaadin-notification-card>`.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */


class NotificationElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`;
  }

  static get is() {
    return 'vaadin-notification';
  }

  static get version() {
    return '1.4.0';
  }

  static get properties() {
    return {
      /**
       * The duration in milliseconds to show the notification.
       * Set to `0` or a negative number to disable the notification auto-closing.
       */
      duration: {
        type: Number,
        value: 5000
      },

      /**
       * True if the notification is currently displayed.
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_openedChanged'
      },

      /**
       * Alignment of the notification in the viewport
       * Valid values are `top-stretch|top-start|top-center|top-end|middle|bottom-start|bottom-center|bottom-end|bottom-stretch`
       */
      position: {
        type: String,
        value: 'bottom-start',
        observer: '_positionChanged'
      },

      /**
       * Custom function for rendering the content of the notification.
       * Receives two arguments:
       *
       * - `root` The `<vaadin-notification-card>` DOM element. Append
       *   your content to it.
       * - `notification` The reference to the `<vaadin-notification>` element.
       */
      renderer: Function,

      /**
       * The template of the notification card content.
       */
      _notificationTemplate: Object
    };
  }

  static get observers() {
    return ['_durationChanged(duration, opened)', '_templateOrRendererChanged(_notificationTemplate, renderer, opened)'];
  }

  ready() {
    super.ready();
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_5__["FlattenedNodesObserver"](this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    });
  }

  _setTemplateFromNodes(nodes) {
    this._notificationTemplate = nodes.filter(node => node.localName && node.localName === 'template')[0] || this._notificationTemplate;
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    if (typeof this.renderer !== 'function') {
      return;
    }

    this.renderer(this._card, this);
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._notificationTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }

  _templateOrRendererChanged(template, renderer, opened) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for notification content');
    }

    this._oldTemplate = template;
    const rendererChanged = this._oldRenderer !== renderer;
    this._oldRenderer = renderer;

    if (renderer) {
      this._card = this.$['vaadin-notification-card'];

      if (rendererChanged) {
        while (this._card.firstChild) {
          this._card.removeChild(this._card.firstChild);
        }
      }

      if (opened) {
        if (!this._didAnimateNotificationAppend) {
          this._animatedAppendNotificationCard();
        }

        this.render();
      }
    }
  }
  /**
   * Opens the notification.
   */


  open() {
    this.opened = true;
  }
  /**
   * Closes the notification.
   */


  close() {
    this.opened = false;
  }

  get _container() {
    if (!NotificationElement._container) {
      NotificationElement._container = document.createElement('vaadin-notification-container');
      document.body.appendChild(NotificationElement._container);
    }

    return NotificationElement._container;
  }

  _openedChanged(opened) {
    if (opened) {
      this._container.opened = true;

      if (!this._instance && !this.renderer) {
        this._ensureTemplatized();
      }

      this._animatedAppendNotificationCard();

      setTimeout(() => this._updateShadyButtonStyles());
    } else if (this._card) {
      this._closeNotificationCard();
    }
  }

  _ensureTemplatized() {
    this._notificationTemplate = this.querySelector('template') || this._notificationTemplate;

    if (!this._notificationTemplate) {
      return;
    }

    if (!this._notificationTemplate._Templatizer) {
      this._notificationTemplate._Templatizer = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(this._notificationTemplate, this, {
        forwardHostProp: function (prop, value) {
          if (this._instance) {
            this._instance.forwardHostProp(prop, value);
          }
        }
      });
    }

    this._instance = new this._notificationTemplate._Templatizer({});

    const templateRoot = this._notificationTemplate.getRootNode();

    const isScoped = templateRoot !== document;
    this._card = this.$['vaadin-notification-card'];
    this._cardContent = this._card.shadowRoot.querySelector('[part~="content"]');

    if (isScoped) {
      if (!this._cardContent.shadowRoot) {
        this._cardContent.attachShadow({
          mode: 'open'
        });
      }

      if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
        // Shady DOM
        var shadyStyleScope = templateRoot.host && templateRoot.host.localName;

        if (shadyStyleScope && shadyStyleScope.indexOf('-') === -1) {
          shadyStyleScope = templateRoot.host.getAttribute('is');
        }

        if (shadyStyleScope) {
          this._cardContent.setAttribute('is', shadyStyleScope);
        }
      } else {
        // Shadow DOM
        const scopeCssText = Array.from(templateRoot.querySelectorAll('style')).reduce((result, style) => result + style.textContent, '') // The overlay root’s :host styles should not apply inside the overlay
        .replace(/:host/g, ':host-nomatch');

        if (scopeCssText) {
          const style = document.createElement('style');
          style.textContent = scopeCssText;

          this._cardContent.shadowRoot.appendChild(style);
        }
      }

      this._cardContent.shadowRoot.appendChild(this._instance.root);
    } else {
      this._card.appendChild(this._instance.root);
    }

    this._card.setAttribute('aria-label', this._card.textContent.trim());
  }

  _animatedAppendNotificationCard() {
    if (this._card) {
      this._card.setAttribute('opening', '');

      this._appendNotificationCard();

      const listener = () => {
        this._card.removeEventListener('animationend', listener);

        this._card.removeAttribute('opening');
      };

      this._card.addEventListener('animationend', listener);

      this._didAnimateNotificationAppend = true;
    } else {
      this._didAnimateNotificationAppend = false;
    }
  }

  _appendNotificationCard() {
    if (!this._card) {
      return;
    }

    if (!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)) {
      window.console.warn(`Invalid alignment parameter provided: position=${this.position}`);
      return;
    }

    this._card.slot = this.position;

    if (this._container.firstElementChild && /top/.test(this.position)) {
      this._container.insertBefore(this._card, this._container.firstElementChild);
    } else {
      this._container.appendChild(this._card);
    }
  }

  _removeNotificationCard() {
    this._card.parentNode && this._card.parentNode.removeChild(this._card);

    this._card.removeAttribute('closing');

    this._container.opened = Boolean(this._container.firstElementChild);
  }

  _closeNotificationCard() {
    this._durationTimeoutId && clearTimeout(this._durationTimeoutId);

    this._animatedRemoveNotificationCard();
  }

  _animatedRemoveNotificationCard() {
    this._card.setAttribute('closing', '');

    const name = getComputedStyle(this._card).getPropertyValue('animation-name');

    if (name && name != 'none') {
      const listener = () => {
        this._removeNotificationCard();

        this._card.removeEventListener('animationend', listener);
      };

      this._card.addEventListener('animationend', listener);
    } else {
      this._removeNotificationCard();
    }
  }

  _positionChanged(position) {
    if (this.opened) {
      this._animatedAppendNotificationCard();
    }
  }

  _durationChanged(duration, opened) {
    if (opened) {
      clearTimeout(this._durationTimeoutId);

      if (duration > 0) {
        this._durationTimeoutId = setTimeout(() => this.close(), duration);
      }
    }
  }

  _updateShadyButtonStyles() {
    // ShadyCSS doesn't propagate CSS properties to slotted children,
    // so this is done manually to allow vaadin-buttons to be themed
    // correctly on IE11
    if (window.ShadyCSS && !this.__buttonStylesPending) {
      customElements.whenDefined('vaadin-button').then(() => {
        const isButton = node => node instanceof customElements.get('vaadin-button');

        Array.from(this._card.querySelectorAll('*')).filter(isButton).forEach(btn => {
          const styles = ['--_lumo-button-color', '--_lumo-button-background-color', '--_lumo-button-primary-color', '--_lumo-button-primary-background-color'].reduce((obj, propName) => {
            const propValue = window.ShadyCSS.getComputedStyleValue(this._card, propName);
            propValue && (obj[propName] = propValue);
            return obj;
          }, {});
          btn.updateStyles(styles);
        });
        this.__buttonStylesPending = false;
      });
      this.__buttonStylesPending = true;
    }
  }

}

customElements.define(NotificationContainer.is, NotificationContainer);
customElements.define(NotificationCard.is, NotificationCard);
customElements.define(NotificationElement.is, NotificationElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");





const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`<dom-module id="lumo-notification-card" theme-for="vaadin-notification-card">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_notification_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-notification-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-notification.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/src/vaadin-notification.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/vaadin-notification.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/vaadin-notification.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_notification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-notification.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: VerticalLayoutElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalLayoutElement", function() { return VerticalLayoutElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-vertical-layout>` provides a simple way to vertically align your HTML elements.
 *
 * ```
 * <vaadin-vertical-layout>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </vaadin-vertical-layout>
 * ```
 *
 * ### Built-in Theme Variations
 *
 * `<vaadin-vertical-layout>` supports the following theme variations:
 *
 * Theme variation | Description
 * ---|---
 * `theme="margin"` | Applies the default amount of CSS margin for the host element (specified by the theme)
 * `theme="padding"` | Applies the default amount of CSS padding for the host element (specified by the theme)
 * `theme="spacing"` | Applies the default amount of CSS margin between items (specified by the theme)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class VerticalLayoutElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-vertical-layout';
  }

  static get version() {
    return '1.1.0';
  }

}

customElements.define(VerticalLayoutElement.is, VerticalLayoutElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-ordered-layout.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-ordered-layout.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="lumo-ordered-layout"><template><style>:host([theme~="margin"]) { margin: var(--lumo-space-m); } :host([theme~="padding"]) { padding: var(--lumo-space-m); }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout-styles.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout-styles.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_ordered_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-ordered-layout.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-ordered-layout.js?babel-target=es6");


const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout"><template><style include="lumo-ordered-layout">:host([theme~="spacing-xs"]) ::slotted(*) { margin-top: var(--lumo-space-xs); } :host([theme~="spacing-s"]) ::slotted(*) { margin-top: var(--lumo-space-s); } :host([theme~="spacing"]) ::slotted(*) { margin-top: var(--lumo-space-m); } :host([theme~="spacing-l"]) ::slotted(*) { margin-top: var(--lumo-space-l); } :host([theme~="spacing-xl"]) ::slotted(*) { margin-top: var(--lumo-space-xl); } /* Compensate for the first item margin, so that there is no gap around the layout itself. */ :host([theme~="spacing-xs"])::before { content: ""; margin-top: calc(var(--lumo-space-xs) * -1); } :host([theme~="spacing-s"])::before { content: ""; margin-top: calc(var(--lumo-space-s) * -1); } :host([theme~="spacing"])::before { content: ""; margin-top: calc(var(--lumo-space-m) * -1); } :host([theme~="spacing-l"])::before { content: ""; margin-top: calc(var(--lumo-space-l) * -1); } :host([theme~="spacing-xl"])::before { content: ""; margin-top: calc(var(--lumo-space-xl) * -1); }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vertical_layout_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-vertical-layout-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_vertical_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-vertical-layout.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_vertical_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-vertical-layout.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: FocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusablesHelper", function() { return FocusablesHelper; });
const p = Element.prototype;
const matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
/**
 * `Polymer.IronFocusablesHelper` relies on some Polymer-specific legacy API,
 * especially the `root` property which does not exist for native shadow DOM.
 * That's why we have this helper here.
 * See https://github.com/PolymerElements/iron-overlay-behavior/issues/282
 */

const FocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    const result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    const needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function (element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function (element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function (element) {
    if (this.isFocusable(element)) {
      const tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    const element =
    /** @type {!HTMLElement} */
    node;

    const tabIndex = this._normalizedTabIndex(element);

    let needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distribution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distribution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>


    let children;

    if (element.localName === 'slot') {
      children = element.assignedNodes({
        flatten: true
      });
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = (element.shadowRoot || element).children;
    }

    for (let i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function (element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    let style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function (tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    const pivot = Math.ceil(len / 2);

    const left = this._sortByTabIndex(tabbables.slice(0, pivot));

    const right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function (left, right) {
    const result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function (a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    const ati = Math.max(a.tabIndex, 0);
    const bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6 ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: OverlayElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayElement", function() { return OverlayElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/render-status.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-focusables-helper.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







let overlayContentCounter = 0;
const overlayContentCache = {};

const createOverlayContent = cssText => {
  const is = overlayContentCache[cssText] || processOverlayStyles(cssText);
  return document.createElement(is);
};

const processOverlayStyles = cssText => {
  overlayContentCounter++;
  const is = `vaadin-overlay-content-${overlayContentCounter}`;
  const styledTemplate = document.createElement('template');
  const style = document.createElement('style');
  style.textContent = ':host { display: block; }' + cssText;
  styledTemplate.content.appendChild(style);

  if (window.ShadyCSS) {
    window.ShadyCSS.prepareTemplate(styledTemplate, is);
  } // NOTE(platosha): Have to use an awkward IIFE returning class here
  // to prevent this class from showing up in analysis.json & API docs.

  /** @private */


  const klass = (() => class extends HTMLElement {
    static get is() {
      return is;
    }

    connectedCallback() {
      if (window.ShadyCSS) {
        window.ShadyCSS.styleElement(this);
      }

      if (!this.shadowRoot) {
        this.attachShadow({
          mode: 'open'
        });
        this.shadowRoot.appendChild(document.importNode(styledTemplate.content, true));
      }
    }

  })();

  customElements.define(klass.is, klass);
  overlayContentCache[cssText] = is;
  return is;
};
/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.  You can also pass
 * custom `instanceProps` object using the `instanceProps` property.
 *
 * ```html
 * <vaadin-overlay>
 *   <template>Overlay content</template>
 * </vaadin-overlay>
 * ```
 *
 * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
 * every template can only be templatized once, so it is important
 * to set `instanceProps` before the `template` is assigned to the overlay.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */


class OverlayElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-overlay';
  }

  static get properties() {
    return {
      opened: {
        type: Boolean,
        notify: true,
        observer: '_openedChanged',
        reflectToAttribute: true
      },

      /**
       * Owner element passed with renderer function
       */
      owner: Element,

      /**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       */
      renderer: Function,

      /**
       * The template of the overlay content.
       */
      template: {
        type: Object,
        notify: true
      },

      /**
       * Optional argument for `Polymer.Templatize.templatize`.
       */
      instanceProps: {
        type: Object
      },

      /**
       * References the content container after the template is stamped.
       */
      content: {
        type: Object,
        notify: true
      },
      withBackdrop: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Object with properties that is passed to `renderer` function
       */
      model: Object,

      /**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       */
      modeless: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_modelessChanged'
      },

      /**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       */
      hidden: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_hiddenChanged'
      },

      /**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       */
      focusTrap: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to enable restoring of focus when overlay is closed.
       */
      restoreFocusOnClose: {
        type: Boolean,
        value: false
      },
      _mouseDownInside: {
        type: Boolean
      },
      _mouseUpInside: {
        type: Boolean
      },
      _instance: {
        type: Object
      },
      _originalContentPart: Object,
      _contentNodes: Array,
      _oldOwner: Element,
      _oldModel: Object,
      _oldTemplate: Object,
      _oldInstanceProps: Object,
      _oldRenderer: Object,
      _oldOpened: Boolean
    };
  }

  static get observers() {
    return ['_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)'];
  }

  constructor() {
    super();
    this._boundMouseDownListener = this._mouseDownListener.bind(this);
    this._boundMouseUpListener = this._mouseUpListener.bind(this);
    this._boundOutsideClickListener = this._outsideClickListener.bind(this);
    this._boundKeydownListener = this._keydownListener.bind(this);
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__["FlattenedNodesObserver"](this, info => {
      this._setTemplateFromNodes(info.addedNodes);
    }); // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.

    this._boundIronOverlayCanceledListener = this._ironOverlayCanceled.bind(this);

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this._boundIosResizeListener = () => this._detectIosNavbar();
    }
  }

  ready() {
    super.ready();

    this._observer.flush(); // Need to add dummy click listeners to this and the backdrop or else
    // the document click event listener (_outsideClickListener) may never
    // get invoked on iOS Safari (reproducible in <vaadin-dialog>
    // and <vaadin-context-menu>).


    this.addEventListener('click', () => {});
    this.$.backdrop.addEventListener('click', () => {});
  }

  _detectIosNavbar() {
    if (!this.opened) {
      return;
    }

    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const landscape = innerWidth > innerHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (landscape && clientHeight > innerHeight) {
      this.style.setProperty('--vaadin-overlay-viewport-bottom', clientHeight - innerHeight + 'px');
    } else {
      this.style.setProperty('--vaadin-overlay-viewport-bottom', '0');
    }
  }

  _setTemplateFromNodes(nodes) {
    this.template = nodes.filter(node => node.localName && node.localName === 'template')[0] || this.template;
  }
  /**
   * @event vaadin-overlay-close
   * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
   */


  close(sourceEvent) {
    var evt = new CustomEvent('vaadin-overlay-close', {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: sourceEvent
      }
    });
    this.dispatchEvent(evt);

    if (!evt.defaultPrevented) {
      this.opened = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (this._boundIosResizeListener) {
      this._detectIosNavbar();

      window.addEventListener('resize', this._boundIosResizeListener);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._boundIosResizeListener && window.removeEventListener('resize', this._boundIosResizeListener);
  }

  _ironOverlayCanceled(event) {
    event.preventDefault();
  }

  _mouseDownListener(event) {
    this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }

  _mouseUpListener(event) {
    this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
  }
  /**
   * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
   * propagating the event to the listener in the button. Otherwise, if the clicked button would call
   * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
   *
   * @event vaadin-overlay-outside-click
   * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
   */


  _outsideClickListener(event) {
    if (event.composedPath().indexOf(this.$.overlay) !== -1 || this._mouseDownInside || this._mouseUpInside) {
      this._mouseDownInside = false;
      this._mouseUpInside = false;
      return;
    }

    if (!this._last) {
      return;
    }

    const evt = new CustomEvent('vaadin-overlay-outside-click', {
      bubbles: true,
      cancelable: true,
      detail: {
        sourceEvent: event
      }
    });
    this.dispatchEvent(evt);

    if (this.opened && !evt.defaultPrevented) {
      this.close(event);
    }
  }
  /**
   * @event vaadin-overlay-escape-press
   * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
   */


  _keydownListener(event) {
    if (!this._last) {
      return;
    } // TAB


    if (event.key === 'Tab' && this.focusTrap) {
      // if only tab key is pressed, cycle forward, else cycle backwards.
      this._cycleTab(event.shiftKey ? -1 : 1);

      event.preventDefault(); // ESC
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      const evt = new CustomEvent('vaadin-overlay-escape-press', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event
        }
      });
      this.dispatchEvent(evt);

      if (this.opened && !evt.defaultPrevented) {
        this.close(event);
      }
    }
  }

  _ensureTemplatized() {
    this._setTemplateFromNodes(Array.from(this.children));
  }
  /**
   * @event vaadin-overlay-open
   * fired after the `vaadin-overlay` is opened.
   */


  _openedChanged(opened, wasOpened) {
    if (!this._instance) {
      this._ensureTemplatized();
    }

    if (opened) {
      // Store focused node.
      this.__restoreFocusNode = this._getActiveElement();

      this._animatedOpening();

      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__["afterNextRender"])(this, () => {
        if (this.focusTrap && !this.contains(document._activeElement || document.activeElement)) {
          this._cycleTab(0, 0);
        }

        const evt = new CustomEvent('vaadin-overlay-open', {
          bubbles: true
        });
        this.dispatchEvent(evt);
      });

      if (!this.modeless) {
        this._addGlobalListeners();
      }
    } else if (wasOpened) {
      this._animatedClosing();

      if (!this.modeless) {
        this._removeGlobalListeners();
      }
    }
  }

  _hiddenChanged(hidden) {
    if (hidden && this.hasAttribute('closing')) {
      this._flushAnimation('closing');
    }
  }

  _shouldAnimate() {
    const name = getComputedStyle(this).getPropertyValue('animation-name');
    const hidden = getComputedStyle(this).getPropertyValue('display') === 'none';
    return !hidden && name && name != 'none';
  }

  _enqueueAnimation(type, callback) {
    const handler = `__${type}Handler`;

    const listener = () => {
      callback();
      this.removeEventListener('animationend', listener);
      delete this[handler];
    };

    this[handler] = listener;
    this.addEventListener('animationend', listener);
  }

  _flushAnimation(type) {
    const handler = `__${type}Handler`;

    if (typeof this[handler] === 'function') {
      this[handler]();
    }
  }

  _animatedOpening() {
    if (this.parentNode === document.body && this.hasAttribute('closing')) {
      this._flushAnimation('closing');
    }

    this._attachOverlay();

    this.setAttribute('opening', '');

    const finishOpening = () => {
      this.removeAttribute('opening');
      document.addEventListener('iron-overlay-canceled', this._boundIronOverlayCanceledListener);

      if (!this.modeless) {
        this._enterModalState();
      }
    };

    if (this._shouldAnimate()) {
      this._enqueueAnimation('opening', finishOpening);
    } else {
      finishOpening();
    }
  }

  _attachOverlay() {
    this._placeholder = document.createComment('vaadin-overlay-placeholder');
    this.parentNode.insertBefore(this._placeholder, this);
    document.body.appendChild(this);
  }

  _animatedClosing() {
    if (this.hasAttribute('opening')) {
      this._flushAnimation('opening');
    }

    if (this._placeholder) {
      this.setAttribute('closing', '');

      const finishClosing = () => {
        this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

        this._exitModalState();

        document.removeEventListener('iron-overlay-canceled', this._boundIronOverlayCanceledListener);

        this._detachOverlay();

        this.removeAttribute('closing');

        if (this.restoreFocusOnClose && this.__restoreFocusNode) {
          // If the activeElement is `<body>` or inside the overlay,
          // we are allowed to restore the focus. In all the other
          // cases focus might have been moved elsewhere by another
          // component or by the user interaction (e.g. click on a
          // button outside the overlay).
          const activeElement = this._getActiveElement();

          if (activeElement === document.body || this._deepContains(activeElement)) {
            this.__restoreFocusNode.focus();
          }

          this.__restoreFocusNode = null;
        }
      };

      if (this._shouldAnimate()) {
        this._enqueueAnimation('closing', finishClosing);
      } else {
        finishClosing();
      }
    }
  }

  _detachOverlay() {
    this._placeholder.parentNode.insertBefore(this, this._placeholder);

    this._placeholder.parentNode.removeChild(this._placeholder);
  }
  /**
   * Returns all attached overlays.
   */


  static get __attachedInstances() {
    return Array.from(document.body.children).filter(el => el instanceof OverlayElement);
  }
  /**
   * returns true if this is the last one in the opened overlays stack
   */


  get _last() {
    return this === OverlayElement.__attachedInstances.pop();
  }

  _modelessChanged(modeless) {
    if (!modeless) {
      if (this.opened) {
        this._addGlobalListeners();

        this._enterModalState();
      }
    } else {
      this._removeGlobalListeners();

      this._exitModalState();
    }
  }

  _addGlobalListeners() {
    document.addEventListener('mousedown', this._boundMouseDownListener);
    document.addEventListener('mouseup', this._boundMouseUpListener); // Firefox leaks click to document on contextmenu even if prevented
    // https://bugzilla.mozilla.org/show_bug.cgi?id=990614

    document.documentElement.addEventListener('click', this._boundOutsideClickListener, true);
    document.addEventListener('keydown', this._boundKeydownListener);
  }

  _enterModalState() {
    if (document.body.style.pointerEvents !== 'none') {
      // Set body pointer-events to 'none' to disable mouse interactions with
      // other document nodes.
      this._previousDocumentPointerEvents = document.body.style.pointerEvents;
      document.body.style.pointerEvents = 'none';
    } // Disable pointer events in other attached overlays


    OverlayElement.__attachedInstances.forEach(el => {
      if (el !== this && !el.hasAttribute('opening') && !el.hasAttribute('closing')) {
        el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
      }
    });
  }

  _removeGlobalListeners() {
    document.removeEventListener('mousedown', this._boundMouseDownListener);
    document.removeEventListener('mouseup', this._boundMouseUpListener);
    document.documentElement.removeEventListener('click', this._boundOutsideClickListener, true);
    document.removeEventListener('keydown', this._boundKeydownListener);
  }

  _exitModalState() {
    if (this._previousDocumentPointerEvents !== undefined) {
      // Restore body pointer-events
      document.body.style.pointerEvents = this._previousDocumentPointerEvents;
      delete this._previousDocumentPointerEvents;
    } // Restore pointer events in the previous overlay(s)


    const instances = OverlayElement.__attachedInstances;
    let el; // Use instances.pop() to ensure the reverse order

    while (el = instances.pop()) {
      if (el === this) {
        // Skip the current instance
        continue;
      }

      el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

      if (!el.modeless) {
        // Stop after the last modal
        break;
      }
    }
  }

  _removeOldContent() {
    if (!this.content || !this._contentNodes) {
      return;
    }

    this._observer.disconnect();

    this._contentNodes.forEach(node => {
      if (node.parentNode === this.content) {
        this.content.removeChild(node);
      }
    });

    if (this._originalContentPart) {
      // Restore the original <div part="content">
      this.$.content.parentNode.replaceChild(this._originalContentPart, this.$.content);
      this.$.content = this._originalContentPart;
      this._originalContentPart = undefined;
    }

    this._observer.connect();

    this._contentNodes = undefined;
    this.content = undefined;
  }

  _stampOverlayTemplate(template, instanceProps) {
    this._removeOldContent();

    if (!template._Templatizer) {
      template._Templatizer = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(template, this, {
        instanceProps: instanceProps,
        forwardHostProp: function (prop, value) {
          if (this._instance) {
            this._instance.forwardHostProp(prop, value);
          }
        }
      });
    }

    this._instance = new template._Templatizer({});
    this._contentNodes = Array.from(this._instance.root.childNodes);
    const templateRoot = template._templateRoot || (template._templateRoot = template.getRootNode());

    const _isScoped = templateRoot !== document;

    if (_isScoped) {
      const isShady = window.ShadyCSS && !window.ShadyCSS.nativeShadow;

      if (!this.$.content.shadowRoot) {
        this.$.content.attachShadow({
          mode: 'open'
        });
      }

      let scopeCssText = Array.from(templateRoot.querySelectorAll('style')).reduce((result, style) => result + style.textContent, '');

      if (isShady) {
        // NOTE(platosha): ShadyCSS removes <style>’s from templates, so
        // we have to use these protected APIs to get their contents back
        const styleInfo = window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);

        if (styleInfo) {
          scopeCssText += styleInfo._getStyleRules().parsedCssText;
          scopeCssText += '}';
        }
      } // The overlay root’s :host styles should not apply inside the overlay


      scopeCssText = scopeCssText.replace(/:host/g, ':host-nomatch');

      if (scopeCssText) {
        if (isShady) {
          // ShadyDOM: replace the <div part="content"> with a generated
          // styled custom element
          const contentPart = createOverlayContent(scopeCssText);
          contentPart.id = 'content';
          contentPart.setAttribute('part', 'content');
          this.$.content.parentNode.replaceChild(contentPart, this.$.content); // NOTE(platosha): carry the style scope of the content part

          contentPart.className = this.$.content.className;
          this._originalContentPart = this.$.content;
          this.$.content = contentPart;
        } else {
          // Shadow DOM: append a style to the content shadowRoot
          const style = document.createElement('style');
          style.textContent = scopeCssText;
          this.$.content.shadowRoot.appendChild(style);

          this._contentNodes.unshift(style);
        }
      }

      this.$.content.shadowRoot.appendChild(this._instance.root);
      this.content = this.$.content.shadowRoot;
    } else {
      this.appendChild(this._instance.root);
      this.content = this;
    }
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this.template = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    if (this.renderer) {
      this.renderer.call(this.owner, this.content, this.owner, this.model);
    }
  }

  _templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened) {
    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for overlay content');
    }

    const ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
    this._oldModel = model;
    this._oldOwner = owner;
    const templateOrInstancePropsChanged = this._oldInstanceProps !== instanceProps || this._oldTemplate !== template;
    this._oldInstanceProps = instanceProps;
    this._oldTemplate = template;
    const rendererChanged = this._oldRenderer !== renderer;
    this._oldRenderer = renderer;
    const openedChanged = this._oldOpened !== opened;
    this._oldOpened = opened;

    if (template && templateOrInstancePropsChanged) {
      this._stampOverlayTemplate(template, instanceProps);
    } else if (renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
      this.content = this;

      if (rendererChanged) {
        while (this.content.firstChild) {
          this.content.removeChild(this.content.firstChild);
        }
      }

      if (opened) {
        this.render();
      }
    }
  }

  _isFocused(element) {
    return element && element.getRootNode().activeElement === element;
  }

  _focusedIndex(elements) {
    elements = elements || this._getFocusableElements();
    return elements.indexOf(elements.filter(this._isFocused).pop());
  }

  _cycleTab(increment, index) {
    const focusableElements = this._getFocusableElements();

    if (index === undefined) {
      index = this._focusedIndex(focusableElements);
    }

    index += increment; // rollover to first item

    if (index >= focusableElements.length) {
      index = 0; // go to last item
    } else if (index < 0) {
      index = focusableElements.length - 1;
    }

    focusableElements[index].focus();
  }

  _getFocusableElements() {
    // collect all focusable elements
    return _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["FocusablesHelper"].getTabbableNodes(this.$.overlay);
  }

  _getActiveElement() {
    let active = document._activeElement || document.activeElement; // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes
    // or document.documentElement (when overlay closed on outside click).
    // In these cases, default it to document.body.

    if (!active || active === document.documentElement || active instanceof Element === false) {
      active = document.body;
    }

    while (active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }

    return active;
  }

  _deepContains(node) {
    if (this.contains(node)) {
      return true;
    }

    let n = node;
    const doc = node.ownerDocument; // walk from node to `this` or `document`

    while (n && n !== doc && n !== this) {
      n = n.parentNode || n.host;
    }

    return n === this;
  }

}

customElements.define(OverlayElement.is, OverlayElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");


const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-overlay-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressBarElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarElement", function() { return ProgressBarElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_progress_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-progress-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-progress-bar>` is a Web Component for progress bars.
 *
 * ```html
 * <vaadin-progress-bar min="0" max="1" value="0.5">
 * </vaadin-progress-bar>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `bar` | Progress-bar's background
 * `value` | Progress-bar's foreground
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following custom properties are available:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-progress-value` | current progress value (between 0 and 1) | 0
 *
 * The following state attributes are available for styling:
 *
 * Attribute       | Description | Part name
 * ----------------|-------------|------------
 * `indeterminate` | Set to an indeterminate progress bar | :host
 *
 * @memberof Vaadin
 * @mixes Vaadin.ProgressMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class ProgressBarElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ElementMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_vaadin_progress_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ProgressMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-progress-bar';
  }

  static get version() {
    return '1.1.2';
  }

}

customElements.define(ProgressBarElement.is, ProgressBarElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-mixin.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-mixin.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: ProgressMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressMixin", function() { return ProgressMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const ProgressMixin = superClass => class VaadinProgressMixin extends superClass {
  static get properties() {
    return {
      /**
       * Current progress value.
       */
      value: {
        type: Number,
        observer: '_valueChanged'
      },

      /**
       * Minimum bound of the progress bar.
       */
      min: {
        type: Number,
        value: 0,
        observer: '_minChanged'
      },

      /**
       * Maximum bound of the progress bar.
       */
      max: {
        type: Number,
        value: 1,
        observer: '_maxChanged'
      },

      /**
       * Indeterminate state of the progress bar.
       * This property takes precedence over other state properties (min, max, value).
       */
      indeterminate: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ['_normalizedValueChanged(value, min, max)'];
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'progressbar');
  }

  _normalizedValueChanged(value, min, max) {
    const newNormalizedValue = this._normalizeValue(value, min, max);

    this.style.setProperty('--vaadin-progress-value', newNormalizedValue);
    this.updateStyles({
      '--vaadin-progress-value': String(newNormalizedValue)
    });
  }

  _valueChanged(newV, oldV) {
    this.setAttribute('aria-valuenow', newV);
  }

  _minChanged(newV, oldV) {
    this.setAttribute('aria-valuemin', newV);
  }

  _maxChanged(newV, oldV) {
    this.setAttribute('aria-valuemax', newV);
  }
  /**
   * Percent of current progress relative to whole progress bar (max - min)
   */


  _normalizeValue(value, min, max) {
    let nV;

    if (!value && value != 0) {
      nV = 0;
    } else if (min >= max) {
      nV = 1;
    } else {
      nV = (value - min) / (max - min);
      nV = Math.min(Math.max(nV, 0), 1);
    }

    return nV;
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/custom-style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
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
</custom-style>`;
document.head.appendChild($_documentContainer.content);
/* Safari fails to declare animations for pseudo elements inside a shadow DOM */

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_progress_bar_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-progress-bar-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_progress_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-progress-bar.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-button.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-button.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: RadioButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonElement", function() { return RadioButtonElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-control-state-mixin/2.1.3/node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * `<vaadin-radio-button>` is a Web Component for radio buttons.
 *
 * ```html
 * <vaadin-radio-button value="foo">Foo</vaadin-radio-button>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|----------------
 * `radio`           | The radio button element
 * `label`           | The label content element
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled`   | Set when the radio button is disabled. | :host
 * `focus-ring` | Set when the radio button is focused using the keyboard. | :host
 * `focused`    | Set when the radio button is focused. | :host
 * `checked`    | Set when the radio button is checked. | :host
 * `empty`      | Set when there is no label provided. | label
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @element vaadin-radio-button
 * @demo demo/index.html
 */

class RadioButtonElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-radio-button';
  }

  static get version() {
    return '1.2.3';
  }

  static get properties() {
    return {
      /**
       * True if the radio button is checked.
       */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_checkedChanged',
        reflectToAttribute: true
      },

      /**
       * Name of the element.
       */
      name: String,

      /**
       * The value for this element.
       */
      value: {
        type: String,
        value: 'on'
      }
    };
  }

  get name() {
    return this.checked ? this._storedName : '';
  }

  set name(name) {
    this._storedName = name;
  }
  /**
   * @protected
   */


  attributeChangedCallback(prop, oldVal, newVal) {
    super.attributeChangedCallback(prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

    /* istanbul ignore if */

    if (/^(disabled|checked)$/.test(prop)) {
      // iOS 10.3 Safari has an issue with repainting shadow root element styles when a host attribute changes.
      // Need this workaround (toggle any inline css property on and off) until we drop iOS 10.
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      /* istanbul ignore if */

      if (isIOS && this.shadowRoot && parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10)) {
        const WEBKIT_PROPERTY = '-webkit-backface-visibility';
        this.shadowRoot.querySelectorAll('*').forEach(el => {
          el.style[WEBKIT_PROPERTY] = 'visible';
          el.style[WEBKIT_PROPERTY] = '';
        });
      }
    }
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'radio');

    this._addListeners();

    const attrName = this.getAttribute('name');

    if (attrName) {
      this.name = attrName;
    }

    this.shadowRoot.querySelector('[part~="label"]').querySelector('slot').addEventListener('slotchange', this._updateLabelAttribute.bind(this));

    this._updateLabelAttribute();
  }

  _updateLabelAttribute() {
    const label = this.shadowRoot.querySelector('[part~="label"]');
    const assignedNodes = label.firstElementChild.assignedNodes();

    if (this._isAssignedNodesEmpty(assignedNodes)) {
      label.setAttribute('empty', '');
    } else {
      label.removeAttribute('empty');
    }
  }

  _isAssignedNodesEmpty(nodes) {
    // The assigned nodes considered to be empty if there is no slotted content or only one empty text node
    return nodes.length === 0 || nodes.length == 1 && nodes[0].nodeType == Node.TEXT_NODE && nodes[0].textContent.trim() === '';
  }

  _checkedChanged(checked) {
    this.setAttribute('aria-checked', checked);
  }

  _addListeners() {
    this._addEventListenerToNode(this, 'down', e => {
      if (!this.disabled) {
        this.setAttribute('active', '');
      }
    });

    this._addEventListenerToNode(this, 'up', e => {
      this.removeAttribute('active');

      if (!this.checked && !this.disabled) {
        this.checked = true;
      }
    });

    this.addEventListener('keydown', e => {
      if (!this.disabled && e.keyCode === 32) {
        e.preventDefault();
        this.setAttribute('active', '');
      }
    });
    this.addEventListener('keyup', e => {
      if (!this.disabled && e.keyCode === 32) {
        e.preventDefault();
        this.click();
        this.removeAttribute('active');
      }
    });
  }
  /**
   * Toggles the radio button, so that the native `change` event
   * is dispatched. Overrides the standard `HTMLElement.prototype.click`.
   * @protected
   */


  click() {
    this.shadowRoot.querySelector('input').click();
  }
  /** @protected */


  get focusElement() {
    return this.shadowRoot.querySelector('input');
  }

  _onChange(e) {
    // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.
    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable
    });
    this.dispatchEvent(changeEvent);
  }

}
/**
 * Fired when the user toggles the radio button.
 *
 * @event change
 */


customElements.define(RadioButtonElement.is, RadioButtonElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-group.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-group.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: RadioGroupElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupElement", function() { return RadioGroupElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_radio_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-radio-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-button.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-radio-group>` is a Web Component for grouping vaadin-radio-buttons.
 *
 * ```html
 * <vaadin-radio-group>
 *   <vaadin-radio-button name="foo">Foo</vaadin-radio-button>
 *   <vaadin-radio-button name="bar">Bar</vaadin-radio-button>
 *   <vaadin-radio-button name="baz">Baz</vaadin-radio-button>
 * </vaadin-radio-group>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `group-field` | The element that wraps radio-buttons
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled`   | Set when the radio group and its children are disabled. | :host
 * `readonly` | Set to a readonly radio group | :host
 * `invalid` | Set when the element is invalid | :host
 * `has-label` | Set when the element has a label | :host
 * `has-value` | Set when the element has a value | :host
 * `focused` | Set when the element contains focus | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @element vaadin-radio-group
 * @demo demo/index.html
 */

class RadioGroupElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-radio-group';
  }

  static get properties() {
    return {
      /**
       * The current disabled state of the radio group. True if group and all internal radio buttons are disabled.
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_disabledChanged'
      },

      /**
       * This attribute indicates that the user cannot modify the value of the control.
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_readonlyChanged'
      },

      /**
       * This property is set to true when the value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * Specifies that the user must fill in a value.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Error to show when the input value is invalid.
       */
      errorMessage: {
        type: String,
        value: ''
      },
      _errorId: {
        type: String
      },
      _checkedButton: {
        type: Object
      },

      /**
       * String used for the label element.
       */
      label: {
        type: String,
        value: '',
        observer: '_labelChanged'
      },

      /**
       * Value of the radio group.
       */
      value: {
        type: String,
        notify: true,
        observer: '_valueChanged'
      }
    };
  }

  ready() {
    super.ready();

    this._addListeners();

    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"](this, info => {
      const checkedChangedListener = e => {
        if (e.target.checked) {
          this._changeSelectedButton(e.target);
        }
      }; // reverse() is used to set the last checked radio button value to radio group value


      this._filterRadioButtons(info.addedNodes).reverse().forEach(button => {
        button.addEventListener('checked-changed', checkedChangedListener);

        if (this.disabled) {
          button.disabled = true;
        }

        if (button.checked) {
          this._changeSelectedButton(button);
        }
      });

      this._filterRadioButtons(info.removedNodes).forEach(button => {
        button.removeEventListener('checked-changed', checkedChangedListener);

        if (button.checked) {
          this.value = undefined;
        }
      });
    });

    if (this._radioButtons.length) {
      this._setFocusable(0);
    }

    this.setAttribute('role', 'radiogroup');
    const uniqueId = RadioGroupElement._uniqueId = 1 + RadioGroupElement._uniqueId || 0;
    this._errorId = `${this.constructor.is}-error-${uniqueId}`;
  }

  get _radioButtons() {
    return this._filterRadioButtons(this.querySelectorAll('*'));
  }

  _setFocused(focused) {
    if (focused) {
      this.setAttribute('focused', '');
    } else {
      this.removeAttribute('focused');
    }
  }

  _filterRadioButtons(nodes) {
    return Array.from(nodes).filter(child => child instanceof _vaadin_radio_button_js__WEBPACK_IMPORTED_MODULE_3__["RadioButtonElement"]);
  }

  _disabledChanged(disabled) {
    this.setAttribute('aria-disabled', disabled);

    this._updateDisableButtons();
  }

  _updateDisableButtons() {
    this._radioButtons.forEach(button => {
      if (this.disabled) {
        button.disabled = true;
      } else if (this.readonly) {
        // it's not possible to set readonly to radio buttons, but we can
        // unchecked ones instead.
        button.disabled = button !== this._checkedButton && this.readonly;
      } else {
        button.disabled = false;
      }
    });
  }

  _readonlyChanged(newV, oldV) {
    (newV || oldV) && this._updateDisableButtons();
  }

  _addListeners() {
    this.addEventListener('keydown', e => {
      // if e.target is vaadin-radio-group then assign to checkedRadioButton currently checked radio button
      var checkedRadioButton = e.target == this ? this._checkedButton : e.target; // LEFT, UP - select previous radio button

      if (e.keyCode === 37 || e.keyCode === 38) {
        e.preventDefault();

        this._selectPreviousButton(checkedRadioButton);
      } // RIGHT, DOWN - select next radio button


      if (e.keyCode === 39 || e.keyCode === 40) {
        e.preventDefault();

        this._selectNextButton(checkedRadioButton);
      }
    });
    this.addEventListener('focusin', () => this._setFocused(this._containsFocus())); // Need to check e.composed as a workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1472887
    // otherwise FF runs validation on keyboard focus

    this.addEventListener('focusout', e => {
      e.composed && this.validate();

      this._setFocused(false);
    });
  }

  _selectButton(element, setFocusRing) {
    if (this._containsFocus()) {
      element.focus();

      if (setFocusRing) {
        element.setAttribute('focus-ring', '');
      }
    }

    this._changeSelectedButton(element, setFocusRing);
  }

  _containsFocus() {
    const root = this.getRootNode(); // Safari 9 needs polyfilled `_activeElement` to return correct node

    const activeElement = root._activeElement !== undefined ? root._activeElement : root.activeElement;
    return this.contains(activeElement);
  }

  _hasEnabledButtons() {
    return !this._radioButtons.every(button => button.disabled);
  }

  _selectNextButton(element) {
    if (!this._hasEnabledButtons()) {
      return;
    }

    var nextButton = element.nextElementSibling || this.firstElementChild;

    if (nextButton.disabled) {
      this._selectNextButton(nextButton);
    } else {
      this._selectButton(nextButton, true);
    }
  }

  _selectPreviousButton(element) {
    if (!this._hasEnabledButtons()) {
      return;
    }

    var previousButton = element.previousElementSibling || this.lastElementChild;

    if (previousButton.disabled) {
      this._selectPreviousButton(previousButton);
    } else {
      this._selectButton(previousButton, true);
    }
  }

  _changeSelectedButton(button, fireChangeEvent) {
    if (this._checkedButton === button) {
      return;
    }

    this._checkedButton = button;

    this._radioButtons.forEach(button => {
      if (button === this._checkedButton) {
        if (fireChangeEvent) {
          button.click();
        } else {
          button.checked = true;
        }
      } else {
        button.checked = false;
      }
    });

    if (this._checkedButton) {
      this.value = this._checkedButton.value;
    }

    this.validate();
    this.readonly && this._updateDisableButtons();
    button && this._setFocusable(this._radioButtons.indexOf(button));
  }

  _valueChanged(newV, oldV) {
    if (oldV && (newV === '' || newV === null || newV === undefined)) {
      this._changeSelectedButton(null);

      this.removeAttribute('has-value');
      return;
    }

    if (!this._checkedButton || newV != this._checkedButton.value) {
      const newCheckedButton = this._radioButtons.filter(button => button.value == newV)[0];

      if (newCheckedButton) {
        this._selectButton(newCheckedButton);

        this.setAttribute('has-value', '');
      } else {
        console.warn(`No <vaadin-radio-button> with value ${newV} found.`);
      }
    }
  }
  /**
   * Returns true if `value` is valid.
   * `<iron-form>` uses this to check the validity or all its elements.
   *
   * @return {boolean} True if the value is valid.
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   * @returns {boolean}
   */


  checkValidity() {
    return !this.required || !!this.value;
  }

  _setFocusable(idx) {
    const items = this._radioButtons;
    items.forEach(e => e.tabindex = e === items[idx] ? 0 : -1);
  }

  _labelChanged(label) {
    if (label) {
      this.setAttribute('has-label', '');
    } else {
      this.removeAttribute('has-label');
    }
  }

  _getActiveErrorId(invalid, errorMessage, errorId) {
    return errorMessage && invalid ? errorId : undefined;
  }

  _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
    return (!this._getActiveErrorId(invalid, errorMessage, errorId)).toString();
  }

}

customElements.define(RadioGroupElement.is, RadioGroupElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button-styles.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button-styles.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");



const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<dom-module id="lumo-radio-button" theme-for="vaadin-radio-button">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_radio_button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-radio-button-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_radio_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-radio-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-button.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group-styles.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group-styles.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_required_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/required-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");



const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<dom-module id="lumo-radio-group" theme-for="vaadin-radio-group">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js?babel-target=es6":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js?babel-target=es6 ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_radio_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-radio-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js?babel-target=es6");
/* harmony import */ var _vaadin_radio_group_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-radio-group-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_radio_group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-radio-group.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/src/vaadin-radio-group.js?babel-target=es6");




/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/vaadin-radio-button.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/vaadin-radio-button.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_radio_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-radio-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/vaadin-radio-group.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/vaadin-radio-group.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_radio_group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-radio-group.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select-overlay.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select-overlay.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/dom-module.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-overlay/3.2.12/node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay"><template><style>:host { align-items: flex-start; justify-content: flex-start; }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);
/**
  * The overlay element.
  *
  * ### Styling
  *
  * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
  * for `<vaadin-select-overlay>` parts.
  *
  * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
  *
  * @memberof Vaadin
  * @extends Vaadin.OverlayElement
  */

class SelectOverlayElement extends _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_1__["OverlayElement"] {
  static get is() {
    return 'vaadin-select-overlay';
  }

}

customElements.define(SelectOverlayElement.is, SelectOverlayElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select-text-field.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select-text-field.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

let memoizedTemplate;
/**
  * The text-field element.
  *
  * ### Styling
  *
  * See [`<vaadin-text-field>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-field.html)
  * for `<vaadin-select-text-field>` parts and available slots (prefix, suffix etc.)
  *
  * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
  *
  * @memberof Vaadin
  * @extends Vaadin.TextFieldElement
  */

class SelectTextFieldElement extends _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_0__["TextFieldElement"] {
  static get is() {
    return 'vaadin-select-text-field';
  }

  static get template() {
    // Check if text-field is using slotted input
    if (super.template.content.querySelector('slot[name="input"]')) {
      return super.template;
    }

    if (!memoizedTemplate) {
      // Clone the superclass template
      memoizedTemplate = super.template.cloneNode(true); // Create a slot for the value element

      const slot = document.createElement('slot');
      slot.setAttribute('name', 'value'); // Insert the slot before the text-field

      const input = memoizedTemplate.content.querySelector('input');
      input.parentElement.replaceChild(slot, input);
      slot.appendChild(input);
    }

    return memoizedTemplate;
  }

  get focusElement() {
    return this.shadowRoot.querySelector('[part=input-field]');
  }

  get inputElement() {
    return this.shadowRoot.querySelector('input');
  }

}

customElements.define(SelectTextFieldElement.is, SelectTextFieldElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select.js?babel-target=es6":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select.js?babel-target=es6 ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: SelectElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectElement", function() { return SelectElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/custom-style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-control-state-mixin/2.1.3/node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-resizable-behavior/3.0.1/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es6");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-media-query/3.0.1/node_modules/@polymer/iron-media-query/iron-media-query.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_select_overlay_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-select-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select-overlay.js?babel-target=es6");
/* harmony import */ var _vaadin_select_text_field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-select-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select-text-field.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/class.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/













const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<custom-style><style>@font-face { font-family: "vaadin-select-icons"; src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff'); font-weight: normal; font-style: normal; }</style></custom-style>`;
document.head.appendChild($_documentContainer.content);
/**
 *
 * `<vaadin-select>` is a Web Component for selecting values from a list of items. The content of the
 * the select can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the select uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `select` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `select`.
 *
 * ```html
 * <vaadin-select id="select"></vaadin-select>
 * ```
 * ```js
 * const select = document.querySelector('#select');
 * select.renderer = function(root, select) {
 *   const listBox = document.createElement('vaadin-list-box');
 *   // append 3 <vaadin-item> elements
 *   ['Jose', 'Manolo', 'Pedro'].forEach(function(name) {
 *     const item = document.createElement('vaadin-item');
 *     item.textContent = name;
 *     listBox.appendChild(item);
 *   });
 *
 *   // update the content
 *   root.appendChild(listBox);
 * };
 * ```
 *
 * Renderer is called on initialization of new select and on its opening.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Polymer Templates
 *
 * Alternatively, the content can be provided with Polymer's Template.
 * Select finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * ```
 * <vaadin-select>
 *   <template>
 *     <vaadin-list-box>
 *       <vaadin-item label="foo">Foo</vaadin-item>
 *       <vaadin-item>Bar</vaadin-item>
 *       <vaadin-item>Baz</vaadin-item>
 *     </vaadin-list-box>
 *   </template>
 * </vaadin-select>
 * ```
 *
 * Hint: By setting the `label` property of inner vaadin-items you will
 * be able to change the visual representation of the selected value in the input part.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `toggle-button` | The toggle button
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `opened` | Set when the select is open | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set when the select is read only | :host
 *
 * `<vaadin-select>` element sets these custom CSS properties:
 *
 * Property name | Description | Theme for element
 * --- | --- | ---
 * `--vaadin-select-text-field-width` | Width of the select text field | `vaadin-select-overlay`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * In addition to `<vaadin-select>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-select-text-field>`
 * - `<vaadin-select-overlay>`
 *
 * Note: the `theme` attribute value set on `<vaadin-select>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */

class SelectElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_12__["mixinBehaviors"])(_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronResizableBehavior"], _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_10__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-select';
  }

  static get version() {
    return '2.1.5';
  }

  static get properties() {
    return {
      /**
       * Set when the select is open
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_openedChanged'
      },

      /**
       * Custom function for rendering the content of the `<vaadin-select>`.
       * Receives two arguments:
       *
       * - `root` The `<vaadin-select-overlay>` internal container
       *   DOM element. Append your content to it.
       * - `select` The reference to the `<vaadin-select>` element.
       */
      renderer: Function,

      /**
       * The error message to display when the select value is invalid
       */
      errorMessage: {
        type: String,
        value: ''
      },

      /**
       * String used for the label element.
       */
      label: {
        type: String
      },

      /**
       * It stores the the `value` property of the selected item, providing the
       * value for iron-form.
       * When there’s an item selected, it's the value of that item, otherwise
       * it's an empty string.
       * On change or initialization, the component finds the item which matches the
       * value and displays it.
       * If no value is provided to the component, it selects the first item without
       * value or empty value.
       * Hint: If you do not want to select any item by default, you can either set all
       * the values of inner vaadin-items, or set the vaadin-select value to
       * an inexistent value in the items list.
       */
      value: {
        type: String,
        value: '',
        notify: true,
        observer: '_valueChanged'
      },

      /**
       * The current required state of the select. True if required.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true,
        observer: '_requiredChanged'
      },

      /**
       * Set to true if the value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * The name of this element.
       */
      name: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * A hint to the user of what can be entered in the control.
       * The placeholder will be displayed in the case that there
       * is no item selected, or the selected item has an empty
       * string label, or the selected item has no label and it's
       * DOM content is empty.
       */
      placeholder: {
        type: String
      },

      /**
       * When present, it specifies that the element is read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      _phone: Boolean,
      _phoneMediaQuery: {
        value: '(max-width: 420px), (max-height: 420px)'
      },
      _overlayElement: Object,
      _inputElement: Object,
      _toggleElement: Object,
      _items: Object,
      _contentTemplate: Object,
      _oldTemplate: Object,
      _oldRenderer: Object
    };
  }

  static get observers() {
    return ['_updateSelectedItem(value, _items)', '_updateAriaExpanded(opened, _toggleElement, _inputElement)', '_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)'];
  }
  /** @private */


  constructor() {
    super();
    this._boundSetPosition = this._setPosition.bind(this);
  }
  /** @private */


  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', this._boundSetPosition);
  }

  ready() {
    super.ready();
    this._overlayElement = this.shadowRoot.querySelector('vaadin-select-overlay');
    this._valueElement = this.shadowRoot.querySelector('[part="value"]');
    this._toggleElement = this.shadowRoot.querySelector('[part="toggle-button"]');
    this._nativeInput = this.focusElement.shadowRoot.querySelector('input');

    this._nativeInput.setAttribute('aria-hidden', true);

    this._nativeInput.setAttribute('tabindex', -1);

    this._nativeInput.style.pointerEvents = 'none';
    this.focusElement.addEventListener('click', e => this.opened = !this.readonly);
    this.focusElement.addEventListener('keydown', e => this._onKeyDown(e));
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_11__["FlattenedNodesObserver"](this, info => this._setTemplateFromNodes(info.addedNodes));

    this._observer.flush();
  }

  _setTemplateFromNodes(nodes) {
    const template = Array.from(nodes).filter(node => node.localName && node.localName === 'template')[0] || this._contentTemplate;

    this._overlayElement.template = this._contentTemplate = template;

    this._setForwardHostProps();
  }

  _setForwardHostProps() {
    if (this._overlayElement.content) {
      const origForwardHostProp = this._overlayElement._instance && this._overlayElement._instance.forwardHostProp;

      if (this._overlayElement._instance) {
        this._overlayElement._instance.forwardHostProp = (...args) => {
          origForwardHostProp.apply(this._overlayElement._instance, args);
          setTimeout(() => {
            this._updateValueSlot();
          });
        };

        this._assignMenuElement();
      }
    }
  }
  /**
   * Manually invoke existing renderer.
   */


  render() {
    this._overlayElement.render();

    if (this._menuElement && this._menuElement.items) {
      this._updateSelectedItem(this.value, this._menuElement.items);
    }
  }

  _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
    if (template !== oldTemplate) {
      this._contentTemplate = undefined;
    } else if (renderer !== oldRenderer) {
      this.renderer = undefined;
    }
  }

  _templateOrRendererChanged(template, renderer, overlay) {
    if (!overlay) {
      return;
    }

    if (template && renderer) {
      this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

      throw new Error('You should only use either a renderer or a template for select content');
    }

    this._oldTemplate = template;
    this._oldRenderer = renderer;

    if (renderer) {
      overlay.setProperties({
        owner: this,
        renderer: renderer
      });
      this.render();

      if (overlay.content.firstChild) {
        this._assignMenuElement();
      }
    }
  }

  _assignMenuElement() {
    this._menuElement = Array.from(this._overlayElement.content.children).filter(element => element.localName !== 'style')[0];

    if (this._menuElement) {
      this._menuElement.addEventListener('items-changed', e => {
        this._items = this._menuElement.items;

        this._items.forEach(item => item.setAttribute('role', 'option'));
      });

      this._menuElement.addEventListener('selected-changed', e => this._updateValueSlot());

      this._menuElement.addEventListener('keydown', e => this._onKeyDownInside(e));

      this._menuElement.addEventListener('click', e => {
        this.__userInteraction = true;
        this.opened = false;
      }, true);

      this._menuElement.setAttribute('role', 'listbox');
    }
  }
  /** @protected */


  get focusElement() {
    return this._inputElement || (this._inputElement = this.shadowRoot.querySelector('vaadin-select-text-field'));
  }
  /** @private */


  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('iron-resize', this._boundSetPosition); // Making sure the select is closed and removed from DOM after detaching the select.

    this.opened = false;
  }
  /** @private */


  notifyResize() {
    super.notifyResize();

    if (this.positionTarget && this.opened) {
      this._setPosition(); // Schedule another position update (to cover virtual keyboard opening for example)


      requestAnimationFrame(this._setPosition.bind(this));
    }
  }

  _requiredChanged(required) {
    this.setAttribute('aria-required', required);
  }

  _valueChanged(value, oldValue) {
    if (value === '') {
      this.focusElement.removeAttribute('has-value');
    } else {
      this.focusElement.setAttribute('has-value', '');
    } // Skip validation for the initial empty string value


    if (value === '' && oldValue === undefined) {
      return;
    }

    this.validate();
  }

  _onKeyDown(e) {
    if (!this.readonly && !this.opened) {
      if (/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key)) {
        e.preventDefault();
        this.opened = true;
      } else if (/[a-zA-Z0-9]/.test(e.key) && e.key.length === 1) {
        const selected = this._menuElement.selected;
        const currentIdx = selected !== undefined ? selected : -1;

        const newIdx = this._menuElement._searchKey(currentIdx, e.key);

        if (newIdx >= 0) {
          this.__userInteraction = true;

          this._updateSelectedItem(this._items[newIdx].value, this._items);
        }
      }
    }
  }

  _onKeyDownInside(e) {
    if (/^(Tab)$/.test(e.key)) {
      this.opened = false;
    }
  }

  _openedChanged(opened, wasOpened) {
    if (opened) {
      if (!this._overlayElement || !this._menuElement || !this._toggleElement || !this.focusElement || this.disabled || this.readonly) {
        this.opened = false;
        return;
      }

      this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement.hasAttribute('focus-ring');

      this._menuElement.focus();

      this._setPosition();

      window.addEventListener('scroll', this._boundSetPosition, true);
    } else if (wasOpened) {
      if (this._phone) {
        this._setFocused(false);
      } else {
        this.focusElement.focus();

        if (this._openedWithFocusRing) {
          this.focusElement.setAttribute('focus-ring', '');
        }
      }

      this.validate();
      window.removeEventListener('scroll', this._boundSetPosition, true);
    }
  }

  _hasContent(selected) {
    if (!selected) {
      return false;
    }

    return Boolean(selected.hasAttribute('label') ? selected.getAttribute('label') : selected.textContent.trim() || selected.children.length);
  }

  _attachSelectedItem(selected) {
    if (!selected) {
      return;
    }

    let labelItem;

    if (selected.hasAttribute('label')) {
      labelItem = document.createElement('vaadin-item');
      labelItem.textContent = selected.getAttribute('label');
    } else {
      labelItem = selected.cloneNode(true);
    } // store reference to the original item


    labelItem._sourceItem = selected;
    labelItem.removeAttribute('tabindex');

    this._valueElement.appendChild(labelItem);

    labelItem.selected = true;
  }

  _updateAriaExpanded(opened, toggleElement, inputElement) {
    toggleElement && toggleElement.setAttribute('aria-expanded', opened);

    if (inputElement && inputElement.focusElement) {
      inputElement.focusElement.setAttribute('aria-expanded', opened);
    }
  }

  _updateValueSlot() {
    this.opened = false;
    this._valueElement.innerHTML = '';
    const selected = this._items[this._menuElement.selected];

    const hasContent = this._hasContent(selected); // Check if text-field is using slotted input


    const slotName = this._inputElement.shadowRoot.querySelector('slot[name="input"]') ? 'input' : 'value'; // Toggle visibility of _valueElement vs fallback input with placeholder

    this._valueElement.slot = hasContent ? slotName : ''; // Ensure the slot distribution to apply correct style scope for cloned item

    if (hasContent && window.ShadyDOM) {
      window.ShadyDOM.flush();
    }

    this._attachSelectedItem(selected);

    if (!this._valueChanging && selected) {
      this._selectedChanging = true;
      this.value = selected.value || '';

      if (this.__userInteraction) {
        this.dispatchEvent(new CustomEvent('change', {
          bubbles: true
        }));
        this.__userInteraction = false;
      }

      delete this._selectedChanging;
    }
  }

  _updateSelectedItem(value, items) {
    if (items) {
      this._menuElement.selected = items.reduce((prev, item, idx) => {
        return prev === undefined && item.value === value ? idx : prev;
      }, undefined);

      if (!this._selectedChanging) {
        this._valueChanging = true;

        this._updateValueSlot();

        delete this._valueChanging;
      }
    }
  }
  /** @override */


  _setFocused(focused) {
    // Keep `focused` state when opening the overlay for styling purpose.
    super._setFocused(this.opened || focused);

    this.focusElement._setFocused(this.hasAttribute('focused'));

    !this.hasAttribute('focused') && this.validate();
  }

  _setPosition() {
    const inputRect = this._inputElement.shadowRoot.querySelector('[part~="input-field"]').getBoundingClientRect();

    const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
    const bottomAlign = inputRect.top > (viewportHeight - inputRect.height) / 2;
    this._overlayElement.style.left = inputRect.left + 'px';

    if (bottomAlign) {
      this._overlayElement.setAttribute('bottom-aligned', '');

      this._overlayElement.style.removeProperty('top');

      this._overlayElement.style.bottom = viewportHeight - inputRect.bottom + 'px';
    } else {
      this._overlayElement.removeAttribute('bottom-aligned');

      this._overlayElement.style.removeProperty('bottom');

      this._overlayElement.style.top = inputRect.top + 'px';
    }

    this._overlayElement.updateStyles({
      '--vaadin-select-text-field-width': inputRect.width + 'px'
    });
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate() {
    return !(this.invalid = !(this.disabled || !this.required || this.value));
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */


}

customElements.define(SelectElement.is, SelectElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/theme/lumo/vaadin-select-styles.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/theme/lumo/vaadin-select-styles.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_item_theme_lumo_vaadin_item_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_list_box_theme_lumo_vaadin_list_box_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");










const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_9__["html"]`<dom-module id="lumo-select" theme-for="vaadin-select">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/theme/lumo/vaadin-select.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/theme/lumo/vaadin-select.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_select_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-select-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/theme/lumo/vaadin-select-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-select.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/src/vaadin-select.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/vaadin-select.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/vaadin-select.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-select.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/theme/lumo/vaadin-select.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-email-field.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-email-field.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: EmailFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailFieldElement", function() { return EmailFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/custom-style.js?babel-target=es6");
/* harmony import */ var _vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * `<vaadin-email-field>` is a Web Component for email field control in forms.
 *
 * ```html
 * <vaadin-email-field label="Email">
 * </vaadin-email-field>
 * ```
 *
 * ### Styling
 *
 * See vaadin-text-field.html for the styling documentation
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @extends Vaadin.TextFieldElement
 * @demo demo/index.html
 */

class EmailFieldElement extends _vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_2__["TextFieldElement"] {
  static get is() {
    return 'vaadin-email-field';
  }

  static get version() {
    return '2.4.7';
  }

  ready() {
    super.ready();
    this.inputElement.type = 'email';
    this.inputElement.autocapitalize = 'off';
    this.pattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  }

}

customElements.define(EmailFieldElement.is, EmailFieldElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-area.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-area.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: TextAreaElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaElement", function() { return TextAreaElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-text-area>` is a Web Component for text area control in forms.
 *
 * ```html
 * <vaadin-text-area label="Add description">
 * </vaadin-text-area>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-area>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-area label="Add description">
 *   <div slot="prefix">Details:</div>
 *   <div slot="suffix">The end!</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.TextFieldMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class TextAreaElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-text-area';
  }

  static get version() {
    return '2.4.7';
  }

  static get observers() {
    return ['_textAreaValueChanged(value)'];
  }

  ready() {
    super.ready();

    this._updateHeight();

    this.addEventListener('animationend', this._onAnimationEnd);
  }

  _onAnimationEnd(e) {
    if (e.animationName.indexOf('vaadin-text-area-appear') === 0) {
      this._updateHeight();
    }
  }

  get _slottedTagName() {
    return 'textarea';
  }

  _textAreaValueChanged(value) {
    this._updateHeight();
  }

  _updateHeight() {
    const inputField = this.root.querySelector('[part=input-field]');
    const scrollTop = inputField.scrollTop;
    const input = this.inputElement;
    const inputWidth = getComputedStyle(input).width;
    const valueLength = this.value ? this.value.length : 0; // Only clear the height when the content shortens to minimize scrollbar flickering.

    if (this._oldValueLength >= valueLength) {
      // Fix the input element width so its scroll height isn't affected by host's disappearing scrollbars
      input.style.maxWidth = inputWidth;
      input.style.height = 'auto'; // Avoid a jumpy Safari rendering issue

      inputField.style.display = 'block';
    }

    this._oldValueLength = valueLength;
    const inputHeight = input.scrollHeight;

    if (inputHeight > input.clientHeight) {
      input.style.height = inputHeight + 'px';
    } // Restore


    input.style.removeProperty('max-width');
    inputField.style.removeProperty('display');
    inputField.scrollTop = scrollTop;

    this._dispatchIronResizeEventIfNeeded('InputHeight', inputHeight);
  }
  /**
   * Fired when the text-area height changes.
   *
   * @event iron-resize
   */


}

customElements.define(TextAreaElement.is, TextAreaElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _src_vaadin_email_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-email-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-email-field.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area-styles.js?babel-target=es6":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area-styles.js?babel-target=es6 ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_area_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-area-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area-styles.js?babel-target=es6");
/* harmony import */ var _vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _src_vaadin_text_area_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-text-area.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-area.js?babel-target=es6");




/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/vaadin-email-field.js?babel-target=es6":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/vaadin-email-field.js?babel-target=es6 ***!
  \************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_email_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-email-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/vaadin-text-area.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/vaadin-text-area.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_text_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-text-area.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/src/vaadin-time-picker-text-field.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/src/vaadin-time-picker-text-field.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es6");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
  * The text-field element.
  *
  * ### Styling
  *
  * See [`<vaadin-text-field>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-field.html)
  * for `<vaadin-time-picker-text-field>` parts and available slots (prefix, suffix etc.)
  *
  * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
  *
  * @memberof Vaadin
  * @extends Vaadin.TextFieldElement
  */

class TimePickerTextFieldElement extends _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_0__["TextFieldElement"] {
  static get is() {
    return 'vaadin-time-picker-text-field';
  }

}

customElements.define(TimePickerTextFieldElement.is, TimePickerTextFieldElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/src/vaadin-time-picker.js?babel-target=es6":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/src/vaadin-time-picker.js?babel-target=es6 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: TimePickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerElement", function() { return TimePickerElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_combo_box_src_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js?babel-target=es6");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-a11y-keys-behavior/3.0.1/node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js?babel-target=es6");
/* harmony import */ var _vaadin_time_picker_text_field_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-time-picker-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/src/vaadin-time-picker-text-field.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-control-state-mixin/2.1.3/node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es6");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/









/**
 * `<vaadin-time-picker>` is a Web Component providing a time-selection field.
 *
 * ```html
 * <vaadin-time-picker></vaadin-time-picker>
 * ```
 * ```js
 * timePicker.value = '14:30';
 * ```
 *
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `toggle-button` | The toggle button
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled time picker | :host
 * `readonly` | Set to a read only time picker | :host
 * `invalid` | Set when the element is invalid | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 *
 * In addition to `<vaadin-time-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-time-picker-text-field>`, see
 *   [`<vaadin-text-field>` documentation](https://vaadin.com/components/vaadin-text-field/html-api/elements/Vaadin.TextFieldElement)
 *   for the text field parts.
 * - `<vaadin-combo-box-light>`, see
 *   [`<vaadin-combo-box>` documentation](https://vaadin.com/components/vaadin-combo-box/html-api/elements/Vaadin.ComboBoxElement)
 *   for the combo box parts.
 *
 * Note: the `theme` attribute value set on `<vaadin-time-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @demo demo/index.html
 */

class TimePickerElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_8__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemePropertyMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-time-picker';
  }

  static get version() {
    return '2.0.1';
  }

  static get properties() {
    return {
      /**
       * The name of this element.
       */
      name: {
        type: String
      },

      /**
       * The time value for this element.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm` (default)
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */
      value: {
        type: String,
        observer: '__valueChanged',
        notify: true,
        value: ''
      },

      /**
       * The label for this element.
       */
      label: {
        type: String,
        reflectToAttribute: true
      },

      /**
       * Set to true to mark the input as required.
       */
      required: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable this input.
       */
      disabled: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to prevent the user from entering invalid input.
       */
      preventInvalidInput: {
        type: Boolean
      },

      /**
       * A pattern to validate the `input` with.
       */
      pattern: {
        type: String
      },

      /**
       * The error message to display when the input is invalid.
       */
      errorMessage: {
        type: String
      },

      /**
       * A placeholder string in addition to the label.
       */
      placeholder: {
        type: String,
        value: ''
      },

      /**
       * Set to true to prevent user picking a date or typing in the input.
       */
      readonly: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true if the value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * Minimum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */
      min: {
        type: String,
        value: '00:00:00.000'
      },

      /**
       * Maximum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */
      max: {
        type: String,
        value: '23:59:59.999'
      },

      /**
       * Specifies the number of valid intervals in a day used for
       * configuring the items displayed in the selection box.
       *
       * It also configures the precision of the value string. By default
       * the component formats values as `hh:mm` but setting a step value
       * lower than one minute or one second, format resolution changes to
       * `hh:mm:ss` and `hh:mm:ss.fff` respectively.
       *
       * Unit must be set in seconds, and for correctly configuring intervals
       * in the dropdown, it need to evenly divide a day.
       *
       * Note: it is possible to define step that is dividing an hour in inexact
       * fragments (i.e. 5760 seconds which equals 1 hour 36 minutes), but it is
       * not recommended to use it for better UX experience.
       */
      step: {
        type: Number
      },

      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },
      __dropdownItems: {
        type: Array
      },

      /**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure:
           {
            // A function to format given `Object` as
            // time string. Object is in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
            formatTime: (time) => {
              // returns a string representation of the given
              // object in `hh` / 'hh:mm' / 'hh:mm:ss' / 'hh:mm:ss.fff' - formats
            },
             // A function to parse the given text to an `Object` in the format
            // `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`.
            // Must properly parse (at least) text
            // formatted by `formatTime`.
            parseTime: text => {
              // Parses a string in object/string that can be formatted by`formatTime`.
            }
             // Translation of the time selector icon button title.
            selector: 'Time selector',
             // Translation of the time selector clear button title.
            clear: 'Clear'
          }
        */
      i18n: {
        type: Object,
        value: () => {
          return {
            formatTime: time => {
              if (!time) {
                return;
              }

              const pad = (num = 0, fmt = '00') => (fmt + num).substr((fmt + num).length - fmt.length); // Always display hour and minute


              let timeString = `${pad(time.hours)}:${pad(time.minutes)}`; // Adding second and millisecond depends on resolution

              time.seconds !== undefined && (timeString += `:${pad(time.seconds)}`);
              time.milliseconds !== undefined && (timeString += `.${pad(time.milliseconds, '000')}`);
              return timeString;
            },
            parseTime: text => {
              // Parsing with RegExp to ensure correct format
              const MATCH_HOURS = '(\\d|[0-1]\\d|2[0-3])';
              const MATCH_MINUTES = '(\\d|[0-5]\\d)';
              const MATCH_SECONDS = MATCH_MINUTES;
              const MATCH_MILLISECONDS = '(\\d{1,3})';
              const re = new RegExp(`^${MATCH_HOURS}(?::${MATCH_MINUTES}(?::${MATCH_SECONDS}(?:\\.${MATCH_MILLISECONDS})?)?)?$`);
              const parts = re.exec(text);

              if (parts) {
                // Allows setting the milliseconds with hundreds and tens precision
                if (parts[4]) {
                  while (parts[4].length < 3) {
                    parts[4] += '0';
                  }
                }

                return {
                  hours: parts[1],
                  minutes: parts[2],
                  seconds: parts[3],
                  milliseconds: parts[4]
                };
              }
            },
            selector: 'Time selector',
            clear: 'Clear'
          };
        }
      }
    };
  }

  static get observers() {
    return ['__updateDropdownItems(i18n.*, min, max, step)'];
  }

  ready() {
    super.ready(); // Not using declarative because we receive an event before text-element shadow is ready,
    // thus querySelector in textField.focusElement raises an undefined exception on validate

    this.__dropdownElement.addEventListener('value-changed', e => this.__onInputChange(e));

    this.__inputElement.addEventListener('keydown', this.__onKeyDown.bind(this));

    this.__dropdownElement.addEventListener('change', e => {
      // `vaadin-combo-box-light` forwards 'change' event from text-field.
      // So we need to filter out in order to avoid duplicates.
      if (e.composedPath()[0] !== this.__inputElement) {
        this.__dispatchChange();
      }
    });
  }

  __validDayDivisor(step) {
    // valid if undefined, or exact divides a day, or has millisecond resolution
    return !step || 24 * 3600 % step === 0 || step < 1 && step % 1 * 1000 % 1 === 0;
  }

  __onKeyDown(e) {
    if (this.readonly || this.disabled || this.__dropdownItems.length) {
      return;
    }

    const stepResolution = this.__validDayDivisor(this.step) && this.step || 60;

    if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, 'down')) {
      this.__onArrowPressWithStep(-stepResolution);
    } else if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, 'up')) {
      this.__onArrowPressWithStep(stepResolution);
    }
  }

  __onArrowPressWithStep(step) {
    const objWithStep = this.__addStep(this.__getMsec(this.__memoValue), step, true);

    this.__memoValue = objWithStep;
    this.__inputElement.value = this.i18n.formatTime(this.__validateTime(objWithStep));

    this.__dispatchChange();
  }

  __dispatchChange() {
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true
    }));
  }
  /**
   * Returning milliseconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
   */


  __getMsec(obj) {
    let result = (obj && obj.hours || 0) * 60 * 60 * 1000;
    result += (obj && obj.minutes || 0) * 60 * 1000;
    result += (obj && obj.seconds || 0) * 1000;
    result += obj && obj.milliseconds || 0;
    return result;
  }
  /**
   * Returning seconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
   */


  __getSec(obj) {
    let result = (obj && obj.hours || 0) * 60 * 60;
    result += (obj && obj.minutes || 0) * 60;
    result += obj && obj.seconds || 0;
    result += obj && obj.milliseconds / 1000 || 0;
    return result;
  }
  /**
   * Returning Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
   * from the result of adding step value in milliseconds to the milliseconds amount.
   * With `precision` parameter rounding the value to the closest step valid interval.
   */


  __addStep(msec, step, precision) {
    // If the time is `00:00` and step changes value downwards, it should be considered as `24:00`
    if (msec === 0 && step < 0) {
      msec = 24 * 60 * 60 * 1000;
    }

    const stepMsec = step * 1000;
    const diffToNext = msec % stepMsec;

    if (stepMsec < 0 && diffToNext && precision) {
      msec -= diffToNext;
    } else if (stepMsec > 0 && diffToNext && precision) {
      msec -= diffToNext - stepMsec;
    } else {
      msec += stepMsec;
    }

    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    return {
      hours: hh < 24 ? hh : 0,
      minutes: mm,
      seconds: ss,
      milliseconds: msec
    };
  }

  __updateDropdownItems(i8n, min, max, step) {
    const minTimeObj = this.__validateTime(this.__parseISO(min));

    const minSec = this.__getSec(minTimeObj);

    const maxTimeObj = this.__validateTime(this.__parseISO(max));

    const maxSec = this.__getSec(maxTimeObj);

    this.__adjustValue(minSec, maxSec, minTimeObj, maxTimeObj);

    this.__dropdownItems = this.__generateDropdownList(minSec, maxSec, step);

    if (step !== this.__oldStep) {
      this.__oldStep = step;

      const parsedObj = this.__validateTime(this.__parseISO(this.value));

      this.__updateValue(parsedObj);
    }

    if (this.value) {
      this.__dropdownElement.value = this.i18n.formatTime(this.i18n.parseTime(this.value));
    }
  }

  __generateDropdownList(minSec, maxSec, step) {
    if (step < 15 * 60 || !this.__validDayDivisor(step)) {
      return [];
    }

    const generatedList = []; // Default step in overlay items is 1 hour

    step = step || 3600;
    let time = -step + minSec;

    while (time + step >= minSec && time + step <= maxSec) {
      const timeObj = this.__validateTime(this.__addStep(time * 1000, step));

      time += step;
      const formatted = this.i18n.formatTime(timeObj);
      generatedList.push({
        label: formatted,
        value: formatted
      });
    }

    return generatedList;
  }

  __adjustValue(minSec, maxSec, minTimeObj, maxTimeObj) {
    const valSec = this.__getSec(this.__memoValue);

    if (valSec < minSec) {
      this.__updateValue(minTimeObj);
    } else if (valSec > maxSec) {
      this.__updateValue(maxTimeObj);
    }
  }

  __valueChanged(value, oldValue) {
    const parsedObj = this.__memoValue = this.__parseISO(value);

    const newValue = this.__formatISO(parsedObj) || '';

    if (this.value !== '' && this.value !== null && !parsedObj) {
      this.value = oldValue;
    } else if (this.value !== newValue) {
      this.value = newValue;
    } else {
      this.__updateInputValue(parsedObj);
    }
  }

  __onInputChange(e) {
    const parsedObj = this.i18n.parseTime(this.__dropdownElement.value);
    const newValue = this.i18n.formatTime(parsedObj) || '';

    if (parsedObj) {
      if (this.__dropdownElement.value !== newValue) {
        this.__dropdownElement.value = newValue;
      } else {
        this.__updateValue(parsedObj);
      }
    } else {
      this.value = '';
    }

    this.validate();
  }

  __updateValue(obj) {
    const timeString = this.__formatISO(this.__validateTime(obj)) || '';
    this.value = timeString;
  }

  __updateInputValue(obj) {
    const timeString = this.i18n.formatTime(this.__validateTime(obj)) || '';
    this.__dropdownElement.value = timeString;
  }

  __validateTime(timeObject) {
    if (timeObject) {
      timeObject.hours = parseInt(timeObject.hours);
      timeObject.minutes = parseInt(timeObject.minutes || 0);
      timeObject.seconds = this.__stepSegment < 3 ? undefined : parseInt(timeObject.seconds || 0);
      timeObject.milliseconds = this.__stepSegment < 4 ? undefined : parseInt(timeObject.milliseconds || 0);
    }

    return timeObject;
  }

  get __stepSegment() {
    if (this.step % 3600 === 0) {
      // Accept hours
      return 1;
    } else if (this.step % 60 === 0 || !this.step) {
      // Accept minutes
      return 2;
    } else if (this.step % 1 === 0) {
      // Accept seconds
      return 3;
    } else if (this.step < 1) {
      // Accept milliseconds
      return 4;
    }
  }

  __formatISO(time) {
    // The default i18n formatter implementation is ISO 8601 compliant
    return TimePickerElement.properties.i18n.value().formatTime(time);
  }

  __parseISO(text) {
    // The default i18n parser implementation is ISO 8601 compliant
    return TimePickerElement.properties.i18n.value().parseTime(text);
  }

  get __inputElement() {
    return this.__memoInput || (this.__memoInput = this.shadowRoot.querySelector('vaadin-time-picker-text-field'));
  }

  get __dropdownElement() {
    return this.__memoDropdown || (this.__memoDropdown = this.shadowRoot.querySelector('vaadin-combo-box-light'));
  }
  /**
   * Focusable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    return this.__inputElement;
  }
  /**
   * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
   *
   * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * You can override the `checkValidity` method for custom validations.
   */


  checkValidity() {
    return this.__inputElement.focusElement.checkValidity() && (!this.__dropdownElement.value || this.i18n.parseTime(this.__dropdownElement.value));
  }

}

customElements.define(TimePickerElement.is, TimePickerElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker-styles.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker-styles.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_combo_box_theme_lumo_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");





const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js?babel-target=es6":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js?babel-target=es6 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_time_picker_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-time-picker-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_time_picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-time-picker.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/src/vaadin-time-picker.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/vaadin-time-picker.js?babel-target=es6":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/vaadin-time-picker.js?babel-target=es6 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_time_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-time-picker.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js?babel-target=es6");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-file.js?babel-target=es6":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-file.js?babel-target=es6 ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: UploadFileElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileElement", function() { return UploadFileElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_progress_bar_src_vaadin_progress_bar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js?babel-target=es6");
/* harmony import */ var _vaadin_upload_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-upload-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-icons.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-upload-file>` element represents a file in the file list of `<vaadin-upload>`.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `row` | File container
 * `info` | Container for file status icon, file name, status and error messages
 * `done-icon` | File done status icon
 * `warning-icon` | File warning status icon
 * `meta` | Container for file name, status and error messages
 * `name` | File name
 * `error` | Error message, shown when error happens
 * `status` | Status message
 * `commands` | Container for file command icons
 * `start-button` | Start file upload button
 * `retry-button` | Retry file upload button
 * `clear-button` | Clear file button
 * `progress`| Progress bar
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part name
 * ---|---|---
 * `error` | An error has happened during uploading | `:host`
 * `indeterminate` | Uploading is in progress, but the progress value is unknown | `:host`
 * `uploading` | Uploading is in progress | `:host`
 * `complete` | Uploading has finished successfully | `:host`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class UploadFileElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-upload-file';
  }

  static get properties() {
    return {
      file: Object
    };
  }

  static get observers() {
    return ['_fileAborted(file.abort)', '_toggleHostAttribute(file.error, "error")', '_toggleHostAttribute(file.indeterminate, "indeterminate")', '_toggleHostAttribute(file.uploading, "uploading")', '_toggleHostAttribute(file.complete, "complete")'];
  }

  _fileAborted(abort) {
    if (abort) {
      this._remove();
    }
  }

  _remove() {
    this.dispatchEvent(new CustomEvent('file-remove', {
      detail: {
        file: this.file
      },
      bubbles: true,
      composed: true
    }));
  }

  _formatProgressValue(progress) {
    return progress / 100;
  }

  _fireFileEvent(e) {
    e.preventDefault();
    return this.dispatchEvent(new CustomEvent(e.target.getAttribute('file-event'), {
      detail: {
        file: this.file
      },
      bubbles: true,
      composed: true
    }));
  }

  _toggleHostAttribute(value, attributeName) {
    const shouldHave = Boolean(value);
    const has = this.hasAttribute(attributeName);

    if (has !== shouldHave) {
      if (shouldHave) {
        this.setAttribute(attributeName, '');
      } else {
        this.removeAttribute(attributeName);
      }
    }
  }
  /**
  * Fired when the retry button is pressed. It is listened by `vaadin-upload`
  * which will start a new upload process of this file.
  *
  * @event file-retry
  * @param {Object} detail
  * @param {Object} detail.file file to retry upload of
  */

  /**
  * Fired when the start button is pressed. It is listened by `vaadin-upload`
  * which will start a new upload process of this file.
  *
  * @event file-start
  * @param {Object} detail
  * @param {Object} detail.file file to start upload of
  */

  /**
   * Fired when abort button is pressed. It is listened by `vaadin-upload` which
   * will abort the upload in progress, but will not remove the file from the list
   * to allow the animation to hide the element to be run.
   *
   * @event file-abort
   * @param {Object} detail
   * @param {Object} detail.file file to abort upload of
   */

  /**
   * Fired after the animation to hide the element has finished. It is listened
   * by `vaadin-upload` which will actually remove the file from the upload
   * file list.
   *
   * @event file-remove
   * @param {Object} detail
   * @param {Object} detail.file file to remove from the  upload of
   */


}

customElements.define(UploadFileElement.is, UploadFileElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-icons.js?babel-target=es6":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-icons.js?babel-target=es6 ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/custom-style.js?babel-target=es6");

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<custom-style><style>@font-face { font-family: 'vaadin-upload-icons'; src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff'); font-weight: normal; font-style: normal; }</style></custom-style>`;
document.head.appendChild($_documentContainer.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload.js?babel-target=es6":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload.js?babel-target=es6 ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: UploadElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadElement", function() { return UploadElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/gestures.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_elements_dom_repeat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/dom-repeat.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_button_src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-button/src/vaadin-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/src/vaadin-button.js?babel-target=es6");
/* harmony import */ var _vaadin_upload_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-upload-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-icons.js?babel-target=es6");
/* harmony import */ var _vaadin_upload_file_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-upload-file.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload-file.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/









/**
 * `<vaadin-upload>` is a Web Component for uploading multiple files with drag and drop support.
 *
 * Example:
 *
 * ```
 * <vaadin-upload></vaadin-upload>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `primary-buttons` | Upload container
 * `upload-button` | Upload button
 * `drop-label` | Label for drop indicator
 * `drop-label-icon` | Icon for drop indicator
 * `file-list` | File list container
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part name
 * ---|---|---
 * `nodrop` | Set when drag and drop is disabled (e. g., on touch devices) | `:host`
 * `dragover` | A file is being dragged over the element | `:host`
 * `dragover-valid` | A dragged file is valid with `maxFiles` and `accept` criteria | `:host`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

class UploadElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ElementMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-upload';
  }

  static get version() {
    return '4.2.2';
  }

  static get properties() {
    return {
      /**
       * Define whether the element supports dropping files on it for uploading.
       * By default it's enabled in desktop and disabled in touch devices
       * because mobile devices do not support drag events in general. Setting
       * it false means that drop is enabled even in touch-devices, and true
       * disables drop in all devices.
       *
       * @default true in touch-devices, false otherwise.
       */
      nodrop: {
        type: Boolean,
        reflectToAttribute: true,
        value: function () {
          try {
            return !!document.createEvent('TouchEvent');
          } catch (e) {
            return false;
          }
        }
      },

      /**
       * The server URL. The default value is an empty string, which means that
       * _window.location_ will be used.
       */
      target: {
        type: String,
        value: ''
      },

      /**
       * HTTP Method used to send the files. Only POST and PUT are allowed.
       */
      method: {
        type: String,
        value: 'POST'
      },

      /**
       * Key-Value map to send to the server. If you set this property as an
       * attribute, use a valid JSON string, for example:
       * ```
       * <vaadin-upload headers='{"X-Foo": "Bar"}'></vaadin-upload>
       * ```
       */
      headers: {
        type: Object,
        value: {}
      },

      /**
       * Max time in milliseconds for the entire upload process, if exceeded the
       * request will be aborted. Zero means that there is no timeout.
       *
       */
      timeout: {
        type: Number,
        value: 0
      },
      _dragover: {
        type: Boolean,
        value: false,
        observer: '_dragoverChanged'
      },

      /**
       * The array of files being processed, or already uploaded.
       *
       * Each element is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
       * object with a number of extra properties  to track the upload process:
       * - `uploadTarget`: The target URL used to upload this file.
       * - `elapsed`: Elapsed time since the upload started.
       * - `elapsedStr`: Human-readable elapsed time.
       * - `remaining`: Number of seconds remaining for the upload to finish.
       * - `remainingStr`: Human-readable remaining time for the upload to finish.
       * - `progress`: Percentage of the file already uploaded.
       * - `speed`: Upload speed in kB/s.
       * - `size`: File size in bytes.
       * - `totalStr`: Human-readable total size of the file.
       * - `loaded`: Bytes transferred so far.
       * - `loadedStr`: Human-readable uploaded size at the moment.
       * - `status`: Status of the upload process.
       * - `error`: Error message in case the upload failed.
       * - `abort`: True if the file was canceled by the user.
       * - `complete`: True when the file was transferred to the server.
       * - `uploading`: True while transferring data to the server.
       */
      files: {
        type: Array,
        notify: true,
        value: function () {
          return [];
        }
      },

      /**
       * Limit of files to upload, by default it is unlimited. If the value is
       * set to one, native file browser will prevent selecting multiple files.
       */
      maxFiles: {
        type: Number,
        value: Infinity
      },

      /**
       * Specifies if the maximum number of files have been uploaded
       */
      maxFilesReached: {
        type: Boolean,
        value: false,
        notify: true,
        readOnly: true,
        computed: '_maxFilesAdded(maxFiles, files.length)'
      },

      /**
       * Specifies the types of files that the server accepts.
       * Syntax: a comma-separated list of MIME type patterns (wildcards are
       * allowed) or file extensions.
       * Notice that MIME types are widely supported, while file extensions
       * are only implemented in certain browsers, so avoid using it.
       * Example: accept="video/*,image/tiff" or accept=".pdf,audio/mp3"
       */
      accept: {
        type: String,
        value: ''
      },

      /**
       * Specifies the maximum file size in bytes allowed to upload.
       * Notice that it is a client-side constraint, which will be checked before
       * sending the request. Obviously you need to do the same validation in
       * the server-side and be sure that they are aligned.
       */
      maxFileSize: {
        type: Number,
        value: Infinity
      },

      /**
       * Specifies if the dragover is validated with maxFiles and
       * accept properties.
       */
      _dragoverValid: {
        type: Boolean,
        value: false,
        observer: '_dragoverValidChanged'
      },

      /**
       * Specifies the 'name' property at Content-Disposition
       */
      formDataName: {
        type: String,
        value: 'file'
      },

      /**
       * Prevents upload(s) from immediately uploading upon adding file(s).
       * When set, you must manually trigger uploads using the `uploadFiles` method
       */
      noAuto: {
        type: Boolean,
        value: false
      },

      /**
       * Set the withCredentials flag on the request.
       */
      withCredentials: {
        type: Boolean,
        value: false
      },

      /**
       * Pass-through to input's capture attribute. Allows user to trigger device inputs
       * such as camera or microphone immediately.
       */
      capture: String,

      /**
       * The object used to localize this component.
       * For changing the default localization, change the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
       {
        dropFiles: {
        one: 'Drop file here
        many: 'Drop files here
        },
        addFiles: {
        one: 'Select File...',
        many: 'Upload Files...'
        },
        cancel: 'Cancel',
        error: {
        tooManyFiles: 'Too Many Files.',
        fileIsTooBig: 'File is Too Big.',
        incorrectFileType: 'Incorrect File Type.'
        },
        uploading: {
        status: {
          connecting: 'Connecting...',
          stalled: 'Stalled.',
          processing: 'Processing File...',
          held: 'Queued'
        },
        remainingTime: {
          prefix: 'remaining time: ',
          unknown: 'unknown remaining time'
        },
        error: {
          serverUnavailable: 'Server Unavailable',
          unexpectedServerError: 'Unexpected Server Error',
          forbidden: 'Forbidden'
        }
        },
        units: {
        size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        formatSize: function(bytes) {
        // returns the size followed by the best suitable unit
        },
        formatTime: function(seconds, [secs, mins, hours]) {
        // returns a 'HH:MM:SS' string
        }
      }
       *
      * @default {English}
      */
      i18n: {
        type: Object,
        value: function () {
          return {
            dropFiles: {
              one: 'Drop file here',
              many: 'Drop files here'
            },
            addFiles: {
              one: 'Upload File...',
              many: 'Upload Files...'
            },
            cancel: 'Cancel',
            error: {
              tooManyFiles: 'Too Many Files.',
              fileIsTooBig: 'File is Too Big.',
              incorrectFileType: 'Incorrect File Type.'
            },
            uploading: {
              status: {
                connecting: 'Connecting...',
                stalled: 'Stalled.',
                processing: 'Processing File...',
                held: 'Queued'
              },
              remainingTime: {
                prefix: 'remaining time: ',
                unknown: 'unknown remaining time'
              },
              error: {
                serverUnavailable: 'Server Unavailable',
                unexpectedServerError: 'Unexpected Server Error',
                forbidden: 'Forbidden'
              }
            },
            units: {
              size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            }
          };
        }
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('dragover', this._onDragover.bind(this));
    this.addEventListener('dragleave', this._onDragleave.bind(this));
    this.addEventListener('drop', this._onDrop.bind(this));
    this.addEventListener('file-retry', this._onFileRetry.bind(this));
    this.addEventListener('file-abort', this._onFileAbort.bind(this));
    this.addEventListener('file-remove', this._onFileRemove.bind(this));
    this.addEventListener('file-start', this._onFileStart.bind(this));
  }

  _formatSize(bytes) {
    if (typeof this.i18n.formatSize === 'function') {
      return this.i18n.formatSize(bytes);
    } // https://wiki.ubuntu.com/UnitsPolicy


    const base = this.i18n.units.sizeBase || 1000;
    const unit = ~~(Math.log(bytes) / Math.log(base));
    const dec = Math.max(0, Math.min(3, unit - 1));
    const size = parseFloat((bytes / Math.pow(base, unit)).toFixed(dec));
    return size + ' ' + this.i18n.units.size[unit];
  }

  _splitTimeByUnits(time) {
    const unitSizes = [60, 60, 24, Infinity];
    const timeValues = [0];

    for (var i = 0; i < unitSizes.length && time > 0; i++) {
      timeValues[i] = time % unitSizes[i];
      time = Math.floor(time / unitSizes[i]);
    }

    return timeValues;
  }

  _formatTime(seconds, split) {
    if (typeof this.i18n.formatTime === 'function') {
      return this.i18n.formatTime(seconds, split);
    } // Fill HH:MM:SS with leading zeros


    while (split.length < 3) {
      split.push(0);
    }

    return split.reverse().map(number => {
      return (number < 10 ? '0' : '') + number;
    }).join(':');
  }

  _formatFileProgress(file) {
    return file.totalStr + ': ' + file.progress + '% (' + (file.loaded > 0 ? this.i18n.uploading.remainingTime.prefix + file.remainingStr : this.i18n.uploading.remainingTime.unknown) + ')';
  }

  _maxFilesAdded(maxFiles, numFiles) {
    return maxFiles >= 0 && numFiles >= maxFiles;
  }

  _onDragover(event) {
    event.preventDefault();

    if (!this.nodrop && !this._dragover) {
      this._dragoverValid = !this.maxFilesReached;
      this._dragover = true;
    }

    event.dataTransfer.dropEffect = !this._dragoverValid || this.nodrop ? 'none' : 'copy';
  }

  _onDragleave(event) {
    event.preventDefault();

    if (this._dragover && !this.nodrop) {
      this._dragover = this._dragoverValid = false;
    }
  }

  _onDrop(event) {
    if (!this.nodrop) {
      event.preventDefault();
      this._dragover = this._dragoverValid = false;

      this._addFiles(event.dataTransfer.files);
    }
  } // Override for tests


  _createXhr() {
    return new XMLHttpRequest();
  }

  _configureXhr(xhr) {
    if (typeof this.headers == 'string') {
      try {
        this.headers = JSON.parse(this.headers);
      } catch (e) {
        this.headers = undefined;
      }
    }

    for (var key in this.headers) {
      xhr.setRequestHeader(key, this.headers[key]);
    }

    if (this.timeout) {
      xhr.timeout = this.timeout;
    }

    xhr.withCredentials = this.withCredentials;
  }

  _setStatus(file, total, loaded, elapsed) {
    file.elapsed = elapsed;
    file.elapsedStr = this._formatTime(file.elapsed, this._splitTimeByUnits(file.elapsed));
    file.remaining = Math.ceil(elapsed * (total / loaded - 1));
    file.remainingStr = this._formatTime(file.remaining, this._splitTimeByUnits(file.remaining));
    file.speed = ~~(total / elapsed / 1024);
    file.totalStr = this._formatSize(total);
    file.loadedStr = this._formatSize(loaded);
    file.status = this._formatFileProgress(file);
  }
  /**
   * Triggers the upload of any files that are not completed
   *
   * @param {Array} [files] - Files being uploaded. Defaults to all outstanding files
   */


  uploadFiles(files) {
    if (files && !Array.isArray(files)) {
      files = [files];
    }

    files = files || this.files;
    files = files.filter(file => !file.complete);
    Array.prototype.forEach.call(files, this._uploadFile.bind(this));
  }

  _uploadFile(file) {
    if (file.uploading) {
      return;
    }

    const ini = Date.now();

    const xhr = file.xhr = this._createXhr(file);

    let stalledId, last; // onprogress is called always after onreadystatechange

    xhr.upload.onprogress = e => {
      clearTimeout(stalledId);
      last = Date.now();
      const elapsed = (last - ini) / 1000;
      const loaded = e.loaded,
            total = e.total,
            progress = ~~(loaded / total * 100);
      file.loaded = loaded;
      file.progress = progress;
      file.indeterminate = loaded <= 0 || loaded >= total;

      if (file.error) {
        file.indeterminate = file.status = undefined;
      } else if (!file.abort) {
        if (progress < 100) {
          this._setStatus(file, total, loaded, elapsed);

          stalledId = setTimeout(() => {
            file.status = this.i18n.uploading.status.stalled;

            this._notifyFileChanges(file);
          }, 2000);
        } else {
          file.loadedStr = file.totalStr;
          file.status = this.i18n.uploading.status.processing;
          file.uploading = false;
        }
      }

      this._notifyFileChanges(file);

      this.dispatchEvent(new CustomEvent('upload-progress', {
        detail: {
          file,
          xhr
        }
      }));
    }; // More reliable than xhr.onload


    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        clearTimeout(stalledId);
        file.indeterminate = file.uploading = false;

        if (file.abort) {
          this._notifyFileChanges(file);

          return;
        }

        file.status = ''; // Custom listener can modify the default behavior either
        // preventing default, changing the xhr, or setting the file error

        const evt = this.dispatchEvent(new CustomEvent('upload-response', {
          detail: {
            file,
            xhr
          },
          cancelable: true
        }));

        if (!evt) {
          return;
        }

        if (xhr.status === 0) {
          file.error = this.i18n.uploading.error.serverUnavailable;
        } else if (xhr.status >= 500) {
          file.error = this.i18n.uploading.error.unexpectedServerError;
        } else if (xhr.status >= 400) {
          file.error = this.i18n.uploading.error.forbidden;
        }

        file.complete = !file.error;
        this.dispatchEvent(new CustomEvent(`upload-${file.error ? 'error' : 'success'}`, {
          detail: {
            file,
            xhr
          }
        }));

        this._notifyFileChanges(file);
      }
    };

    const formData = new FormData();
    file.uploadTarget = file.uploadTarget || this.target || '';
    file.formDataName = this.formDataName;
    const evt = this.dispatchEvent(new CustomEvent('upload-before', {
      detail: {
        file,
        xhr
      },
      cancelable: true
    }));

    if (!evt) {
      return;
    }

    formData.append(file.formDataName, file, file.name);
    xhr.open(this.method, file.uploadTarget, true);

    this._configureXhr(xhr);

    file.status = this.i18n.uploading.status.connecting;
    file.uploading = file.indeterminate = true;
    file.complete = file.abort = file.error = file.held = false;

    xhr.upload.onloadstart = () => {
      this.dispatchEvent(new CustomEvent('upload-start', {
        detail: {
          file,
          xhr
        }
      }));

      this._notifyFileChanges(file);
    }; // Custom listener could modify the xhr just before sending it
    // preventing default


    const uploadEvt = this.dispatchEvent(new CustomEvent('upload-request', {
      detail: {
        file,
        xhr,
        formData
      },
      cancelable: true
    }));

    if (uploadEvt) {
      xhr.send(formData);
    }
  }

  _retryFileUpload(file) {
    const evt = this.dispatchEvent(new CustomEvent('upload-retry', {
      detail: {
        file,
        xhr: file.xhr
      },
      cancelable: true
    }));

    if (evt) {
      this._uploadFile(file);
    }
  }

  _abortFileUpload(file) {
    const evt = this.dispatchEvent(new CustomEvent('upload-abort', {
      detail: {
        file,
        xhr: file.xhr
      },
      cancelable: true
    }));

    if (evt) {
      file.abort = true;

      if (file.xhr) {
        file.xhr.abort();
      }

      this._notifyFileChanges(file);
    }
  }

  _notifyFileChanges(file) {
    var p = 'files.' + this.files.indexOf(file) + '.';

    for (var i in file) {
      if (file.hasOwnProperty(i)) {
        this.notifyPath(p + i, file[i]);
      }
    }
  }

  _addFiles(files) {
    Array.prototype.forEach.call(files, this._addFile.bind(this));
  }
  /**
   * Add the file for uploading. Called internally for each file after picking files from dialog or dropping files.
   *
   * @param {File} file File being added
   */


  _addFile(file) {
    if (this.maxFilesReached) {
      this.dispatchEvent(new CustomEvent('file-reject', {
        detail: {
          file,
          error: this.i18n.error.tooManyFiles
        }
      }));
      return;
    }

    if (this.maxFileSize >= 0 && file.size > this.maxFileSize) {
      this.dispatchEvent(new CustomEvent('file-reject', {
        detail: {
          file,
          error: this.i18n.error.fileIsTooBig
        }
      }));
      return;
    }

    const fileExt = file.name.match(/\.[^\.]*$|$/)[0];
    const re = new RegExp('^(' + this.accept.replace(/[, ]+/g, '|').replace(/\/\*/g, '/.*') + ')$', 'i');

    if (this.accept && !(re.test(file.type) || re.test(fileExt))) {
      this.dispatchEvent(new CustomEvent('file-reject', {
        detail: {
          file,
          error: this.i18n.error.incorrectFileType
        }
      }));
      return;
    }

    file.loaded = 0;
    file.held = true;
    file.status = this.i18n.uploading.status.held;
    this.unshift('files', file);

    if (!this.noAuto) {
      this._uploadFile(file);
    }
  }
  /**
   * Remove file from upload list. Called internally if file upload was canceled.
   * @param {File} file File to remove
   */


  _removeFile(file) {
    if (this.files.indexOf(file) > -1) {
      this.splice('files', this.files.indexOf(file), 1);
    }
  }

  _onAddFilesTouchEnd(e) {
    // Cancel the event to avoid the following click event
    e.preventDefault(); // FIXME(platosha): workaround for Polymer Gestures mouseCanceller
    // cancelling the following synthetic click. See also:
    // https://github.com/Polymer/polymer/issues/5289

    this.__resetMouseCanceller();

    this._onAddFilesClick();
  }

  __resetMouseCanceller() {
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["resetMouseCanceller"])();
  }

  _onAddFilesClick() {
    if (this.maxFilesReached) {
      return;
    }

    this.$.fileInput.value = '';
    this.$.fileInput.click();
  }

  _onFileInputChange(event) {
    this._addFiles(event.target.files);
  }

  _onFileStart(event) {
    this._uploadFile(event.detail.file);
  }

  _onFileRetry(event) {
    this._retryFileUpload(event.detail.file);
  }

  _onFileAbort(event) {
    this._abortFileUpload(event.detail.file);
  }

  _onFileRemove(event) {
    this._removeFile(event.detail.file);
  }

  _dragoverChanged(dragover) {
    dragover ? this.setAttribute('dragover', dragover) : this.removeAttribute('dragover');
  }

  _dragoverValidChanged(dragoverValid) {
    dragoverValid ? this.setAttribute('dragover-valid', dragoverValid) : this.removeAttribute('dragover-valid');
  }

  _i18nPlural(value, plural) {
    return value == 1 ? plural.one : plural.many;
  }

  _isMultiple(maxFiles) {
    return maxFiles != 1;
  }
  /**
  * Fired when a file cannot be added to the queue due to a constrain:
  *  file-size, file-type or maxFiles
  *
  * @event file-reject
  * @param {Object} detail
  * @param {Object} detail.file the file added
  * @param {Object} detail.error the cause
  */

  /**
  * Fired before the XHR is opened. Could be used for changing the request
  * URL. If the default is prevented, then XHR would not be opened.
  *
  * @event upload-before
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded
  * @param {Object} detail.file.uploadTarget the upload request URL, initialized with the value of vaadin-upload `target` property
  */

  /**
  * Fired when the XHR has been opened but not sent yet. Useful for appending
  * data keys to the FormData object, for changing some parameters like
  * headers, etc. If the event is defaultPrevented, `vaadin-upload` will not
  * send the request allowing the user to do something on his own.
  *
  * @event upload-request
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded
  * @param {Object} detail.formData the FormData object
  */

  /**
  * Fired when the XHR is sent.
  *
  * @event upload-start
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded
  */

  /**
  * Fired as many times as the progress is updated.
  *
  * @event upload-progress
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded with loaded info
  */

  /**
  * Fired when we have the actual server response, and before the component
  * analyses it. It's useful for developers to make the upload fail depending
  * on the server response. If the event is defaultPrevented the vaadin-upload
  * will return allowing the user to do something on his own like retry the
  * upload, etc. since he has full access to the `xhr` and `file` objects.
  * Otherwise, if the event is not prevented default `vaadin-upload` continues
  * with the normal workflow checking the `xhr.status` and `file.error`
  * which also might be modified by the user to force a customized response.
  *
  * @event upload-response
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded
  */

  /**
  * Fired in case the upload process succeed.
  *
  * @event upload-success
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded with loaded info
  */

  /**
  * Fired in case the upload process failed.
  *
  * @event upload-error
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded
  */

  /**
  * Fired when retry upload is requested. If the default is prevented, then
  * retry would not be performed.
  *
  * @event upload-retry
  * @param {Object} detail
  * @param {Object} detail.xhr the previous upload xhr
  * @param {Object} detail.file the file being uploaded
  */

  /**
  * Fired when retry abort is requested. If the default is prevented, then the
  * file upload would not be aborted.
  *
  * @event upload-abort
  * @param {Object} detail
  * @param {Object} detail.xhr the xhr
  * @param {Object} detail.file the file being uploaded
  */


}

customElements.define(UploadElement.is, UploadElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload-styles.js?babel-target=es6":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload-styles.js?babel-target=es6 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_button_theme_lumo_vaadin_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_progress_bar_theme_lumo_vaadin_progress_bar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-progress-bar/1.1.2/node_modules/@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");










const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_9__["html"]`<dom-module id="lumo-upload" theme-for="vaadin-upload">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js?babel-target=es6":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js?babel-target=es6 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_upload_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-upload-styles.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload-styles.js?babel-target=es6");
/* harmony import */ var _src_vaadin_upload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-upload.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/src/vaadin-upload.js?babel-target=es6");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/vaadin-upload.js?babel-target=es6":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/vaadin-upload.js?babel-target=es6 ***!
  \***********************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_upload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-upload.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js?babel-target=es6");


/***/ })

}]);
//# sourceMappingURL=vendors~new.7522911d.js.map