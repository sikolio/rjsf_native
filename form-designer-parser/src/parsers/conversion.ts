import { FormSchema, DraftSchema, Column } from 'models';

export function toDraftSchema(formSchema: FormSchema.schema, columns: Column[]): DraftSchema.schema {
  // This makes reordering simpler
  let columnsByIndex = {};

  // Fill columnsByIndex with object copies in order to make
  // this function inmutable
  columns.forEach((column) => { columnsByIndex[column.id] = { ...column } });

  let draftSchema = { 
    ...formSchema,
    widgets: [] as DraftSchema.layoutWidget[],
    unusedColumns: [] as Column[],
    state: {
      saved: false,
      lastSaved: formSchema.modified.at,
      requiresRedraw: false,
      widgetCount: formSchema.widgets.length
    }
  }

  // Now, do the filling
  draftSchema["unusedColumns"] = formSchema.unusedColumnsIds.map((columnId) => columnsByIndex[columnId])
  
  delete draftSchema.unusedColumnsIds;

  draftSchema.widgets = <any>formSchema.widgets.map((widget) => {
    if (widget.type !== 'formGroup')
      return widget;

    let fields: DraftSchema.fieldWidget[] = widget.fields.map((field, index) => {
      let newField = { ...field, inFormId: String(index), column: {} as Column };
      newField.column = columnsByIndex[field.columnId]
      delete newField["columnId"];

      return newField as DraftSchema.fieldWidget;
    })

    return { ...widget, fields: fields, state: { requiresRedraw: false, fieldCount: fields.length } } as DraftSchema.layoutWidget;
  })

  return draftSchema as DraftSchema.schema;
}

export function toFormSchema(draftSchema: DraftSchema.schema): FormSchema.schema {
  let formSchema = <any>{ ...draftSchema, unusedColumnsIds: [] as string[] };

  formSchema.unusedColumnsIds = draftSchema.unusedColumns.map((column) => column.id);

  delete formSchema["unusedColumns"];
  delete formSchema["state"];

  formSchema.widgets = formSchema.widgets.map((widget) => {
    let newWidget = {...widget, fields: widget.fields.map((field) => {
      let newField: FormSchema.fieldWidget = {...field, columnId: field.column.id }
      delete newField["column"];
      delete newField["inFormId"];

      return newField as FormSchema.fieldWidget;
    })}

    delete newWidget["state"]
    
    return newWidget;
  });

  return formSchema as FormSchema.schema;
}