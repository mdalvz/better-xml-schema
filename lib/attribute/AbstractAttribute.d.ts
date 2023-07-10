export declare abstract class AbstractAttribute<TOutput> {
    readonly _output: TOutput;
    abstract parse(input?: string): TOutput;
}
