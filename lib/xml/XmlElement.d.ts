import { XmlRawElement } from './XmlCommon';
export declare class XmlElement {
    private readonly raw;
    constructor(raw: XmlRawElement);
    getAttribute(name: string): string | undefined;
    getText(): string;
    getChildren(name: string): XmlElement[] | undefined;
}
