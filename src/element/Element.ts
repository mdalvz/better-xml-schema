import { AbstractConverter } from '../converter/AbstractConverter';
import { AbstractElement } from './AbstractElement';
import { XmlElement } from '../xml/XmlElement';

export function wrapper(prepend: string, fn: () => void) {
  try {
    return fn();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${prepend}\n${error.message}`);
    }
    throw error;
  }
}

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

export class Element<TAttributes extends ElementAttributes, TChildren extends ElementChildren> extends AbstractElement<ElementOutput<TAttributes, TChildren>> {

  private readonly attributes: TAttributes;

  private readonly children: TChildren;

  public constructor(attributes: TAttributes, children: TChildren) {
    super();
    this.attributes = attributes;
    this.children = children;
  }

  public convert(input: XmlElement): ElementOutput<TAttributes, TChildren> {
    const result: any = {};
    for (const key in this.attributes) {
      wrapper(`At attribute "${key}":`, () => {
        result[`\$${key}`] = this.attributes[key].convert(input.getAttribute(key));
      });
    }
    for (const key in this.children) {
      wrapper(`At element <${key}>:`, () => {
        result[key] = this.children[key].convert(input.getChildren(key));
      });
    }
    return result as ElementOutput<TAttributes, TChildren>;
  }
  
}
