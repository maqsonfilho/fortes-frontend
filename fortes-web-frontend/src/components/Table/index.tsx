import { FC } from 'react';
import { DataTable, TablePageButton } from './style';
import { Props } from '../../@types/components/table';

export const Table: FC<Props> = ({
  data,
  columns,
  pageSize,
  totalItems,
  currentPage,
  onPageChange,
  onClick,
  loading,
  showPagination,

  onShowSizeChange,
}) => {
  return (
    <DataTable
      dataSource={data.map((item, index) => ({ ...item, key: index }))}
      columns={columns}
      pagination={
        showPagination
          ? {
              pageSize,
              total: totalItems,
              current: currentPage,
              onChange: onPageChange,
              pageSizeOptions: ['5', '10', '20', '50'],
              showSizeChanger: true,
              showTotal: (total: any, range: any[]) => `${range[0]}-${range[1]} de ${total} registros`,
              position: ['bottomRight'],
              onShowSizeChange: onShowSizeChange,

              itemRender: (page, type) => {
                if (type === 'page') {
                  return <TablePageButton>{page}</TablePageButton>;
                }
              },
            }
          : false
      }
      onRow={(record: any) => ({
        onClick: () => {
          onClick && onClick(record);
        },
      })}
      loading={loading}
      style={{ cursor: 'pointer', maxWidth: '100%' }}
      locale={{ emptyText: 'Nenhum dado disponível' }}
    />
  );
};
