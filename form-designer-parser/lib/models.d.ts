export interface Modified {
    at: string;
    name: string;
    id: string;
}
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
export interface Column {
    id: string;
    slug: string;
    tableId: string;
    name: string;
    description: string;
    type: string;
    version: string;
    createdAt: string;
    modified: Modified;
}
