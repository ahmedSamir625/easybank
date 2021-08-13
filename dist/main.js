/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/articleCard.js":
/*!******************************************!*\
  !*** ./src/js/components/articleCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleCard": () => (/* binding */ ArticleCard)
/* harmony export */ });
var ArticleCard = function ArticleCard(_ref) {
  var img = _ref.img,
      by = _ref.by,
      header = _ref.header,
      body = _ref.body;
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "article-card");
  cardDiv.innerHTML = "   \n    <img\n    src=\"".concat(img, "\"\n    class=\"card-img-top\"\n    alt=\"...\"\n  />\n  <div class=\"card-body\">\n    <h6>By ").concat(by, "</h6>\n    <h5 class=\"card-title\">").concat(header, "</h5>\n    <p class=\"card-text\">\n     ").concat(body, "\n    </p>\n  </div>\n            ");
  return cardDiv;
};

/***/ }),

/***/ "./src/js/components/whyChooseCard.js":
/*!********************************************!*\
  !*** ./src/js/components/whyChooseCard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhyChooseCard": () => (/* binding */ WhyChooseCard)
/* harmony export */ });
var WhyChooseCard = function WhyChooseCard(_ref) {
  var img = _ref.img,
      header = _ref.header,
      body = _ref.body;
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("why-choose-card", "d-flex", "flex-column", "align-items-center", "align-items-lg-start");
  cardDiv.innerHTML = "   \n    <img class=\"pb-4\" src=\"".concat(img, "\" alt=\"\">\n    <h1 class=\"feature\">").concat(header, "</h1>\n    <p>\n     ").concat(body, "\n    </p>\n          ");
  return cardDiv;
};

/***/ }),

/***/ "./src/js/util/articlesData.js":
/*!*************************************!*\
  !*** ./src/js/util/articlesData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articlesData": () => (/* binding */ articlesData)
/* harmony export */ });
var articlesData = [{
  img: "/src/assets/images/image-currency.jpg",
  by: "AbdulMawla Ahmed",
  header: "Receive money in any currency with no fees",
  body: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single.."
}, {
  img: "/src/assets/images/image-restaurant.jpg",
  by: "Ghaith AbdulMawla",
  header: "Treat yourself without worring about money",
  body: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
}, {
  img: "/src/assets/images/image-plane.jpg",
  by: "Willson Hutton",
  header: "Take your Easybank card wherever you go",
  body: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you .."
}, {
  img: "/src/assets/images/image-confetti.jpg",
  by: "AbdulRazaq Aldodhi",
  header: "Our invite-only Beta accounts are now live!",
  body: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
}];

/***/ }),

/***/ "./src/js/util/whyChooseData.js":
/*!**************************************!*\
  !*** ./src/js/util/whyChooseData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whyChooseData": () => (/* binding */ whyChooseData)
/* harmony export */ });
var whyChooseData = [{
  img: "/src/assets/icons/icon-online.svg",
  header: "Online Banking",
  body: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
}, {
  img: "/src/assets/icons/icon-budgeting.svg",
  header: "Simple Budgeting",
  body: "See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits."
}, {
  img: "/src/assets/icons/icon-onboarding.svg",
  header: "Fast Onboarding",
  body: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
}, {
  img: "/src/assets/icons/icon-api.svg",
  header: "Open API",
  body: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
}];

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _js_util_whyChooseData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/util/whyChooseData.js */ "./src/js/util/whyChooseData.js");
/* harmony import */ var _js_components_whyChooseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/whyChooseCard */ "./src/js/components/whyChooseCard.js");
/* harmony import */ var _js_util_articlesData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/util/articlesData.js */ "./src/js/util/articlesData.js");
/* harmony import */ var _js_components_articleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/articleCard */ "./src/js/components/articleCard.js");
// import "regenerator-runtime/runtime.js";






var displayWhyChooseCards = function displayWhyChooseCards() {
  var cardsContainer = document.querySelector("#why-choose-container");
  _js_util_whyChooseData_js__WEBPACK_IMPORTED_MODULE_1__.whyChooseData.forEach(function (data) {
    var card = (0,_js_components_whyChooseCard__WEBPACK_IMPORTED_MODULE_2__.WhyChooseCard)(data);
    cardsContainer.appendChild(card);
  });
};

var displayArticlesCards = function displayArticlesCards() {
  var cardsContainer = document.querySelector("#articles-container");
  _js_util_articlesData_js__WEBPACK_IMPORTED_MODULE_3__.articlesData.forEach(function (data) {
    var card = (0,_js_components_articleCard__WEBPACK_IMPORTED_MODULE_4__.ArticleCard)(data);
    cardsContainer.appendChild(card);
  });
};

var displayPageContent = function displayPageContent() {
  displayWhyChooseCards();
  displayArticlesCards();
};

displayPageContent();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map