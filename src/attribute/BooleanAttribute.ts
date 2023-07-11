import { AbstractAttribute } from './AbstractAttribute';

export class BooleanAttribute extends AbstractAttribute<boolean> {

  public constructor() {
    super();
  }

  public convert(input: string | undefined): boolean {
    if (input === undefined) {
      throw new Error(`Attribute is required`);
    } else if (['1', 'true', 't'].includes(input.toLowerCase())) {
      return true;
    } else if (['0', 'false', 'f'].includes(input.toLowerCase())) {
      return false;
    } else {
      throw new Error(`Attribute must be a boolean, got "${input}"`);
    }
  }

}
