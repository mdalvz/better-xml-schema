export declare abstract class AbstractConverter<TInput, TOutput> {
    readonly input: TInput;
    readonly output: TOutput;
    abstract convert(input: TInput): TOutput;
}
