import { AbstractElement } from './AbstractElement';
import { wrapper } from './Wrapper';

export class ElementArray<T> extends AbstractElement<T[]> {

  private _target: AbstractElement<T>;

  private _length?: number;

  private _min?: number;

  private _max?: number;

  public constructor(target: AbstractElement<T>) {
    super();
    this._target = target;
  }

  public target(target: AbstractElement<T>): ElementArray<T> {
    this._target = target;
    return this;
  }

  public length(length: number): ElementArray<T> {
    this._length = length;
    return this;
  }

  public min(min: number): ElementArray<T> {
    this._min = min;
    return this;
  }

  public max(max: number): ElementArray<T> {
    this._max = max;
    return this;
  }

  public parse(input: any[]): T[] {
    if (this._length !== undefined && input.length !== this._length) {
      throw new Error(`Expected ${this._length} elements, got ${input.length}`);
    } else if (this._min !== undefined && input.length < this._min) {
      throw new Error(`Expected at least ${this._min} elements, got ${input.length}`);
    } else if (this._max !== undefined && input.length > this._max) {
      throw new Error(`Expected at most ${this._min} elements, got ${input.length}`);
    }
    const result: T[] = [];
    for (const [index, value] of input.entries()) {
      wrapper(`At index ${index}:`, () => {
        result.push(this._target.parse([value]));
      });
    }
    return result;
  }

}
