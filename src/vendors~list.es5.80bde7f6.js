(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~list.es5"],{

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/iron-list.js?babel-target=es5":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/iron-list.js?babel-target=es5 ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: PolymerIronList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolymerIronList", function() { return PolymerIronList; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-resizable-behavior/3.0.1/node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js?babel-target=es5");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-scroll-target-behavior/3.0.1/node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/class.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flush.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**

This is a fork of <iron-list> for <vaadin-grid>'s internal purposes only!
To update:
1. Get the most recent code from https://github.com/PolymerElements/iron-list/
2. Remove the  <dom-module id="iron-list"> to avoid collisions with actual <iron-list>
3. Change "Polymer({" to "window.PolymerIronList = Polymer.Class({" to expose the class
3.1. Add @namespace
4. Optional: Remove all properties and functions not needed by <vaadin-grid>
5. Profit!

*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/








var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var ANIMATION_FRAME = _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__["animationFrame"];
var IDLE_TIME = _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__["idlePeriod"];
var MICRO_TASK = _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__["microTask"];
const PolymerIronList = Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["Class"])({
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"], _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronScrollTargetBehavior"]],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both directions.
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
   * The height of the list. This is referred as the viewport in the context of list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
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
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */
  _collection: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of the list.
   */
  _maxPages: 2,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

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
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in `_physicalStart`.
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

  get _scrollOffset() {
    return this._scrollerPaddingTop;
  },

  attached: function () {
    this._debounce('_render', this._render, ANIMATION_FRAME); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
  },
  detached: function () {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
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

      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), MICRO_TASK);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function (fromTop) {
    var ith, offsetContent, physicalItemHeight;
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
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      offsetContent = bottom - scrollBottom;
    } // eslint-disable-next-line no-constant-condition


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
  _isClientFull: function () {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function (count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }

    if (delta > 0) {
      var ts = window.performance.now(); // Concat arrays in place.

      [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't support it.

      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }

      this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the focused item.
      // In this situation, the focused item is currently rendered and its model would
      // have changed after increasing the pool if the physical start remained unchanged.

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
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), MICRO_TASK);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is optimal.
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), IDLE_TIME);
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
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function (change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._collection = this.items && undefined ? undefined.get(this.items) : null;
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

      this._debounce('_render', this._render, ANIMATION_FRAME);
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical indexes.
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
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function (itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"] ? Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"])() : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["flush"])();
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

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function () {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    this._iterateItems(function (pidx, vidx) {
      this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
      y += this._physicalSizes[pidx];
    });
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

    _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"] ? Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"])() : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["flush"])(); // Items should have been rendered prior scrolling to an index.

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
      this._lastVisibleIndexVal = null; // Skip the resize event on touch devices when the address bar slides up.

      this.updateViewportBoundaries();

      if (this._isVisible) {
        // Reinstall the scroll event listener.
        this.toggleScrollListener(true);

        this._resetAverage();

        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, ANIMATION_FRAME);
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
  _getPhysicalIndex: function (vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },
  _clamp: function (v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _debounce: function (name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_7__["Debouncer"].debounce(this._debouncers[name], asyncModule, cb.bind(this));
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["enqueueDebouncer"])(this._debouncers[name]);
  }
});

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js?babel-target=es5":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js?babel-target=es5 ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: A11yMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yMixin", function() { return A11yMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const A11yMixin = superClass => class A11yMixin extends superClass {
  static get observers() {
    return ['_a11yUpdateGridSize(size, _columnTree, _columnTree.*)'];
  }

  _a11yGetHeaderRowCount(_columnTree) {
    return _columnTree.filter(level => level.some(col => col._headerTemplate || col.headerRenderer || col.path || col.header)).length;
  }

  _a11yGetFooterRowCount(_columnTree) {
    return _columnTree.filter(level => level.some(col => col._headerTemplate || col.headerRenderer)).length;
  }

  _a11yUpdateGridSize(size, _columnTree) {
    if (size === undefined || _columnTree === undefined) {
      return;
    }

    const bodyColumns = _columnTree[_columnTree.length - 1];
    this.$.table.setAttribute('aria-rowcount', size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree));
    this.$.table.setAttribute('aria-colcount', bodyColumns && bodyColumns.length || 0);

    this._a11yUpdateHeaderRows();

    this._a11yUpdateFooterRows();
  }

  _a11yUpdateHeaderRows() {
    Array.from(this.$.header.children).forEach((headerRow, index) => headerRow.setAttribute('aria-rowindex', index + 1));
  }

  _a11yUpdateFooterRows() {
    Array.from(this.$.footer.children).forEach((footerRow, index) => footerRow.setAttribute('aria-rowindex', this._a11yGetHeaderRowCount(this._columnTree) + this.size + index + 1));
  }

  _a11yUpdateRowRowindex(row, index) {
    row.setAttribute('aria-rowindex', index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
  }

  _a11yUpdateRowSelected(row, selected) {
    // Jaws reads selection only for rows, NVDA only for cells
    row.setAttribute('aria-selected', Boolean(selected));
    Array.from(row.children).forEach(cell => cell.setAttribute('aria-selected', Boolean(selected)));
  }

  _a11yUpdateRowLevel(row, level) {
    row.setAttribute('aria-level', level + 1);
  }

  _a11yUpdateRowDetailsOpened(row, detailsOpened) {
    Array.from(row.children).forEach(cell => {
      if (typeof detailsOpened === 'boolean') {
        cell.setAttribute('aria-expanded', detailsOpened);
      } else {
        if (cell.hasAttribute('aria-expanded')) {
          cell.removeAttribute('aria-expanded');
        }
      }
    });
  }

  _a11ySetRowDetailsCell(row, detailsCell) {
    Array.from(row.children).forEach(cell => {
      if (cell !== detailsCell) {
        cell.setAttribute('aria-controls', detailsCell.id);
      }
    });
  }

  _a11yUpdateCellColspan(cell, colspan) {
    cell.setAttribute('aria-colspan', Number(colspan));
  }

  _a11yUpdateSorters() {
    Array.from(this.querySelectorAll('vaadin-grid-sorter')).forEach(sorter => {
      let cellContent = sorter.parentNode;

      while (cellContent && cellContent.localName !== 'vaadin-grid-cell-content') {
        cellContent = cellContent.parentNode;
      }

      if (cellContent && cellContent.assignedSlot) {
        const cell = cellContent.assignedSlot.parentNode;
        cell.setAttribute('aria-sort', {
          'asc': 'ascending',
          'desc': 'descending'
        }[String(sorter.direction)] || 'none');
      }
    });
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js?babel-target=es5":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js?babel-target=es5 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: ActiveItemMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveItemMixin", function() { return ActiveItemMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const ActiveItemMixin = superClass => class ActiveItemMixin extends superClass {
  static get properties() {
    return {
      /**
       * The item user has last interacted with. Turns to `null` after user deactivates
       * the item by re-interacting with the currently active item.
       */
      activeItem: {
        type: Object,
        notify: true,
        value: null
      }
    };
  }

  ready() {
    super.ready();
    this.$.scroller.addEventListener('click', this._onClick.bind(this));
    this.addEventListener('cell-activate', this._activateItem.bind(this));
  }

  _activateItem(e) {
    const model = e.detail.model;
    const clickedItem = model ? model.item : null;

    if (clickedItem) {
      this.activeItem = !this._itemsEqual(this.activeItem, clickedItem) ? clickedItem : null;
    }
  } // we need to listen to click instead of tap because on mobile safari, the
  // document.activeElement has not been updated (focus has not been shifted)
  // yet at the point when tap event is being executed.


  _onClick(e) {
    if (e.defaultPrevented) {
      // Something has handled this click already, e. g., <vaadin-grid-sorter>
      return;
    }

    const path = e.composedPath();
    const cell = path[path.indexOf(this.$.table) - 3];

    if (!cell || cell.getAttribute('part').indexOf('details-cell') > -1) {
      return;
    }

    const cellContent = cell._content;
    const activeElement = this.getRootNode().activeElement;

    const cellContentHasFocus = cellContent.contains(activeElement) && ( // MSIE bug: flex children receive focus. Make type & attributes check.
    !this._ie || this._isFocusable(activeElement));

    if (!cellContentHasFocus && !this._isFocusable(e.target)) {
      this.dispatchEvent(new CustomEvent('cell-activate', {
        detail: {
          model: this.__getRowModel(cell.parentElement)
        }
      }));
    }
  }

  _isFocusable(target) {
    if (!target.parentNode) {
      return false;
    }

    const focusables = Array.from(target.parentNode.querySelectorAll('[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]')).filter(element => element.getAttribute('part') !== 'cell body-cell');
    const isFocusableElement = focusables.indexOf(target) !== -1;
    return !target.disabled && isFocusableElement;
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js?babel-target=es5":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js?babel-target=es5 ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: ArrayDataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataProviderMixin", function() { return ArrayDataProviderMixin; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */

const ArrayDataProviderMixin = superClass => class ArrayDataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing the items which will be stamped to the column template
       * instances.
       */
      items: Array
    };
  }

  static get observers() {
    return ['_itemsChanged(items, items.*, isAttached)'];
  }

  _itemsChanged(items, splices, isAttached) {
    if (!isAttached) {
      return;
    }

    if (!Array.isArray(items)) {
      if (items === undefined || items === null) {
        this.size = 0;
      }

      if (this.dataProvider === this._arrayDataProvider) {
        this.dataProvider = undefined;
      }

      return;
    }

    this.size = items.length;
    this.dataProvider = this.dataProvider || this._arrayDataProvider;
    this.clearCache();

    this._ensureFirstPageLoaded();
  }

  _arrayDataProvider(opts, cb) {
    let items = (Array.isArray(this.items) ? this.items : []).slice(0);

    if (this._filters && this._checkPaths(this._filters, 'filtering', items)) {
      items = this._filter(items);
    }

    this.size = items.length;

    if (opts.sortOrders.length && this._checkPaths(this._sorters, 'sorting', items)) {
      items = items.sort(this._multiSort.bind(this));
    }

    const start = opts.page * opts.pageSize;
    const end = start + opts.pageSize;
    const slice = items.slice(start, end);
    cb(slice, items.length);
  }
  /**
   * Check array of filters/sorters for paths validity, console.warn invalid items
   * @param {Array}  arrayToCheck The array of filters/sorters to check
   * @param {string} action       The name of action to include in warning (filtering, sorting)
   * @param {Array}  items
   */


  _checkPaths(arrayToCheck, action, items) {
    if (!items.length) {
      return false;
    }

    let result = true;

    for (var i in arrayToCheck) {
      const path = arrayToCheck[i].path; // skip simple paths

      if (!path || path.indexOf('.') === -1) {
        continue;
      }

      const parentProperty = path.replace(/\.[^\.]*$/, ''); // a.b.c -> a.b

      if (_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(parentProperty, items[0]) === undefined) {
        console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);
        result = false;
      }
    }

    return result;
  }

  _multiSort(a, b) {
    return this._sorters.map(sort => {
      if (sort.direction === 'asc') {
        return this._compare(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, a), _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, b));
      } else if (sort.direction === 'desc') {
        return this._compare(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, b), _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, a));
      }

      return 0;
    }).reduce((p, n) => {
      return p ? p : n;
    }, 0);
  }

  _normalizeEmptyValue(value) {
    if ([undefined, null].indexOf(value) >= 0) {
      return '';
    } else if (isNaN(value)) {
      return value.toString();
    } else {
      return value;
    }
  }

  _compare(a, b) {
    a = this._normalizeEmptyValue(a);
    b = this._normalizeEmptyValue(b);

    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  }

  _filter(items) {
    return items.filter((item, index) => {
      return this._filters.filter(filter => {
        const value = this._normalizeEmptyValue(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(filter.path, item));

        const filterValueLowercase = this._normalizeEmptyValue(filter.value).toString().toLowerCase();

        return value.toString().toLowerCase().indexOf(filterValueLowercase) === -1;
      }).length === 0;
    });
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js?babel-target=es5":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js?babel-target=es5 ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: ColumnReorderingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnReorderingMixin", function() { return ColumnReorderingMixin; });
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/gestures.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/settings.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * @polymerMixin
 */

