import { AbstractAttribute } from './AbstractAttribute';
export declare class BooleanAttribute extends AbstractAttribute<boolean> {
    constructor();
    convert(input: string | undefined): boolean;
}
