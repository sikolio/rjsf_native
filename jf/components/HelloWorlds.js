import React, {Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class HelloWorlds extends Component {
    render () {
        const { onPress, color, style } = this.props;
        return (
            <View>
                <Text onPress={onPress} style={style.helloWorld}>Hello World</Text>
            </View>
        );
    }
}

HelloWorlds.propTypes = {
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
}