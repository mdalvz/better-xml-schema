import { AbstractAttribute } from './AbstractAttribute';
import { OptionalAttribute } from './OptionalAttribute';

export class NumberAttribute extends AbstractAttribute<number> {

  private _min?: number;

  private _max?: number;

  private _positive?: boolean;

  private _negative?: boolean;

  private _integer?: boolean;

  public constructor(
    min?: number,
    max?: number,
    positive?: boolean,
    negative?: boolean,
    integer?: boolean
  ) {
    super();
    this._min = min;
    this._max = max;
    this._positive = positive;
    this._negative = negative;
    this._integer = integer;
  }

  public min(min: number): NumberAttribute {
    this._min = min;
    return this;
  }

  public max(max: number): NumberAttribute {
    this._max = max;
    return this;
  }

  public positive(): NumberAttribute {
    this._positive = true;
    return this;
  }

  public negative(): NumberAttribute {
    this._negative = true;
    return this;
  }

  public integer(): NumberAttribute {
    this._integer = true;
    return this;
  }

  public optional(): OptionalAttribute<number> {
    return new OptionalAttribute(this);
  }

  public parse(input?: string): number {
    if (input === undefined) {
      throw new Error(`Attribute is required`);
    }
    const result = parseFloat(input);
    if (isNaN(result)) {
      throw new Error(`Attribute must be a number, got "${input}"`);
    } else if (this._integer && !Number.isInteger(result)) {
      throw new Error(`Attribute must be an integer, got "${input}"`);
    } else if (this._positive && !(result > 0)) {
      throw new Error(`Attribute must be positive, got "${input}"`);
    } else if (this._negative && !(result < 0)) {
      throw new Error(`Attribute must be negative, got "${input}"`);
    } else if (this._min !== undefined && result < this._min) {
      throw new Error(`Attribute must have min value ${this._min}, got "${input}"`);
    } else if (this._max !== undefined && result > this._max) {
      throw new Error(`Attribute must have max value ${this._max}, got "${input}"`);
    } else {
      return result;
    }
  }

}