const ColumnReorderingMixin = superClass => class ColumnReorderingMixin extends Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__["GestureEventListeners"])(superClass) {
  static get properties() {
    return {
      /**
       * Set to true to allow column reordering.
       */
      columnReorderingAllowed: {
        type: Boolean,
        value: false
      },
      _orderBaseScope: {
        type: Number,
        value: 10000000
      }
    };
  }

  static get observers() {
    return ['_updateOrders(_columnTree, _columnTree.*)'];
  }

  ready() {
    super.ready();
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["addListener"])(this, 'track', this._onTrackEvent);
    this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');
    this.addEventListener('touchstart', this._onTouchStart.bind(this));
    this.addEventListener('touchmove', this._onTouchMove.bind(this));
    this.addEventListener('touchend', this._onTouchEnd.bind(this));
    this.addEventListener('contextmenu', this._onContextMenu.bind(this));
  }

  _onContextMenu(e) {
    if (this.hasAttribute('reordering')) {
      e.preventDefault();
    }
  }

  _onTouchStart(e) {
    // Touch event, delay activation by 100ms
    this._startTouchReorderTimeout = setTimeout(() => {
      this._onTrackStart({
        detail: {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        }
      });
    }, 100);
  }

  _onTouchMove(e) {
    if (this._draggedColumn) {
      e.preventDefault();
    }

    clearTimeout(this._startTouchReorderTimeout);
  }

  _onTouchEnd() {
    clearTimeout(this._startTouchReorderTimeout);

    this._onTrackEnd();
  }

  _onTrackEvent(e) {
    if (e.detail.state === 'start') {
      const path = e.composedPath();
      const headerCell = path[path.indexOf(this.$.header) - 2];

      if (!headerCell || !headerCell._content) {
        // Not a header column
        return;
      }

      const activeElement = this.getRootNode().activeElement;

      if (headerCell._content.contains(this.getRootNode().activeElement) && (!this._ie || !this._isFocusable(activeElement))) {
        // Something was focused inside the cell
        return;
      }

      if (this.$.scroller.hasAttribute('column-resizing')) {
        // Resizing is in progress
        return;
      }

      if (!this._touchDevice) {
        // Not a touch device
        this._onTrackStart(e);
      }
    } else if (e.detail.state === 'track') {
      this._onTrack(e);
    } else if (e.detail.state === 'end') {
      this._onTrackEnd(e);
    }
  }

  _onTrackStart(e) {
    if (!this.columnReorderingAllowed) {
      return;
    } // Cancel reordering if there are draggable nodes on the event path


    const path = e.path || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(e).path;

    if (path && path.filter(node => node.hasAttribute && node.hasAttribute('draggable'))[0]) {
      return;
    }

    const headerCell = this._cellFromPoint(e.detail.x, e.detail.y);

    if (!headerCell || headerCell.getAttribute('part').indexOf('header-cell') === -1) {
      return;
    }

    this._toggleAttribute('reordering', true, this);

    this._draggedColumn = headerCell._column;

    while (this._draggedColumn.parentElement.childElementCount === 1) {
      // This is the only column in the group, drag the whole group instead
      this._draggedColumn = this._draggedColumn.parentElement;
    }

    this._setSiblingsReorderStatus(this._draggedColumn, 'allowed');

    this._draggedColumn._reorderStatus = 'dragging';

    this._updateGhost(headerCell);

    this._reorderGhost.style.visibility = 'visible';

    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);

    this._autoScroller();
  }

  _onTrack(e) {
    if (!this._draggedColumn) {
      // Reordering didn’t start. Skip this event.
      return;
    }

    const targetCell = this._cellFromPoint(e.detail.x, e.detail.y);

    if (!targetCell) {
      return;
    }

    const targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);

    if (this._isSwapAllowed(this._draggedColumn, targetColumn) && this._isSwappableByPosition(targetColumn, e.detail.x)) {
      this._swapColumnOrders(this._draggedColumn, targetColumn);
    }

    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);

    this._lastDragClientX = e.detail.x;
  }

  _onTrackEnd() {
    if (!this._draggedColumn) {
      // Reordering didn’t start. Skip this event.
      return;
    }

    this._toggleAttribute('reordering', false, this);

    this._draggedColumn._reorderStatus = '';

    this._setSiblingsReorderStatus(this._draggedColumn, '');

    this._draggedColumn = null;
    this._lastDragClientX = null;
    this._reorderGhost.style.visibility = 'hidden';
    this.dispatchEvent(new CustomEvent('column-reorder', {
      detail: {
        columns: this._getColumnsInOrder()
      }
    }));
  }

  _getColumnsInOrder() {
    return this._columnTree.slice(0).pop().filter(c => !c.hidden).sort((b, a) => b._order - a._order);
  }

  _cellFromPoint(x, y) {
    x = x || 0;
    y = y || 0;

    if (!this._draggedColumn) {
      this._toggleAttribute('no-content-pointer-events', true, this.$.scroller);
    }

    let cell;

    if (_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_3__["useShadow"]) {
      cell = this.shadowRoot.elementFromPoint(x, y);
    } else {
      cell = document.elementFromPoint(x, y); // Workaround a FF58 bug

      if (cell.localName === 'vaadin-grid-cell-content') {
        cell = cell.assignedSlot.parentNode;
      }
    }

    this._toggleAttribute('no-content-pointer-events', false, this.$.scroller); // Make sure the element is actually a cell


    if (cell && cell._column) {
      return cell;
    }
  }

  _updateGhostPosition(eventClientX, eventClientY) {
    const ghostRect = this._reorderGhost.getBoundingClientRect(); // // This is where we want to position the ghost


    const targetLeft = eventClientX - ghostRect.width / 2;
    const targetTop = eventClientY - ghostRect.height / 2; // Current position

    const _left = parseInt(this._reorderGhost._left || 0);

    const _top = parseInt(this._reorderGhost._top || 0); // Reposition the ghost


    this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
    this._reorderGhost._top = _top - (ghostRect.top - targetTop);
    this._reorderGhost.style.transform = `translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;
  }

  _getInnerText(e) {
    if (e.localName) {
      // Custom implementation needed since IE11 doesn't respect the spec in case of hidden elements
      if (getComputedStyle(e).display === 'none') {
        return '';
      } else {
        return Array.from(e.childNodes).map(n => this._getInnerText(n)).join('');
      }
    } else {
      return e.textContent;
    }
  }

  _updateGhost(cell) {
    const ghost = this._reorderGhost;
    ghost.textContent = this._getInnerText(cell._content);
    const style = window.getComputedStyle(cell);
    ['boxSizing', 'display', 'width', 'height', 'background', 'alignItems', 'padding', 'border', 'flex-direction', 'overflow'].forEach(propertyName => ghost.style[propertyName] = style[propertyName]);
    return ghost;
  }

  _updateOrders(columnTree, splices) {
    if (columnTree === undefined || splices === undefined) {
      return;
    } // Set order numbers to top-level columns


    columnTree[0].forEach((column, index) => column._order = (index + 1) * this._orderBaseScope);
  }

  _setSiblingsReorderStatus(column, status) {
    Array.from(column.parentNode.children).filter(child => /column/.test(child.localName) && this._isSwapAllowed(child, column)).forEach(sibling => sibling._reorderStatus = status);
  }

  _autoScroller() {
    if (this._lastDragClientX) {
      const rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
      const leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;

      if (rightDiff > 0) {
        this.$.table.scrollLeft += rightDiff / 10;
      } else if (leftDiff > 0) {
        this.$.table.scrollLeft -= leftDiff / 10;
      }

      this._scrollHandler();
    }

    if (this._draggedColumn) {
      this.async(this._autoScroller, 10);
    }
  }

  _isSwapAllowed(column1, column2) {
    if (column1 && column2) {
      const differentColumns = column1 !== column2;
      const sameParent = column1.parentElement === column2.parentElement;
      const sameFrozen = column1.frozen === column2.frozen;
      return differentColumns && sameParent && sameFrozen;
    }
  }

  _isSwappableByPosition(targetColumn, clientX) {
    const targetCell = Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(cell => targetColumn.contains(cell._column))[0];
    const sourceCellRect = this.$.header.querySelector('tr:not([hidden]) [reorder-status=dragging]').getBoundingClientRect();
    const targetRect = targetCell.getBoundingClientRect();

    if (targetRect.left > sourceCellRect.left) {
      return clientX > targetRect.right - sourceCellRect.width;
    } else {
      return clientX < targetRect.left + sourceCellRect.width;
    }
  }

  _swapColumnOrders(column1, column2) {
    const _order = column1._order;
    column1._order = column2._order;
    column2._order = _order;

    this._updateLastFrozen();

    this._updateFirstAndLastColumn();
  }

  _getTargetColumn(targetCell, draggedColumn) {
    if (targetCell && draggedColumn) {
      let candidate = targetCell._column;

      while (candidate.parentElement !== draggedColumn.parentElement && candidate !== this) {
        candidate = candidate.parentElement;
      }

      if (candidate.parentElement === draggedColumn.parentElement) {
        return candidate;
      } else {
        return targetCell._column;
      }
    }
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js?babel-target=es5":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js?babel-target=es5 ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: ColumnResizingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnResizingMixin", function() { return ColumnResizingMixin; });
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/gestures.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * @polymerMixin
 */

const ColumnResizingMixin = superClass => class ColumnResizingMixin extends Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__["GestureEventListeners"])(superClass) {
  ready() {
    super.ready();
    const scroller = this.$.scroller;
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["addListener"])(scroller, 'track', this._onHeaderTrack.bind(this)); // Disallow scrolling while resizing

    scroller.addEventListener('touchmove', e => scroller.hasAttribute('column-resizing') && e.preventDefault()); // Disable contextmenu on any resize separator.

    scroller.addEventListener('contextmenu', e => e.target.getAttribute('part') == 'resize-handle' && e.preventDefault()); // Disable native cell focus when resizing

    scroller.addEventListener('mousedown', e => e.target.getAttribute('part') === 'resize-handle' && e.preventDefault());
  }

  _onHeaderTrack(e) {
    const handle = e.target;

    if (handle.getAttribute('part') === 'resize-handle') {
      const cell = handle.parentElement;
      let column = cell._column;

      this._toggleAttribute('column-resizing', true, this.$.scroller); // Get the target column to resize


      while (column.localName === 'vaadin-grid-column-group') {
        column = Array.prototype.slice.call(column._childColumns, 0).sort(function (a, b) {
          return a._order - b._order;
        }).filter(function (column) {
          return !column.hidden;
        }).pop();
      }

      const columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
      var targetCell = columnRowCells.filter(cell => cell._column === column)[0]; // Resize the target column

      if (targetCell.offsetWidth) {
        var style = window.getComputedStyle(targetCell);
        var minWidth = 10 + parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth) + parseInt(style.marginLeft) + parseInt(style.marginRight);
        column.width = Math.max(minWidth, targetCell.offsetWidth + e.detail.x - targetCell.getBoundingClientRect().right) + 'px';
        column.flexGrow = 0;
      } // Fix width and flex-grow for all preceding columns


      columnRowCells.sort(function (a, b) {
        return a._column._order - b._column._order;
      }).forEach(function (cell, index, array) {
        if (index < array.indexOf(targetCell)) {
          cell._column.width = cell.offsetWidth + 'px';
          cell._column.flexGrow = 0;
        }
      });

      if (e.detail.state === 'end') {
        this._toggleAttribute('column-resizing', false, this.$.scroller);
      } // Notify resize


      this._resizeHandler();
    }
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js?babel-target=es5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js?babel-target=es5 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: ColumnBaseMixin, GridColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnBaseMixin", function() { return ColumnBaseMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridColumnElement", function() { return GridColumnElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-grid-templatizer.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js?babel-target=es5");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * @polymerMixin
 */

const ColumnBaseMixin = superClass => class ColumnBaseMixin extends superClass {
  static get properties() {
    return {
      /**
       * When set to true, the column is user-resizable.
       * @default false
       */
      resizable: {
        type: Boolean,
        value: function () {
          if (this.localName === 'vaadin-grid-column-group') {
            return;
          }

          const parent = this.parentNode;

          if (parent && parent.localName === 'vaadin-grid-column-group') {
            return parent.resizable || false;
          } else {
            return false;
          }
        }
      },
      _headerTemplate: {
        type: Object
      },
      _footerTemplate: {
        type: Object
      },

      /**
       * When true, the column is frozen. When a column inside of a column group is frozen,
       * all of the sibling columns inside the group will get frozen also.
       */
      frozen: {
        type: Boolean,
        value: false
      },

      /**
       * When set to true, the cells for this column are hidden.
       */
      hidden: {
        type: Boolean
      },

      /**
       * Text content to display in the header cell of the column.
       */
      header: {
        type: String
      },

      /**
       * Aligns the columns cell content horizontally.
       * Supported values: "start", "center" and "end".
       */
      textAlign: {
        type: String
      },
      _lastFrozen: {
        type: Boolean,
        value: false
      },
      _order: Number,
      _reorderStatus: Boolean,
      _emptyCells: Array,
      _headerCell: Object,
      _footerCell: Object,
      _grid: Object,

      /**
       * Custom function for rendering the header content.
       * Receives two arguments:
       *
       * - `root` The header cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */
      headerRenderer: Function,

      /**
       * Custom function for rendering the footer content.
       * Receives two arguments:
       *
       * - `root` The footer cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */
      footerRenderer: Function
    };
  }

  static get observers() {
    return ['_widthChanged(width, _headerCell, _footerCell, _cells.*)', '_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)', '_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)', '_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)', '_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)', '_orderChanged(_order, _headerCell, _footerCell, _cells.*)', '_lastFrozenChanged(_lastFrozen)', '_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)', '_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)', '_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)', '_resizableChanged(resizable, _headerCell)', '_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)', '_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)'];
  }
  /** @protected */


  connectedCallback() {
    super.connectedCallback();
    this._bodyTemplate && (this._bodyTemplate.templatizer._grid = this._grid);
    this._headerTemplate && (this._headerTemplate.templatizer._grid = this._grid);
    this._footerTemplate && (this._footerTemplate.templatizer._grid = this._grid);

    this._templateObserver.flush();

    if (!this._bodyTemplate) {
      // The observer might not have triggered if the tag is empty. Run manually.
      this._templateObserver.callback();
    }

    requestAnimationFrame(() => {
      this._allCells.forEach(cell => {
        if (!cell._content.parentNode) {
          this._grid && this._grid.appendChild(cell._content);
        }
      });
    });
  }
  /** @protected */


  disconnectedCallback() {
    super.disconnectedCallback();
    requestAnimationFrame(() => {
      if (!this._findHostGrid()) {
        this._allCells.forEach(cell => {
          if (cell._content.parentNode) {
            cell._content.parentNode.removeChild(cell._content);
          }
        });
      }
    });
    this._gridValue = undefined;
  }

  _findHostGrid() {
    let el = this; // Custom elements extending grid must have a specific localName

    while (el && !/^vaadin.*grid(-pro)?$/.test(el.localName)) {
      el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
    }

    return el || undefined;
  }

  get _grid() {
    if (!this._gridValue) {
      this._gridValue = this._findHostGrid();
    }

    return this._gridValue;
  }

  get _allCells() {
    return [].concat(this._cells || []).concat(this._emptyCells || []).concat(this._headerCell).concat(this._footerCell).filter(cell => cell);
  }

  constructor() {
    super();
    this._templateObserver = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"](this, info => {
      this._headerTemplate = this._prepareHeaderTemplate();
      this._footerTemplate = this._prepareFooterTemplate();
      this._bodyTemplate = this._prepareBodyTemplate();
    });
  }

  _prepareHeaderTemplate() {
    return this._prepareTemplatizer(this._findTemplate(true) || null, {});
  }

  _prepareFooterTemplate() {
    return this._prepareTemplatizer(this._findTemplate(false, true) || null, {});
  }

  _prepareBodyTemplate() {
    return this._prepareTemplatizer(this._findTemplate() || null);
  }

  _prepareTemplatizer(template, instanceProps) {
    if (template && !template.templatizer) {
      const templatizer = new _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_2__["Templatizer"]();
      templatizer._grid = this._grid;
      templatizer.dataHost = this.dataHost;
      templatizer._instanceProps = instanceProps || templatizer._instanceProps;
      templatizer.template = template;
      template.templatizer = templatizer;
    }

    return template;
  }

  _renderHeaderAndFooter() {
    if (this.headerRenderer) {
      this.__runRenderer(this.headerRenderer, this._headerCell);
    }

    if (this.footerRenderer) {
      this.__runRenderer(this.footerRenderer, this._footerCell);
    }
  }

  __runRenderer(renderer, cell, rowData) {
    const args = [cell._content, this];

    if (rowData && rowData.item) {
      args.push(rowData);
    }

    renderer.apply(this, args);
  }

  __setColumnTemplateOrRenderer(template, renderer, cells) {
    if (template && renderer) {
      throw new Error('You should only use either a renderer or a template');
    }

    cells.forEach(cell => {
      const model = this._grid.__getRowModel(cell.parentElement);

      if (renderer) {
        cell._renderer = renderer;

        if (model.item || renderer === this.headerRenderer || renderer === this.footerRenderer) {
          this.__runRenderer(renderer, cell, model);
        }
      } else if (cell._template !== template) {
        cell._template = template;
        cell._content.innerHTML = '';
        template.templatizer._grid = template.templatizer._grid || this._grid;
        const inst = template.templatizer.createInstance();

        cell._content.appendChild(inst.root);

        cell._instance = inst;

        if (model.item) {
          cell._instance.setProperties(model);
        }
      }
    });
  }

  _setBodyTemplateOrRenderer(template, renderer, cells, splices) {
    if ((template || renderer) && cells) {
      this.__setColumnTemplateOrRenderer(template, renderer, cells);
    }
  }

  _setHeaderTemplateOrRenderer(headerTemplate, headerRenderer, headerCell) {
    if ((headerTemplate || headerRenderer) && headerCell) {
      this.__setColumnTemplateOrRenderer(headerTemplate, headerRenderer, [headerCell]);
    }
  }

  _setFooterTemplateOrRenderer(footerTemplate, footerRenderer, footerCell) {
    if ((footerTemplate || footerRenderer) && footerCell) {
      this.__setColumnTemplateOrRenderer(footerTemplate, footerRenderer, [footerCell]);

      this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement);
    }
  }

  _selectFirstTemplate(header = false, footer = false) {
    return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"].getFlattenedNodes(this).filter(node => node.localName === 'template' && node.classList.contains('header') === header && node.classList.contains('footer') === footer)[0];
  }

  _findTemplate(header, footer) {
    const template = this._selectFirstTemplate(header, footer);

    if (template) {
      if (this.dataHost) {
        // set dataHost to the context where template has been defined
        template._rootDataHost = this.dataHost._rootDataHost || this.dataHost;
      }
    }

    return template;
  }

  _flexGrowChanged(flexGrow, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('flexGrow');
    }

    this._allCells.forEach(cell => cell.style.flexGrow = flexGrow);
  }

  _orderChanged(order, headerCell, footerCell, cells) {
    this._allCells.forEach(cell => cell.style.order = order);
  }

  _widthChanged(width, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('width');
    }

    this._allCells.forEach(cell => cell.style.width = width); // Force a reflow to workaround browser issues causing double scrollbars to grid
    // https://github.com/vaadin/vaadin-grid/issues/1586


    if (this._grid && this._grid.__forceReflow) {
      this._grid.__forceReflow();
    }
  }

  _frozenChanged(frozen, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('frozen', frozen);
    }

    this._allCells.forEach(cell => this._toggleAttribute('frozen', frozen, cell));

    this._grid && this._grid._frozenCellsChanged && this._grid._frozenCellsChanged();
  }

  _lastFrozenChanged(lastFrozen) {
    this._allCells.forEach(cell => this._toggleAttribute('last-frozen', lastFrozen, cell));

    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._lastFrozen = lastFrozen;
    }
  }

  _pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate) {
    const hasHeaderText = header !== undefined;

    if (!headerRenderer && !headerTemplate && hasHeaderText && headerCell) {
      this.__setTextContent(headerCell._content, header);
    }

    if (path && cells.value) {
      if (!renderer && !bodyTemplate) {
        const pathRenderer = (root, owner, {
          item
        }) => this.__setTextContent(root, this.get(path, item));

        this.__setColumnTemplateOrRenderer(undefined, pathRenderer, cells.value);
      }

      if (!headerRenderer && !headerTemplate && !hasHeaderText && headerCell && header !== null) {
        this.__setTextContent(headerCell._content, this._generateHeader(path));
      }
    }

    if (headerCell) {
      this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement);
    }
  }

  __setTextContent(node, textContent) {
    node.textContent !== textContent && (node.textContent = textContent);
  }

  _generateHeader(path) {
    return path.substr(path.lastIndexOf('.') + 1).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/-/g, ' ').replace(/^./, match => match.toUpperCase());
  }

  _toggleAttribute(name, bool, node) {
    if (node.hasAttribute(name) === !bool) {
      if (bool) {
        node.setAttribute(name, '');
      } else {
        node.removeAttribute(name);
      }
    }
  }

  _reorderStatusChanged(reorderStatus, headerCell, footerCell, cells) {
    this._allCells.forEach(cell => cell.setAttribute('reorder-status', reorderStatus));
  }

  _resizableChanged(resizable, headerCell) {
    if (resizable === undefined || headerCell === undefined) {
      return;
    }

    if (headerCell) {
      [headerCell].concat(this._emptyCells).forEach(cell => {
        if (cell) {
          const existingHandle = cell.querySelector('[part~="resize-handle"]');

          if (existingHandle) {
            cell.removeChild(existingHandle);
          }

          if (resizable) {
            const handle = document.createElement('div');
            handle.setAttribute('part', 'resize-handle');
            cell.appendChild(handle);
          }
        }
      });
    }
  }

  _textAlignChanged(textAlign, _cells, _headerCell, _footerCell) {
    if (textAlign === undefined) {
      return;
    }

    if (['start', 'end', 'center'].indexOf(textAlign) === -1) {
      console.warn('textAlign can only be set as "start", "end" or "center"');
      return;
    }

    let textAlignFallback;

    if (getComputedStyle(this._grid).direction === 'ltr') {
      if (textAlign === 'start') {
        textAlignFallback = 'left';
      } else if (textAlign === 'end') {
        textAlignFallback = 'right';
      }
    } else {
      if (textAlign === 'start') {
        textAlignFallback = 'right';
      } else if (textAlign === 'end') {
        textAlignFallback = 'left';
      }
    }

    this._allCells.forEach(cell => {
      cell._content.style.textAlign = textAlign;

      if (getComputedStyle(cell._content).textAlign !== textAlign) {
        cell._content.style.textAlign = textAlignFallback;
      }
    });
  }

  _hiddenChanged(hidden, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('hidden', hidden);
    }

    this._allCells.forEach(cell => this._toggleAttribute('hidden', hidden, cell));

    if (!!hidden !== !!this._previousHidden && this._grid) {
      this._grid._updateLastFrozen && this._grid._updateLastFrozen();
      this._grid.notifyResize && this._grid.notifyResize();
      this._grid._resetKeyboardNavigation && this._grid._resetKeyboardNavigation();
    }

    this._previousHidden = hidden;
  }

};
/**
 * A `<vaadin-grid-column>` is used to configure how a column in `<vaadin-grid>`
 * should look like.
 *
 * See `<vaadin-grid>` documentation and demos for instructions and examples on how
 * to configure the `<vaadin-grid-column>`.
 * ```
 *
 * @memberof Vaadin
 * @mixes Vaadin.Grid.ColumnBaseMixin
 */

class GridColumnElement extends ColumnBaseMixin(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get is() {
    return 'vaadin-grid-column';
  }

  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       */
      width: {
        type: String,
        value: '100px'
      },

      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       */
      flexGrow: {
        type: Number,
        value: 1
      },

      /**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      renderer: Function,

      /**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */
      path: {
        type: String
      },

      /**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       */
      autoWidth: {
        type: Boolean,
        value: false
      },
      _bodyTemplate: {
        type: Object
      },
      _cells: Array
    };
  }

}

