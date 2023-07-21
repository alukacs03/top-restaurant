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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n#contactgrid {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 4fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#menugrid {\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    grid-template-rows: min-content 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    grid-gap: 2rem;\r\n    background-color: none;\r\n}\r\n\r\n#contactTitle {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#menuTitle, #contactTitle {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menuTitleDiv, #contactTitleDiv {\r\n    display: flex;\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    grid-column: 1/4;\r\n    height: auto;\r\n    width: fit-content;\r\n    padding: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 2rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.menuItemBackground {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 1.8rem 0.5rem;\r\n    background-color: var(--offwhite);\r\n    display: grid;\r\n    grid-template-columns: 2fr 5px 3fr;\r\n    grid-template-rows: auto 4rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.menuItemDescription {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    border-bottom: 5px solid var(--purple);\r\n}\r\n\r\n.menuItemPrice {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: green;\r\n    border-bottom-right-radius: 1.7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.menuDividingLine {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--purple);\r\n    grid-row: 1/3;\r\n}\r\n\r\n.menuItemName {\r\n    grid-row: 1/3;\r\n\r\n}\r\n\r\n\r\n.menuElement {\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    border-radius: 2rem 0.5rem;\r\n}\r\n\r\n#aboutgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 32px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n#aboutUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\r\n\r\n#aboutUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 7px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 1fr 1fr;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n.aboutUsRightFloatieElement {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 100px 3rem auto;\r\n    justify-items: center;\r\n    align-items: center;\r\n    border-radius: 1.5rem;\r\n    background-color: var(--offwhite);\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}\r\n\r\n#footerBar {\r\n    text-align: center;\r\n    height: 25px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n#contactgrid {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 4fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#menugrid {\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    grid-template-rows: min-content 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    grid-gap: 2rem;\r\n    background-color: none;\r\n}\r\n\r\n#contactTitle {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#menuTitle, #contactTitle {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menuTitleDiv, #contactTitleDiv {\r\n    display: flex;\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    grid-column: 1/4;\r\n    height: auto;\r\n    width: fit-content;\r\n    padding: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 2rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.menuItemBackground {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 1.8rem 0.5rem;\r\n    background-color: var(--offwhite);\r\n    display: grid;\r\n    grid-template-columns: 2fr 5px 3fr;\r\n    grid-template-rows: auto 4rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.menuItemDescription {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    border-bottom: 5px solid var(--purple);\r\n}\r\n\r\n.menuItemPrice {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: green;\r\n    border-bottom-right-radius: 1.7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.menuDividingLine {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--purple);\r\n    grid-row: 1/3;\r\n}\r\n\r\n.menuItemName {\r\n    grid-row: 1/3;\r\n\r\n}\r\n\r\n\r\n.menuElement {\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    border-radius: 2rem 0.5rem;\r\n}\r\n\r\n#aboutgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 32px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n#aboutUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\r\n\r\n#aboutUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 7px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 1fr 1fr;\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n.aboutUsRightFloatieElement {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 100px 3rem auto;\r\n    justify-items: center;\r\n    align-items: center;\r\n    border-radius: 1.5rem;\r\n    background-color: var(--offwhite);\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}\r\n\r\n#footerBar {\r\n    text-align: center;\r\n    height: 25px;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _pages_aboutus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/aboutus */ "./src/pages/aboutus.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _renderNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderNavBar */ "./src/components/renderNavBar.js");
/* harmony import */ var _renderFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderFooter */ "./src/components/renderFooter.js");








