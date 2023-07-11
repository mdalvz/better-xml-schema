"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlParser = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
const XmlCommon_1 = require("./XmlCommon");
const XmlElement_1 = require("./XmlElement");
class XmlParser {
    constructor() {
        this.parser = new fast_xml_parser_1.XMLParser(XmlCommon_1.XML_PARSER_OPTIONS);
    }
    parse(data) {
        const raw = this.parser.parse(data);
        return new XmlElement_1.XmlElement(raw);
    }
}
exports.XmlParser = XmlParser;
