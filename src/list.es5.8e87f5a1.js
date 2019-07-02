(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{133:function(a,e,r){"use strict";r(49),r(73),r(65),r(71),r(67);var i=r(5),t=r(79);Object(t.a)(i.a`
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
`)},191:function(a,e,r){"use strict";r.r(e);var i=r(17),t=r(5);r(179),r(200),r(210),r(133);class s extends i.a{static get template(){return t.a`
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
//# sourceMappingURL=list.es5.8e87f5a1.js.map