customElements.define(GridColumnElement.is, GridColumnElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js?babel-target=es5":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js?babel-target=es5 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: ItemCache, DataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCache", function() { return ItemCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderMixin", function() { return DataProviderMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


const ItemCache = class ItemCache {
  constructor(grid, parentCache, parentItem) {
    this.grid = grid;
    this.parentCache = parentCache;
    this.parentItem = parentItem;
    this.itemCaches = {};
    this.items = {};
    this.effectiveSize = 0;
    this.size = 0;
    this.pendingRequests = {};
  }

  isLoading() {
    return Object.keys(this.pendingRequests).length || Object.keys(this.itemCaches).filter(index => {
      return this.itemCaches[index].isLoading();
    })[0];
  }

  getItemForIndex(index) {
    const {
      cache,
      scaledIndex
    } = this.getCacheAndIndex(index);
    return cache.items[scaledIndex];
  }

  updateSize() {
    this.effectiveSize = !this.parentItem || this.grid._isExpanded(this.parentItem) ? this.size + Object.keys(this.itemCaches).reduce((prev, curr) => {
      const subCache = this.itemCaches[curr];
      subCache.updateSize();
      return prev + subCache.effectiveSize;
    }, 0) : 0;
  }

  ensureSubCacheForScaledIndex(scaledIndex) {
    if (!this.itemCaches[scaledIndex]) {
      const subCache = new ItemCache(this.grid, this, this.items[scaledIndex]);
      this.itemCaches[scaledIndex] = subCache;

      this.grid._loadPage(0, subCache);
    }
  }

  getCacheAndIndex(index) {
    let thisLevelIndex = index;
    const keys = Object.keys(this.itemCaches);

    for (var i = 0; i < keys.length; i++) {
      const expandedIndex = Number(keys[i]);
      const subCache = this.itemCaches[expandedIndex];

      if (thisLevelIndex <= expandedIndex) {
        return {
          cache: this,
          scaledIndex: thisLevelIndex
        };
      } else if (thisLevelIndex <= expandedIndex + subCache.effectiveSize) {
        return subCache.getCacheAndIndex(thisLevelIndex - expandedIndex - 1);
      }

      thisLevelIndex -= subCache.effectiveSize;
    }

    return {
      cache: this,
      scaledIndex: thisLevelIndex
    };
  }

};
/**
 * @polymerMixin
 */

const DataProviderMixin = superClass => class DataProviderMixin extends superClass {
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
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filters` Currently applied filters
       *
       * `params.sortOrders` Currently applied sorting orders
       *
       * `params.parentItem` When tree is used, and sublevel items
       * are requested, reference to parent item of the requested sublevel.
       * Otherwise `undefined`.
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items. When tree sublevel items
       *     are requested, total number of items in the requested sublevel.
       *     Optional when tree is not used, required for tree.
       */
      dataProvider: {
        type: Object,
        notify: true,
        observer: '_dataProviderChanged'
      },

      /**
       * `true` while data is being requested from the data provider.
       */
      loading: {
        type: Boolean,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },
      _cache: {
        type: Object,
        value: function () {
          const cache = new ItemCache(this);
          return cache;
        }
      },

      /**
       * Path to an item sub-property that identifies the item.
       */
      itemIdPath: {
        type: String,
        value: null
      },

      /**
       * An array that contains the expanded items.
       */
      expandedItems: {
        type: Object,
        notify: true,
        value: () => []
      }
    };
  }

  static get observers() {
    return ['_sizeChanged(size)', '_expandedItemsChanged(expandedItems.*)'];
  }

  _sizeChanged(size) {
    const delta = size - this._cache.size;
    this._cache.size += delta;
    this._cache.effectiveSize += delta;
    this._effectiveSize = this._cache.effectiveSize;
  }

  _updateRowItem(item, el) {
    el.children.forEach(cell => {
      cell._instance && (cell._instance.item = item);
    });
  }

  _getItem(index, el) {
    if (index >= this._effectiveSize) {
      return;
    }

    el.index = index;

    const {
      cache,
      scaledIndex
    } = this._cache.getCacheAndIndex(index);

    const item = cache.items[scaledIndex];

    if (item) {
      this._toggleAttribute('loading', false, el);

      this._updateItem(el, item);

      if (this._isExpanded(item)) {
        cache.ensureSubCacheForScaledIndex(scaledIndex);
      }
    } else {
      this._toggleAttribute('loading', true, el);

      this._loadPage(this._getPageForIndex(scaledIndex), cache);
    }
  }

  _pagesForPhysicalItems() {
    // TODO: potentially heavy operation to run first visible index,
    // reconsider if performance issues occur on data binding / scrolling.
    // TODO: _vidxOffset shouldn't be read from here.
    const firstVisiblePage = this._getPageForIndex(this._firstVisibleIndex + this._vidxOffset);

    return [firstVisiblePage].concat(this._physicalItems.filter(row => row.index).items(row => this._getPageForIndex(row.index))).reduce((prev, curr) => {
      if (prev.indexOf(curr) === -1) {
        prev.push(curr);
      }

      return prev;
    }, []);
  }

  _expandedInstanceChangedCallback(inst, value) {
    if (inst.item === undefined) {
      return;
    }

    if (value) {
      this.expandItem(inst.item);
    } else {
      this.collapseItem(inst.item);
    }
  }
  /**
   * Returns a value that identifies the item. Uses `itemIdPath` if available.
   * Can be customized by overriding.
   */


  getItemId(item) {
    return this.itemIdPath ? this.get(this.itemIdPath, item) : item;
  }

  _isExpanded(item) {
    return this.expandedItems && this._getItemIndexInArray(item, this.expandedItems) > -1;
  }

  _expandedItemsChanged(e) {
    this._cache.updateSize();

    this._effectiveSize = this._cache.effectiveSize;

    this._assignModels();
  }
  /**
   * Expands the given item tree.
   */


  expandItem(item) {
    if (!this._isExpanded(item)) {
      this.push('expandedItems', item);
    }
  }
  /**
   * Collapses the given item tree.
   */


  collapseItem(item) {
    if (this._isExpanded(item)) {
      this.splice('expandedItems', this._getItemIndexInArray(item, this.expandedItems), 1);
    }
  }

  _getIndexLevel(index) {
    let {
      cache
    } = this._cache.getCacheAndIndex(index);

    let level = 0;

    while (cache.parentCache) {
      cache = cache.parentCache;
      level++;
    }

    return level;
  }

  _canPopulate() {
    return this._hasData && this._columnTree;
  }

  _loadPage(page, cache) {
    // make sure same page isn't requested multiple times.
    if (!cache.pendingRequests[page] && this.dataProvider) {
      this._setLoading(true);

      cache.pendingRequests[page] = true;
      const params = {
        page,
        pageSize: this.pageSize,
        sortOrders: this._mapSorters(),
        filters: this._mapFilters(),
        parentItem: cache.parentItem
      };
      this.dataProvider(params, (items, size) => {
        if (size !== undefined) {
          cache.size = size;
        } else {
          if (params.parentItem) {
            cache.size = items.length;
          }
        } // Populate the cache with new items


        items.forEach((item, itemsIndex) => {
          const itemIndex = page * this.pageSize + itemsIndex;
          cache.items[itemIndex] = item;

          if (this._isExpanded(item)) {
            // Force synchronous data request for expanded item sub-cache
            cache.ensureSubCacheForScaledIndex(itemIndex);
          }
        });
        this._hasData = true;
        delete cache.pendingRequests[page];

        if (!this._cache.isLoading()) {
          // All active requests have finished, update the effective size and rows
          this._setLoading(false);

          this._cache.updateSize();

          this._effectiveSize = this._cache.effectiveSize;
          Array.from(this.$.items.children).filter(row => !row.hidden).forEach(row => {
            const cachedItem = this._cache.getItemForIndex(row.index);

            if (cachedItem) {
              this._toggleAttribute('loading', false, row);

              this._updateItem(row, cachedItem);
            }
          });

          this._increasePoolIfNeeded(0);
        }

        this.__setInitialColumnWidths();
      });
    }
  }

  _getPageForIndex(index) {
    return Math.floor(index / this.pageSize);
  }
  /**
   * Clears the cached pages and reloads data from dataprovider when needed.
   */


  clearCache() {
    this._cache = new ItemCache(this);
    Array.from(this.$.items.children).forEach(row => {
      Array.from(row.children).forEach(cell => {
        // Force data system to pick up subproperty changes
        cell._instance && cell._instance._setPendingProperty('item', {}, false);
      });
    });
    this._cache.size = this.size || 0;

    this._cache.updateSize();

    this._hasData = false;

    this._assignModels();

    if (!this._effectiveSize) {
      this._loadPage(0, this._cache);
    }
  }

  _flushItemsDebouncer() {
    if (this._debouncerLoad) {
      this._debouncerLoad.flush();
    }
  }

  _pageSizeChanged(pageSize, oldPageSize) {
    if (oldPageSize !== undefined && pageSize !== oldPageSize) {
      this.clearCache();
    }
  }

  _checkSize() {
    if (this.size === undefined && this._effectiveSize === 0) {
      console.warn('The <vaadin-grid> needs the total number of items' + ' in order to display rows. Set the total number of items' + ' to the `size` property, or provide the total number of items' + ' in the second argument of the `dataProvider`’s `callback` call.');
    }
  }

  _dataProviderChanged(dataProvider, oldDataProvider) {
    if (oldDataProvider !== undefined) {
      this.clearCache();
    }

    if (dataProvider && this.items && this.items.length) {
      // Fixes possibly invalid cached lastVisibleIndex value in <iron-list>
      this._scrollToIndex(this._firstVisibleIndex);
    }

    this._ensureFirstPageLoaded();

    this._debouncerCheckSize = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerCheckSize, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(2000), this._checkSize.bind(this));

    this._scrollHandler();
  }

  _ensureFirstPageLoaded() {
    if (!this._hasData) {
      // load data before adding rows to make sure they have content when
      // rendered for the first time.
      this._loadPage(0, this._cache, () => {
        const hadData = this._hasData;
        this._hasData = true;

        if (!hadData) {
          this.notifyResize();
        }
      });
    }
  }

  _itemsEqual(item1, item2) {
    return this.getItemId(item1) === this.getItemId(item2);
  }

  _getItemIndexInArray(item, array) {
    let result = -1;
    array.forEach((i, idx) => {
      if (this._itemsEqual(i, item)) {
        result = idx;
      }
    });
    return result;
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js?babel-target=es5":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js?babel-target=es5 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: DragAndDropMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropMixin", function() { return DragAndDropMixin; });
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DropMode = {
  BETWEEN: 'between',
  ON_TOP: 'on-top',
  ON_TOP_OR_BETWEEN: 'on-top-or-between',
  ON_GRID: 'on-grid'
};
const DropLocation = {
  ON_TOP: 'on-top',
  ABOVE: 'above',
  BELOW: 'below',
  EMPTY: 'empty'
};
/**
 * @polymerMixin
 */

const DragAndDropMixin = superClass => class DragAndDropMixin extends superClass {
  static get properties() {
    return {
      /**
       * Defines the locations within the Grid row where an element can be dropped.
       *
       * Possible values are:
       * - `between`: The drop event can happen between Grid rows.
       * - `on-top`: The drop event can happen on top of Grid rows.
       * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
       * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
       */
      dropMode: String,

      /**
       * Marks the grid's rows to be available for dragging.
       */
      rowsDraggable: Boolean,

      /**
       * A function that filters dragging of specific grid rows. The return value should be false
       * if dragging of the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      dragFilter: Function,

      /**
       * A function that filters dropping on specific grid rows. The return value should be false
       * if dropping on the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      dropFilter: Function,
      __dndAutoScrollThreshold: {
        value: 50
      }
    };
  }

  static get observers() {
    return ['_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)'];
  }

  ready() {
    super.ready();
    this.$.table.addEventListener('dragstart', this._onDragStart.bind(this));
    this.$.table.addEventListener('dragend', this._onDragEnd.bind(this));
    this.$.table.addEventListener('dragover', this._onDragOver.bind(this));
    this.$.table.addEventListener('dragleave', this._onDragLeave.bind(this));
    this.$.table.addEventListener('drop', this._onDrop.bind(this));
    this.$.table.addEventListener('dragenter', e => {
      if (this.dropMode) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }

  _onDragStart(e) {
    if (this.rowsDraggable) {
      let row = e.target;

      if (row.localName === 'vaadin-grid-cell-content') {
        // The draggable node is the cell content element on browsers that support native shadow
        row = row.assignedSlot.parentNode.parentNode;
      }

      if (row.parentNode !== this.$.items) {
        return;
      }

      e.stopPropagation();

      this._toggleAttribute('dragging-rows', true, this);

      if (this._safari) {
        // Safari doesn't get proper drag images from transformed
        // elements so we need to switch to top temporarily
        const transform = row.style.transform;
        row.style.top = /translateY\((.*)\)/.exec(transform)[1];
        row.style.transform = 'none';
        requestAnimationFrame(() => {
          row.style.top = '';
          row.style.transform = transform;
        });
      }

      const rowRect = row.getBoundingClientRect();

      if (!window.ShadyDOM) {
        if (this._ios) {
          e.dataTransfer.setDragImage(row);
        } else {
          e.dataTransfer.setDragImage(row, e.clientX - rowRect.left, e.clientY - rowRect.top);
        }
      }

      let rows = [row];

      if (this._isSelected(row._item)) {
        rows = this.__getViewportRows().filter(row => this._isSelected(row._item)).filter(row => !this.dragFilter || this.dragFilter(this.__getRowModel(row)));
      } // Set the default transfer data


      e.dataTransfer.setData('text', this.__formatDefaultTransferData(rows));
      row.setAttribute('dragstart', rows.length > 1 ? rows.length : '');
      this.updateStyles({
        '--_grid-drag-start-x': `${e.clientX - rowRect.left + 20}px`,
        '--_grid-drag-start-y': `${e.clientY - rowRect.top + 10}px`
      });
      requestAnimationFrame(() => {
        row.removeAttribute('dragstart');
        this.updateStyles({
          '--_grid-drag-start-x': '',
          '--_grid-drag-start-y': ''
        });
      });
      const event = new CustomEvent('grid-dragstart', {
        detail: {
          draggedItems: rows.map(row => row._item),
          setDragData: (type, data) => e.dataTransfer.setData(type, data),
          setDraggedItemsCount: count => row.setAttribute('dragstart', count)
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }

  _onDragEnd(e) {
    this._toggleAttribute('dragging-rows', false, this);

    e.stopPropagation();
    const event = new CustomEvent('grid-dragend');
    event.originalEvent = e;
    this.dispatchEvent(event);
  }

  _onDragLeave(e) {
    e.stopPropagation();

    this._clearDragStyles();
  }

  _onDragOver(e) {
    if (this.dropMode) {
      this._dropLocation = undefined;
      this._dragOverItem = undefined;

      if (this.__dndAutoScroll(e.clientY)) {
        this._clearDragStyles();

        return;
      }

      let row = e.composedPath().filter(node => node.localName === 'tr')[0];

      if (!this._effectiveSize || this.dropMode === DropMode.ON_GRID) {
        // The grid is empty or "on-grid" drop mode was used, always default to "empty"
        this._dropLocation = DropLocation.EMPTY;
      } else if (!row || row.parentNode !== this.$.items) {
        // The dragover didn't occur on a body row but the grid has items
        if (row) {
          // The dragover occurred over a header/footer row
          return;
        } else if (this.dropMode === DropMode.BETWEEN || this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          // The drop mode allows setting the last row as the drag over item
          row = Array.from(this.$.items.children).filter(row => !row.hidden).pop();
          this._dropLocation = DropLocation.BELOW;
        } else {
          // Drop mode on-top used but the dragover didn't occur over one of the existing rows
          return;
        }
      } else {
        // The dragover occurred on a body row, determine the drop location from coordinates
        const rowRect = row.getBoundingClientRect();
        this._dropLocation = DropLocation.ON_TOP;

        if (this.dropMode === DropMode.BETWEEN) {
          const dropAbove = e.clientY - rowRect.top < rowRect.bottom - e.clientY;
          this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;
        } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          if (e.clientY - rowRect.top < rowRect.height / 3) {
            this._dropLocation = DropLocation.ABOVE;
          } else if (e.clientY - rowRect.top > rowRect.height / 3 * 2) {
            this._dropLocation = DropLocation.BELOW;
          }
        }
      }

      if (row && row.hasAttribute('drop-disabled')) {
        this._dropLocation = undefined;
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      if (this._dropLocation === DropLocation.EMPTY) {
        this._toggleAttribute('dragover', true, this);
      } else if (row) {
        this._dragOverItem = row._item;

        if (row.getAttribute('dragover') !== this._dropLocation) {
          row.setAttribute('dragover', this._dropLocation);
        }
      } else {
        this._clearDragStyles();
      }
    }
  }

  __dndAutoScroll(clientY) {
    if (this.__dndAutoScrolling) {
      return true;
    }

    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    const topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
    const bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
    let scrollTopDelta = 0;

    if (bottomDiff > 0) {
      scrollTopDelta = bottomDiff * 2;
    } else if (topDiff > 0) {
      scrollTopDelta = -topDiff * 2;
    }

    if (scrollTopDelta) {
      const scrollTop = this.$.table.scrollTop;
      this.$.table.scrollTop += scrollTopDelta;
      const scrollTopChanged = scrollTop !== this.$.table.scrollTop;

      if (scrollTopChanged) {
        this.__dndAutoScrolling = true; // Disallow more auto-scrolls within 20ms

        setTimeout(() => this.__dndAutoScrolling = false, 20);

        this._scrollHandler();

        return true;
      }
    }
  }

  __getViewportRows() {
    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    return Array.from(this.$.items.children).filter(row => {
      const rowRect = row.getBoundingClientRect();
      return rowRect.bottom > headerBottom && rowRect.top < footerTop;
    });
  }

  _clearDragStyles() {
    this.removeAttribute('dragover');
    Array.from(this.$.items.children).forEach(row => row.removeAttribute('dragover'));
  }

  _onDrop(e) {
    if (this.dropMode) {
      e.stopPropagation();
      e.preventDefault();
      const dragData = e.dataTransfer.types && Array.from(e.dataTransfer.types).map(type => {
        return {
          type,
          data: e.dataTransfer.getData(type)
        };
      });

      this._clearDragStyles();

      const event = new CustomEvent('grid-drop', {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        detail: {
          dropTargetItem: this._dragOverItem,
          dropLocation: this._dropLocation,
          dragData
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }

  __formatDefaultTransferData(rows) {
    return rows.map(row => {
      return Array.from(row.children).filter(cell => !cell.hidden && cell.getAttribute('part').indexOf('details-cell') === -1).sort((a, b) => {
        return a._column._order > b._column._order ? 1 : -1;
      }).map(cell => cell._content.textContent.trim()).filter(content => content).join('\t');
    }).join('\n');
  }

  _dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter) {
    this.filterDragAndDrop();
  }
  /**
   * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
   * If the filter depends on varying conditions, you may need to
   * call this function manually in order to update the draggability when
   * the conditions change.
   */


  filterDragAndDrop() {
    Array.from(this.$.items.children).filter(row => !row.hidden).forEach(row => {
      this._filterDragAndDrop(row, this.__getRowModel(row));
    });
  }

  _filterDragAndDrop(row, rowData) {
    const dragDisabled = !this.rowsDraggable || this.dragFilter && !this.dragFilter(rowData);
    const dropDisabled = !this.dropMode || this.dropFilter && !this.dropFilter(rowData);
    const draggableElements = window.ShadyDOM ? [row] : Array.from(row.children).map(cell => cell._content);
    draggableElements.forEach(e => {
      if (dragDisabled) {
        e.removeAttribute('draggable');
      } else {
        e.setAttribute('draggable', true);
      }
    });

    this._toggleAttribute('drag-disabled', dragDisabled, row);

    this._toggleAttribute('drop-disabled', dropDisabled, row);
  }
  /**
   * Fired when starting to drag grid rows.
   *
   * @event grid-dragstart
   * @param {Object} originalEvent The native dragstart event
   * @param {Object} detail
   * @param {Object} detail.draggedItems the items in the visible viewport that are dragged
   * @param {Function} detail.setDraggedItemsCount Overrides the default number shown in the drag image on multi row drag.
   * Parameter is of type number.
   * @param {Function} detail.setDragData Sets dataTransfer data for the drag operation.
   * Note that "text" is the only data type supported by all the browsers the grid currently supports (including IE11).
   * The function takes two parameters:
   * - type:string The type of the data
   * - data:string The data
   */

  /**
   * Fired when the dragging of the rows ends.
   *
   * @event grid-dragend
   * @param {Object} originalEvent The native dragend event
   */

  /**
   * Fired when a drop occurs on top of the grid.
   *
   * @event grid-drop
   * @param {Object} originalEvent The native drop event
   * @param {Object} detail
   * @param {Object} detail.dropTargetItem The item of the grid row on which the drop occurred.
   * @param {string} detail.dropLocation The position at which the drop event took place relative to a row.
   * Depending on the dropMode value, the drop location can be one of the following
   * - `on-top`: when the drop occurred on top of the row
   * - `above`: when the drop occurred above the row
   * - `below`: when the drop occurred below the row
   * - `empty`: when the drop occurred over the grid, not relative to any specific row
   * @param {string} detail.dragData An array of items with the payload as a string representation as the
   * `data` property and the type of the data as `type` property.
   */


};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js?babel-target=es5":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js?babel-target=es5 ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: DynamicColumnsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicColumnsMixin", function() { return DynamicColumnsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * @polymerMixin
 */

const DynamicColumnsMixin = superClass => class DynamicColumnsMixin extends superClass {
  ready() {
    super.ready();

    this._addNodeObserver();
  }

  _hasColumnGroups(columns) {
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].localName === 'vaadin-grid-column-group') {
        return true;
      }
    }

    return false;
  }

  _getChildColumns(el) {
    return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"].getFlattenedNodes(el).filter(this._isColumnElement);
  }

  _flattenColumnGroups(columns) {
    return columns.map(col => {
      if (col.localName === 'vaadin-grid-column-group') {
        return this._getChildColumns(col);
      } else {
        return [col];
      }
    }).reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  }

  _getColumnTree() {
    var rootColumns = _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"].getFlattenedNodes(this).filter(this._isColumnElement);
    var _columnTree = [];

    for (var c = rootColumns;;) {
      _columnTree.push(c);

      if (!this._hasColumnGroups(c)) {
        break;
      }

      c = this._flattenColumnGroups(c);
    }

    return _columnTree;
  }

  _updateColumnTree() {
    var columnTree = this._getColumnTree();

    if (!this._arrayEquals(columnTree, this._columnTree)) {
      this._columnTree = columnTree;
    }
  }

  _addNodeObserver() {
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"](this, info => {
      const rowDetailsTemplate = info.addedNodes.filter(n => n.localName === 'template' && n.classList.contains('row-details'))[0];

      if (rowDetailsTemplate && this._rowDetailsTemplate !== rowDetailsTemplate) {
        this._rowDetailsTemplate = rowDetailsTemplate;
      }

      if (info.addedNodes.filter(this._isColumnElement).length > 0 || info.removedNodes.filter(this._isColumnElement).length > 0) {
        this._updateColumnTree();
      }

      this._debouncerCheckImports = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debouncerCheckImports, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(2000), this._checkImports.bind(this));

      this._ensureFirstPageLoaded();
    });
  }

  _arrayEquals(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length != arr2.length) {
      return false;
    }

    for (var i = 0, l = arr1.length; i < l; i++) {
      // Check if we have nested arrays
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this._arrayEquals(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] != arr2[i]) {
        return false;
      }
    }

    return true;
  }

  _checkImports() {
    ['vaadin-grid-column-group', 'vaadin-grid-filter', 'vaadin-grid-filter-column', 'vaadin-grid-tree-toggle', 'vaadin-grid-selection-column', 'vaadin-grid-sort-column', 'vaadin-grid-sorter'].forEach(elementName => {
      var element = this.querySelector(elementName);

      if (element && !(element instanceof _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
        console.warn(`Make sure you have imported the required module for <${elementName}> element.`);
      }
    });
  }

  _updateFirstAndLastColumn() {
    Array.from(this.shadowRoot.querySelectorAll('tr')).forEach(row => this._updateFirstAndLastColumnForRow(row));
  }

  _updateFirstAndLastColumnForRow(row) {
    Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((a, b) => {
      return a._column._order - b._column._order;
    }).forEach((cell, cellIndex, children) => {
      this._toggleAttribute('first-column', cellIndex === 0, cell);

      this._toggleAttribute('last-column', cellIndex === children.length - 1, cell);
    });
  }

  _isColumnElement(node) {
    return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js?babel-target=es5":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js?babel-target=es5 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: EventContextMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventContextMixin", function() { return EventContextMixin; });
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const EventContextMixin = superClass => class EventContextMixin extends superClass {
  /**
   * Returns an object with context information about the event target:
   * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
   * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
   * - `section`: whether the event targeted the body, header, footer or details of the grid
   *
   * These additional properties are included when `item` is specified:
   * - `index`: the index of the item
   * - `selected`: the selected state of the item
   * - `detailsOpened`: whether the row details are open for the item
   * - `expanded`: the expanded state of the tree toggle
   * - `level`: the tree hierarchy level
   *
   * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
   * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
   * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
   * the event targets the empty part of the grid body.
   */
  getEventContext(event) {
    const context = {};
    const path = event.composedPath();
    const cell = path[path.indexOf(this.$.table) - 3];

    if (!cell) {
      return context;
    }

    context.section = ['body', 'header', 'footer', 'details'].filter(section => cell.getAttribute('part').indexOf(section) > -1)[0];

    if (cell._column) {
      context.column = cell._column;
    }

    if (context.section === 'body' || context.section === 'details') {
      Object.assign(context, this.__getRowModel(cell.parentElement));
    }

    return context;
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js?babel-target=es5":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js?babel-target=es5 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: GridFilterColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterColumnElement", function() { return GridFilterColumnElement; });
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-column.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-grid-filter.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * `<vaadin-grid-filter-column>` is a helper element for the `<vaadin-grid>`
 * that provides default header template and functionality for filtering.
 *
 * #### Example:
 * ```html
 * <vaadin-grid items="[[items]]">
 *  <vaadin-grid-filter-column path="name.first"></vaadin-grid-filter-column>
 *
 *  <vaadin-grid-column>
 *    ...
 * ```
 *
 * @memberof Vaadin
 * @extends Vaadin.GridColumnElement
 */

class GridFilterColumnElement extends _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <template class="header" id="headerTemplate">
      <vaadin-grid-filter path="[[path]]" value="[[_filterValue]]">
        <vaadin-text-field theme="small" focus-target="" style="max-width: 100%;" slot="filter" value="{{_filterValue}}" label="[[_getHeader(header, path)]]"></vaadin-text-field>
      </vaadin-grid-filter>
    </template>
`;
  }

  static get is() {
    return 'vaadin-grid-filter-column';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: String,

      /**
       * Text to display as the label of the column filter text-field.
       */
      header: String
    };
  }

  _prepareHeaderTemplate() {
    const headerTemplate = this._prepareTemplatizer(this.$.headerTemplate); // needed to override the dataHost correctly in case internal template is used.


    headerTemplate.templatizer.dataHost = this;
    return headerTemplate;
  }

  _getHeader(header, path) {
    return header || this._generateHeader(path);
  }

}

