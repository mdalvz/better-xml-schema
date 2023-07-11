import { XmlElement } from './XmlElement';
export declare class XmlParser {
    private readonly parser;
    constructor();
    parse(data: string): XmlElement;
}
