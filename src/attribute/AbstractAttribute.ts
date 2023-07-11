import { AbstractConverter } from '../converter/AbstractConverter';

export abstract class AbstractAttribute<TOutput> extends AbstractConverter<string | undefined, TOutput> {}
