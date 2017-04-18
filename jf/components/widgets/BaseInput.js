import React, { PropTypes } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    options,
    schema,
    formContext,
    registry,
    ...inputProps
  } = props;
  const _onChange = (value) => {
    return props.onChange(value === "" ? undefined : value);
  };


  const style = StyleSheet.create({
    double: {
      flexGrow: 2,
      backgroundColor: 'white',
      height: 20,
    }
  })
  return (
    <TextInput
      style={style.double}
      {...inputProps}
      value={value == null ? "" : value}
      onChangeText={_onChange}
      onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
    />
  );
}

BaseInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

export default BaseInput;
