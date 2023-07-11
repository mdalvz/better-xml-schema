export const XML_RAW_ATTRIBUTES_NAME = '@_';

export const XML_RAW_TEXT_NAME = '#text';

export const XML_PARSER_OPTIONS = {
  ignoreAttributes: false,
  attributeNamePrefix: '',
  attributesGroupName: XML_RAW_ATTRIBUTES_NAME,
  alwaysCreateTextNode: true,
  ignoreDeclaration: true,
  isArray(name: string, jPath: string, isLeafNode: boolean, isAttribute: boolean): boolean {
    return !isAttribute;
  },
};

export type XmlRawElement = {
  [XML_RAW_ATTRIBUTES_NAME]: {
    [key: string]: string;
  };
} & {
  [XML_RAW_TEXT_NAME]: string;
} & {
  [key: string]: XmlRawElement[];
};
