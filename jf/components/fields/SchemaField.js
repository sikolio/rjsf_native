import React, { PropTypes } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import {
  isMultiSelect,
  retrieveSchema,
  getDefaultRegistry,
  isFilesArray,
  deepEquals,
} from "../../utils";
import UnsupportedField from "./UnsupportedField";

const REQUIRED_FIELD_SYMBOL = "*";
const COMPONENT_TYPES = {
  array: "ArrayField",
  boolean: "BooleanField",
  integer: "NumberField",
  number: "NumberField",
  object: "ObjectField",
  string: "StringField",
};

function getFieldComponent(schema, uiSchema, fields) {
  const field = uiSchema["ui:field"];
  if (typeof field === "function") {
    return field;
  }
  if (typeof field === "string" && field in fields) {
    return fields[field];
  }
  const componentName = COMPONENT_TYPES[schema.type];
  return componentName in fields ? fields[componentName] : UnsupportedField;
}

function Label(props) {
  const { label, required, id } = props;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <View />;
  }
  const style = StyleSheet.create({
    double: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5
    }
  })
  return (
    <Text style={style.double}>
      {required ? label + REQUIRED_FIELD_SYMBOL : label}
    </Text>
  );
}

function Help(props) {
  const { help } = props;
  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return <View />;
  }
  if (typeof help === "string") {
    return <Text>{help}</Text>;
  }
  return <View>{help}</View>;
}

function ErrorList(props) {
  const { errors = [] } = props;
  if (errors.length === 0) {
    return <View />;
  }
  return (
    <View>
      <View>
        {errors.map((error, index) => {
          return <Text className="text-danger" key={index}>{error}</Text>;
        })}
      </View>
    </View>
  );
}

function DefaultTemplate(props) {
  const {
    id,
    classNames,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
  } = props;
  if (hidden) {
    return children;
  }

  const style = StyleSheet.create({
    double: {
      flexGrow: 2
    }
  })

  return (
    <View style={style.double}>
      {displayLabel && <Label label={label} required={required} id={id} />}
      {displayLabel && description ? description : null}
      {children}
      {errors}
      {help}
    </View>
  );
}

if (process.env.NODE_ENV !== "production") {
  DefaultTemplate.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
    errors: PropTypes.element,
    rawErrors: PropTypes.arrayOf(PropTypes.string),
    help: PropTypes.element,
    rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.element,
    rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    hidden: PropTypes.bool,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    displayLabel: PropTypes.bool,
    fields: PropTypes.object,
    formContext: PropTypes.object,
  };
}

DefaultTemplate.defaultProps = {
  hidden: false,
  readonly: false,
  required: false,
  displayLabel: true,
};

function SchemaFieldRender(props) {
  const { uiSchema, errorSchema, idSchema, name, required, registry } = props;
  const {
    definitions,
    fields,
    formContext,
    FieldTemplate = DefaultTemplate,
  } = registry;
  const schema = retrieveSchema(props.schema, definitions);
  const FieldComponent = getFieldComponent(schema, uiSchema, fields);
  const { DescriptionField } = fields;
  const disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
  const readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
  const autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);

  if (Object.keys(schema).length === 0) {
    // See #312: Ensure compatibility with old versions of React.
    return <View />;
  }

  let displayLabel = true;
  if (schema.type === "array") {
    displayLabel = isMultiSelect(schema) || isFilesArray(schema, uiSchema);
  }
  if (schema.type === "object") {
    displayLabel = false;
  }
  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
    displayLabel = false;
  }
  if (uiSchema["ui:field"]) {
    displayLabel = false;
  }

  const { __errors, ...fieldErrorSchema } = errorSchema;

  // See #439: uiSchema: Don't pass consumed class names to child components
  const field = (
    <FieldComponent
      {...props}
      schema={schema}
      uiSchema={{ ...uiSchema, classNames: undefined }}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      errorSchema={fieldErrorSchema}
      formContext={formContext}
    />
  );

  const { type } = schema;
  const id = idSchema.$id;
  const label = props.schema.title || schema.title || name;
  const description = props.schema.description || schema.description;
  const errors = __errors;
  const help = uiSchema["ui:help"];
  const hidden = uiSchema["ui:widget"] === "hidden";
  const classNames = [
    "form-group",
    "field",
    `field-${type}`,
    errors && errors.length > 0 ? "field-error has-error has-danger" : "",
    uiSchema.classNames,
  ]
    .join(" ")
    .trim();

  const fieldProps = {
    description: (
      <DescriptionField
        id={id + "__description"}
        description={description}
        formContext={formContext}
      />
    ),
    rawDescription: description,
    help: <Help help={help} />,
    rawHelp: typeof help === "string" ? help : undefined,
    errors: <ErrorList errors={errors} />,
    rawErrors: errors,
    id,
    label,
    hidden,
    required,
    readonly,
    displayLabel,
    classNames,
    formContext,
    fields,
    schema,
    uiSchema,
  };

  return <FieldTemplate {...fieldProps}>{field}</FieldTemplate>;
}

class SchemaField extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if schemas are equal idSchemas will be equal as well,
    // so it is not necessary to compare
    return !deepEquals(
      { ...this.props, idSchema: undefined },
      { ...nextProps, idSchema: undefined }
    );
  }

  render() {
    return SchemaFieldRender(this.props);
  }
}

SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  registry: getDefaultRegistry(),
  disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  SchemaField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    registry: PropTypes.shape({
      widgets: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
      ).isRequired,
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      ArrayFieldTemplate: PropTypes.func,
      FieldTemplate: PropTypes.func,
      formContext: PropTypes.object.isRequired,
    }),
  };
}

export default SchemaField;
