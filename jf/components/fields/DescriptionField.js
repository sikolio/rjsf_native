import React, { PropTypes } from "react";
import { View, Text, TextInput, Button } from 'react-native';


function DescriptionField(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <View />;
  }
  if (typeof description === "string") {
    return <Text id={id} className="field-description">{description}</Text>;
  } else {
    return <View id={id} className="field-description">{description}</View>;
  }
}

if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };
}

export default DescriptionField;
