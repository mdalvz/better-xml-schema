import { AbstractConverter } from './AbstractConverter';
import { AbstractArrayConverter } from './AbstractArrayConverter';
export interface SingletonArrayConverterDef<TInput, TOutput> {
    target: AbstractConverter<TInput, TOutput>;
}
export declare class SingletonArrayConverter<TInput, TOutput> extends AbstractArrayConverter<TInput, TOutput> {
    private readonly def;
    constructor(def: SingletonArrayConverterDef<TInput, TOutput>);
    convert(input: TInput[] | undefined): TOutput;
}
