import { Parser } from '../parser/Parser';
import { Element, ElementAttributes, ElementChildren } from '../element/Element';
import { BooleanAttribute } from '../attribute/BooleanAttribute';
import { NumberAttribute } from '../attribute/NumberAttribute';
import { StringAttribute } from '../attribute/StringAttribute';
import { AbstractElement } from '../element/AbstractElement';
import { SingletonArrayConverter } from '../converter/SingletonArrayConverter';
import { ArrayConverter } from '../converter/ArrayConverter';
import { AbstractConverter } from '../converter/AbstractConverter';
import { OptionalConverter } from '../converter/OptionalConverter';

export function element<
  TAttributes extends ElementAttributes,
  TChildren extends ElementChildren
>(attributes: TAttributes, children: TChildren) {
  return new Element(attributes, children);
}

export function one<TOutput>(target: AbstractElement<TOutput>) {
  return new SingletonArrayConverter({ target });
}

export function many<TOutput>(target: AbstractElement<TOutput>) {
  return new ArrayConverter({ target });
}

export function optional<TInput, TOutput>(target: AbstractConverter<TInput, TOutput>) {
  return new OptionalConverter({ target });
}

export function boolean() {
  return new BooleanAttribute();
}

export function number() {
  return new NumberAttribute({});
}

export function string() {
  return new StringAttribute({});
}

export function parse<TOutput>(root: AbstractElement<TOutput>, data: string) {
  const parser = new Parser(root);
  return parser.parse(data);
}

export async function parseFile<T>(root: AbstractElement<T>, path: string) {
  const parser = new Parser(root);
  return parser.parseFile(path);
}

export type infer<T extends AbstractElement<any>> = T['output'];
