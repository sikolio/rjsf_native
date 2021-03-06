import React, {Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';


export default class HelloWorld extends Component {
    render () {
        const { onPress, color, style } = this.props;
        return (
            <View>
                <Text onPress={onPress} style={style.helloWorld}>Hello World</Text>
            </View>
        );
    }
}

HelloWorld.propTypes = {
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
}