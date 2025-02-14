/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    background-color: #faf8ef;\r\n    font-family: Arial, sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n.main-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    gap: 20px;\r\n}\r\n\r\n.gameCanvas {\r\n    background-color: #bbada0;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.score-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    width: 150px;\r\n    height: 50px;\r\n    text-align: center;\r\n    color: #f5f0ef;\r\n    border: #776e65 5px solid;\r\n    border-radius: 50px;\r\n    background: #bbada0;\r\n}\r\n\r\n.game-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://2048/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://2048/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://2048/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://2048/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/game.js */ \"./src/js/game.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const canvas = document.getElementById(\"gameCanvas\");\r\n    if (canvas) {\r\n        new _js_game_js__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://2048/./src/index.js?");

/***/ }),

/***/ "./src/js/InputHandler.js":
/*!********************************!*\
  !*** ./src/js/InputHandler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputHandler: () => (/* binding */ InputHandler)\n/* harmony export */ });\nclass InputHandler {\r\n    constructor(handleMove) {\r\n        this.handleMove = handleMove;\r\n        this.swipeThreshold = 30;\r\n        this.startX = 0;\r\n        this.startY = 0;\r\n\r\n        document.addEventListener(\"keydown\", (event) => this.handleKey(event));\r\n\r\n        document.addEventListener(\"touchstart\", (event) => this.handleTouchStart(event));\r\n        document.addEventListener(\"touchend\", (event) => this.handleTouchEnd(event));\r\n\r\n        document.addEventListener(\"mousedown\", (event) => this.handleMouseStart(event));\r\n        document.addEventListener(\"mouseup\", (event) => this.handleMouseEnd(event));\r\n    }\r\n\r\n    handleKey(event) {\r\n        const validKeys = [\"ArrowLeft\", \"ArrowRight\", \"ArrowUp\", \"ArrowDown\"];\r\n        if (!validKeys.includes(event.key)) return;\r\n\r\n        event.preventDefault();\r\n        this.handleMove(event.key.replace(\"Arrow\", \"\").toLowerCase  ());\r\n    }\r\n\r\n    handleTouchStart(event) {\r\n        this.startX = event.touches[0].clientX;\r\n        this.startY = event.touches[0].clientY;\r\n    }\r\n\r\n    handleTouchEnd(event) {\r\n        let touch = event.changedTouches[0];\r\n        this.detectSwipe(touch.clientX, touch.clientY);\r\n    }\r\n\r\n    handleMouseStart(event) {\r\n        this.startX = event.clientX;\r\n        this.startY = event.clientY;\r\n    }\r\n\r\n    handleMouseEnd(event) {\r\n        this.detectSwipe(event.clientX, event.clientY);\r\n    }\r\n\r\n    detectSwipe(endX, endY) {\r\n        let dx = endX - this.startX;\r\n        let dy = endY - this.startY;\r\n\r\n        if (Math.abs(dx) < this.swipeThreshold && Math.abs(dy) < this.swipeThreshold) return;\r\n\r\n        if (Math.abs(dx) > Math.abs(dy)) {\r\n            this.handleMove(dx > 0 ? \"right\" : \"left\");\r\n        } else {\r\n            this.handleMove(dy > 0 ? \"down\" : \"up\");\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://2048/./src/js/InputHandler.js?");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/js/tile.js\");\n\r\n\r\nclass Board {\r\n    constructor(size = 4) {\r\n        this.size = size;\r\n        this.score = 0;\r\n        this.reset();\r\n    }\r\n\r\n    createEmptyGrid() {\r\n        return Array.from({length: this.size}, () => Array(this.size).fill(null));\r\n    }\r\n\r\n    reset() {\r\n        this.grid = this.createEmptyGrid();\r\n        this.score = 0;\r\n        this.addRandomTile();\r\n        this.addRandomTile();\r\n        this.updateScore(0);\r\n    }\r\n\r\n    getEmptyCells() {\r\n        return this.grid.reduce((acc, row, rowIndex) => {\r\n            row.forEach((cell, colIndex) => {\r\n                if (!cell) acc.push({ row: rowIndex, col: colIndex });\r\n            });\r\n            return acc;\r\n        }, []);\r\n    }\r\n\r\n    addRandomTile() {\r\n        const emptyCells = this.getEmptyCells();\r\n        if (emptyCells.length) {\r\n            const {row, col} = emptyCells[Math.floor(Math.random() * emptyCells.length)];\r\n            this.grid[row][col] = new _tile_js__WEBPACK_IMPORTED_MODULE_0__.Tile([2, 4][+(Math.random() >= 0.9)], row, col);\r\n        }\r\n    }\r\n\r\n    updateScore(points = 0) {\r\n        this.score += points;\r\n        this.renderScore();\r\n    }\r\n\r\n    renderScore() {\r\n        const scoreElement = document.getElementById(\"score\");\r\n        if (scoreElement) {\r\n            scoreElement.textContent = this.score;\r\n        }\r\n    }\r\n\r\n    move(direction) {\r\n        let moved = false;\r\n        const isVertical = direction === \"up\" || direction === \"down\";\r\n        let grid = isVertical ? this.transpose(this.grid) : this.grid;\r\n\r\n        if (direction === \"right\" || direction === \"down\") grid = grid.map(row => row.reverse());\r\n\r\n        let newGrid = grid.map(row => {\r\n            let filtered = row.filter(tile => tile);\r\n            let newRow = [];\r\n            let points = 0;\r\n\r\n            for (let i = 0; i < filtered.length; i++) {\r\n                if (filtered[i + 1] && filtered[i].value === filtered[i + 1].value) {\r\n                    let mergedTile = new _tile_js__WEBPACK_IMPORTED_MODULE_0__.Tile(filtered[i].value * 2, filtered[i].row, filtered[i].col);\r\n                    newRow.push(mergedTile);\r\n                    points += mergedTile.value;\r\n                    i++;\r\n                } else {\r\n                    newRow.push(filtered[i]);\r\n                }\r\n            }\r\n\r\n            while (newRow.length < this.size) newRow.push(null);\r\n            if (points) this.updateScore(points);\r\n\r\n            return newRow;\r\n        });\r\n\r\n        if (direction === \"right\" || direction === \"down\") newGrid = newGrid.map(row => row.reverse());\r\n        if (isVertical) newGrid = this.transpose(newGrid);\r\n\r\n        if (JSON.stringify(this.grid) !== JSON.stringify(newGrid)) {\r\n            this.grid = newGrid;\r\n            moved = true;\r\n        }\r\n\r\n        return moved;\r\n    }\r\n\r\n    transpose(grid) {\r\n        return grid[0].map((_, i) => grid.map(row => row[i]));\r\n    }\r\n\r\n    has2048Tile() {\r\n        return this.grid.some(row => row.some(tile => tile?.value === 2048));\r\n    }\r\n\r\n    canMove() {\r\n        return this.getEmptyCells().length > 0 ||\r\n            this.grid.some((row, i) =>\r\n                row.some((tile, j) =>\r\n                    tile &&\r\n                    ((j < this.size - 1 && tile.value === this.grid[i][j + 1]?.value) ||\r\n                        (i < this.size - 1 && tile.value === this.grid[i + 1][j]?.value))\r\n                )\r\n            );\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://2048/./src/js/board.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/js/board.js\");\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer.js */ \"./src/js/renderer.js\");\n/* harmony import */ var _InputHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputHandler.js */ \"./src/js/InputHandler.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(canvas) {\r\n        this.canvas = canvas;\r\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__.Board(4);\r\n        this.renderer = new _renderer_js__WEBPACK_IMPORTED_MODULE_1__.Renderer(canvas, this.board);\r\n        this.inputHandler = new _InputHandler_js__WEBPACK_IMPORTED_MODULE_2__.InputHandler(this.handleMove.bind(this));\r\n        this.isMoving = false;\r\n        this.startGame();\r\n    }\r\n\r\n    startGame() {\r\n        this.board.reset();\r\n        this.renderer.render();\r\n    }\r\n\r\n    handleMove(direction) {\r\n        if (this.isMoving) return;\r\n        this.isMoving = true;\r\n\r\n        const moved = this.board.move(direction);\r\n        if (moved) {\r\n            this.board.addRandomTile();\r\n            this.renderer.render();\r\n\r\n            if (this.board.has2048Tile()) {\r\n                alert(\"Уровень пройден\");\r\n                this.startGame();\r\n            } else if (!this.board.canMove()) {\r\n                alert(\"Нельзя сделать ход\");\r\n                this.startGame();\r\n            }\r\n        }\r\n\r\n        this.isMoving = false;\r\n    }\r\n}\n\n//# sourceURL=webpack://2048/./src/js/game.js?");

/***/ }),