customElements.define(GridFilterColumnElement.is, GridFilterColumnElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js?babel-target=es5":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js?babel-target=es5 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: FilterMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMixin", function() { return FilterMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const FilterMixin = superClass => class FilterMixin extends superClass {
  static get properties() {
    return {
      _filters: {
        type: Array,
        value: function () {
          return [];
        }
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('filter-changed', this._filterChanged.bind(this));
  }

  _filterChanged(e) {
    if (this._filters.indexOf(e.target) === -1) {
      this._filters.push(e.target);
    }

    e.stopPropagation();

    if (this.dataProvider) {
      this.clearCache();
    }
  }

  _mapFilters() {
    return this._filters.map(filter => {
      return {
        path: filter.path,
        value: filter.value
      };
    });
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js?babel-target=es5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js?babel-target=es5 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: GridFilterElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterElement", function() { return GridFilterElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-grid-filter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls,
 * and handlers for filtering the grid data.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column>
 *   <template class="header">
 *     <vaadin-grid-filter path="name.first"></vaadin-grid-filter>
 *   </template>
 *   <template>[[item.name.first]]</template>
 * </vaadin-grid-column>
 * ```
 *
 * @memberof Vaadin
 */

class GridFilterElement extends class extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {} {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-flex;
        max-width: 100%;
      }

      #filter {
        width: 100%;
        box-sizing: border-box;
      }
    </style>
    <slot name="filter">
      <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
    </slot>
`;
  }

  static get is() {
    return 'vaadin-grid-filter';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: String,

      /**
       * Current filter value.
       */
      value: {
        type: String,
        notify: true
      },
      _connected: Boolean
    };
  }
  /** @protected */


  connectedCallback() {
    super.connectedCallback();
    this._connected = true;
  }

  static get observers() {
    return ['_filterChanged(path, value, _connected)'];
  }

  ready() {
    super.ready();
    const child = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).firstElementChild;

    if (child && child.getAttribute('slot') !== 'filter') {
      console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin-grid-filter>');
      child.setAttribute('slot', 'filter');
    }
  }

  _filterChanged(path, value, connected) {
    if (path === undefined || value === undefined || !connected) {
      return;
    }

    if (this._previousValue === undefined && value === '') {
      return;
    }

    this._previousValue = value;
    this._debouncerFilterChanged = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncerFilterChanged, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(200), () => {
      this.dispatchEvent(new CustomEvent('filter-changed', {
        bubbles: true
      }));
    });
  }

  focus() {
    this.$.filter.focus();
  }

}

customElements.define(GridFilterElement.is, GridFilterElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js?babel-target=es5":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js?babel-target=es5 ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: KeyboardNavigationMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardNavigationMixin", function() { return KeyboardNavigationMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const KeyboardNavigationMixin = superClass => class KeyboardNavigationMixin extends superClass {
  static get properties() {
    return {
      _headerFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },
      _itemsFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },
      _footerFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },
      _navigatingIsHidden: Boolean,
      _focusedItemIndex: {
        type: Number,
        value: 0
      },
      _focusedColumnOrder: Number
    };
  }

  ready() {
    super.ready();

    if (this._ios || this._android) {
      // Disable keyboard navigation on mobile devices
      return;
    }

    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('focusin', this._onFocusIn);
    this.addEventListener('focusout', this._onFocusOut); // When focus goes from cell to another cell, focusin/focusout events do
    // not escape the grid’s shadowRoot, thus listening inside the shadowRoot.

    this.$.table.addEventListener('focusin', this._onCellFocusIn.bind(this));
    this.$.table.addEventListener('focusout', this._onCellFocusOut.bind(this));
    this.addEventListener('mousedown', () => {
      this._toggleAttribute('navigating', false, this);

      this._isMousedown = true;
    });
    this.addEventListener('mouseup', () => this._isMousedown = false);
  }

  _focusableChanged(focusable, oldFocusable) {
    if (oldFocusable) {
      oldFocusable.setAttribute('tabindex', '-1');
    }

    if (focusable) {
      focusable.setAttribute('tabindex', '0');
    }
  }

  _onKeyDown(e) {
    // Ensure standard key value, unified across browsers
    let key = e.key;

    if (key === 'Up' || key === 'Down' || key === 'Left' || key === 'Right') {
      // MSIE & Edge
      key = 'Arrow' + key;
    }

    if (key === 'Esc') {
      // MSIE & Edge
      key = 'Escape';
    }

    if (key === 'Spacebar') {
      // MSIE
      key = ' ';
    }

    let keyGroup;

    switch (key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'PageUp':
      case 'PageDown':
      case 'Home':
      case 'End':
        keyGroup = 'Navigation';
        break;

      case 'Enter':
      case 'Escape':
      case 'F2':
        keyGroup = 'Interaction';
        break;

      case 'Tab':
        keyGroup = 'Tab';
        break;

      case ' ':
        keyGroup = 'Space';
        break;
    }

    this._detectInteracting(e);

    if (this.hasAttribute('interacting') && keyGroup !== 'Interaction') {
      // When in the interacting mode, only the “Interaction” keys are handled.
      keyGroup = undefined;
    }

    if (keyGroup) {
      this[`_on${keyGroup}KeyDown`](e, key);
    }
  }

  _ensureScrolledToIndex(index) {
    const targetRowInDom = Array.from(this.$.items.children).filter(child => child.index === index)[0];

    if (!targetRowInDom) {
      this._scrollToIndex(index);
    }
  }

  _onNavigationKeyDown(e, key) {
    e.preventDefault();

    function indexOfChildElement(el) {
      return Array.prototype.indexOf.call(el.parentNode.children, el);
    }

    const visibleItemsCount = this._lastVisibleIndex - this._firstVisibleIndex - 1;
    let dx = 0,
        dy = 0;

    switch (key) {
      case 'ArrowRight':
        dx = 1;
        break;

      case 'ArrowLeft':
        dx = -1;
        break;

      case 'Home':
        dx = -Infinity;
        e.ctrlKey && (dy = -Infinity);
        break;

      case 'End':
        dx = Infinity;
        e.ctrlKey && (dy = Infinity);
        break;

      case 'ArrowDown':
        dy = 1;
        break;

      case 'ArrowUp':
        dy = -1;
        break;

      case 'PageDown':
        dy = visibleItemsCount;
        break;

      case 'PageUp':
        dy = -visibleItemsCount;
        break;
    }

    const activeCell = e.composedPath()[0];
    const columnIndex = indexOfChildElement(activeCell);

    const isRowDetails = this._elementMatches(activeCell, '[part~="details-cell"]');

    const activeRow = activeCell.parentNode;
    const activeRowGroup = activeRow.parentNode;
    const maxRowIndex = (activeRowGroup === this.$.items ? this._effectiveSize : activeRowGroup.children.length) - 1; // Body rows have index property, otherwise DOM child index of the row is used.

    const rowIndex = activeRowGroup === this.$.items ? this._focusedItemIndex !== undefined ? this._focusedItemIndex : activeRow.index : indexOfChildElement(activeRow); // Index of the destination row

    let dstRowIndex = Math.max(0, Math.min(rowIndex + dy, maxRowIndex)); // Row details navigation logic

    let dstIsRowDetails = false;

    if (activeRowGroup === this.$.items) {
      const item = activeRow._item;

      const dstItem = this._cache.getItemForIndex(dstRowIndex); // Should we navigate to row details?


      if (isRowDetails) {
        dstIsRowDetails = dy === 0;
      } else {
        dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) || dy === -1 && dstRowIndex !== rowIndex && this._isDetailsOpened(dstItem);
      } // Should we navigate between details and regular cells of the same row?


      if (dstIsRowDetails !== isRowDetails && (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) {
        dstRowIndex = rowIndex;
      }
    } // Header and footer could have hidden rows, e. g., if none of the columns
    // or groups on the given column tree level define template. Skip them
    // in vertical keyboard navigation.


    if (activeRowGroup !== this.$.items) {
      if (dstRowIndex > rowIndex) {
        while (dstRowIndex < maxRowIndex && activeRowGroup.children[dstRowIndex].hidden) {
          dstRowIndex++;
        }
      } else if (dstRowIndex < rowIndex) {
        while (dstRowIndex > 0 && activeRowGroup.children[dstRowIndex].hidden) {
          dstRowIndex--;
        }
      }
    } // _focusedColumnOrder is memoized — this is to ensure predictable
    // navigation when entering and leaving detail and column group cells.


    if (this._focusedColumnOrder === undefined) {
      if (isRowDetails) {
        this._focusedColumnOrder = 0;
      } else {
        this._focusedColumnOrder = this._getColumns(activeRowGroup, rowIndex)[columnIndex]._order;
      }
    } // Find orderedColumnIndex — the index of order closest matching the
    // original _focusedColumnOrder in the sorted array of orders
    // of the visible columns on the destination row.


    const dstColumns = this._getColumns(activeRowGroup, dstRowIndex);

    const dstSortedColumnOrders = dstColumns.filter(c => !c.hidden).map(c => c._order).sort((b, a) => b - a);
    const maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
    const orderedColumnIndex = dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b, a) => Math.abs(b - this._focusedColumnOrder) - Math.abs(a - this._focusedColumnOrder))[0]); // Index of the destination column order

    const dstOrderedColumnIndex = dy === 0 && isRowDetails ? orderedColumnIndex : Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));

    if (dstOrderedColumnIndex !== orderedColumnIndex) {
      // Horizontal movement invalidates stored _focusedColumnOrder
      this._focusedColumnOrder = undefined;
    } // Ensure correct vertical scroll position, destination row is visible


    if (activeRowGroup === this.$.items) {
      this._ensureScrolledToIndex(dstRowIndex);
    } // This has to be set after scrolling, otherwise it can be removed by
    // `_preventScrollerRotatingCellFocus(item, index)` during scrolling.


    this._toggleAttribute('navigating', true, this);

    const columnIndexByOrder = dstColumns.reduce((acc, col, i) => (acc[col._order] = i, acc), {});
    const dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]]; // For body rows, use index property to find destination row, otherwise use DOM child index

    const dstRow = activeRowGroup === this.$.items ? Array.from(activeRowGroup.children).filter(el => el.index === dstRowIndex)[0] : activeRowGroup.children[dstRowIndex];

    if (!dstRow) {
      return;
    } // Here we go!


    const dstCell = dstIsRowDetails ? Array.from(dstRow.children).filter(el => this._elementMatches(el, '[part~="details-cell"]'))[0] : dstRow.children[dstColumnIndex];

    this._scrollHorizontallyToCell(dstCell);

    if (activeRowGroup === this.$.items) {
      // When scrolling with repeated keydown, sometimes FocusEvent listeners
      // are too late to update _focusedItemIndex. Ensure next keydown
      // listener invocation gets updated _focusedItemIndex value.
      this._focusedItemIndex = dstRowIndex;
    }

    if (activeRowGroup === this.$.items) {
      const dstRect = dstCell.getBoundingClientRect();
      const footerTop = this.$.footer.getBoundingClientRect().top;
      const headerBottom = this.$.header.getBoundingClientRect().bottom;

      if (dstRect.bottom > footerTop) {
        this.$.table.scrollTop += dstRect.bottom - footerTop;

        this._scrollHandler();
      } else if (dstRect.top < headerBottom) {
        this.$.table.scrollTop -= headerBottom - dstRect.top;

        this._scrollHandler();
      }
    }

    dstCell.focus();
  }

  _parseEventPath(path) {
    const tableIndex = path.indexOf(this.$.table);
    return {
      rowGroup: path[tableIndex - 1],
      row: path[tableIndex - 2],
      cell: path[tableIndex - 3]
    };
  }

  _onInteractionKeyDown(e, key) {
    const localTarget = e.composedPath()[0];
    const localTargetIsTextInput = localTarget.localName === 'input' && !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);
    let wantInteracting;

    switch (key) {
      case 'Enter':
        wantInteracting = this.hasAttribute('interacting') ? !localTargetIsTextInput : true;
        break;

      case 'Escape':
        wantInteracting = false;
        break;

      case 'F2':
        wantInteracting = !this.hasAttribute('interacting');
        break;
    }

    const {
      cell
    } = this._parseEventPath(e.composedPath());

    if (this.hasAttribute('interacting') !== wantInteracting) {
      if (wantInteracting) {
        const focusTarget = cell._content.querySelector('[focus-target]') || cell._content.firstElementChild;

        if (focusTarget) {
          e.preventDefault();
          focusTarget.focus();

          this._toggleAttribute('interacting', true, this);

          this._toggleAttribute('navigating', false, this);
        }
      } else {
        e.preventDefault();
        this._focusedColumnOrder = undefined;
        cell.focus();

        this._toggleAttribute('interacting', false, this);

        this._toggleAttribute('navigating', true, this);
      }
    }
  }

  _predictFocusStepTarget(srcElement, step) {
    const tabOrder = [this.$.table, this._headerFocusable, this._itemsFocusable, this._footerFocusable, this.$.focusexit];
    let index = tabOrder.indexOf(srcElement);
    index += step;

    while (index >= 0 && index <= tabOrder.length - 1 && (!tabOrder[index] || tabOrder[index].parentNode.hidden)) {
      index += step;
    }

    return tabOrder[index];
  }

  _onTabKeyDown(e) {
    const focusTarget = this._predictFocusStepTarget(e.composedPath()[0], e.shiftKey ? -1 : 1);

    if (focusTarget === this.$.table) {
      // The focus is about to exit the grid to the top.
      this.$.table.focus();
    } else if (focusTarget === this.$.focusexit) {
      // The focus is about to exit the grid to the bottom.
      this.$.focusexit.focus();
    } else if (focusTarget === this._itemsFocusable) {
      let itemsFocusTarget = focusTarget;
      const targetRow = this._itemsFocusable.parentNode;

      this._ensureScrolledToIndex(this._focusedItemIndex);

      if (targetRow.index !== this._focusedItemIndex) {
        // The target row, which is about to be focused next, has been
        // assigned with a new index since last focus, probably because of
        // scrolling. Focus the row for the stored focused item index instead.
        const columnIndex = Array.from(targetRow.children).indexOf(this._itemsFocusable);
        const focusedItemRow = Array.from(this.$.items.children).filter(row => row.index === this._focusedItemIndex)[0];

        if (focusedItemRow) {
          itemsFocusTarget = focusedItemRow.children[columnIndex];
        }
      }

      e.preventDefault();
      itemsFocusTarget.focus();
    } else {
      e.preventDefault();
      focusTarget.focus();
    }

    this._toggleAttribute('navigating', true, this);
  }

  _onSpaceKeyDown(e) {
    e.preventDefault();
    const cell = e.composedPath()[0];

    if (cell._content && cell._content.firstElementChild) {
      const wasNavigating = this.hasAttribute('navigating');

      cell._content.firstElementChild.click();

      this._toggleAttribute('navigating', wasNavigating, this);
    } else {
      this.dispatchEvent(new CustomEvent('cell-activate', {
        detail: {
          model: this.__getRowModel(cell.parentElement)
        }
      }));
    }
  }

  _onFocusIn(e) {
    if (!this._isMousedown) {
      this._toggleAttribute('navigating', true, this);
    }

    const rootTarget = e.composedPath()[0];

    if (rootTarget === this.$.table || rootTarget === this.$.focusexit) {
      // The focus enters the top (bottom) of the grid, meaning that user has
      // tabbed (shift-tabbed) into the grid. Move the focus to
      // the first (the last) focusable.
      this._predictFocusStepTarget(rootTarget, rootTarget === this.$.table ? 1 : -1).focus();

      this._toggleAttribute('interacting', false, this);
    } else {
      this._detectInteracting(e);
    }
  }

  _onFocusOut(e) {
    this._toggleAttribute('navigating', false, this);

    this._detectInteracting(e);
  }

  _onCellFocusIn(e) {
    this._detectInteracting(e);

    if (e.composedPath().indexOf(this.$.table) === 3) {
      const cell = e.composedPath()[0];
      this._activeRowGroup = cell.parentNode.parentNode;

      if (this._activeRowGroup === this.$.header) {
        this._headerFocusable = cell;
      } else if (this._activeRowGroup === this.$.items) {
        this._itemsFocusable = cell;
      } else if (this._activeRowGroup === this.$.footer) {
        this._footerFocusable = cell;
      } // Inform cell content of the focus (used in <vaadin-grid-sorter>)


      cell._content.dispatchEvent(new CustomEvent('cell-focusin', {
        bubbles: false
      }));
    }

    this._detectFocusedItemIndex(e);
  }

  _onCellFocusOut(e) {
    if (e.composedPath().indexOf(this.$.table) === 3) {
      const cell = e.composedPath()[0]; // Inform cell content of the focus (used in <vaadin-grid-sorter>)

      cell._content.dispatchEvent(new CustomEvent('cell-focusout', {
        bubbles: false
      }));
    }
  }

  _detectInteracting(e) {
    this._toggleAttribute('interacting', e.composedPath().some(el => el.localName === 'vaadin-grid-cell-content'), this);
  }

  _detectFocusedItemIndex(e) {
    const {
      rowGroup,
      row
    } = this._parseEventPath(e.composedPath());

    if (rowGroup === this.$.items) {
      this._focusedItemIndex = row.index;
    }
  }

  _preventScrollerRotatingCellFocus(item, index) {
    if (item.index === this._focusedItemIndex && this.hasAttribute('navigating') && this._activeRowGroup === this.$.items) {
      // Focused item has went, hide navigation mode
      this._navigatingIsHidden = true;

      this._toggleAttribute('navigating', false, this);
    }

    if (index === this._focusedItemIndex && this._navigatingIsHidden) {
      // Focused item is back, restore navigation mode
      this._navigatingIsHidden = false;

      this._toggleAttribute('navigating', true, this);
    }
  }

  _getColumns(rowGroup, rowIndex) {
    let columnTreeLevel = this._columnTree.length - 1;

    if (rowGroup === this.$.header) {
      columnTreeLevel = rowIndex;
    } else if (rowGroup === this.$.footer) {
      columnTreeLevel = this._columnTree.length - 1 - rowIndex;
    }

    return this._columnTree[columnTreeLevel];
  }

  _resetKeyboardNavigation() {
    if (this.$.header.firstElementChild) {
      this._headerFocusable = Array.from(this.$.header.firstElementChild.children).filter(el => !el.hidden)[0];
    }

    if (this.$.items.firstElementChild) {
      const firstVisibleIndexRow = this._iterateItems((pidx, vidx) => {
        if (this._firstVisibleIndex === vidx) {
          return this.$.items.children[pidx];
        }
      });

      if (firstVisibleIndexRow) {
        this._itemsFocusable = Array.from(firstVisibleIndexRow.children).filter(el => !el.hidden)[0];
      }
    }

    if (this.$.footer.firstElementChild) {
      this._footerFocusable = Array.from(this.$.footer.firstElementChild.children).filter(el => !el.hidden)[0];
    }
  }

  _scrollHorizontallyToCell(dstCell) {
    if (dstCell.hasAttribute('frozen') || this._elementMatches(dstCell, '[part~="details-cell"]')) {
      // These cells are, by design, always visible, no need to scroll.
      return;
    }

    const dstCellRect = dstCell.getBoundingClientRect();
    const dstRow = dstCell.parentNode;
    const dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
    const tableRect = this.$.table.getBoundingClientRect();
    let leftBoundary = tableRect.left,
        rightBoundary = tableRect.right;

    for (let i = dstCellIndex - 1; i >= 0; i--) {
      const cell = dstRow.children[i];

      if (cell.hasAttribute('hidden') || this._elementMatches(cell, '[part~="details-cell"]')) {
        continue;
      }

      if (cell.hasAttribute('frozen')) {
        leftBoundary = cell.getBoundingClientRect().right;
        break;
      }
    }

    for (let i = dstCellIndex + 1; i < dstRow.children.length; i++) {
      const cell = dstRow.children[i];

      if (cell.hasAttribute('hidden') || this._elementMatches(cell, '[part~="details-cell"]')) {
        continue;
      }

      if (cell.hasAttribute('frozen')) {
        rightBoundary = cell.getBoundingClientRect().left;
        break;
      }
    }

    if (dstCellRect.left < leftBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.left - leftBoundary);
    }

    if (dstCellRect.right > rightBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.right - rightBoundary);
    }
  }

  _elementMatches(el, query) {
    return el.matches ? el.matches(query) : Array.from(el.parentNode.querySelectorAll(query)).indexOf(el) !== -1;
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-outer-scroller.js?babel-target=es5":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-outer-scroller.js?babel-target=es5 ***!
  \************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * This Element is used internally by vaadin-grid.
 *
 * @private
 */

class GridOuterScrollerElement extends class extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {} {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`;
  }

  static get is() {
    return 'vaadin-grid-outer-scroller';
  }

  static get properties() {
    return {
      scrollTarget: {
        type: Object
      },
      scrollHandler: {
        type: Object
      },
      passthrough: {
        type: Boolean,
        reflectToAttribute: true,
        value: true
      },
      outerScrolling: Boolean,
      noScrollbars: Boolean,
      _touchDevice: Boolean
    };
  }

  ready() {
    super.ready();
    this.addEventListener('scroll', () => this._syncScrollTarget());
    this.parentElement.addEventListener('mousemove', this._onMouseMove.bind(this)); // for some reason scroll bars are hidden in iOS if this style is
    // added in stylesheets or before attaching.

    this.style.webkitOverflowScrolling = 'touch';
    this.addEventListener('mousedown', _ => this.outerScrolling = true);
    this.addEventListener('mouseup', _ => {
      this.outerScrolling = false;

      this.scrollHandler._scrollHandler();
    });
  }

  _onMouseMove(e) {
    // Ignore mousemove events on touch devices
    if (!this._touchDevice) {
      if (this.noScrollbars && this.parentElement.hasAttribute('scroll-period')) {
        this.passthrough = e.offsetY <= this.clientHeight - 20 && e.offsetX <= this.clientWidth - 20;
      } else {
        this.passthrough = e.offsetY <= this.clientHeight && e.offsetX <= this.clientWidth;
      }
    }
  }

  syncOuterScroller() {
    this.scrollTop = this.scrollTarget.scrollTop;
    this.scrollLeft = this.scrollTarget.scrollLeft;
  }

  _syncScrollTarget() {
    requestAnimationFrame(() => {
      this.scrollTarget.scrollTop = this.scrollTop;
      this.scrollTarget.scrollLeft = this.scrollLeft;

      this.scrollHandler._scrollHandler();
    });
  }

}

customElements.define(GridOuterScrollerElement.is, GridOuterScrollerElement);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js?babel-target=es5":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js?babel-target=es5 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: RowDetailsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDetailsMixin", function() { return RowDetailsMixin; });
/* harmony import */ var _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-templatizer.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flush.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * @polymerMixin
 */

const RowDetailsMixin = superClass => class RowDetailsMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing references to items with open row details.
       */
      detailsOpenedItems: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _rowDetailsTemplate: Object,

      /**
       * Custom function for rendering the content of the row details.
       * Receives three arguments:
       *
       * - `root` The row details content DOM element. Append your content to it.
       * - `grid` The `<vaadin-grid>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       */
      rowDetailsRenderer: Function,
      _detailsCells: {
        type: Array
      }
    };
  }

  static get observers() {
    return ['_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)', '_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)'];
  }

  _rowDetailsTemplateOrRendererChanged(rowDetailsTemplate, rowDetailsRenderer) {
    if (rowDetailsTemplate && rowDetailsRenderer) {
      throw new Error('You should only use either a renderer or a template for row details');
    }

    if (rowDetailsTemplate || rowDetailsRenderer) {
      if (rowDetailsTemplate && !rowDetailsTemplate.templatizer) {
        var templatizer = new _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_0__["Templatizer"]();
        templatizer._grid = this;
        templatizer.dataHost = this.dataHost;
        templatizer.template = rowDetailsTemplate;
        rowDetailsTemplate.templatizer = templatizer;
      }

      if (this._columnTree) {
        // Only update the rows if the column tree has already been initialized
        Array.from(this.$.items.children).forEach(row => {
          if (!row.querySelector('[part~=details-cell]')) {
            this._updateRow(row, this._columnTree[this._columnTree.length - 1]);

            this._a11yUpdateRowDetailsOpened(row, false);
          } // Clear any old template instances


          delete row.querySelector('[part~=details-cell]')._instance;
        });
      }

      if (this.detailsOpenedItems.length) {
        Array.from(this.$.items.children).forEach(this._toggleDetailsCell, this);

        this._update();
      }
    }
  }

  _detailsOpenedItemsChanged(changeRecord, rowDetailsTemplate, rowDetailsRenderer) {
    if (changeRecord.path === 'detailsOpenedItems.length' || !changeRecord.value) {
      // Let’s avoid duplicate work of both “.splices” and “.length” updates.
      return;
    }

    Array.from(this.$.items.children).forEach(row => {
      this._toggleDetailsCell(row, row._item);

      this._a11yUpdateRowDetailsOpened(row, this._isDetailsOpened(row._item));

      this._toggleAttribute('details-opened', this._isDetailsOpened(row._item), row);
    });
  }

  _configureDetailsCell(cell) {
    cell.setAttribute('part', 'cell details-cell'); // Freeze the details cell, so that it does not scroll horizontally
    // with the normal cells. This way it looks less weird.

    this._toggleAttribute('frozen', true, cell);
  }

  _toggleDetailsCell(row, item) {
    const cell = row.querySelector('[part~="details-cell"]');

    if (!cell) {
      return;
    }

    const detailsHidden = !this._isDetailsOpened(item);
    const hiddenChanged = !!cell.hidden !== detailsHidden;

    if (!cell._instance && !cell._renderer || cell.hidden !== detailsHidden) {
      cell.hidden = detailsHidden;

      if (detailsHidden) {
        row.style.removeProperty('padding-bottom');
      } else {
        if (this.rowDetailsRenderer) {
          cell._renderer = this.rowDetailsRenderer;

          cell._renderer.call(this, cell._content, this, {
            index: row.index,
            item: item
          });
        } else if (this._rowDetailsTemplate && !cell._instance) {
          // Stamp the template
          cell._instance = this._rowDetailsTemplate.templatizer.createInstance();
          cell._content.innerHTML = '';

          cell._content.appendChild(cell._instance.root);

          this._updateItem(row, item);
        }

        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__["flush"])();
        row.style.setProperty('padding-bottom', `${cell.offsetHeight}px`);
        requestAnimationFrame(() => this.notifyResize());
      }
    }

    if (hiddenChanged) {
      this._updateMetrics();

      this._positionItems();
    }
  }

  _updateDetailsCellHeights() {
    Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(cell => {
      cell.parentElement.style.setProperty('padding-bottom', `${cell.offsetHeight}px`);
    });
  }

  _isDetailsOpened(item) {
    return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
  }
  /**
   * Open the details row of a given item.
   */


  openItemDetails(item) {
    if (!this._isDetailsOpened(item)) {
      this.push('detailsOpenedItems', item);
    }
  }
  /**
   * Close the details row of a given item.
   */


  closeItemDetails(item) {
    if (this._isDetailsOpened(item)) {
      this.splice('detailsOpenedItems', this._getItemIndexInArray(item, this.detailsOpenedItems), 1);
    }
  }

  _detailsOpenedInstanceChangedCallback(instance, value) {
    if (super._detailsOpenedInstanceChangedCallback) {
      super._detailsOpenedInstanceChangedCallback(instance, value);
    }

    if (value) {
      this.openItemDetails(instance.item);
    } else {
      this.closeItemDetails(instance.item);
    }
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js?babel-target=es5":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js?babel-target=es5 ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: ScrollMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollMixin", function() { return ScrollMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * @polymerMixin
 */

const ScrollMixin = superClass => class ScrollMixin extends superClass {
  get _timeouts() {
    return {
      SCROLL_PERIOD: 1000,
      WHEEL_SCROLLING: 200,
      SCROLLING: 100,
      IGNORE_WHEEL: 500
    };
  }

  static get properties() {
    return {
      // Cached array of frozen cells
      _frozenCells: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _scrollbarWidth: {
        type: Number,
        value: function () {
          // Create the measurement node
          var scrollDiv = document.createElement('div');
          scrollDiv.style.width = '100px';
          scrollDiv.style.height = '100px';
          scrollDiv.style.overflow = 'scroll';
          scrollDiv.style.position = 'absolute';
          scrollDiv.style.top = '-9999px';
          document.body.appendChild(scrollDiv); // Get the scrollbar width

          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth; // Delete the DIV

          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        }
      },
      _rowWithFocusedElement: Element,
      _deltaYAcc: {
        type: Number,
        value: 0
      }
    };
  }

  static get observers() {
    return ['_scrollHeightUpdated(_estScrollHeight)'];
  }

  ready() {
    super.ready();
    this.scrollTarget = this.$.table;
    this.addEventListener('wheel', e => {
      this._wheelScrolling = true;
      this._debouncerWheelScrolling = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerWheelScrolling, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.WHEEL_SCROLLING), () => this._wheelScrolling = false);

      this._onWheel(e);
    });
    this.$.table.addEventListener('scroll', e => {
      if (this.$.outerscroller.outerScrolling) {
        e.stopImmediatePropagation();
      }
    }, true);
    this.$.items.addEventListener('focusin', e => {
      const itemsIndex = e.composedPath().indexOf(this.$.items);
      this._rowWithFocusedElement = e.composedPath()[itemsIndex - 1];
    });
    this.$.items.addEventListener('focusout', () => this._rowWithFocusedElement = undefined);
  }

  _onWheel(e) {
    if (e.ctrlKey || this._hasScrolledAncestor(e.target, e.deltaX, e.deltaY)) {
      return;
    }

    var table = this.$.table;
    var deltaY = e.deltaY;

    if (e.deltaMode === 1) {
      // Mode 1 == scrolling by lines instead of pixels
      deltaY *= this._physicalAverage;
    }

    if (this._wheelAnimationFrame) {
      // Skip new wheel events while one is being processed
      this._deltaYAcc += deltaY;
      e.preventDefault();
      return;
    }

    deltaY += this._deltaYAcc;
    this._deltaYAcc = 0;
    this._wheelAnimationFrame = true;
    this._debouncerWheelAnimationFrame = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerWheelAnimationFrame, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], () => this._wheelAnimationFrame = false);
    var momentum = Math.abs(e.deltaX) + Math.abs(deltaY);

    if (this._canScroll(table, e.deltaX, deltaY)) {
      e.preventDefault();
      table.scrollTop += deltaY;
      table.scrollLeft += e.deltaX;

      this._scrollHandler();

      this._hasResidualMomentum = true;
      this._ignoreNewWheel = true;
      this._debouncerIgnoreNewWheel = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerIgnoreNewWheel, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.IGNORE_WHEEL), () => this._ignoreNewWheel = false);
    } else if (this._hasResidualMomentum && momentum <= this._previousMomentum || this._ignoreNewWheel) {
      e.preventDefault();
    } else if (momentum > this._previousMomentum) {
      this._hasResidualMomentum = false;
    }

    this._previousMomentum = momentum;
  }
  /**
   * Determines if the element has an ancestor prior to this
   * cell content that handles the scroll delta
   */


  _hasScrolledAncestor(el, deltaX, deltaY) {
    if (el.localName === 'vaadin-grid-cell-content') {
      return false;
    } else if (this._canScroll(el, deltaX, deltaY) && ['auto', 'scroll'].indexOf(getComputedStyle(el).overflow) !== -1) {
      return true;
    } else if (el !== this && el.parentElement) {
      return this._hasScrolledAncestor(el.parentElement, deltaX, deltaY);
    }
  }
  /**
   * Determines if the the given scroll deltas can be applied to the element
   * (fully or partially)
   */


  _canScroll(el, deltaX, deltaY) {
    return deltaY > 0 && el.scrollTop < el.scrollHeight - el.offsetHeight || deltaY < 0 && el.scrollTop > 0 || deltaX > 0 && el.scrollLeft < el.scrollWidth - el.offsetWidth || deltaX < 0 && el.scrollLeft > 0;
  }

  _scheduleScrolling() {
    if (!this._scrollingFrame) {
      // Defer setting state attributes to avoid Edge hiccups
      this._scrollingFrame = requestAnimationFrame(() => this._toggleAttribute('scrolling', true, this.$.scroller));
    }

    this._debounceScrolling = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debounceScrolling, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.SCROLLING), () => {
      cancelAnimationFrame(this._scrollingFrame);
      delete this._scrollingFrame;

      this._toggleAttribute('scrolling', false, this.$.scroller);

      if (!this.$.outerscroller.outerScrolling) {
        this._reorderRows();
      }
    });

    if (!this._scrollPeriodFrame) {
      this._scrollPeriodFrame = requestAnimationFrame(() => this._toggleAttribute('scroll-period', true, this.$.scroller));
    }

    this._debounceScrollPeriod = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debounceScrollPeriod, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.SCROLL_PERIOD), () => {
      cancelAnimationFrame(this._scrollPeriodFrame);
      delete this._scrollPeriodFrame;

      this._toggleAttribute('scroll-period', false, this.$.scroller);
    });
  }

  _afterScroll() {
    this._translateStationaryElements();

    if (!this.hasAttribute('reordering')) {
      this._scheduleScrolling();
    }

    const os = this.$.outerscroller;

    if (!this._ios && (this._wheelScrolling || os.passthrough)) {
      os.syncOuterScroller();
    }

    if (this._ios) {
      // Enable vertical rubberband feedback
      const overScroll = Math.max(-os.scrollTop, 0) || Math.min(0, os.scrollHeight - os.scrollTop - os.offsetHeight);
      this.$.items.style.transform = `translateY(${overScroll}px)`;
    }

    this._updateOverflow();
  }

  _updateOverflow() {
    // Set overflow styling attributes
    let overflow = '';
    const table = this.$.table;

    if (table.scrollTop < table.scrollHeight - table.clientHeight) {
      overflow += ' bottom';
    }

    if (table.scrollTop > 0) {
      overflow += ' top';
    }

    if (table.scrollLeft < table.scrollWidth - table.clientWidth) {
      overflow += ' right';
    }

    if (table.scrollLeft > 0) {
      overflow += ' left';
    }

    this._debounceOverflow = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debounceOverflow, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], () => {
      const value = overflow.trim();

      if (value.length > 0 && this.getAttribute('overflow') !== value) {
        this.setAttribute('overflow', value);
      } else if (value.length == 0 && this.hasAttribute('overflow')) {
        this.removeAttribute('overflow');
      }
    });
  } // correct order needed for preserving correct tab order between cell contents.


  _reorderRows() {
    const body = this.$.items;
    const items = body.querySelectorAll('tr');

    if (!items.length) {
      return;
    }

    const adjustedVirtualStart = this._virtualStart + this._vidxOffset; // Which row to use as a target?

    const targetRow = this._rowWithFocusedElement || Array.from(items).filter(row => !row.hidden)[0];

    if (!targetRow) {
      // All rows are hidden, don't reorder
      return;
    } // Where the target row should be?


    const targetPhysicalIndex = targetRow.index - adjustedVirtualStart; // Reodrer the DOM elements to keep the target row at the target physical index

    const delta = Array.from(items).indexOf(targetRow) - targetPhysicalIndex;

    if (delta > 0) {
      for (let i = 0; i < delta; i++) {
        body.appendChild(items[i]);
      }
    } else if (delta < 0) {
      for (let i = items.length + delta; i < items.length; i++) {
        body.insertBefore(items[i], items[0]);
      }
    }
  }

  _frozenCellsChanged() {
    this._debouncerCacheElements = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerCacheElements, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["microTask"], () => {
      Array.from(this.root.querySelectorAll('[part~="cell"]')).forEach(function (cell) {
        cell.style.transform = '';
      });
      this._frozenCells = Array.prototype.slice.call(this.$.table.querySelectorAll('[frozen]'));

      this._translateStationaryElements();
    });

    this._updateLastFrozen();
  }

  _updateLastFrozen() {
    if (!this._columnTree) {
      return;
    }

    const columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);

    columnsRow.sort((a, b) => {
      return a._order - b._order;
    });
    const lastFrozen = columnsRow.reduce((prev, col, index) => {
      col._lastFrozen = false;
      return col.frozen && !col.hidden ? index : prev;
    }, undefined);

    if (lastFrozen !== undefined) {
      columnsRow[lastFrozen]._lastFrozen = true;
    }
  }

  _translateStationaryElements() {
    if (this._edge && !this._scrollbarWidth) {
      // Fixed mode (Tablet Edge)
      this.$.items.style.transform = this._getTranslate(-this._scrollLeft || 0, -this._scrollTop || 0);
      this.$.footer.style.transform = this.$.header.style.transform = this._getTranslate(-this._scrollLeft || 0, 0);
    } else {
      this.$.footer.style.transform = this.$.header.style.transform = this._getTranslate(0, this._scrollTop);
    }

    var frozenCellTransform = this._getTranslate(this._scrollLeft, 0);

    for (var i = 0; i < this._frozenCells.length; i++) {
      this._frozenCells[i].style.transform = frozenCellTransform;
    }
  }

  _getTranslate(x, y) {
    return 'translate(' + x + 'px,' + y + 'px)';
  }

  _scrollHeightUpdated(_estScrollHeight) {
    this.$.outersizer.style.top = this.$.fixedsizer.style.top = _estScrollHeight + 'px';
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js?babel-target=es5":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js?babel-target=es5 ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: ScrollerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerElement", function() { return GridScrollerElement; });
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/render-status.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/flush.js?babel-target=es5");
/* harmony import */ var _iron_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iron-list.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/iron-list.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * This Element is used internally by vaadin-grid.
 *
 * @private
 */

