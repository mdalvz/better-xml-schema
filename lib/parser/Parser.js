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
const XmlParser_1 = require("../xml/XmlParser");
class Parser {
    constructor(root) {
        this.parser = new XmlParser_1.XmlParser();
        this.root = root;
    }
    parse(data) {
        const value = this.parser.parse(data);
        return this.root.convert(value);
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
