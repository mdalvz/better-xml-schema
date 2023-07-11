"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
const AbstractElement_1 = require("./AbstractElement");
const Wrapper_1 = require("./Wrapper");
class Element extends AbstractElement_1.AbstractElement {
    constructor(attributes, children) {
        super();
        this.attributes = attributes;
        this.children = children;
    }
    convert(input) {
        const result = {};
        for (const key in this.attributes) {
            (0, Wrapper_1.wrapper)(`At attribute "${key}":`, () => {
                result[`\$${key}`] = this.attributes[key].convert(input.getAttribute(key));
            });
        }
        for (const key in this.children) {
            (0, Wrapper_1.wrapper)(`At element <${key}>:`, () => {
                result[key] = this.children[key].convert(input.getChildren(key));
            });
        }
        return result;
    }
}
exports.Element = Element;
