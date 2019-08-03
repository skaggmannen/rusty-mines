(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/rusty_mines.js":
/*!*****************************!*\
  !*** ../pkg/rusty_mines.js ***!
  \*****************************/
/*! exports provided: greet, Board, Cell, __wbg_alert_1aeee739f0aa07b6, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_object_drop_ref, __wbg_random_694320ddb679dc1e, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_1aeee739f0aa07b6\", function() { return __wbg_alert_1aeee739f0aa07b6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_694320ddb679dc1e\", function() { return __wbg_random_694320ddb679dc1e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rusty_mines_bg.wasm */ \"../pkg/rusty_mines_bg.wasm\");\n\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n\n        let size = arg.length;\n        let ptr = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            arg = arg.slice(offset);\n            ptr = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + arg.length * 3);\n            const view = getUint8Memory().subarray(ptr + offset, ptr + size);\n            const ret = cachedTextEncoder.encodeInto(arg, view);\n\n            offset += ret.written;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n\n        let size = arg.length;\n        let ptr = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let offset = 0;\n        {\n            const mem = getUint8Memory();\n            for (; offset < arg.length; offset++) {\n                const code = arg.charCodeAt(offset);\n                if (code > 0x7F) break;\n                mem[ptr + offset] = code;\n            }\n        }\n\n        if (offset !== arg.length) {\n            const buf = cachedTextEncoder.encode(arg.slice(offset));\n            ptr = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size = offset + buf.length);\n            getUint8Memory().set(buf, ptr + offset);\n            offset += buf.length;\n        }\n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    };\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nclass Board {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Board.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_board_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Board}\n    */\n    static new(width, height) {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_new\"](width, height);\n        return Board.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        const retptr = 8;\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_render\"](retptr, this.ptr);\n        const memi32 = getInt32Memory();\n        const v0 = getStringFromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n        return v0;\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    reveal(row, col) {\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_reveal\"](this.ptr, row, col);\n    }\n    /**\n    * @returns {boolean}\n    */\n    done() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_done\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    flag(row, col) {\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_flag\"](this.ptr, row, col);\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    * @returns {Cell}\n    */\n    get_cell(row, col) {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_get_cell\"](this.ptr, row, col);\n        return Cell.__wrap(ret);\n    }\n}\n/**\n*/\nclass Cell {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Cell.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_cell_free\"](ptr);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get revealed() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_cell_revealed\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set revealed(arg0) {\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_cell_revealed\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get flagged() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_cell_flagged\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set flagged(arg0) {\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_cell_flagged\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {boolean}\n    */\n    get mine() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_cell_mine\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @param {boolean} arg0\n    */\n    set mine(arg0) {\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_cell_mine\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get neighbors() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_cell_neighbors\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set neighbors(arg0) {\n        _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_cell_neighbors\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {Cell}\n    */\n    static mine() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cell_mine\"]();\n        return Cell.__wrap(ret);\n    }\n    /**\n    * @returns {Cell}\n    */\n    static clear() {\n        const ret = _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"cell_clear\"]();\n        return Cell.__wrap(ret);\n    }\n}\n\nconst __wbg_alert_1aeee739f0aa07b6 = function(arg0, arg1) {\n    alert(getStringFromWasm(arg0, arg1));\n};\n\nconst __wbg_new_59cb74e423758ede = function() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nconst __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ret0 = passStringToWasm(ret);\n    const ret1 = WASM_VECTOR_LEN;\n    getInt32Memory()[arg0 / 4 + 0] = ret0;\n    getInt32Memory()[arg0 / 4 + 1] = ret1;\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    const v0 = getStringFromWasm(arg0, arg1).slice();\n    _rusty_mines_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1 * 1);\n    console.error(v0);\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_random_694320ddb679dc1e = function() {\n    const ret = Math.random();\n    return ret;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/rusty_mines.js?");

/***/ }),

