import { AbstractConverter } from '../converter/AbstractConverter';
import { AbstractElement } from './AbstractElement';
import { XmlElement } from '../xml/XmlElement';
export declare function wrapper(prepend: string, fn: () => void): void;
export type ElementAttributes = {
    [k: string]: AbstractConverter<string | undefined, any>;
};
export type ElementChildren = {
    [k: string]: AbstractConverter<XmlElement[] | undefined, any>;
};
export type ElementOutput<TAttributes extends ElementAttributes, TChildren extends ElementChildren> = {
    [P in keyof TAttributes as P extends string ? `\$${P}` : never]: TAttributes[P]['output'];
} & {
    [P in keyof TChildren]: TChildren[P]['output'];
};
export declare class Element<TAttributes extends ElementAttributes, TChildren extends ElementChildren> extends AbstractElement<ElementOutput<TAttributes, TChildren>> {
    private readonly attributes;
    private readonly children;
    constructor(attributes: TAttributes, children: TChildren);
    convert(input: XmlElement): ElementOutput<TAttributes, TChildren>;
}
