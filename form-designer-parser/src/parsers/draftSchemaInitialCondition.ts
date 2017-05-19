import { DraftSchema, Table, Column, Modified } from '../models';

const draftInitialSample: DraftSchema.schema = {
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
}

export function draftSchemaInitialCondition(table: Table, columns: Column[]) {
  return {
    ...draftInitialSample,
    tableId: table.id,
    title: table.name,
    introductoryText: table.description,
    unusedColumns: columns
  }
}