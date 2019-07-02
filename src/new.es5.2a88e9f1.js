(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new.es5"],{

/***/ "./src/styles/shared-styles.js?babel-target=es5":
/*!******************************************************!*\
  !*** ./src/styles/shared-styles.js?babel-target=es5 ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/color.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/sizing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/spacing.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/style.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-lumo-styles/1.5.0/node_modules/@vaadin/vaadin-lumo-styles/typography.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/* harmony import */ var _style_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style-utils.js?babel-target=es5 */ "./src/styles/style-utils.js?babel-target=es5");







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

/***/ "./src/views/employee-new.js?9156":
/*!***********************************!*\
  !*** ./src/views/employee-new.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/polymer-element.js?babel-target=es5");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/polymer/3.3.0/node_modules/@polymer/polymer/lib/utils/html-tag.js?babel-target=es5");
/* harmony import */ var _polymer_iron_form_iron_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-form/iron-form.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@polymer/iron-form/3.0.1/node_modules/@polymer/iron-form/iron-form.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_button_vaadin_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-button/vaadin-button.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-button/2.2.0/node_modules/@vaadin/vaadin-button/vaadin-button.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_checkbox_vaadin_checkbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-checkbox/vaadin-checkbox.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-checkbox/2.2.10/node_modules/@vaadin/vaadin-checkbox/vaadin-checkbox.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-combo-box/5.0.4/node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-date-picker/4.0.2/node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_dialog_vaadin_dialog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-dialog/vaadin-dialog.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-dialog/2.2.1/node_modules/@vaadin/vaadin-dialog/vaadin-dialog.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_select_vaadin_select_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-select/vaadin-select.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-select/2.1.5/node_modules/@vaadin/vaadin-select/vaadin-select.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_form_layout_vaadin_form_layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vaadin/vaadin-form-layout/vaadin-form-layout.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/vaadin-form-layout.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_form_layout_vaadin_form_item_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-form-layout/vaadin-form-item.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-form-layout/2.1.4/node_modules/@vaadin/vaadin-form-layout/vaadin-form-item.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_item_vaadin_item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vaadin/vaadin-item/vaadin-item.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-item/2.1.1/node_modules/@vaadin/vaadin-item/vaadin-item.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_list_box_vaadin_list_box_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vaadin/vaadin-list-box/vaadin-list-box.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-list-box/1.1.1/node_modules/@vaadin/vaadin-list-box/vaadin-list-box.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_notification_vaadin_notification_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vaadin/vaadin-notification/vaadin-notification.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-notification/1.4.0/node_modules/@vaadin/vaadin-notification/vaadin-notification.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_ordered_layout_vaadin_vertical_layout_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-ordered-layout/1.1.0/node_modules/@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_radio_button_vaadin_radio_group_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vaadin/vaadin-radio-button/vaadin-radio-group.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/vaadin-radio-group.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_radio_button_vaadin_radio_button_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vaadin/vaadin-radio-button/vaadin-radio-button.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-radio-button/1.2.3/node_modules/@vaadin/vaadin-radio-button/vaadin-radio-button.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_text_field_vaadin_email_field_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @vaadin/vaadin-text-field/vaadin-email-field.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/vaadin-email-field.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_text_field_vaadin_text_area_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @vaadin/vaadin-text-field/vaadin-text-area.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-text-field/2.4.7/node_modules/@vaadin/vaadin-text-field/vaadin-text-area.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_time_picker_vaadin_time_picker_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @vaadin/vaadin-time-picker/vaadin-time-picker.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-time-picker/2.0.1/node_modules/@vaadin/vaadin-time-picker/vaadin-time-picker.js?babel-target=es5");
/* harmony import */ var _vaadin_vaadin_upload_vaadin_upload_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @vaadin/vaadin-upload/vaadin-upload.js?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/vaadin-upload/4.2.2/node_modules/@vaadin/vaadin-upload/vaadin-upload.js?babel-target=es5");
/* harmony import */ var _styles_shared_styles_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../styles/shared-styles.js?babel-target=es5 */ "./src/styles/shared-styles.js?babel-target=es5");
/* harmony import */ var _routes_urls__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../routes/urls?babel-target=es5 */ "./src/routes/urls.js?babel-target=es5");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../routes/utils?babel-target=es5 */ "./src/routes/utils.js?babel-target=es5");
























/**
 * New employee view.
 *
 * @class EmployeeNew
 * @extends {PolymerElement}
 */

