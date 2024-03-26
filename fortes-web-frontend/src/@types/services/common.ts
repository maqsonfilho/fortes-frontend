export interface ApiResponse<T> {
    data: T;
    isSuccess: boolean;
    message?: string;
    exception?: string;
  }

 export interface PagedResult<T> {
    items: T[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  }