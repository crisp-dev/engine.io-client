"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (() => {
    if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();
