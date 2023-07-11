import { AbstractConverter } from './AbstractConverter';

export abstract class AbstractArrayConverter<TInput, TOutput> extends AbstractConverter<TInput[] | undefined, TOutput> {}
