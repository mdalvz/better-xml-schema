import { AbstractElement } from './AbstractElement';
import { AbstractAttribute } from '../attribute/AbstractAttribute';
import { ElementArray } from './ElementArray';
export type ElementAttributesShape = {
    [k: string]: AbstractAttribute<any>;
};
export type ElementChildrenShape = {
    [k: string]: AbstractElement<any>;
};
type ElementOutput<TAttributesShape extends ElementAttributesShape, TChildrenShape extends ElementChildrenShape> = {
    a: {
        [P in keyof TAttributesShape]: TAttributesShape[P]['_output'];
    };
    c: {
        [P in keyof TChildrenShape]: TChildrenShape[P]['_output'];
    };
};
export declare class Element<TAttributesShape extends ElementAttributesShape, TChildrenShape extends ElementChildrenShape> extends AbstractElement<ElementOutput<TAttributesShape, TChildrenShape>> {
    private readonly _attributesShape;
    private readonly _childrenShape;
    constructor(attributesShape: TAttributesShape, childrenShape: TChildrenShape);
    array(): ElementArray<ElementOutput<TAttributesShape, TChildrenShape>>;
    parse(input: any[]): ElementOutput<TAttributesShape, TChildrenShape>;
}
export {};
