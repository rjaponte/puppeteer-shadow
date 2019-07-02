(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~list.es5~new.es5"],{

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-ajax.js?babel-target=es5":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-ajax.js?babel-target=es5 ***!
  \*************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iron_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iron-request.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-request.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
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
The `iron-ajax` element exposes network request functionality.

    <iron-ajax
        auto
        url="https://www.googleapis.com/youtube/v3/search"
        params='{"part":"snippet", "q":"polymer", "key": "YOUTUBE_API_KEY",
"type": "video"}' handle-as="json" on-response="handleResponse"
        debounce-duration="300"></iron-ajax>

With `auto` set to `true`, the element performs a request whenever
its `url`, `params` or `body` properties are changed. Automatically generated
requests will be debounced in the case that multiple attributes are changed
sequentially.

Note: The `params` attribute must be double quoted JSON.

You can trigger a request explicitly by calling `generateRequest` on the
element.

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'iron-ajax',

  /**
   * Fired before a request is sent.
   *
   * @event iron-ajax-presend
   */

  /**
   * Fired when a request is sent.
   *
   * @event request
   */

  /**
   * Fired when a request is sent.
   *
   * @event iron-ajax-request
   */

  /**
   * Fired when a response is received.
   *
   * @event response
   */

  /**
   * Fired when a response is received.
   *
   * @event iron-ajax-response
   */

  /**
   * Fired when an error is received.
   *
   * @event error
   */

  /**
   * Fired when an error is received.
   *
   * @event iron-ajax-error
   */
  hostAttributes: {
    hidden: true
  },
  properties: {
    /**
     * The URL target of the request.
     */
    url: {
      type: String
    },

    /**
     * An object that contains query parameters to be appended to the
     * specified `url` when generating a request. If you wish to set the body
     * content when making a POST request, you should use the `body` property
     * instead.
     */
    params: {
      type: Object,
      value: function () {
        return {};
      }
    },

    /**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     */
    method: {
      type: String,
      value: 'GET'
    },

    /**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <iron-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handle-as="json"></iron-ajax>
     *
     * Note: setting a `Content-Type` header here will override the value
     * specified by the `contentType` property of this element.
     */
    headers: {
      type: Object,
      value: function () {
        return {};
      }
    },

    /**
     * Content type to use when sending data. If the `contentType` property
     * is set and a `Content-Type` header is specified in the `headers`
     * property, the `headers` property value will take precedence.
     *
     * Varies the handling of the `body` param.
     */
    contentType: {
      type: String,
      value: null
    },

    /**
     * Body content to send with the request, typically used with "POST"
     * requests.
     *
     * If body is a string it will be sent unmodified.
     *
     * If Content-Type is set to a value listed below, then
     * the body will be encoded accordingly.
     *
     *    * `content-type="application/json"`
     *      * body is encoded like `{"foo":"bar baz","x":1}`
     *    * `content-type="application/x-www-form-urlencoded"`
     *      * body is encoded like `foo=bar+baz&x=1`
     *
     * Otherwise the body will be passed to the browser unmodified, and it
     * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
     *
     * @type
     * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
     */
    body: {
      type: Object,
      value: null
    },

    /**
     * Toggle whether XHR is synchronous or asynchronous. Don't change this
     * to true unless You Know What You Are Doing™.
     */
    sync: {
      type: Boolean,
      value: false
    },

    /**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.detail.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     */
    handleAs: {
      type: String,
      value: 'json'
    },

    /**
     * Set the withCredentials flag on the request.
     */
    withCredentials: {
      type: Boolean,
      value: false
    },

    /**
     * Set the timeout flag on the request.
     */
    timeout: {
      type: Number,
      value: 0
    },

    /**
     * If true, automatically performs an Ajax request when either `url` or
     * `params` changes.
     */
    auto: {
      type: Boolean,
      value: false
    },

    /**
     * If true, error messages will automatically be logged to the console.
     */
    verbose: {
      type: Boolean,
      value: false
    },

    /**
     * The most recent request made by this iron-ajax element.
     *
     * @type {Object|undefined}
     */
    lastRequest: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * The `progress` property of this element's `lastRequest`.
     *
     * @type {Object|undefined}
     */
    lastProgress: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * True while lastRequest is in flight.
     */
    loading: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    /**
     * lastRequest's response.
     *
     * Note that lastResponse and lastError are set when lastRequest finishes,
     * so if loading is true, then lastResponse and lastError will correspond
     * to the result of the previous request.
     *
     * The type of the response is determined by the value of `handleAs` at
     * the time that the request was generated.
     *
     * @type {Object}
     */
    lastResponse: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * lastRequest's error, if any.
     *
     * @type {Object}
     */
    lastError: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * An Array of all in-flight requests originating from this iron-ajax
     * element.
     */
    activeRequests: {
      type: Array,
      notify: true,
      readOnly: true,
      value: function () {
        return [];
      }
    },

    /**
     * Length of time in milliseconds to debounce multiple automatically
     * generated requests.
     */
    debounceDuration: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * Prefix to be stripped from a JSON response before parsing it.
     *
     * In order to prevent an attack using CSRF with Array responses
     * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
     * many backends will mitigate this by prefixing all JSON response bodies
     * with a string that would be nonsensical to a JavaScript parser.
     *
     */
    jsonPrefix: {
      type: String,
      value: ''
    },

    /**
     * By default, iron-ajax's events do not bubble. Setting this attribute will
     * cause its request and response events as well as its iron-ajax-request,
     * -response,  and -error events to bubble to the window object. The vanilla
     * error event never bubbles when using shadow dom even if this.bubbles is
     * true because a scoped flag is not passed with it (first link) and because
     * the shadow dom spec did not used to allow certain events, including
     * events named error, to leak outside of shadow trees (second link).
     * https://www.w3.org/TR/shadow-dom/#scoped-flag
     * https://www.w3.org/TR/2015/WD-shadow-dom-20151215/#events-that-are-not-leaked-into-ancestor-trees
     */
    bubbles: {
      type: Boolean,
      value: false
    },

    /**
     * Changes the [`completes`](iron-request#property-completes) promise chain
     * from `generateRequest` to reject with an object
     * containing the original request, as well an error message.
     * If false (default), the promise rejects with an error message only.
     */
    rejectWithRequest: {
      type: Boolean,
      value: false
    },
    _boundHandleResponse: {
      type: Function,
      value: function () {
        return this._handleResponse.bind(this);
      }
    }
  },
  observers: ['_requestOptionsChanged(url, method, params.*, headers, contentType, ' + 'body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)'],
  created: function () {
    this._boundOnProgressChanged = this._onProgressChanged.bind(this);
  },

  /**
   * The query string that should be appended to the `url`, serialized from
   * the current value of `params`.
   *
   * @return {string}
   */
  get queryString() {
    var queryParts = [];
    var param;
    var value;

    for (param in this.params) {
      value = this.params[param];
      param = window.encodeURIComponent(param);

      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          queryParts.push(param + '=' + window.encodeURIComponent(value[i]));
        }
      } else if (value !== null) {
        queryParts.push(param + '=' + window.encodeURIComponent(value));
      } else {
        queryParts.push(param);
      }
    }

    return queryParts.join('&');
  },

  /**
   * The `url` with query string (if `params` are specified), suitable for
   * providing to an `iron-request` instance.
   *
   * @return {string}
   */
  get requestUrl() {
    var queryString = this.queryString;
    var url = this.url || '';

    if (queryString) {
      var bindingChar = url.indexOf('?') >= 0 ? '&' : '?';
      return url + bindingChar + queryString;
    }

    return url;
  },

  /**
   * An object that maps header names to header values, first applying the
   * the value of `Content-Type` and then overlaying the headers specified
   * in the `headers` property.
   *
   * @return {Object}
   */
  get requestHeaders() {
    var headers = {};
    var contentType = this.contentType;

    if (contentType == null && typeof this.body === 'string') {
      contentType = 'application/x-www-form-urlencoded';
    }

    if (contentType) {
      headers['content-type'] = contentType;
    }

    var header;

    if (typeof this.headers === 'object') {
      for (header in this.headers) {
        headers[header] = this.headers[header].toString();
      }
    }

    return headers;
  },

  _onProgressChanged: function (event) {
    this._setLastProgress(event.detail.value);
  },

  /**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `iron-ajax` instance's properties.
   *
   * @return {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined)}}
   */
  toRequestOptions: function () {
    return {
      url: this.requestUrl || '',
      method: this.method,
      headers: this.requestHeaders,
      body: this.body,
      async: !this.sync,
      handleAs: this.handleAs,
      jsonPrefix: this.jsonPrefix,
      withCredentials: this.withCredentials,
      timeout: this.timeout,
      rejectWithRequest: this.rejectWithRequest
    };
  },

  /**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */
  generateRequest: function () {
    var request =
    /** @type {!IronRequestElement} */
    document.createElement('iron-request');
    var requestOptions = this.toRequestOptions();
    this.push('activeRequests', request);
    request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this, request)).then(this._discardRequest.bind(this, request));
    var evt = this.fire('iron-ajax-presend', {
      request: request,
      options: requestOptions
    }, {
      bubbles: this.bubbles,
      cancelable: true
    });

    if (evt.defaultPrevented) {
      request.abort();
      request.rejectCompletes(request);
      return request;
    }

    if (this.lastRequest) {
      this.lastRequest.removeEventListener('iron-request-progress-changed', this._boundOnProgressChanged);
    }

    request.addEventListener('iron-request-progress-changed', this._boundOnProgressChanged);
    request.send(requestOptions);

    this._setLastProgress(null);

    this._setLastRequest(request);

    this._setLoading(true);

    this.fire('request', {
      request: request,
      options: requestOptions
    }, {
      bubbles: this.bubbles,
      composed: true
    });
    this.fire('iron-ajax-request', {
      request: request,
      options: requestOptions
    }, {
      bubbles: this.bubbles,
      composed: true
    });
    return request;
  },
  _handleResponse: function (request) {
    if (request === this.lastRequest) {
      this._setLastResponse(request.response);

      this._setLastError(null);

      this._setLoading(false);
    }

    this.fire('response', request, {
      bubbles: this.bubbles,
      composed: true
    });
    this.fire('iron-ajax-response', request, {
      bubbles: this.bubbles,
      composed: true
    });
  },
  _handleError: function (request, error) {
    if (this.verbose) {
      _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_2__["Base"]._error(error);
    }

    if (request === this.lastRequest) {
      this._setLastError({
        request: request,
        error: error,
        status: request.xhr.status,
        statusText: request.xhr.statusText,
        response: request.xhr.response
      });

      this._setLastResponse(null);

      this._setLoading(false);
    } // Tests fail if this goes after the normal this.fire('error', ...)


    this.fire('iron-ajax-error', {
      request: request,
      error: error
    }, {
      bubbles: this.bubbles,
      composed: true
    });
    this.fire('error', {
      request: request,
      error: error
    }, {
      bubbles: this.bubbles,
      composed: true
    });
  },
  _discardRequest: function (request) {
    var requestIndex = this.activeRequests.indexOf(request);

    if (requestIndex > -1) {
      this.splice('activeRequests', requestIndex, 1);
    }
  },
  _requestOptionsChanged: function () {
    this.debounce('generate-request', function () {
      if (this.url == null) {
        return;
      }

      if (this.auto) {
        this.generateRequest();
      }
    }, this.debounceDuration);
  }
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-request.js?babel-target=es5":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-request.js?babel-target=es5 ***!
  \****************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer-fn.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
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


