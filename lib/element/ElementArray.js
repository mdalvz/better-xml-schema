"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementArray = void 0;
const AbstractElement_1 = require("./AbstractElement");
const Wrapper_1 = require("./Wrapper");
class ElementArray extends AbstractElement_1.AbstractElement {
    constructor(target) {
        super();
        this._target = target;
    }
    target(target) {
        this._target = target;
        return this;
    }
    length(length) {
        this._length = length;
        return this;
    }
    min(min) {
        this._min = min;
        return this;
    }
    max(max) {
        this._max = max;
        return this;
    }
    parse(input) {
        if (this._length !== undefined && input.length !== this._length) {
            throw new Error(`Expected ${this._length} elements, got ${input.length}`);
        }
        else if (this._min !== undefined && input.length < this._min) {
            throw new Error(`Expected at least ${this._min} elements, got ${input.length}`);
        }
        else if (this._max !== undefined && input.length > this._max) {
            throw new Error(`Expected at most ${this._min} elements, got ${input.length}`);
        }
        const result = [];
        for (const [index, value] of input.entries()) {
            (0, Wrapper_1.wrapper)(`At index ${index}:`, () => {
                result.push(this._target.parse([value]));
            });
        }
        return result;
    }
}
exports.ElementArray = ElementArray;
