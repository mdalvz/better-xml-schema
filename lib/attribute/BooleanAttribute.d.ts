import { AbstractAttribute } from './AbstractAttribute';
import { OptionalAttribute } from './OptionalAttribute';
export declare class BooleanAttribute extends AbstractAttribute<boolean> {
    constructor();
    optional(): OptionalAttribute<boolean>;
    parse(input?: string): boolean;
}
