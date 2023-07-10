import { Element, ElementAttributesShape, ElementChildrenShape } from '../element/Element';
import { BooleanAttribute } from '../attribute/BooleanAttribute';
import { NumberAttribute } from '../attribute/NumberAttribute';
import { StringAttribute } from '../attribute/StringAttribute';
import { AbstractElement } from '../element/AbstractElement';
export declare function one<TAttributesShape extends ElementAttributesShape, TChildrenShape extends ElementChildrenShape>(attributesShape: TAttributesShape, childrenShape: TChildrenShape): Element<TAttributesShape, TChildrenShape>;
export declare function many<TAttributesShape extends ElementAttributesShape, TChildrenShape extends ElementChildrenShape>(attributesShape: TAttributesShape, childrenShape: TChildrenShape): import("../element/ElementArray").ElementArray<{
    a: { [P in keyof TAttributesShape]: TAttributesShape[P]["_output"]; };
    c: { [P_1 in keyof TChildrenShape]: TChildrenShape[P_1]["_output"]; };
}>;
export declare function boolean(): BooleanAttribute;
export declare function number(): NumberAttribute;
export declare function string(): StringAttribute;
export declare function parse<T>(root: AbstractElement<T>, data: string): T;
export declare function parseFile<T>(root: AbstractElement<T>, path: string): Promise<T>;
export type infer<T extends AbstractElement<any>> = T['_output'];
