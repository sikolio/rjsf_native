import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';

import { draftSample } from '../../../form-designer-parser/lib/samples';
import { toDraftSchema, jsonSchema, deepParseObject } from '../../../form-designer-parser';

import { toggleColor } from '../../actions/actions';
import Form from 'react-jsonschema-form';

import { URL, EXAMPLE_SCHEMA } from '../../constants/Constants';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class ReactNativeWeb extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/:id' component={App} />
      </Router>
    )
  }
}

class App extends Component {
    constructor(props) {
      super(props);
      form: {};
      this.state = {
        schema: {}
      };
      fetch(URL + '/forms/' + this.props.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.form = responseJson;
        fetch(URL + `/tables/${this.form.table_id}/columns`)
        .then((response) => response.json())
        .then((columns) => {
          this.setState({
            schema: jsonSchema(toDraftSchema(deepParseObject(this.form), deepParseObject(columns)))
          })
        })
      })

    }

    submitForm(formData) {
      const schema = formData.formData;
      console.log(schema);
    }

    render () {
      const { dispatch, color, data } = this.props;

      return (
        <div className="container">
          <Form schema={this.state.schema}
          onSubmit={this.submitForm}/>
        </div>
      );
    }
}

App.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // color: PropTypes.string.isRequired,
    // data: PropTypes.object.isRequired
}

const select = state => state;

export default connect(select)(ReactNativeWeb);
