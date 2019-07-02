(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list"],{

/***/ "./src/styles/shared-styles.js?babel-target=es6":
/*!******************************************************!*\
  !*** ./src/styles/shared-styles.js?babel-target=es6 ***!
  \******************************************************/
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
/* harmony import */ var _style_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style-utils.js?babel-target=es6 */ "./src/styles/style-utils.js?babel-target=es6");







Object(_style_utils_js__WEBPACK_IMPORTED_MODULE_6__["inject"])(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
  <dom-module id="shared-styles">
    <template>
      <style include="lumo-color lumo-typography">
        h2 {
          margin: var(--lumo-space-m) 0;
        }
        .card {
          margin: var(--lumo-space-m);
          padding: var(--lumo-space-m);
          border: 1px solid var(--lumo-contrast-10pct);
          border-radius: var(--lumo-border-radius);
          background: var(--lumo-base-color);
        }
      </style>
    </template>
  </dom-module>
`);

/***/ }),

/***/ "./src/views/employee-list.js?a2a7":
/*!************************************!*\
  !*** ./src/views/employee-list.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es6");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es6");
/* harmony import */ var _polymer_iron_ajax_iron_ajax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-ajax/iron-ajax.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-ajax/3.0.1/node_modules/@polymer/iron-ajax/iron-ajax.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_grid_vaadin_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-grid/vaadin-grid.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/vaadin-grid.js?babel-target=es6");
/* harmony import */ var _vaadin_vaadin_grid_vaadin_grid_filter_column_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-grid/vaadin-grid-filter-column.js?babel-target=es6 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-grid/5.4.6/node_modules/@vaadin/vaadin-grid/vaadin-grid-filter-column.js?babel-target=es6");
/* harmony import */ var _styles_shared_styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/shared-styles.js?babel-target=es6 */ "./src/styles/shared-styles.js?babel-target=es6");






/**
 * Employee list view.
 *
 * @class EmployeeList
 * @extends {PolymerElement}
 */

class EmployeeList extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="shared-styles">
        :host {
          display: block;
        }
        vaadin-grid-filter,
        vaadin-text-field {
          width: 100%;
        }
      </style>

      <iron-ajax
        auto
        url="/api/users"
        handle-as="json"
        last-response="{{_employees}}"
      ></iron-ajax>

      <div class="card">
        <vaadin-grid items="[[_employees]]">
          <vaadin-grid-filter-column
            path="firstName"
          ></vaadin-grid-filter-column>
          <vaadin-grid-filter-column
            path="lastName"
          ></vaadin-grid-filter-column>
          <vaadin-grid-column path="email"></vaadin-grid-column>
        </vaadin-grid>
      </div>
    `;
  }

  static get is() {
    return 'employee-list';
  }

  static get properties() {
    return {
      _employees: {
        type: Array,
        value: () => []
      }
    };
  }

}

customElements.define(EmployeeList.is, EmployeeList);

/***/ })

}]);
//# sourceMappingURL=list.c0321a79.js.map