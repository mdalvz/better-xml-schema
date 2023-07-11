export declare const XML_RAW_ATTRIBUTES_NAME = "@_";
export declare const XML_RAW_TEXT_NAME = "#text";
export declare const XML_PARSER_OPTIONS: {
    ignoreAttributes: boolean;
    attributeNamePrefix: string;
    attributesGroupName: string;
    alwaysCreateTextNode: boolean;
    ignoreDeclaration: boolean;
    isArray(name: string, jPath: string, isLeafNode: boolean, isAttribute: boolean): boolean;
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
