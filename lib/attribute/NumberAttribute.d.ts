import { AbstractAttribute } from './AbstractAttribute';
export interface NumberAttributeDef {
    min?: number;
    max?: number;
    positive?: boolean;
    negative?: boolean;
    integer?: boolean;
}
export declare class NumberAttribute extends AbstractAttribute<number> {
    private readonly def;
    constructor(def: NumberAttributeDef);
    min(min: number): NumberAttribute;
    max(max: number): NumberAttribute;
    positive(): NumberAttribute;
    negative(): NumberAttribute;
    integer(): NumberAttribute;
    convert(input: string | undefined): number;
}