class GridScrollerElement extends _iron_list_js__WEBPACK_IMPORTED_MODULE_3__["PolymerIronList"] {
  static get is() {
    return 'vaadin-grid-scroller';
  }

  static get properties() {
    return {
      size: {
        type: Number,
        notify: true
      },
      _vidxOffset: {
        value: 0
      }
    };
  }

  static get observers() {
    return ['_effectiveSizeChanged(_effectiveSize)'];
  }

  connectedCallback() {
    super.connectedCallback();

    this._scrollHandler();
  }
  /**
  * @protected
  */


  _updateScrollerItem(item, index) {}
  /**
  * @protected
  */


  _afterScroll() {}
  /**
  * @protected
  */


  _getRowTarget() {}
  /**
  * @protected
  */


  _createScrollerRows() {}
  /**
  * @protected
  */


  _canPopulate() {}
  /**
  * @private
  */


  scrollToIndex(index) {
    this._warnPrivateAPIAccess('scrollToIndex');

    if (index > 0) {
      this._pendingScrollToIndex = null;
    }

    if (!parseInt(this.$.items.style.borderTopWidth) && index > 0) {
      // Schedule another scroll to be invoked once init is complete
      this._pendingScrollToIndex = index;
    }

    this._scrollingToIndex = true;
    index = Math.min(Math.max(index, 0), this._effectiveSize - 1);
    this.$.table.scrollTop = index / this._effectiveSize * (this.$.table.scrollHeight - this.$.table.offsetHeight);

    this._scrollHandler();

    if (this._accessIronListAPI(() => this._maxScrollTop) && this._virtualCount < this._effectiveSize) {
      this._adjustVirtualIndexOffset(1000000);
    }

    this._accessIronListAPI(() => super.scrollToIndex(index - this._vidxOffset));

    this._scrollHandler(); // Ensure scroll position


    const row = Array.from(this.$.items.children).filter(child => child.index === index)[0];

    if (row) {
      const headerOffset = row.getBoundingClientRect().top - this.$.header.getBoundingClientRect().bottom;

      if (Math.abs(headerOffset) > 1) {
        this.$.table.scrollTop += headerOffset;

        this._scrollHandler();
      }
    }

    this._scrollingToIndex = false;
  }

