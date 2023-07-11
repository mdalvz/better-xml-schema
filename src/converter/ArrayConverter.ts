import { AbstractConverter } from './AbstractConverter';
import { AbstractArrayConverter } from './AbstractArrayConverter';

export interface ArrayConverterDef<TInput, TOutput> {
  target: AbstractConverter<TInput, TOutput>;
  length?: number;
  min?: number;
  max?: number;
}

export class ArrayConverter<TInput, TOutput> extends AbstractArrayConverter<TInput, TOutput[]> {

  private readonly def: ArrayConverterDef<TInput, TOutput>;

  public constructor(def: ArrayConverterDef<TInput, TOutput>) {
    super();
    this.def = def;
  }

  public target(target: AbstractConverter<TInput, TOutput>): ArrayConverter<TInput, TOutput> {
    return new ArrayConverter<TInput, TOutput>({ ...this.def, target });
  }

  public length(length: number): ArrayConverter<TInput, TOutput> {
    return new ArrayConverter<TInput, TOutput>({ ...this.def, length });
  }

  public min(min: number): ArrayConverter<TInput, TOutput> {
    return new ArrayConverter<TInput, TOutput>({ ...this.def, min });
  }

  public max(max: number): ArrayConverter<TInput, TOutput> {
    return new ArrayConverter<TInput, TOutput>({ ...this.def, max });
  }

  public convert(input: TInput[] | undefined): TOutput[] {
    input = input || [];
    if (this.def.length !== undefined && this.def.length !== input.length) {
      throw new Error(`Expected ${this.def.length} elements, got ${input.length}`);
    }
    if (this.def.min !== undefined && this.def.min > input.length) {
      throw new Error(`Expected at least ${this.def.min} elements, got ${input.length}`);
    }
    if (this.def.max !== undefined && this.def.max < input.length) {
      throw new Error(`Expected at most ${this.def.max} elements, got ${input.length}`);
    }
    return input.map((e) => this.def.target.convert(e));
  }

}
