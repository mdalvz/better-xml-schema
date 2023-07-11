"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberAttribute = void 0;
const AbstractAttribute_1 = require("./AbstractAttribute");
class NumberAttribute extends AbstractAttribute_1.AbstractAttribute {
    constructor(def) {
        super();
        this.def = def;
    }
    min(min) {
        return new NumberAttribute(Object.assign(Object.assign({}, this.def), { min }));
    }
    max(max) {
        return new NumberAttribute(Object.assign(Object.assign({}, this.def), { max }));
    }
    positive() {
        return new NumberAttribute(Object.assign(Object.assign({}, this.def), { positive: true }));
    }
    negative() {
        return new NumberAttribute(Object.assign(Object.assign({}, this.def), { negative: true }));
    }
    integer() {
        return new NumberAttribute(Object.assign(Object.assign({}, this.def), { integer: true }));
    }
    convert(input) {
        if (input === undefined) {
            throw new Error(`Attribute is required`);
        }
        const result = parseFloat(input);
        if (isNaN(result)) {
            throw new Error(`Attribute must be a number, got "${input}"`);
        }
        else if (this.def.integer && !Number.isInteger(result)) {
            throw new Error(`Attribute must be an integer, got "${input}"`);
        }
        else if (this.def.positive && !(result > 0)) {
            throw new Error(`Attribute must be positive, got "${input}"`);
        }
        else if (this.def.negative && !(result < 0)) {
            throw new Error(`Attribute must be negative, got "${input}"`);
        }
        else if (this.def.min !== undefined && result < this.def.min) {
            throw new Error(`Attribute must have min value ${this.def.min}, got "${input}"`);
        }
        else if (this.def.max !== undefined && result > this.def.max) {
            throw new Error(`Attribute must have max value ${this.def.max}, got "${input}"`);
        }
        else {
            return result;
        }
    }
}
exports.NumberAttribute = NumberAttribute;
