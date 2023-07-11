import { AbstractConverter } from './AbstractConverter';
import { AbstractArrayConverter } from './AbstractArrayConverter';
export interface ArrayConverterDef<TInput, TOutput> {
    target: AbstractConverter<TInput, TOutput>;
    length?: number;
    min?: number;
    max?: number;
}
export declare class ArrayConverter<TInput, TOutput> extends AbstractArrayConverter<TInput, TOutput[]> {
    private readonly def;
    constructor(def: ArrayConverterDef<TInput, TOutput>);
    target(target: AbstractConverter<TInput, TOutput>): ArrayConverter<TInput, TOutput>;
    length(length: number): ArrayConverter<TInput, TOutput>;
    min(min: number): ArrayConverter<TInput, TOutput>;
    max(max: number): ArrayConverter<TInput, TOutput>;
    convert(input: TInput[] | undefined): TOutput[];
}
