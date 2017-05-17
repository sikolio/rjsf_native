/**
 * Interface representing a simple JSON Schema recursively. Most of the properties are optional.
 *
 * @export
 * @interface JSONSchema
 */
export interface JSONSchema {
    $schema?: string;
    title?: string;
    description?: string;
    type: string;
    properties?: {
        string: JSONSchema;
    };
}
