import { FormSchema, DraftSchema, Column } from 'models';
export declare function toDraftSchema(formSchema: FormSchema.schema, columns: Column[]): DraftSchema.schema;
export declare function toFormSchema(draftSchema: DraftSchema.schema): FormSchema.schema;
