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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n\r\n#aboutgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 32px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 110%;\r\n    gap: 10px;\r\n}\r\n\r\n#aboutUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#aboutUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 10px;\r\n    border-radius: 30px;\r\n    width: 95%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 50% 50%;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1rem 1rem 1rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    border-radius: 56px;\r\n    height: 100%;\r\n    width: 80%;\r\n}\r\n\r\n.aboutUsRightFloatieElement {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 69px 1.5rem auto;\r\n}\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n\r\n#aboutgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 32px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 110%;\r\n    gap: 10px;\r\n}\r\n\r\n#aboutUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#aboutUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 10px;\r\n    border-radius: 30px;\r\n    width: 95%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 50% 50%;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    padding: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1rem 1rem 1rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    border-radius: 56px;\r\n    height: 100%;\r\n    width: 80%;\r\n}\r\n\r\n.aboutUsRightFloatieElement {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 69px 1.5rem auto;\r\n}\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}"],"sourceRoot":""}]);
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
    contentDiv.innerHTML = "";
    (0,_renderNavBar__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const navbarButtonsNode = document.querySelectorAll('.navbarbutton');
    navbarButtonsNode.forEach((element) => {
        element.classList.remove('currentPageButton');
    })
    if (nextPageName == 'menu') {
        navbarButtonsNode[0].classList.add('currentPageButton')
        _pages_menu__WEBPACK_IMPORTED_MODULE_1___default()();
    } else if (nextPageName == 'contact') {
        navbarButtonsNode[2].classList.add('currentPageButton')
        _pages_contact__WEBPACK_IMPORTED_MODULE_3___default()();
    } else if (nextPageName == 'aboutus') {
        navbarButtonsNode[1].classList.add('currentPageButton')
        ;(0,_pages_aboutus__WEBPACK_IMPORTED_MODULE_2__["default"])();

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
    menuButton.classList.add('navbarbutton')
    buttonDiv.appendChild(menuButton);

    const aboutUsButton = document.createElement('button');
    aboutUsButton.id="buttonAboutUs";
    aboutUsButton.textContent='About Us';
    aboutUsButton.classList.add('navbarbutton')
    buttonDiv.appendChild(aboutUsButton);

    const contactButton = document.createElement('button');
    contactButton.id='buttonContact';
    contactButton.textContent='Contact';
    contactButton.classList.add('navbarbutton')
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderAboutUs = () => {
    //set up basic grid
    const content = document.querySelector('#content');
    const aboutGrid = document.createElement('div');
    aboutGrid.id = 'aboutgrid';
    content.appendChild(aboutGrid);

    //render short floatie on the left
    const shortFloatie = document.createElement('div');
    shortFloatie.classList.add('sidefloatie');
    shortFloatie.id = 'aboutUsFloatie';
    aboutGrid.appendChild(shortFloatie);
    const shortStoryTitle = document.createElement('h2');
    shortStoryTitle.classList.add('sideFloatieTitle');
    shortStoryTitle.textContent = 'About Us';
    shortFloatie.appendChild(shortStoryTitle);

    const aboutUsText = document.createElement('p');
    aboutUsText.innerHTML = 'KoffeeCorner is an independent café with around <a class="orangetext">35 locations</a> in Europe, with more to come soon. <br>Established in 2003, we\'ve accumulated a ton of experience, to serve you with the greatest koffee and provide outstanding customer service. <br> Come, taste our delicious <a class="orangetext">koffee</a>, get some work done or relax a bit.';
    aboutUsText.id = 'aboutUsText'
    shortFloatie.appendChild(aboutUsText);

    //render the right floatie, on which all the services are explained with more detail
    const rightFloatie = document.createElement('div');
    rightFloatie.id = "aboutUsRightFloatie";

    aboutGrid.appendChild(rightFloatie);

    //set up free wifi card floatie thing
    const wifiCard = document.createElement('div');
    rightFloatie.appendChild(wifiCard);

    //set up charging floatie thing
    const chargingCard = document.createElement('div');
    rightFloatie.appendChild(chargingCard);

    //set up bookcorner floatie thing
    const bookCard = document.createElement('div');
    rightFloatie.appendChild(bookCard);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutUs);

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
    servicesTitle.textContent = 'Our Services';
    servicesTitle.classList.add('sideFloatieTitle');
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
    middleFloatie.classList.add('middlefloatie');
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
    rightSideFloatieTitle.classList.add('sideFloatieTitle');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUUxQzBCO0FBQ1Y7QUFDSztBQUNDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtFQUFZO0FBQ3hCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxRQUFRLGtFQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O1VFekw3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNvQztBQUN2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcmVzb3VyY2VzL2JhdHRlcnkucG5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy9ib29rY29ybmVyLnBuZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvd2lmaS5wbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvd2lmaS5zdmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3JlbmRlck5hdkJhci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9hYm91dHVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLW9yYW5nZTogI0QxNTEyRDtcXHJcXG4gICAgLS1wdXJwbGU6ICM0MTE1MzA7XFxyXFxuICAgIC0tbGlnaHRjb2xvdXI6ICNGNUM3QTk7XFxyXFxuICAgIC0tb2Zmd2hpdGU6ICNEOUQ5RDk7XFxyXFxuICAgIC0tYnV0dG9uY29sb3VyOiAjRjVDN0E5O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Y29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCwgI2Fib3V0Z3JpZCwgI2NvbnRhY3RncmlkLCAjbWVudWdyaWQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxOTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmFuZ2V0ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSlcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2Fib3V0Z3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJidXR0b24ge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNtYWluVGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtIDEuNXJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZUZsb2F0aWVUaXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdGllYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25jb2xvdXIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNlc2dyaWQsICNvZmZlcnNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTEwJTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc0Zsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNUZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZUdyaWRFbGVtZW50LCAub2ZmZXJzR3JpZEVsZW1lbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY5cHggYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCBwLCAub2ZmZXJzR3JpZEVsZW1lbnQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpXFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbnVsLCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW46IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzUmlnaHRGbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIDFyZW0gMXJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRVc1JpZ2h0RmxvYXRpZUVsZW1lbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY5cHggMS41cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50UGFnZUJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1vcmFuZ2U6ICNEMTUxMkQ7XFxyXFxuICAgIC0tcHVycGxlOiAjNDExNTMwO1xcclxcbiAgICAtLWxpZ2h0Y29sb3VyOiAjRjVDN0E5O1xcclxcbiAgICAtLW9mZndoaXRlOiAjRDlEOUQ5O1xcclxcbiAgICAtLWJ1dHRvbmNvbG91cjogI0Y1QzdBOTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbmdyaWQsICNhYm91dGdyaWQsICNjb250YWN0Z3JpZCwgI21lbnVncmlkIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdldGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNhYm91dGdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyYnV0dG9uIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpblRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbSAxLjVyZW0gM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVGbG9hdGllVGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXRpZWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uY29sb3VyKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VydmljZXNncmlkLCAjb2ZmZXJzZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDExMCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNGbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzVGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCwgLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OXB4IGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxufVxcclxcblxcclxcbi5vZmZlcnNHcmlkRWxlbWVudCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlR3JpZEVsZW1lbnQgcCwgLm9mZmVyc0dyaWRFbGVtZW50IHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKVxcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIGgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCwgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbWFyZ2luOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc1JpZ2h0RmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSAxcmVtIDFyZW07XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2OXB4IDEuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudFBhZ2VCdXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNjhlMWFkNTUwMTM0NzM2NWMxMWMyNzNmZDEwN2ZmOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzlkNDg3MmExYWQzYjVlZmVkNTA0ODFhODc3MGI4NTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjllZGRkNzYwYzZkOTE4NjZkNGY3MjQ2YTdjNTllNTMyLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBmaWxsPVxcXCIjNDExNTMwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTIwLjM2NCwzYTEsMSwwLDAsMS0xLDFBMTUuMzgxLDE1LjM4MSwwLDAsMCw0LDE5LjM2M2ExLDEsMCwwLDEtMiwwQTE3LjM4NCwxNy4zODQsMCwwLDEsMTkuMzY0LDIsMSwxLDAsMCwxLDIwLjM2NCwzWk03LjkwOSwyMC4zNjNhMSwxLDAsMCwwLDEtMUExMC40NjcsMTAuNDY3LDAsMCwxLDE5LjM2NCw4LjkwOWExLDEsMCwxLDAsMC0yQTEyLjQ2OSwxMi40NjksMCwwLDAsNi45MDksMTkuMzYzLDEsMSwwLDAsMCw3LjkwOSwyMC4zNjNabTUuOTA5LTFhNS41NTIsNS41NTIsMCwwLDEsNS41NDYtNS41NDUsMSwxLDAsMCwwLDAtMiw3LjU1NCw3LjU1NCwwLDAsMC03LjU0Niw3LjU0NSwxLDEsMCwwLDAsMiwwWm03LjE4MiwwQTEuNjM3LDEuNjM3LDAsMSwwLDE5LjM2NCwyMSwxLjYzNywxLjYzNywwLDAsMCwyMSwxOS4zNjRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgcmVuZGVySG9tZXBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2hvbWVwYWdlXCI7XHJcbmltcG9ydCByZW5kZXJNZW51IGZyb20gXCIuLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCByZW5kZXJBYm91dFVzIGZyb20gXCIuLi9wYWdlcy9hYm91dHVzXCI7XHJcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gXCIuLi9wYWdlcy9jb250YWN0XCI7XHJcbmltcG9ydCByZW5kZXJOYXZCYXIgZnJvbSBcIi4vcmVuZGVyTmF2QmFyXCI7XHJcblxyXG5cclxuLy8gaW5pdGlhbGl6ZSB0aGUgZmlyc3QgbG9hZGluZyBvZiB0aGUgcGFnZVxyXG5jb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJzY2NmFkMTQzMzllMWIzYjg4NmRiLnN2ZycpXCI7XHJcbiAgICByZW5kZXJOYXZCYXIoKTtcclxuICAgIHJlbmRlckhvbWVwYWdlKCk7XHJcbn07XHJcblxyXG5cclxuLy9sb2FkIHRoZSBwYWdlIGNsaWNrZWQgYnkgdGhlIHVzZXJcclxuY29uc3QgbG9hZE5leHRQYWdlID0gKG5leHRQYWdlTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlck5hdkJhcigpO1xyXG4gICAgY29uc3QgbmF2YmFyQnV0dG9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyYnV0dG9uJyk7XHJcbiAgICBuYXZiYXJCdXR0b25zTm9kZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50UGFnZUJ1dHRvbicpO1xyXG4gICAgfSlcclxuICAgIGlmIChuZXh0UGFnZU5hbWUgPT0gJ21lbnUnKSB7XHJcbiAgICAgICAgbmF2YmFyQnV0dG9uc05vZGVbMF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2VCdXR0b24nKVxyXG4gICAgICAgIHJlbmRlck1lbnUoKTtcclxuICAgIH0gZWxzZSBpZiAobmV4dFBhZ2VOYW1lID09ICdjb250YWN0Jykge1xyXG4gICAgICAgIG5hdmJhckJ1dHRvbnNOb2RlWzJdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQYWdlQnV0dG9uJylcclxuICAgICAgICByZW5kZXJDb250YWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRQYWdlTmFtZSA9PSAnYWJvdXR1cycpIHtcclxuICAgICAgICBuYXZiYXJCdXR0b25zTm9kZVsxXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UGFnZUJ1dHRvbicpXHJcbiAgICAgICAgcmVuZGVyQWJvdXRVcygpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZGVySG9tZXBhZ2UoKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgaW5pdGlhbExvYWQsIGxvYWROZXh0UGFnZSB9OyIsImltcG9ydCB7IGxvYWROZXh0UGFnZSB9IGZyb20gJy4vbG9hZFBhZ2UnO1xyXG5cclxuY29uc3QgcmVuZGVyTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IHVwIGhlYWRlciBkaXZcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlckRpdi5pZD0naGVhZGVyJztcclxuICAgIGNvbnRlbnQucHJlcGVuZChoZWFkZXJEaXYpO1xyXG4gICAgXHJcbiAgICAvL2NyZWF0ZSBtYWluIHRpdGxlXHJcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJLb2ZmZWVDb3JuZXJcIjtcclxuICAgIG1haW5UaXRsZS5pZCA9ICdtYWluVGl0bGUnO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgYnV0dG9uIGRpdlxyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25EaXYuaWQgPSBcImJ1dHRvbmRpdlwiO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcblxyXG4gICAgLy9hZGQgYnV0dG9uc1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbWVudUJ1dHRvbi5pZD1cImJ1dHRvbk1lbnVcIjtcclxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJhcmJ1dHRvbicpXHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgYWJvdXRVc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWJvdXRVc0J1dHRvbi5pZD1cImJ1dHRvbkFib3V0VXNcIjtcclxuICAgIGFib3V0VXNCdXR0b24udGV4dENvbnRlbnQ9J0Fib3V0IFVzJztcclxuICAgIGFib3V0VXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyYnV0dG9uJylcclxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChhYm91dFVzQnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLmlkPSdidXR0b25Db250YWN0JztcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQ9J0NvbnRhY3QnO1xyXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJidXR0b24nKVxyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5cclxuICAgIC8vYWRkIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnbWVudScpXHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdjb250YWN0JylcclxuICAgIH0pO1xyXG4gICAgYWJvdXRVc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ2Fib3V0dXMnKVxyXG4gICAgfSk7XHJcbiAgICBtYWluVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdob21lcGFnZScpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTmF2QmFyOyIsImNvbnN0IHJlbmRlckFib3V0VXMgPSAoKSA9PiB7XHJcbiAgICAvL3NldCB1cCBiYXNpYyBncmlkXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFib3V0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRHcmlkLmlkID0gJ2Fib3V0Z3JpZCc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0R3JpZCk7XHJcblxyXG4gICAgLy9yZW5kZXIgc2hvcnQgZmxvYXRpZSBvbiB0aGUgbGVmdFxyXG4gICAgY29uc3Qgc2hvcnRGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaG9ydEZsb2F0aWUuY2xhc3NMaXN0LmFkZCgnc2lkZWZsb2F0aWUnKTtcclxuICAgIHNob3J0RmxvYXRpZS5pZCA9ICdhYm91dFVzRmxvYXRpZSc7XHJcbiAgICBhYm91dEdyaWQuYXBwZW5kQ2hpbGQoc2hvcnRGbG9hdGllKTtcclxuICAgIGNvbnN0IHNob3J0U3RvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzaG9ydFN0b3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZUZsb2F0aWVUaXRsZScpO1xyXG4gICAgc2hvcnRTdG9yeVRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcclxuICAgIHNob3J0RmxvYXRpZS5hcHBlbmRDaGlsZChzaG9ydFN0b3J5VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWJvdXRVc1RleHQuaW5uZXJIVE1MID0gJ0tvZmZlZUNvcm5lciBpcyBhbiBpbmRlcGVuZGVudCBjYWbDqSB3aXRoIGFyb3VuZCA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj4zNSBsb2NhdGlvbnM8L2E+IGluIEV1cm9wZSwgd2l0aCBtb3JlIHRvIGNvbWUgc29vbi4gPGJyPkVzdGFibGlzaGVkIGluIDIwMDMsIHdlXFwndmUgYWNjdW11bGF0ZWQgYSB0b24gb2YgZXhwZXJpZW5jZSwgdG8gc2VydmUgeW91IHdpdGggdGhlIGdyZWF0ZXN0IGtvZmZlZSBhbmQgcHJvdmlkZSBvdXRzdGFuZGluZyBjdXN0b21lciBzZXJ2aWNlLiA8YnI+IENvbWUsIHRhc3RlIG91ciBkZWxpY2lvdXMgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+a29mZmVlPC9hPiwgZ2V0IHNvbWUgd29yayBkb25lIG9yIHJlbGF4IGEgYml0Lic7XHJcbiAgICBhYm91dFVzVGV4dC5pZCA9ICdhYm91dFVzVGV4dCdcclxuICAgIHNob3J0RmxvYXRpZS5hcHBlbmRDaGlsZChhYm91dFVzVGV4dCk7XHJcblxyXG4gICAgLy9yZW5kZXIgdGhlIHJpZ2h0IGZsb2F0aWUsIG9uIHdoaWNoIGFsbCB0aGUgc2VydmljZXMgYXJlIGV4cGxhaW5lZCB3aXRoIG1vcmUgZGV0YWlsXHJcbiAgICBjb25zdCByaWdodEZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0RmxvYXRpZS5pZCA9IFwiYWJvdXRVc1JpZ2h0RmxvYXRpZVwiO1xyXG5cclxuICAgIGFib3V0R3JpZC5hcHBlbmRDaGlsZChyaWdodEZsb2F0aWUpO1xyXG5cclxuICAgIC8vc2V0IHVwIGZyZWUgd2lmaSBjYXJkIGZsb2F0aWUgdGhpbmdcclxuICAgIGNvbnN0IHdpZmlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodEZsb2F0aWUuYXBwZW5kQ2hpbGQod2lmaUNhcmQpO1xyXG5cclxuICAgIC8vc2V0IHVwIGNoYXJnaW5nIGZsb2F0aWUgdGhpbmdcclxuICAgIGNvbnN0IGNoYXJnaW5nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmFwcGVuZENoaWxkKGNoYXJnaW5nQ2FyZCk7XHJcblxyXG4gICAgLy9zZXQgdXAgYm9va2Nvcm5lciBmbG9hdGllIHRoaW5nXHJcbiAgICBjb25zdCBib29rQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmFwcGVuZENoaWxkKGJvb2tDYXJkKTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBYm91dFVzOyIsIiIsImltcG9ydCB7IGxvYWROZXh0UGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZFBhZ2UnO1xyXG5pbXBvcnQgd2lmaUltZyBmcm9tICcuLi9yZXNvdXJjZXMvd2lmaS5wbmcnO1xyXG5pbXBvcnQgY2hhcmdlSW1nIGZyb20gJy4uL3Jlc291cmNlcy9iYXR0ZXJ5LnBuZyc7XHJcbmltcG9ydCBib29rSW1nIGZyb20gJy4uL3Jlc291cmNlcy9ib29rY29ybmVyLnBuZyc7XHJcblxyXG5jb25zdCByZW5kZXJIb21lcGFnZSA9ICgpID0+IHtcclxuICAgIC8vc2V0IHVwIG1haW4gZ3JpZFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkdyaWQuaWQ9J21haW5ncmlkJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkdyaWQpO1xyXG5cclxuICAgIC8vc2V0IHVwIGxlZnQgc2lkZSBmbG9hdGllXHJcbiAgICBjb25zdCBsZWZ0U2lkZUZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdzaWRlZmxvYXRpZScpO1xyXG4gICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQobGVmdFNpZGVGbG9hdGllKTtcclxuICAgIFxyXG4gICAgLy9hZGQgbGVmdCBzaWRlIGZsb2F0aWUgY29udGVudFxyXG4gICAgY29uc3Qgc2VydmljZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzZXJ2aWNlc1RpdGxlLnRleHRDb250ZW50ID0gJ091ciBTZXJ2aWNlcyc7XHJcbiAgICBzZXJ2aWNlc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVGbG9hdGllVGl0bGUnKTtcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChzZXJ2aWNlc1RpdGxlKTtcclxuXHJcbiAgICBjb25zdCBzZXJ2aWNlc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5pZD0nc2VydmljZXNncmlkJztcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChzZXJ2aWNlc0dyaWQpO1xyXG5cclxuICAgIC8vYWRkIHNlcnZpY2VzZ3JpZCBlbGVtZW50IDEgKEZyZWUgV2lGaSlcclxuICAgIGNvbnN0IHNlcnZpY2VzZ3JpZGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlR3JpZEVsZW1lbnQnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5hcHBlbmRDaGlsZChzZXJ2aWNlc2dyaWRlbGVtZW50MSk7XHJcbiAgICBjb25zdCB3aWZpSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHdpZmlJbWFnZS5zcmMgPSB3aWZpSW1nO1xyXG4gICAgd2lmaUltYWdlLndpZHRoID0gJzY5JztcclxuICAgIHdpZmlJbWFnZS5oZWlnaHQgPSAnNjknO1xyXG4gICAgd2lmaUltYWdlLmFsdCA9ICd3aWZpJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQxLmFwcGVuZENoaWxkKHdpZmlJbWFnZSk7XHJcbiAgICBjb25zdCB3aWZpVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHdpZmlUZXh0LnRleHRDb250ZW50PSdGcmVlIFdpRmknO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDEuYXBwZW5kQ2hpbGQod2lmaVRleHQpO1xyXG5cclxuICAgIC8vYWRkIHNlcnZpY2VzZ3JpZCBlbGVtZW50IDIgKENoYXJnZVVwKVxyXG4gICAgY29uc3Qgc2VydmljZXNncmlkZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQyLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VHcmlkRWxlbWVudCcpO1xyXG4gICAgc2VydmljZXNHcmlkLmFwcGVuZENoaWxkKHNlcnZpY2VzZ3JpZGVsZW1lbnQyKTtcclxuICAgIGNvbnN0IGNoYXJnZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjaGFyZ2VJbWFnZS5zcmMgPSBjaGFyZ2VJbWc7XHJcbiAgICBjaGFyZ2VJbWFnZS53aWR0aCA9ICc2OSc7XHJcbiAgICBjaGFyZ2VJbWFnZS5oZWlnaHQ9ICc2OSc7XHJcbiAgICBjaGFyZ2VJbWFnZS5hbHQgPSAnY2hhcmdlJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQyLmFwcGVuZENoaWxkKGNoYXJnZUltYWdlKTtcclxuICAgIGNvbnN0IGNoYXJnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjaGFyZ2VUZXh0LnRleHRDb250ZW50ID0gJ0NoYXJnZVVwJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQyLmFwcGVuZENoaWxkKGNoYXJnZVRleHQpO1xyXG5cclxuICAgIC8vYWRkIHNlcnZpY2VzZ3JpZCBlbGVtZW50IDMgKEJvb2tDb3JuZXIpXHJcbiAgICBjb25zdCBzZXJ2aWNlc2dyaWRlbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDMuY2xhc3NMaXN0LmFkZCgnc2VydmljZUdyaWRFbGVtZW50Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuYXBwZW5kQ2hpbGQoc2VydmljZXNncmlkZWxlbWVudDMpO1xyXG4gICAgY29uc3QgYm9va0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBib29rSW1hZ2Uuc3JjID0gYm9va0ltZztcclxuICAgIGJvb2tJbWFnZS53aWR0aCA9ICc2MCc7XHJcbiAgICBib29rSW1hZ2UuaGVpZ2h0PSAnNjknO1xyXG4gICAgYm9va0ltYWdlLmFsdCA9ICdib29rcyc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50My5hcHBlbmRDaGlsZChib29rSW1hZ2UpO1xyXG4gICAgY29uc3QgYm9va1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBib29rVGV4dC50ZXh0Q29udGVudCA9ICdCb29rQ29ybmVyJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQzLmFwcGVuZENoaWxkKGJvb2tUZXh0KTtcclxuXHJcbiAgICAvL2FkZCBsZWZ0IGZsb2F0aWUgYnV0dG9uXHJcbiAgICBjb25zdCBsZWZ0RmxvYXRpZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24uaWQgPSAnbGVmdEZsb2F0aWVCdXR0b24nO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmxvYXRpZWJ1dHRvbicpO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24udGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdhYm91dHVzJylcclxuICAgIH0pO1xyXG4gICAgbGVmdFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKGxlZnRGbG9hdGllQnV0dG9uKTtcclxuXHJcbiAgICAvL3NldCB1cCBtaWRkbGUgZmxvYXRpZVxyXG4gICAgY29uc3QgbWlkZGxlRmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdtaWRkbGVmbG9hdGllJyk7XHJcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChtaWRkbGVGbG9hdGllKTtcclxuICAgIGNvbnN0IG1pZGRsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1pZGRsZVRpdGxlLnRleHRDb250ZW50ID0gJ0tvZmZlZUNvcm5lciBpcy4uLic7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKG1pZGRsZVRpdGxlKTtcclxuXHJcbiAgICAvL2NyZWF0ZSB1bFxyXG4gICAgY29uc3QgcGFyZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKHBhcmVudExpc3QpO1xyXG5cclxuICAgIC8vY3JlYXRlIGxpc3QgaXRlbXNcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW0xLmlubmVySFRNTCA9ICcuLi4gdGhlIG1vc3QgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+Y296eTwvYT4gc3BvdCBpbiB0b3duJztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW0yLmlubmVySFRNTCA9ICcuLi4gdGhlIGJlc3QgcGxhY2UgdG8gPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+Z2V0IHdvcmsgZG9uZSc7XHJcbiAgICBjb25zdCBtaWRkbGVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtMy5pbm5lckhUTUwgPSAnLi4uIHRoZSA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5oZWFydDwvYT4gb2YgdGhlIGNpdHknO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTQuaW5uZXJIVE1MID0gJy4uLiB0aGUgaG9tZSBvZiA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj50aGUgYmVzdCBLb2ZmZWU8L2E+JztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW01LmlubmVySFRNTCA9ICcuLi4gYWxsIGFib3V0IHRoZSA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5jb21tdW5pdHk8L2E+JztcclxuICAgIFxyXG4gICAgLy9hcHBlbmQgbGlzdCBpdGVtcyB0byB1bFxyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtMSk7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW0yKTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTMpO1xyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtNCk7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW01KTtcclxuXHJcbiAgICAvL2FkZCB0d28gbGFzdCBoMnMgdG8gbWlkZGxlIGZsb2F0aWVcclxuICAgIGNvbnN0IG1pZGRsZUJyZWFrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbWlkZGxlQnJlYWtUaXRsZS5pbm5lckhUTUwgPSAnQ2F0Y2ggYSBicmVhazxici8+b3Igd29yayBpbiBoYXJtb255JztcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQobWlkZGxlQnJlYWtUaXRsZSk7XHJcbiAgICBjb25zdCBtaWRkbGVDaG9pY2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtaWRkbGVDaG9pY2VUaXRsZS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2V0ZXh0Jyk7XHJcbiAgICBtaWRkbGVDaG9pY2VUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgY2hvaWNlIGlzIHlvdXJzLCByZWFsbHknO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5hcHBlbmRDaGlsZChtaWRkbGVDaG9pY2VUaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgcmlnaHQgZmxvYXRpZVxyXG4gICAgY29uc3QgcmlnaHRTaWRlRmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdzaWRlZmxvYXRpZScpO1xyXG4gICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRmxvYXRpZSk7XHJcbiAgICBjb25zdCByaWdodFNpZGVGbG9hdGllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVGbG9hdGllVGl0bGUnKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVUaXRsZS50ZXh0Q29udGVudCA9ICdCZXN0IE9mZmVycyc7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUZsb2F0aWVUaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgb2ZmZXJzZ3JpZFxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXJzR3JpZC5pZCA9ICdvZmZlcnNncmlkJztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZCk7XHJcblxyXG4gICAgLy9zZXQgdXAgb2ZmZXJzZ3JpZCBlbGVtZW50c1xyXG4gICAgLy9lbGVtZW50IDFcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxLmNsYXNzTGlzdC5hZGQoJ29mZmVyc0dyaWRFbGVtZW50Jyk7XHJcbiAgICBvZmZlcnNHcmlkLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MVRpdGxlLmlubmVySFRNTCA9ICdDb3JuZXI8YnI+U3BlY2lhbCc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDEuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQxVGl0bGUpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQxUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDFQcmljZS50ZXh0Q29udGVudCA9ICcyLDAw4oKsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MS5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDFQcmljZSk7XHJcbiAgICAvL2VsZW1lbnQgMlxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDIuY2xhc3NMaXN0LmFkZCgnb2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWQuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQyKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyVGl0bGUuaW5uZXJIVE1MID0gJ0tvbGQ8YnI+QnJldyc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDIuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQyVGl0bGUpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQyUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDJQcmljZS50ZXh0Q29udGVudCA9ICczLDUw4oKsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50Mi5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDJQcmljZSk7XHJcbiAgICAvL2VsZW1lbnQgM1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDMuY2xhc3NMaXN0LmFkZCgnb2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWQuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQzKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50M1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzVGl0bGUuaW5uZXJIVE1MID0gJ0tsYXNzaWM8YnI+S29mZmVlJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50My5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDNUaXRsZSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50M1ByaWNlLnRleHRDb250ZW50ID0gJzEsNTDigqwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50M1ByaWNlKTtcclxuICAgIFxyXG4gICAgLy9yaWdodHNpZGVmbG9hdGllYnV0dG9uXHJcbiAgICBjb25zdCByaWdodFNpZGVGbG9hdGllQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aWVidXR0b24nKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24uaWQgPSAncmlnaHRGbG9hdGllQnV0dG9uJztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24pO1xyXG5cclxuICAgIC8vYWRkIGNsaWNrYWJpbGl0eVxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9mZmVyc0dyaWRFbGVtZW50Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWROZXh0UGFnZSgnbWVudScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnbWVudScpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVwYWdlOyIsIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBsb2FkTmV4dFBhZ2UsIGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2FkUGFnZVwiO1xyXG5pbXBvcnQgd2lmaVN2ZyBmcm9tIFwiLi9yZXNvdXJjZXMvd2lmaS5zdmdcIjtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnSGkgaW0gYWxpdmUnKTtcclxuXHJcbmluaXRpYWxMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9