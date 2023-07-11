import { AbstractElement } from '../element/AbstractElement';
export declare class Parser<TOutput> {
    private readonly parser;
    private readonly root;
    constructor(root: AbstractElement<TOutput>);
    parse(data: string): TOutput;
    parseFile(path: string): Promise<TOutput>;
}
