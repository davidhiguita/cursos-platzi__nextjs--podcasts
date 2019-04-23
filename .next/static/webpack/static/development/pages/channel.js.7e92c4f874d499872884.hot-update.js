webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/modal-podcast/index.js":
/*!*******************************************!*\
  !*** ./components/modal-podcast/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/modal-podcast/styles.js");






var ModalPodcast = function ModalPodcast(_ref) {
  var audio_clip = _ref.audio_clip,
      onClose = _ref.onClose;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headerTitle: audio_clip.title,
    title: audio_clip.title
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal-podcast"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: onClose,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal-podcast__close-button"
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal-podcast__image"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: audio_clip.channel.urls.logo_image.original,
    alt: audio_clip.title,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal-podcast__description"
  }, audio_clip.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal-podcast__channel"
  }, audio_clip.channel.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal-podcast__audio"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    controls: true,
    autoPlay: true,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: audio_clip.urls.high_mp3,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash)
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].__hash
  }, _styles__WEBPACK_IMPORTED_MODULE_4__["default"])));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalPodcast);

/***/ })

})
//# sourceMappingURL=channel.js.7e92c4f874d499872884.hot-update.js.map