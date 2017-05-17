import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../style/styles';

import { draftSample } from '../../../form-designer-parser/lib/samples';

import { toDraftSchema, jsonSchema } from '../../../form-designer-parser';

import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import Form from '../../../jf/components/Form';
import { URL, EXAMPLE_SCHEMA, EXAMPLE_UI_SCHEMA } from '../../constants/Constants';

import {
    toggleColor
} from '../../actions/actions';

class ReactNativeWeb extends Component {

    jsf = jsonSchema(draftSample);
    schema = EXAMPLE_SCHEMA;
    uiSchema = EXAMPLE_UI_SCHEMA;
    getMoviesFromApiAsync() {
      return fetch(URL + '/forms')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    render () {
      this.getMoviesFromApiAsync();
        const { dispatch, color, data } = this.props;
        const style = StyleSheet.create({
            helloWorld: {
                color: color,
                textAlign: 'center',
            },
        });
        return (
          <View style={appStyle.reactNativeWeb}>
            <Form schema={this.jsf}/>
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