/***/ "../pkg/rusty_mines_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/rusty_mines_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __wbg_board_free, board_new, board_render, board_reveal, board_done, board_flag, board_get_cell, __wbg_cell_free, __wbg_get_cell_revealed, __wbg_set_cell_revealed, __wbg_get_cell_flagged, __wbg_set_cell_flagged, __wbg_get_cell_mine, __wbg_set_cell_mine, __wbg_get_cell_neighbors, __wbg_set_cell_neighbors, cell_mine, cell_clear, greet, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rusty_mines.js */ \"../pkg/rusty_mines.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rusty_mines_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rusty_mines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rusty-mines */ \"../pkg/rusty_mines.js\");\n\n\nconst WIDTH = 10;\nconst HEIGHT = 10;\n\nconst GRID_COLOR = \"#CCCCCC\";\nconst REVEALED_COLOR = \"#888888\";\nconst HIDDEN_COLOR = \"#EEEEEE\";\n\nconst CELL_SIZE = 20;\n\nconst COUNT_COLORS = [\n    \"#000000\",\n    \"#0000FF\",\n    \"#00FF00\",\n    \"#00FFFF\",\n    \"#FF0000\",\n    \"#FF00FF\",\n    \"#FFFF00\",\n    \"#FFFFFF\",\n];\n\n\nlet board = rusty_mines__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].new(WIDTH, HEIGHT);\n\nconst canvas = document.getElementById(\"game-board\");\ncanvas.height = (CELL_SIZE + 1) * HEIGHT + 1;\ncanvas.width = (CELL_SIZE + 1) * WIDTH + 1;\n\n\nconst done = document.getElementById(\"done\");\n\ncanvas.addEventListener(\"click\", event => {\n    if (board.done()) {\n        return;\n    }\n\n    const boundingRect = canvas.getBoundingClientRect();\n\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), HEIGHT - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), WIDTH - 1);\n\n    board.reveal(row, col);\n\n    render();\n});\n\ncanvas.addEventListener(\"contextmenu\", event => {\n    event.preventDefault();\n    if (board.done()) {\n        return false;\n    }\n\n    const boundingRect = canvas.getBoundingClientRect();\n\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), HEIGHT - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), WIDTH - 1);\n\n    board.flag(row, col);\n\n    render();\n\n    return false;\n}, false);\n\nconst render = () => {\n    const ctx = canvas.getContext(\"2d\");\n\n    if (board.done()) {\n        done.innerText = \"Done!\";\n    }\n\n    drawGrid(ctx);\n    drawCells(ctx);\n};\n\nconst drawGrid = (ctx) => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Draw vertical lines\n    for (let i = 0; i <= WIDTH ; i++) {\n        ctx.moveTo(( CELL_SIZE + 1) * i  + 1, 0);\n        ctx.lineTo(( CELL_SIZE + 1) * i + 1, ( CELL_SIZE + 1 ) * HEIGHT + 1 );\n    }\n\n    // Draw horizontal lines\n    for (let i = 0; i <= HEIGHT; i++) {\n        ctx.moveTo(0, ( CELL_SIZE + 1) * i + 1);\n        ctx.lineTo(( CELL_SIZE + 1) * WIDTH + 1, ( CELL_SIZE + 1 ) * i + 1 );\n    }\n\n    ctx.stroke();\n};\n\nconst drawCells = (ctx) => {\n    ctx.beginPath();\n\n    for (let row = 0; row < HEIGHT; row++) {\n        for (let col = 0; col < WIDTH; col++) {\n            const x = col * (CELL_SIZE + 1);\n            const y = row * (CELL_SIZE + 1);\n            const cell = board.get_cell(row, col);\n\n            if (cell.revealed) {\n                ctx.fillStyle = REVEALED_COLOR;\n                ctx.fillRect(\n                    x + 1,\n                    y + 1,\n                    CELL_SIZE,\n                    CELL_SIZE\n                );\n\n                ctx.fillStyle = \"#000000\";\n\n                if (cell.mine) {\n                    ctx.font = \"12px Courier New\";\n                    ctx.fillText(\"💣\", x+4, y+15);\n                } else {\n                    const count = cell.neighbors;\n                    ctx.fillStyle = COUNT_COLORS[count - 1];\n                    ctx.font = \"20px Courier New\";\n                    if (count > 0) {\n                        ctx.fillText(\"\" + count, x+4, y+17);\n                    }\n                }\n            } else {\n                ctx.fillStyle = HIDDEN_COLOR;\n                ctx.fillRect(\n                    x + 1,\n                    y + 1,\n                    CELL_SIZE,\n                    CELL_SIZE\n                );\n\n                if (cell.flagged) {\n                    ctx.font = \"12px Courier New\";\n                    ctx.fillStyle = \"#000000\";\n                    ctx.fillText(\"🚩\", x+4, y+15);\n                }\n            }\n        }\n    }\n\n    ctx.stroke();\n};\n\nrender();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);