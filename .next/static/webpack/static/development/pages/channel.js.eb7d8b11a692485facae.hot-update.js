webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/podcast/index.js":
/*!*************************************!*\
  !*** ./components/podcast/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/slug */ "./helpers/slug.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/podcast/styles.js");






var Podcast = function Podcast(_ref) {
  var podcast = _ref.podcast;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "podcast",
    params: {
      idChannel: podcast.channel.id,
      slugChannel: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(podcast.channel.title),
      id: podcast.id,
      slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(podcast.title)
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "podcast"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "podcast__title"
  }, podcast.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "podcast__duration"
  }, Math.floor(podcast.duration / 60), "m"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash
  }, _styles__WEBPACK_IMPORTED_MODULE_4__["default"])));
};

/* harmony default export */ __webpack_exports__["default"] = (Podcast);

/***/ })

})
//# sourceMappingURL=channel.js.eb7d8b11a692485facae.hot-update.js.map