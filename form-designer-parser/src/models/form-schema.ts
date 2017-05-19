import { Modified } from './modified';

/**
 * Module containing all the interfaces relating to a FormSchema. Root interface is FormSchema.schema.
 */
export module FormSchema {
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
    widgets: FormSchema.layoutWidget[];
    validations?: FormSchema.validation[];
    unusedColumnsIds: string[];
    createdAt?: string;
    modified: Modified;
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
    fields?: FormSchema.fieldWidget[];
  }

  /**
   * Schema of a single field widget, which is contained in a layoutWidget
   * of type formGroup.
   * 
   * @export
   * @interface fieldWidget
   */
  export interface fieldWidget {
    fieldId: string;
    columnId: string;
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