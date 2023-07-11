"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonArrayConverter = void 0;
const AbstractArrayConverter_1 = require("./AbstractArrayConverter");
class SingletonArrayConverter extends AbstractArrayConverter_1.AbstractArrayConverter {
    constructor(def) {
        super();
        this.def = def;
    }
    convert(input) {
        if (input === undefined) {
            throw new Error(`Expected 1 elements, got undefined`);
        }
        if (input.length !== 1) {
            throw new Error(`Expected 1 elements, got ${input.length}`);
        }
        return this.def.target.convert(input[0]);
    }
}
exports.SingletonArrayConverter = SingletonArrayConverter;
