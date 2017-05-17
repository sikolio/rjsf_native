import { Modified } from './modified';

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