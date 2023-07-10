import { AbstractAttribute } from './AbstractAttribute';
export declare class OptionalAttribute<TOutput> extends AbstractAttribute<TOutput | undefined> {
    private _target;
    constructor(target: AbstractAttribute<TOutput>);
    target(target: AbstractAttribute<TOutput>): OptionalAttribute<TOutput>;
    parse(input?: string): TOutput | undefined;
}
