import { AbstractAttribute } from './AbstractAttribute';

export class OptionalAttribute<TOutput> extends AbstractAttribute<TOutput | undefined> {

  private _target: AbstractAttribute<TOutput>;

  public constructor(target: AbstractAttribute<TOutput>) {
    super();
    this._target = target;
  }

  public target(target: AbstractAttribute<TOutput>): OptionalAttribute<TOutput> {
    this._target = target;
    return this;
  }

  public parse(input?: string): TOutput | undefined {
    if (input === undefined) {
      return undefined;
    } else {
      return this._target.parse(input);
    }
  }
  
}
