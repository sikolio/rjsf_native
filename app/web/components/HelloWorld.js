import React, { Component, PropTypes } from 'react';
import Form from 'react-jsonschema-form';

export default class HelloWorld extends Component {
    render () {
        const { onClick, color } = this.props;
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
            <div className="hello-world" onClick={onClick} style={{color: color}}>
                <h1>Hello World</h1>
                <Form schema={schema}/>
            </div>
        );
    }
}

HelloWorld.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
}