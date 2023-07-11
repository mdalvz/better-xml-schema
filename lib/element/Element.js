"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = exports.wrapper = void 0;
const AbstractElement_1 = require("./AbstractElement");
function wrapper(prepend, fn) {
    try {
        return fn();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`${prepend}\n${error.message}`);
        }
        throw error;
    }
}
exports.wrapper = wrapper;
class Element extends AbstractElement_1.AbstractElement {
    constructor(attributes, children) {
        super();
        this.attributes = attributes;
        this.children = children;
    }
    convert(input) {
        const result = {};
        for (const key in this.attributes) {
            wrapper(`At attribute "${key}":`, () => {
                result[`\$${key}`] = this.attributes[key].convert(input.getAttribute(key));
            });
        }
        for (const key in this.children) {
            wrapper(`At element <${key}>:`, () => {
                result[key] = this.children[key].convert(input.getChildren(key));
            });
        }
        return result;
    }
}
exports.Element = Element;
