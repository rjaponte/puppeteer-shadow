(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(a,e,i){"use strict";i(49),i(73),i(65),i(71),i(67);var t=i(5),l=i(79);Object(l.a)(t.a`
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
`)},192:function(a,e,i){"use strict";i.r(e);var t=i(17),l=i(5),o=(i(193),i(194),i(120),i(214),i(202),i(213),i(208),i(224),i(220),i(195),i(196),i(219),i(209),i(217),i(197),i(228),i(215),i(206),i(203),i(133),i(88)),d=i(106);class n extends t.a{static get template(){return l.a`
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
    `}static get is(){return"employee-new"}static get properties(){return{dietarys:{type:Array,value:()=>["Ovo-Vegetarian","Lacto-Vegetarian","Lacto-Ovo Vegetarians","Pescetarians","Other"]},dialogOpen:Boolean,formSubmittedOpen:{type:Boolean,observer:"_formSubmittedOpenChanged"},formInvalidOpen:Boolean,radioValue:String}}toggleDialog(a){a.stopPropagation(),a.preventDefault(),this.dialogOpen=!this.dialogOpen}_formSubmittedOpenChanged(a,e){e&&!a&&Object(d.a)(o.a)}_submitForm(){this.$.form.validate()?this.formSubmittedOpen=!0:this.formInvalidOpen=!0}}customElements.define(n.is,n)}}]);
//# sourceMappingURL=new.es5.188813ef.js.map