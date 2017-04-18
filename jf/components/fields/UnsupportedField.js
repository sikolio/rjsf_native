import React from "react";
import { View, Text, TextInput, Button } from 'react-native';

export default function UnsupportedField({ schema }) {
  // XXX render json as string so dev can inspect faulty subschema
  return (
    <Text>
      Unsupported field schema {JSON.stringify(schema, null, 2)}.
    </Text>
  );
}
