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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n\r\n#menugrid {\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    grid-template-rows: min-content 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    grid-gap: 2rem;\r\n    background-color: none;\r\n}\r\n\r\n#contactTitle {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#menuTitle, #contactTitle {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menuTitleDiv, #contactTitleDiv {\r\n    display: flex;\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    grid-column: 1/4;\r\n    height: auto;\r\n    width: fit-content;\r\n    padding: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 2rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#contactUsRightFloatie, #menuTitleDiv, #contactTitleDiv, .menuElement, .sidefloatie, .middlefloatie, #aboutUsRightFloatie {\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.menuItemBackground {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 1.8rem 0.5rem;\r\n    background-color: var(--offwhite);\r\n    display: grid;\r\n    grid-template-columns: 2fr 5px 3fr;\r\n    grid-template-rows: auto 4rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n    overflow: scroll;\r\n}\r\n\r\n.menuItemDescription {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    border-bottom: 5px solid var(--purple);\r\n}\r\n\r\n.menuItemPrice {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-bottom-right-radius: 1.7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.menuDividingLine {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--purple);\r\n    grid-row: 1/3;\r\n}\r\n\r\n.menuItemName {\r\n    grid-row: 1/3;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.menuElement {\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    border-radius: 2rem 0.5rem;\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n#aboutgrid, #contactgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 1.85rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n#aboutUsFloatie, #contactUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\r\n\r\n#contactUsFloatie {\r\n    height: 70%;\r\n    overflow: scroll;\r\n}\r\n\r\n#aboutUsText, #contactUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n    hyphens: auto;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 7px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 1fr 1fr;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n#contactRightFloatieTitle {\r\n    color: white;\r\n}\r\n\r\n#contactUsRightFloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 1rem;\r\n    border-radius: 56px;\r\n    height: 100%;\r\n    width: 80%;\r\n    overflow: scroll;\r\n}\r\n\r\n.aboutUsRightFloatieElement, .contactUsRightFloatieElement {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 100px 3rem auto;\r\n    justify-items: center;\r\n    align-items: center;\r\n    border-radius: 1.5rem;\r\n    background-color: var(--offwhite);\r\n    text-align: center;\r\n    padding: 1rem;\r\n    padding-top: 0;\r\n}\r\n\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}\r\n\r\n#footerBar {\r\n    text-align: center;\r\n    height: 25px;\r\n}\r\n\r\nlabel {\r\n    color: white;\r\n}\r\n\r\n.contactInputField {\r\n    outline: none;\r\n    border: none;\r\n    height: 2rem;\r\n    width: 100%;\r\n    background-color: var(--offwhite);\r\n    border-radius: 2rem;\r\n    align-self: center;\r\n    max-width: 100%;\r\n    padding-left: 1rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.contactInputField:focus {\r\n    background-color: white;\r\n}\r\n\r\n#contactForm {\r\n    display: grid;\r\n    grid-template-rows: 2rem 2rem 3fr 1fr;\r\n    grid-template-columns: 1fr 5fr 1fr 5fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 100%;\r\n    grid-gap: 1rem;\r\n    margin-top: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#messageLabel {\r\n    grid-column: 1/5;\r\n}\r\n\r\n#message {\r\n    box-sizing: border-box;\r\n    grid-column: 1/5;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: scroll;\r\n    padding: 1rem;\r\n    resize: none;\r\n    max-width: 100%;\r\n}\r\n\r\n#contactSendButton {\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    width: auto;\r\n    grid-column: 1/5;\r\n    outline: 0;\r\n    border: 0;\r\n    background-color: var(--buttoncolour);\r\n    padding: 1rem;\r\n    font-size: x-large;\r\n    border-radius: 2rem;\r\n}\r\n\r\n\r\n#contactgrid {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 6fr 1fr;\r\n    grid-template-columns: 1fr 3fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,gCAAgC;IAChC,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI;AACJ;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,uCAAuC;IACvC,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,iCAAiC;IACjC,aAAa;IACb,kCAAkC;IAClC,6BAA6B;IAC7B,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,kCAAkC;IAClC,SAAS;IACT,UAAU;AACd;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,+BAA+B;IAC/B,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,0BAA0B;IAC1B,8BAA8B;IAC9B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,+BAA+B;IAC/B,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;;;AAIA;IACI,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,SAAS;AACb;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,yCAAyC;IACzC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kCAAkC;IAClC,+BAA+B;IAC/B,SAAS;IACT,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,+BAA+B;IAC/B,gCAAgC;IAChC,mBAAmB;IACnB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,cAAc;IACd,+BAA+B;IAC/B,aAAa;IACb,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,mBAAmB;IACnB,qBAAqB;IACrB,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,cAAc;AAClB;;;AAGA;IACI,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,sCAAsC;IACtC,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,eAAe;IACf,cAAc;IACd,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,qCAAqC;IACrC,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,+BAA+B;IAC/B,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;AACvB","sourcesContent":[":root {\r\n    --orange: #D1512D;\r\n    --purple: #411530;\r\n    --lightcolour: #F5C7A9;\r\n    --offwhite: #D9D9D9;\r\n    --buttoncolour: #F5C7A9;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Inter', sans-serif;\r\n    background-color: var(--lightcolour);\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#maingrid, #aboutgrid, #contactgrid, #menugrid {\r\n    margin: 0 auto;\r\n    max-width: 1920px;\r\n}\r\n\r\n.orangetext {\r\n    color: var(--orange)\r\n}\r\n\r\n\r\n\r\n#menugrid {\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    grid-template-rows: min-content 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    padding: 2rem;\r\n    grid-gap: 2rem;\r\n    background-color: none;\r\n}\r\n\r\n#contactTitle {\r\n    grid-column: 1/3;\r\n}\r\n\r\n#menuTitle, #contactTitle {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menuTitleDiv, #contactTitleDiv {\r\n    display: flex;\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    grid-column: 1/4;\r\n    height: auto;\r\n    width: fit-content;\r\n    padding: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 2rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#contactUsRightFloatie, #menuTitleDiv, #contactTitleDiv, .menuElement, .sidefloatie, .middlefloatie, #aboutUsRightFloatie {\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.menuItemBackground {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 1.8rem 0.5rem;\r\n    background-color: var(--offwhite);\r\n    display: grid;\r\n    grid-template-columns: 2fr 5px 3fr;\r\n    grid-template-rows: auto 4rem;\r\n    justify-items: center;\r\n    align-items: center;\r\n    overflow: scroll;\r\n}\r\n\r\n.menuItemDescription {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    border-bottom: 5px solid var(--purple);\r\n}\r\n\r\n.menuItemPrice {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    border-bottom-right-radius: 1.7rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.menuDividingLine {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: var(--purple);\r\n    grid-row: 1/3;\r\n}\r\n\r\n.menuItemName {\r\n    grid-row: 1/3;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.menuElement {\r\n    background-color: var(--purple);\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    border-radius: 2rem 0.5rem;\r\n    box-shadow: 5px 5px 15px black;\r\n    outline: none;\r\n    border: none;\r\n}\r\n\r\n#aboutgrid, #contactgrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#header {\r\n    background-color: var(--orange);\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 70% 30%;\r\n    grid-template-rows: 1fr;\r\n    margin: 0;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    height: 4rem;\r\n}\r\n\r\n.navbarbutton {\r\n    outline: none;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.4rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#buttondiv {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 50px;\r\n}\r\n\r\n#mainTitle {\r\n    margin: 0;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    height: calc(100% - 65px);\r\n}\r\n\r\n#maingrid {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 1fr 3fr 1fr;\r\n    gap: 30px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.sidefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    background-color: var(--purple);\r\n    padding: 1.5rem 3rem 1.5rem 3rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    width: 40%;\r\n}\r\n\r\n.sideFloatieTitle {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.floatiebutton {\r\n    margin-top: 20px;\r\n    font-size: 1.85rem;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-radius: 1.2rem;\r\n    outline: none;\r\n    border: none;\r\n    background-color: var(--buttoncolour);\r\n    cursor: pointer;\r\n}\r\n\r\n#servicesgrid, #offersgrid {\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n#aboutUsFloatie, #contactUsFloatie {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\r\n\r\n#contactUsFloatie {\r\n    height: 70%;\r\n    overflow: scroll;\r\n}\r\n\r\n#aboutUsText, #contactUsText {\r\n    color: var(--offwhite);\r\n    text-align: center;\r\n    hyphens: auto;\r\n}\r\n\r\n.serviceGridElement, .offersGridElement {\r\n    display: grid;\r\n    grid-template-columns: 69px auto;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: var(--offwhite);\r\n    font-size: 1.3rem;\r\n    padding: 7px;\r\n    border-radius: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.offersGridElement {\r\n    grid-template-columns: 1fr 1fr;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.serviceGridElement p, .offersGridElement p {\r\n    color: var(--purple)\r\n}\r\n\r\n.middlefloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 4rem;\r\n    padding-top: 2rem;\r\n    padding-bottom: 2rem;\r\n    border-radius: 56px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.middlefloatie h1 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.middlefloatie h2 {\r\n    margin-bottom: 0;\r\n    font-weight: 200;\r\n}\r\n\r\nul, li {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\n\r\nli {\r\n    margin: 1.4rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 200;\r\n}\r\n\r\n#aboutUsRightFloatie {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 2rem;\r\n    border-radius: 56px;\r\n    height: 90%;\r\n    width: 80%;\r\n}\r\n\r\n#contactRightFloatieTitle {\r\n    color: white;\r\n}\r\n\r\n#contactUsRightFloatie {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    grid-row-start: 2;\r\n    grid-column: 2;\r\n    background-color: var(--purple);\r\n    padding: 1rem;\r\n    border-radius: 56px;\r\n    height: 100%;\r\n    width: 80%;\r\n    overflow: scroll;\r\n}\r\n\r\n.aboutUsRightFloatieElement, .contactUsRightFloatieElement {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-rows: 100px 3rem auto;\r\n    justify-items: center;\r\n    align-items: center;\r\n    border-radius: 1.5rem;\r\n    background-color: var(--offwhite);\r\n    text-align: center;\r\n    padding: 1rem;\r\n    padding-top: 0;\r\n}\r\n\r\n\r\n.currentPageButton {\r\n    color: var(--purple) !important;\r\n}\r\n\r\n#footerBar {\r\n    text-align: center;\r\n    height: 25px;\r\n}\r\n\r\nlabel {\r\n    color: white;\r\n}\r\n\r\n.contactInputField {\r\n    outline: none;\r\n    border: none;\r\n    height: 2rem;\r\n    width: 100%;\r\n    background-color: var(--offwhite);\r\n    border-radius: 2rem;\r\n    align-self: center;\r\n    max-width: 100%;\r\n    padding-left: 1rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.contactInputField:focus {\r\n    background-color: white;\r\n}\r\n\r\n#contactForm {\r\n    display: grid;\r\n    grid-template-rows: 2rem 2rem 3fr 1fr;\r\n    grid-template-columns: 1fr 5fr 1fr 5fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 100%;\r\n    grid-gap: 1rem;\r\n    margin-top: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#messageLabel {\r\n    grid-column: 1/5;\r\n}\r\n\r\n#message {\r\n    box-sizing: border-box;\r\n    grid-column: 1/5;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: scroll;\r\n    padding: 1rem;\r\n    resize: none;\r\n    max-width: 100%;\r\n}\r\n\r\n#contactSendButton {\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    width: auto;\r\n    grid-column: 1/5;\r\n    outline: 0;\r\n    border: 0;\r\n    background-color: var(--buttoncolour);\r\n    padding: 1rem;\r\n    font-size: x-large;\r\n    border-radius: 2rem;\r\n}\r\n\r\n\r\n#contactgrid {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 1fr 6fr 1fr;\r\n    grid-template-columns: 1fr 3fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
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

    const contactForm = document.createElement('form');
    contactForm.method = 'post';
    contactForm.id = 'contactForm';
    rightFloatie.appendChild(contactForm);

    const nameLabel = document.createElement('label');
    nameLabel.innerHTML = 'Name';
    nameLabel.htmlFor = 'name';
    nameLabel.id = 'nameLabel'
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.maxLength = 25;
    nameInput.minLength = 3;
    nameInput.id = 'name';
    nameInput.required = 'true';
    nameInput.placeholder = 'Write your name here...'
    nameInput.classList.add('contactInputField');
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = 'Email';
    emailLabel.htmlFor = 'email';
    emailLabel.id = 'emailLabel';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.maxLength = 50;
    emailInput.minLength = 3;
    emailInput.id = 'email';
    emailInput.required = 'true';
    emailInput.placeholder = 'name@mail.com'
    emailInput.classList.add('contactInputField');
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.innerHTML = 'Message';
    messageLabel.htmlFor = 'message';
    messageLabel.id = 'messageLabel';
    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.classList.add('contactInputField');
    messageInput.required = 'true';
    messageInput.placeholder = 'Write your message here...'
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageInput);

    const sendButton = document.createElement('input');
    sendButton.id = 'contactSendButton';
    sendButton.type = 'submit';
    sendButton.value = 'Send message';
    contactForm.appendChild(sendButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBWTtBQUN4QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsUUFBUSxrRUFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDekw3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7VUN6SnpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ29DO0FBQ3ZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9yZXNvdXJjZXMvYmF0dGVyeS5wbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcmVzb3VyY2VzL2Jvb2tjb3JuZXIucG5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy93aWZpLnBuZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3Jlc291cmNlcy93aWZpLnN2ZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVyRm9vdGVyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVyTmF2QmFyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2Fib3V0dXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tb3JhbmdlOiAjRDE1MTJEO1xcclxcbiAgICAtLXB1cnBsZTogIzQxMTUzMDtcXHJcXG4gICAgLS1saWdodGNvbG91cjogI0Y1QzdBOTtcXHJcXG4gICAgLS1vZmZ3aGl0ZTogI0Q5RDlEOTtcXHJcXG4gICAgLS1idXR0b25jb2xvdXI6ICNGNUM3QTk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRjb2xvdXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5ncmlkLCAjYWJvdXRncmlkLCAjY29udGFjdGdyaWQsICNtZW51Z3JpZCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yYW5nZXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jbWVudWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBncmlkLWdhcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RUaXRsZSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxufVxcclxcblxcclxcbiNtZW51VGl0bGUsICNjb250YWN0VGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51VGl0bGVEaXYsICNjb250YWN0VGl0bGVEaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0VXNSaWdodEZsb2F0aWUsICNtZW51VGl0bGVEaXYsICNjb250YWN0VGl0bGVEaXYsIC5tZW51RWxlbWVudCwgLnNpZGVmbG9hdGllLCAubWlkZGxlZmxvYXRpZSwgI2Fib3V0VXNSaWdodEZsb2F0aWUge1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggYmxhY2s7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtQmFja2dyb3VuZCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuOHJlbSAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNXB4IDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDRyZW07XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtRGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXB1cnBsZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbVByaWNlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuN3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWVudURpdmlkaW5nTGluZSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbU5hbWUge1xcclxcbiAgICBncmlkLXJvdzogMS8zO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51RWxlbWVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAwLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCBibGFjaztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRncmlkLCAjY29udGFjdGdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyYnV0dG9uIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpblRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XFxyXFxufVxcclxcblxcclxcbiNtYWluZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbSAxLjVyZW0gM3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVGbG9hdGllVGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXRpZWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44NXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uY29sb3VyKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VydmljZXNncmlkLCAjb2ZmZXJzZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzRmxvYXRpZSwgI2NvbnRhY3RVc0Zsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0VXNGbG9hdGllIHtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzVGV4dCwgI2NvbnRhY3RVc1RleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGh5cGhlbnM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlR3JpZEVsZW1lbnQsIC5vZmZlcnNHcmlkRWxlbWVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjlweCBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vZmZlcnNHcmlkRWxlbWVudCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2aWNlR3JpZEVsZW1lbnQgcCwgLm9mZmVyc0dyaWRFbGVtZW50IHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKVxcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIGgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCwgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbWFyZ2luOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXRVc1JpZ2h0RmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdFJpZ2h0RmxvYXRpZVRpdGxlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdFVzUmlnaHRGbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5hYm91dFVzUmlnaHRGbG9hdGllRWxlbWVudCwgLmNvbnRhY3RVc1JpZ2h0RmxvYXRpZUVsZW1lbnQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDNyZW0gYXV0bztcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmN1cnJlbnRQYWdlQnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlckJhciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RJbnB1dEZpZWxkIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0SW5wdXRGaWVsZDpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdEZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMnJlbSAzZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyIDVmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLWdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuI21lc3NhZ2VMYWJlbCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxyXFxufVxcclxcblxcclxcbiNtZXNzYWdlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0U2VuZEJ1dHRvbiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uY29sb3VyKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGFjdGdyaWQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFD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QkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1vcmFuZ2U6ICNEMTUxMkQ7XFxyXFxuICAgIC0tcHVycGxlOiAjNDExNTMwO1xcclxcbiAgICAtLWxpZ2h0Y29sb3VyOiAjRjVDN0E5O1xcclxcbiAgICAtLW9mZndoaXRlOiAjRDlEOUQ5O1xcclxcbiAgICAtLWJ1dHRvbmNvbG91cjogI0Y1QzdBOTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGNvbG91cik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbmdyaWQsICNhYm91dGdyaWQsICNjb250YWN0Z3JpZCwgI21lbnVncmlkIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdldGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNtZW51Z3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdFRpdGxlIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUaXRsZSwgI2NvbnRhY3RUaXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUaXRsZURpdiwgI2NvbnRhY3RUaXRsZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RVc1JpZ2h0RmxvYXRpZSwgI21lbnVUaXRsZURpdiwgI2NvbnRhY3RUaXRsZURpdiwgLm1lbnVFbGVtZW50LCAuc2lkZWZsb2F0aWUsIC5taWRkbGVmbG9hdGllLCAjYWJvdXRVc1JpZ2h0RmxvYXRpZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCBibGFjaztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1CYWNrZ3JvdW5kIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS44cmVtIDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1cHggM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gNHJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1EZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcHVycGxlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtUHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS43cmVtO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51RGl2aWRpbmdMaW5lIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtTmFtZSB7XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVFbGVtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IGJsYWNrO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhYm91dGdyaWQsICNjb250YWN0Z3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJidXR0b24ge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNtYWluVGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtIDEuNXJlbSAzcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZUZsb2F0aWVUaXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdGllYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjg1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25jb2xvdXIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNlc2dyaWQsICNvZmZlcnNncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNGbG9hdGllLCAjY29udGFjdFVzRmxvYXRpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RVc0Zsb2F0aWUge1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0VXNUZXh0LCAjY29udGFjdFVzVGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaHlwaGVuczogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCwgLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OXB4IGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogN3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm9mZmVyc0dyaWRFbGVtZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZpY2VHcmlkRWxlbWVudCBwLCAub2ZmZXJzR3JpZEVsZW1lbnQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpXFxyXFxufVxcclxcblxcclxcbi5taWRkbGVmbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pZGRsZWZsb2F0aWUgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlkZGxlZmxvYXRpZSBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbnVsLCBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBtYXJnaW46IDEuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbiNhYm91dFVzUmlnaHRGbG9hdGllIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0UmlnaHRGbG9hdGllVGl0bGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0VXNSaWdodEZsb2F0aWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50LCAuY29udGFjdFVzUmlnaHRGbG9hdGllRWxlbWVudCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggM3JlbSBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY3VycmVudFBhZ2VCdXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyQmFyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdElucHV0RmllbGQge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RJbnB1dEZpZWxkOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0Rm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAycmVtIDNmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnIgNWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZUxhYmVsIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXHJcXG59XFxyXFxuXFxyXFxuI21lc3NhZ2Uge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBncmlkLWNvbHVtbjogMS81O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3RTZW5kQnV0dG9uIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25jb2xvdXIpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250YWN0Z3JpZCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE2OGUxYWQ1NTAxMzQ3MzY1YzExYzI3M2ZkMTA3ZmY5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzOWQ0ODcyYTFhZDNiNWVmZWQ1MDQ4MWE4NzcwYjg1Mi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWVkZGQ3NjBjNmQ5MTg2NmQ0ZjcyNDZhN2M1OWU1MzIucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGZpbGw9XFxcIiM0MTE1MzBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMjAuMzY0LDNhMSwxLDAsMCwxLTEsMUExNS4zODEsMTUuMzgxLDAsMCwwLDQsMTkuMzYzYTEsMSwwLDAsMS0yLDBBMTcuMzg0LDE3LjM4NCwwLDAsMSwxOS4zNjQsMiwxLDEsMCwwLDEsMjAuMzY0LDNaTTcuOTA5LDIwLjM2M2ExLDEsMCwwLDAsMS0xQTEwLjQ2NywxMC40NjcsMCwwLDEsMTkuMzY0LDguOTA5YTEsMSwwLDEsMCwwLTJBMTIuNDY5LDEyLjQ2OSwwLDAsMCw2LjkwOSwxOS4zNjMsMSwxLDAsMCwwLDcuOTA5LDIwLjM2M1ptNS45MDktMWE1LjU1Miw1LjU1MiwwLDAsMSw1LjU0Ni01LjU0NSwxLDEsMCwwLDAsMC0yLDcuNTU0LDcuNTU0LDAsMCwwLTcuNTQ2LDcuNTQ1LDEsMSwwLDAsMCwyLDBabTcuMTgyLDBBMS42MzcsMS42MzcsMCwxLDAsMTkuMzY0LDIxLDEuNjM3LDEuNjM3LDAsMCwwLDIxLDE5LjM2NFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCByZW5kZXJIb21lcGFnZSBmcm9tIFwiLi4vcGFnZXMvaG9tZXBhZ2VcIjtcclxuaW1wb3J0IHJlbmRlck1lbnUgZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcclxuaW1wb3J0IHJlbmRlckFib3V0VXMgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0dXNcIjtcclxuaW1wb3J0IHJlbmRlckNvbnRhY3QgZnJvbSBcIi4uL3BhZ2VzL2NvbnRhY3RcIjtcclxuaW1wb3J0IHJlbmRlck5hdkJhciBmcm9tIFwiLi9yZW5kZXJOYXZCYXJcIjtcclxuaW1wb3J0IHJlbmRlckZvb3RlciBmcm9tIFwiLi9yZW5kZXJGb290ZXJcIjtcclxuXHJcblxyXG4vLyBpbml0aWFsaXplIHRoZSBmaXJzdCBsb2FkaW5nIG9mIHRoZSBwYWdlXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnNjY2YWQxNDMzOWUxYjNiODg2ZGIuc3ZnJylcIjtcclxuICAgIHJlbmRlck5hdkJhcigpO1xyXG4gICAgcmVuZGVySG9tZXBhZ2UoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG59O1xyXG5cclxuXHJcbi8vbG9hZCB0aGUgcGFnZSBjbGlja2VkIGJ5IHRoZSB1c2VyXHJcbmNvbnN0IGxvYWROZXh0UGFnZSA9IChuZXh0UGFnZU5hbWUpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICByZW5kZXJOYXZCYXIoKTtcclxuICAgIGNvbnN0IG5hdmJhckJ1dHRvbnNOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcmJ1dHRvbicpO1xyXG4gICAgbmF2YmFyQnV0dG9uc05vZGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudFBhZ2VCdXR0b24nKTtcclxuICAgIH0pXHJcbiAgICBpZiAobmV4dFBhZ2VOYW1lID09ICdtZW51Jykge1xyXG4gICAgICAgIG5hdmJhckJ1dHRvbnNOb2RlWzBdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRQYWdlQnV0dG9uJylcclxuICAgICAgICByZW5kZXJNZW51KCk7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRQYWdlTmFtZSA9PSAnY29udGFjdCcpIHtcclxuICAgICAgICBuYXZiYXJCdXR0b25zTm9kZVsyXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UGFnZUJ1dHRvbicpXHJcbiAgICAgICAgcmVuZGVyQ29udGFjdCgpO1xyXG4gICAgfSBlbHNlIGlmIChuZXh0UGFnZU5hbWUgPT0gJ2Fib3V0dXMnKSB7XHJcbiAgICAgICAgbmF2YmFyQnV0dG9uc05vZGVbMV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2VCdXR0b24nKVxyXG4gICAgICAgIHJlbmRlckFib3V0VXMoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmRlckhvbWVwYWdlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgaW5pdGlhbExvYWQsIGxvYWROZXh0UGFnZSB9OyIsImNvbnN0IHJlbmRlckZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9vdGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vdGVyQmFyLmlkID0gXCJmb290ZXJCYXJcIjtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQmFyKTtcclxuICAgIGZvb3RlclRleHQuaW5uZXJIVE1MID0gJ01hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sdWtpYWtvc1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj7DgWtvcyBMdWvDoWNzPC9hPiBmb3IgVGhlIE9kaW4gUHJvamVjdCdcclxuICAgIGZvb3RlckJhci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJGb290ZXI7IiwiaW1wb3J0IHsgbG9hZE5leHRQYWdlIH0gZnJvbSAnLi9sb2FkUGFnZSc7XHJcblxyXG5jb25zdCByZW5kZXJOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgdXAgaGVhZGVyIGRpdlxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyRGl2LmlkPSdoZWFkZXInO1xyXG4gICAgY29udGVudC5wcmVwZW5kKGhlYWRlckRpdik7XHJcbiAgICBcclxuICAgIC8vY3JlYXRlIG1haW4gdGl0bGVcclxuICAgIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBcIktvZmZlZUNvcm5lclwiO1xyXG4gICAgbWFpblRpdGxlLmlkID0gJ21haW5UaXRsZSc7XHJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcclxuXHJcbiAgICAvL3NldCB1cCBidXR0b24gZGl2XHJcbiAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkRpdi5pZCA9IFwiYnV0dG9uZGl2XCI7XHJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcclxuXHJcbiAgICAvL2FkZCBidXR0b25zXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBtZW51QnV0dG9uLmlkPVwiYnV0dG9uTWVudVwiO1xyXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2YmFyYnV0dG9uJylcclxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBhYm91dFVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhYm91dFVzQnV0dG9uLmlkPVwiYnV0dG9uQWJvdXRVc1wiO1xyXG4gICAgYWJvdXRVc0J1dHRvbi50ZXh0Q29udGVudD0nQWJvdXQgVXMnO1xyXG4gICAgYWJvdXRVc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJidXR0b24nKVxyXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGFib3V0VXNCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnRhY3RCdXR0b24uaWQ9J2J1dHRvbkNvbnRhY3QnO1xyXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudD0nQ29udGFjdCc7XHJcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmJhcmJ1dHRvbicpXHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcblxyXG4gICAgLy9hZGQgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdtZW51JylcclxuICAgIH0pO1xyXG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ2NvbnRhY3QnKVxyXG4gICAgfSk7XHJcbiAgICBhYm91dFVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxvYWROZXh0UGFnZSgnYWJvdXR1cycpXHJcbiAgICB9KTtcclxuICAgIG1haW5UaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ2hvbWVwYWdlJylcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJOYXZCYXI7IiwiaW1wb3J0IHdpZmlJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL3dpZmkucG5nJztcclxuaW1wb3J0IGNoYXJnZUltZyBmcm9tICcuLi9yZXNvdXJjZXMvYmF0dGVyeS5wbmcnO1xyXG5pbXBvcnQgYm9va0ltZyBmcm9tICcuLi9yZXNvdXJjZXMvYm9va2Nvcm5lci5wbmcnO1xyXG5cclxuXHJcbmNvbnN0IHJlbmRlckFib3V0VXMgPSAoKSA9PiB7XHJcbiAgICAvL3NldCB1cCBiYXNpYyBncmlkXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGFib3V0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRHcmlkLmlkID0gJ2Fib3V0Z3JpZCc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0R3JpZCk7XHJcblxyXG4gICAgLy9yZW5kZXIgc2hvcnQgZmxvYXRpZSBvbiB0aGUgbGVmdFxyXG4gICAgY29uc3Qgc2hvcnRGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaG9ydEZsb2F0aWUuY2xhc3NMaXN0LmFkZCgnc2lkZWZsb2F0aWUnKTtcclxuICAgIHNob3J0RmxvYXRpZS5pZCA9ICdhYm91dFVzRmxvYXRpZSc7XHJcbiAgICBhYm91dEdyaWQuYXBwZW5kQ2hpbGQoc2hvcnRGbG9hdGllKTtcclxuICAgIGNvbnN0IHNob3J0U3RvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzaG9ydFN0b3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZUZsb2F0aWVUaXRsZScpO1xyXG4gICAgc2hvcnRTdG9yeVRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcclxuICAgIHNob3J0RmxvYXRpZS5hcHBlbmRDaGlsZChzaG9ydFN0b3J5VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWJvdXRVc1RleHQuaW5uZXJIVE1MID0gJ0tvZmZlZUNvcm5lciBpcyBhbiBpbmRlcGVuZGVudCBjYWbDqSB3aXRoIGFyb3VuZCA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj4zNSBsb2NhdGlvbnM8L2E+IGluIEV1cm9wZSwgd2l0aCBtb3JlIHRvIGNvbWUgc29vbi4gPGJyPkVzdGFibGlzaGVkIGluIDIwMDMsIHdlXFwndmUgYWNjdW11bGF0ZWQgYSB0b24gb2YgZXhwZXJpZW5jZSwgdG8gc2VydmUgeW91IHdpdGggdGhlIGdyZWF0ZXN0IGtvZmZlZSBhbmQgcHJvdmlkZSBvdXRzdGFuZGluZyBjdXN0b21lciBzZXJ2aWNlLiA8YnI+IENvbWUsIHRhc3RlIG91ciBkZWxpY2lvdXMgPGEgY2xhc3M9XCJvcmFuZ2V0ZXh0XCI+a29mZmVlPC9hPiwgZ2V0IHNvbWUgd29yayBkb25lIG9yIHJlbGF4IGEgYml0Lic7XHJcbiAgICBhYm91dFVzVGV4dC5pZCA9ICdhYm91dFVzVGV4dCdcclxuICAgIHNob3J0RmxvYXRpZS5hcHBlbmRDaGlsZChhYm91dFVzVGV4dCk7XHJcblxyXG4gICAgLy9yZW5kZXIgdGhlIHJpZ2h0IGZsb2F0aWUsIG9uIHdoaWNoIGFsbCB0aGUgc2VydmljZXMgYXJlIGV4cGxhaW5lZCB3aXRoIG1vcmUgZGV0YWlsXHJcbiAgICBjb25zdCByaWdodEZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0RmxvYXRpZS5pZCA9IFwiYWJvdXRVc1JpZ2h0RmxvYXRpZVwiO1xyXG5cclxuICAgIGFib3V0R3JpZC5hcHBlbmRDaGlsZChyaWdodEZsb2F0aWUpO1xyXG5cclxuICAgIC8vc2V0IHVwIGZyZWUgd2lmaSBjYXJkIGZsb2F0aWUgdGhpbmdcclxuICAgIGNvbnN0IHdpZmlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodEZsb2F0aWUuYXBwZW5kQ2hpbGQod2lmaUNhcmQpO1xyXG4gICAgd2lmaUNhcmQuY2xhc3NMaXN0LmFkZCgnYWJvdXRVc1JpZ2h0RmxvYXRpZUVsZW1lbnQnKTtcclxuICAgIGNvbnN0IHdpZmlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB3aWZpVGl0bGUudGV4dENvbnRlbnQgPSBcIkZyZWUgV2lGaVwiO1xyXG4gICAgY29uc3Qgd2lmaUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB3aWZpSW1hZ2Uuc3JjID0gd2lmaUltZztcclxuICAgIHdpZmlJbWFnZS53aWR0aCA9ICc2OSc7XHJcbiAgICB3aWZpSW1hZ2UuaGVpZ2h0ID0gJzY5JztcclxuICAgIHdpZmlJbWFnZS5hbHQgPSAnd2lmaSc7XHJcbiAgICB3aWZpQ2FyZC5hcHBlbmRDaGlsZCh3aWZpSW1hZ2UpO1xyXG4gICAgd2lmaUNhcmQuYXBwZW5kQ2hpbGQod2lmaVRpdGxlKTtcclxuICAgIGNvbnN0IHdpZmlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgd2lmaVRleHQuaW5uZXJIVE1MID0gXCJPY2NhZWNhdCBwcm9pZGVudCBwYXJpYXR1ciBsYWJvcnVtIGVhIGVpdXNtb2Qgc2l0IHBhcmlhdHVyIGFsaXF1YSBhbGlxdWEgc3VudC4gRGVzZXJ1bnQgZG9sb3IgcXVpcyBhZCByZXByZWhlbmRlcml0IGxhYm9yaXMgcGFyaWF0dXIgdWxsYW1jbyBjdWxwYSBxdWkgZGVzZXJ1bnQgZG9sb3IuIFBhcmlhdHVyIGNvbW1vZG8gY3VscGEgb2ZmaWNpYSBlc3NlLiBFc3QgaW4gZXNzZSBwcm9pZGVudCBjb21tb2RvIHZlbmlhbSBzaW50IGFsaXF1aXAgbmlzaSBzdW50IG5vc3RydWQgbW9sbGl0LlwiO1xyXG4gICAgd2lmaUNhcmQuYXBwZW5kQ2hpbGQod2lmaVRleHQpO1xyXG5cclxuICAgIC8vc2V0IHVwIGNoYXJnaW5nIGZsb2F0aWUgdGhpbmdcclxuICAgIGNvbnN0IGNoYXJnaW5nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmFwcGVuZENoaWxkKGNoYXJnaW5nQ2FyZCk7XHJcbiAgICBjaGFyZ2luZ0NhcmQuY2xhc3NMaXN0LmFkZCgnYWJvdXRVc1JpZ2h0RmxvYXRpZUVsZW1lbnQnKTtcclxuICAgIGNvbnN0IGNoYXJnaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY2hhcmdpbmdUaXRsZS50ZXh0Q29udGVudCA9IFwiRnJlZSBDaGFyZ2luZ1wiO1xyXG4gICAgY29uc3QgY2hhcmdlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNoYXJnZUltYWdlLnNyYyA9IGNoYXJnZUltZztcclxuICAgIGNoYXJnZUltYWdlLndpZHRoID0gJzY5JztcclxuICAgIGNoYXJnZUltYWdlLmhlaWdodD0gJzY5JztcclxuICAgIGNoYXJnZUltYWdlLmFsdCA9ICdjaGFyZ2UnO1xyXG4gICAgY2hhcmdpbmdDYXJkLmFwcGVuZENoaWxkKGNoYXJnZUltYWdlKTtcclxuICAgIGNoYXJnaW5nQ2FyZC5hcHBlbmRDaGlsZChjaGFyZ2luZ1RpdGxlKTtcclxuICAgIGNvbnN0IGNoYXJnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjaGFyZ2VUZXh0LmlubmVySFRNTCA9IFwiT2NjYWVjYXQgcHJvaWRlbnQgcGFyaWF0dXIgbGFib3J1bSBlYSBlaXVzbW9kIHNpdCBwYXJpYXR1ciBhbGlxdWEgYWxpcXVhIHN1bnQuIERlc2VydW50IGRvbG9yIHF1aXMgYWQgcmVwcmVoZW5kZXJpdCBsYWJvcmlzIHBhcmlhdHVyIHVsbGFtY28gY3VscGEgcXVpIGRlc2VydW50IGRvbG9yLiBQYXJpYXR1ciBjb21tb2RvIGN1bHBhIG9mZmljaWEgZXNzZS4gRXN0IGluIGVzc2UgcHJvaWRlbnQgY29tbW9kbyB2ZW5pYW0gc2ludCBhbGlxdWlwIG5pc2kgc3VudCBub3N0cnVkIG1vbGxpdC5cIjtcclxuICAgIGNoYXJnaW5nQ2FyZC5hcHBlbmRDaGlsZChjaGFyZ2VUZXh0KTtcclxuXHJcblxyXG4gICAgLy9zZXQgdXAgYm9va2Nvcm5lciBmbG9hdGllIHRoaW5nXHJcbiAgICBjb25zdCBib29rQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmFwcGVuZENoaWxkKGJvb2tDYXJkKTtcclxuICAgIGJvb2tDYXJkLmNsYXNzTGlzdC5hZGQoJ2Fib3V0VXNSaWdodEZsb2F0aWVFbGVtZW50Jyk7XHJcbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYm9va1RpdGxlLnRleHRDb250ZW50ID0gXCJCb29rQ29ybmVyXCI7XHJcbiAgICBjb25zdCBib29rSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGJvb2tJbWFnZS5zcmMgPSBib29rSW1nO1xyXG4gICAgYm9va0ltYWdlLndpZHRoID0gJzYwJztcclxuICAgIGJvb2tJbWFnZS5oZWlnaHQ9ICc2OSc7XHJcbiAgICBib29rSW1hZ2UuYWx0ID0gJ2Jvb2tzJztcclxuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tJbWFnZSk7XHJcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rVGl0bGUpO1xyXG4gICAgY29uc3QgYm9va1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBib29rVGV4dC5pbm5lckhUTUwgPSBcIk9jY2FlY2F0IHByb2lkZW50IHBhcmlhdHVyIGxhYm9ydW0gZWEgZWl1c21vZCBzaXQgcGFyaWF0dXIgYWxpcXVhIGFsaXF1YSBzdW50LiBEZXNlcnVudCBkb2xvciBxdWlzIGFkIHJlcHJlaGVuZGVyaXQgbGFib3JpcyBwYXJpYXR1ciB1bGxhbWNvIGN1bHBhIHF1aSBkZXNlcnVudCBkb2xvci4gUGFyaWF0dXIgY29tbW9kbyBjdWxwYSBvZmZpY2lhIGVzc2UuIEVzdCBpbiBlc3NlIHByb2lkZW50IGNvbW1vZG8gdmVuaWFtIHNpbnQgYWxpcXVpcCBuaXNpIHN1bnQgbm9zdHJ1ZCBtb2xsaXQuXCI7XHJcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rVGV4dCk7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQWJvdXRVczsiLCJjb25zdCByZW5kZXJDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgLy9iYXNpYyBncmlkIHNldHVwXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0R3JpZC5pZCA9ICdjb250YWN0Z3JpZCc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RHcmlkKTtcclxuXHJcbiAgICAvL3JlbmRlciBzaG9ydCBmbG9hdGllIG9uIHRoZSBsZWZ0XHJcbiAgICBjb25zdCBzaG9ydEZsb2F0aWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNob3J0RmxvYXRpZS5jbGFzc0xpc3QuYWRkKCdzaWRlZmxvYXRpZScpO1xyXG4gICAgc2hvcnRGbG9hdGllLmlkID0gJ2NvbnRhY3RVc0Zsb2F0aWUnO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoc2hvcnRGbG9hdGllKTtcclxuICAgIGNvbnN0IHNob3J0U3RvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzaG9ydFN0b3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZUZsb2F0aWVUaXRsZScpO1xyXG4gICAgc2hvcnRTdG9yeVRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xyXG4gICAgc2hvcnRGbG9hdGllLmFwcGVuZENoaWxkKHNob3J0U3RvcnlUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdFVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnRhY3RVc1RleHQudGV4dENvbnRlbnQgPSAnQWQgaWQgTG9yZW0gZG9sb3JlIGV4ZXJjaXRhdGlvbiBlbmltIGRvIG1hZ25hLiBOaXNpIHJlcHJlaGVuZGVyaXQgYWRpcGlzaWNpbmcgaXJ1cmUgbGFib3J1bSBkbyBhZCBhZCBlc3NlIGVzdCBsYWJvcmUgdXQgbGFib3Jpcy4gTWluaW0gYXV0ZSByZXByZWhlbmRlcml0IGFsaXF1YSBsYWJvcmUgZXN0IGN1bHBhIGluY2lkaWR1bnQgY3VscGEgaXBzdW0gaW4uIEluIGF1dGUgaW5jaWRpZHVudCBkb2xvciBleGNlcHRldXIgY29uc2VjdGV0dXIgZXNzZSBhbmltIGRlc2VydW50IGxhYm9ydW0gZG9sb3JlIGVzc2UuJztcclxuICAgIGNvbnRhY3RVc1RleHQuaWQgPSAnY29udGFjdFVzVGV4dCdcclxuICAgIHNob3J0RmxvYXRpZS5hcHBlbmRDaGlsZChjb250YWN0VXNUZXh0KTtcclxuXHJcbiAgICAvL3JlbmRlciB0aGUgcmlnaHQgZmxvYXRpZSwgb24gd2hpY2ggYWxsIHRoZSBzZXJ2aWNlcyBhcmUgZXhwbGFpbmVkIHdpdGggbW9yZSBkZXRhaWxcclxuICAgIGNvbnN0IHJpZ2h0RmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRGbG9hdGllLmlkID0gXCJjb250YWN0VXNSaWdodEZsb2F0aWVcIjtcclxuXHJcbiAgICBjb250YWN0R3JpZC5hcHBlbmRDaGlsZChyaWdodEZsb2F0aWUpO1xyXG5cclxuICAgIC8vZmlsbCB0aGUgcmlnaHQgZmxvYXRpZVxyXG4gICAgY29uc3QgY29udGFjdFJpZ2h0RmxvYXRpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY29udGFjdFJpZ2h0RmxvYXRpZVRpdGxlLmlkID0gXCJjb250YWN0UmlnaHRGbG9hdGllVGl0bGVcIlxyXG4gICAgY29udGFjdFJpZ2h0RmxvYXRpZVRpdGxlLmlubmVySFRNTCA9ICdHb3QgYW55IHF1ZXN0aW9ucz8gPGJyPiBTZW5kIHVzIGFuIGVtYWlsISdcclxuICAgIHJpZ2h0RmxvYXRpZS5hcHBlbmRDaGlsZChjb250YWN0UmlnaHRGbG9hdGllVGl0bGUpXHJcblxyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb250YWN0Rm9ybS5tZXRob2QgPSAncG9zdCc7XHJcbiAgICBjb250YWN0Rm9ybS5pZCA9ICdjb250YWN0Rm9ybSc7XHJcbiAgICByaWdodEZsb2F0aWUuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xyXG5cclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gJ05hbWUnO1xyXG4gICAgbmFtZUxhYmVsLmh0bWxGb3IgPSAnbmFtZSc7XHJcbiAgICBuYW1lTGFiZWwuaWQgPSAnbmFtZUxhYmVsJ1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZUlucHV0Lm1heExlbmd0aCA9IDI1O1xyXG4gICAgbmFtZUlucHV0Lm1pbkxlbmd0aCA9IDM7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZSc7XHJcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnV3JpdGUgeW91ciBuYW1lIGhlcmUuLi4nXHJcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnY29udGFjdElucHV0RmllbGQnKTtcclxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZW1haWxMYWJlbC5pbm5lckhUTUwgPSAnRW1haWwnO1xyXG4gICAgZW1haWxMYWJlbC5odG1sRm9yID0gJ2VtYWlsJztcclxuICAgIGVtYWlsTGFiZWwuaWQgPSAnZW1haWxMYWJlbCc7XHJcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbiAgICBlbWFpbElucHV0Lm1heExlbmd0aCA9IDUwO1xyXG4gICAgZW1haWxJbnB1dC5taW5MZW5ndGggPSAzO1xyXG4gICAgZW1haWxJbnB1dC5pZCA9ICdlbWFpbCc7XHJcbiAgICBlbWFpbElucHV0LnJlcXVpcmVkID0gJ3RydWUnO1xyXG4gICAgZW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICduYW1lQG1haWwuY29tJ1xyXG4gICAgZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5wdXRGaWVsZCcpO1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbWVzc2FnZUxhYmVsLmlubmVySFRNTCA9ICdNZXNzYWdlJztcclxuICAgIG1lc3NhZ2VMYWJlbC5odG1sRm9yID0gJ21lc3NhZ2UnO1xyXG4gICAgbWVzc2FnZUxhYmVsLmlkID0gJ21lc3NhZ2VMYWJlbCc7XHJcbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgbWVzc2FnZUlucHV0LmlkID0gJ21lc3NhZ2UnO1xyXG4gICAgbWVzc2FnZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbnB1dEZpZWxkJyk7XHJcbiAgICBtZXNzYWdlSW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XHJcbiAgICBtZXNzYWdlSW5wdXQucGxhY2Vob2xkZXIgPSAnV3JpdGUgeW91ciBtZXNzYWdlIGhlcmUuLi4nXHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcclxuXHJcbiAgICBjb25zdCBzZW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHNlbmRCdXR0b24uaWQgPSAnY29udGFjdFNlbmRCdXR0b24nO1xyXG4gICAgc2VuZEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzZW5kQnV0dG9uLnZhbHVlID0gJ1NlbmQgbWVzc2FnZSc7XHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3Q7IiwiaW1wb3J0IHsgbG9hZE5leHRQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkUGFnZSc7XHJcbmltcG9ydCB3aWZpSW1nIGZyb20gJy4uL3Jlc291cmNlcy93aWZpLnBuZyc7XHJcbmltcG9ydCBjaGFyZ2VJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL2JhdHRlcnkucG5nJztcclxuaW1wb3J0IGJvb2tJbWcgZnJvbSAnLi4vcmVzb3VyY2VzL2Jvb2tjb3JuZXIucG5nJztcclxuXHJcbmNvbnN0IHJlbmRlckhvbWVwYWdlID0gKCkgPT4ge1xyXG4gICAgLy9zZXQgdXAgbWFpbiBncmlkXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1haW5HcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluR3JpZC5pZD0nbWFpbmdyaWQnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluR3JpZCk7XHJcblxyXG4gICAgLy9zZXQgdXAgbGVmdCBzaWRlIGZsb2F0aWVcclxuICAgIGNvbnN0IGxlZnRTaWRlRmxvYXRpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGVmdFNpZGVGbG9hdGllLmNsYXNzTGlzdC5hZGQoJ3NpZGVmbG9hdGllJyk7XHJcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChsZWZ0U2lkZUZsb2F0aWUpO1xyXG4gICAgXHJcbiAgICAvL2FkZCBsZWZ0IHNpZGUgZmxvYXRpZSBjb250ZW50XHJcbiAgICBjb25zdCBzZXJ2aWNlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHNlcnZpY2VzVGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIFNlcnZpY2VzJztcclxuICAgIHNlcnZpY2VzVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZUZsb2F0aWVUaXRsZScpO1xyXG4gICAgbGVmdFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKHNlcnZpY2VzVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHNlcnZpY2VzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VydmljZXNHcmlkLmlkPSdzZXJ2aWNlc2dyaWQnO1xyXG4gICAgbGVmdFNpZGVGbG9hdGllLmFwcGVuZENoaWxkKHNlcnZpY2VzR3JpZCk7XHJcblxyXG4gICAgLy9hZGQgc2VydmljZXNncmlkIGVsZW1lbnQgMSAoRnJlZSBXaUZpKVxyXG4gICAgY29uc3Qgc2VydmljZXNncmlkZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQxLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VHcmlkRWxlbWVudCcpO1xyXG4gICAgc2VydmljZXNHcmlkLmFwcGVuZENoaWxkKHNlcnZpY2VzZ3JpZGVsZW1lbnQxKTtcclxuICAgIGNvbnN0IHdpZmlJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgd2lmaUltYWdlLnNyYyA9IHdpZmlJbWc7XHJcbiAgICB3aWZpSW1hZ2Uud2lkdGggPSAnNjknO1xyXG4gICAgd2lmaUltYWdlLmhlaWdodCA9ICc2OSc7XHJcbiAgICB3aWZpSW1hZ2UuYWx0ID0gJ3dpZmknO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDEuYXBwZW5kQ2hpbGQod2lmaUltYWdlKTtcclxuICAgIGNvbnN0IHdpZmlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgd2lmaVRleHQudGV4dENvbnRlbnQ9J0ZyZWUgV2lGaSc7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50MS5hcHBlbmRDaGlsZCh3aWZpVGV4dCk7XHJcblxyXG4gICAgLy9hZGQgc2VydmljZXNncmlkIGVsZW1lbnQgMiAoQ2hhcmdlVXApXHJcbiAgICBjb25zdCBzZXJ2aWNlc2dyaWRlbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDIuY2xhc3NMaXN0LmFkZCgnc2VydmljZUdyaWRFbGVtZW50Jyk7XHJcbiAgICBzZXJ2aWNlc0dyaWQuYXBwZW5kQ2hpbGQoc2VydmljZXNncmlkZWxlbWVudDIpO1xyXG4gICAgY29uc3QgY2hhcmdlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNoYXJnZUltYWdlLnNyYyA9IGNoYXJnZUltZztcclxuICAgIGNoYXJnZUltYWdlLndpZHRoID0gJzY5JztcclxuICAgIGNoYXJnZUltYWdlLmhlaWdodD0gJzY5JztcclxuICAgIGNoYXJnZUltYWdlLmFsdCA9ICdjaGFyZ2UnO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDIuYXBwZW5kQ2hpbGQoY2hhcmdlSW1hZ2UpO1xyXG4gICAgY29uc3QgY2hhcmdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNoYXJnZVRleHQudGV4dENvbnRlbnQgPSAnQ2hhcmdlVXAnO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDIuYXBwZW5kQ2hpbGQoY2hhcmdlVGV4dCk7XHJcblxyXG4gICAgLy9hZGQgc2VydmljZXNncmlkIGVsZW1lbnQgMyAoQm9va0Nvcm5lcilcclxuICAgIGNvbnN0IHNlcnZpY2VzZ3JpZGVsZW1lbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZXJ2aWNlc2dyaWRlbGVtZW50My5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlR3JpZEVsZW1lbnQnKTtcclxuICAgIHNlcnZpY2VzR3JpZC5hcHBlbmRDaGlsZChzZXJ2aWNlc2dyaWRlbGVtZW50Myk7XHJcbiAgICBjb25zdCBib29rSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGJvb2tJbWFnZS5zcmMgPSBib29rSW1nO1xyXG4gICAgYm9va0ltYWdlLndpZHRoID0gJzYwJztcclxuICAgIGJvb2tJbWFnZS5oZWlnaHQ9ICc2OSc7XHJcbiAgICBib29rSW1hZ2UuYWx0ID0gJ2Jvb2tzJztcclxuICAgIHNlcnZpY2VzZ3JpZGVsZW1lbnQzLmFwcGVuZENoaWxkKGJvb2tJbWFnZSk7XHJcbiAgICBjb25zdCBib29rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGJvb2tUZXh0LnRleHRDb250ZW50ID0gJ0Jvb2tDb3JuZXInO1xyXG4gICAgc2VydmljZXNncmlkZWxlbWVudDMuYXBwZW5kQ2hpbGQoYm9va1RleHQpO1xyXG5cclxuICAgIC8vYWRkIGxlZnQgZmxvYXRpZSBidXR0b25cclxuICAgIGNvbnN0IGxlZnRGbG9hdGllQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsZWZ0RmxvYXRpZUJ1dHRvbi5pZCA9ICdsZWZ0RmxvYXRpZUJ1dHRvbic7XHJcbiAgICBsZWZ0RmxvYXRpZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmbG9hdGllYnV0dG9uJyk7XHJcbiAgICBsZWZ0RmxvYXRpZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XHJcbiAgICBsZWZ0RmxvYXRpZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkTmV4dFBhZ2UoJ2Fib3V0dXMnKVxyXG4gICAgfSk7XHJcbiAgICBsZWZ0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQobGVmdEZsb2F0aWVCdXR0b24pO1xyXG5cclxuICAgIC8vc2V0IHVwIG1pZGRsZSBmbG9hdGllXHJcbiAgICBjb25zdCBtaWRkbGVGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtaWRkbGVGbG9hdGllLmNsYXNzTGlzdC5hZGQoJ21pZGRsZWZsb2F0aWUnKTtcclxuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKG1pZGRsZUZsb2F0aWUpO1xyXG4gICAgY29uc3QgbWlkZGxlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWlkZGxlVGl0bGUudGV4dENvbnRlbnQgPSAnS29mZmVlQ29ybmVyIGlzLi4uJztcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQobWlkZGxlVGl0bGUpO1xyXG5cclxuICAgIC8vY3JlYXRlIHVsXHJcbiAgICBjb25zdCBwYXJlbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIG1pZGRsZUZsb2F0aWUuYXBwZW5kQ2hpbGQocGFyZW50TGlzdCk7XHJcblxyXG4gICAgLy9jcmVhdGUgbGlzdCBpdGVtc1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTEuaW5uZXJIVE1MID0gJy4uLiB0aGUgbW9zdCA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5jb3p5PC9hPiBzcG90IGluIHRvd24nO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTIuaW5uZXJIVE1MID0gJy4uLiB0aGUgYmVzdCBwbGFjZSB0byA8YSBjbGFzcz1cIm9yYW5nZXRleHRcIj5nZXQgd29yayBkb25lJztcclxuICAgIGNvbnN0IG1pZGRsZUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1pZGRsZUl0ZW0zLmlubmVySFRNTCA9ICcuLi4gdGhlIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmhlYXJ0PC9hPiBvZiB0aGUgY2l0eSc7XHJcbiAgICBjb25zdCBtaWRkbGVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtaWRkbGVJdGVtNC5pbm5lckhUTUwgPSAnLi4uIHRoZSBob21lIG9mIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPnRoZSBiZXN0IEtvZmZlZTwvYT4nO1xyXG4gICAgY29uc3QgbWlkZGxlSXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWlkZGxlSXRlbTUuaW5uZXJIVE1MID0gJy4uLiBhbGwgYWJvdXQgdGhlIDxhIGNsYXNzPVwib3JhbmdldGV4dFwiPmNvbW11bml0eTwvYT4nO1xyXG4gICAgXHJcbiAgICAvL2FwcGVuZCBsaXN0IGl0ZW1zIHRvIHVsXHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW0xKTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTIpO1xyXG4gICAgcGFyZW50TGlzdC5hcHBlbmRDaGlsZChtaWRkbGVJdGVtMyk7XHJcbiAgICBwYXJlbnRMaXN0LmFwcGVuZENoaWxkKG1pZGRsZUl0ZW00KTtcclxuICAgIHBhcmVudExpc3QuYXBwZW5kQ2hpbGQobWlkZGxlSXRlbTUpO1xyXG5cclxuICAgIC8vYWRkIHR3byBsYXN0IGgycyB0byBtaWRkbGUgZmxvYXRpZVxyXG4gICAgY29uc3QgbWlkZGxlQnJlYWtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtaWRkbGVCcmVha1RpdGxlLmlubmVySFRNTCA9ICdDYXRjaCBhIGJyZWFrPGJyLz5vciB3b3JrIGluIGhhcm1vbnknO1xyXG4gICAgbWlkZGxlRmxvYXRpZS5hcHBlbmRDaGlsZChtaWRkbGVCcmVha1RpdGxlKTtcclxuICAgIGNvbnN0IG1pZGRsZUNob2ljZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1pZGRsZUNob2ljZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZXRleHQnKTtcclxuICAgIG1pZGRsZUNob2ljZVRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBjaG9pY2UgaXMgeW91cnMsIHJlYWxseSc7XHJcbiAgICBtaWRkbGVGbG9hdGllLmFwcGVuZENoaWxkKG1pZGRsZUNob2ljZVRpdGxlKTtcclxuXHJcbiAgICAvL3NldCB1cCByaWdodCBmbG9hdGllXHJcbiAgICBjb25zdCByaWdodFNpZGVGbG9hdGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllLmNsYXNzTGlzdC5hZGQoJ3NpZGVmbG9hdGllJyk7XHJcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChyaWdodFNpZGVGbG9hdGllKTtcclxuICAgIGNvbnN0IHJpZ2h0U2lkZUZsb2F0aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICByaWdodFNpZGVGbG9hdGllVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2lkZUZsb2F0aWVUaXRsZScpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZVRpdGxlLnRleHRDb250ZW50ID0gJ0Jlc3QgT2ZmZXJzJztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRmxvYXRpZVRpdGxlKTtcclxuXHJcbiAgICAvL3NldCB1cCBvZmZlcnNncmlkXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkLmlkID0gJ29mZmVyc2dyaWQnO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZS5hcHBlbmRDaGlsZChvZmZlcnNHcmlkKTtcclxuXHJcbiAgICAvL3NldCB1cCBvZmZlcnNncmlkIGVsZW1lbnRzXHJcbiAgICAvL2VsZW1lbnQgMVxyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDEuY2xhc3NMaXN0LmFkZCgnb2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWQuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQxKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50MVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxVGl0bGUuaW5uZXJIVE1MID0gJ0Nvcm5lcjxicj5TcGVjaWFsJztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MS5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDFUaXRsZSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MVByaWNlLnRleHRDb250ZW50ID0gJzIsMDDigqwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQxLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MVByaWNlKTtcclxuICAgIC8vZWxlbWVudCAyXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdvZmZlcnNHcmlkRWxlbWVudCcpO1xyXG4gICAgb2ZmZXJzR3JpZC5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDIpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDJUaXRsZS5pbm5lckhUTUwgPSAnS29sZDxicj5CcmV3JztcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50Mi5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDJUaXRsZSk7XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50MlByaWNlLnRleHRDb250ZW50ID0gJzMsNTDigqwnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQyLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50MlByaWNlKTtcclxuICAgIC8vZWxlbWVudCAzXHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50My5jbGFzc0xpc3QuYWRkKCdvZmZlcnNHcmlkRWxlbWVudCcpO1xyXG4gICAgb2ZmZXJzR3JpZC5hcHBlbmRDaGlsZChvZmZlcnNHcmlkRWxlbWVudDMpO1xyXG4gICAgY29uc3Qgb2ZmZXJzR3JpZEVsZW1lbnQzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDNUaXRsZS5pbm5lckhUTUwgPSAnS2xhc3NpYzxicj5Lb2ZmZWUnO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzLmFwcGVuZENoaWxkKG9mZmVyc0dyaWRFbGVtZW50M1RpdGxlKTtcclxuICAgIGNvbnN0IG9mZmVyc0dyaWRFbGVtZW50M1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgb2ZmZXJzR3JpZEVsZW1lbnQzUHJpY2UudGV4dENvbnRlbnQgPSAnMSw1MOKCrCc7XHJcbiAgICBvZmZlcnNHcmlkRWxlbWVudDMuYXBwZW5kQ2hpbGQob2ZmZXJzR3JpZEVsZW1lbnQzUHJpY2UpO1xyXG4gICAgXHJcbiAgICAvL3JpZ2h0c2lkZWZsb2F0aWVidXR0b25cclxuICAgIGNvbnN0IHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmxvYXRpZWJ1dHRvbicpO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbi5pZCA9ICdyaWdodEZsb2F0aWVCdXR0b24nO1xyXG4gICAgcmlnaHRTaWRlRmxvYXRpZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWUuYXBwZW5kQ2hpbGQocmlnaHRTaWRlRmxvYXRpZUJ1dHRvbik7XHJcblxyXG4gICAgLy9hZGQgY2xpY2thYmlsaXR5XHJcbiAgICBjb25zdCBvZmZlcnNHcmlkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub2ZmZXJzR3JpZEVsZW1lbnQnKTtcclxuICAgIG9mZmVyc0dyaWRFbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbG9hZE5leHRQYWdlKCdtZW51Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJpZ2h0U2lkZUZsb2F0aWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZE5leHRQYWdlKCdtZW51Jyk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZXBhZ2U7IiwiY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcclxuICAgIC8vYmFzaWMgZ3JpZCBzZXR1cFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUdyaWQuaWQgPSAnbWVudWdyaWQnO1xyXG4gICAgY29uc3QgbWVudVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VGl0bGVEaXYuaWQgPSAnbWVudVRpdGxlRGl2JztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUdyaWQpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudVRpdGxlRGl2KTtcclxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBtZW51VGl0bGUuaWQgPSBcIm1lbnVUaXRsZVwiXHJcbiAgICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnVGFrZSBhIGdhbmRlciBhbmQgZm9sbG93IHlvdXIgaGVhcnQuLi4nXHJcbiAgICBtZW51VGl0bGVEaXYuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuXHJcbiAgICAvL3NldCB1cCBmaXJzdCBpdGVtXHJcbiAgICBjb25zdCBpdGVtT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtT25lLmNsYXNzTGlzdC5hZGQoJ21lbnVFbGVtZW50Jyk7XHJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChpdGVtT25lKTtcclxuICAgIGNvbnN0IGl0ZW1PbmVCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbU9uZUJnLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtQmFja2dyb3VuZCcpO1xyXG4gICAgaXRlbU9uZS5hcHBlbmRDaGlsZChpdGVtT25lQmcpO1xyXG4gICAgY29uc3QgaXRlbU9uZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaXRlbU9uZU5hbWUuaW5uZXJIVE1MID0gJ0Nvcm5lciA8YnI+IFNwZWNpYWwnO1xyXG4gICAgaXRlbU9uZU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1OYW1lJyk7XHJcbiAgICBpdGVtT25lQmcuYXBwZW5kQ2hpbGQoaXRlbU9uZU5hbWUpO1xyXG4gICAgY29uc3QgZGl2aWRpbmdMaW5lT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdmlkaW5nTGluZU9uZS5jbGFzc0xpc3QuYWRkKCdtZW51RGl2aWRpbmdMaW5lJylcclxuICAgIGl0ZW1PbmVCZy5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmVPbmUpXHJcbiAgICBjb25zdCBpdGVtT25lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtT25lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29uc2VjdGV0dXIgZXQgaW4gZG9sb3JlIGV4Y2VwdGV1ciB2b2x1cHRhdGUgZWEgbGFib3JlIGVzdCBwYXJpYXR1ciBtb2xsaXQgZWEgb2ZmaWNpYS4gVmVuaWFtIGN1cGlkYXRhdCBwYXJpYXR1ciBhdXRlIGVzdC4gRXN0IGF1dGUgZG8gbnVsbGEgdWxsYW1jbyBpcnVyZSBlYSBkZXNlcnVudC4gRXN0IHNpdCBleGVyY2l0YXRpb24gZG9sb3JlIGV4ZXJjaXRhdGlvbiBvZmZpY2lhIGRvbG9yZSBpcnVyZSBhZCBwcm9pZGVudCBsYWJvcnVtIExvcmVtIGVpdXNtb2QgZG9sb3JlIGNvbW1vZG8uJ1xyXG4gICAgaXRlbU9uZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtRGVzY3JpcHRpb24nKTtcclxuICAgIGl0ZW1PbmVCZy5hcHBlbmRDaGlsZChpdGVtT25lRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaXRlbU9uZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbU9uZVByaWNlLnRleHRDb250ZW50ID0gJzIsMDDigqwnO1xyXG4gICAgaXRlbU9uZVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtUHJpY2UnKTtcclxuICAgIGl0ZW1PbmVCZy5hcHBlbmRDaGlsZChpdGVtT25lUHJpY2UpXHJcblxyXG4gICAgLy9zZXQgdXAgc2Vjb25kIGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Ud28uY2xhc3NMaXN0LmFkZCgnbWVudUVsZW1lbnQnKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGl0ZW1Ud28pO1xyXG4gICAgY29uc3QgaXRlbVR3b0JnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtVHdvQmcuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1CYWNrZ3JvdW5kJyk7XHJcbiAgICBpdGVtVHdvLmFwcGVuZENoaWxkKGl0ZW1Ud29CZyk7XHJcbiAgICBjb25zdCBpdGVtVHdvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBpdGVtVHdvTmFtZS5pbm5lckhUTUwgPSAnS29sZCA8YnI+IEJyZXcnO1xyXG4gICAgaXRlbVR3b05hbWUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1OYW1lJyk7XHJcbiAgICBpdGVtVHdvQmcuYXBwZW5kQ2hpbGQoaXRlbVR3b05hbWUpO1xyXG4gICAgY29uc3QgZGl2aWRpbmdMaW5lVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdmlkaW5nTGluZVR3by5jbGFzc0xpc3QuYWRkKCdtZW51RGl2aWRpbmdMaW5lJylcclxuICAgIGl0ZW1Ud29CZy5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmVUd28pXHJcbiAgICBjb25zdCBpdGVtVHdvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtVHdvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29uc2VjdGV0dXIgZXQgaW4gZG9sb3JlIGV4Y2VwdGV1ciB2b2x1cHRhdGUgZWEgbGFib3JlIGVzdCBwYXJpYXR1ciBtb2xsaXQgZWEgb2ZmaWNpYS4gVmVuaWFtIGN1cGlkYXRhdCBwYXJpYXR1ciBhdXRlIGVzdC4gRXN0IGF1dGUgZG8gbnVsbGEgdWxsYW1jbyBpcnVyZSBlYSBkZXNlcnVudC4gRXN0IHNpdCBleGVyY2l0YXRpb24gZG9sb3JlIGV4ZXJjaXRhdGlvbiBvZmZpY2lhIGRvbG9yZSBpcnVyZSBhZCBwcm9pZGVudCBsYWJvcnVtIExvcmVtIGVpdXNtb2QgZG9sb3JlIGNvbW1vZG8uJ1xyXG4gICAgaXRlbVR3b0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtRGVzY3JpcHRpb24nKTtcclxuICAgIGl0ZW1Ud29CZy5hcHBlbmRDaGlsZChpdGVtVHdvRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaXRlbVR3b1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVR3b1ByaWNlLnRleHRDb250ZW50ID0gJzMsNTDigqwnO1xyXG4gICAgaXRlbVR3b1ByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtUHJpY2UnKTtcclxuICAgIGl0ZW1Ud29CZy5hcHBlbmRDaGlsZChpdGVtVHdvUHJpY2UpXHJcblxyXG4gICAgLy90aGlyZCBpdGVtXHJcbiAgICBjb25zdCBpdGVtVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1UaHJlZS5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbVRocmVlKTtcclxuICAgIGNvbnN0IGl0ZW1UaHJlZUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtVGhyZWVCZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1UaHJlZS5hcHBlbmRDaGlsZChpdGVtVGhyZWVCZyk7XHJcbiAgICBjb25zdCBpdGVtVGhyZWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGl0ZW1UaHJlZU5hbWUuaW5uZXJIVE1MID0gJ0tsYXNzaWMgPGJyPiBLb2ZmZWUnO1xyXG4gICAgaXRlbVRocmVlTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbU5hbWUnKTtcclxuICAgIGl0ZW1UaHJlZUJnLmFwcGVuZENoaWxkKGl0ZW1UaHJlZU5hbWUpO1xyXG4gICAgY29uc3QgZGl2aWRpbmdMaW5lVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2aWRpbmdMaW5lVGhyZWUuY2xhc3NMaXN0LmFkZCgnbWVudURpdmlkaW5nTGluZScpXHJcbiAgICBpdGVtVGhyZWVCZy5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmVUaHJlZSlcclxuICAgIGNvbnN0IGl0ZW1UaHJlZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVRocmVlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29uc2VjdGV0dXIgZXQgaW4gZG9sb3JlIGV4Y2VwdGV1ciB2b2x1cHRhdGUgZWEgbGFib3JlIGVzdCBwYXJpYXR1ciBtb2xsaXQgZWEgb2ZmaWNpYS4gVmVuaWFtIGN1cGlkYXRhdCBwYXJpYXR1ciBhdXRlIGVzdC4gRXN0IGF1dGUgZG8gbnVsbGEgdWxsYW1jbyBpcnVyZSBlYSBkZXNlcnVudC4gRXN0IHNpdCBleGVyY2l0YXRpb24gZG9sb3JlIGV4ZXJjaXRhdGlvbiBvZmZpY2lhIGRvbG9yZSBpcnVyZSBhZCBwcm9pZGVudCBsYWJvcnVtIExvcmVtIGVpdXNtb2QgZG9sb3JlIGNvbW1vZG8uJ1xyXG4gICAgaXRlbVRocmVlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1EZXNjcmlwdGlvbicpO1xyXG4gICAgaXRlbVRocmVlQmcuYXBwZW5kQ2hpbGQoaXRlbVRocmVlRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaXRlbVRocmVlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtVGhyZWVQcmljZS50ZXh0Q29udGVudCA9ICcxLDUw4oKsJztcclxuICAgIGl0ZW1UaHJlZVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtUHJpY2UnKTtcclxuICAgIGl0ZW1UaHJlZUJnLmFwcGVuZENoaWxkKGl0ZW1UaHJlZVByaWNlKVxyXG5cclxuICAgIC8vZm91cnRoIGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1Gb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtRm91ci5jbGFzc0xpc3QuYWRkKCdtZW51RWxlbWVudCcpO1xyXG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQoaXRlbUZvdXIpO1xyXG4gICAgY29uc3QgaXRlbUZvdXJCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUZvdXJCZy5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbUJhY2tncm91bmQnKTtcclxuICAgIGl0ZW1Gb3VyLmFwcGVuZENoaWxkKGl0ZW1Gb3VyQmcpO1xyXG4gICAgY29uc3QgaXRlbUZvdXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGl0ZW1Gb3VyTmFtZS5pbm5lckhUTUwgPSAnQ29ybmVyIDxicj4gS2FwcHVjY2lubyc7XHJcbiAgICBpdGVtRm91ck5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1OYW1lJyk7XHJcbiAgICBpdGVtRm91ckJnLmFwcGVuZENoaWxkKGl0ZW1Gb3VyTmFtZSk7XHJcbiAgICBjb25zdCBkaXZpZGluZ0xpbmVGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdmlkaW5nTGluZUZvdXIuY2xhc3NMaXN0LmFkZCgnbWVudURpdmlkaW5nTGluZScpXHJcbiAgICBpdGVtRm91ckJnLmFwcGVuZENoaWxkKGRpdmlkaW5nTGluZUZvdXIpXHJcbiAgICBjb25zdCBpdGVtRm91ckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbUZvdXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDb25zZWN0ZXR1ciBldCBpbiBkb2xvcmUgZXhjZXB0ZXVyIHZvbHVwdGF0ZSBlYSBsYWJvcmUgZXN0IHBhcmlhdHVyIG1vbGxpdCBlYSBvZmZpY2lhLiBWZW5pYW0gY3VwaWRhdGF0IHBhcmlhdHVyIGF1dGUgZXN0LiBFc3QgYXV0ZSBkbyBudWxsYSB1bGxhbWNvIGlydXJlIGVhIGRlc2VydW50LiBFc3Qgc2l0IGV4ZXJjaXRhdGlvbiBkb2xvcmUgZXhlcmNpdGF0aW9uIG9mZmljaWEgZG9sb3JlIGlydXJlIGFkIHByb2lkZW50IGxhYm9ydW0gTG9yZW0gZWl1c21vZCBkb2xvcmUgY29tbW9kby4nXHJcbiAgICBpdGVtRm91ckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtRGVzY3JpcHRpb24nKTtcclxuICAgIGl0ZW1Gb3VyQmcuYXBwZW5kQ2hpbGQoaXRlbUZvdXJEZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBpdGVtRm91clByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbUZvdXJQcmljZS50ZXh0Q29udGVudCA9ICcxLDc14oKsJztcclxuICAgIGl0ZW1Gb3VyUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1QcmljZScpO1xyXG4gICAgaXRlbUZvdXJCZy5hcHBlbmRDaGlsZChpdGVtRm91clByaWNlKVxyXG5cclxuICAgIC8vZmlmdGggaXRlbVxyXG4gICAgY29uc3QgaXRlbUZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1GaXZlLmNsYXNzTGlzdC5hZGQoJ21lbnVFbGVtZW50Jyk7XHJcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChpdGVtRml2ZSk7XHJcbiAgICBjb25zdCBpdGVtRml2ZUJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtRml2ZUJnLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtQmFja2dyb3VuZCcpO1xyXG4gICAgaXRlbUZpdmUuYXBwZW5kQ2hpbGQoaXRlbUZpdmVCZyk7XHJcbiAgICBjb25zdCBpdGVtRml2ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaXRlbUZpdmVOYW1lLmlubmVySFRNTCA9ICdDb3JuZXIgPGJyPiBBbWVyaWthbm8nO1xyXG4gICAgaXRlbUZpdmVOYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtTmFtZScpO1xyXG4gICAgaXRlbUZpdmVCZy5hcHBlbmRDaGlsZChpdGVtRml2ZU5hbWUpO1xyXG4gICAgY29uc3QgZGl2aWRpbmdMaW5lRml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXZpZGluZ0xpbmVGaXZlLmNsYXNzTGlzdC5hZGQoJ21lbnVEaXZpZGluZ0xpbmUnKVxyXG4gICAgaXRlbUZpdmVCZy5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmVGaXZlKVxyXG4gICAgY29uc3QgaXRlbUZpdmVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1GaXZlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnQ29uc2VjdGV0dXIgZXQgaW4gZG9sb3JlIGV4Y2VwdGV1ciB2b2x1cHRhdGUgZWEgbGFib3JlIGVzdCBwYXJpYXR1ciBtb2xsaXQgZWEgb2ZmaWNpYS4gVmVuaWFtIGN1cGlkYXRhdCBwYXJpYXR1ciBhdXRlIGVzdC4gRXN0IGF1dGUgZG8gbnVsbGEgdWxsYW1jbyBpcnVyZSBlYSBkZXNlcnVudC4gRXN0IHNpdCBleGVyY2l0YXRpb24gZG9sb3JlIGV4ZXJjaXRhdGlvbiBvZmZpY2lhIGRvbG9yZSBpcnVyZSBhZCBwcm9pZGVudCBsYWJvcnVtIExvcmVtIGVpdXNtb2QgZG9sb3JlIGNvbW1vZG8uJ1xyXG4gICAgaXRlbUZpdmVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbURlc2NyaXB0aW9uJyk7XHJcbiAgICBpdGVtRml2ZUJnLmFwcGVuZENoaWxkKGl0ZW1GaXZlRGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgaXRlbUZpdmVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1GaXZlUHJpY2UudGV4dENvbnRlbnQgPSAnMiwwMOKCrCc7XHJcbiAgICBpdGVtRml2ZVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtUHJpY2UnKTtcclxuICAgIGl0ZW1GaXZlQmcuYXBwZW5kQ2hpbGQoaXRlbUZpdmVQcmljZSlcclxuXHJcbiAgICAvL3NpeHRoIGl0ZW1cclxuICAgIGNvbnN0IGl0ZW1TaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1TaXguY2xhc3NMaXN0LmFkZCgnbWVudUVsZW1lbnQnKTtcclxuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKGl0ZW1TaXgpO1xyXG4gICAgY29uc3QgaXRlbVNpeEJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtU2l4QmcuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1CYWNrZ3JvdW5kJyk7XHJcbiAgICBpdGVtU2l4LmFwcGVuZENoaWxkKGl0ZW1TaXhCZyk7XHJcbiAgICBjb25zdCBpdGVtU2l4TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBpdGVtU2l4TmFtZS5pbm5lckhUTUwgPSAnVHVya2lzaCA8YnI+IEtvZmZlZSc7XHJcbiAgICBpdGVtU2l4TmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbU5hbWUnKTtcclxuICAgIGl0ZW1TaXhCZy5hcHBlbmRDaGlsZChpdGVtU2l4TmFtZSk7XHJcbiAgICBjb25zdCBkaXZpZGluZ0xpbmVTaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2aWRpbmdMaW5lU2l4LmNsYXNzTGlzdC5hZGQoJ21lbnVEaXZpZGluZ0xpbmUnKVxyXG4gICAgaXRlbVNpeEJnLmFwcGVuZENoaWxkKGRpdmlkaW5nTGluZVNpeClcclxuICAgIGNvbnN0IGl0ZW1TaXhEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1TaXhEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDb25zZWN0ZXR1ciBldCBpbiBkb2xvcmUgZXhjZXB0ZXVyIHZvbHVwdGF0ZSBlYSBsYWJvcmUgZXN0IHBhcmlhdHVyIG1vbGxpdCBlYSBvZmZpY2lhLiBWZW5pYW0gY3VwaWRhdGF0IHBhcmlhdHVyIGF1dGUgZXN0LiBFc3QgYXV0ZSBkbyBudWxsYSB1bGxhbWNvIGlydXJlIGVhIGRlc2VydW50LiBFc3Qgc2l0IGV4ZXJjaXRhdGlvbiBkb2xvcmUgZXhlcmNpdGF0aW9uIG9mZmljaWEgZG9sb3JlIGlydXJlIGFkIHByb2lkZW50IGxhYm9ydW0gTG9yZW0gZWl1c21vZCBkb2xvcmUgY29tbW9kby4nXHJcbiAgICBpdGVtU2l4RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1EZXNjcmlwdGlvbicpO1xyXG4gICAgaXRlbVNpeEJnLmFwcGVuZENoaWxkKGl0ZW1TaXhEZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBpdGVtU2l4UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtU2l4UHJpY2UudGV4dENvbnRlbnQgPSAnMiw1MOKCrCc7XHJcbiAgICBpdGVtU2l4UHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1QcmljZScpO1xyXG4gICAgaXRlbVNpeEJnLmFwcGVuZENoaWxkKGl0ZW1TaXhQcmljZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbG9hZE5leHRQYWdlLCBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9hZFBhZ2VcIjtcclxuaW1wb3J0IHdpZmlTdmcgZnJvbSBcIi4vcmVzb3VyY2VzL3dpZmkuc3ZnXCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0hpIGltIGFsaXZlJyk7XHJcblxyXG5pbml0aWFsTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==