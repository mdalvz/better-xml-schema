export declare abstract class AbstractElement<TOutput> {
    readonly _output: TOutput;
    abstract parse(input: any[]): TOutput;
}
