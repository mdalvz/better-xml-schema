export abstract class AbstractConverter<TInput, TOutput> {

  public readonly input!: TInput;

  public readonly output!: TOutput;

  public abstract convert(input: TInput): TOutput;

}
