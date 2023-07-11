import {
  XmlRawElement,
  XML_RAW_ATTRIBUTES_NAME,
  XML_RAW_TEXT_NAME
} from './XmlCommon';

export class XmlElement {

  private readonly raw: XmlRawElement;

  public constructor(raw: XmlRawElement) {
    this.raw = raw;
  }

  public getAttribute(name: string): string | undefined {
    return this.raw[XML_RAW_ATTRIBUTES_NAME][name];
  }

  public getText(): string {
    return this.raw[XML_RAW_TEXT_NAME];
  }

  public getChildren(name: string): XmlElement[] | undefined {
    return this.raw[name]?.map((e) => new XmlElement(e));
  }

}
