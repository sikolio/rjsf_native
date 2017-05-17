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
export function jsonSchema(formSchema: DraftSchema.schema): JSONSchema {
  let schema = {
    $schema: "http://json-schema.org/draft-04/schema#",
    title: formSchema.title,
    description: formSchema.introductoryText,
    type: 'object',
    properties: {} as { string : JSONSchema }
  }

  /*
    Column mapping
  */
  formSchema.widgets
    .filter((widget) => widget.type === 'formGroup')
    .forEach((widget) => {
      widget.fields.forEach((field) => {
        schema["properties"][field.column.slug] = {
          type: field.column.type,
          title: field.label || field.name || field.column.name,
          description: field.helpBlock || field.column.description
        };
      })
    })

  return schema;
}