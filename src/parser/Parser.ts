import { readFile } from 'fs/promises';
import { XmlParser } from '../xml/XmlParser';
import { AbstractElement } from '../element/AbstractElement';

export class Parser<TOutput> {

  private readonly parser: XmlParser;

  private readonly root: AbstractElement<TOutput>;

  public constructor(root: AbstractElement<TOutput>) {
    this.parser = new XmlParser();
    this.root = root;
  }

  public parse(data: string): TOutput {
    const value = this.parser.parse(data);
    return this.root.convert(value);
  }

  public async parseFile(path: string): Promise<TOutput> {
    const data = await readFile(path, {
      encoding: 'utf8',
    });
    return this.parse(data);
  }

}
