"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringAttribute = void 0;
const AbstractAttribute_1 = require("./AbstractAttribute");
class StringAttribute extends AbstractAttribute_1.AbstractAttribute {
    constructor(def) {
        super();
        this.def = def;
    }
    min(min) {
        return new StringAttribute(Object.assign(Object.assign({}, this.def), { min }));
    }
    max(max) {
        return new StringAttribute(Object.assign(Object.assign({}, this.def), { max }));
    }
    regex(regex) {
        return new StringAttribute(Object.assign(Object.assign({}, this.def), { regex }));
    }
    convert(input) {
        if (input === undefined) {
            throw new Error(`Attribute is required`);
        }
        else if (this.def.min !== undefined && input.length < this.def.min) {
            throw new Error(`Attribute must have min length ${this.def.min}, got ${input.length}`);
        }
        else if (this.def.max !== undefined && input.length > this.def.max) {
            throw new Error(`Attribute must have max length ${this.def.max}, got ${input.length}`);
        }
        else if (this.def.regex !== undefined && !this.def.regex.test(input)) {
            throw new Error(`Attribute must match "${this.def.regex}"`);
        }
        else {
            return input;
        }
    }
}
exports.StringAttribute = StringAttribute;
