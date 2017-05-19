export const URL = 'http://174.138.70.49:3000';
export const TOGGLE_COLOR = 'TOGGLE_COLOR';
export const EXAMPLE_REQUEST_START = 'EXAMPLE_REQUEST_START';
export const EXAMPLE_REQUEST_DATA = 'EXAMPLE_REQUEST_DATA';

export const EXAMPLE_UI_SCHEMA = {
  "firstName": {
    "ui:autofocus": true
  },
  "bio": {
    "ui:widget": "textarea"
  }
};

export const EXAMPLE_SCHEMA = {
        "title": "A registration form",
        "description": "A simple form example.",
        "type": "object",
        "required": [
            "firstName",
            "lastName"
        ],
        "properties": {
            "firstName": {
            "type": "string",
            "title": "First name",
            },
            "lastName": {
            "type": "string",
            "title": "Last name"
            },
            "bio": {
            "type": "string",
            "title": "Bio"
            }
        }
    };
