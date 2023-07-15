/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n#header button {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 200px;\r\n}\r\n\r\n#servicesTitle, #offersTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 32px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 110%;\r\n    gap: 10px;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 10px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 50% 50%;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n#middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n#middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n#middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#rightfloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 3;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    border-radius: 56px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,gCAAgC;IAChC,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA;IACI;AACJ;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,yCAAyC;IACzC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kCAAkC;IAClC,+BAA+B;IAC/B,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,+BAA+B;IAC/B,gCAAgC;IAChC,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,iCAAiC;IACjC,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;IACV,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,cAAc;IACd,+BAA+B;IAC/B,aAAa;IACb,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,cAAc;IACd,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB","sourcesContent":[":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n#header button {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 200px;\r\n}\r\n\r\n#servicesTitle, #offersTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 32px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 110%;\r\n    gap: 10px;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 10px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 50% 50%;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n#middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n#middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n#middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#rightfloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 3;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    border-radius: 56px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/resources/battery.png":
/*!***********************************!*\
  !*** ./src/resources/battery.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a68e1ad5501347365c11c273fd107ff9.png");

/***/ }),

/***/ "./src/resources/bookcorner.png":
/*!**************************************!*\
  !*** ./src/resources/bookcorner.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "39d4872a1ad3b5efed50481a8770b852.png");

/***/ }),

/***/ "./src/resources/wifi.png":
/*!********************************!*\
  !*** ./src/resources/wifi.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9eddd760c6d91866d4f7246a7c59e532.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/resources/wifi.svg":
/*!********************************!*\
  !*** ./src/resources/wifi.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg fill=\"#411530\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.364,3a1,1,0,0,1-1,1A15.381,15.381,0,0,0,4,19.363a1,1,0,0,1-2,0A17.384,17.384,0,0,1,19.364,2,1,1,0,0,1,20.364,3ZM7.909,20.363a1,1,0,0,0,1-1A10.467,10.467,0,0,1,19.364,8.909a1,1,0,1,0,0-2A12.469,12.469,0,0,0,6.909,19.363,1,1,0,0,0,7.909,20.363Zm5.909-1a5.552,5.552,0,0,1,5.546-5.545,1,1,0,0,0,0-2,7.554,7.554,0,0,0-7.546,7.545,1,1,0,0,0,2,0Zm7.182,0A1.637,1.637,0,1,0,19.364,21,1.637,1.637,0,0,0,21,19.364Z\"></path></svg>"

/***/ }),

/***/ "./src/components/loadPage.js":
/*!************************************!*\
  !*** ./src/components/loadPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad),
/* harmony export */   "loadNextPage": () => (/* binding */ loadNextPage)
/* harmony export */ });
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homepage */ "./src/pages/homepage.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_aboutus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/aboutus */ "./src/pages/aboutus.js");
/* harmony import */ var _pages_aboutus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_aboutus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_contact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _renderNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderNavBar */ "./src/components/renderNavBar.js");







// initialize the first loading of the page
const initialLoad = () => {
    document.body.style.backgroundImage = "url('666ad14339e1b3b886db.svg')";
    (0,_renderNavBar__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
};


//load the page clicked by the user
const loadNextPage = (nextPageName) => {
    const contentDiv = document.querySelector("#content");
    console.log(nextPageName, contentDiv);
    contentDiv.innerHTML = "";
    (0,_renderNavBar__WEBPACK_IMPORTED_MODULE_4__["default"])();
    if (nextPageName == 'menu') {
        _pages_menu__WEBPACK_IMPORTED_MODULE_1___default()();
    } else if (nextPageName == 'contact') {
        _pages_contact__WEBPACK_IMPORTED_MODULE_3___default()();
    } else if (nextPageName == 'aboutus') {
        _pages_aboutus__WEBPACK_IMPORTED_MODULE_2___default()();
    } else {
        (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }

};




/***/ }),

