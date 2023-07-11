import { AbstractAttribute } from './AbstractAttribute';

export interface StringAttributeDef {
  min?: number;
  max?: number;
  regex?: RegExp;
}

export class StringAttribute extends AbstractAttribute<string> {

  private readonly def: StringAttributeDef;

  public constructor(def: StringAttributeDef) {
    super();
    this.def = def;
  }

  public min(min: number): StringAttribute {
    return new StringAttribute({ ...this.def, min });
  }

  public max(max: number): StringAttribute {
    return new StringAttribute({ ...this.def, max });
  }

  public regex(regex: RegExp): StringAttribute {
    return new StringAttribute({ ...this.def, regex });
  }

  public convert(input: string | undefined): string {
    if (input === undefined) {
      throw new Error(`Attribute is required`);
    } else if (this.def.min !== undefined && input.length < this.def.min) {
      throw new Error(`Attribute must have min length ${this.def.min}, got ${input.length}`);
    } else if (this.def.max !== undefined && input.length > this.def.max) {
      throw new Error(`Attribute must have max length ${this.def.max}, got ${input.length}`);
    } else if (this.def.regex !== undefined && !this.def.regex.test(input)) {
      throw new Error(`Attribute must match "${this.def.regex}"`);
    } else {
      return input;
    }
  }

}
