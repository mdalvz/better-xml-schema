"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayConverter = void 0;
const AbstractArrayConverter_1 = require("./AbstractArrayConverter");
class ArrayConverter extends AbstractArrayConverter_1.AbstractArrayConverter {
    constructor(def) {
        super();
        this.def = def;
    }
    target(target) {
        return new ArrayConverter(Object.assign(Object.assign({}, this.def), { target }));
    }
    length(length) {
        return new ArrayConverter(Object.assign(Object.assign({}, this.def), { length }));
    }
    min(min) {
        return new ArrayConverter(Object.assign(Object.assign({}, this.def), { min }));
    }
    max(max) {
        return new ArrayConverter(Object.assign(Object.assign({}, this.def), { max }));
    }
    convert(input) {
        input = input || [];
        if (this.def.length !== undefined && this.def.length !== input.length) {
            throw new Error(`Expected ${this.def.length} elements, got ${input.length}`);
        }
        if (this.def.min !== undefined && this.def.min > input.length) {
            throw new Error(`Expected at least ${this.def.min} elements, got ${input.length}`);
        }
        if (this.def.max !== undefined && this.def.max < input.length) {
            throw new Error(`Expected at most ${this.def.max} elements, got ${input.length}`);
        }
        return input.map((e) => this.def.target.convert(e));
    }
}
exports.ArrayConverter = ArrayConverter;