  _effectiveSizeChanged(size) {
    let fvi; // first visible (adjusted) index

    let fviOffset = 0;

    this._iterateItems((pidx, vidx) => {
      if (vidx === this._firstVisibleIndex) {
        const row = this._physicalItems[pidx];
        fvi = row.index;
        fviOffset = row.getBoundingClientRect().top;
      }
    });

    if (this.items && size < this.items.length) {
      // Size was reduced, scroll to 0 first
      this._scrollTop = 0;
    }

    if (!Array.isArray(this.items)) {
      // Edge/IE seems to have the lowest maximum
      const maxVirtualItems = this._edge || this._ie ? 30000 : 100000;
      this.items = {
        length: Math.min(size, maxVirtualItems)
      };
    }

    this._accessIronListAPI(() => super._itemsChanged({
      path: 'items'
    }));

    this._virtualCount = Math.min(this.items.length, size) || 0;

    if (this._scrollTop === 0) {
      this._accessIronListAPI(() => this._scrollToIndex(Math.min(size - 1, fvi)));

      this._iterateItems((pidx, vidx) => {
        const row = this._physicalItems[pidx];

        if (row.index === fvi) {
          this.$.table.scrollTop += Math.round(row.getBoundingClientRect().top - fviOffset);
        } // Restore keyboard focus to the right cell


        if (row.index === this._focusedItemIndex && this._itemsFocusable && this.$.items.contains(this.shadowRoot.activeElement)) {
          const cellIndex = Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);
          row.children[cellIndex].focus();
        }
      });
    }

    this._assignModels();

    requestAnimationFrame(() => this._update());
  }

  _positionItems() {
    this._adjustScrollPosition();

    let rePosition;

    if (isNaN(this._physicalTop)) {
      rePosition = true;
      this._physicalTop = 0;
    }

    let y = this._physicalTop;

    this._iterateItems((pidx, vidx) => {
      this._physicalItems[pidx].style.transform = `translateY(${y}px)`;
      y += this._physicalSizes[pidx];
    });

    if (rePosition) {
      this._scrollToIndex(0);
    }
  }

  _increasePoolIfNeeded(count) {
    if (count === 0 && this._scrollingToIndex || !this._canPopulate() || !this._effectiveSize) {
      return;
    }

    if (!this._initialPoolCreated) {
      this._initialPoolCreated = true;

      super._increasePoolIfNeeded(25);
    } else if (this._optPhysicalSize !== Infinity) {
      this._debounceIncreasePool = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debounceIncreasePool, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], () => {
        this._updateMetrics();

        const remainingPhysicalSize = this._optPhysicalSize - this._physicalSize;
        let estimatedMissingRowCount = Math.ceil(remainingPhysicalSize / this._physicalAverage);

        if (this._physicalCount + estimatedMissingRowCount > this._effectiveSize) {
          // Do not increase the physical item count above the this._effectiveSize
          estimatedMissingRowCount = Math.max(0, this._effectiveSize - this._physicalCount);
        }

        if (this._physicalSize && estimatedMissingRowCount > 0) {
          super._increasePoolIfNeeded(estimatedMissingRowCount); // Ensure the rows are in order after increasing pool


          this.__reorderChildNodes();
        }
      });
    }
  }

  __reorderChildNodes() {
    const childNodes = Array.from(this.$.items.childNodes);
    const rowsInOrder = !!childNodes.reduce((inOrder, current, currentIndex, array) => {
      if (currentIndex === 0 || array[currentIndex - 1].index === current.index - 1) {
        return inOrder;
      }
    }, true);

    if (!rowsInOrder) {
      childNodes.sort((row1, row2) => {
        return row1.index - row2.index;
      }).forEach(row => this.$.items.appendChild(row));
    }
  }

  _createPool(size) {
    const fragment = document.createDocumentFragment();

    const physicalItems = this._createScrollerRows(size);

    physicalItems.forEach(inst => fragment.appendChild(inst));

    this._getRowTarget().appendChild(fragment); // Weird hack needed to get Safari to actually distribute slots


    const content = this.querySelector('[slot]');

    if (content) {
      const slot = content.getAttribute('slot');
      content.setAttribute('slot', 'foo-bar');
      content.setAttribute('slot', slot);
    }

    this._updateHeaderFooterMetrics();

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_0__["afterNextRender"])(this, () => this.notifyResize());
    return physicalItems;
  }
  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */


  _assignModels(itemSet) {
    this._iterateItems((pidx, vidx) => {
      const el = this._physicalItems[pidx];

      this._toggleAttribute('hidden', vidx >= this._effectiveSize, el);

      this._updateScrollerItem(el, vidx + (this._vidxOffset || 0));
    }, itemSet);
  }

  _scrollHandler() {
    const delta = this.$.table.scrollTop - this._scrollPosition;

    this._accessIronListAPI(super._scrollHandler);

    const oldOffset = this._vidxOffset;

    if (this._accessIronListAPI(() => this._maxScrollTop) && this._virtualCount < this._effectiveSize) {
      this._adjustVirtualIndexOffset(delta);
    }

    if (this._vidxOffset !== oldOffset) {
      this._update();
    }

    this._afterScroll();
  }

  _adjustVirtualIndexOffset(delta) {
    if (Math.abs(delta) > 10000) {
      if (this._noScale) {
        this._noScale = false;
        return;
      }

      const scale = this.$.table.scrollTop / (this.$.table.scrollHeight - this.$.table.offsetHeight);
      const offset = scale * this._effectiveSize;
      this._vidxOffset = Math.round(offset - scale * this._virtualCount);
    } else {
      // Make sure user can always swipe/wheel scroll to the start and end
      const oldOffset = this._vidxOffset || 0;
      const threshold = 1000;
      const maxShift = 100; // At start

      if (this._scrollTop === 0) {
        this._vidxOffset = 0;

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(0);
        }
      } else if (this.firstVisibleIndex < threshold && this._vidxOffset > 0) {
        this._vidxOffset -= Math.min(this._vidxOffset, maxShift);

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this.firstVisibleIndex + (oldOffset - this._vidxOffset));
        }

        this._noScale = true;
      } // At end


      const maxOffset = this._effectiveSize - this._virtualCount;

      if (this._scrollTop >= this._maxScrollTop && this._maxScrollTop > 0) {
        this._vidxOffset = maxOffset;

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this._virtualCount);
        }
      } else if (this.firstVisibleIndex > this._virtualCount - threshold && this._vidxOffset < maxOffset) {
        this._vidxOffset += Math.min(maxOffset - this._vidxOffset, maxShift);

        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this.firstVisibleIndex - (this._vidxOffset - oldOffset));
        }

        this._noScale = true;
      }
    }
  }

  _accessIronListAPI(cb) {
    this._warnPrivateAPIAccessAsyncEnabled = false;
    const returnValue = cb.apply(this);
    this._debouncerWarnPrivateAPIAccess = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncerWarnPrivateAPIAccess, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], () => this._warnPrivateAPIAccessAsyncEnabled = true);
    return returnValue;
  }
  /* Allow iron-list to access its APIs from debounced callbacks without warns */


  _debounceRender(cb, asyncModule) {
    super._debounceRender(() => this._accessIronListAPI(cb), asyncModule);
  }
  /* Warn when iron-list APIs are being accessed directly */


  _warnPrivateAPIAccess(apiName) {
    if (this._warnPrivateAPIAccessAsyncEnabled) {
      console.warn(`Accessing private API (${apiName})!`);
    }
  }

  _render() {
    this._accessIronListAPI(super._render);
  }

  _createFocusBackfillItem() {
    /* Ignore */
  }

  _multiSelectionChanged() {
    /* Ignore */
  }

  clearSelection() {
    /* Ignore */
  }

  _itemsChanged() {
    /* Ignore */
  }

  _manageFocus() {
    /* Ignore */
  }

  _removeFocusedItem() {
    /* Ignore */
  }

  get _firstVisibleIndex() {
    return this._accessIronListAPI(() => super.firstVisibleIndex);
  }

  get _lastVisibleIndex() {
    return this._accessIronListAPI(() => super.lastVisibleIndex);
  }

  _scrollToIndex(index) {
    this._accessIronListAPI(() => this.scrollToIndex(index));
  }

  get firstVisibleIndex() {
    this._warnPrivateAPIAccess('firstVisibleIndex');

    return super.firstVisibleIndex;
  }

  set firstVisibleIndex(value) {
    this._warnPrivateAPIAccess('firstVisibleIndex');

    super.firstVisibleIndex = value;
  }

  get lastVisibleIndex() {
    this._warnPrivateAPIAccess('lastVisibleIndex');

    return super.lastVisibleIndex;
  }

  set lastVisibleIndex(value) {
    this._warnPrivateAPIAccess('lastVisibleIndex');

    super.lastVisibleIndex = value;
  }

  updateViewportBoundaries() {
    this._warnPrivateAPIAccess('updateViewportBoundaries');

    super.updateViewportBoundaries.apply(this, arguments);
  }

  _resizeHandler() {
    super._resizeHandler();

    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])();
  }

}

