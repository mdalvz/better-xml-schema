import { AbstractElement } from './AbstractElement';
export declare class ElementArray<T> extends AbstractElement<T[]> {
    private _target;
    private _length?;
    private _min?;
    private _max?;
    constructor(target: AbstractElement<T>);
    target(target: AbstractElement<T>): ElementArray<T>;
    length(length: number): ElementArray<T>;
    min(min: number): ElementArray<T>;
    max(max: number): ElementArray<T>;
    parse(input: any[]): T[];
}
