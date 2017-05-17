import { JSONSchema, DraftSchema } from 'models';
/**
 * Creates JSON Schema from Table and Columns models.
 *
 * @export
 * @param {Table} table The table to be represented.
 * @param {Column[]} columns Array of columns of the table.
 * @returns {JSONSchema} Final parsed JSON Schema.
 *
 * @todo Add Form and Field models and make the parsing, overriding default values.
 */
export declare function jsonSchema(formSchema: DraftSchema.schema): JSONSchema;
