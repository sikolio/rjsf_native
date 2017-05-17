import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';

import { draftSample } from '../../../form-designer-parser/lib/samples';
import { jsonSchema } from '../../../form-designer-parser';

// import {
//     toggleColor
// } from '../../actions/actions';
import Form from 'react-jsonschema-form';

import { EXAMPLE_SCHEMA } from '../../constants/Constants'

class ReactNativeWeb extends Component {
    render () {
      const jsf = jsonSchema(draftSample);
      // const { dispatch, color, data } = this.props;

      return (
        <div className="container">
          <Form schema={jsf}/>
        </div>
      );
    }
}

// ReactNativeWeb.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     color: PropTypes.string.isRequired,
//     data: PropTypes.object.isRequired
// }

const select = state => state;

export default connect(select)(ReactNativeWeb);