/*
iron-request can be used to perform XMLHttpRequests.

    <iron-request id="xhr"></iron-request>
    ...
    this.$.xhr.send({url: url, body: params});
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_0__["Polymer"])({
  is: 'iron-request',
  hostAttributes: {
    hidden: true
  },
  properties: {
    /**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */
    xhr: {
      type: Object,
      notify: true,
      readOnly: true,
      value: function () {
        return new XMLHttpRequest();
      }
    },

    /**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */
    response: {
      type: Object,
      notify: true,
      readOnly: true,
      value: function () {
        return null;
      }
    },

    /**
     * A reference to the status code, if the `xhr` has completely resolved.
     */
    status: {
      type: Number,
      notify: true,
      readOnly: true,
      value: 0
    },

    /**
     * A reference to the status text, if the `xhr` has completely resolved.
     */
    statusText: {
      type: String,
      notify: true,
      readOnly: true,
      value: ''
    },

    /**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     * The resolve callback is called with the original request as an argument.
     * By default, the reject callback is called with an `Error` as an argument.
     * If `rejectWithRequest` is true, the reject callback is called with an
     * object with two keys: `request`, the original request, and `error`, the
     * error object.
     *
     * @type {Promise}
     */
    completes: {
      type: Object,
      readOnly: true,
      notify: true,
      value: function () {
        return new Promise(function (resolve, reject) {
          this.resolveCompletes = resolve;
          this.rejectCompletes = reject;
        }.bind(this));
      }
    },

    /**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */
    progress: {
      type: Object,
      notify: true,
      readOnly: true,
      value: function () {
        return {};
      }
    },

    /**
     * Aborted will be true if an abort of the request is attempted.
     */
    aborted: {
      type: Boolean,
      notify: true,
      readOnly: true,
      value: false
    },

    /**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */
    errored: {
      type: Boolean,
      notify: true,
      readOnly: true,
      value: false
    },

    /**
     * TimedOut will be true if the XHR threw a timeout event.
     */
    timedOut: {
      type: Boolean,
      notify: true,
      readOnly: true,
      value: false
    }
  },

  /**
   * Succeeded is true if the request succeeded. The request succeeded if it
   * loaded without error, wasn't aborted, and the status code is ≥ 200, and
   * < 300, or if the status code is 0.
   *
   * The status code 0 is accepted as a success because some schemes - e.g.
   * file:// - don't provide status codes.
   *
   * @return {boolean}
   */
  get succeeded() {
    if (this.errored || this.aborted || this.timedOut) {
      return false;
    }

    var status = this.xhr.status || 0; // Note: if we are using the file:// protocol, the status code will be 0
    // for all outcomes (successful or otherwise).

    return status === 0 || status >= 200 && status < 300;
  },

  /**
   * Sends an HTTP request to the server and returns a promise (see the
   * `completes` property for details).
   *
   * The handling of the `body` parameter will vary based on the Content-Type
   * header. See the docs for iron-ajax's `body` property for details.
   *
   * @param {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined),
   *   timeout: (number|undefined),
   *   rejectWithRequest: (boolean|undefined)}} options -
   *   - url The url to which the request is sent.
   *   - method The HTTP method to use, default is GET.
   *   - async By default, all requests are sent asynchronously. To send
   * synchronous requests, set to false.
   *   -  body The content for the request body for POST method.
   *   -  headers HTTP request headers.
   *   -  handleAs The response type. Default is 'text'.
   *   -  withCredentials Whether or not to send credentials on the request.
   * Default is false.
   *   -  timeout - Timeout for request, in milliseconds.
   *   -  rejectWithRequest Set to true to include the request object with
   * promise rejections.
   * @return {Promise}
   */
  send: function (options) {
    var xhr = this.xhr;

    if (xhr.readyState > 0) {
      return null;
    }

    xhr.addEventListener('progress', function (progress) {
      this._setProgress({
        lengthComputable: progress.lengthComputable,
        loaded: progress.loaded,
        total: progress.total
      }); // Webcomponents v1 spec does not fire *-changed events when not connected


      this.fire('iron-request-progress-changed', {
        value: this.progress
      });
    }.bind(this));
    xhr.addEventListener('error', function (error) {
      this._setErrored(true);

      this._updateStatus();

      var response = options.rejectWithRequest ? {
        error: error,
        request: this
      } : error;
      this.rejectCompletes(response);
    }.bind(this));
    xhr.addEventListener('timeout', function (error) {
      this._setTimedOut(true);

      this._updateStatus();

      var response = options.rejectWithRequest ? {
        error: error,
        request: this
      } : error;
      this.rejectCompletes(response);
    }.bind(this));
    xhr.addEventListener('abort', function () {
      this._setAborted(true);

      this._updateStatus();

      var error = new Error('Request aborted.');
      var response = options.rejectWithRequest ? {
        error: error,
        request: this
      } : error;
      this.rejectCompletes(response);
    }.bind(this)); // Called after all of the above.

    xhr.addEventListener('loadend', function () {
      this._updateStatus();

      this._setResponse(this.parseResponse());

      if (!this.succeeded) {
        var error = new Error('The request failed with status code: ' + this.xhr.status);
        var response = options.rejectWithRequest ? {
          error: error,
          request: this
        } : error;
        this.rejectCompletes(response);
        return;
      }

      this.resolveCompletes(this);
    }.bind(this));
    this.url = options.url;
    var isXHRAsync = options.async !== false;
    xhr.open(options.method || 'GET', options.url, isXHRAsync);
    var acceptType = {
      'json': 'application/json',
      'text': 'text/plain',
      'html': 'text/html',
      'xml': 'application/xml',
      'arraybuffer': 'application/octet-stream'
    }[options.handleAs];
    var headers = options.headers || Object.create(null);
    var newHeaders = Object.create(null);

    for (var key in headers) {
      newHeaders[key.toLowerCase()] = headers[key];
    }

    headers = newHeaders;

    if (acceptType && !headers['accept']) {
      headers['accept'] = acceptType;
    }

    Object.keys(headers).forEach(function (requestHeader) {
      if (/[A-Z]/.test(requestHeader)) {
        _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_1__["Base"]._error('Headers must be lower case, got', requestHeader);
      }

      xhr.setRequestHeader(requestHeader, headers[requestHeader]);
    }, this);

    if (isXHRAsync) {
      xhr.timeout = options.timeout;
      var handleAs = options.handleAs; // If a JSON prefix is present, the responseType must be 'text' or the
      // browser won’t be able to parse the response.

      if (!!options.jsonPrefix || !handleAs) {
        handleAs = 'text';
      } // In IE, `xhr.responseType` is an empty string when the response
      // returns. Hence, caching it as `xhr._responseType`.


      xhr.responseType = xhr._responseType = handleAs; // Cache the JSON prefix, if it exists.

      if (!!options.jsonPrefix) {
        xhr._jsonPrefix = options.jsonPrefix;
      }
    }

    xhr.withCredentials = !!options.withCredentials;

    var body = this._encodeBodyObject(options.body, headers['content-type']);

    xhr.send(
    /**
       @type {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|
               null|string|undefined}
     */
    body);
    return this.completes;
  },

  /**
   * Attempts to parse the response body of the XHR. If parsing succeeds,
   * the value returned will be deserialized based on the `responseType`
   * set on the XHR.
   *
   * @return {*} The parsed response,
   * or undefined if there was an empty response or parsing failed.
   */
  parseResponse: function () {
    var xhr = this.xhr;
    var responseType = xhr.responseType || xhr._responseType;
    var preferResponseText = !this.xhr.responseType;
    var prefixLen = xhr._jsonPrefix && xhr._jsonPrefix.length || 0;

    try {
      switch (responseType) {
        case 'json':
          // If the xhr object doesn't have a natural `xhr.responseType`,
          // we can assume that the browser hasn't parsed the response for us,
          // and so parsing is our responsibility. Likewise if response is
          // undefined, as there's no way to encode undefined in JSON.
          if (preferResponseText || xhr.response === undefined) {
            // Try to emulate the JSON section of the response body section of
            // the spec: https://xhr.spec.whatwg.org/#response-body
            // That is to say, we try to parse as JSON, but if anything goes
            // wrong return null.
            try {
              return JSON.parse(xhr.responseText);
            } catch (_) {
              console.warn('Failed to parse JSON sent from ' + xhr.responseURL);
              return null;
            }
          }

          return xhr.response;

        case 'xml':
          return xhr.responseXML;

        case 'blob':
        case 'document':
        case 'arraybuffer':
          return xhr.response;

        case 'text':
        default:
          {
            // If `prefixLen` is set, it implies the response should be parsed
            // as JSON once the prefix of length `prefixLen` is stripped from
            // it. Emulate the behavior above where null is returned on failure
            // to parse.
            if (prefixLen) {
              try {
                return JSON.parse(xhr.responseText.substring(prefixLen));
              } catch (_) {
                console.warn('Failed to parse JSON sent from ' + xhr.responseURL);
                return null;
              }
            }

            return xhr.responseText;
          }
      }
    } catch (e) {
      this.rejectCompletes(new Error('Could not parse response. ' + e.message));
    }
  },

  /**
   * Aborts the request.
   */
  abort: function () {
    this._setAborted(true);

    this.xhr.abort();
  },

  /**
   * @param {*} body The given body of the request to try and encode.
   * @param {?string} contentType The given content type, to infer an encoding
   *     from.
   * @return {*} Either the encoded body as a string, if successful,
   *     or the unaltered body object if no encoding could be inferred.
   */
  _encodeBodyObject: function (body, contentType) {
    if (typeof body == 'string') {
      return body; // Already encoded.
    }

    var bodyObj =
    /** @type {Object} */
    body;

    switch (contentType) {
      case 'application/json':
        return JSON.stringify(bodyObj);

      case 'application/x-www-form-urlencoded':
        return this._wwwFormUrlEncode(bodyObj);
    }

    return body;
  },

  /**
   * @param {Object} object The object to encode as x-www-form-urlencoded.
   * @return {string} .
   */
  _wwwFormUrlEncode: function (object) {
    if (!object) {
      return '';
    }

    var pieces = [];
    Object.keys(object).forEach(function (key) {
      // TODO(rictic): handle array values here, in a consistent way with
      //   iron-ajax params.
      pieces.push(this._wwwFormUrlEncodePiece(key) + '=' + this._wwwFormUrlEncodePiece(object[key]));
    }, this);
    return pieces.join('&');
  },

  /**
   * @param {*} str A key or value to encode as x-www-form-urlencoded.
   * @return {string} .
   */
  _wwwFormUrlEncodePiece: function (str) {
    // Spec says to normalize newlines to \r\n and replace %20 spaces with +.
    // jQuery does this as well, so this is likely to be widely compatible.
    if (str === null || str === undefined || !str.toString) {
      return '';
    }

    return encodeURIComponent(str.toString().replace(/\r?\n/g, '\r\n')).replace(/%20/g, '+');
  },

  /**
   * Updates the status code and status text.
   */
  _updateStatus: function () {
    this._setStatus(this.xhr.status);

    this._setStatusText(this.xhr.statusText === undefined ? '' : this.xhr.statusText);
  }
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-scroll-target-behavior/3.0.1/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js?babel-target=es5":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-scroll-target-behavior/3.0.1/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js?babel-target=es5 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5");
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


