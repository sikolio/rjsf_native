import React, {Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Form } from '../../../jf'


export default class HelloWorld extends Component {
    render () {
        const { onPress, color } = this.props;
        const style = StyleSheet.create({
            helloWorld: {
                color: color,
                textAlign: 'center',
            }
        });
        const schema = {
            title: "Todo",
            type: "object",
            required: ["title"],
            properties: {
                title: {type: "string", title: "Title", default: "A new task"},
                done: {type: "boolean", title: "Done?", default: false}
            }
        };
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