"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlElement = void 0;
const XmlCommon_1 = require("./XmlCommon");
class XmlElement {
    constructor(raw) {
        this.raw = raw;
    }
    getAttribute(name) {
        return this.raw[XmlCommon_1.XML_RAW_ATTRIBUTES_NAME][name];
    }
    getText() {
        return this.raw[XmlCommon_1.XML_RAW_TEXT_NAME];
    }
    getChildren(name) {
        var _a;
        return (_a = this.raw[name]) === null || _a === void 0 ? void 0 : _a.map((e) => new XmlElement(e));
    }
}
exports.XmlElement = XmlElement;
