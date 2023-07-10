"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.string = exports.number = exports.boolean = exports.many = exports.one = void 0;
const Parser_1 = require("../parser/Parser");
const Element_1 = require("../element/Element");
const BooleanAttribute_1 = require("../attribute/BooleanAttribute");
const NumberAttribute_1 = require("../attribute/NumberAttribute");
const StringAttribute_1 = require("../attribute/StringAttribute");
function one(attributesShape, childrenShape) {
    return new Element_1.Element(attributesShape, childrenShape);
}
exports.one = one;
function many(attributesShape, childrenShape) {
    return new Element_1.Element(attributesShape, childrenShape).array();
}
exports.many = many;
function boolean() {
    return new BooleanAttribute_1.BooleanAttribute();
}
exports.boolean = boolean;
function number() {
    return new NumberAttribute_1.NumberAttribute();
}
exports.number = number;
function string() {
    return new StringAttribute_1.StringAttribute();
}
exports.string = string;
function parse(root, data) {
    const parser = new Parser_1.Parser(root);
    return parser.parse(data);
}
exports.parse = parse;