/***/ "./src/js/renderer.js":
/*!****************************!*\
  !*** ./src/js/renderer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Renderer: () => (/* binding */ Renderer)\n/* harmony export */ });\nclass Renderer {\r\n    constructor(canvas, board) {\r\n        this.canvas = canvas;\r\n        this.ctx = canvas.getContext(\"2d\");\r\n        this.board = board;\r\n        this.tileSize = canvas.width / board.size;\r\n    }\r\n\r\n    render() {\r\n        this.clearCanvas();\r\n        this.drawGrid();\r\n        this.drawTiles();\r\n    }\r\n\r\n    clearCanvas() {\r\n        this.ctx.fillStyle = \"#bbada0\";\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n\r\n    drawGrid() {\r\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n\r\n    drawTiles() {\r\n        this.board.grid.forEach((row, rIndex) => {\r\n            row.forEach((tile, cIndex) => {\r\n                if (tile) {\r\n                    tile.updatePosition();\r\n                    this.drawTile(tile.value, rIndex, cIndex);\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    drawTile(value, row, col) {\r\n        const colors = {\r\n            2: \"#eee4da\", 4: \"#ede0c8\", 8: \"#f2b179\", 16: \"#f59563\",\r\n            32: \"#f67c5f\", 64: \"#f65e3b\", 128: \"#edcf72\", 256: \"#edcc61\",\r\n            512: \"#edc850\", 1024: \"#edc53f\", 2048: \"#edc22e\",\r\n        };\r\n\r\n        const padding = 10;\r\n        const radius = 10;\r\n        const size = this.tileSize - padding;\r\n        const x = col * this.tileSize + padding / 2;\r\n        const y = row * this.tileSize + padding / 2;\r\n\r\n        this.ctx.fillStyle = colors[value] || \"#3c3a32\";\r\n\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(x + radius, y);\r\n        this.ctx.arcTo(x + size, y, x + size, y + size, radius);\r\n        this.ctx.arcTo(x + size, y + size, x, y + size, radius);\r\n        this.ctx.arcTo(x, y + size, x, y, radius);\r\n        this.ctx.arcTo(x, y, x + size, y, radius);\r\n        this.ctx.closePath();\r\n        this.ctx.fill();\r\n\r\n        this.ctx.fillStyle = value > 4 ? \"#f9f6f2\" : \"#776e65\";\r\n        this.ctx.font = \"bold 32px Arial\";\r\n        this.ctx.textAlign = \"center\";\r\n        this.ctx.textBaseline = \"middle\";\r\n        this.ctx.fillText(value, x + size / 2, y + size / 2);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://2048/./src/js/renderer.js?");

/***/ }),

/***/ "./src/js/tile.js":
/*!************************!*\
  !*** ./src/js/tile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tile: () => (/* binding */ Tile)\n/* harmony export */ });\nclass Tile {\r\n    constructor(value, row, col) {\r\n        this.value = value;\r\n        this.row = row;\r\n        this.col = col;\r\n        this.x = col;\r\n        this.y = row;\r\n    }\r\n\r\n    updatePosition(delta = 0.1) {\r\n        this.x += (this.col - this.x) * delta;\r\n        this.y += (this.row - this.y) * delta;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://2048/./src/js/tile.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://2048/./src/styles.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;