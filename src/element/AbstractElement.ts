export abstract class AbstractElement<TOutput> {

  public readonly _output!: TOutput;

  public abstract parse(input: any[]): TOutput;

}
