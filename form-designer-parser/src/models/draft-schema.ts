import { Modified } from 'models/modified';
import { Column } from 'models/column';
import { Table } from 'models/table';

/**
 * Module containing all the interfaces relating to a FormSchema. Root interface is FormSchema.schema.
 */
export module DraftSchema {
  /**
   * Core interface for a FormSchema.
   * 
   * @export
   * @interface schema
   */
  export interface schema {
    formId: string;
    tableId: string;
    version?: string;
    title: string;
    introductoryText: string;
    greetingText: string;
    published: boolean;
    acceptsResponses: boolean;
    showResetButton: boolean;
    startDate: string;
    endDate: string;
    widgets: DraftSchema.layoutWidget[];
    validations?: DraftSchema.validation[];
    unusedColumns: Column[];
    createdAt?: string;
    modified?: Modified;

    state: DraftSchema.draftState;
  }

  export interface draftState {
    saved: boolean;
    lastSaved: string;
    requiresRedraw: boolean;
    widgetCount: number;
  }

  /**
   * Schema of a single layout widget.
   * 
   * @export
   * @interface layoutWidget
   */
  export interface layoutWidget {
    id: number;
    formId: string;

    /**
     * It must be formGroup, horizontalRule or textArea.
     * 
     * @type {string}
     * @memberof layoutWidget
     */
    type: string;

    settings?: any;
    fields?: DraftSchema.fieldWidget[];
    
    state: DraftSchema.widgetState;
  }

  export interface widgetState {
    requiresRedraw: boolean;
    fieldCount: number;
  }

  /**
   * Schema of a single field widget, which is contained in a layoutWidget
   * of type formGroup.
   * 
   * @export
   * @interface fieldWidget
   */
  export interface fieldWidget {
    inFormId: string;
    fieldId: string;
    column: Column;
    label: string;
    name: string;
    readonly: boolean;
    disabled: boolean;
    defaultValue: any;
    widgetType: any;
    widgetSettings: any;
    placeholder: string;
    helpBlock: string;
  }

  /**
   * Interface for a single validation contained in a FormSchema.
   * 
   * @export
   * @interface validation
   */
  export interface validation {
    name: string;
    slugs: string[];
    type: string;
    errorMessage: string;
    settings: any;
  }
}