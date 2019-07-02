(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{131:function(a,e,i){"use strict";i(48),i(72),i(64),i(70),i(66);var t=i(4),l=i(78);Object(l.a)(t.a`
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
`)},184:function(a,e,i){"use strict";i.r(e);var t=i(16),l=i(4),o=(i(185),i(186),i(116),i(216),i(201),i(218),i(207),i(222),i(226),i(187),i(188),i(225),i(211),i(223),i(189),i(227),i(221),i(205),i(204),i(131),i(87)),d=i(103);class n extends t.a{static get template(){return l.a`
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
//# sourceMappingURL=new.716ddf0f.js.map