(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}var l=function(){return i((function e(){o(this,e),this.switcher=new c}),null,[{key:"getCookie",value:function(e){var n,o,r,i=function(e){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(document.cookie.split(";"));try{for(i.s();!(n=i.n()).done;){var a=(o=n.value.split("=").map((function(e){return e.trim()})),r=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return l}}(o,r)||t(o,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],c=a[1];if(l===e)return c}}catch(e){i.e(e)}finally{i.f()}}},{key:"setCookie",value:function(e){if(!e.name||!e.value)return!1;var t="".concat(e.name,"=").concat(e.value);return e.expires?t+=";expires=".concat(e.expires.toGMTString()):t+=";expires=30",t+=";path=/",document.cookie=t,!0}}])}(),c=function(){return i((function e(){o(this,e),this.cookieVariable="GA_ANON_SWITCHER",this.cookieExpire=new Date((new Date).getTime()+31536e6)}),[{key:"isActive",value:function(){var e=l.getCookie(this.cookieVariable);return"1"===e||void 0===e}},{key:"activate",value:function(){l.setCookie({name:this.cookieVariable,value:"1",expires:this.cookieExpire})}},{key:"deactivate",value:function(){l.setCookie({name:this.cookieVariable,value:"0",expires:this.cookieExpire})}},{key:"toggle",value:function(){this.isActive()?this.deactivate():this.activate()}},{key:"checkStatus",value:function(e){e.checked=this.isActive()}}])}();"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),document.addEventListener("DOMContentLoaded",(function(){var e,t,n,o,r;o=document.querySelector("header.header"),r=o.offsetHeight,document.querySelectorAll('a[href^="#"]:not([data-fancybox]):not(.fancybox):not(.lightbox)').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").slice(1),n=document.getElementById(t);if(n){var i=n.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:i,behavior:"smooth"}),o.classList.add("small")}}))})),document.querySelectorAll("h2[id]").forEach((function(e){e.style.scrollMarginTop="".concat(r+20,"px")})),function(){if("undefined"!=typeof google&&void 0!==google.maps){var e=document.getElementById("googlemap");if(e){var t=new google.maps.Map(e,{mapTypeControlOptions:{mapTypeIds:["Dark"]},disableDefaultUI:!0,navigationControl:!1,center:{lat:50.980047,lng:7.654037},zoom:12,mapTypeId:"Dark",scrollwheel:!1,disableDoubleClickZoom:!0}),n=new google.maps.InfoWindow({content:'\n      <div id="content">\n        <h1 style="font-size:16px;margin:0;">MÜNKER METALLPROFILE GMBH</h1>\n        <div id="bodyContent">\n          <p style="margin:0;">\n            Gewerbeparkstrasse 19<br />\n            51580 Reichshof-Wehnrath<br />\n            Tel.: +49 2265 - 9986 - 0<br />\n            Fax: +49 2265 - 9986 - 800<br />\n            eMail: <a href="mailto:info@muenker.com">info@muenker.com</a>\n          </p>\n        </div>\n      </div>\n    '}),o=new google.maps.Marker({map:t,draggable:!1,position:{lat:50.96871,lng:7.6587},icon:"fileadmin/bilder/muenker.com/muenker-bulleye.png"}),r=new google.maps.StyledMapType([{featureType:"all",elementType:"all",stylers:[{hue:"#0008ff"},{saturation:-100},{gamma:1.05}]},{featureType:"all",elementType:"all",stylers:[]}],{name:"Dark"});t.mapTypes.set("Dark",r),n.open(t,o),o.addListener("click",(function(){n.open(t,o)}))}else console.warn("Map container not found")}else console.warn("Google Maps API is not loaded")}(),new l,null===(e=document.querySelector(".button_back"))||void 0===e||e.addEventListener("click",(function(e){e.preventDefault(),window.history.back()})),null===(t=document.getElementById("inputText"))||void 0===t||t.setAttribute("placeholder","Suche"),null===(n=document.querySelector(".print"))||void 0===n||n.addEventListener("click",(function(e){e.preventDefault(),window.print()})),document.querySelectorAll(".withsub").forEach((function(e){e.addEventListener("click",(function(){this.classList.toggle("fa-caret-down"),this.classList.toggle("fa-caret-up"),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("open")}))}))})),window.addEventListener("scroll",(function(){var e=document.querySelector("header.header");window.pageYOffset>0?e.classList.add("small"):e.classList.remove("small")}))})();