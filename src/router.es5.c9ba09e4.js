(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["router.es5"],{

/***/ "./src/routes/router.js?f7a4":
/*!******************************!*\
  !*** ./src/routes/router.js ***!
  \******************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _vaadin_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/router?babel-target=es5 */ "../rbd/pnpm-volume/3a0a9e71-e5ee-4cb5-920f-b1d1d162b574/node_modules/.registry.npmjs.org/@vaadin/router/1.2.1/node_modules/@vaadin/router/dist/vaadin-router.js?babel-target=es5");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urls?babel-target=es5 */ "./src/routes/urls.js?babel-target=es5");


function init(outlet) {
  const router = new _vaadin_router__WEBPACK_IMPORTED_MODULE_0__["Router"](outlet);
  router.setRoutes([{
    path: '/',
    redirect: _urls__WEBPACK_IMPORTED_MODULE_1__["EMPLOYEE_LIST"]
  }, {
    path: _urls__WEBPACK_IMPORTED_MODULE_1__["EMPLOYEE_LIST"],
    component: 'employee-list',
    action: () => {
      Promise.all(/*! import() | list.es5 */[__webpack_require__.e("vendors~list.es5~new.es5"), __webpack_require__.e("vendors~list.es5"), __webpack_require__.e("list.es5")]).then(__webpack_require__.bind(null, /*! ../views/employee-list?babel-target=es5 */ "./src/views/employee-list.js?b411"));
    }
  }, {
    path: _urls__WEBPACK_IMPORTED_MODULE_1__["NEW_EMPLOYEE"],
    component: 'employee-new',
    action: () => {
      Promise.all(/*! import() | new.es5 */[__webpack_require__.e("vendors~list.es5~new.es5"), __webpack_require__.e("vendors~new.es5"), __webpack_require__.e("new.es5")]).then(__webpack_require__.bind(null, /*! ../views/employee-new?babel-target=es5 */ "./src/views/employee-new.js?9156"));
    }
  }, {
    path: '(.*)+',
    component: 'app-404',
    action: () => {
      __webpack_require__.e(/*! import() | 404.es5 */ "404.es5").then(__webpack_require__.bind(null, /*! ../views/404?babel-target=es5 */ "./src/views/404.js?e1bc"));
    }
  }]);
}

/***/ })

}]);
//# sourceMappingURL=router.es5.c9ba09e4.js.map