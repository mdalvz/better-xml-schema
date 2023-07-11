import { AbstractAttribute } from './AbstractAttribute';

export interface NumberAttributeDef {
  min?: number;
  max?: number;
  positive?: boolean;
  negative?: boolean;
  integer?: boolean;
}

export class NumberAttribute extends AbstractAttribute<number> {

  private readonly def: NumberAttributeDef;
  
  public constructor(def: NumberAttributeDef) {
    super();
    this.def = def;
  }

  public min(min: number): NumberAttribute {
    return new NumberAttribute({ ...this.def, min });
  }

  public max(max: number): NumberAttribute {
    return new NumberAttribute({ ...this.def, max });
  }

  public positive(): NumberAttribute {
    return new NumberAttribute({ ...this.def, positive: true });
  }

  public negative(): NumberAttribute {
    return new NumberAttribute({ ...this.def, negative: true });
  }

  public integer(): NumberAttribute {
    return new NumberAttribute({ ...this.def, integer: true });
  }

  public convert(input: string | undefined): number {
    if (input === undefined) {
      throw new Error(`Attribute is required`);
    }
    const result = parseFloat(input);
    if (isNaN(result)) {
      throw new Error(`Attribute must be a number, got "${input}"`);
    } else if (this.def.integer && !Number.isInteger(result)) {
      throw new Error(`Attribute must be an integer, got "${input}"`);
    } else if (this.def.positive && !(result > 0)) {
      throw new Error(`Attribute must be positive, got "${input}"`);
    } else if (this.def.negative && !(result < 0)) {
      throw new Error(`Attribute must be negative, got "${input}"`);
    } else if (this.def.min !== undefined && result < this.def.min) {
      throw new Error(`Attribute must have min value ${this.def.min}, got "${input}"`);
    } else if (this.def.max !== undefined && result > this.def.max) {
      throw new Error(`Attribute must have max value ${this.def.max}, got "${input}"`);
    } else {
      return result;
    }
  }

}
