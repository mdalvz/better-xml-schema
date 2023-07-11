import { AbstractAttribute } from './AbstractAttribute';
export interface StringAttributeDef {
    min?: number;
    max?: number;
    regex?: RegExp;
}
export declare class StringAttribute extends AbstractAttribute<string> {
    private readonly def;
    constructor(def: StringAttributeDef);
    min(min: number): StringAttribute;
    max(max: number): StringAttribute;
    regex(regex: RegExp): StringAttribute;
    convert(input: string | undefined): string;
}
