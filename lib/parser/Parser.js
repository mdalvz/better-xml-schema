"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const promises_1 = require("fs/promises");
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
    parseFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, promises_1.readFile)(path, {
                encoding: 'utf8',
            });
            return this.parse(data);
        });
    }
}
exports.Parser = Parser;
