"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalAttribute = void 0;
const AbstractAttribute_1 = require("./AbstractAttribute");
class OptionalAttribute extends AbstractAttribute_1.AbstractAttribute {
    constructor(target) {
        super();
        this._target = target;
    }
    target(target) {
        this._target = target;
        return this;
    }
    parse(input) {
        if (input === undefined) {
            return undefined;
        }
        else {
            return this._target.parse(input);
        }
    }
}
exports.OptionalAttribute = OptionalAttribute;
