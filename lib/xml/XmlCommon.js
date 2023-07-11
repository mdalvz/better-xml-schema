"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XML_PARSER_OPTIONS = exports.XML_RAW_TEXT_NAME = exports.XML_RAW_ATTRIBUTES_NAME = void 0;
exports.XML_RAW_ATTRIBUTES_NAME = '@_';
exports.XML_RAW_TEXT_NAME = '#text';
exports.XML_PARSER_OPTIONS = {
    ignoreAttributes: false,
    attributeNamePrefix: '',
    attributesGroupName: exports.XML_RAW_ATTRIBUTES_NAME,
    alwaysCreateTextNode: true,
    ignoreDeclaration: true,
    isArray(name, jPath, isLeafNode, isAttribute) {
        return !isAttribute;
    },
};