class EmployeeNew extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div class="card">
        <iron-form id="form">
          <form>
            <vaadin-vertical-layout>
              <h2>Register a new employee</h2>
              <vaadin-form-layout>
                <vaadin-form-item>
                  <label slot="label">Title</label>
                  <vaadin-select class="full-width">
                    <template>
                      <vaadin-list-box>
                        <vaadin-item>Mr</vaadin-item>
                        <vaadin-item>Mrs</vaadin-item>
                        <vaadin-item>Ms</vaadin-item>
                        <vaadin-item>Miss</vaadin-item>
                        <vaadin-item>Other</vaadin-item>
                      </vaadin-list-box>
                    </template>
                  </vaadin-select>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">First Name</label>
                  <vaadin-text-field
                    required
                    error-message="Please enter first name"
                    class="full-width"
                  ></vaadin-text-field>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Last Name</label>
                  <vaadin-text-field
                    required
                    error-message="Please enter last name"
                    class="full-width"
                  ></vaadin-text-field>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Email</label>
                  <vaadin-email-field
                    required
                    error-message="Please enter email"
                    class="full-width"
                  ></vaadin-email-field>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Birth date</label>
                  <vaadin-date-picker class="full-width"></vaadin-date-picker>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Dietary Restrictions</label>
                  <vaadin-combo-box
                    class="full-width"
                    items="[[dietarys]]"
                  ></vaadin-combo-box>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Add profile picture</label>
                  <vaadin-upload
                    class="full-width"
                    max-files="1"
                  ></vaadin-upload>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Preferred language</label>
                  <vaadin-radio-group value="{{radioValue}}">
                    <vaadin-radio-button value="en">
                      English
                    </vaadin-radio-button>
                    <vaadin-radio-button value="fr">
                      French
                    </vaadin-radio-button>
                    <vaadin-radio-button value="de">
                      German
                    </vaadin-radio-button>
                  </vaadin-radio-group>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Arrival hour</label>
                  <vaadin-time-picker class="full-width"></vaadin-time-picker>
                </vaadin-form-item>

                <vaadin-form-item>
                  <label slot="label">Departure</label>
                  <vaadin-time-picker class="full-width"></vaadin-time-picker>
                </vaadin-form-item>

                <vaadin-form-item colspan="2">
                  <label slot="label">Free word (allergies)</label>
                  <vaadin-text-area class="full-width"></vaadin-text-area>
                </vaadin-form-item>

                <vaadin-form-item colspan="2">
                  <vaadin-checkbox checked="{{_canSubmit}}">
                    I have read the
                    <a href="#" on-click="toggleDialog">terms and conditions</a>
                  </vaadin-checkbox>
                </vaadin-form-item>

                <vaadin-form-item colspan="2">
                  <vaadin-button
                    disabled$="[[!_canSubmit]]"
                    on-click="_submitForm"
                    >Submit
                  </vaadin-button>
                </vaadin-form-item>
              </vaadin-form-layout>
            </vaadin-vertical-layout>
          </form>
        </iron-form>
      </div>

      <vaadin-notification opened="{{formSubmittedOpen}}" duration="2000">
        <template>
          <div>
            <p><b>Submitted</b></p>
            <p>Your registration was successful</p>
          </div>
        </template>
      </vaadin-notification>

      <vaadin-notification opened="{{formInvalidOpen}}">
        <template>
          <div>
            <p><b>Some fields invalid</b></p>
            <p>Please fill all the required fields and try again</p>
          </div>
        </template>
      </vaadin-notification>

      <vaadin-dialog
        no-close-on-esc
        no-close-on-outside-click
        opened="{{dialogOpen}}"
      >
        <template>
          <vaadin-vertical-layout theme="spacing">
            <div>
              <p><b>Terms and conditions</b></p>
              <p>
                This software might just work or not, there is no third option.
              </p>
            </div>
            <vaadin-button on-click="toggleDialog">Ok</vaadin-button>
          </vaadin-vertical-layout>
        </template>
      </vaadin-dialog>
    `;
  }

  static get is() {
    return 'employee-new';
  }

  static get properties() {
    return {
      dietarys: {
        type: Array,
        value: () => ['Ovo-Vegetarian', 'Lacto-Vegetarian', 'Lacto-Ovo Vegetarians', 'Pescetarians', 'Other']
      },
      dialogOpen: Boolean,
      formSubmittedOpen: {
        type: Boolean,
        observer: '_formSubmittedOpenChanged'
      },
      formInvalidOpen: Boolean,
      radioValue: String
    };
  }

  toggleDialog(e) {
    e.stopPropagation();
    e.preventDefault();
    this.dialogOpen = !this.dialogOpen;
  }

  _formSubmittedOpenChanged(value, oldValue) {
    // once notification is closed, redirect to the list page
    if (oldValue && !value) {
      Object(_routes_utils__WEBPACK_IMPORTED_MODULE_23__["navigateTo"])(_routes_urls__WEBPACK_IMPORTED_MODULE_22__["EMPLOYEE_LIST"]);
    }
  }

  _submitForm() {
    if (this.$.form.validate()) {
      this.formSubmittedOpen = true;
    } else {
      this.formInvalidOpen = true;
    }
  }

}

customElements.define(EmployeeNew.is, EmployeeNew);

/***/ })

}]);
//# sourceMappingURL=new.es5.2a88e9f1.js.map