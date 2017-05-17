import React, { PropTypes } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const REQUIRED_FIELD_SYMBOL = "*";

function TitleField(props) {
  const { id, title, required } = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  const style = StyleSheet.create({
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      height: 40,
      paddingTop: 5,
      paddingBottom: 5
    }
  })
  return <Text style={style.title} id={id}>{legend}</Text>;
}

if (process.env.NODE_ENV !== "production") {
  TitleField.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
  };
}

export default TitleField;
