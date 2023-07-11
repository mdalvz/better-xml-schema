import { XMLParser as _XMLParser } from 'fast-xml-parser';
import { XmlRawElement, XML_PARSER_OPTIONS } from './XmlCommon';
import { XmlElement } from './XmlElement';

export class XmlParser {

  private readonly parser: _XMLParser;

  public constructor() {
    this.parser = new _XMLParser(XML_PARSER_OPTIONS);
  }

  public parse(data: string): XmlElement {
    const raw = this.parser.parse(data) as XmlRawElement;
    return new XmlElement(raw);
  }

}
