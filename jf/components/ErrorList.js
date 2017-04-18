import React from "react";
import { View, Text, TextInput, Button } from 'react-native';

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <View>
      <View>
        <Text>Errors</Text>
      </View>
      <View>
        {errors.map((error, i) => {
          return (
            <Text key={i}>
              {error.stack}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
