"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draftSample = {
    formId: '1',
    tableId: '1',
    state: {
        saved: true,
        lastSaved: '5 minutes ago',
        requiresRedraw: true,
        widgetCount: 1,
    },
    title: 'Satisfaction Reports',
    introductoryText: 'Customer satisfaction reports for 2016. This is the first text provided to the user on top of the form.',
    greetingText: 'Thank you for answering this form! This is the text provided when the form is already submitted in order to thank the user for his submission.',
    published: false,
    acceptsResponses: false,
    showResetButton: true,
    startDate: '',
    endDate: '',
    widgets: [
        {
            id: 1,
            formId: '1',
            type: 'formGroup',
            settings: {
                columns: 1
            },
            state: {
                requiresRedraw: false,
                fieldCount: 1
            },
            fields: [
                {
                    inFormId: '1',
                    fieldId: '1',
                    widgetType: 'boolean',
                    label: 'Name',
                    name: 'name',
                    readonly: false,
                    disabled: false,
                    placeholder: '',
                    helpBlock: '',
                    defaultValue: '',
                    column: {
                        id: '1',
                        slug: 'name',
                        tableId: '1',
                        name: 'Name',
                        description: 'Your full name',
                        type: 'boolean',
                        version: '15',
                        createdAt: '2017-04-06T22:24:14.887+00:00',
                        modified: {
                            name: 'John Doe',
                            at: '2017-04-24T15:46:28.479+00:00',
                            id: '1'
                        }
                    },
                    widgetSettings: {}
                }
            ]
        },
    ],
    unusedColumns: [
        {
            id: '3',
            slug: 'test1',
            tableId: '1',
            name: 'Last name',
            description: 'Client last name',
            type: 'string',
            version: '7',
            createdAt: '2017-04-12T19:57:35.704+00:00',
            modified: {
                name: 'John Doe',
                at: '2017-05-07T23:01:38.684+00:00',
                id: '1'
            }
        },
        {
            id: '5',
            slug: 'test2',
            tableId: '1',
            name: 'test1',
            description: 'asasas',
            type: 'string',
            version: '7',
            createdAt: '2017-05-04T18:54:49.025+00:00',
            modified: {
                name: 'John Doe',
                at: '2017-05-07T23:01:38.684+00:00',
                id: '1'
            }
        }
    ],
    modified: {
        name: 'John Doe',
        at: '2017-05-07T23:01:38.684+00:00',
        id: '1'
    }
};
exports.formSample = { formId: '1',
    tableId: '1',
    title: 'Satisfaction Reports',
    introductoryText: 'Customer satisfaction reports for 2016. This is the first text provided to the user on top of the form.',
    greetingText: 'Thank you for answering this form! This is the text provided when the form is already submitted in order to thank the user for his submission.',
    published: false,
    acceptsResponses: false,
    showResetButton: true,
    startDate: '',
    endDate: '',
    widgets: [{ id: 1,
            formId: '1',
            type: 'formGroup',
            settings: { columns: 1 },
            fields: [{ fieldId: '1',
                    widgetType: 'boolean',
                    label: 'Name',
                    name: 'name',
                    readonly: false,
                    disabled: false,
                    placeholder: '',
                    helpBlock: '',
                    defaultValue: '',
                    widgetSettings: {},
                    columnId: '1' }] },
        { id: 2,
            formId: '1',
            type: 'formGroup',
            settings: {},
            fields: [{
                    fieldId: '1',
                    widgetType: 'string',
                    label: 'test2',
                    name: 'test',
                    readonly: false,
                    disabled: false,
                    placeholder: '',
                    helpBlock: '',
                    defaultValue: '',
                    widgetSettings: {},
                    columnId: '6'
                }] }],
    modified: { name: 'John Doe',
        at: '2017-05-07T23:01:38.684+00:00',
        id: '1' },
    unusedColumnsIds: ['3', '5'] };
exports.columnSamples = [
    {
        id: '1',
        slug: 'name',
        tableId: '1',
        name: 'Name',
        description: 'Your full name',
        type: 'boolean',
        version: '15',
        createdAt: '2017-04-06T22:24:14.887+00:00',
        modified: {
            name: 'John Doe',
            at: '2017-04-24T15:46:28.479+00:00',
            id: '1'
        }
    },
    {
        id: '3',
        slug: 'test',
        tableId: '1',
        name: 'Last name',
        description: 'Client last name',
        type: 'string',
        version: '7',
        createdAt: '2017-04-12T19:57:35.704+00:00',
        modified: {
            name: 'John Doe',
            at: '2017-05-07T23:01:38.684+00:00',
            id: '1'
        }
    },
    {
        id: '5',
        slug: 'test',
        tableId: '1',
        name: 'test1',
        description: 'asasas',
        type: 'string',
        version: '7',
        createdAt: '2017-05-04T18:54:49.025+00:00',
        modified: {
            name: 'John Doe',
            at: '2017-05-07T23:01:38.684+00:00',
            id: '1'
        }
    },
    {
        id: '6',
        slug: 'test',
        tableId: '1',
        name: 'test2',
        description: 'Hi',
        type: 'string',
        version: '7',
        createdAt: '2017-05-04T19:41:38.238+00:00',
        modified: {
            name: 'John Doe',
            at: '2017-05-07T23:01:38.684+00:00',
            id: '1'
        }
    }
];
