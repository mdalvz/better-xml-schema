import { AbstractConverter } from './AbstractConverter';
import { AbstractArrayConverter } from './AbstractArrayConverter';

export interface SingletonArrayConverterDef<TInput, TOutput> {
  target: AbstractConverter<TInput, TOutput>;
}

export class SingletonArrayConverter<TInput, TOutput> extends AbstractArrayConverter<TInput, TOutput> {

  private readonly def: SingletonArrayConverterDef<TInput, TOutput>;

  public constructor(def: SingletonArrayConverterDef<TInput, TOutput>) {
    super();
    this.def = def;
  }

  public convert(input: TInput[] | undefined): TOutput {
    if (input === undefined) {
      throw new Error(`Expected 1 elements, got undefined`);
    }
    if (input.length !== 1) {
      throw new Error(`Expected 1 elements, got ${input.length}`);
    }
    return this.def.target.convert(input[0]);
  }

}
