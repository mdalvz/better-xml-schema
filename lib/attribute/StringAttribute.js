"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringAttribute = void 0;
const AbstractAttribute_1 = require("./AbstractAttribute");
const OptionalAttribute_1 = require("./OptionalAttribute");
class StringAttribute extends AbstractAttribute_1.AbstractAttribute {
    constructor(min, max, regex) {
        super();
        this._min = min;
        this._max = max;
        this._regex = regex;
    }
    min(min) {
        this._min = min;
        return this;
    }
    max(max) {
        this._max = max;
        return this;
    }
    regex(regex) {
        this._regex = regex;
        return this;
    }
    optional() {
        return new OptionalAttribute_1.OptionalAttribute(this);
    }
    parse(input) {
        if (input === undefined) {
            throw new Error(`Attribute is required`);
        }
        else if (this._min !== undefined && input.length < this._min) {
            throw new Error(`Attribute must have min length ${this._min}, got ${input.length}`);
        }
        else if (this._max !== undefined && input.length > this._max) {
            throw new Error(`Attribute must have max length ${this._max}, got ${input.length}`);
        }
        else if (this._regex !== undefined && !this._regex.test(input)) {
            throw new Error(`Attribute must match "${this._regex}"`);
        }
        else {
            return input;
        }
    }
}
exports.StringAttribute = StringAttribute;
