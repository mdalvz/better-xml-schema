"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapper = void 0;
function wrapper(prepend, fn) {
    try {
        return fn();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`${prepend}\n${error.message}`);
        }
        throw error;
    }
}
exports.wrapper = wrapper;
