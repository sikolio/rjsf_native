import { Modified } from './modified';
export interface Table {
    id: string;
    slug: string;
    name: string;
    description: string;
    domainId: string;
    version: string;
    createdAt: string;
    modified: Modified;
    columns?: any;
}
