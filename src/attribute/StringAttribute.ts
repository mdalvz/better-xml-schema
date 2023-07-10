import { AbstractAttribute } from './AbstractAttribute';
import { OptionalAttribute } from './OptionalAttribute';

export class StringAttribute extends AbstractAttribute<string> {

  private _min?: number;

  private _max?: number;

  private _regex?: RegExp;

  public constructor(
    min?: number, 
    max?: number, 
    regex?: RegExp
  ) {
    super();
    this._min = min;
    this._max = max;
    this._regex = regex;
  }

  public min(min: number): StringAttribute {
    this._min = min;
    return this;
  }

  public max(max: number): StringAttribute {
    this._max = max;
    return this;
  }

  public regex(regex: RegExp): StringAttribute {
    this._regex = regex;
    return this;
  }

  public optional(): OptionalAttribute<string> {
    return new OptionalAttribute(this);
  }

  public parse(input?: string): string {
    if (input === undefined) {
      throw new Error(`Attribute is required`);
    } else if (this._min !== undefined && input.length < this._min) {
      throw new Error(`Attribute must have min length ${this._min}, got ${input.length}`);
    } else if (this._max !== undefined && input.length > this._max) {
      throw new Error(`Attribute must have max length ${this._max}, got ${input.length}`);
    } else if (this._regex !== undefined && !this._regex.test(input)) {
      throw new Error(`Attribute must match "${this._regex}"`);
    } else {
      return input;
    }
  }

}
