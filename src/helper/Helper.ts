import { Parser } from '../parser/Parser';
import { Element, ElementAttributesShape, ElementChildrenShape } from '../element/Element';
import { BooleanAttribute } from '../attribute/BooleanAttribute';
import { NumberAttribute } from '../attribute/NumberAttribute';
import { StringAttribute } from '../attribute/StringAttribute';
import { AbstractElement } from '../element/AbstractElement';

export function one<
  TAttributesShape extends ElementAttributesShape,
  TChildrenShape extends ElementChildrenShape
>(attributesShape: TAttributesShape, childrenShape: TChildrenShape) {
  return new Element(attributesShape, childrenShape);
}

export function many<
  TAttributesShape extends ElementAttributesShape,
  TChildrenShape extends ElementChildrenShape
>(attributesShape: TAttributesShape, childrenShape: TChildrenShape) {
  return new Element(attributesShape, childrenShape).array();
}

export function boolean(): BooleanAttribute {
  return new BooleanAttribute();
}

export function number(): NumberAttribute {
  return new NumberAttribute();
}

export function string(): StringAttribute {
  return new StringAttribute();
}

export function parse<T>(root: AbstractElement<T>, data: string): T {
  const parser = new Parser(root);
  return parser.parse(data);
}

export type infer<T extends AbstractElement<any>> = T['_output'];
