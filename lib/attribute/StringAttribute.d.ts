import { AbstractAttribute } from './AbstractAttribute';
import { OptionalAttribute } from './OptionalAttribute';
export declare class StringAttribute extends AbstractAttribute<string> {
    private _min?;
    private _max?;
    private _regex?;
    constructor(min?: number, max?: number, regex?: RegExp);
    min(min: number): StringAttribute;
    max(max: number): StringAttribute;
    regex(regex: RegExp): StringAttribute;
    optional(): OptionalAttribute<string>;
    parse(input?: string): string;
}
