export interface Pagination<T> {
  content: T[];
  page: number;
  size: number;
  limit: number;
  lastElement: number;
  sort: string;
}