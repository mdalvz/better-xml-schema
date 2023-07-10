"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanAttribute = void 0;
const AbstractAttribute_1 = require("./AbstractAttribute");
const OptionalAttribute_1 = require("./OptionalAttribute");
class BooleanAttribute extends AbstractAttribute_1.AbstractAttribute {
    constructor() {
        super();
    }
    optional() {
        return new OptionalAttribute_1.OptionalAttribute(this);
    }
    parse(input) {
        if (input === undefined) {
            throw new Error(`Attribute is required`);
        }
        else if (['1', 'true', 't'].includes(input.toLowerCase())) {
            return true;
        }
        else if (['0', 'false', 'f'].includes(input.toLowerCase())) {
            return false;
        }
        else {
            throw new Error(`Attribute must be a boolean, got "${input}"`);
        }
    }
}
exports.BooleanAttribute = BooleanAttribute;
