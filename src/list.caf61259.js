(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(a,e,r){"use strict";r(48),r(72),r(64),r(70),r(66);var i=r(4),t=r(78);Object(t.a)(i.a`
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
`)},183:function(a,e,r){"use strict";r.r(e);var i=r(16),t=r(4);r(180),r(199),r(212),r(131);class s extends i.a{static get template(){return t.a`
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
    `}static get is(){return"employee-list"}static get properties(){return{_employees:{type:Array,value:()=>[]}}}}customElements.define(s.is,s)}}]);
//# sourceMappingURL=list.caf61259.js.map