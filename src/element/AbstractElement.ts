import { AbstractConverter } from '../converter/AbstractConverter';
import { ArrayConverter } from '../converter/ArrayConverter';
import { SingletonArrayConverter } from '../converter/SingletonArrayConverter';
import { XmlElement } from '../xml/XmlElement';

export abstract class AbstractElement<TOutput> extends AbstractConverter<XmlElement, TOutput> {}