/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */

const IronScrollTargetBehavior = {
  properties: {
    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function () {
        return this._defaultScrollTarget;
      }
    }
  },
  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,
  _scrollTargetChanged: function (scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);

      this._oldScrollTarget = null;
    }

    if (!isAttached) {
      return;
    } // Support element id references


    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;
    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;
      this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;

      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
    }

    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
    }

    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function (leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;

    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
    }

    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
    }

    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function () {
    return this.scrollTarget instanceof HTMLElement;
  },
  _toggleScrollListener: function (yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function (yes) {
    this._shouldHaveListener = yes;

    this._toggleScrollListener(yes, this.scrollTarget);
  }
};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es5":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es5 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es5");
/* harmony import */ var _font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../font-icons.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5");
/* harmony import */ var _sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sizing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es5");




const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="lumo-field-button"><template><style>[part\$="button"] { flex: none; width: 1em; height: 1em; line-height: 1; font-size: var(--lumo-icon-size-m); text-align: center; color: var(--lumo-contrast-60pct); transition: 0.2s color; cursor: var(--lumo-clickable-cursor); } :host(:not([readonly])) [part\$="button"]:hover { color: var(--lumo-contrast-90pct); } :host([disabled]) [part\$="button"], :host([readonly]) [part\$="button"] { color: var(--lumo-contrast-20pct); } [part\$="button"]::before { font-family: "lumo-icons"; display: block; }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js?babel-target=es5":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js?babel-target=es5 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es5");
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es5");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es5");




