"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
class Parser {
    constructor(root) {
        this._parser = new fast_xml_parser_1.XMLParser({
            ignoreAttributes: false,
            isArray: (tagName, jPath, isLeafNode, isAttribute) => {
                return !isAttribute;
            },
        });
        this._root = root;
    }
    parse(data) {
        const value = this._parser.parse(data);
        return this._root.parse([value]);
    }
}
exports.Parser = Parser;
