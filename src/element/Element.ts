import { AbstractElement } from './AbstractElement';
import { AbstractAttribute } from '../attribute/AbstractAttribute';
import { ElementArray } from './ElementArray';
import { wrapper } from './Wrapper';

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

export class Element<TAttributesShape extends ElementAttributesShape, TChildrenShape extends ElementChildrenShape> extends AbstractElement<ElementOutput<TAttributesShape, TChildrenShape>> {

  private readonly _attributesShape: TAttributesShape;

  private readonly _childrenShape: TChildrenShape;

  public constructor(attributesShape: TAttributesShape, childrenShape: TChildrenShape) {
    super();
    this._attributesShape = attributesShape;
    this._childrenShape = childrenShape;
  }

  public array(): ElementArray<ElementOutput<TAttributesShape, TChildrenShape>> {
    return new ElementArray(this);
  }

  public parse(input: any[]): ElementOutput<TAttributesShape, TChildrenShape> {
    if (input.length !== 1) {
      throw new Error(`Expected one element, got ${input.length}`);
    }
    let result = {
      a: {} as any,
      c: {} as any,
    };
    for (const key in this._attributesShape) {
      wrapper(`At attribute "${key}":`, () => {
        const value = input[0][`@_${key}`] as string | undefined;
        result.a[key] = this._attributesShape[key].parse(value);
      });
    }
    for (const key in this._childrenShape) {
      wrapper(`At element <${key}>:`, () => {
        const value = input[0][key] as any[] | undefined || [];
        result.c[key] = this._childrenShape[key].parse(value);
      });
    }
    return result as ElementOutput<TAttributesShape, TChildrenShape>;
  }
  
}
