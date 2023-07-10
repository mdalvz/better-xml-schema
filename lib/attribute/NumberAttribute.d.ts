import { AbstractAttribute } from './AbstractAttribute';
import { OptionalAttribute } from './OptionalAttribute';
export declare class NumberAttribute extends AbstractAttribute<number> {
    private _min?;
    private _max?;
    private _positive?;
    private _negative?;
    private _integer?;
    constructor(min?: number, max?: number, positive?: boolean, negative?: boolean, integer?: boolean);
    min(min: number): NumberAttribute;
    max(max: number): NumberAttribute;
    positive(): NumberAttribute;
    negative(): NumberAttribute;
    integer(): NumberAttribute;
    optional(): OptionalAttribute<number>;
    parse(input?: string): number;
}