const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="lumo-required-field"><template><style>[part="label"] { align-self: flex-start; color: var(--lumo-secondary-text-color); font-weight: 500; font-size: var(--lumo-font-size-s); margin-left: calc(var(--lumo-border-radius-m) / 4); transition: color 0.2s; line-height: 1; padding-bottom: 0.5em; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: relative; max-width: 100%; box-sizing: border-box; } :host([has-label])::before { margin-top: calc(var(--lumo-font-size-s) * 1.5); } :host([has-label]) { padding-top: var(--lumo-space-m); } :host([required]) [part="label"] { padding-right: 1em; } [part="label"]::after { content: var(--lumo-required-field-indicator, "•"); transition: opacity 0.2s; opacity: 0; color: var(--lumo-primary-text-color); position: absolute; right: 0; width: 1em; text-align: center; } :host([required]:not([has-value])) [part="label"]::after { opacity: 1; } :host([invalid]) [part="label"]::after { color: var(--lumo-error-text-color); } [part="error-message"] { margin-left: calc(var(--lumo-border-radius-m) / 4); font-size: var(--lumo-font-size-xs); line-height: var(--lumo-line-height-xs); color: var(--lumo-error-text-color); will-change: max-height; transition: 0.4s max-height; max-height: 5em; } /* Margin that doesn’t reserve space when there’s no error message */ [part="error-message"]:not(:empty)::before, [part="error-message"]:not(:empty)::after { content: ""; display: block; height: 0.4em; } :host(:not([invalid])) [part="error-message"] { max-height: 0; overflow: hidden; }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js?babel-target=es5":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js?babel-target=es5 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: TextFieldMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function() { return TextFieldMixin; });
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-control-state-mixin/2.1.3/node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-text-field-shared-styles"><template><style>:host { display: inline-flex; outline: none; } :host::before { content: "\\2003"; width: 0; display: inline-block; /* Size and position this element on the same vertical position as the input-field element to make vertical align for the host element work as expected */ } :host([hidden]) { display: none !important; } .vaadin-text-field-container, .vaadin-text-area-container { display: flex; flex-direction: column; min-width: 100%; max-width: 100%; width: var(--vaadin-text-field-default-width, 12em); } [part="label"]:empty { display: none; } [part="input-field"] { display: flex; align-items: center; flex: auto; } .vaadin-text-field-container [part="input-field"] { flex-grow: 0; } /* Reset the native input styles */ [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea) { -webkit-appearance: none; -moz-appearance: none; outline: none; margin: 0; padding: 0; border: 0; border-radius: 0; min-width: 0; font: inherit; font-size: 1em; line-height: normal; color: inherit; background-color: transparent; /* Disable default invalid style in Firefox */ box-shadow: none; } [part="input-field"] ::slotted(*) { flex: none; } [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea), /* Slotted by vaadin-select-text-field */ [part="input-field"] ::slotted([part="value"]) { flex: auto; white-space: nowrap; overflow: hidden; width: 100%; height: 100%; } [part="input-field"] ::slotted(textarea) { resize: none; } [part="value"]::-ms-clear, [part="input-field"] ::slotted(input)::-ms-clear { display: none; } [part="clear-button"] { cursor: default; } [part="clear-button"]::before { content: "✕"; }</style></template></dom-module>`;
document.head.appendChild($_documentContainer.content);
const HOST_PROPS = {
  default: ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
const PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

const TextFieldMixin = subclass => class VaadinTextFieldMixin extends Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ControlStateMixin"])(subclass) {
  static get properties() {
    return {
      /**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */
      autocomplete: {
        type: String
      },

      /**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */
      autocorrect: {
        type: String
      },

      /**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */
      autocapitalize: {
        type: String
      },

      /**
       * Specify that the value should be automatically selected when the field gains focus.
       */
      autoselect: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display the clear icon which clears the input.
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Error to show when the input value is invalid.
       */
      errorMessage: {
        type: String,
        value: ''
      },

      /**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            clear: 'Clear'
          };
        }
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
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */
      maxlength: {
        type: Number
      },

      /**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */
      minlength: {
        type: Number
      },

      /**
       * The name of the control, which is submitted with the form data.
       */
      name: {
        type: String
      },

      /**
       * A hint to the user of what can be entered in the control.
       */
      placeholder: {
        type: String
      },

      /**
       * This attribute indicates that the user cannot modify the value of the control.
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Specifies that the user must fill in a value.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */
      value: {
        type: String,
        value: '',
        observer: '_valueChanged',
        notify: true
      },

      /**
       * This property is set to true when the control value is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * Specifies that the text field has value.
       */
      hasValue: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */
      preventInvalidInput: {
        type: Boolean
      },
      _labelId: String,
      _errorId: String,
      _inputId: String
    };
  }

  static get observers() {
    return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS.default.join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId, _inputId)', '__observeOffsetHeight(errorMessage, invalid, label)'];
  }

  get focusElement() {
    if (!this.shadowRoot) {
      return;
    }

    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (slotted) {
      return slotted;
    }

    return this.shadowRoot.querySelector('[part="value"]');
  }
  /**
   * @private
   */


  get inputElement() {
    return this.focusElement;
  }

  get _slottedTagName() {
    return 'input';
  }

  _onInput(e) {
    if (this.__preventInput) {
      e.stopImmediatePropagation();
      this.__preventInput = false;
      return;
    }

    if (this.preventInvalidInput) {
      const input = this.inputElement;

      if (input.value.length > 0 && !this.checkValidity()) {
        input.value = this.value || ''; // add input-prevented attribute for 200ms

        this.setAttribute('input-prevented', '');
        this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(200), () => {
          this.removeAttribute('input-prevented');
        });
        return;
      }
    }

    if (!e.__fromClearButton) {
      this.__userInput = true;
    }

    this.value = e.target.value;
  } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
  // of the clear button instead of setting display property for it depending on state.


  _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
    if (!disabled && !readonly && clearButtonVisible && hasValue) {
      this.$.clearButton.removeAttribute('hidden');
    } else {
      this.$.clearButton.setAttribute('hidden', true);
    }
  }

  _onChange(e) {
    if (this._valueClearing) {
      return;
    } // In the Shadow DOM, the `change` event is not leaked into the
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

  _valueChanged(newVal, oldVal) {
    // setting initial value to empty string, skip validation
    if (newVal === '' && oldVal === undefined) {
      return;
    }

    if (newVal !== '' && newVal != null) {
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }

    if (this.__userInput) {
      this.__userInput = false;
      return;
    } else if (newVal !== undefined) {
      this.inputElement.value = newVal;
    } else {
      this.value = this.inputElement.value = '';
    }

    if (this.invalid) {
      this.validate();
    }
  }

  _labelChanged(label) {
    if (label !== '' && label != null) {
      this.setAttribute('has-label', '');
    } else {
      this.removeAttribute('has-label');
    }
  }

  _onSlotChange() {
    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (this.value) {
      this.inputElement.value = this.value;
      this.validate();
    }

    if (slotted && !this._slottedInput) {
      this._validateSlottedValue(slotted);

      this._addInputListeners(slotted);

      this._addIEListeners(slotted);

      this._slottedInput = slotted;
    } else if (!slotted && this._slottedInput) {
      this._removeInputListeners(this._slottedInput);

      this._removeIEListeners(this._slottedInput);

      this._slottedInput = undefined;
    }

    Object.keys(PROP_TYPE).map(key => PROP_TYPE[key]).forEach(type => this._propagateHostAttributes(HOST_PROPS[type].map(attr => this[attr]), type));
  }

  _hostPropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
  }

  _hostAccessiblePropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
  }

  _validateSlottedValue(slotted) {
    if (slotted.value !== this.value) {
      console.warn('Please define value on the vaadin-text-field component!');
      slotted.value = '';
    }
  }

  _propagateHostAttributes(attributesValues, type) {
    const input = this.inputElement;
    const attributeNames = HOST_PROPS[type];

    if (type === 'accessible') {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);

        this._setOrToggleAttribute(`aria-${attr}`, attributesValues[index], input);
      });
    } else {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
      });
    }
  }

  _setOrToggleAttribute(name, value, node) {
    if (!name || !node) {
      return;
    }

    if (value) {
      node.setAttribute(name, typeof value === 'boolean' ? '' : value);
    } else {
      node.removeAttribute(name);
    }
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   * @returns {boolean}
   */


  checkValidity() {
    if (this.required || this.pattern || this.maxlength || this.minlength) {
      return this.inputElement.checkValidity();
    } else {
      return !this.invalid;
    }
  }

  _addInputListeners(node) {
    node.addEventListener('input', this._boundOnInput);
    node.addEventListener('change', this._boundOnChange);
    node.addEventListener('blur', this._boundOnBlur);
    node.addEventListener('focus', this._boundOnFocus);
  }

  _removeInputListeners(node) {
    node.removeEventListener('input', this._boundOnInput);
    node.removeEventListener('change', this._boundOnChange);
    node.removeEventListener('blur', this._boundOnBlur);
    node.removeEventListener('focus', this._boundOnFocus);
  }

  ready() {
    super.ready();
    this._boundOnInput = this._onInput.bind(this);
    this._boundOnChange = this._onChange.bind(this);
    this._boundOnBlur = this._onBlur.bind(this);
    this._boundOnFocus = this._onFocus.bind(this);
    const defaultInput = this.shadowRoot.querySelector('[part="value"]');
    this._slottedInput = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    this._addInputListeners(defaultInput);

    this._addIEListeners(defaultInput);

    if (this._slottedInput) {
      this._addIEListeners(this._slottedInput);

      this._addInputListeners(this._slottedInput);
    }

    this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
      this.updateStyles();
    }

    this.$.clearButton.addEventListener('mousedown', () => this._valueClearing = true);
    this.$.clearButton.addEventListener('mouseleave', () => this._valueClearing = false);
    this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
    this.addEventListener('keydown', this._onKeyDown.bind(this));
    var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
    this._errorId = `${this.constructor.is}-error-${uniqueId}`;
    this._labelId = `${this.constructor.is}-label-${uniqueId}`;
    this._inputId = `${this.constructor.is}-input-${uniqueId}`; // Lumo theme defines a max-height transition for the "error-message"
    // part on invalid state change.

    this.shadowRoot.querySelector('[part="error-message"]').addEventListener('transitionend', () => {
      this.__observeOffsetHeight();
    });
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

  clear() {
    this.value = '';
  }

  _onBlur() {
    this.validate();
  }

  _onFocus() {
    if (this.autoselect) {
      this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

      setTimeout(() => {
        this.inputElement.setSelectionRange(0, 9999);
      });
    }
  }

  _onClearButtonClick(e) {
    e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

    this.inputElement.focus();
    this.clear();
    this._valueClearing = false;

    if (navigator.userAgent.match(/Trident/)) {
      // Disable IE input" event prevention here, we want the input event from
      // below to propagate normally.
      this.__preventInput = false;
    }

    const inputEvent = new Event('input', {
      bubbles: true,
      composed: true
    });
    inputEvent.__fromClearButton = true;
    const changeEvent = new Event('change', {
      bubbles: !this._slottedInput
    });
    changeEvent.__fromClearButton = true;
    this.inputElement.dispatchEvent(inputEvent);
    this.inputElement.dispatchEvent(changeEvent);
  }

  _onKeyDown(e) {
    if (e.keyCode === 27 && this.clearButtonVisible) {
      const dispatchChange = !!this.value;
      this.clear();
      dispatchChange && this.inputElement.dispatchEvent(new Event('change', {
        bubbles: !this._slottedInput
      }));
    }
  }

  _addIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      // IE11 dispatches `input` event in following cases:
      // - focus or blur, when placeholder attribute is set
      // - placeholder attribute value changed
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
      this._shouldPreventInput = () => {
        this.__preventInput = true;
        requestAnimationFrame(() => {
          this.__preventInput = false;
        });
      };

      node.addEventListener('focusin', this._shouldPreventInput);
      node.addEventListener('focusout', this._shouldPreventInput);

      this._createPropertyObserver('placeholder', this._shouldPreventInput);
    }
  }

  _removeIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      node.removeEventListener('focusin', this._shouldPreventInput);
      node.removeEventListener('focusout', this._shouldPreventInput);
    }
  }

  _getActiveErrorId(invalid, errorMessage, errorId) {
    this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.focusElement);
  }

  _getActiveLabelId(label, _labelId, _inputId) {
    let ids = _inputId;

    if (label) {
      ids = `${_labelId} ${_inputId}`;
    }

    this.focusElement.setAttribute('aria-labelledby', ids);
  }

  _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
    return (!(errorMessage && invalid ? errorId : undefined)).toString();
  }

  _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
    const previousSizePropertyName = '__previous' + sizePropertyName;

    if (this[previousSizePropertyName] !== undefined && this[previousSizePropertyName] !== value) {
      this.dispatchEvent(new CustomEvent('iron-resize', {
        bubbles: true
      }));
    }

    this[previousSizePropertyName] = value;
  }

  __observeOffsetHeight() {
    this._dispatchIronResizeEventIfNeeded('Height', this.offsetHeight);
  }
  /**
   * @protected
   */


  attributeChangedCallback(prop, oldVal, newVal) {
    super.attributeChangedCallback(prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

    /* istanbul ignore if */

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
      this.updateStyles();
    } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    /* istanbul ignore if */

    if (isSafari && this.root) {
      const WEBKIT_PROPERTY = '-webkit-backface-visibility';
      this.root.querySelectorAll('*').forEach(el => {
        el.style[WEBKIT_PROPERTY] = 'visible';
        el.style[WEBKIT_PROPERTY] = '';
      });
    }
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */

  /**
   * Fired when the value is changed by the user: on every typing keystroke,
   * and the value is cleared using the clear button.
   *
   * @event input
   */

  /**
   * Fired when the size of the element changes.
   *
   * @event iron-resize
   */


};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es5":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es5 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: TextFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldElement", function() { return TextFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
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
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
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

class TextFieldElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
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
`;
  }

  static get is() {
    return 'vaadin-text-field';
  }

  static get version() {
    return '2.4.7';
  }

  static get properties() {
    return {
      /**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */
      list: {
        type: String
      },

      /**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */
      pattern: {
        type: String
      },

      /**
       * Message to show to the user when validation fails.
       */
      title: {
        type: String
      }
    };
  }

}

customElements.define(TextFieldElement.is, TextFieldElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js?babel-target=es5":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js?babel-target=es5 ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_required_field_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/required-field.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");









const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"]`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
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
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es5":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es5 ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_field_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-field-styles.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js?babel-target=es5");
/* harmony import */ var _src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-text-field.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es5");



/***/ })

}]);
//# sourceMappingURL=vendors~list.es5~new.es5.81051e93.js.map