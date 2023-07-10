export abstract class AbstractAttribute<TOutput> {

  public readonly _output!: TOutput;

  public abstract parse(input?: string): TOutput;

}
