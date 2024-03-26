export interface Props {
  columns: Array<object>;
  data: Array<object>;
  pageSize: number;
  onClick?: (param: any) => void;
  totalItems?: any;
  currentPage?: any;
  loading?: boolean;
  rowKey?: any;
  showPagination: boolean;
  nonClickableColumnIndex?: any;
  onPageChange: (page: number) => void;
  onShowSizeChange: (page: number, size: number) => void;
}