/***/ "./src/components/renderNavBar.js":
/*!****************************************!*\
  !*** ./src/components/renderNavBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/components/loadPage.js");


const renderNavBar = () => {
    // set up header div
    const content = document.querySelector('#content');
    const headerDiv = document.createElement("div");
    headerDiv.id='header';
    content.prepend(headerDiv);
    
    //create main title
    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "KoffeeCorner";
    mainTitle.id = 'mainTitle';
    headerDiv.appendChild(mainTitle);

    //set up button div
    const buttonDiv = document.createElement('div');
    buttonDiv.id = "buttondiv";
    headerDiv.appendChild(buttonDiv);

    //add buttons
    const menuButton = document.createElement('button');
    menuButton.id="buttonMenu";
    menuButton.textContent = 'Menu';
    buttonDiv.appendChild(menuButton);

    const aboutUsButton = document.createElement('button');
    aboutUsButton.id="buttonAboutUs";
    aboutUsButton.textContent='About Us';
    buttonDiv.appendChild(aboutUsButton);

    const contactButton = document.createElement('button');
    contactButton.id='buttonContact';
    contactButton.textContent='Contact';
    buttonDiv.appendChild(contactButton);

    //add button functionality
    menuButton.addEventListener('click', () => {
        (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('menu')
    });
    contactButton.addEventListener('click', () => {
        (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('contact')
    });
    aboutUsButton.addEventListener('click', () => {
        (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('aboutus')
    });
    mainTitle.addEventListener('click', () => {
        (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('homepage')
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNavBar);

/***/ }),

/***/ "./src/pages/aboutus.js":
/*!******************************!*\
  !*** ./src/pages/aboutus.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _resources_wifi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/wifi.png */ "./src/resources/wifi.png");
/* harmony import */ var _resources_battery_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/battery.png */ "./src/resources/battery.png");
/* harmony import */ var _resources_bookcorner_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/bookcorner.png */ "./src/resources/bookcorner.png");





