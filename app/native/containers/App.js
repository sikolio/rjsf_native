import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../style/styles';

import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import Form from '../../../jf/components/Form';
import {EXAMPLE_SCHEMA} from '../../constants/Constants';

import {
    toggleColor
} from '../../actions/actions';

class ReactNativeWeb extends Component {
    schema = EXAMPLE_SCHEMA
    render () {
        const { dispatch, color, data } = this.props;
        const style = StyleSheet.create({
            helloWorld: {
                color: color,
                textAlign: 'center',
            },
        });
        return (
            <View style={appStyle.reactNativeWeb}>
                <Form schema={this.schema} formData={this.formData}/>
            </View>
        );
    }
}

ReactNativeWeb.propTypes = {
    dispatch: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}

const select = state => state;

export default connect(select)(ReactNativeWeb);