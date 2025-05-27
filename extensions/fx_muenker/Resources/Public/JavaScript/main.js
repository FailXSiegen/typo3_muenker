/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/analytics.js":
/*!*************************************!*\
  !*** ./src/js/modules/analytics.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAnalytics: () => (/* binding */ initAnalytics)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// modules/analytics.js
var Gaanon = /*#__PURE__*/function () {
  function Gaanon() {
    _classCallCheck(this, Gaanon);
    this.switcher = new GaanonSwitcher();
  }
  return _createClass(Gaanon, null, [{
    key: "getCookie",
    value: function getCookie(cookieName) {
      var cookies = document.cookie.split(';');
      var _iterator = _createForOfIteratorHelper(cookies),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cookie = _step.value;
          var _cookie$split$map = cookie.split('=').map(function (c) {
              return c.trim();
            }),
            _cookie$split$map2 = _slicedToArray(_cookie$split$map, 2),
            name = _cookie$split$map2[0],
            value = _cookie$split$map2[1];
          if (name === cookieName) return value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return undefined;
    }
  }, {
    key: "setCookie",
    value: function setCookie(options) {
      if (!options.name || !options.value) return false;
      var str = "".concat(options.name, "=").concat(options.value);
      if (options.expires) {
        str += ";expires=".concat(options.expires.toGMTString());
      } else {
        str += ';expires=30';
      }
      str += ';path=/';
      document.cookie = str;
      return true;
    }
  }]);
}();
var GaanonSwitcher = /*#__PURE__*/function () {
  function GaanonSwitcher() {
    _classCallCheck(this, GaanonSwitcher);
    this.cookieVariable = 'GA_ANON_SWITCHER';
    this.cookieExpire = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
  }
  return _createClass(GaanonSwitcher, [{
    key: "isActive",
    value: function isActive() {
      var c = Gaanon.getCookie(this.cookieVariable);
      return c === '1' || c === undefined;
    }
  }, {
    key: "activate",
    value: function activate() {
      Gaanon.setCookie({
        name: this.cookieVariable,
        value: '1',
        expires: this.cookieExpire
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      Gaanon.setCookie({
        name: this.cookieVariable,
        value: '0',
        expires: this.cookieExpire
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isActive() ? this.deactivate() : this.activate();
    }
  }, {
    key: "checkStatus",
    value: function checkStatus(box) {
      box.checked = this.isActive();
    }
  }]);
}(); // Polyfill for String.prototype.trim
if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
function initAnalytics() {
  var gaanonym = new Gaanon();
  // Hier können Sie weitere Initialisierungen oder Verwendungen von gaanonym hinzufügen
  return gaanonym;
}

/***/ }),

/***/ "./src/js/modules/maps.js":
/*!********************************!*\
  !*** ./src/js/modules/maps.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMaps: () => (/* binding */ initMaps)
/* harmony export */ });
// src/js/modules/maps.js

function initMaps() {
  // Wir führen die Initialisierung nur aus, wenn das Google Maps Skript geladen ist
  if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
    console.warn('Google Maps API is not loaded');
    return;
  }
  var mapStyles = {
    'Dark': [{
      featureType: 'all',
      elementType: 'all',
      stylers: [{
        hue: '#0008ff'
      }, {
        saturation: -100
      }, {
        gamma: 1.05
      }]
    }, {
      featureType: 'all',
      elementType: 'all',
      stylers: []
    }]
  };
  var mapOptions = {
    mapTypeControlOptions: {
      mapTypeIds: ['Dark']
    },
    disableDefaultUI: true,
    navigationControl: false,
    center: {
      lat: 50.980047,
      lng: 7.654037
    },
    zoom: 12,
    mapTypeId: 'Dark',
    scrollwheel: false,
    disableDoubleClickZoom: true
  };
  var mapElement = document.getElementById('googlemap');
  if (!mapElement) {
    console.warn('Map container not found');
    return;
  }
  var map = new google.maps.Map(mapElement, mapOptions);
  var markerPosition = {
    lat: 50.96871,
    lng: 7.6587
  };
  var markerImage = 'fileadmin/bilder/muenker.com/muenker-bulleye.png';
  var contentString = "\n      <div id=\"content\">\n        <h1 style=\"font-size:16px;margin:0;\">M\xDCNKER METALLPROFILE GMBH</h1>\n        <div id=\"bodyContent\">\n          <p style=\"margin:0;\">\n            Gewerbeparkstrasse 19<br />\n            51580 Reichshof-Wehnrath<br />\n            Tel.: +49 2265 - 9986 - 0<br />\n            Fax: +49 2265 - 9986 - 800<br />\n            eMail: <a href=\"mailto:info@muenker.com\">info@muenker.com</a>\n          </p>\n        </div>\n      </div>\n    ";
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    position: markerPosition,
    icon: markerImage
  });
  var styledMapType = new google.maps.StyledMapType(mapStyles['Dark'], {
    name: 'Dark'
  });
  map.mapTypes.set('Dark', styledMapType);
  infowindow.open(map, marker);
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}

/***/ }),

/***/ "./src/js/modules/navigation.js":
/*!**************************************!*\
  !*** ./src/js/modules/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAnchorNavigation: () => (/* binding */ initAnchorNavigation)
/* harmony export */ });
// src/js/modules/navigation.js
function initAnchorNavigation() {
  var header = document.querySelector('header.header');
  var headerHeight = header.offsetHeight;
  document.querySelectorAll('a[href^="#"]:not([data-fancybox]):not(.fancybox):not(.lightbox)').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').slice(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var scrollTo = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
        header.classList.add('small');
      }
    });
  });
  document.querySelectorAll('h2[id]').forEach(function (heading) {
    heading.style.scrollMarginTop = "".concat(headerHeight + 20, "px");
  });
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
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation */ "./src/js/modules/navigation.js");
/* harmony import */ var _modules_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/maps */ "./src/js/modules/maps.js");
/* harmony import */ var _modules_analytics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/analytics.js */ "./src/js/modules/analytics.js");



document.addEventListener('DOMContentLoaded', function () {
  var _document$querySelect, _document$getElementB, _document$querySelect2;
  (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_0__.initAnchorNavigation)();
  (0,_modules_maps__WEBPACK_IMPORTED_MODULE_1__.initMaps)();
  (0,_modules_analytics_js__WEBPACK_IMPORTED_MODULE_2__.initAnalytics)();

  // Back button
  (_document$querySelect = document.querySelector('.button_back')) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
  });

  // Search input placeholder
  (_document$getElementB = document.getElementById('inputText')) === null || _document$getElementB === void 0 || _document$getElementB.setAttribute('placeholder', 'Suche');

  // Print button
  (_document$querySelect2 = document.querySelector('.print')) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener('click', function (e) {
    e.preventDefault();
    window.print();
  });

  // Submenu toggle
  document.querySelectorAll('.withsub').forEach(function (element) {
    element.addEventListener('click', function () {
      this.classList.toggle('fa-caret-down');
      this.classList.toggle('fa-caret-up');
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('open');
    });
  });
});

// Header Scroll Effekt
window.addEventListener('scroll', function () {
  var header = document.querySelector('header.header');
  if (window.pageYOffset > 0) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
});
})();

/******/ })()
;