const renderHomepage = () => {
    //set up main grid
    const content = document.querySelector('#content');
    const mainGrid = document.createElement('div');
    mainGrid.id='maingrid';
    content.appendChild(mainGrid);

    //set up left side floatie
    const leftSideFloatie = document.createElement('div');
    leftSideFloatie.classList.add('sidefloatie');
    mainGrid.appendChild(leftSideFloatie);
    
    //add left side floatie content
    const servicesTitle = document.createElement('h2');
    servicesTitle.id='servicesTitle';
    leftSideFloatie.appendChild(servicesTitle);

    const servicesGrid = document.createElement('div');
    servicesGrid.id='servicesgrid';
    leftSideFloatie.appendChild(servicesGrid);

    //add servicesgrid element 1 (Free WiFi)
    const servicesgridelement1 = document.createElement('div');
    servicesgridelement1.classList.add('serviceGridElement');
    servicesGrid.appendChild(servicesgridelement1);
    const wifiImage = document.createElement('img');
    wifiImage.src = _resources_wifi_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    wifiImage.width = '69';
    wifiImage.height = '69';
    wifiImage.alt = 'wifi';
    servicesgridelement1.appendChild(wifiImage);
    const wifiText = document.createElement('p');
    wifiText.textContent='Free WiFi';
    servicesgridelement1.appendChild(wifiText);

    //add servicesgrid element 2 (ChargeUp)
    const servicesgridelement2 = document.createElement('div');
    servicesgridelement2.classList.add('serviceGridElement');
    servicesGrid.appendChild(servicesgridelement2);
    const chargeImage = document.createElement('img');
    chargeImage.src = _resources_battery_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    chargeImage.width = '69';
    chargeImage.height= '69';
    chargeImage.alt = 'charge';
    servicesgridelement2.appendChild(chargeImage);
    const chargeText = document.createElement('p');
    chargeText.textContent = 'ChargeUp';
    servicesgridelement2.appendChild(chargeText);

    //add servicesgrid element 3 (BookCorner)
    const servicesgridelement3 = document.createElement('div');
    servicesgridelement3.classList.add('serviceGridElement');
    servicesGrid.appendChild(servicesgridelement3);
    const bookImage = document.createElement('img');
    bookImage.src = _resources_bookcorner_png__WEBPACK_IMPORTED_MODULE_3__["default"];
    bookImage.width = '60';
    bookImage.height= '69';
    bookImage.alt = 'books';
    servicesgridelement3.appendChild(bookImage);
    const bookText = document.createElement('p');
    bookText.textContent = 'BookCorner';
    servicesgridelement3.appendChild(bookText);

    //add left floatie button
    const leftFloatieButton = document.createElement('button');
    leftFloatieButton.id = 'leftFloatieButton';
    leftFloatieButton.classList.add('floatiebutton');
    leftFloatieButton.textContent = 'About Us';
    leftFloatieButton.addEventListener('click', () => {
        (0,_components_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('aboutus')
    });
    leftSideFloatie.appendChild(leftFloatieButton);

    //set up middle floatie
    const middleFloatie = document.createElement('div');
    middleFloatie.id = "middlefloatie";
    mainGrid.appendChild(middleFloatie);
    const middleTitle = document.createElement('h1');
    middleTitle.textContent = 'KoffeeCorner is...';
    middleFloatie.appendChild(middleTitle);

    //create ul
    const parentList = document.createElement('ul');
    middleFloatie.appendChild(parentList);

    //create list items
    const middleItem1 = document.createElement('li');
    middleItem1.innerHTML = '... the most <a class="orangetext">cozy</a> spot in town';
    const middleItem2 = document.createElement('li');
    middleItem2.innerHTML = '... the best place to <a class="orangetext">get work done';
    const middleItem3 = document.createElement('li');
    middleItem3.innerHTML = '... the <a class="orangetext">heart</a> of the city';
    const middleItem4 = document.createElement('li');
    middleItem4.innerHTML = '... the home of <a class="orangetext">the best Koffee</a>';
    const middleItem5 = document.createElement('li');
    middleItem5.innerHTML = '... all about the <a class="orangetext">community</a>';
    
    //append list items to ul
    parentList.appendChild(middleItem1);
    parentList.appendChild(middleItem2);
    parentList.appendChild(middleItem3);
    parentList.appendChild(middleItem4);
    parentList.appendChild(middleItem5);

    //add two last h2s to middle floatie
    const middleBreakTitle = document.createElement('h2');
    middleBreakTitle.innerHTML = 'Catch a break<br/>or work in harmony';
    middleFloatie.appendChild(middleBreakTitle);
    const middleChoiceTitle = document.createElement('h2');
    middleChoiceTitle.classList.add('orangetext');
    middleChoiceTitle.textContent = 'The choice is yours, really';
    middleFloatie.appendChild(middleChoiceTitle);

    //set up right floatie
    const rightSideFloatie = document.createElement('div');
    rightSideFloatie.classList.add('sidefloatie');
    mainGrid.appendChild(rightSideFloatie);
    const rightSideFloatieTitle = document.createElement('h2');
    rightSideFloatieTitle.id = 'offersTitle';
    rightSideFloatieTitle.textContent = 'Best Offers';
    rightSideFloatie.appendChild(rightSideFloatieTitle);

    //set up offersgrid
    const offersGrid = document.createElement('div');
    offersGrid.id = 'offersgrid';
    rightSideFloatie.appendChild(offersGrid);

    //set up offersgrid elements
    //element 1
    const offersGridElement1 = document.createElement('div');
    offersGridElement1.classList.add('offersGridElement');
    offersGrid.appendChild(offersGridElement1);
    const offersGridElement1Title = document.createElement('p');
    offersGridElement1Title.innerHTML = 'Corner<br>Special';
    offersGridElement1.appendChild(offersGridElement1Title);
    const offersGridElement1Price = document.createElement('p');
    offersGridElement1Price.textContent = '2,00€';
    offersGridElement1.appendChild(offersGridElement1Price);
    //element 2
    const offersGridElement2 = document.createElement('div');
    offersGridElement2.classList.add('offersGridElement');
    offersGrid.appendChild(offersGridElement2);
    const offersGridElement2Title = document.createElement('p');
    offersGridElement2Title.innerHTML = 'Kold<br>Brew';
    offersGridElement2.appendChild(offersGridElement2Title);
    const offersGridElement2Price = document.createElement('p');
    offersGridElement2Price.textContent = '3,50€';
    offersGridElement2.appendChild(offersGridElement2Price);
    //element 3
    const offersGridElement3 = document.createElement('div');
    offersGridElement3.classList.add('offersGridElement');
    offersGrid.appendChild(offersGridElement3);
    const offersGridElement3Title = document.createElement('p');
    offersGridElement3Title.innerHTML = 'Klassic<br>Koffee';
    offersGridElement3.appendChild(offersGridElement3Title);
    const offersGridElement3Price = document.createElement('p');
    offersGridElement3Price.textContent = '1,50€';
    offersGridElement3.appendChild(offersGridElement3Price);
    
    //rightsidefloatiebutton
    const rightSideFloatieButton = document.createElement('button');
    rightSideFloatieButton.classList.add('floatiebutton');
    rightSideFloatieButton.id = 'rightFloatieButton';
    rightSideFloatieButton.textContent = 'Menu';
    rightSideFloatie.appendChild(rightSideFloatieButton);

    //add clickability
    const offersGridElements = document.querySelectorAll('.offersGridElement');
    offersGridElements.forEach((e) => {
        e.addEventListener('click', () => {
            (0,_components_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('menu');
        });
    });
    rightSideFloatieButton.addEventListener('click', () => {
        (0,_components_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadNextPage)('menu');
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomepage);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ (() => {



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _resources_wifi_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/wifi.svg */ "./src/resources/wifi.svg");
/* harmony import */ var _resources_wifi_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_wifi_svg__WEBPACK_IMPORTED_MODULE_2__);





console.log('Hi im alive');

(0,_components_loadPage__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFZO0FBQ3hCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxRQUFRLGtFQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O1VFeEw3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNvQztBQUN2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcmVzb3VyY2VzL2JhdHRlcnkucG5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy9ib29rY29ybmVyLnBuZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvd2lmaS5wbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvd2lmaS5zdmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3JlbmRlck5hdkJhci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9hYm91dHVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLW9yYW5nZTogI0QxNTEyRDtcXHJcXG4gICAgLS1wdXJwbGU6ICM0MTE1MzA7XFxyXFxuICAgIC0tbGlnaHRjb2xvdXI6ICNGNUM3QTk7XFxyXFxuICAgIC0tb2Zmd2hpdGU6ICNEOUQ5RDk7XFxyXFxuICAgIC0tYnV0dG9uY29sb3VyOiAjRjVDN0E5O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Y29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vcmFuZ2V0ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSlcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgYnV0dG9uIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpblRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbSAxLjVyZW0gM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VydmljZXNUaXRsZSwgI29mZmVyc1RpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0aWVidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbmNvbG91cik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY2VzZ3JpZCwgI29mZmVyc2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMTAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlR3JpZEVsZW1lbnQsIC5vZmZlcnNHcmlkRWxlbWVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjlweCBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCBwLCAub2ZmZXJzR3JpZEVsZW1lbnQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpXFxyXFxufVxcclxcblxcclxcbiNtaWRkbGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21pZGRsZWZsb2F0aWUgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWlkZGxlZmxvYXRpZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbnVsLCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW46IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNyaWdodGZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW9yYW5nZTogI0QxNTEyRDtcXHJcXG4gICAgLS1wdXJwbGU6ICM0MTE1MzA7XFxyXFxuICAgIC0tbGlnaHRjb2xvdXI6ICNGNUM3QTk7XFxyXFxuICAgIC0tb2Zmd2hpdGU6ICNEOUQ5RDk7XFxyXFxuICAgIC0tYnV0dG9uY29sb3VyOiAjRjVDN0E5O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Y29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vcmFuZ2V0ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSlcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgYnV0dG9uIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpblRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbSAxLjVyZW0gM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VydmljZXNUaXRsZSwgI29mZmVyc1RpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0aWVidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbmNvbG91cik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY2VzZ3JpZCwgI29mZmVyc2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMTAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlR3JpZEVsZW1lbnQsIC5vZmZlcnNHcmlkRWxlbWVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjlweCBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCBwLCAub2ZmZXJzR3JpZEVsZW1lbnQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpXFxyXFxufVxcclxcblxcclxcbiNtaWRkbGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21pZGRsZWZsb2F0aWUgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWlkZGxlZmxvYXRpZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbnVsLCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW46IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNyaWdodGZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE2OGUxYWQ1NTAxMzQ3MzY1YzExYzI3M2ZkMTA3ZmY5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzOWQ0ODcyYTFhZDNiNWVmZWQ1MDQ4MWE4NzcwYjg1Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWVkZGQ3NjBjNmQ5MTg2NmQ0ZjcyNDZhN2M1OWU1MzIucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGZpbGw9XFxcIiM0MTE1MzBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjAuMzY0LDNhMSwxLDAsMCwxLTEsMUExNS4zODEsMTUuMzgxLDAsMCwwLDQsMTkuMzYzYTEsMSwwLDAsMS0yLDBBMTcuMzg0LDE3LjM4NCwwLDAsMSwxOS4zNjQsMiwxLDEsMCwwLDEsMjAuMzY0LDNaTTcuOTA5LDIwLjM2M2ExLDEsMCwwLDAsMS0xQTEwLjQ2NywxMC40NjcsMCwwLDEsMTkuMzY0LDguOTA5YTEsMSwwLDEsMCwwLTJBMTIuNDY5LDEyLjQ2OSwwLDAsMCw2LjkwOSwxOS4zNjMsMSwxLDAsMCwwLDcuOTA5LDIwLjM2M1ptNS45MDktMWE1LjU1Miw1LjU1MiwwLDAsMSw1LjU0Ni01LjU0NSwxLDEsMCwwLDAsMC0yLDcuNTU0LDcuNTU0LDAsMCwwLTcuNTQ2LDcuNTQ1LDEsMSwwLDAsMCwyLDBabTcuMTgyLDBBMS42MzcsMS42MzcsMCwxLDAsMTkuMzY0LDIxLDEuNjM3LDEuNjM3LDAsMCwwLDIxLDE5LjM2NFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCByZW5kZXJIb21lcGFnZSBmcm9tIFwiLi4vcGFnZXMvaG9tZXBhZ2VcIjtcclxuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcclxuaW1wb3J0IHJlbmRlckFib3V0VXMgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0dXNcIjtcclxuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4uL3BhZ2VzL2NvbnRhY3RcIjtcclxuaW1wb3J0IHJlbmRlck5hdkJhciBmcm9tIFwiLi9yZW5kZXJOYXZCYXJcIjtcclxuXHJcblxyXG4vLyBpbml0aWFsaXplIHRoZSBmaXJzdCBsb2FkaW5nIG9mIHRoZSBwYWdlXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnNjY2YWQxNDMzOWUxYjNiODg2ZGIuc3ZnJylcIjtcclxuICAgIHJlbmRlck5hdkJhcigpO1xyXG4gICAgcmVuZGVySG9tZXBhZ2UoKTtcclxufTtcclxuXHJcblxyXG4vL2xvYWQgdGhlIHBhZ2UgY2xpY2tlZCBieSB0aGUgdXNlclxyXG5jb25zdCBsb2FkTmV4dFBhZ2UgPSAobmV4dFBhZ2VOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc29sZS5sb2cobmV4dFBhZ2VOYW1lLCBjb250ZW50RGl2KTtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlck5hdkJhcigpO1xyXG4gICAgaWYgKG5leHRQYWdlTmFtZSA9PSAnbWVudScpIHtcclxuICAgICAgICByZW5kZXJNZW51KCk7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRQYWdlTmFtZSA9PSAnY29udGFjdCcpIHtcclxuICAgICAgICByZW5kZXJDb250YWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRQYWdlTmFtZSA9PSAnYWJvdXR1cycpIHtcclxuICAgICAgICByZW5kZXJBYm91dFVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmRlckhvbWVwYWdlKCk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7IGluaXRpYWxMb2FkLCBsb2FkTmV4dFBhZ2UgfTsiLCJpbXBvcnQgeyBsb2FkTmV4dFBhZ2UgfSBmcm9tICcuL2xvYWRQYWdlJztcclxuXHJcbmNvbnN0IHJlbmRlck5hdkJhciA9ICgpID0+IHtcclxuICAgIC8vIHNldCB1cCBoZWFkZXIgZGl2XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJEaXYuaWQ9J2hlYWRlcic7XHJcbiAgICBjb250ZW50LnByZXBlbmQoaGVhZGVyRGl2KTtcclxuICAgIFxyXG4gICAgLy9jcmVhdGUgbWFpbiB0aXRsZVxyXG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiS29mZmVlQ29ybmVyXCI7XHJcbiAgICBtYWluVGl0bGUuaWQgPSAnbWFpblRpdGxlJztcclxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xyXG5cclxuICAgIC8vc2V0IHVwIGJ1dHRvbiBkaXZcclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uRGl2LmlkID0gXCJidXR0b25kaXZcIjtcclxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG5cclxuICAgIC8vYWRkIGJ1dHRvbnNcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lbnVCdXR0b24uaWQ9XCJidXR0b25NZW51XCI7XHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFib3V0VXNCdXR0b24uaWQ9XCJidXR0b25BYm91dFVzXCI7XHJcbiAgICBhYm91dFVzQnV0dG9uLnRleHRDb250ZW50PSdBYm91dCBVcyc7XHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYWJvdXRVc0J1dHRvbik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29udGFjdEJ1dHRvbi5pZD0nYnV0dG9uQ29udGFjdCc7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50PSdDb250YWN0JztcclxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICAvL2FkZCBidXR0b24gZnVuY3Rpb25hbGl0eVxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ21lbnUnKVxyXG4gICAgfSk7XHJcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnY29udGFjdCcpXHJcbiAgICB9KTtcclxuICAgIGFib3V0VXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdhYm91dHVzJylcclxuICAgIH0pO1xyXG4gICAgbWFpblRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnaG9tZXBhZ2UnKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdkJhcjsiLCIiLCIiLCJpbXBvcnQgeyBsb2FkTmV4dFBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRQYWdlJztcclxuaW1wb3J0IHdpZmlJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL3dpZmkucG5nJztcclxuaW1wb3J0IGNoYXJnZUltZyBmcm9tICcuLi9yZXNvdXJjZXMvYmF0dGVyeS5wbmcnO1xyXG5pbXBvcnQgYm9va0ltZyBmcm9tICcuLi9yZXNvdXJjZXMvYm9va2Nvcm5lci5wbmcnO1xyXG5cclxuY29uc3QgcmVuZGVySG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiAgICAvL3NldCB1cCBtYWluIGdyaWRcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW5HcmlkLmlkPSdtYWluZ3JpZCc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5HcmlkKTtcclxuXHJcbiAgICAvL3NldCB1cCBsZWZ0IHNpZGUgZmxvYXRpZVxyXG4gICAgY29uc3QgbGVmdFNpZGVGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuY2xhc3NMaXN0LmFkZCgnc2lkZWZsb2F0aWUnKTtcclxuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKGxlZnRTaWRlRmxvYXRpZSk7XHJcbiAgICBcclxuICAgIC8vYWRkIGxlZnQgc2lkZSBmbG9hdGllIGNvbnRlbnRcclxuICAgIGNvbnN0IHNlcnZpY2VzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc2VydmljZXNUaXRsZS5pZD0nc2VydmljZXNUaXRsZSc7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQoc2VydmljZXNUaXRsZSk7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZXNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuaWQ9J3NlcnZpY2VzZ3JpZCc7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQoc2VydmljZXNHcmlkKTtcclxuXHJcbiAgICAvL2FkZCBzZXJ2aWNlc2dyaWQgZWxlbWVudCAxIChGcmVlIFdpRmkpXHJcbiAgICBjb25zdCBzZXJ2aWNlc2dyaWRlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnc2VydmljZUdyaWRFbGVtZW50Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuYXBwZW5kQ2hpbGQoc2VydmljZXNncmlkZWxlbWVudDEpO1xyXG4gICAgY29uc3Qgd2lmaUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB3aWZpSW1hZ2Uuc3JjID0gd2lmaUltZztcclxuICAgIHdpZmlJbWFnZS53aWR0aCA9ICc2OSc7XHJcbiAgICB3aWZpSW1hZ2UuaGVpZ2h0ID0gJzY5JztcclxuICAgIHdpZmlJbWFnZS5hbHQgPSAnd2lmaSc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50MS5hcHBlbmRDaGlsZCh3aWZpSW1hZ2UpO1xyXG4gICAgY29uc3Qgd2lmaVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB3aWZpVGV4dC50ZXh0Q29udGVudD0nRnJlZSBXaUZpJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQxLmFwcGVuZENoaWxkKHdpZmlUZXh0KTtcclxuXHJcbiAgICAvL2FkZCBzZXJ2aWNlc2dyaWQgZWxlbWVudCAyIChDaGFyZ2VVcClcclxuICAgIGNvbnN0IHNlcnZpY2VzZ3JpZGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlR3JpZEVsZW1lbnQnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5hcHBlbmRDaGlsZChzZXJ2aWNlc2dyaWRlbGVtZW50Mik7XHJcbiAgICBjb25zdCBjaGFyZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY2hhcmdlSW1hZ2Uuc3JjID0gY2hhcmdlSW1nO1xyXG4gICAgY2hhcmdlSW1hZ2Uud2lkdGggPSAnNjknO1xyXG4gICAgY2hhcmdlSW1hZ2UuaGVpZ2h0PSAnNjknO1xyXG4gICAgY2hhcmdlSW1hZ2UuYWx0ID0gJ2NoYXJnZSc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50Mi5hcHBlbmRDaGlsZChjaGFyZ2VJbWFnZSk7XHJcbiAgICBjb25zdCBjaGFyZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2hhcmdlVGV4dC50ZXh0Q29udGVudCA9ICdDaGFyZ2VVcCc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50Mi5hcHBlbmRDaGlsZChjaGFyZ2VUZXh0KTtcclxuXHJcbiAgICAvL2FkZCBzZXJ2aWNlc2dyaWQgZWxlbWVudCAzIChCb29rQ29ybmVyKVxyXG4gICAgY29uc3Qgc2VydmljZXNncmlkZWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQzLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VHcmlkRWxlbWVudCcpO1xyXG4gICAgc2VydmljZXNHcmlkLmFwcGVuZENoaWxkKHNlcnZpY2VzZ3JpZGVsZW1lbnQzKTtcclxuICAgIGNvbnN0IGJvb2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYm9va0ltYWdlLnNyYyA9IGJvb2tJbWc7XHJcbiAgICBib29rSW1hZ2Uud2lkdGggPSAnNjAnO1xyXG4gICAgYm9va0ltYWdlLmhlaWdodD0gJzY5JztcclxuICAgIGJvb2tJbWFnZS5hbHQgPSAnYm9va3MnO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDMuYXBwZW5kQ2hpbGQoYm9va0ltYWdlKTtcclxuICAgIGNvbnN0IGJvb2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYm9va1RleHQudGV4dENvbnRlbnQgPSAnQm9va0Nvcm5lcic7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50My5hcHBlbmRDaGlsZChib29rVGV4dCk7XHJcblxyXG4gICAgLy9hZGQgbGVmdCBmbG9hdGllIGJ1dHRvblxyXG4gICAgY29uc3QgbGVmdEZsb2F0aWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLmlkID0gJ2xlZnRGbG9hdGllQnV0dG9uJztcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aWVidXR0b24nKTtcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnYWJvdXR1cycpXHJcbiAgICB9KTtcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChsZWZ0RmxvYXRpZUJ1dHRvbik7XHJcblxyXG4gICAgLy9zZXQgdXAgbWlkZGxlIGZsb2F0aWVcclxuICAgIGNvbnN0IG1pZGRsZUZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1pZGRsZUZsb2F0aWUuaWQgPSBcIm1pZGRsZWZsb2F0aWVcIjtcclxuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKG1pZGRsZUZsb2F0aWUpO1xyXG4gICAgY29uc3QgbWlkZGxlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWlkZGxlVGl0bGUudGV4dENvbnRlbnQgPSAnS29mZmVlQ29ybmVyIGlzLi4uJztcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQobWlkZGxlVGl0bGUpO1xyXG5cclxuICAgIC8vY3JlYXRlIHVsXHJcbiAgICBjb25zdCBwYXJlbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQocGFyZW50TGlzdCk7XHJcblxyXG4gICAgLy9jcmVhdGUgbGlzdCBpdGVtc1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTEuaW5uZXJIVE1MID0gJy4uLiB0aGUgbW9zdCA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5jb3p5PC9hPiBzcG90IGluIHRvd24nO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTIuaW5uZXJIVE1MID0gJy4uLiB0aGUgYmVzdCBwbGFjZSB0byA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5nZXQgd29yayBkb25lJztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW0zLmlubmVySFRNTCA9ICcuLi4gdGhlIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmhlYXJ0PC9hPiBvZiB0aGUgY2l0eSc7XHJcbiAgICBjb25zdCBtaWRkbGVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtNC5pbm5lckhUTUwgPSAnLi4uIHRoZSBob21lIG9mIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPnRoZSBiZXN0IEtvZmZlZTwvYT4nO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTUuaW5uZXJIVE1MID0gJy4uLiBhbGwgYWJvdXQgdGhlIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmNvbW11bml0eTwvYT4nO1xyXG4gICAgXHJcbiAgICAvL2FwcGVuZCBsaXN0IGl0ZW1zIHRvIHVsXHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW0xKTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTIpO1xyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtMyk7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW00KTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTUpO1xyXG5cclxuICAgIC8vYWRkIHR3byBsYXN0IGgycyB0byBtaWRkbGUgZmxvYXRpZVxyXG4gICAgY29uc3QgbWlkZGxlQnJlYWtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtaWRkbGVCcmVha1RpdGxlLmlubmVySFRNTCA9ICdDYXRjaCBhIGJyZWFrPGJyLz5vciB3b3JrIGluIGhhcm1vbnknO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5hcHBlbmRDaGlsZChtaWRkbGVCcmVha1RpdGxlKTtcclxuICAgIGNvbnN0IG1pZGRsZUNob2ljZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1pZGRsZUNob2ljZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZXRleHQnKTtcclxuICAgIG1pZGRsZUNob2ljZVRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBjaG9pY2UgaXMgeW91cnMsIHJlYWxseSc7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKG1pZGRsZUNob2ljZVRpdGxlKTtcclxuXHJcbiAgICAvL3NldCB1cCByaWdodCBmbG9hdGllXHJcbiAgICBjb25zdCByaWdodFNpZGVGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmNsYXNzTGlzdC5hZGQoJ3NpZGVmbG9hdGllJyk7XHJcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChyaWdodFNpZGVGbG9hdGllKTtcclxuICAgIGNvbnN0IHJpZ2h0U2lkZUZsb2F0aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllVGl0bGUuaWQgPSAnb2ZmZXJzVGl0bGUnO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZVRpdGxlLnRleHRDb250ZW50ID0gJ0Jlc3QgT2ZmZXJzJztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRmxvYXRpZVRpdGxlKTtcclxuXHJcbiAgICAvL3NldCB1cCBvZmZlcnNncmlkXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkLmlkID0gJ29mZmVyc2dyaWQnO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChvZmZlcnNHcmlkKTtcclxuXHJcbiAgICAvL3NldCB1cCBvZmZlcnNncmlkIGVsZW1lbnRzXHJcbiAgICAvL2VsZW1lbnQgMVxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnb2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWQuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQxKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxVGl0bGUuaW5uZXJIVE1MID0gJ0Nvcm5lcjxicj5TcGVjaWFsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MS5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDFUaXRsZSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MVByaWNlLnRleHRDb250ZW50ID0gJzIsMDDigqwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MVByaWNlKTtcclxuICAgIC8vZWxlbWVudCAyXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdvZmZlcnNHcmlkRWxlbWVudCcpO1xyXG4gICAgb2ZmZXJzR3JpZC5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDIpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDJUaXRsZS5pbm5lckhUTUwgPSAnS29sZDxicj5CcmV3JztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50Mi5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDJUaXRsZSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MlByaWNlLnRleHRDb250ZW50ID0gJzMsNTDigqwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MlByaWNlKTtcclxuICAgIC8vZWxlbWVudCAzXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50My5jbGFzc0xpc3QuYWRkKCdvZmZlcnNHcmlkRWxlbWVudCcpO1xyXG4gICAgb2ZmZXJzR3JpZC5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDMpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDNUaXRsZS5pbm5lckhUTUwgPSAnS2xhc3NpYzxicj5Lb2ZmZWUnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50M1RpdGxlKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50M1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzUHJpY2UudGV4dENvbnRlbnQgPSAnMSw1MOKCrCc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDMuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQzUHJpY2UpO1xyXG4gICAgXHJcbiAgICAvL3JpZ2h0c2lkZWZsb2F0aWVidXR0b25cclxuICAgIGNvbnN0IHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmxvYXRpZWJ1dHRvbicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbi5pZCA9ICdyaWdodEZsb2F0aWVCdXR0b24nO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRmxvYXRpZUJ1dHRvbik7XHJcblxyXG4gICAgLy9hZGQgY2xpY2thYmlsaXR5XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbG9hZE5leHRQYWdlKCdtZW51Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdtZW51Jyk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZXBhZ2U7IiwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGxvYWROZXh0UGFnZSwgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvYWRQYWdlXCI7XHJcbmltcG9ydCB3aWZpU3ZnIGZyb20gXCIuL3Jlc291cmNlcy93aWZpLnN2Z1wiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdIaSBpbSBhbGl2ZScpO1xyXG5cclxuaW5pdGlhbExvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=