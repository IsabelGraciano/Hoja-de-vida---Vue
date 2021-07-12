/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resume_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.json */ \"./src/resume.json\");\n\nvar app = new Vue({\n  el: \"#app\",\n  data: {\n    data: _resume_json__WEBPACK_IMPORTED_MODULE_0__\n  }\n});\n\n//# sourceURL=webpack://$/./src/main.js?");

/***/ }),

/***/ "./src/resume.json":
/*!*************************!*\
  !*** ./src/resume.json ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"dictionary\":{\"es-CO\":{\"contact\":\"Contacto\",\"name\":\"Nombre\"},\"en-US\":{\"contact\":\"Contact\",\"name\":\"name\"}},\"info\":{\"nombre\":\"ISABEL CRISTINA\",\"ocupacion\":\"Estudiante de Ingeniería de Sistemas\",\"perfil\":\"Estudiante de ingeniería de sistemas en la universidad EAFIT.Actualmente curso el octavo semestre y estoy realizando las prácticas profesionales en PlayVox.\",\"contacto\":{\"ubicacion\":\"MEDELLIN, ANTIOQUIA\",\"correo\":\"ICGRACIANO@PLAYVOX.COM\",\"github\":\"ISABELGRACIANO\",\"celular\":\"304 652 29 63\",\"twitter\":\"ISABELGRACIANOO\",\"linkedin\":\"ISABEL CRISTINA GRACIANO\"},\"educacion\":{\"colegio\":\"Bachillerato - Institución educativa Maria de los Ángeles Cano Márquez\",\"universidad\":\"Ingeniería de sistemas - Universidad EAFIT. 2018-2022\"},\"conocimientos\":[{\"item\":\"PYTHON\"},{\"item\":\"JAVA\"},{\"item\":\"PHP\"},{\"item\":\"FLUTTER\"}],\"habilidades\":[{\"item\":\"TRABAJO EN EQUIPO\"},{\"item\":\"COMPROMISO\"},{\"item\":\"RESPONSABILIDAD\"},{\"item\":\"HONESTIDAD\"}],\"actividades\":[{\"item\":\"Monitora de cálculo 1 en 2018-2\"},{\"item\":\"Monitora logística 2021-1\"},{\"item\":\"Integrante del semillero de investigación de innovación y emprendimiento\"}],\"img\":\"./assets/img/03.jpg\",\"urls\":{\"github\":\"https://github.com/IsabelGraciano\",\"celular\":\"tel:3046522963\",\"twitter\":\"https://twitter.com/IsabelGracianoo\",\"linkedin\":\"https://www.linkedin.com/in/isabel-cristina-graciano-vasquez\",\"enviarForm\":\"https://formspree.io/f/mrgrlgbz\"}},\"labels\":{\"perfil\":\"PERFIL\",\"educacion\":\"EDUCACIÓN\",\"conocimientos\":\"CONOCIMIENTOS\",\"habilidades\":\"HABILIDADES\",\"actividades\":\"ACTIVIDADES\",\"contacto\":\"CONTACTO\",\"correo\":\"Correo\",\"mensaje\":\"Mensaje\",\"botones\":{\"boton_contactar\":\"CONTACTAR\"}}}');\n\n//# sourceURL=webpack://$/./src/resume.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});