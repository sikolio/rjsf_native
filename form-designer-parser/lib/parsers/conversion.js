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
function toDraftSchema(formSchema, columns) {
    // This makes reordering simpler
    var columnsByIndex = {};
    // Fill columnsByIndex with object copies in order to make
    // this function inmutable
    columns.forEach(function (column) { columnsByIndex[column.id] = __assign({}, column); });
    var draftSchema = __assign({}, formSchema, { widgets: [], unusedColumns: [], state: {
            saved: false,
            lastSaved: formSchema.modified.at,
            requiresRedraw: false,
            widgetCount: formSchema.widgets.length
        } });
    // Now, do the filling
    draftSchema["unusedColumns"] = formSchema.unusedColumnsIds.map(function (columnId) { return columnsByIndex[columnId]; });
    delete draftSchema.unusedColumnsIds;
    draftSchema.widgets = formSchema.widgets.map(function (widget) {
        if (widget.type !== 'formGroup')
            return widget;
        var fields = widget.fields.map(function (field, index) {
            var newField = __assign({}, field, { inFormId: String(index), column: {} });
            newField.column = columnsByIndex[field.columnId];
            delete newField["columnId"];
            return newField;
        });
        return __assign({}, widget, { fields: fields, state: { requiresRedraw: false, fieldCount: fields.length } });
    });
    return draftSchema;
}
exports.toDraftSchema = toDraftSchema;
function toFormSchema(draftSchema) {
    var formSchema = __assign({}, draftSchema, { unusedColumnsIds: [] });
    formSchema.unusedColumnsIds = draftSchema.unusedColumns.map(function (column) { return column.id; });
    delete formSchema["unusedColumns"];
    delete formSchema["state"];
    delete formSchema["$schema"];
    formSchema.widgets = formSchema.widgets.map(function (widget) {
        var newWidget = __assign({}, widget, { fields: widget.fields.map(function (field) {
                var newField = __assign({}, field, { columnId: field.column.id });
                delete newField["column"];
                delete newField["inFormId"];
                return newField;
            }) });
        delete newWidget["state"];
        return newWidget;
    });
    return formSchema;
}
exports.toFormSchema = toFormSchema;
