"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function jsonSchema(formSchema) {
    var schema = {
        $schema: "http://json-schema.org/draft-04/schema#",
        title: formSchema.title,
        description: formSchema.introductoryText,
        type: 'object',
        properties: {}
    };
    /*
      Column mapping
    */
    formSchema.widgets
        .filter(function (widget) { return widget.type === 'formGroup'; })
        .forEach(function (widget) {
        widget.fields.forEach(function (field) {
            schema["properties"][field.column.slug] = {
                type: field.column.type,
                title: field.label || field.name || field.column.name,
                description: field.helpBlock || field.column.description
            };
        });
    });
    return schema;
}
exports.jsonSchema = jsonSchema;
