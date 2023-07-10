import { AbstractElement } from '../element/AbstractElement';
export declare class Parser<T> {
    private readonly _parser;
    private readonly _root;
    constructor(root: AbstractElement<T>);
    parse(data: string): T;
    parseFile(path: string): Promise<T>;
}
