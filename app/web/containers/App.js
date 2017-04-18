import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import {
    toggleColor
} from '../../actions/actions';
import Form from 'react-jsonschema-form';
import { EXAMPLE_SCHEMA } from '../../constants/Constants'

class ReactNativeWeb extends Component {
    render () {
        const { dispatch, color, data } = this.props;

        return (
            <div className="react-native-web">
                <Form schema={EXAMPLE_SCHEMA}/>
            </div>
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