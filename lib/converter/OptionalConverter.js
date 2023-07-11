"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalConverter = void 0;
const AbstractConverter_1 = require("./AbstractConverter");
class OptionalConverter extends AbstractConverter_1.AbstractConverter {
    constructor(def) {
        super();
        this.def = def;
    }
    target(target) {
        return new OptionalConverter(Object.assign(Object.assign({}, this.def), { target }));
    }
    convert(input) {
        if (input === undefined) {
            return undefined;
        }
        else {
            return this.def.target.convert(input);
        }
    }
}
exports.OptionalConverter = OptionalConverter;