// initialize the first loading of the page
const initialLoad = () => {
    document.body.style.backgroundImage = "url('666ad14339e1b3b886db.svg')";
    (0,_renderNavBar__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_renderFooter__WEBPACK_IMPORTED_MODULE_5__["default"])();
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
        ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (nextPageName == 'contact') {
        navbarButtonsNode[2].classList.add('currentPageButton')
        ;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (nextPageName == 'aboutus') {
        navbarButtonsNode[1].classList.add('currentPageButton')
        ;(0,_pages_aboutus__WEBPACK_IMPORTED_MODULE_2__["default"])();

    } else {
        (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
    (0,_renderFooter__WEBPACK_IMPORTED_MODULE_5__["default"])();

};




/***/ }),

/***/ "./src/components/renderFooter.js":
/*!****************************************!*\
  !*** ./src/components/renderFooter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderFooter = () => {
    const content = document.querySelector('#content');
    const footerBar = document.createElement('div');
    const footerText = document.createElement('p');
    footerBar.id = "footerBar";
    content.appendChild(footerBar);
    footerText.innerHTML = 'Made by <a href="https://github.com/lukiakos" target="_blank" rel="noopener noreferrer">Ákos Lukács</a> for The Odin Project'
    footerBar.appendChild(footerText)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);

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
/* harmony import */ var _resources_wifi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/wifi.png */ "./src/resources/wifi.png");
/* harmony import */ var _resources_battery_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/battery.png */ "./src/resources/battery.png");
/* harmony import */ var _resources_bookcorner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/bookcorner.png */ "./src/resources/bookcorner.png");





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
    wifiCard.classList.add('aboutUsRightFloatieElement');
    const wifiTitle = document.createElement('h2');
    wifiTitle.textContent = "Free WiFi";
    const wifiImage = document.createElement('img');
    wifiImage.src = _resources_wifi_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    wifiImage.width = '69';
    wifiImage.height = '69';
    wifiImage.alt = 'wifi';
    wifiCard.appendChild(wifiImage);
    wifiCard.appendChild(wifiTitle);
    const wifiText = document.createElement('p');
    wifiText.innerHTML = "Occaecat proident pariatur laborum ea eiusmod sit pariatur aliqua aliqua sunt. Deserunt dolor quis ad reprehenderit laboris pariatur ullamco culpa qui deserunt dolor. Pariatur commodo culpa officia esse. Est in esse proident commodo veniam sint aliquip nisi sunt nostrud mollit.";
    wifiCard.appendChild(wifiText);

    //set up charging floatie thing
    const chargingCard = document.createElement('div');
    rightFloatie.appendChild(chargingCard);
    chargingCard.classList.add('aboutUsRightFloatieElement');
    const chargingTitle = document.createElement('h2');
    chargingTitle.textContent = "Free Charging";
    const chargeImage = document.createElement('img');
    chargeImage.src = _resources_battery_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    chargeImage.width = '69';
    chargeImage.height= '69';
    chargeImage.alt = 'charge';
    chargingCard.appendChild(chargeImage);
    chargingCard.appendChild(chargingTitle);
    const chargeText = document.createElement('p');
    chargeText.innerHTML = "Occaecat proident pariatur laborum ea eiusmod sit pariatur aliqua aliqua sunt. Deserunt dolor quis ad reprehenderit laboris pariatur ullamco culpa qui deserunt dolor. Pariatur commodo culpa officia esse. Est in esse proident commodo veniam sint aliquip nisi sunt nostrud mollit.";
    chargingCard.appendChild(chargeText);


    //set up bookcorner floatie thing
    const bookCard = document.createElement('div');
    rightFloatie.appendChild(bookCard);
    bookCard.classList.add('aboutUsRightFloatieElement');
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = "BookCorner";
    const bookImage = document.createElement('img');
    bookImage.src = _resources_bookcorner_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    bookImage.width = '60';
    bookImage.height= '69';
    bookImage.alt = 'books';
    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookTitle);
    const bookText = document.createElement('p');
    bookText.innerHTML = "Occaecat proident pariatur laborum ea eiusmod sit pariatur aliqua aliqua sunt. Deserunt dolor quis ad reprehenderit laboris pariatur ullamco culpa qui deserunt dolor. Pariatur commodo culpa officia esse. Est in esse proident commodo veniam sint aliquip nisi sunt nostrud mollit.";
    bookCard.appendChild(bookText);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutUs);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderContact = () => {
    //basic grid setup
    const content = document.querySelector('#content');
    const contactGrid = document.createElement('div');
    contactGrid.id = 'contactgrid';
    content.appendChild(contactGrid);
    const contactTitle = document.createElement('h1');
    contactTitle.id = "contactTitle"
    contactTitle.textContent = 'Contact us!'
    contactGrid.appendChild(contactTitle);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderMenu = () => {
    //basic grid setup
    const content = document.querySelector('#content');
    const menuGrid = document.createElement('div');
    menuGrid.id = 'menugrid';
    const menuTitleDiv = document.createElement('div');
    menuTitleDiv.id = 'menuTitleDiv';
    content.appendChild(menuGrid);
    menuGrid.appendChild(menuTitleDiv);
    const menuTitle = document.createElement('h1');
    menuTitle.id = "menuTitle"
    menuTitle.textContent = 'Take a gander and follow your heart...'
    menuTitleDiv.appendChild(menuTitle);

    //set up first item
    const itemOne = document.createElement('div');
    itemOne.classList.add('menuElement');
    menuGrid.appendChild(itemOne);
    const itemOneBg = document.createElement('div');
    itemOneBg.classList.add('menuItemBackground');
    itemOne.appendChild(itemOneBg);
    const itemOneName = document.createElement('h2');
    itemOneName.innerHTML = 'Corner <br> Special';
    itemOneName.classList.add('menuItemName');
    itemOneBg.appendChild(itemOneName);
    const dividingLineOne = document.createElement('div')
    dividingLineOne.classList.add('menuDividingLine')
    itemOneBg.appendChild(dividingLineOne)
    const itemOneDescription = document.createElement('p');
    itemOneDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemOneDescription.classList.add('menuItemDescription');
    itemOneBg.appendChild(itemOneDescription);
    const itemOnePrice = document.createElement('p');
    itemOnePrice.textContent = '2,00€';
    itemOnePrice.classList.add('menuItemPrice');
    itemOneBg.appendChild(itemOnePrice)

    //set up second item
    const itemTwo = document.createElement('div');
    itemTwo.classList.add('menuElement');
    menuGrid.appendChild(itemTwo);
    const itemTwoBg = document.createElement('div');
    itemTwoBg.classList.add('menuItemBackground');
    itemTwo.appendChild(itemTwoBg);

    //third item
    const itemThree = document.createElement('div');
    itemThree.classList.add('menuElement');
    menuGrid.appendChild(itemThree);
    const itemThreeBg = document.createElement('div');
    itemThreeBg.classList.add('menuItemBackground');
    itemThree.appendChild(itemThreeBg);

    //fourth item
    const itemFour = document.createElement('div');
    itemFour.classList.add('menuElement');
    menuGrid.appendChild(itemFour);
    const itemFourBg = document.createElement('div');
    itemFourBg.classList.add('menuItemBackground');
    itemFour.appendChild(itemFourBg);

    //fifth item
    const itemFive = document.createElement('div');
    itemFive.classList.add('menuElement');
    menuGrid.appendChild(itemFive);
    const itemFiveBg = document.createElement('div');
    itemFiveBg.classList.add('menuItemBackground');
    itemFive.appendChild(itemFiveBg);

    //sixth item
    const itemSix = document.createElement('div');
    itemSix.classList.add('menuElement');
    menuGrid.appendChild(itemSix);
    const itemSixBg = document.createElement('div');
    itemSixBg.classList.add('menuItemBackground');
    itemSix.appendChild(itemSixBg);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUss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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUVBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQVk7QUFDeEIsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLFFBQVEsa0VBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ3pMN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7O1VDOUV6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNvQztBQUN2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcmVzb3VyY2VzL2JhdHRlcnkucG5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy9ib29rY29ybmVyLnBuZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvd2lmaS5wbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvd2lmaS5zdmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3JlbmRlckZvb3Rlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL3JlbmRlck5hdkJhci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9hYm91dHVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLW9yYW5nZTogI0QxNTEyRDtcXHJcXG4gICAgLS1wdXJwbGU6ICM0MTE1MzA7XFxyXFxuICAgIC0tbGlnaHRjb2xvdXI6ICNGNUM3QTk7XFxyXFxuICAgIC0tb2Zmd2hpdGU6ICNEOUQ5RDk7XFxyXFxuICAgIC0tYnV0dG9uY29sb3VyOiAjRjVDN0E5O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Y29sb3VyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCwgI2Fib3V0Z3JpZCwgI2NvbnRhY3RncmlkLCAjbWVudWdyaWQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxOTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmFuZ2V0ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSlcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRhY3RncmlkIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBncmlkLWdhcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RUaXRsZSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxufVxcclxcblxcclxcbiNtZW51VGl0bGUsICNjb250YWN0VGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51VGl0bGVEaXYsICNjb250YWN0VGl0bGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbUJhY2tncm91bmQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjhyZW0gMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVweCAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA0cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1QcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS43cmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51RGl2aWRpbmdMaW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtTmFtZSB7XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51RWxlbWVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNhYm91dGdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyYnV0dG9uIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpblRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbSAxLjVyZW0gM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVGbG9hdGllVGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXRpZWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uY29sb3VyKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VydmljZXNncmlkLCAjb2ZmZXJzZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzRmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNUZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZUdyaWRFbGVtZW50LCAub2ZmZXJzR3JpZEVsZW1lbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY5cHggYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlR3JpZEVsZW1lbnQgcCwgLm9mZmVyc0dyaWRFbGVtZW50IHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKVxcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIGgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCwgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbWFyZ2luOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc1JpZ2h0RmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRVc1JpZ2h0RmxvYXRpZUVsZW1lbnQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDNyZW0gYXV0bztcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY3VycmVudFBhZ2VCdXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyQmFyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0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QUNsQixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1vcmFuZ2U6ICNEMTUxMkQ7XFxyXFxuICAgIC0tcHVycGxlOiAjNDExNTMwO1xcclxcbiAgICAtLWxpZ2h0Y29sb3VyOiAjRjVDN0E5O1xcclxcbiAgICAtLW9mZndoaXRlOiAjRDlEOUQ5O1xcclxcbiAgICAtLWJ1dHRvbmNvbG91cjogI0Y1QzdBOTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbmdyaWQsICNhYm91dGdyaWQsICNjb250YWN0Z3JpZCwgI21lbnVncmlkIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdldGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpXFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250YWN0Z3JpZCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZ3JpZC1nYXA6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0VGl0bGUge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRpdGxlLCAjY29udGFjdFRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRpdGxlRGl2LCAjY29udGFjdFRpdGxlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1CYWNrZ3JvdW5kIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS44cmVtIDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1cHggM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNHJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1EZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcHVycGxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtUHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuN3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWVudURpdmlkaW5nTGluZSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbU5hbWUge1xcclxcbiAgICBncmlkLXJvdzogMS8zO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUVsZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcmJ1dHRvbiB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5UaXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbmdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW0gMS41cmVtIDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlRmxvYXRpZVRpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0aWVidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbmNvbG91cik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY2VzZ3JpZCwgI29mZmVyc2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc0Zsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzVGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCwgLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OXB4IGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vZmZlcnNHcmlkRWxlbWVudCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZUdyaWRFbGVtZW50IHAsIC5vZmZlcnNHcmlkRWxlbWVudCBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSlcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxudWwsIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIG1hcmdpbjogMS40cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNSaWdodEZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAzcmVtIGF1dG87XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmN1cnJlbnRQYWdlQnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlckJhciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNjhlMWFkNTUwMTM0NzM2NWMxMWMyNzNmZDEwN2ZmOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzlkNDg3MmExYWQzYjVlZmVkNTA0ODFhODc3MGI4NTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjllZGRkNzYwYzZkOTE4NjZkNGY3MjQ2YTdjNTllNTMyLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBmaWxsPVxcXCIjNDExNTMwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTIwLjM2NCwzYTEsMSwwLDAsMS0xLDFBMTUuMzgxLDE1LjM4MSwwLDAsMCw0LDE5LjM2M2ExLDEsMCwwLDEtMiwwQTE3LjM4NCwxNy4zODQsMCwwLDEsMTkuMzY0LDIsMSwxLDAsMCwxLDIwLjM2NCwzWk03LjkwOSwyMC4zNjNhMSwxLDAsMCwwLDEtMUExMC40NjcsMTAuNDY3LDAsMCwxLDE5LjM2NCw4LjkwOWExLDEsMCwxLDAsMC0yQTEyLjQ2OSwxMi40NjksMCwwLDAsNi45MDksMTkuMzYzLDEsMSwwLDAsMCw3LjkwOSwyMC4zNjNabTUuOTA5LTFhNS41NTIsNS41NTIsMCwwLDEsNS41NDYtNS41NDUsMSwxLDAsMCwwLDAtMiw3LjU1NCw3LjU1NCwwLDAsMC03LjU0Niw3LjU0NSwxLDEsMCwwLDAsMiwwWm03LjE4MiwwQTEuNjM3LDEuNjM3LDAsMSwwLDE5LjM2NCwyMSwxLjYzNywxLjYzNywwLDAsMCwyMSwxOS4zNjRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgcmVuZGVySG9tZXBhZ2UgZnJvbSBcIi4uL3BhZ2VzL2hvbWVwYWdlXCI7XHJcbmltcG9ydCByZW5kZXJNZW51IGZyb20gXCIuLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCByZW5kZXJBYm91dFVzIGZyb20gXCIuLi9wYWdlcy9hYm91dHVzXCI7XHJcbmltcG9ydCByZW5kZXJDb250YWN0IGZyb20gXCIuLi9wYWdlcy9jb250YWN0XCI7XHJcbmltcG9ydCByZW5kZXJOYXZCYXIgZnJvbSBcIi4vcmVuZGVyTmF2QmFyXCI7XHJcbmltcG9ydCByZW5kZXJGb290ZXIgZnJvbSBcIi4vcmVuZGVyRm9vdGVyXCI7XHJcblxyXG5cclxuLy8gaW5pdGlhbGl6ZSB0aGUgZmlyc3QgbG9hZGluZyBvZiB0aGUgcGFnZVxyXG5jb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJzY2NmFkMTQzMzllMWIzYjg4NmRiLnN2ZycpXCI7XHJcbiAgICByZW5kZXJOYXZCYXIoKTtcclxuICAgIHJlbmRlckhvbWVwYWdlKCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxufTtcclxuXHJcblxyXG4vL2xvYWQgdGhlIHBhZ2UgY2xpY2tlZCBieSB0aGUgdXNlclxyXG5jb25zdCBsb2FkTmV4dFBhZ2UgPSAobmV4dFBhZ2VOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcmVuZGVyTmF2QmFyKCk7XHJcbiAgICBjb25zdCBuYXZiYXJCdXR0b25zTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJidXR0b24nKTtcclxuICAgIG5hdmJhckJ1dHRvbnNOb2RlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRQYWdlQnV0dG9uJyk7XHJcbiAgICB9KVxyXG4gICAgaWYgKG5leHRQYWdlTmFtZSA9PSAnbWVudScpIHtcclxuICAgICAgICBuYXZiYXJCdXR0b25zTm9kZVswXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UGFnZUJ1dHRvbicpXHJcbiAgICAgICAgcmVuZGVyTWVudSgpO1xyXG4gICAgfSBlbHNlIGlmIChuZXh0UGFnZU5hbWUgPT0gJ2NvbnRhY3QnKSB7XHJcbiAgICAgICAgbmF2YmFyQnV0dG9uc05vZGVbMl0uY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2VCdXR0b24nKVxyXG4gICAgICAgIHJlbmRlckNvbnRhY3QoKTtcclxuICAgIH0gZWxzZSBpZiAobmV4dFBhZ2VOYW1lID09ICdhYm91dHVzJykge1xyXG4gICAgICAgIG5hdmJhckJ1dHRvbnNOb2RlWzFdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQYWdlQnV0dG9uJylcclxuICAgICAgICByZW5kZXJBYm91dFVzKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZW5kZXJIb21lcGFnZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcblxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7IGluaXRpYWxMb2FkLCBsb2FkTmV4dFBhZ2UgfTsiLCJjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb3RlckJhci5pZCA9IFwiZm9vdGVyQmFyXCI7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckJhcik7XHJcbiAgICBmb290ZXJUZXh0LmlubmVySFRNTCA9ICdNYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbHVraWFrb3NcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+w4Frb3MgTHVrw6FjczwvYT4gZm9yIFRoZSBPZGluIFByb2plY3QnXHJcbiAgICBmb290ZXJCYXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRm9vdGVyOyIsImltcG9ydCB7IGxvYWROZXh0UGFnZSB9IGZyb20gJy4vbG9hZFBhZ2UnO1xyXG5cclxuY29uc3QgcmVuZGVyTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IHVwIGhlYWRlciBkaXZcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlckRpdi5pZD0naGVhZGVyJztcclxuICAgIGNvbnRlbnQucHJlcGVuZChoZWFkZXJEaXYpO1xyXG4gICAgXHJcbiAgICAvL2NyZWF0ZSBtYWluIHRpdGxlXHJcbiAgICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJLb2ZmZWVDb3JuZXJcIjtcclxuICAgIG1haW5UaXRsZS5pZCA9ICdtYWluVGl0bGUnO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgYnV0dG9uIGRpdlxyXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25EaXYuaWQgPSBcImJ1dHRvbmRpdlwiO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcblxyXG4gICAgLy9hZGQgYnV0dG9uc1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbWVudUJ1dHRvbi5pZD1cImJ1dHRvbk1lbnVcIjtcclxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJhcmJ1dHRvbicpXHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgYWJvdXRVc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWJvdXRVc0J1dHRvbi5pZD1cImJ1dHRvbkFib3V0VXNcIjtcclxuICAgIGFib3V0VXNCdXR0b24udGV4dENvbnRlbnQ9J0Fib3V0IFVzJztcclxuICAgIGFib3V0VXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyYnV0dG9uJylcclxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChhYm91dFVzQnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb250YWN0QnV0dG9uLmlkPSdidXR0b25Db250YWN0JztcclxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQ9J0NvbnRhY3QnO1xyXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJidXR0b24nKVxyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xyXG5cclxuICAgIC8vYWRkIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnbWVudScpXHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdjb250YWN0JylcclxuICAgIH0pO1xyXG4gICAgYWJvdXRVc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ2Fib3V0dXMnKVxyXG4gICAgfSk7XHJcbiAgICBtYWluVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdob21lcGFnZScpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTmF2QmFyOyIsImltcG9ydCB3aWZpSW1nIGZyb20gJy4uL3Jlc291cmNlcy93aWZpLnBuZyc7XHJcbmltcG9ydCBjaGFyZ2VJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL2JhdHRlcnkucG5nJztcclxuaW1wb3J0IGJvb2tJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL2Jvb2tjb3JuZXIucG5nJztcclxuXHJcblxyXG5jb25zdCByZW5kZXJBYm91dFVzID0gKCkgPT4ge1xyXG4gICAgLy9zZXQgdXAgYmFzaWMgZ3JpZFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBhYm91dEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0R3JpZC5pZCA9ICdhYm91dGdyaWQnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dEdyaWQpO1xyXG5cclxuICAgIC8vcmVuZGVyIHNob3J0IGZsb2F0aWUgb24gdGhlIGxlZnRcclxuICAgIGNvbnN0IHNob3J0RmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hvcnRGbG9hdGllLmNsYXNzTGlzdC5hZGQoJ3NpZGVmbG9hdGllJyk7XHJcbiAgICBzaG9ydEZsb2F0aWUuaWQgPSAnYWJvdXRVc0Zsb2F0aWUnO1xyXG4gICAgYWJvdXRHcmlkLmFwcGVuZENoaWxkKHNob3J0RmxvYXRpZSk7XHJcbiAgICBjb25zdCBzaG9ydFN0b3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc2hvcnRTdG9yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVGbG9hdGllVGl0bGUnKTtcclxuICAgIHNob3J0U3RvcnlUaXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XHJcbiAgICBzaG9ydEZsb2F0aWUuYXBwZW5kQ2hpbGQoc2hvcnRTdG9yeVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBhYm91dFVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0VXNUZXh0LmlubmVySFRNTCA9ICdLb2ZmZWVDb3JuZXIgaXMgYW4gaW5kZXBlbmRlbnQgY2Fmw6kgd2l0aCBhcm91bmQgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+MzUgbG9jYXRpb25zPC9hPiBpbiBFdXJvcGUsIHdpdGggbW9yZSB0byBjb21lIHNvb24uIDxicj5Fc3RhYmxpc2hlZCBpbiAyMDAzLCB3ZVxcJ3ZlIGFjY3VtdWxhdGVkIGEgdG9uIG9mIGV4cGVyaWVuY2UsIHRvIHNlcnZlIHlvdSB3aXRoIHRoZSBncmVhdGVzdCBrb2ZmZWUgYW5kIHByb3ZpZGUgb3V0c3RhbmRpbmcgY3VzdG9tZXIgc2VydmljZS4gPGJyPiBDb21lLCB0YXN0ZSBvdXIgZGVsaWNpb3VzIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmtvZmZlZTwvYT4sIGdldCBzb21lIHdvcmsgZG9uZSBvciByZWxheCBhIGJpdC4nO1xyXG4gICAgYWJvdXRVc1RleHQuaWQgPSAnYWJvdXRVc1RleHQnXHJcbiAgICBzaG9ydEZsb2F0aWUuYXBwZW5kQ2hpbGQoYWJvdXRVc1RleHQpO1xyXG5cclxuICAgIC8vcmVuZGVyIHRoZSByaWdodCBmbG9hdGllLCBvbiB3aGljaCBhbGwgdGhlIHNlcnZpY2VzIGFyZSBleHBsYWluZWQgd2l0aCBtb3JlIGRldGFpbFxyXG4gICAgY29uc3QgcmlnaHRGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodEZsb2F0aWUuaWQgPSBcImFib3V0VXNSaWdodEZsb2F0aWVcIjtcclxuXHJcbiAgICBhYm91dEdyaWQuYXBwZW5kQ2hpbGQocmlnaHRGbG9hdGllKTtcclxuXHJcbiAgICAvL3NldCB1cCBmcmVlIHdpZmkgY2FyZCBmbG9hdGllIHRoaW5nXHJcbiAgICBjb25zdCB3aWZpQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmFwcGVuZENoaWxkKHdpZmlDYXJkKTtcclxuICAgIHdpZmlDYXJkLmNsYXNzTGlzdC5hZGQoJ2Fib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50Jyk7XHJcbiAgICBjb25zdCB3aWZpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgd2lmaVRpdGxlLnRleHRDb250ZW50ID0gXCJGcmVlIFdpRmlcIjtcclxuICAgIGNvbnN0IHdpZmlJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgd2lmaUltYWdlLnNyYyA9IHdpZmlJbWc7XHJcbiAgICB3aWZpSW1hZ2Uud2lkdGggPSAnNjknO1xyXG4gICAgd2lmaUltYWdlLmhlaWdodCA9ICc2OSc7XHJcbiAgICB3aWZpSW1hZ2UuYWx0ID0gJ3dpZmknO1xyXG4gICAgd2lmaUNhcmQuYXBwZW5kQ2hpbGQod2lmaUltYWdlKTtcclxuICAgIHdpZmlDYXJkLmFwcGVuZENoaWxkKHdpZmlUaXRsZSk7XHJcbiAgICBjb25zdCB3aWZpVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHdpZmlUZXh0LmlubmVySFRNTCA9IFwiT2NjYWVjYXQgcHJvaWRlbnQgcGFyaWF0dXIgbGFib3J1bSBlYSBlaXVzbW9kIHNpdCBwYXJpYXR1ciBhbGlxdWEgYWxpcXVhIHN1bnQuIERlc2VydW50IGRvbG9yIHF1aXMgYWQgcmVwcmVoZW5kZXJpdCBsYWJvcmlzIHBhcmlhdHVyIHVsbGFtY28gY3VscGEgcXVpIGRlc2VydW50IGRvbG9yLiBQYXJpYXR1ciBjb21tb2RvIGN1bHBhIG9mZmljaWEgZXNzZS4gRXN0IGluIGVzc2UgcHJvaWRlbnQgY29tbW9kbyB2ZW5pYW0gc2ludCBhbGlxdWlwIG5pc2kgc3VudCBub3N0cnVkIG1vbGxpdC5cIjtcclxuICAgIHdpZmlDYXJkLmFwcGVuZENoaWxkKHdpZmlUZXh0KTtcclxuXHJcbiAgICAvL3NldCB1cCBjaGFyZ2luZyBmbG9hdGllIHRoaW5nXHJcbiAgICBjb25zdCBjaGFyZ2luZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0RmxvYXRpZS5hcHBlbmRDaGlsZChjaGFyZ2luZ0NhcmQpO1xyXG4gICAgY2hhcmdpbmdDYXJkLmNsYXNzTGlzdC5hZGQoJ2Fib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50Jyk7XHJcbiAgICBjb25zdCBjaGFyZ2luZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNoYXJnaW5nVGl0bGUudGV4dENvbnRlbnQgPSBcIkZyZWUgQ2hhcmdpbmdcIjtcclxuICAgIGNvbnN0IGNoYXJnZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjaGFyZ2VJbWFnZS5zcmMgPSBjaGFyZ2VJbWc7XHJcbiAgICBjaGFyZ2VJbWFnZS53aWR0aCA9ICc2OSc7XHJcbiAgICBjaGFyZ2VJbWFnZS5oZWlnaHQ9ICc2OSc7XHJcbiAgICBjaGFyZ2VJbWFnZS5hbHQgPSAnY2hhcmdlJztcclxuICAgIGNoYXJnaW5nQ2FyZC5hcHBlbmRDaGlsZChjaGFyZ2VJbWFnZSk7XHJcbiAgICBjaGFyZ2luZ0NhcmQuYXBwZW5kQ2hpbGQoY2hhcmdpbmdUaXRsZSk7XHJcbiAgICBjb25zdCBjaGFyZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2hhcmdlVGV4dC5pbm5lckhUTUwgPSBcIk9jY2FlY2F0IHByb2lkZW50IHBhcmlhdHVyIGxhYm9ydW0gZWEgZWl1c21vZCBzaXQgcGFyaWF0dXIgYWxpcXVhIGFsaXF1YSBzdW50LiBEZXNlcnVudCBkb2xvciBxdWlzIGFkIHJlcHJlaGVuZGVyaXQgbGFib3JpcyBwYXJpYXR1ciB1bGxhbWNvIGN1bHBhIHF1aSBkZXNlcnVudCBkb2xvci4gUGFyaWF0dXIgY29tbW9kbyBjdWxwYSBvZmZpY2lhIGVzc2UuIEVzdCBpbiBlc3NlIHByb2lkZW50IGNvbW1vZG8gdmVuaWFtIHNpbnQgYWxpcXVpcCBuaXNpIHN1bnQgbm9zdHJ1ZCBtb2xsaXQuXCI7XHJcbiAgICBjaGFyZ2luZ0NhcmQuYXBwZW5kQ2hpbGQoY2hhcmdlVGV4dCk7XHJcblxyXG5cclxuICAgIC8vc2V0IHVwIGJvb2tjb3JuZXIgZmxvYXRpZSB0aGluZ1xyXG4gICAgY29uc3QgYm9va0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0RmxvYXRpZS5hcHBlbmRDaGlsZChib29rQ2FyZCk7XHJcbiAgICBib29rQ2FyZC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzUmlnaHRGbG9hdGllRWxlbWVudCcpO1xyXG4gICAgY29uc3QgYm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGJvb2tUaXRsZS50ZXh0Q29udGVudCA9IFwiQm9va0Nvcm5lclwiO1xyXG4gICAgY29uc3QgYm9va0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBib29rSW1hZ2Uuc3JjID0gYm9va0ltZztcclxuICAgIGJvb2tJbWFnZS53aWR0aCA9ICc2MCc7XHJcbiAgICBib29rSW1hZ2UuaGVpZ2h0PSAnNjknO1xyXG4gICAgYm9va0ltYWdlLmFsdCA9ICdib29rcyc7XHJcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rSW1hZ2UpO1xyXG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKTtcclxuICAgIGNvbnN0IGJvb2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYm9va1RleHQuaW5uZXJIVE1MID0gXCJPY2NhZWNhdCBwcm9pZGVudCBwYXJpYXR1ciBsYWJvcnVtIGVhIGVpdXNtb2Qgc2l0IHBhcmlhdHVyIGFsaXF1YSBhbGlxdWEgc3VudC4gRGVzZXJ1bnQgZG9sb3IgcXVpcyBhZCByZXByZWhlbmRlcml0IGxhYm9yaXMgcGFyaWF0dXIgdWxsYW1jbyBjdWxwYSBxdWkgZGVzZXJ1bnQgZG9sb3IuIFBhcmlhdHVyIGNvbW1vZG8gY3VscGEgb2ZmaWNpYSBlc3NlLiBFc3QgaW4gZXNzZSBwcm9pZGVudCBjb21tb2RvIHZlbmlhbSBzaW50IGFsaXF1aXAgbmlzaSBzdW50IG5vc3RydWQgbW9sbGl0LlwiO1xyXG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va1RleHQpO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0VXM7IiwiY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcclxuICAgIC8vYmFzaWMgZ3JpZCBzZXR1cFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBjb250YWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEdyaWQuaWQgPSAnY29udGFjdGdyaWQnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0R3JpZCk7XHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29udGFjdFRpdGxlLmlkID0gXCJjb250YWN0VGl0bGVcIlxyXG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMhJ1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udGFjdDsiLCJpbXBvcnQgeyBsb2FkTmV4dFBhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRQYWdlJztcclxuaW1wb3J0IHdpZmlJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL3dpZmkucG5nJztcclxuaW1wb3J0IGNoYXJnZUltZyBmcm9tICcuLi9yZXNvdXJjZXMvYmF0dGVyeS5wbmcnO1xyXG5pbXBvcnQgYm9va0ltZyBmcm9tICcuLi9yZXNvdXJjZXMvYm9va2Nvcm5lci5wbmcnO1xyXG5cclxuY29uc3QgcmVuZGVySG9tZXBhZ2UgPSAoKSA9PiB7XHJcbiAgICAvL3NldCB1cCBtYWluIGdyaWRcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgbWFpbkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW5HcmlkLmlkPSdtYWluZ3JpZCc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5HcmlkKTtcclxuXHJcbiAgICAvL3NldCB1cCBsZWZ0IHNpZGUgZmxvYXRpZVxyXG4gICAgY29uc3QgbGVmdFNpZGVGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuY2xhc3NMaXN0LmFkZCgnc2lkZWZsb2F0aWUnKTtcclxuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKGxlZnRTaWRlRmxvYXRpZSk7XHJcbiAgICBcclxuICAgIC8vYWRkIGxlZnQgc2lkZSBmbG9hdGllIGNvbnRlbnRcclxuICAgIGNvbnN0IHNlcnZpY2VzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc2VydmljZXNUaXRsZS50ZXh0Q29udGVudCA9ICdPdXIgU2VydmljZXMnO1xyXG4gICAgc2VydmljZXNUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlRmxvYXRpZVRpdGxlJyk7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQoc2VydmljZXNUaXRsZSk7XHJcblxyXG4gICAgY29uc3Qgc2VydmljZXNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuaWQ9J3NlcnZpY2VzZ3JpZCc7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQoc2VydmljZXNHcmlkKTtcclxuXHJcbiAgICAvL2FkZCBzZXJ2aWNlc2dyaWQgZWxlbWVudCAxIChGcmVlIFdpRmkpXHJcbiAgICBjb25zdCBzZXJ2aWNlc2dyaWRlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnc2VydmljZUdyaWRFbGVtZW50Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuYXBwZW5kQ2hpbGQoc2VydmljZXNncmlkZWxlbWVudDEpO1xyXG4gICAgY29uc3Qgd2lmaUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB3aWZpSW1hZ2Uuc3JjID0gd2lmaUltZztcclxuICAgIHdpZmlJbWFnZS53aWR0aCA9ICc2OSc7XHJcbiAgICB3aWZpSW1hZ2UuaGVpZ2h0ID0gJzY5JztcclxuICAgIHdpZmlJbWFnZS5hbHQgPSAnd2lmaSc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50MS5hcHBlbmRDaGlsZCh3aWZpSW1hZ2UpO1xyXG4gICAgY29uc3Qgd2lmaVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB3aWZpVGV4dC50ZXh0Q29udGVudD0nRnJlZSBXaUZpJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQxLmFwcGVuZENoaWxkKHdpZmlUZXh0KTtcclxuXHJcbiAgICAvL2FkZCBzZXJ2aWNlc2dyaWQgZWxlbWVudCAyIChDaGFyZ2VVcClcclxuICAgIGNvbnN0IHNlcnZpY2VzZ3JpZGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlR3JpZEVsZW1lbnQnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5hcHBlbmRDaGlsZChzZXJ2aWNlc2dyaWRlbGVtZW50Mik7XHJcbiAgICBjb25zdCBjaGFyZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY2hhcmdlSW1hZ2Uuc3JjID0gY2hhcmdlSW1nO1xyXG4gICAgY2hhcmdlSW1hZ2Uud2lkdGggPSAnNjknO1xyXG4gICAgY2hhcmdlSW1hZ2UuaGVpZ2h0PSAnNjknO1xyXG4gICAgY2hhcmdlSW1hZ2UuYWx0ID0gJ2NoYXJnZSc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50Mi5hcHBlbmRDaGlsZChjaGFyZ2VJbWFnZSk7XHJcbiAgICBjb25zdCBjaGFyZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2hhcmdlVGV4dC50ZXh0Q29udGVudCA9ICdDaGFyZ2VVcCc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50Mi5hcHBlbmRDaGlsZChjaGFyZ2VUZXh0KTtcclxuXHJcbiAgICAvL2FkZCBzZXJ2aWNlc2dyaWQgZWxlbWVudCAzIChCb29rQ29ybmVyKVxyXG4gICAgY29uc3Qgc2VydmljZXNncmlkZWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQzLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VHcmlkRWxlbWVudCcpO1xyXG4gICAgc2VydmljZXNHcmlkLmFwcGVuZENoaWxkKHNlcnZpY2VzZ3JpZGVsZW1lbnQzKTtcclxuICAgIGNvbnN0IGJvb2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYm9va0ltYWdlLnNyYyA9IGJvb2tJbWc7XHJcbiAgICBib29rSW1hZ2Uud2lkdGggPSAnNjAnO1xyXG4gICAgYm9va0ltYWdlLmhlaWdodD0gJzY5JztcclxuICAgIGJvb2tJbWFnZS5hbHQgPSAnYm9va3MnO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDMuYXBwZW5kQ2hpbGQoYm9va0ltYWdlKTtcclxuICAgIGNvbnN0IGJvb2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYm9va1RleHQudGV4dENvbnRlbnQgPSAnQm9va0Nvcm5lcic7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50My5hcHBlbmRDaGlsZChib29rVGV4dCk7XHJcblxyXG4gICAgLy9hZGQgbGVmdCBmbG9hdGllIGJ1dHRvblxyXG4gICAgY29uc3QgbGVmdEZsb2F0aWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLmlkID0gJ2xlZnRGbG9hdGllQnV0dG9uJztcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aWVidXR0b24nKTtcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcclxuICAgIGxlZnRGbG9hdGllQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnYWJvdXR1cycpXHJcbiAgICB9KTtcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChsZWZ0RmxvYXRpZUJ1dHRvbik7XHJcblxyXG4gICAgLy9zZXQgdXAgbWlkZGxlIGZsb2F0aWVcclxuICAgIGNvbnN0IG1pZGRsZUZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1pZGRsZUZsb2F0aWUuY2xhc3NMaXN0LmFkZCgnbWlkZGxlZmxvYXRpZScpO1xyXG4gICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQobWlkZGxlRmxvYXRpZSk7XHJcbiAgICBjb25zdCBtaWRkbGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBtaWRkbGVUaXRsZS50ZXh0Q29udGVudCA9ICdLb2ZmZWVDb3JuZXIgaXMuLi4nO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5hcHBlbmRDaGlsZChtaWRkbGVUaXRsZSk7XHJcblxyXG4gICAgLy9jcmVhdGUgdWxcclxuICAgIGNvbnN0IHBhcmVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5hcHBlbmRDaGlsZChwYXJlbnRMaXN0KTtcclxuXHJcbiAgICAvL2NyZWF0ZSBsaXN0IGl0ZW1zXHJcbiAgICBjb25zdCBtaWRkbGVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtMS5pbm5lckhUTUwgPSAnLi4uIHRoZSBtb3N0IDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmNvenk8L2E+IHNwb3QgaW4gdG93bic7XHJcbiAgICBjb25zdCBtaWRkbGVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtMi5pbm5lckhUTUwgPSAnLi4uIHRoZSBiZXN0IHBsYWNlIHRvIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmdldCB3b3JrIGRvbmUnO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTMuaW5uZXJIVE1MID0gJy4uLiB0aGUgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+aGVhcnQ8L2E+IG9mIHRoZSBjaXR5JztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW00LmlubmVySFRNTCA9ICcuLi4gdGhlIGhvbWUgb2YgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+dGhlIGJlc3QgS29mZmVlPC9hPic7XHJcbiAgICBjb25zdCBtaWRkbGVJdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtNS5pbm5lckhUTUwgPSAnLi4uIGFsbCBhYm91dCB0aGUgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+Y29tbXVuaXR5PC9hPic7XHJcbiAgICBcclxuICAgIC8vYXBwZW5kIGxpc3QgaXRlbXMgdG8gdWxcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTEpO1xyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtMik7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW0zKTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTQpO1xyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtNSk7XHJcblxyXG4gICAgLy9hZGQgdHdvIGxhc3QgaDJzIHRvIG1pZGRsZSBmbG9hdGllXHJcbiAgICBjb25zdCBtaWRkbGVCcmVha1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1pZGRsZUJyZWFrVGl0bGUuaW5uZXJIVE1MID0gJ0NhdGNoIGEgYnJlYWs8YnIvPm9yIHdvcmsgaW4gaGFybW9ueSc7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKG1pZGRsZUJyZWFrVGl0bGUpO1xyXG4gICAgY29uc3QgbWlkZGxlQ2hvaWNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbWlkZGxlQ2hvaWNlVGl0bGUuY2xhc3NMaXN0LmFkZCgnb3JhbmdldGV4dCcpO1xyXG4gICAgbWlkZGxlQ2hvaWNlVGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIGNob2ljZSBpcyB5b3VycywgcmVhbGx5JztcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQobWlkZGxlQ2hvaWNlVGl0bGUpO1xyXG5cclxuICAgIC8vc2V0IHVwIHJpZ2h0IGZsb2F0aWVcclxuICAgIGNvbnN0IHJpZ2h0U2lkZUZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuY2xhc3NMaXN0LmFkZCgnc2lkZWZsb2F0aWUnKTtcclxuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUZsb2F0aWUpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlRmxvYXRpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlRmxvYXRpZVRpdGxlJyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllVGl0bGUudGV4dENvbnRlbnQgPSAnQmVzdCBPZmZlcnMnO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChyaWdodFNpZGVGbG9hdGllVGl0bGUpO1xyXG5cclxuICAgIC8vc2V0IHVwIG9mZmVyc2dyaWRcclxuICAgIGNvbnN0IG9mZmVyc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9mZmVyc0dyaWQuaWQgPSAnb2ZmZXJzZ3JpZCc7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKG9mZmVyc0dyaWQpO1xyXG5cclxuICAgIC8vc2V0IHVwIG9mZmVyc2dyaWQgZWxlbWVudHNcclxuICAgIC8vZWxlbWVudCAxXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdvZmZlcnNHcmlkRWxlbWVudCcpO1xyXG4gICAgb2ZmZXJzR3JpZC5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDEpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDFUaXRsZS5pbm5lckhUTUwgPSAnQ29ybmVyPGJyPlNwZWNpYWwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MVRpdGxlKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxUHJpY2UudGV4dENvbnRlbnQgPSAnMiwwMOKCrCc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDEuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQxUHJpY2UpO1xyXG4gICAgLy9lbGVtZW50IDJcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyLmNsYXNzTGlzdC5hZGQoJ29mZmVyc0dyaWRFbGVtZW50Jyk7XHJcbiAgICBvZmZlcnNHcmlkLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50Mik7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MlRpdGxlLmlubmVySFRNTCA9ICdLb2xkPGJyPkJyZXcnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MlRpdGxlKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyUHJpY2UudGV4dENvbnRlbnQgPSAnMyw1MOKCrCc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDIuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQyUHJpY2UpO1xyXG4gICAgLy9lbGVtZW50IDNcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzLmNsYXNzTGlzdC5hZGQoJ29mZmVyc0dyaWRFbGVtZW50Jyk7XHJcbiAgICBvZmZlcnNHcmlkLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50Myk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50M1RpdGxlLmlubmVySFRNTCA9ICdLbGFzc2ljPGJyPktvZmZlZSc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDMuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQzVGl0bGUpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQzUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDNQcmljZS50ZXh0Q29udGVudCA9ICcxLDUw4oKsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50My5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDNQcmljZSk7XHJcbiAgICBcclxuICAgIC8vcmlnaHRzaWRlZmxvYXRpZWJ1dHRvblxyXG4gICAgY29uc3QgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmbG9hdGllYnV0dG9uJyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllQnV0dG9uLmlkID0gJ3JpZ2h0RmxvYXRpZUJ1dHRvbic7XHJcbiAgICByaWdodFNpZGVGbG9hdGllQnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChyaWdodFNpZGVGbG9hdGllQnV0dG9uKTtcclxuXHJcbiAgICAvL2FkZCBjbGlja2FiaWxpdHlcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vZmZlcnNHcmlkRWxlbWVudCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkTmV4dFBhZ2UoJ21lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ21lbnUnKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lcGFnZTsiLCJjb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xyXG4gICAgLy9iYXNpYyBncmlkIHNldHVwXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51R3JpZC5pZCA9ICdtZW51Z3JpZCc7XHJcbiAgICBjb25zdCBtZW51VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUaXRsZURpdi5pZCA9ICdtZW51VGl0bGVEaXYnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51R3JpZCk7XHJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51VGl0bGVEaXYpO1xyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1lbnVUaXRsZS5pZCA9IFwibWVudVRpdGxlXCJcclxuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdUYWtlIGEgZ2FuZGVyIGFuZCBmb2xsb3cgeW91ciBoZWFydC4uLidcclxuICAgIG1lbnVUaXRsZURpdi5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG5cclxuICAgIC8vc2V0IHVwIGZpcnN0IGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1PbmUuY2xhc3NMaXN0LmFkZCgnbWVudUVsZW1lbnQnKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGl0ZW1PbmUpO1xyXG4gICAgY29uc3QgaXRlbU9uZUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtT25lQmcuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1CYWNrZ3JvdW5kJyk7XHJcbiAgICBpdGVtT25lLmFwcGVuZENoaWxkKGl0ZW1PbmVCZyk7XHJcbiAgICBjb25zdCBpdGVtT25lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBpdGVtT25lTmFtZS5pbm5lckhUTUwgPSAnQ29ybmVyIDxicj4gU3BlY2lhbCc7XHJcbiAgICBpdGVtT25lTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbU5hbWUnKTtcclxuICAgIGl0ZW1PbmVCZy5hcHBlbmRDaGlsZChpdGVtT25lTmFtZSk7XHJcbiAgICBjb25zdCBkaXZpZGluZ0xpbmVPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2aWRpbmdMaW5lT25lLmNsYXNzTGlzdC5hZGQoJ21lbnVEaXZpZGluZ0xpbmUnKVxyXG4gICAgaXRlbU9uZUJnLmFwcGVuZENoaWxkKGRpdmlkaW5nTGluZU9uZSlcclxuICAgIGNvbnN0IGl0ZW1PbmVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1PbmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDb25zZWN0ZXR1ciBldCBpbiBkb2xvcmUgZXhjZXB0ZXVyIHZvbHVwdGF0ZSBlYSBsYWJvcmUgZXN0IHBhcmlhdHVyIG1vbGxpdCBlYSBvZmZpY2lhLiBWZW5pYW0gY3VwaWRhdGF0IHBhcmlhdHVyIGF1dGUgZXN0LiBFc3QgYXV0ZSBkbyBudWxsYSB1bGxhbWNvIGlydXJlIGVhIGRlc2VydW50LiBFc3Qgc2l0IGV4ZXJjaXRhdGlvbiBkb2xvcmUgZXhlcmNpdGF0aW9uIG9mZmljaWEgZG9sb3JlIGlydXJlIGFkIHByb2lkZW50IGxhYm9ydW0gTG9yZW0gZWl1c21vZCBkb2xvcmUgY29tbW9kby4nXHJcbiAgICBpdGVtT25lRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1EZXNjcmlwdGlvbicpO1xyXG4gICAgaXRlbU9uZUJnLmFwcGVuZENoaWxkKGl0ZW1PbmVEZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBpdGVtT25lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtT25lUHJpY2UudGV4dENvbnRlbnQgPSAnMiwwMOKCrCc7XHJcbiAgICBpdGVtT25lUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1QcmljZScpO1xyXG4gICAgaXRlbU9uZUJnLmFwcGVuZENoaWxkKGl0ZW1PbmVQcmljZSlcclxuXHJcbiAgICAvL3NldCB1cCBzZWNvbmQgaXRlbVxyXG4gICAgY29uc3QgaXRlbVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVR3by5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbVR3byk7XHJcbiAgICBjb25zdCBpdGVtVHdvQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Ud29CZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1Ud28uYXBwZW5kQ2hpbGQoaXRlbVR3b0JnKTtcclxuXHJcbiAgICAvL3RoaXJkIGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVRocmVlLmNsYXNzTGlzdC5hZGQoJ21lbnVFbGVtZW50Jyk7XHJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChpdGVtVGhyZWUpO1xyXG4gICAgY29uc3QgaXRlbVRocmVlQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1UaHJlZUJnLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtQmFja2dyb3VuZCcpO1xyXG4gICAgaXRlbVRocmVlLmFwcGVuZENoaWxkKGl0ZW1UaHJlZUJnKTtcclxuXHJcbiAgICAvL2ZvdXJ0aCBpdGVtXHJcbiAgICBjb25zdCBpdGVtRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUZvdXIuY2xhc3NMaXN0LmFkZCgnbWVudUVsZW1lbnQnKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGl0ZW1Gb3VyKTtcclxuICAgIGNvbnN0IGl0ZW1Gb3VyQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Gb3VyQmcuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1CYWNrZ3JvdW5kJyk7XHJcbiAgICBpdGVtRm91ci5hcHBlbmRDaGlsZChpdGVtRm91ckJnKTtcclxuXHJcbiAgICAvL2ZpZnRoIGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1GaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtRml2ZS5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbUZpdmUpO1xyXG4gICAgY29uc3QgaXRlbUZpdmVCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUZpdmVCZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1GaXZlLmFwcGVuZENoaWxkKGl0ZW1GaXZlQmcpO1xyXG5cclxuICAgIC8vc2l4dGggaXRlbVxyXG4gICAgY29uc3QgaXRlbVNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVNpeC5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbVNpeCk7XHJcbiAgICBjb25zdCBpdGVtU2l4QmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1TaXhCZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1TaXguYXBwZW5kQ2hpbGQoaXRlbVNpeEJnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbG9hZE5leHRQYWdlLCBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9hZFBhZ2VcIjtcclxuaW1wb3J0IHdpZmlTdmcgZnJvbSBcIi4vcmVzb3VyY2VzL3dpZmkuc3ZnXCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0hpIGltIGFsaXZlJyk7XHJcblxyXG5pbml0aWFsTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==