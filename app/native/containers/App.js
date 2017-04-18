import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../style/styles';

import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';

import {
    toggleColor
} from '../../actions/actions';

class ReactNativeWeb extends Component {
    render () {
        const { dispatch, color, data } = this.props;
        
        return (
            <View style={appStyle.reactNativeWeb}>
                <Header />
                <HelloWorld
                    onPress={() => dispatch(toggleColor())}
                    color={color}
                />
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