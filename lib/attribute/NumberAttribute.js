"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberAttribute = void 0;
const AbstractAttribute_1 = require("./AbstractAttribute");
const OptionalAttribute_1 = require("./OptionalAttribute");
class NumberAttribute extends AbstractAttribute_1.AbstractAttribute {
    constructor(min, max, positive, negative, integer) {
        super();
        this._min = min;
        this._max = max;
        this._positive = positive;
        this._negative = negative;
        this._integer = integer;
    }
    min(min) {
        this._min = min;
        return this;
    }
    max(max) {
        this._max = max;
        return this;
    }
    positive() {
        this._positive = true;
        return this;
    }
    negative() {
        this._negative = true;
        return this;
    }
    integer() {
        this._integer = true;
        return this;
    }
    optional() {
        return new OptionalAttribute_1.OptionalAttribute(this);
    }
    parse(input) {
        if (input === undefined) {
            throw new Error(`Attribute is required`);
        }
        const result = parseFloat(input);
        if (isNaN(result)) {
            throw new Error(`Attribute must be a number, got "${input}"`);
        }
        else if (this._integer && !Number.isInteger(result)) {
            throw new Error(`Attribute must be an integer, got "${input}"`);
        }
        else if (this._positive && !(result > 0)) {
            throw new Error(`Attribute must be positive, got "${input}"`);
        }
        else if (this._negative && !(result < 0)) {
            throw new Error(`Attribute must be negative, got "${input}"`);
        }
        else if (this._min !== undefined && result < this._min) {
            throw new Error(`Attribute must have min value ${this._min}, got "${input}"`);
        }
        else if (this._max !== undefined && result > this._max) {
            throw new Error(`Attribute must have max value ${this._max}, got "${input}"`);
        }
        else {
            return result;
        }
    }
}
exports.NumberAttribute = NumberAttribute;