customElements.define(GridScrollerElement.is, GridScrollerElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js?babel-target=es5":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js?babel-target=es5 ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: SelectionMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMixin", function() { return SelectionMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const SelectionMixin = superClass => class SelectionMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array that contains the selected items.
       */
      selectedItems: {
        type: Object,
        notify: true,
        value: () => []
      }
    };
  }

  static get observers() {
    return ['_selectedItemsChanged(selectedItems.*)'];
  }

  _isSelected(item) {
    return this.selectedItems && this._getItemIndexInArray(item, this.selectedItems) > -1;
  }
  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item object
   */


  selectItem(item) {
    if (!this._isSelected(item)) {
      this.push('selectedItems', item);
    }
  }
  /**
   * Deselects the given item if it is already selected.
   *
   * @method deselect
   * @param {Object} item The item object
   */


  deselectItem(item) {
    const index = this._getItemIndexInArray(item, this.selectedItems);

    if (index > -1) {
      this.splice('selectedItems', index, 1);
    }
  }
  /**
   * Toggles the selected state of the given item.
   *
   * @method toggle
   * @param {Object} item The item object
   */


  _toggleItem(item) {
    const index = this._getItemIndexInArray(item, this.selectedItems);

    if (index === -1) {
      this.selectItem(item);
    } else {
      this.deselectItem(item);
    }
  }

  _selectedItemsChanged(e) {
    if (this.$.items.children.length && (e.path === 'selectedItems' || e.path === 'selectedItems.splices')) {
      Array.from(this.$.items.children).forEach(row => {
        this._updateItem(row, row._item);
      });
    }
  }

  _selectedInstanceChangedCallback(instance, value) {
    if (super._selectedInstanceChangedCallback) {
      super._selectedInstanceChangedCallback(instance, value);
    }

    if (value) {
      this.selectItem(instance.item);
    } else {
      this.deselectItem(instance.item);
    }
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js?babel-target=es5":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js?babel-target=es5 ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: SortMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortMixin", function() { return SortMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * @polymerMixin
 */

const SortMixin = superClass => class SortMixin extends superClass {
  static get properties() {
    return {
      /**
       * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
       */
      multiSort: {
        type: Boolean,
        value: false
      },
      _sorters: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _previousSorters: {
        type: Array,
        value: function () {
          return [];
        }
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener('sorter-changed', this._onSorterChanged); // With Polymer 2 & shady the 'sorter-changed' listener isn't guaranteed to be registered
    // before child <vaadin-grid-sorter>'s upgrade and fire the events. The following
    // makes sure that 'sorter-changed' is fired for all <vaadin-grid-sorter> elements
    // after this (<vaadin-grid>) is ready (and the listeners are active).

    if (window.ShadyDOM) {
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["microTask"].run(() => {
        const sorters = this.querySelectorAll('vaadin-grid-sorter');
        Array.from(sorters).forEach(sorter => {
          // Don't try to fire if the sorter hasn't been upgraded yet
          if (sorter instanceof _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
            sorter.dispatchEvent(new CustomEvent('sorter-changed', {
              bubbles: true,
              composed: true
            }));
          }
        });
      });
    }
  }

  _onSorterChanged(e) {
    const sorter = e.target;

    this._removeArrayItem(this._sorters, sorter);

    sorter._order = null;

    if (this.multiSort) {
      if (sorter.direction) {
        this._sorters.unshift(sorter);
      }

      this._sorters.forEach((sorter, index) => sorter._order = this._sorters.length > 1 ? index : null, this);
    } else {
      if (sorter.direction) {
        this._sorters.forEach(sorter => {
          sorter._order = null;
          sorter.direction = null;
        });

        this._sorters = [sorter];
      }
    }

    e.stopPropagation();

    if (this.dataProvider && // No need to clear cache if sorters didn't change
    JSON.stringify(this._previousSorters) !== JSON.stringify(this._mapSorters())) {
      this.clearCache();
    }

    this._a11yUpdateSorters();

    this._previousSorters = this._mapSorters();
  }

  _mapSorters() {
    return this._sorters.map(sorter => {
      return {
        path: sorter.path,
        direction: sorter.direction
      };
    });
  }

  _removeArrayItem(array, item) {
    const index = array.indexOf(item);

    if (index > -1) {
      array.splice(index, 1);
    }
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js?babel-target=es5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js?babel-target=es5 ***!
  \****************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/elements/dom-module.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


const VaadinGridStyles = document.createElement('dom-module'); // NOTE(web-padawan): https://github.com/vaadin/vaadin-grid/issues/1514

VaadinGridStyles.appendChild(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }
  </style>
`);
const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (safari || firefox) {
  const scrollingStyles = document.createElement('style');
  scrollingStyles.textContent = `[scrolling][safari] #outerscroller, [scrolling][firefox] #outerscroller { pointer-events: auto; } [ios] #outerscroller { pointer-events: auto; z-index: -3; } [ios][scrolling] #outerscroller { z-index: 0; } `;
  VaadinGridStyles.querySelector('template').content.appendChild(scrollingStyles);
}

VaadinGridStyles.register('vaadin-grid-styles');

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js?babel-target=es5":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js?babel-target=es5 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: StylingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingMixin", function() { return StylingMixin; });
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
const StylingMixin = superClass => class StylingMixin extends superClass {
  static get properties() {
    return {
      /**
       * A function that allows generating CSS class names for grid cells
       * based on their row and column. The return value should be the generated
       * class name as a string, or multiple class names separated by whitespace
       * characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      cellClassNameGenerator: Function
    };
  }

  static get observers() {
    return ['__cellClassNameGeneratorChanged(cellClassNameGenerator)'];
  }

  __cellClassNameGeneratorChanged(cellClassGenerator) {
    this.generateCellClassNames();
  }
  /**
   * Runs the `cellClassNameGenerator` for the visible cells.
   * If the generator depends on varying conditions, you need to
   * call this function manually in order to update the styles when
   * the conditions change.
   */


  generateCellClassNames() {
    Array.from(this.$.items.children).filter(row => !row.hidden).forEach(row => this._generateCellClassNames(row, this.__getRowModel(row)));
  }

  _generateCellClassNames(row, rowData) {
    Array.from(row.children).forEach(cell => {
      if (cell.__generatedClasses) {
        cell.__generatedClasses.forEach(className => cell.classList.remove(className));
      }

      if (this.cellClassNameGenerator) {
        const result = this.cellClassNameGenerator(cell._column, rowData);
        cell.__generatedClasses = result && result.split(' ').filter(className => className.length > 0);

        if (cell.__generatedClasses) {
          cell.__generatedClasses.forEach(className => cell.classList.add(className));
        }
      }
    });
  }

};

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js?babel-target=es5":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js?babel-target=es5 ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: Templatizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Templatizer", function() { return GridTemplatizer; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/templatize.js?babel-target=es5");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * `vaadin-grid-templatizer` is a helper element for the `vaadin-grid` that is preparing and
 * stamping instances of cells and columns templates
 *
 * @memberof Vaadin
 * @private
 */

class GridTemplatizer extends class extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {} {
  static get is() {
    return 'vaadin-grid-templatizer';
  }

  static get properties() {
    return {
      dataHost: Object,
      template: Object,
      _templateInstances: {
        type: Array,
        value: function () {
          return [];
        }
      },
      _parentPathValues: {
        value: function () {
          return {};
        }
      },
      _grid: Object
    };
  }

  static get observers() {
    return ['_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)'];
  }

  constructor() {
    super();
    this._instanceProps = {
      detailsOpened: true,
      index: true,
      item: true,
      selected: true,
      expanded: true,
      level: true
    };
  }

  createInstance() {
    this._ensureTemplatized();

    const instance = new this._TemplateClass({});
    this.addInstance(instance);
    return instance;
  }

  addInstance(instance) {
    if (this._templateInstances.indexOf(instance) === -1) {
      this._templateInstances.push(instance);

      requestAnimationFrame(() => this.notifyPath('_templateInstances.*', this._templateInstances));
    }
  }

  removeInstance(instance) {
    const index = this._templateInstances.indexOf(instance);

    this.splice('_templateInstances', index, 1);
  }

  _ensureTemplatized() {
    if (!this._TemplateClass) {
      this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(this.template, this, {
        instanceProps: this._instanceProps,
        parentModel: true,
        forwardHostProp: function (prop, value) {
          this._forwardParentProp(prop, value);

          if (this._templateInstances) {
            this._templateInstances.forEach(inst => inst.notifyPath(prop, value));
          }
        },
        notifyInstanceProp: function (inst, prop, value) {
          if (prop === 'index' || prop === 'item') {
            // We don’t need a change notification for these.
            return;
          }

          const originalProp = `__${prop}__`; // Notify for only user-action changes, not for scrolling updates. E. g.,
          // if `detailsOpened` is different from `__detailsOpened__`, which was set during render.

          if (inst[originalProp] === value) {
            return;
          }

          inst[originalProp] = value;
          const row = Array.from(this._grid.$.items.children).filter(row => this._grid._itemsEqual(row._item, inst.item))[0];

          if (row) {
            Array.from(row.children).forEach(cell => {
              if (cell._instance) {
                cell._instance[originalProp] = value;

                cell._instance.notifyPath(prop, value);
              }
            });
          }

          const itemPrefix = 'item.';

          if (Array.isArray(this._grid.items) && prop.indexOf(itemPrefix) === 0) {
            const itemsIndex = this._grid.items.indexOf(inst.item);

            const path = prop.slice(itemPrefix.length);

            this._grid.notifyPath(`items.${itemsIndex}.${path}`, value);
          }

          const gridCallback = `_${prop}InstanceChangedCallback`;

          if (this._grid && this._grid[gridCallback]) {
            this._grid[gridCallback](inst, value);
          }
        }
      });
    }
  }

  _forwardParentProp(prop, value) {
    this._parentPathValues[prop] = value;

    this._templateInstances.forEach(inst => inst.notifyPath(prop, value));
  }

  _templateInstancesChanged(t, p) {
    let index, count;

    if (t.path === '_templateInstances') {
      // Iterate all instances
      index = 0;
      count = this._templateInstances.length;
    } else if (t.path === '_templateInstances.splices') {
      // Iterate only new instances
      index = t.value.index;
      count = t.value.addedCount;
    } else {
      return;
    }

    Object.keys(this._parentPathValues || {}).forEach(keyName => {
      for (var i = index; i < index + count; i++) {
        this._templateInstances[i].set(keyName, this._parentPathValues[keyName]);
      }
    });
  }

}

customElements.define(GridTemplatizer.is, GridTemplatizer);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js?babel-target=es5":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js?babel-target=es5 ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: GridElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridElement", function() { return GridElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-legacy.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-themable-mixin/1.4.4/node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_scroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-grid-scroller.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_a11y_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-grid-a11y-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-grid-active-item-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_array_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-grid-array-data-provider-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_column_resizing_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-grid-column-resizing-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-grid-data-provider-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_dynamic_columns_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-grid-dynamic-columns-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_event_context_mixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-grid-event-context-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_filter_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-grid-filter-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_row_details_mixin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-grid-row-details-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_scroll_mixin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vaadin-grid-scroll-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_selection_mixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vaadin-grid-selection-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_sort_mixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vaadin-grid-sort-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_styling_mixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vaadin-grid-styling-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_drag_and_drop_mixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vaadin-grid-drag-and-drop-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_keyboard_navigation_mixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vaadin-grid-keyboard-navigation-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_column_reordering_mixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vaadin-grid-column-reordering-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vaadin-grid-column.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_outer_scroller_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vaadin-grid-outer-scroller.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-outer-scroller.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_styles_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vaadin-grid-styles.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-element-mixin/2.1.3/node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/render-status.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/debounce.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/async.js?babel-target=es5");
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
 *
 * `<vaadin-grid>` is a free, high quality data grid / data table Web Component. The content of the
 * the grid can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Quick Start
 *
 * Start with an assigning an array to the [`items`](#/elements/vaadin-grid#property-items) property to visualize your data.
 *
 * Use the [`<vaadin-grid-column>`](#/elements/vaadin-grid-column) element to configure the grid columns. Set `path` and `header`
 * shorthand properties for the columns to define what gets rendered in the cells of the column.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
 *   <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
 *   <vaadin-grid-column path="email"></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * For custom content `vaadin-grid-column` element provides you with three types of `renderer` callback functions: `headerRenderer`,
 * `renderer` and `footerRenderer`.
 *
 * Each of those renderer functions provides `root`, `column`, `rowData` arguments when applicable.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `column`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * Renderers are called on initialization of new column cells and each time the
 * related row data is updated. DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 * ```js
 * const grid = document.querySelector('vaadin-grid');
 * grid.items = [{'name': 'John', 'surname': 'Lennon', 'role': 'singer'},
 *               {'name': 'Ringo', 'surname': 'Starr', 'role': 'drums'}];
 *
 * const columns = grid.querySelectorAll('vaadin-grid-column');
 *
 * columns[0].headerRenderer = function(root) {
 *   root.textContent = 'Name';
 * };
 * columns[0].renderer = function(root, column, rowData) {
 *   root.textContent = rowData.item.name;
 * };
 *
 * columns[1].headerRenderer = function(root) {
 *   root.textContent = 'Surname';
 * };
 * columns[1].renderer = function(root, column, rowData) {
 *   root.textContent = rowData.item.surname;
 * };
 *
 * columns[2].headerRenderer = function(root) {
 *   root.textContent = 'Role';
 * };
 * columns[2].renderer = function(root, column, rowData) {
 *   root.textContent = rowData.item.role;
 * };
 * ```
 *
 * Alternatively, the content can be provided with Polymer's Templates:
 *
 * #### Example:
 * ```html
 * <vaadin-grid items='[{"name": "John", "surname": "Lennon", "role": "singer"},
 * {"name": "Ringo", "surname": "Starr", "role": "drums"}]'>
 *   <vaadin-grid-column>
 *     <template class="header">Name</template>
 *     <template>[[item.name]]</template>
 *   </vaadin-grid-column>
 *   <vaadin-grid-column>
 *     <template class="header">Surname</template>
 *     <template>[[item.surname]]</template>
 *   </vaadin-grid-column>
 *   <vaadin-grid-column>
 *     <template class="header">Role</template>
 *     <template>[[item.role]]</template>
 *   </vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * The following helper elements can be used for further customization:
 * - [`<vaadin-grid-column-group>`](#/elements/vaadin-grid-column-group)
 * - [`<vaadin-grid-filter>`](#/elements/vaadin-grid-filter)
 * - [`<vaadin-grid-sorter>`](#/elements/vaadin-grid-sorter)
 * - [`<vaadin-grid-selection-column>`](#/elements/vaadin-grid-selection-column)
 * - [`<vaadin-grid-tree-toggle>`](#/elements/vaadin-grid-tree-toggle)
 *
 * __Note that the helper elements must be explicitly imported.__
 * If you want to import everything at once you can use the `all-imports.html` bundle.
 *
 * A column template can be decorated with one the following class names to specify its purpose
 * - `header`: Marks a header template
 * - `footer`: Marks a footer template
 * - `row-details`: Marks a row details template
 *
 * The following built-in template variables can be bound to inside the column templates:
 * - `[[index]]`: Number representing the row index
 * - `[[item]]` and it's sub-properties: Data object (provided by a data provider / items array)
 * - `{{selected}}`: True if the item is selected (can be two-way bound)
 * - `{{detailsOpened}}`: True if the item has row details opened (can be two-way bound)
 * - `{{expanded}}`: True if the item has tree sublevel expanded (can be two-way bound)
 * - `[[level]]`: Number of the tree sublevel of the item, first level-items have 0
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<vaadin-grid>` data through the
 * [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) function property.
 * The `<vaadin-grid>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) in
 * the API reference below for the detailed data provider arguments description,
 * and the “Assigning Data” page in the demos.
 *
 * __Note that expanding the tree grid's item will trigger a call to the `dataProvider`.__
 *
 * __Also, note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * grid.dataProvider = function(params, callback) {
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
 * __Alternatively, you can use the `size` property to set the total number of items:__
 *
 * ```javascript
 * grid.size = 200; // The total number of items
 * grid.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(response.employees);
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `row` | Row in the internal table
 * `cell` | Cell in the internal table
 * `header-cell` | Header cell in the internal table
 * `body-cell` | Body cell in the internal table
 * `footer-cell` | Footer cell in the internal table
 * `details-cell` | Row details cell in the internal table
 * `resize-handle` | Handle for resizing the columns
 * `reorder-ghost` | Ghost element of the header cell being dragged
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `loading` | Set when the grid is loading data from data provider | :host
 * `interacting` | Keyboard navigation in interaction mode | :host
 * `navigating` | Keyboard navigation in navigation mode | :host
 * `overflow` | Set when rows are overflowing the grid viewport. Possible values: `top`, `bottom`, `left`, `right` | :host
 * `reordering` | Set when the grid's columns are being reordered | :host
 * `dragover` | Set when the grid (not a specific row) is dragged over | :host
 * `dragging-rows` : Set when grid rows are dragged  | :host
 * `reorder-status` | Reflects the status of a cell while columns are being reordered | cell
 * `frozen` | Frozen cell | cell
 * `last-frozen` | Last frozen cell | cell
* * `first-column` | First visible cell on a row | cell
 * `last-column` | Last visible cell on a row | cell
 * `selected` | Selected row | row
 * `expanded` | Expanded row | row
 * `details-opened` | Row with details open | row
 * `loading` | Row that is waiting for data from data provider | row
 * `odd` | Odd row | row
 * `first` | The first body row | row
 * `dragstart` | Set for one frame when drag of a row is starting. The value is a number when multiple rows are dragged | row
 * `dragover` | Set when the row is dragged over | row
 * `drag-disabled` | Set to a row that isn't available for dragging | row
 * `drop-disabled` | Set to a row that can't be dropped on top of | row
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.Grid.A11yMixin
 * @mixes Vaadin.Grid.ActiveItemMixin
 * @mixes Vaadin.Grid.ArrayDataProviderMixin
 * @mixes Vaadin.Grid.ColumnResizingMixin
 * @mixes Vaadin.Grid.DataProviderMixin
 * @mixes Vaadin.Grid.DynamicColumnsMixin
 * @mixes Vaadin.Grid.FilterMixin
 * @mixes Vaadin.Grid.RowDetailsMixin
 * @mixes Vaadin.Grid.ScrollMixin
 * @mixes Vaadin.Grid.SelectionMixin
 * @mixes Vaadin.Grid.SortMixin
 * @mixes Vaadin.Grid.KeyboardNavigationMixin
 * @mixes Vaadin.Grid.ColumnReorderingMixin
 * @mixes Vaadin.Grid.EventContextMixin
 * @mixes Vaadin.Grid.StylingMixin
 * @mixes Vaadin.Grid.DragAndDropMixin
 * @demo demo/index.html
 */


class GridElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_22__["ElementMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_grid_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__["DataProviderMixin"])(Object(_vaadin_grid_array_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ArrayDataProviderMixin"])(Object(_vaadin_grid_dynamic_columns_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DynamicColumnsMixin"])(Object(_vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ActiveItemMixin"])(Object(_vaadin_grid_scroll_mixin_js__WEBPACK_IMPORTED_MODULE_12__["ScrollMixin"])(Object(_vaadin_grid_selection_mixin_js__WEBPACK_IMPORTED_MODULE_13__["SelectionMixin"])(Object(_vaadin_grid_sort_mixin_js__WEBPACK_IMPORTED_MODULE_14__["SortMixin"])(Object(_vaadin_grid_row_details_mixin_js__WEBPACK_IMPORTED_MODULE_11__["RowDetailsMixin"])(Object(_vaadin_grid_keyboard_navigation_mixin_js__WEBPACK_IMPORTED_MODULE_17__["KeyboardNavigationMixin"])(Object(_vaadin_grid_a11y_mixin_js__WEBPACK_IMPORTED_MODULE_3__["A11yMixin"])(Object(_vaadin_grid_filter_mixin_js__WEBPACK_IMPORTED_MODULE_10__["FilterMixin"])(Object(_vaadin_grid_column_reordering_mixin_js__WEBPACK_IMPORTED_MODULE_18__["ColumnReorderingMixin"])(Object(_vaadin_grid_column_resizing_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ColumnResizingMixin"])(Object(_vaadin_grid_event_context_mixin_js__WEBPACK_IMPORTED_MODULE_9__["EventContextMixin"])(Object(_vaadin_grid_drag_and_drop_mixin_js__WEBPACK_IMPORTED_MODULE_16__["DragAndDropMixin"])(Object(_vaadin_grid_styling_mixin_js__WEBPACK_IMPORTED_MODULE_15__["StylingMixin"])(_vaadin_grid_scroller_js__WEBPACK_IMPORTED_MODULE_2__["ScrollerElement"])))))))))))))))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_23__["html"]`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`;
  }

  static get is() {
    return 'vaadin-grid';
  }

  static get version() {
    return '5.4.6';
  }

  static get observers() {
    return ['_columnTreeChanged(_columnTree, _columnTree.*)'];
  }

  static get properties() {
    return {
      _this: {
        type: Object,
        value: function () {
          return this;
        }
      },
      _safari: {
        type: Boolean,
        value: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      },
      _ios: {
        type: Boolean,
        value: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      },
      _edge: {
        type: Boolean,
        value: typeof CSS !== 'undefined' && CSS.supports('(-ms-ime-align:auto)')
      },
      _ie: {
        type: Boolean,
        value: !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/))
      },
      _firefox: {
        type: Boolean,
        value: navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      },
      _android: {
        type: Boolean,
        value: /android/i.test(navigator.userAgent)
      },
      _touchDevice: {
        type: Boolean,
        value: TOUCH_DEVICE
      },

      /**
       * If true, the grid's height is defined by the number of its rows.
       */
      heightByRows: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_heightByRowsChanged'
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('animationend', this._onAnimationEnd);
  }

  __hasRowsWithClientHeight() {
    return !!Array.from(this.$.items.children).filter(row => row.clientHeight).length;
  }

  __setInitialColumnWidths() {
    if (!this._initialColumnWidthsSet && this.__hasRowsWithClientHeight()) {
      this._initialColumnWidthsSet = true;
      this.recalculateColumnWidths();
    }
  }
  /**
   * @param {Array<Vaadin.GridColumnElement>} cols the columns to auto size based on their content width
   */


  _recalculateColumnWidths(cols) {
    // Note: The `cols.forEach()` loops below could be implemented as a single loop but this has been
    // split for performance reasons to batch these similar actions [write/read] together to avoid
    // unnecessary layout trashing.
    // [write] Set automatic width for all cells (breaks column alignment)
    cols.forEach(col => {
      col.width = 'auto';
      col._origFlexGrow = col.flexGrow;
      col.flexGrow = 0;
    }); // [read] Measure max cell width in each column

    cols.forEach(col => {
      col._currentWidth = 0; // Note: _allCells only contains cells which are currently rendered in DOM

      col._allCells.forEach(c => {
        const cellWidth = Math.ceil(c.getBoundingClientRect().width);
        col._currentWidth = Math.max(col._currentWidth, cellWidth);
      });
    }); // [write] Set column widths to fit widest measured content

    cols.forEach(col => {
      col.width = `${col._currentWidth}px`;
      col.flexGrow = col._origFlexGrow;
      col._currentWidth = undefined;
      col._origFlexGrow = undefined;
    });
  }
  /**
   * Updates the `width` of all columns which have `autoWidth` set to `true`.
   */


  recalculateColumnWidths() {
    if (!this._columnTree) {
      return; // No columns
    }

    const cols = this._getColumns().filter(col => !col.hidden && col.autoWidth);

    this._recalculateColumnWidths(cols);
  }

  _createScrollerRows(count) {
    const rows = [];

    for (var i = 0; i < count; i++) {
      const row = document.createElement('tr');
      row.setAttribute('part', 'row');
      row.setAttribute('role', 'row');

      if (this._columnTree) {
        this._updateRow(row, this._columnTree[this._columnTree.length - 1], 'body', false, true);
      }

      rows.push(row);
    }

    if (this._columnTree) {
      this._columnTree[this._columnTree.length - 1].forEach(c => c.notifyPath && c.notifyPath('_cells.*', c._cells));
    }

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_24__["beforeNextRender"])(this, () => {
      this._updateFirstAndLastColumn();

      this._resetKeyboardNavigation();
    });
    return rows;
  }

  _getRowTarget() {
    return this.$.items;
  }

  _createCell(tagName) {
    const contentId = this._contentIndex = this._contentIndex + 1 || 0;
    const slotName = 'vaadin-grid-cell-content-' + contentId;
    const cellContent = document.createElement('vaadin-grid-cell-content');
    cellContent.setAttribute('slot', slotName);
    const cell = document.createElement(tagName);
    cell.id = slotName.replace('-content-', '-');
    cell.setAttribute('tabindex', '-1');
    cell.setAttribute('role', tagName === 'td' ? 'gridcell' : 'columnheader');
    const slot = document.createElement('slot');
    slot.setAttribute('name', slotName);
    cell.appendChild(slot);
    cell._content = cellContent; // With native Shadow DOM, mousedown on slotted element does not focus
    // focusable slot wrapper, that is why cells are not focused with
    // mousedown. Workaround: listen for mousedown and focus manually.

    cellContent.addEventListener('mousedown', () => {
      if (window.chrome) {
        // Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
        const mouseUpListener = () => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus();
          } // If focus is in the cell content — respect it, do not change.


          document.removeEventListener('mouseup', mouseUpListener, true);
        };

        document.addEventListener('mouseup', mouseUpListener, true);
      } else {
        // Focus on mouseup, on the other hand, removes selection on Safari.
        // Watch out sync focus removal issue, only async focus works here.
        setTimeout(() => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus();
          }
        });
      }
    });
    return cell;
  }

  _updateRow(row, columns, section, isColumnRow, noNotify) {
    section = section || 'body';
    const contentsFragment = document.createDocumentFragment();
    Array.from(row.children).forEach(cell => cell._vacant = true);
    row.innerHTML = '';

    if (row.id !== 'outersizer' && row.id !== 'fixedsizer') {
      row.hidden = true;
    }

    columns.forEach((column, index) => {
      let cell;

      if (section === 'body') {
        // Body
        column._cells = column._cells || [];
        cell = column._cells.filter(cell => cell._vacant)[0];

        if (!cell) {
          cell = this._createCell('td');

          column._cells.push(cell);
        }

        cell.setAttribute('part', 'cell body-cell');
        row.appendChild(cell);

        if (index === columns.length - 1 && (this._rowDetailsTemplate || this.rowDetailsRenderer)) {
          // Add details cell as last cell to body rows
          this._detailsCells = this._detailsCells || [];

          const detailsCell = this._detailsCells.filter(cell => cell._vacant)[0] || this._createCell('td');

          if (this._detailsCells.indexOf(detailsCell) === -1) {
            this._detailsCells.push(detailsCell);
          }

          if (!detailsCell._content.parentElement) {
            contentsFragment.appendChild(detailsCell._content);
          }

          this._configureDetailsCell(detailsCell);

          row.appendChild(detailsCell);

          this._a11ySetRowDetailsCell(row, detailsCell);

          detailsCell._vacant = false;
        }

        if (column.notifyPath && !noNotify) {
          column.notifyPath('_cells.*', column._cells);
        }
      } else {
        // Header & footer
        const tagName = section === 'header' ? 'th' : 'td';

        if (isColumnRow || column.localName === 'vaadin-grid-column-group') {
          cell = column[`_${section}Cell`] || this._createCell(tagName);
          cell._column = column;
          row.appendChild(cell);
          column[`_${section}Cell`] = cell;
        } else {
          column._emptyCells = column._emptyCells || [];
          cell = column._emptyCells.filter(cell => cell._vacant)[0] || this._createCell(tagName);
          cell._column = column;
          row.appendChild(cell);

          if (column._emptyCells.indexOf(cell) === -1) {
            column._emptyCells.push(cell);
          }
        }

        cell.setAttribute('part', `cell ${section}-cell`);

        this.__updateHeaderFooterRowVisibility(row);
      }

      if (!cell._content.parentElement) {
        contentsFragment.appendChild(cell._content);
      }

      cell._vacant = false;
      cell._column = column;
    }); // Might be empty if only cache was used

    this.appendChild(contentsFragment);

    this._frozenCellsChanged();

    this._updateFirstAndLastColumnForRow(row);
  }

  __updateHeaderFooterRowVisibility(row) {
    if (!row) {
      return;
    }

    const visibleRowCells = Array.from(row.children).filter(cell => {
      const column = cell._column;

      if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) {
        // The cell is an "empty cell"  -> doesn't block hiding the row
        return false;
      }

      if (row.parentElement === this.$.header) {
        if (column.headerRenderer || column._headerTemplate) {
          // The cell is the header cell of a column that has a header renderer
          // or a header template -> row should be visible
          return true;
        }

        if (column.header === null) {
          // The column header is explicilty set to null -> doesn't block hiding the row
          return false;
        }

        if (column.path || column.header !== undefined) {
          // The column has an explicit non-null header or a path that generates a header
          // -> row should be visible
          return true;
        }
      } else {
        if (column.footerRenderer || column._footerTemplate) {
          // The cell is the footer cell of a column that has a footer renderer
          // or a footer template -> row should be visible
          return true;
        }
      }
    });

    if (row.hidden !== !visibleRowCells.length) {
      row.hidden = !visibleRowCells.length;
      this.notifyResize();
    }
  }

  _updateScrollerItem(row, index) {
    this._preventScrollerRotatingCellFocus(row, index);

    if (!this._columnTree) {
      return;
    }

    this._toggleAttribute('first', index === 0, row);

    this._toggleAttribute('odd', index % 2, row);

    this._a11yUpdateRowRowindex(row, index);

    this._getItem(index, row);
  }

  _columnTreeChanged(columnTree, splices) {
    Array.from(this.$.items.children).forEach(row => this._updateRow(row, columnTree[columnTree.length - 1]));

    while (this.$.header.children.length < columnTree.length) {
      const headerRow = document.createElement('tr');
      headerRow.setAttribute('part', 'row');
      headerRow.setAttribute('role', 'row');
      this.$.header.appendChild(headerRow);
      const footerRow = document.createElement('tr');
      footerRow.setAttribute('part', 'row');
      footerRow.setAttribute('role', 'row');
      this.$.footer.appendChild(footerRow);
    }

    while (this.$.header.children.length > columnTree.length) {
      this.$.header.removeChild(this.$.header.firstElementChild);
      this.$.footer.removeChild(this.$.footer.firstElementChild);
    }

    Array.from(this.$.header.children).forEach((headerRow, index) => this._updateRow(headerRow, columnTree[index], 'header', index === columnTree.length - 1));
    Array.from(this.$.footer.children).forEach((footerRow, index) => this._updateRow(footerRow, columnTree[columnTree.length - 1 - index], 'footer', index === 0)); // Sizer rows

    this._updateRow(this.$.outersizer, columnTree[columnTree.length - 1]);

    this._updateRow(this.$.fixedsizer, columnTree[columnTree.length - 1]);

    this._resizeHandler();

    this._frozenCellsChanged();

    this._updateFirstAndLastColumn();

    this._resetKeyboardNavigation();

    this._a11yUpdateHeaderRows();

    this._a11yUpdateFooterRows();
  }

  _updateItem(row, item) {
    row._item = item;

    const model = this.__getRowModel(row);

    this._toggleAttribute('selected', model.selected, row);

    this._a11yUpdateRowSelected(row, model.selected);

    this._a11yUpdateRowLevel(row, model.level);

    this._toggleAttribute('expanded', model.expanded, row);

    if (this._rowDetailsTemplate || this.rowDetailsRenderer) {
      this._toggleDetailsCell(row, item);
    }

    this._generateCellClassNames(row, model);

    this._filterDragAndDrop(row, model);

    Array.from(row.children).forEach(cell => {
      if (cell._renderer) {
        const owner = cell._column || this;

        cell._renderer.call(owner, cell._content, owner, model);
      } else if (cell._instance) {
        cell._instance.__detailsOpened__ = model.detailsOpened;
        cell._instance.__selected__ = model.selected;
        cell._instance.__level__ = model.level;
        cell._instance.__expanded__ = model.expanded;

        cell._instance.setProperties(model);
      }
    });
    this._debouncerUpdateHeights = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_25__["Debouncer"].debounce(this._debouncerUpdateHeights, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_26__["timeOut"].after(1), () => {
      this._updateMetrics();

      this._positionItems();

      this._updateScrollerSize();
    });
  }

  _resizeHandler() {
    this._updateDetailsCellHeights();

    this._accessIronListAPI(super._resizeHandler, true);

    this._updateHeaderFooterMetrics();
  }

  _updateHeaderFooterMetrics() {
    const headerHeight = this.$.header.clientHeight + 'px';
    const footerHeight = this.$.footer.clientHeight + 'px';
    [this.$.outersizer, this.$.fixedsizer, this.$.items].forEach(element => {
      element.style.borderTopWidth = headerHeight;
      element.style.borderBottomWidth = footerHeight;
    });
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_24__["afterNextRender"])(this.$.header, () => {
      if (this._pendingScrollToIndex) {
        this._scrollToIndex(this._pendingScrollToIndex);
      }
    });
  }

  _onAnimationEnd(e) {
    // ShadyCSS applies scoping suffixes to animation names
    if (e.animationName.indexOf('vaadin-grid-appear') === 0) {
      this._render();

      this._updateHeaderFooterMetrics();

      e.stopPropagation();
      this.notifyResize();

      this.__setInitialColumnWidths();
    }
  }

  _toggleAttribute(name, bool, node) {
    if (node.hasAttribute(name) === !bool) {
      if (bool) {
        node.setAttribute(name, '');
      } else {
        node.removeAttribute(name);
      }
    }
  }

  __getRowModel(row) {
    return {
      index: row.index,
      item: row._item,
      level: this._getIndexLevel(row.index),
      expanded: this._isExpanded(row._item),
      selected: this._isSelected(row._item),
      detailsOpened: !!(this._rowDetailsTemplate || this.rowDetailsRenderer) && this._isDetailsOpened(row._item)
    };
  }
  /**
   * Manually invoke existing renderers for all the columns
   * (header, footer and body cells) and opened row details.
   */


  render() {
    if (this._columnTree) {
      // header and footer renderers
      this._columnTree.forEach(level => {
        level.forEach(column => column._renderHeaderAndFooter());
      }); // body and row details renderers


      this._update();
    }
  }
  /**
   * Updates the computed metrics and positioning of internal grid parts
   * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
   * content changes asynchronously to ensure consistent appearance (e.g. when a
   * contained image whose bounds aren't known beforehand finishes loading).
   */


  notifyResize() {
    super.notifyResize();
  }

  _heightByRowsChanged(value, oldValue) {
    if (value || oldValue) {
      this.notifyResize();
    }
  }

  __forceReflow() {
    this._debouncerForceReflow = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_25__["Debouncer"].debounce(this._debouncerForceReflow, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_26__["animationFrame"], () => {
      this.$.scroller.style.overflow = 'hidden';
      setTimeout(() => this.$.scroller.style.overflow = '');
    });
  }

}
/**
 * Fired when the columns in the grid are reordered.
 *
 * @event column-reorder
 * @param {Object} detail
 * @param {Object} detail.columns the columns in the new order
 */


customElements.define(GridElement.is, GridElement);


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter-column.js?babel-target=es5":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter-column.js?babel-target=es5 ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-filter.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter.js?babel-target=es5");
/* harmony import */ var _src_vaadin_grid_filter_column_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-grid-filter-column.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js?babel-target=es5");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter.js?babel-target=es5":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter.js?babel-target=es5 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js?babel-target=es5");
/* harmony import */ var _src_vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-grid-filter.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js?babel-target=es5");



/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-styles.js?babel-target=es5":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-styles.js?babel-target=es5 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_checkbox_theme_lumo_vaadin_checkbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-checkbox/2.2.10/node_modules/@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");








const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js?babel-target=es5":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js?babel-target=es5 ***!
  \****************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/font-icons.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_checkbox_theme_lumo_vaadin_checkbox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-checkbox/2.2.10/node_modules/@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js?babel-target=es5");
/* harmony import */ var _vaadin_grid_styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-grid-styles.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-styles.js?babel-target=es5");
/* harmony import */ var _src_vaadin_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/vaadin-grid.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js?babel-target=es5");










/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/vaadin-grid-filter-column.js?babel-target=es5":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/vaadin-grid-filter-column.js?babel-target=es5 ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_grid_filter_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-grid-filter-column.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid-filter-column.js?babel-target=es5");


/***/ }),

/***/ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/vaadin-grid.js?babel-target=es5":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/vaadin-grid.js?babel-target=es5 ***!
  \*****************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-grid.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js?babel-target=es5");


/***/ })

}]);
//# sourceMappingURL=vendors~list.es5.80bde7f6.js.map