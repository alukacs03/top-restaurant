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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n#contactgrid {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 4fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#menugrid {\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    grid-template-rows: min-content 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    grid-gap: 2rem;\r\n    background-color: none;\r\n}\r\n\r\n#contactTitle {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#menuTitle, #contactTitle {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menuTitleDiv, #contactTitleDiv {\r\n    display: flex;\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    grid-column: 1/4;\r\n    height: auto;\r\n    width: fit-content;\r\n    padding: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 2rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#contactUsRightFloatie, #menuTitleDiv, #contactTitleDiv, .menuElement, .sidefloatie, .middlefloatie, #aboutUsRightFloatie {\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.menuItemBackground {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 1.8rem 0.5rem;\r\n    background-color: var(--offwhite);\r\n    display: grid;\r\n    grid-template-columns: 2fr 5px 3fr;\r\n    grid-template-rows: auto 4rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.menuItemDescription {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    border-bottom: 5px solid var(--purple);\r\n}\r\n\r\n.menuItemPrice {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-bottom-right-radius: 1.7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.menuDividingLine {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--purple);\r\n    grid-row: 1/3;\r\n}\r\n\r\n.menuItemName {\r\n    grid-row: 1/3;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.menuElement {\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    border-radius: 2rem 0.5rem;\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n#aboutgrid, #contactgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 1.85rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n#aboutUsFloatie, #contactUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\r\n\r\n#aboutUsText, #contactUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n    hyphens: auto;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 7px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 1fr 1fr;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n#contactRightFloatieTitle {\r\n    color: white;\r\n}\r\n\r\n#contactUsRightFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    gap: 2rem;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n.aboutUsRightFloatieElement, .contactUsRightFloatieElement {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 100px 3rem auto;\r\n    justify-items: center;\r\n    align-items: center;\r\n    border-radius: 1.5rem;\r\n    background-color: var(--offwhite);\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}\r\n\r\n#footerBar {\r\n    text-align: center;\r\n    height: 25px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n#contactgrid {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 4fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n#menugrid {\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    grid-template-rows: min-content 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    grid-gap: 2rem;\r\n    background-color: none;\r\n}\r\n\r\n#contactTitle {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#menuTitle, #contactTitle {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menuTitleDiv, #contactTitleDiv {\r\n    display: flex;\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    grid-column: 1/4;\r\n    height: auto;\r\n    width: fit-content;\r\n    padding: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 2rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#contactUsRightFloatie, #menuTitleDiv, #contactTitleDiv, .menuElement, .sidefloatie, .middlefloatie, #aboutUsRightFloatie {\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.menuItemBackground {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 1.8rem 0.5rem;\r\n    background-color: var(--offwhite);\r\n    display: grid;\r\n    grid-template-columns: 2fr 5px 3fr;\r\n    grid-template-rows: auto 4rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.menuItemDescription {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    border-bottom: 5px solid var(--purple);\r\n}\r\n\r\n.menuItemPrice {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-bottom-right-radius: 1.7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.menuDividingLine {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--purple);\r\n    grid-row: 1/3;\r\n}\r\n\r\n.menuItemName {\r\n    grid-row: 1/3;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.menuElement {\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    border-radius: 2rem 0.5rem;\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n#aboutgrid, #contactgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 1.85rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n#aboutUsFloatie, #contactUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\r\n\r\n#aboutUsText, #contactUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n    hyphens: auto;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 7px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 1fr 1fr;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n#contactRightFloatieTitle {\r\n    color: white;\r\n}\r\n\r\n#contactUsRightFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    gap: 2rem;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n.aboutUsRightFloatieElement, .contactUsRightFloatieElement {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 100px 3rem auto;\r\n    justify-items: center;\r\n    align-items: center;\r\n    border-radius: 1.5rem;\r\n    background-color: var(--offwhite);\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}\r\n\r\n#footerBar {\r\n    text-align: center;\r\n    height: 25px;\r\n}"],"sourceRoot":""}]);
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

    //render short floatie on the left
    const shortFloatie = document.createElement('div');
    shortFloatie.classList.add('sidefloatie');
    shortFloatie.id = 'contactUsFloatie';
    contactGrid.appendChild(shortFloatie);
    const shortStoryTitle = document.createElement('h2');
    shortStoryTitle.classList.add('sideFloatieTitle');
    shortStoryTitle.textContent = 'Contact Us';
    shortFloatie.appendChild(shortStoryTitle);

    const contactUsText = document.createElement('p');
    contactUsText.textContent = 'Ad id Lorem dolore exercitation enim do magna. Nisi reprehenderit adipisicing irure laborum do ad ad esse est labore ut laboris. Minim aute reprehenderit aliqua labore est culpa incididunt culpa ipsum in. In aute incididunt dolor excepteur consectetur esse anim deserunt laborum dolore esse.';
    contactUsText.id = 'contactUsText'
    shortFloatie.appendChild(contactUsText);

    //render the right floatie, on which all the services are explained with more detail
    const rightFloatie = document.createElement('div');
    rightFloatie.id = "contactUsRightFloatie";

    contactGrid.appendChild(rightFloatie);

    //fill the right floatie
    const contactRightFloatieTitle = document.createElement('h2')
    contactRightFloatieTitle.id = "contactRightFloatieTitle"
    contactRightFloatieTitle.innerHTML = 'Got any questions? <br> Send us an email!'
    rightFloatie.appendChild(contactRightFloatieTitle)


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
    const itemTwoName = document.createElement('h2');
    itemTwoName.innerHTML = 'Kold <br> Brew';
    itemTwoName.classList.add('menuItemName');
    itemTwoBg.appendChild(itemTwoName);
    const dividingLineTwo = document.createElement('div')
    dividingLineTwo.classList.add('menuDividingLine')
    itemTwoBg.appendChild(dividingLineTwo)
    const itemTwoDescription = document.createElement('p');
    itemTwoDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemTwoDescription.classList.add('menuItemDescription');
    itemTwoBg.appendChild(itemTwoDescription);
    const itemTwoPrice = document.createElement('p');
    itemTwoPrice.textContent = '3,50€';
    itemTwoPrice.classList.add('menuItemPrice');
    itemTwoBg.appendChild(itemTwoPrice)

    //third item
    const itemThree = document.createElement('div');
    itemThree.classList.add('menuElement');
    menuGrid.appendChild(itemThree);
    const itemThreeBg = document.createElement('div');
    itemThreeBg.classList.add('menuItemBackground');
    itemThree.appendChild(itemThreeBg);
    const itemThreeName = document.createElement('h2');
    itemThreeName.innerHTML = 'Klassic <br> Koffee';
    itemThreeName.classList.add('menuItemName');
    itemThreeBg.appendChild(itemThreeName);
    const dividingLineThree = document.createElement('div')
    dividingLineThree.classList.add('menuDividingLine')
    itemThreeBg.appendChild(dividingLineThree)
    const itemThreeDescription = document.createElement('p');
    itemThreeDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemThreeDescription.classList.add('menuItemDescription');
    itemThreeBg.appendChild(itemThreeDescription);
    const itemThreePrice = document.createElement('p');
    itemThreePrice.textContent = '1,50€';
    itemThreePrice.classList.add('menuItemPrice');
    itemThreeBg.appendChild(itemThreePrice)

    //fourth item
    const itemFour = document.createElement('div');
    itemFour.classList.add('menuElement');
    menuGrid.appendChild(itemFour);
    const itemFourBg = document.createElement('div');
    itemFourBg.classList.add('menuItemBackground');
    itemFour.appendChild(itemFourBg);
    const itemFourName = document.createElement('h2');
    itemFourName.innerHTML = 'Corner <br> Kappuccino';
    itemFourName.classList.add('menuItemName');
    itemFourBg.appendChild(itemFourName);
    const dividingLineFour = document.createElement('div')
    dividingLineFour.classList.add('menuDividingLine')
    itemFourBg.appendChild(dividingLineFour)
    const itemFourDescription = document.createElement('p');
    itemFourDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemFourDescription.classList.add('menuItemDescription');
    itemFourBg.appendChild(itemFourDescription);
    const itemFourPrice = document.createElement('p');
    itemFourPrice.textContent = '1,75€';
    itemFourPrice.classList.add('menuItemPrice');
    itemFourBg.appendChild(itemFourPrice)

    //fifth item
    const itemFive = document.createElement('div');
    itemFive.classList.add('menuElement');
    menuGrid.appendChild(itemFive);
    const itemFiveBg = document.createElement('div');
    itemFiveBg.classList.add('menuItemBackground');
    itemFive.appendChild(itemFiveBg);
    const itemFiveName = document.createElement('h2');
    itemFiveName.innerHTML = 'Corner <br> Amerikano';
    itemFiveName.classList.add('menuItemName');
    itemFiveBg.appendChild(itemFiveName);
    const dividingLineFive = document.createElement('div')
    dividingLineFive.classList.add('menuDividingLine')
    itemFiveBg.appendChild(dividingLineFive)
    const itemFiveDescription = document.createElement('p');
    itemFiveDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemFiveDescription.classList.add('menuItemDescription');
    itemFiveBg.appendChild(itemFiveDescription);
    const itemFivePrice = document.createElement('p');
    itemFivePrice.textContent = '2,00€';
    itemFivePrice.classList.add('menuItemPrice');
    itemFiveBg.appendChild(itemFivePrice)

    //sixth item
    const itemSix = document.createElement('div');
    itemSix.classList.add('menuElement');
    menuGrid.appendChild(itemSix);
    const itemSixBg = document.createElement('div');
    itemSixBg.classList.add('menuItemBackground');
    itemSix.appendChild(itemSixBg);
    const itemSixName = document.createElement('h2');
    itemSixName.innerHTML = 'Turkish <br> Koffee';
    itemSixName.classList.add('menuItemName');
    itemSixBg.appendChild(itemSixName);
    const dividingLineSix = document.createElement('div')
    dividingLineSix.classList.add('menuDividingLine')
    itemSixBg.appendChild(dividingLineSix)
    const itemSixDescription = document.createElement('p');
    itemSixDescription.textContent = 'Consectetur et in dolore excepteur voluptate ea labore est pariatur mollit ea officia. Veniam cupidatat pariatur aute est. Est aute do nulla ullamco irure ea deserunt. Est sit exercitation dolore exercitation officia dolore irure ad proident laborum Lorem eiusmod dolore commodo.'
    itemSixDescription.classList.add('menuItemDescription');
    itemSixBg.appendChild(itemSixDescription);
    const itemSixPrice = document.createElement('p');
    itemSixPrice.textContent = '2,50€';
    itemSixPrice.classList.add('menuItemPrice');
    itemSixBg.appendChild(itemSixPrice)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBWTtBQUN4QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsUUFBUSxrRUFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDekw3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7VUN6SnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ29DO0FBQ3ZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvYmF0dGVyeS5wbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcmVzb3VyY2VzL2Jvb2tjb3JuZXIucG5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy93aWZpLnBuZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy93aWZpLnN2ZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVyRm9vdGVyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVyTmF2QmFyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2Fib3V0dXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tb3JhbmdlOiAjRDE1MTJEO1xcclxcbiAgICAtLXB1cnBsZTogIzQxMTUzMDtcXHJcXG4gICAgLS1saWdodGNvbG91cjogI0Y1QzdBOTtcXHJcXG4gICAgLS1vZmZ3aGl0ZTogI0Q5RDlEOTtcXHJcXG4gICAgLS1idXR0b25jb2xvdXI6ICNGNUM3QTk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRjb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5ncmlkLCAjYWJvdXRncmlkLCAjY29udGFjdGdyaWQsICNtZW51Z3JpZCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yYW5nZXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGFjdGdyaWQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtZW51Z3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdFRpdGxlIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUaXRsZSwgI2NvbnRhY3RUaXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUaXRsZURpdiwgI2NvbnRhY3RUaXRsZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RVc1JpZ2h0RmxvYXRpZSwgI21lbnVUaXRsZURpdiwgI2NvbnRhY3RUaXRsZURpdiwgLm1lbnVFbGVtZW50LCAuc2lkZWZsb2F0aWUsIC5taWRkbGVmbG9hdGllLCAjYWJvdXRVc1JpZ2h0RmxvYXRpZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCBibGFjaztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1CYWNrZ3JvdW5kIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS44cmVtIDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1cHggM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNHJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1EZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcHVycGxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtUHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS43cmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51RGl2aWRpbmdMaW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtTmFtZSB7XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVFbGVtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IGJsYWNrO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhYm91dGdyaWQsICNjb250YWN0Z3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJidXR0b24ge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNtYWluVGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtIDEuNXJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZUZsb2F0aWVUaXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdGllYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjg1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25jb2xvdXIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNlc2dyaWQsICNvZmZlcnNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNGbG9hdGllLCAjY29udGFjdFVzRmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNUZXh0LCAjY29udGFjdFVzVGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaHlwaGVuczogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCwgLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OXB4IGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCBwLCAub2ZmZXJzR3JpZEVsZW1lbnQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpXFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbnVsLCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW46IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzUmlnaHRGbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0UmlnaHRGbG9hdGllVGl0bGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0VXNSaWdodEZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5hYm91dFVzUmlnaHRGbG9hdGllRWxlbWVudCwgLmNvbnRhY3RVc1JpZ2h0RmxvYXRpZUVsZW1lbnQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDNyZW0gYXV0bztcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY3VycmVudFBhZ2VCdXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyQmFyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsbUJB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QVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1vcmFuZ2U6ICNEMTUxMkQ7XFxyXFxuICAgIC0tcHVycGxlOiAjNDExNTMwO1xcclxcbiAgICAtLWxpZ2h0Y29sb3VyOiAjRjVDN0E5O1xcclxcbiAgICAtLW9mZndoaXRlOiAjRDlEOUQ5O1xcclxcbiAgICAtLWJ1dHRvbmNvbG91cjogI0Y1QzdBOTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbmdyaWQsICNhYm91dGdyaWQsICNjb250YWN0Z3JpZCwgI21lbnVncmlkIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdldGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpXFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250YWN0Z3JpZCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZ3JpZC1nYXA6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0VGl0bGUge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRpdGxlLCAjY29udGFjdFRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRpdGxlRGl2LCAjY29udGFjdFRpdGxlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdFVzUmlnaHRGbG9hdGllLCAjbWVudVRpdGxlRGl2LCAjY29udGFjdFRpdGxlRGl2LCAubWVudUVsZW1lbnQsIC5zaWRlZmxvYXRpZSwgLm1pZGRsZWZsb2F0aWUsICNhYm91dFVzUmlnaHRGbG9hdGllIHtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IGJsYWNrO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbUJhY2tncm91bmQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjhyZW0gMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVweCAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA0cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1QcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjdyZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVEaXZpZGluZ0xpbmUge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBncmlkLXJvdzogMS8zO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1OYW1lIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUVsZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMC41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggYmxhY2s7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0Z3JpZCwgI2NvbnRhY3RncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcmJ1dHRvbiB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9uZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5UaXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbmdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW0gMS41cmVtIDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlRmxvYXRpZVRpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0aWVidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuODVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbmNvbG91cik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY2VzZ3JpZCwgI29mZmVyc2dyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc0Zsb2F0aWUsICNjb250YWN0VXNGbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc1RleHQsICNjb250YWN0VXNUZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoeXBoZW5zOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZUdyaWRFbGVtZW50LCAub2ZmZXJzR3JpZEVsZW1lbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY5cHggYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmZXJzR3JpZEVsZW1lbnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VydmljZUdyaWRFbGVtZW50IHAsIC5vZmZlcnNHcmlkRWxlbWVudCBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSlcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxudWwsIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIG1hcmdpbjogMS40cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNSaWdodEZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RSaWdodEZsb2F0aWVUaXRsZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RVc1JpZ2h0RmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50LCAuY29udGFjdFVzUmlnaHRGbG9hdGllRWxlbWVudCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggM3JlbSBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jdXJyZW50UGFnZUJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXJCYXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTY4ZTFhZDU1MDEzNDczNjVjMTFjMjczZmQxMDdmZjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM5ZDQ4NzJhMWFkM2I1ZWZlZDUwNDgxYTg3NzBiODUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZWRkZDc2MGM2ZDkxODY2ZDRmNzI0NmE3YzU5ZTUzMi5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgZmlsbD1cXFwiIzQxMTUzMFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0yMC4zNjQsM2ExLDEsMCwwLDEtMSwxQTE1LjM4MSwxNS4zODEsMCwwLDAsNCwxOS4zNjNhMSwxLDAsMCwxLTIsMEExNy4zODQsMTcuMzg0LDAsMCwxLDE5LjM2NCwyLDEsMSwwLDAsMSwyMC4zNjQsM1pNNy45MDksMjAuMzYzYTEsMSwwLDAsMCwxLTFBMTAuNDY3LDEwLjQ2NywwLDAsMSwxOS4zNjQsOC45MDlhMSwxLDAsMSwwLDAtMkExMi40NjksMTIuNDY5LDAsMCwwLDYuOTA5LDE5LjM2MywxLDEsMCwwLDAsNy45MDksMjAuMzYzWm01LjkwOS0xYTUuNTUyLDUuNTUyLDAsMCwxLDUuNTQ2LTUuNTQ1LDEsMSwwLDAsMCwwLTIsNy41NTQsNy41NTQsMCwwLDAtNy41NDYsNy41NDUsMSwxLDAsMCwwLDIsMFptNy4xODIsMEExLjYzNywxLjYzNywwLDEsMCwxOS4zNjQsMjEsMS42MzcsMS42MzcsMCwwLDAsMjEsMTkuMzY0WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHJlbmRlckhvbWVwYWdlIGZyb20gXCIuLi9wYWdlcy9ob21lcGFnZVwiO1xyXG5pbXBvcnQgcmVuZGVyTWVudSBmcm9tIFwiLi4vcGFnZXMvbWVudVwiO1xyXG5pbXBvcnQgcmVuZGVyQWJvdXRVcyBmcm9tIFwiLi4vcGFnZXMvYWJvdXR1c1wiO1xyXG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tIFwiLi4vcGFnZXMvY29udGFjdFwiO1xyXG5pbXBvcnQgcmVuZGVyTmF2QmFyIGZyb20gXCIuL3JlbmRlck5hdkJhclwiO1xyXG5pbXBvcnQgcmVuZGVyRm9vdGVyIGZyb20gXCIuL3JlbmRlckZvb3RlclwiO1xyXG5cclxuXHJcbi8vIGluaXRpYWxpemUgdGhlIGZpcnN0IGxvYWRpbmcgb2YgdGhlIHBhZ2VcclxuY29uc3QgaW5pdGlhbExvYWQgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCc2NjZhZDE0MzM5ZTFiM2I4ODZkYi5zdmcnKVwiO1xyXG4gICAgcmVuZGVyTmF2QmFyKCk7XHJcbiAgICByZW5kZXJIb21lcGFnZSgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn07XHJcblxyXG5cclxuLy9sb2FkIHRoZSBwYWdlIGNsaWNrZWQgYnkgdGhlIHVzZXJcclxuY29uc3QgbG9hZE5leHRQYWdlID0gKG5leHRQYWdlTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlck5hdkJhcigpO1xyXG4gICAgY29uc3QgbmF2YmFyQnV0dG9uc05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyYnV0dG9uJyk7XHJcbiAgICBuYXZiYXJCdXR0b25zTm9kZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50UGFnZUJ1dHRvbicpO1xyXG4gICAgfSlcclxuICAgIGlmIChuZXh0UGFnZU5hbWUgPT0gJ21lbnUnKSB7XHJcbiAgICAgICAgbmF2YmFyQnV0dG9uc05vZGVbMF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2VCdXR0b24nKVxyXG4gICAgICAgIHJlbmRlck1lbnUoKTtcclxuICAgIH0gZWxzZSBpZiAobmV4dFBhZ2VOYW1lID09ICdjb250YWN0Jykge1xyXG4gICAgICAgIG5hdmJhckJ1dHRvbnNOb2RlWzJdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQYWdlQnV0dG9uJylcclxuICAgICAgICByZW5kZXJDb250YWN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRQYWdlTmFtZSA9PSAnYWJvdXR1cycpIHtcclxuICAgICAgICBuYXZiYXJCdXR0b25zTm9kZVsxXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UGFnZUJ1dHRvbicpXHJcbiAgICAgICAgcmVuZGVyQWJvdXRVcygpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZGVySG9tZXBhZ2UoKTtcclxuICAgIH1cclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBpbml0aWFsTG9hZCwgbG9hZE5leHRQYWdlIH07IiwiY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb290ZXJCYXIuaWQgPSBcImZvb3RlckJhclwiO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJCYXIpO1xyXG4gICAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSAnTWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2x1a2lha29zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPsOBa29zIEx1a8OhY3M8L2E+IGZvciBUaGUgT2RpbiBQcm9qZWN0J1xyXG4gICAgZm9vdGVyQmFyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZvb3RlcjsiLCJpbXBvcnQgeyBsb2FkTmV4dFBhZ2UgfSBmcm9tICcuL2xvYWRQYWdlJztcclxuXHJcbmNvbnN0IHJlbmRlck5hdkJhciA9ICgpID0+IHtcclxuICAgIC8vIHNldCB1cCBoZWFkZXIgZGl2XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJEaXYuaWQ9J2hlYWRlcic7XHJcbiAgICBjb250ZW50LnByZXBlbmQoaGVhZGVyRGl2KTtcclxuICAgIFxyXG4gICAgLy9jcmVhdGUgbWFpbiB0aXRsZVxyXG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiS29mZmVlQ29ybmVyXCI7XHJcbiAgICBtYWluVGl0bGUuaWQgPSAnbWFpblRpdGxlJztcclxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xyXG5cclxuICAgIC8vc2V0IHVwIGJ1dHRvbiBkaXZcclxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uRGl2LmlkID0gXCJidXR0b25kaXZcIjtcclxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG5cclxuICAgIC8vYWRkIGJ1dHRvbnNcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG1lbnVCdXR0b24uaWQ9XCJidXR0b25NZW51XCI7XHJcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJidXR0b24nKVxyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFib3V0VXNCdXR0b24uaWQ9XCJidXR0b25BYm91dFVzXCI7XHJcbiAgICBhYm91dFVzQnV0dG9uLnRleHRDb250ZW50PSdBYm91dCBVcyc7XHJcbiAgICBhYm91dFVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJhcmJ1dHRvbicpXHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYWJvdXRVc0J1dHRvbik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29udGFjdEJ1dHRvbi5pZD0nYnV0dG9uQ29udGFjdCc7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50PSdDb250YWN0JztcclxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyYnV0dG9uJylcclxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgICAvL2FkZCBidXR0b24gZnVuY3Rpb25hbGl0eVxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ21lbnUnKVxyXG4gICAgfSk7XHJcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnY29udGFjdCcpXHJcbiAgICB9KTtcclxuICAgIGFib3V0VXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdhYm91dHVzJylcclxuICAgIH0pO1xyXG4gICAgbWFpblRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnaG9tZXBhZ2UnKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlck5hdkJhcjsiLCJpbXBvcnQgd2lmaUltZyBmcm9tICcuLi9yZXNvdXJjZXMvd2lmaS5wbmcnO1xyXG5pbXBvcnQgY2hhcmdlSW1nIGZyb20gJy4uL3Jlc291cmNlcy9iYXR0ZXJ5LnBuZyc7XHJcbmltcG9ydCBib29rSW1nIGZyb20gJy4uL3Jlc291cmNlcy9ib29rY29ybmVyLnBuZyc7XHJcblxyXG5cclxuY29uc3QgcmVuZGVyQWJvdXRVcyA9ICgpID0+IHtcclxuICAgIC8vc2V0IHVwIGJhc2ljIGdyaWRcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgYWJvdXRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dEdyaWQuaWQgPSAnYWJvdXRncmlkJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRHcmlkKTtcclxuXHJcbiAgICAvL3JlbmRlciBzaG9ydCBmbG9hdGllIG9uIHRoZSBsZWZ0XHJcbiAgICBjb25zdCBzaG9ydEZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNob3J0RmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdzaWRlZmxvYXRpZScpO1xyXG4gICAgc2hvcnRGbG9hdGllLmlkID0gJ2Fib3V0VXNGbG9hdGllJztcclxuICAgIGFib3V0R3JpZC5hcHBlbmRDaGlsZChzaG9ydEZsb2F0aWUpO1xyXG4gICAgY29uc3Qgc2hvcnRTdG9yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHNob3J0U3RvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlRmxvYXRpZVRpdGxlJyk7XHJcbiAgICBzaG9ydFN0b3J5VGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xyXG4gICAgc2hvcnRGbG9hdGllLmFwcGVuZENoaWxkKHNob3J0U3RvcnlUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRVc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhYm91dFVzVGV4dC5pbm5lckhUTUwgPSAnS29mZmVlQ29ybmVyIGlzIGFuIGluZGVwZW5kZW50IGNhZsOpIHdpdGggYXJvdW5kIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPjM1IGxvY2F0aW9uczwvYT4gaW4gRXVyb3BlLCB3aXRoIG1vcmUgdG8gY29tZSBzb29uLiA8YnI+RXN0YWJsaXNoZWQgaW4gMjAwMywgd2VcXCd2ZSBhY2N1bXVsYXRlZCBhIHRvbiBvZiBleHBlcmllbmNlLCB0byBzZXJ2ZSB5b3Ugd2l0aCB0aGUgZ3JlYXRlc3Qga29mZmVlIGFuZCBwcm92aWRlIG91dHN0YW5kaW5nIGN1c3RvbWVyIHNlcnZpY2UuIDxicj4gQ29tZSwgdGFzdGUgb3VyIGRlbGljaW91cyA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5rb2ZmZWU8L2E+LCBnZXQgc29tZSB3b3JrIGRvbmUgb3IgcmVsYXggYSBiaXQuJztcclxuICAgIGFib3V0VXNUZXh0LmlkID0gJ2Fib3V0VXNUZXh0J1xyXG4gICAgc2hvcnRGbG9hdGllLmFwcGVuZENoaWxkKGFib3V0VXNUZXh0KTtcclxuXHJcbiAgICAvL3JlbmRlciB0aGUgcmlnaHQgZmxvYXRpZSwgb24gd2hpY2ggYWxsIHRoZSBzZXJ2aWNlcyBhcmUgZXhwbGFpbmVkIHdpdGggbW9yZSBkZXRhaWxcclxuICAgIGNvbnN0IHJpZ2h0RmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmlkID0gXCJhYm91dFVzUmlnaHRGbG9hdGllXCI7XHJcblxyXG4gICAgYWJvdXRHcmlkLmFwcGVuZENoaWxkKHJpZ2h0RmxvYXRpZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgZnJlZSB3aWZpIGNhcmQgZmxvYXRpZSB0aGluZ1xyXG4gICAgY29uc3Qgd2lmaUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0RmxvYXRpZS5hcHBlbmRDaGlsZCh3aWZpQ2FyZCk7XHJcbiAgICB3aWZpQ2FyZC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzUmlnaHRGbG9hdGllRWxlbWVudCcpO1xyXG4gICAgY29uc3Qgd2lmaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHdpZmlUaXRsZS50ZXh0Q29udGVudCA9IFwiRnJlZSBXaUZpXCI7XHJcbiAgICBjb25zdCB3aWZpSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHdpZmlJbWFnZS5zcmMgPSB3aWZpSW1nO1xyXG4gICAgd2lmaUltYWdlLndpZHRoID0gJzY5JztcclxuICAgIHdpZmlJbWFnZS5oZWlnaHQgPSAnNjknO1xyXG4gICAgd2lmaUltYWdlLmFsdCA9ICd3aWZpJztcclxuICAgIHdpZmlDYXJkLmFwcGVuZENoaWxkKHdpZmlJbWFnZSk7XHJcbiAgICB3aWZpQ2FyZC5hcHBlbmRDaGlsZCh3aWZpVGl0bGUpO1xyXG4gICAgY29uc3Qgd2lmaVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB3aWZpVGV4dC5pbm5lckhUTUwgPSBcIk9jY2FlY2F0IHByb2lkZW50IHBhcmlhdHVyIGxhYm9ydW0gZWEgZWl1c21vZCBzaXQgcGFyaWF0dXIgYWxpcXVhIGFsaXF1YSBzdW50LiBEZXNlcnVudCBkb2xvciBxdWlzIGFkIHJlcHJlaGVuZGVyaXQgbGFib3JpcyBwYXJpYXR1ciB1bGxhbWNvIGN1bHBhIHF1aSBkZXNlcnVudCBkb2xvci4gUGFyaWF0dXIgY29tbW9kbyBjdWxwYSBvZmZpY2lhIGVzc2UuIEVzdCBpbiBlc3NlIHByb2lkZW50IGNvbW1vZG8gdmVuaWFtIHNpbnQgYWxpcXVpcCBuaXNpIHN1bnQgbm9zdHJ1ZCBtb2xsaXQuXCI7XHJcbiAgICB3aWZpQ2FyZC5hcHBlbmRDaGlsZCh3aWZpVGV4dCk7XHJcblxyXG4gICAgLy9zZXQgdXAgY2hhcmdpbmcgZmxvYXRpZSB0aGluZ1xyXG4gICAgY29uc3QgY2hhcmdpbmdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodEZsb2F0aWUuYXBwZW5kQ2hpbGQoY2hhcmdpbmdDYXJkKTtcclxuICAgIGNoYXJnaW5nQ2FyZC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzUmlnaHRGbG9hdGllRWxlbWVudCcpO1xyXG4gICAgY29uc3QgY2hhcmdpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjaGFyZ2luZ1RpdGxlLnRleHRDb250ZW50ID0gXCJGcmVlIENoYXJnaW5nXCI7XHJcbiAgICBjb25zdCBjaGFyZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY2hhcmdlSW1hZ2Uuc3JjID0gY2hhcmdlSW1nO1xyXG4gICAgY2hhcmdlSW1hZ2Uud2lkdGggPSAnNjknO1xyXG4gICAgY2hhcmdlSW1hZ2UuaGVpZ2h0PSAnNjknO1xyXG4gICAgY2hhcmdlSW1hZ2UuYWx0ID0gJ2NoYXJnZSc7XHJcbiAgICBjaGFyZ2luZ0NhcmQuYXBwZW5kQ2hpbGQoY2hhcmdlSW1hZ2UpO1xyXG4gICAgY2hhcmdpbmdDYXJkLmFwcGVuZENoaWxkKGNoYXJnaW5nVGl0bGUpO1xyXG4gICAgY29uc3QgY2hhcmdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNoYXJnZVRleHQuaW5uZXJIVE1MID0gXCJPY2NhZWNhdCBwcm9pZGVudCBwYXJpYXR1ciBsYWJvcnVtIGVhIGVpdXNtb2Qgc2l0IHBhcmlhdHVyIGFsaXF1YSBhbGlxdWEgc3VudC4gRGVzZXJ1bnQgZG9sb3IgcXVpcyBhZCByZXByZWhlbmRlcml0IGxhYm9yaXMgcGFyaWF0dXIgdWxsYW1jbyBjdWxwYSBxdWkgZGVzZXJ1bnQgZG9sb3IuIFBhcmlhdHVyIGNvbW1vZG8gY3VscGEgb2ZmaWNpYSBlc3NlLiBFc3QgaW4gZXNzZSBwcm9pZGVudCBjb21tb2RvIHZlbmlhbSBzaW50IGFsaXF1aXAgbmlzaSBzdW50IG5vc3RydWQgbW9sbGl0LlwiO1xyXG4gICAgY2hhcmdpbmdDYXJkLmFwcGVuZENoaWxkKGNoYXJnZVRleHQpO1xyXG5cclxuXHJcbiAgICAvL3NldCB1cCBib29rY29ybmVyIGZsb2F0aWUgdGhpbmdcclxuICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodEZsb2F0aWUuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xyXG4gICAgYm9va0NhcmQuY2xhc3NMaXN0LmFkZCgnYWJvdXRVc1JpZ2h0RmxvYXRpZUVsZW1lbnQnKTtcclxuICAgIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBib29rVGl0bGUudGV4dENvbnRlbnQgPSBcIkJvb2tDb3JuZXJcIjtcclxuICAgIGNvbnN0IGJvb2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYm9va0ltYWdlLnNyYyA9IGJvb2tJbWc7XHJcbiAgICBib29rSW1hZ2Uud2lkdGggPSAnNjAnO1xyXG4gICAgYm9va0ltYWdlLmhlaWdodD0gJzY5JztcclxuICAgIGJvb2tJbWFnZS5hbHQgPSAnYm9va3MnO1xyXG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0ltYWdlKTtcclxuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tUaXRsZSk7XHJcbiAgICBjb25zdCBib29rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGJvb2tUZXh0LmlubmVySFRNTCA9IFwiT2NjYWVjYXQgcHJvaWRlbnQgcGFyaWF0dXIgbGFib3J1bSBlYSBlaXVzbW9kIHNpdCBwYXJpYXR1ciBhbGlxdWEgYWxpcXVhIHN1bnQuIERlc2VydW50IGRvbG9yIHF1aXMgYWQgcmVwcmVoZW5kZXJpdCBsYWJvcmlzIHBhcmlhdHVyIHVsbGFtY28gY3VscGEgcXVpIGRlc2VydW50IGRvbG9yLiBQYXJpYXR1ciBjb21tb2RvIGN1bHBhIG9mZmljaWEgZXNzZS4gRXN0IGluIGVzc2UgcHJvaWRlbnQgY29tbW9kbyB2ZW5pYW0gc2ludCBhbGlxdWlwIG5pc2kgc3VudCBub3N0cnVkIG1vbGxpdC5cIjtcclxuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tUZXh0KTtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBYm91dFVzOyIsImNvbnN0IHJlbmRlckNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICAvL2Jhc2ljIGdyaWQgc2V0dXBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgY29udGFjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RHcmlkLmlkID0gJ2NvbnRhY3RncmlkJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEdyaWQpO1xyXG5cclxuICAgIC8vcmVuZGVyIHNob3J0IGZsb2F0aWUgb24gdGhlIGxlZnRcclxuICAgIGNvbnN0IHNob3J0RmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hvcnRGbG9hdGllLmNsYXNzTGlzdC5hZGQoJ3NpZGVmbG9hdGllJyk7XHJcbiAgICBzaG9ydEZsb2F0aWUuaWQgPSAnY29udGFjdFVzRmxvYXRpZSc7XHJcbiAgICBjb250YWN0R3JpZC5hcHBlbmRDaGlsZChzaG9ydEZsb2F0aWUpO1xyXG4gICAgY29uc3Qgc2hvcnRTdG9yeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHNob3J0U3RvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlRmxvYXRpZVRpdGxlJyk7XHJcbiAgICBzaG9ydFN0b3J5VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICBzaG9ydEZsb2F0aWUuYXBwZW5kQ2hpbGQoc2hvcnRTdG9yeVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29udGFjdFVzVGV4dC50ZXh0Q29udGVudCA9ICdBZCBpZCBMb3JlbSBkb2xvcmUgZXhlcmNpdGF0aW9uIGVuaW0gZG8gbWFnbmEuIE5pc2kgcmVwcmVoZW5kZXJpdCBhZGlwaXNpY2luZyBpcnVyZSBsYWJvcnVtIGRvIGFkIGFkIGVzc2UgZXN0IGxhYm9yZSB1dCBsYWJvcmlzLiBNaW5pbSBhdXRlIHJlcHJlaGVuZGVyaXQgYWxpcXVhIGxhYm9yZSBlc3QgY3VscGEgaW5jaWRpZHVudCBjdWxwYSBpcHN1bSBpbi4gSW4gYXV0ZSBpbmNpZGlkdW50IGRvbG9yIGV4Y2VwdGV1ciBjb25zZWN0ZXR1ciBlc3NlIGFuaW0gZGVzZXJ1bnQgbGFib3J1bSBkb2xvcmUgZXNzZS4nO1xyXG4gICAgY29udGFjdFVzVGV4dC5pZCA9ICdjb250YWN0VXNUZXh0J1xyXG4gICAgc2hvcnRGbG9hdGllLmFwcGVuZENoaWxkKGNvbnRhY3RVc1RleHQpO1xyXG5cclxuICAgIC8vcmVuZGVyIHRoZSByaWdodCBmbG9hdGllLCBvbiB3aGljaCBhbGwgdGhlIHNlcnZpY2VzIGFyZSBleHBsYWluZWQgd2l0aCBtb3JlIGRldGFpbFxyXG4gICAgY29uc3QgcmlnaHRGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodEZsb2F0aWUuaWQgPSBcImNvbnRhY3RVc1JpZ2h0RmxvYXRpZVwiO1xyXG5cclxuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKHJpZ2h0RmxvYXRpZSk7XHJcblxyXG4gICAgLy9maWxsIHRoZSByaWdodCBmbG9hdGllXHJcbiAgICBjb25zdCBjb250YWN0UmlnaHRGbG9hdGllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjb250YWN0UmlnaHRGbG9hdGllVGl0bGUuaWQgPSBcImNvbnRhY3RSaWdodEZsb2F0aWVUaXRsZVwiXHJcbiAgICBjb250YWN0UmlnaHRGbG9hdGllVGl0bGUuaW5uZXJIVE1MID0gJ0dvdCBhbnkgcXVlc3Rpb25zPyA8YnI+IFNlbmQgdXMgYW4gZW1haWwhJ1xyXG4gICAgcmlnaHRGbG9hdGllLmFwcGVuZENoaWxkKGNvbnRhY3RSaWdodEZsb2F0aWVUaXRsZSlcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0OyIsImltcG9ydCB7IGxvYWROZXh0UGFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZFBhZ2UnO1xyXG5pbXBvcnQgd2lmaUltZyBmcm9tICcuLi9yZXNvdXJjZXMvd2lmaS5wbmcnO1xyXG5pbXBvcnQgY2hhcmdlSW1nIGZyb20gJy4uL3Jlc291cmNlcy9iYXR0ZXJ5LnBuZyc7XHJcbmltcG9ydCBib29rSW1nIGZyb20gJy4uL3Jlc291cmNlcy9ib29rY29ybmVyLnBuZyc7XHJcblxyXG5jb25zdCByZW5kZXJIb21lcGFnZSA9ICgpID0+IHtcclxuICAgIC8vc2V0IHVwIG1haW4gZ3JpZFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYWluR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkdyaWQuaWQ9J21haW5ncmlkJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkdyaWQpO1xyXG5cclxuICAgIC8vc2V0IHVwIGxlZnQgc2lkZSBmbG9hdGllXHJcbiAgICBjb25zdCBsZWZ0U2lkZUZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdzaWRlZmxvYXRpZScpO1xyXG4gICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQobGVmdFNpZGVGbG9hdGllKTtcclxuICAgIFxyXG4gICAgLy9hZGQgbGVmdCBzaWRlIGZsb2F0aWUgY29udGVudFxyXG4gICAgY29uc3Qgc2VydmljZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzZXJ2aWNlc1RpdGxlLnRleHRDb250ZW50ID0gJ091ciBTZXJ2aWNlcyc7XHJcbiAgICBzZXJ2aWNlc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVGbG9hdGllVGl0bGUnKTtcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChzZXJ2aWNlc1RpdGxlKTtcclxuXHJcbiAgICBjb25zdCBzZXJ2aWNlc0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5pZD0nc2VydmljZXNncmlkJztcclxuICAgIGxlZnRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChzZXJ2aWNlc0dyaWQpO1xyXG5cclxuICAgIC8vYWRkIHNlcnZpY2VzZ3JpZCBlbGVtZW50IDEgKEZyZWUgV2lGaSlcclxuICAgIGNvbnN0IHNlcnZpY2VzZ3JpZGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50MS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlR3JpZEVsZW1lbnQnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5hcHBlbmRDaGlsZChzZXJ2aWNlc2dyaWRlbGVtZW50MSk7XHJcbiAgICBjb25zdCB3aWZpSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHdpZmlJbWFnZS5zcmMgPSB3aWZpSW1nO1xyXG4gICAgd2lmaUltYWdlLndpZHRoID0gJzY5JztcclxuICAgIHdpZmlJbWFnZS5oZWlnaHQgPSAnNjknO1xyXG4gICAgd2lmaUltYWdlLmFsdCA9ICd3aWZpJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQxLmFwcGVuZENoaWxkKHdpZmlJbWFnZSk7XHJcbiAgICBjb25zdCB3aWZpVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHdpZmlUZXh0LnRleHRDb250ZW50PSdGcmVlIFdpRmknO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDEuYXBwZW5kQ2hpbGQod2lmaVRleHQpO1xyXG5cclxuICAgIC8vYWRkIHNlcnZpY2VzZ3JpZCBlbGVtZW50IDIgKENoYXJnZVVwKVxyXG4gICAgY29uc3Qgc2VydmljZXNncmlkZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQyLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VHcmlkRWxlbWVudCcpO1xyXG4gICAgc2VydmljZXNHcmlkLmFwcGVuZENoaWxkKHNlcnZpY2VzZ3JpZGVsZW1lbnQyKTtcclxuICAgIGNvbnN0IGNoYXJnZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjaGFyZ2VJbWFnZS5zcmMgPSBjaGFyZ2VJbWc7XHJcbiAgICBjaGFyZ2VJbWFnZS53aWR0aCA9ICc2OSc7XHJcbiAgICBjaGFyZ2VJbWFnZS5oZWlnaHQ9ICc2OSc7XHJcbiAgICBjaGFyZ2VJbWFnZS5hbHQgPSAnY2hhcmdlJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQyLmFwcGVuZENoaWxkKGNoYXJnZUltYWdlKTtcclxuICAgIGNvbnN0IGNoYXJnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjaGFyZ2VUZXh0LnRleHRDb250ZW50ID0gJ0NoYXJnZVVwJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQyLmFwcGVuZENoaWxkKGNoYXJnZVRleHQpO1xyXG5cclxuICAgIC8vYWRkIHNlcnZpY2VzZ3JpZCBlbGVtZW50IDMgKEJvb2tDb3JuZXIpXHJcbiAgICBjb25zdCBzZXJ2aWNlc2dyaWRlbGVtZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDMuY2xhc3NMaXN0LmFkZCgnc2VydmljZUdyaWRFbGVtZW50Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuYXBwZW5kQ2hpbGQoc2VydmljZXNncmlkZWxlbWVudDMpO1xyXG4gICAgY29uc3QgYm9va0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBib29rSW1hZ2Uuc3JjID0gYm9va0ltZztcclxuICAgIGJvb2tJbWFnZS53aWR0aCA9ICc2MCc7XHJcbiAgICBib29rSW1hZ2UuaGVpZ2h0PSAnNjknO1xyXG4gICAgYm9va0ltYWdlLmFsdCA9ICdib29rcyc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50My5hcHBlbmRDaGlsZChib29rSW1hZ2UpO1xyXG4gICAgY29uc3QgYm9va1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBib29rVGV4dC50ZXh0Q29udGVudCA9ICdCb29rQ29ybmVyJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQzLmFwcGVuZENoaWxkKGJvb2tUZXh0KTtcclxuXHJcbiAgICAvL2FkZCBsZWZ0IGZsb2F0aWUgYnV0dG9uXHJcbiAgICBjb25zdCBsZWZ0RmxvYXRpZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24uaWQgPSAnbGVmdEZsb2F0aWVCdXR0b24nO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmxvYXRpZWJ1dHRvbicpO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24udGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xyXG4gICAgbGVmdEZsb2F0aWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdhYm91dHVzJylcclxuICAgIH0pO1xyXG4gICAgbGVmdFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKGxlZnRGbG9hdGllQnV0dG9uKTtcclxuXHJcbiAgICAvL3NldCB1cCBtaWRkbGUgZmxvYXRpZVxyXG4gICAgY29uc3QgbWlkZGxlRmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdtaWRkbGVmbG9hdGllJyk7XHJcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChtaWRkbGVGbG9hdGllKTtcclxuICAgIGNvbnN0IG1pZGRsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1pZGRsZVRpdGxlLnRleHRDb250ZW50ID0gJ0tvZmZlZUNvcm5lciBpcy4uLic7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKG1pZGRsZVRpdGxlKTtcclxuXHJcbiAgICAvL2NyZWF0ZSB1bFxyXG4gICAgY29uc3QgcGFyZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKHBhcmVudExpc3QpO1xyXG5cclxuICAgIC8vY3JlYXRlIGxpc3QgaXRlbXNcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW0xLmlubmVySFRNTCA9ICcuLi4gdGhlIG1vc3QgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+Y296eTwvYT4gc3BvdCBpbiB0b3duJztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW0yLmlubmVySFRNTCA9ICcuLi4gdGhlIGJlc3QgcGxhY2UgdG8gPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+Z2V0IHdvcmsgZG9uZSc7XHJcbiAgICBjb25zdCBtaWRkbGVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtMy5pbm5lckhUTUwgPSAnLi4uIHRoZSA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5oZWFydDwvYT4gb2YgdGhlIGNpdHknO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTQuaW5uZXJIVE1MID0gJy4uLiB0aGUgaG9tZSBvZiA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj50aGUgYmVzdCBLb2ZmZWU8L2E+JztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW01LmlubmVySFRNTCA9ICcuLi4gYWxsIGFib3V0IHRoZSA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5jb21tdW5pdHk8L2E+JztcclxuICAgIFxyXG4gICAgLy9hcHBlbmQgbGlzdCBpdGVtcyB0byB1bFxyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtMSk7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW0yKTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTMpO1xyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtNCk7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW01KTtcclxuXHJcbiAgICAvL2FkZCB0d28gbGFzdCBoMnMgdG8gbWlkZGxlIGZsb2F0aWVcclxuICAgIGNvbnN0IG1pZGRsZUJyZWFrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbWlkZGxlQnJlYWtUaXRsZS5pbm5lckhUTUwgPSAnQ2F0Y2ggYSBicmVhazxici8+b3Igd29yayBpbiBoYXJtb255JztcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQobWlkZGxlQnJlYWtUaXRsZSk7XHJcbiAgICBjb25zdCBtaWRkbGVDaG9pY2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtaWRkbGVDaG9pY2VUaXRsZS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2V0ZXh0Jyk7XHJcbiAgICBtaWRkbGVDaG9pY2VUaXRsZS50ZXh0Q29udGVudCA9ICdUaGUgY2hvaWNlIGlzIHlvdXJzLCByZWFsbHknO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5hcHBlbmRDaGlsZChtaWRkbGVDaG9pY2VUaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgcmlnaHQgZmxvYXRpZVxyXG4gICAgY29uc3QgcmlnaHRTaWRlRmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdzaWRlZmxvYXRpZScpO1xyXG4gICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRmxvYXRpZSk7XHJcbiAgICBjb25zdCByaWdodFNpZGVGbG9hdGllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGVGbG9hdGllVGl0bGUnKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVUaXRsZS50ZXh0Q29udGVudCA9ICdCZXN0IE9mZmVycyc7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUZsb2F0aWVUaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgb2ZmZXJzZ3JpZFxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXJzR3JpZC5pZCA9ICdvZmZlcnNncmlkJztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZCk7XHJcblxyXG4gICAgLy9zZXQgdXAgb2ZmZXJzZ3JpZCBlbGVtZW50c1xyXG4gICAgLy9lbGVtZW50IDFcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxLmNsYXNzTGlzdC5hZGQoJ29mZmVyc0dyaWRFbGVtZW50Jyk7XHJcbiAgICBvZmZlcnNHcmlkLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MVRpdGxlLmlubmVySFRNTCA9ICdDb3JuZXI8YnI+U3BlY2lhbCc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDEuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQxVGl0bGUpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQxUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDFQcmljZS50ZXh0Q29udGVudCA9ICcyLDAw4oKsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MS5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDFQcmljZSk7XHJcbiAgICAvL2VsZW1lbnQgMlxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDIuY2xhc3NMaXN0LmFkZCgnb2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWQuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQyKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyVGl0bGUuaW5uZXJIVE1MID0gJ0tvbGQ8YnI+QnJldyc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDIuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQyVGl0bGUpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQyUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDJQcmljZS50ZXh0Q29udGVudCA9ICczLDUw4oKsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50Mi5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDJQcmljZSk7XHJcbiAgICAvL2VsZW1lbnQgM1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDMuY2xhc3NMaXN0LmFkZCgnb2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWQuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQzKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50M1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzVGl0bGUuaW5uZXJIVE1MID0gJ0tsYXNzaWM8YnI+S29mZmVlJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50My5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDNUaXRsZSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50M1ByaWNlLnRleHRDb250ZW50ID0gJzEsNTDigqwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50M1ByaWNlKTtcclxuICAgIFxyXG4gICAgLy9yaWdodHNpZGVmbG9hdGllYnV0dG9uXHJcbiAgICBjb25zdCByaWdodFNpZGVGbG9hdGllQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aWVidXR0b24nKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24uaWQgPSAncmlnaHRGbG9hdGllQnV0dG9uJztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24pO1xyXG5cclxuICAgIC8vYWRkIGNsaWNrYWJpbGl0eVxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9mZmVyc0dyaWRFbGVtZW50Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWROZXh0UGFnZSgnbWVudScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnbWVudScpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVwYWdlOyIsImNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XHJcbiAgICAvL2Jhc2ljIGdyaWQgc2V0dXBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVHcmlkLmlkID0gJ21lbnVncmlkJztcclxuICAgIGNvbnN0IG1lbnVUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVRpdGxlRGl2LmlkID0gJ21lbnVUaXRsZURpdic7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVHcmlkKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnVUaXRsZURpdik7XHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWVudVRpdGxlLmlkID0gXCJtZW51VGl0bGVcIlxyXG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ1Rha2UgYSBnYW5kZXIgYW5kIGZvbGxvdyB5b3VyIGhlYXJ0Li4uJ1xyXG4gICAgbWVudVRpdGxlRGl2LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcblxyXG4gICAgLy9zZXQgdXAgZmlyc3QgaXRlbVxyXG4gICAgY29uc3QgaXRlbU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbU9uZS5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbU9uZSk7XHJcbiAgICBjb25zdCBpdGVtT25lQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1PbmVCZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1PbmUuYXBwZW5kQ2hpbGQoaXRlbU9uZUJnKTtcclxuICAgIGNvbnN0IGl0ZW1PbmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGl0ZW1PbmVOYW1lLmlubmVySFRNTCA9ICdDb3JuZXIgPGJyPiBTcGVjaWFsJztcclxuICAgIGl0ZW1PbmVOYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtTmFtZScpO1xyXG4gICAgaXRlbU9uZUJnLmFwcGVuZENoaWxkKGl0ZW1PbmVOYW1lKTtcclxuICAgIGNvbnN0IGRpdmlkaW5nTGluZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXZpZGluZ0xpbmVPbmUuY2xhc3NMaXN0LmFkZCgnbWVudURpdmlkaW5nTGluZScpXHJcbiAgICBpdGVtT25lQmcuYXBwZW5kQ2hpbGQoZGl2aWRpbmdMaW5lT25lKVxyXG4gICAgY29uc3QgaXRlbU9uZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbU9uZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbnNlY3RldHVyIGV0IGluIGRvbG9yZSBleGNlcHRldXIgdm9sdXB0YXRlIGVhIGxhYm9yZSBlc3QgcGFyaWF0dXIgbW9sbGl0IGVhIG9mZmljaWEuIFZlbmlhbSBjdXBpZGF0YXQgcGFyaWF0dXIgYXV0ZSBlc3QuIEVzdCBhdXRlIGRvIG51bGxhIHVsbGFtY28gaXJ1cmUgZWEgZGVzZXJ1bnQuIEVzdCBzaXQgZXhlcmNpdGF0aW9uIGRvbG9yZSBleGVyY2l0YXRpb24gb2ZmaWNpYSBkb2xvcmUgaXJ1cmUgYWQgcHJvaWRlbnQgbGFib3J1bSBMb3JlbSBlaXVzbW9kIGRvbG9yZSBjb21tb2RvLidcclxuICAgIGl0ZW1PbmVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbURlc2NyaXB0aW9uJyk7XHJcbiAgICBpdGVtT25lQmcuYXBwZW5kQ2hpbGQoaXRlbU9uZURlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGl0ZW1PbmVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1PbmVQcmljZS50ZXh0Q29udGVudCA9ICcyLDAw4oKsJztcclxuICAgIGl0ZW1PbmVQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbVByaWNlJyk7XHJcbiAgICBpdGVtT25lQmcuYXBwZW5kQ2hpbGQoaXRlbU9uZVByaWNlKVxyXG5cclxuICAgIC8vc2V0IHVwIHNlY29uZCBpdGVtXHJcbiAgICBjb25zdCBpdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtVHdvLmNsYXNzTGlzdC5hZGQoJ21lbnVFbGVtZW50Jyk7XHJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChpdGVtVHdvKTtcclxuICAgIGNvbnN0IGl0ZW1Ud29CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVR3b0JnLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtQmFja2dyb3VuZCcpO1xyXG4gICAgaXRlbVR3by5hcHBlbmRDaGlsZChpdGVtVHdvQmcpO1xyXG4gICAgY29uc3QgaXRlbVR3b05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaXRlbVR3b05hbWUuaW5uZXJIVE1MID0gJ0tvbGQgPGJyPiBCcmV3JztcclxuICAgIGl0ZW1Ud29OYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtTmFtZScpO1xyXG4gICAgaXRlbVR3b0JnLmFwcGVuZENoaWxkKGl0ZW1Ud29OYW1lKTtcclxuICAgIGNvbnN0IGRpdmlkaW5nTGluZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXZpZGluZ0xpbmVUd28uY2xhc3NMaXN0LmFkZCgnbWVudURpdmlkaW5nTGluZScpXHJcbiAgICBpdGVtVHdvQmcuYXBwZW5kQ2hpbGQoZGl2aWRpbmdMaW5lVHdvKVxyXG4gICAgY29uc3QgaXRlbVR3b0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVR3b0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbnNlY3RldHVyIGV0IGluIGRvbG9yZSBleGNlcHRldXIgdm9sdXB0YXRlIGVhIGxhYm9yZSBlc3QgcGFyaWF0dXIgbW9sbGl0IGVhIG9mZmljaWEuIFZlbmlhbSBjdXBpZGF0YXQgcGFyaWF0dXIgYXV0ZSBlc3QuIEVzdCBhdXRlIGRvIG51bGxhIHVsbGFtY28gaXJ1cmUgZWEgZGVzZXJ1bnQuIEVzdCBzaXQgZXhlcmNpdGF0aW9uIGRvbG9yZSBleGVyY2l0YXRpb24gb2ZmaWNpYSBkb2xvcmUgaXJ1cmUgYWQgcHJvaWRlbnQgbGFib3J1bSBMb3JlbSBlaXVzbW9kIGRvbG9yZSBjb21tb2RvLidcclxuICAgIGl0ZW1Ud29EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbURlc2NyaXB0aW9uJyk7XHJcbiAgICBpdGVtVHdvQmcuYXBwZW5kQ2hpbGQoaXRlbVR3b0Rlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGl0ZW1Ud29QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1Ud29QcmljZS50ZXh0Q29udGVudCA9ICczLDUw4oKsJztcclxuICAgIGl0ZW1Ud29QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbVByaWNlJyk7XHJcbiAgICBpdGVtVHdvQmcuYXBwZW5kQ2hpbGQoaXRlbVR3b1ByaWNlKVxyXG5cclxuICAgIC8vdGhpcmQgaXRlbVxyXG4gICAgY29uc3QgaXRlbVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtVGhyZWUuY2xhc3NMaXN0LmFkZCgnbWVudUVsZW1lbnQnKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGl0ZW1UaHJlZSk7XHJcbiAgICBjb25zdCBpdGVtVGhyZWVCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVRocmVlQmcuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1CYWNrZ3JvdW5kJyk7XHJcbiAgICBpdGVtVGhyZWUuYXBwZW5kQ2hpbGQoaXRlbVRocmVlQmcpO1xyXG4gICAgY29uc3QgaXRlbVRocmVlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBpdGVtVGhyZWVOYW1lLmlubmVySFRNTCA9ICdLbGFzc2ljIDxicj4gS29mZmVlJztcclxuICAgIGl0ZW1UaHJlZU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1OYW1lJyk7XHJcbiAgICBpdGVtVGhyZWVCZy5hcHBlbmRDaGlsZChpdGVtVGhyZWVOYW1lKTtcclxuICAgIGNvbnN0IGRpdmlkaW5nTGluZVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdmlkaW5nTGluZVRocmVlLmNsYXNzTGlzdC5hZGQoJ21lbnVEaXZpZGluZ0xpbmUnKVxyXG4gICAgaXRlbVRocmVlQmcuYXBwZW5kQ2hpbGQoZGl2aWRpbmdMaW5lVGhyZWUpXHJcbiAgICBjb25zdCBpdGVtVGhyZWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1UaHJlZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbnNlY3RldHVyIGV0IGluIGRvbG9yZSBleGNlcHRldXIgdm9sdXB0YXRlIGVhIGxhYm9yZSBlc3QgcGFyaWF0dXIgbW9sbGl0IGVhIG9mZmljaWEuIFZlbmlhbSBjdXBpZGF0YXQgcGFyaWF0dXIgYXV0ZSBlc3QuIEVzdCBhdXRlIGRvIG51bGxhIHVsbGFtY28gaXJ1cmUgZWEgZGVzZXJ1bnQuIEVzdCBzaXQgZXhlcmNpdGF0aW9uIGRvbG9yZSBleGVyY2l0YXRpb24gb2ZmaWNpYSBkb2xvcmUgaXJ1cmUgYWQgcHJvaWRlbnQgbGFib3J1bSBMb3JlbSBlaXVzbW9kIGRvbG9yZSBjb21tb2RvLidcclxuICAgIGl0ZW1UaHJlZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtRGVzY3JpcHRpb24nKTtcclxuICAgIGl0ZW1UaHJlZUJnLmFwcGVuZENoaWxkKGl0ZW1UaHJlZURlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGl0ZW1UaHJlZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVRocmVlUHJpY2UudGV4dENvbnRlbnQgPSAnMSw1MOKCrCc7XHJcbiAgICBpdGVtVGhyZWVQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbVByaWNlJyk7XHJcbiAgICBpdGVtVGhyZWVCZy5hcHBlbmRDaGlsZChpdGVtVGhyZWVQcmljZSlcclxuXHJcbiAgICAvL2ZvdXJ0aCBpdGVtXHJcbiAgICBjb25zdCBpdGVtRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUZvdXIuY2xhc3NMaXN0LmFkZCgnbWVudUVsZW1lbnQnKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGl0ZW1Gb3VyKTtcclxuICAgIGNvbnN0IGl0ZW1Gb3VyQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Gb3VyQmcuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1CYWNrZ3JvdW5kJyk7XHJcbiAgICBpdGVtRm91ci5hcHBlbmRDaGlsZChpdGVtRm91ckJnKTtcclxuICAgIGNvbnN0IGl0ZW1Gb3VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBpdGVtRm91ck5hbWUuaW5uZXJIVE1MID0gJ0Nvcm5lciA8YnI+IEthcHB1Y2Npbm8nO1xyXG4gICAgaXRlbUZvdXJOYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtTmFtZScpO1xyXG4gICAgaXRlbUZvdXJCZy5hcHBlbmRDaGlsZChpdGVtRm91ck5hbWUpO1xyXG4gICAgY29uc3QgZGl2aWRpbmdMaW5lRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXZpZGluZ0xpbmVGb3VyLmNsYXNzTGlzdC5hZGQoJ21lbnVEaXZpZGluZ0xpbmUnKVxyXG4gICAgaXRlbUZvdXJCZy5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmVGb3VyKVxyXG4gICAgY29uc3QgaXRlbUZvdXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1Gb3VyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29uc2VjdGV0dXIgZXQgaW4gZG9sb3JlIGV4Y2VwdGV1ciB2b2x1cHRhdGUgZWEgbGFib3JlIGVzdCBwYXJpYXR1ciBtb2xsaXQgZWEgb2ZmaWNpYS4gVmVuaWFtIGN1cGlkYXRhdCBwYXJpYXR1ciBhdXRlIGVzdC4gRXN0IGF1dGUgZG8gbnVsbGEgdWxsYW1jbyBpcnVyZSBlYSBkZXNlcnVudC4gRXN0IHNpdCBleGVyY2l0YXRpb24gZG9sb3JlIGV4ZXJjaXRhdGlvbiBvZmZpY2lhIGRvbG9yZSBpcnVyZSBhZCBwcm9pZGVudCBsYWJvcnVtIExvcmVtIGVpdXNtb2QgZG9sb3JlIGNvbW1vZG8uJ1xyXG4gICAgaXRlbUZvdXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbURlc2NyaXB0aW9uJyk7XHJcbiAgICBpdGVtRm91ckJnLmFwcGVuZENoaWxkKGl0ZW1Gb3VyRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaXRlbUZvdXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1Gb3VyUHJpY2UudGV4dENvbnRlbnQgPSAnMSw3NeKCrCc7XHJcbiAgICBpdGVtRm91clByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtUHJpY2UnKTtcclxuICAgIGl0ZW1Gb3VyQmcuYXBwZW5kQ2hpbGQoaXRlbUZvdXJQcmljZSlcclxuXHJcbiAgICAvL2ZpZnRoIGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1GaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtRml2ZS5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbUZpdmUpO1xyXG4gICAgY29uc3QgaXRlbUZpdmVCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUZpdmVCZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1GaXZlLmFwcGVuZENoaWxkKGl0ZW1GaXZlQmcpO1xyXG4gICAgY29uc3QgaXRlbUZpdmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGl0ZW1GaXZlTmFtZS5pbm5lckhUTUwgPSAnQ29ybmVyIDxicj4gQW1lcmlrYW5vJztcclxuICAgIGl0ZW1GaXZlTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbU5hbWUnKTtcclxuICAgIGl0ZW1GaXZlQmcuYXBwZW5kQ2hpbGQoaXRlbUZpdmVOYW1lKTtcclxuICAgIGNvbnN0IGRpdmlkaW5nTGluZUZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2aWRpbmdMaW5lRml2ZS5jbGFzc0xpc3QuYWRkKCdtZW51RGl2aWRpbmdMaW5lJylcclxuICAgIGl0ZW1GaXZlQmcuYXBwZW5kQ2hpbGQoZGl2aWRpbmdMaW5lRml2ZSlcclxuICAgIGNvbnN0IGl0ZW1GaXZlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRml2ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbnNlY3RldHVyIGV0IGluIGRvbG9yZSBleGNlcHRldXIgdm9sdXB0YXRlIGVhIGxhYm9yZSBlc3QgcGFyaWF0dXIgbW9sbGl0IGVhIG9mZmljaWEuIFZlbmlhbSBjdXBpZGF0YXQgcGFyaWF0dXIgYXV0ZSBlc3QuIEVzdCBhdXRlIGRvIG51bGxhIHVsbGFtY28gaXJ1cmUgZWEgZGVzZXJ1bnQuIEVzdCBzaXQgZXhlcmNpdGF0aW9uIGRvbG9yZSBleGVyY2l0YXRpb24gb2ZmaWNpYSBkb2xvcmUgaXJ1cmUgYWQgcHJvaWRlbnQgbGFib3J1bSBMb3JlbSBlaXVzbW9kIGRvbG9yZSBjb21tb2RvLidcclxuICAgIGl0ZW1GaXZlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1EZXNjcmlwdGlvbicpO1xyXG4gICAgaXRlbUZpdmVCZy5hcHBlbmRDaGlsZChpdGVtRml2ZURlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IGl0ZW1GaXZlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRml2ZVByaWNlLnRleHRDb250ZW50ID0gJzIsMDDigqwnO1xyXG4gICAgaXRlbUZpdmVQcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbVByaWNlJyk7XHJcbiAgICBpdGVtRml2ZUJnLmFwcGVuZENoaWxkKGl0ZW1GaXZlUHJpY2UpXHJcblxyXG4gICAgLy9zaXh0aCBpdGVtXHJcbiAgICBjb25zdCBpdGVtU2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtU2l4LmNsYXNzTGlzdC5hZGQoJ21lbnVFbGVtZW50Jyk7XHJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChpdGVtU2l4KTtcclxuICAgIGNvbnN0IGl0ZW1TaXhCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbVNpeEJnLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtQmFja2dyb3VuZCcpO1xyXG4gICAgaXRlbVNpeC5hcHBlbmRDaGlsZChpdGVtU2l4QmcpO1xyXG4gICAgY29uc3QgaXRlbVNpeE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaXRlbVNpeE5hbWUuaW5uZXJIVE1MID0gJ1R1cmtpc2ggPGJyPiBLb2ZmZWUnO1xyXG4gICAgaXRlbVNpeE5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1OYW1lJyk7XHJcbiAgICBpdGVtU2l4QmcuYXBwZW5kQ2hpbGQoaXRlbVNpeE5hbWUpO1xyXG4gICAgY29uc3QgZGl2aWRpbmdMaW5lU2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdmlkaW5nTGluZVNpeC5jbGFzc0xpc3QuYWRkKCdtZW51RGl2aWRpbmdMaW5lJylcclxuICAgIGl0ZW1TaXhCZy5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmVTaXgpXHJcbiAgICBjb25zdCBpdGVtU2l4RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtU2l4RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29uc2VjdGV0dXIgZXQgaW4gZG9sb3JlIGV4Y2VwdGV1ciB2b2x1cHRhdGUgZWEgbGFib3JlIGVzdCBwYXJpYXR1ciBtb2xsaXQgZWEgb2ZmaWNpYS4gVmVuaWFtIGN1cGlkYXRhdCBwYXJpYXR1ciBhdXRlIGVzdC4gRXN0IGF1dGUgZG8gbnVsbGEgdWxsYW1jbyBpcnVyZSBlYSBkZXNlcnVudC4gRXN0IHNpdCBleGVyY2l0YXRpb24gZG9sb3JlIGV4ZXJjaXRhdGlvbiBvZmZpY2lhIGRvbG9yZSBpcnVyZSBhZCBwcm9pZGVudCBsYWJvcnVtIExvcmVtIGVpdXNtb2QgZG9sb3JlIGNvbW1vZG8uJ1xyXG4gICAgaXRlbVNpeERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtRGVzY3JpcHRpb24nKTtcclxuICAgIGl0ZW1TaXhCZy5hcHBlbmRDaGlsZChpdGVtU2l4RGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaXRlbVNpeFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVNpeFByaWNlLnRleHRDb250ZW50ID0gJzIsNTDigqwnO1xyXG4gICAgaXRlbVNpeFByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtUHJpY2UnKTtcclxuICAgIGl0ZW1TaXhCZy5hcHBlbmRDaGlsZChpdGVtU2l4UHJpY2UpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGxvYWROZXh0UGFnZSwgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvYWRQYWdlXCI7XHJcbmltcG9ydCB3aWZpU3ZnIGZyb20gXCIuL3Jlc291cmNlcy93aWZpLnN2Z1wiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdIaSBpbSBhbGl2ZScpO1xyXG5cclxuaW5pdGlhbExvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=