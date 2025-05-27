/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFormHandling: () => (/* binding */ initFormHandling)
/* harmony export */ });
function initFormHandling() {
  function addThicknessToForm(element) {
    var select = document.getElementById('powermail_field_dicke');
    select.innerHTML = '';
    if (element.dataset.thickness) {
      var strengthList = element.dataset.thickness.split('|');
      strengthList.forEach(function (value) {
        var option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
    } else {
      var _strengthList = Array.from(document.querySelectorAll('.produktbox li')).filter(function (li) {
        return li.textContent.endsWith('mm') && li.textContent.length < 9;
      }).map(function (li) {
        return li.textContent;
      });
      _strengthList.forEach(function (value) {
        var option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
    }
  }
  var anfrageContainer = document.querySelector('.anfrage-container');
  if (anfrageContainer) {
    // Prüfe ob es sich um die Sandwich-Kategorie handelt
    var isSandwichPage = document.querySelector('.breadcrumb li a[title="Sandwichpaneel"]') !== null || document.querySelector('h2:contains("Sandwich")') !== null || document.querySelector('h1:contains("Sandwich")') !== null;

    // CO2-reduzierter Stahl Feld behandeln
    var co2Field = document.querySelector('.powermail_fieldwrap_co2reduzierterstahl');
    if (co2Field && isSandwichPage) {
      co2Field.style.display = 'none';
    }
    var farbauswahl = document.getElementById('powermail_field_farbauswahl');
    var farbauswahlWrapper = document.querySelector('.powermail_fieldwrap_ihrefarbauswahl');
    var firstColor = document.getElementById('article_id_0');
    if (firstColor) {
      farbauswahl.value = 'Farbe:' + firstColor.textContent;
      farbauswahlWrapper.innerHTML = "<span class=\"color-box\" style=\"".concat(firstColor.getAttribute('style'), "\"></span> Farbe:").concat(firstColor.textContent);
    }
    document.querySelectorAll('.colors li').forEach(function (colorElement) {
      colorElement.addEventListener('click', function () {
        var styling = this.getAttribute('style');
        farbauswahl.value = 'Farbe:' + this.textContent;
        farbauswahlWrapper.innerHTML = "<span class=\"color-box\" style=\"".concat(styling, "\"></span> Farbe:").concat(this.textContent);
        addThicknessToForm(this);
      });
    });
    var firstColorLi = document.querySelector('.colors li:first-child');
    if (firstColorLi) {
      addThicknessToForm(firstColorLi);
    }
  }
}

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.initFormHandling)();
});
})();

/******/ })()
;