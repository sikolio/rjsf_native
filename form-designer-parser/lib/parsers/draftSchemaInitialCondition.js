"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var draftInitialSample = {
    tableId: '',
    state: {
        saved: true,
        lastSaved: '',
        requiresRedraw: true,
        widgetCount: 0,
    },
    title: '',
    introductoryText: '',
    greetingText: '',
    published: false,
    acceptsResponses: false,
    showResetButton: true,
    startDate: '',
    endDate: '',
    widgets: [],
    unusedColumns: [],
    modified: {
        name: '',
        at: '',
        id: ''
    }
};
function draftSchemaInitialCondition(table, columns) {
    return __assign({}, draftInitialSample, { tableId: table.id, title: table.name, introductoryText: table.description, unusedColumns: columns });
}
exports.draftSchemaInitialCondition = draftSchemaInitialCondition;
