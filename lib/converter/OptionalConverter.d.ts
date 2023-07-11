import { AbstractConverter } from './AbstractConverter';
export interface OptionalConverterDef<TInput, TOutput> {
    target: AbstractConverter<TInput, TOutput>;
}
export declare class OptionalConverter<TInput, TOutput> extends AbstractConverter<TInput | undefined, TOutput | undefined> {
    private readonly def;
    constructor(def: OptionalConverterDef<TInput, TOutput>);
    target(target: AbstractConverter<TInput, TOutput>): OptionalConverter<TInput, TOutput>;
    convert(input: TInput | undefined): TOutput | undefined;
}
