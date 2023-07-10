import { XMLParser } from 'fast-xml-parser';
import { AbstractElement } from '../element/AbstractElement';

export class Parser<T> {

  private readonly _parser: XMLParser;

  private readonly _root: AbstractElement<T>;

  public constructor(root: AbstractElement<T>) {
    this._parser = new XMLParser({
      ignoreAttributes: false,
      isArray: (tagName, jPath, isLeafNode, isAttribute) => {
        return !isAttribute;
      },
    });
    this._root = root;
  }

  public parse(data: string): T {
    const value = this._parser.parse(data);
    return this._root.parse([value]);
  }

}
