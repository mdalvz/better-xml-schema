"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
const AbstractElement_1 = require("./AbstractElement");
const ElementArray_1 = require("./ElementArray");
const Wrapper_1 = require("./Wrapper");
class Element extends AbstractElement_1.AbstractElement {
    constructor(attributesShape, childrenShape) {
        super();
        this._attributesShape = attributesShape;
        this._childrenShape = childrenShape;
    }
    array() {
        return new ElementArray_1.ElementArray(this);
    }
    parse(input) {
        if (input.length !== 1) {
            throw new Error(`Expected one element, got ${input.length}`);
        }
        let result = {
            a: {},
            c: {},
        };
        for (const key in this._attributesShape) {
            (0, Wrapper_1.wrapper)(`At attribute "${key}":`, () => {
                const value = input[0][`@_${key}`];
                result.a[key] = this._attributesShape[key].parse(value);
            });
        }
        for (const key in this._childrenShape) {
            (0, Wrapper_1.wrapper)(`At element <${key}>:`, () => {
                const value = input[0][key] || [];
                result.c[key] = this._childrenShape[key].parse(value);
            });
        }
        return result;
    }
}
exports.Element = Element;
