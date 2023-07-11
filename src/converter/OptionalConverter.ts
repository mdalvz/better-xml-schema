import { AbstractConverter } from './AbstractConverter';

export interface OptionalConverterDef<TInput, TOutput> {
  target: AbstractConverter<TInput, TOutput>;
}

export class OptionalConverter<TInput, TOutput> extends AbstractConverter<TInput | undefined, TOutput | undefined> {

  private readonly def: OptionalConverterDef<TInput, TOutput>;

  public constructor(def: OptionalConverterDef<TInput, TOutput>) {
    super();
    this.def = def;
  }

  public target(target: AbstractConverter<TInput, TOutput>): OptionalConverter<TInput, TOutput> {
    return new OptionalConverter<TInput, TOutput>({ ...this.def, target });
  }

  public convert(input: TInput | undefined): TOutput | undefined {
    if (input === undefined) {
      return undefined;
    } else {
      return this.def.target.convert(input);
    }
  }

}
