import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import {
    toggleColor
} from '../../actions/actions';

class ReactNativeWeb extends Component {
    render () {
        const { dispatch, color, data } = this.props;

        return (
            <div className="react-native-web">
                <Header />
                <HelloWorld 
                    onClick={() => dispatch(toggleColor())}
                    color={color}
                />
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