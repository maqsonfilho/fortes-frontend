import { IonIcon } from '@ionic/react';
import { useNavigate  } from 'react-router-dom';
import notification from 'antd/es/notification';
import { pencilOutline, trashOutline } from 'ionicons/icons';
import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { Table } from '~/components/Table';
import OrderService from '~/services/api/orders/OrderService';
import { ContentButtonOrder, LinkNewOrder, TitleOrder } from './style';
import OrderModel from '~/services/api/orders/Order';

export const Order: FC = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [Orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setEditingOrder] = useState(null);
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Data do pedido',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Quantidade',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Total',
      dataIndex: 'totalValue',
      key: 'totalValue',
    },
    {
      title: 'Excluir',
      key: 'actions',
      render: (_text: any, record: any) => (
        <>
          <div onClick={() => fetchDeleteOrder(record.id)}>
            <IonIcon icon={trashOutline} />
          </div>
        </>
      ),
    },
    {
      title: 'Editar',
        key: 'edit',
        render: (_text: any, record: OrderModel) => (
          <div onClick={() => handleEditOrder(record)}>
            <IonIcon icon={pencilOutline} />
          </div>
        ),
    }
  ];

  const handleEditOrder = (order: OrderModel) => {
    setEditingOrder(order);
    navigate('/edit-order', { state: { order } });
  };

  useEffect(() => {
    fetchAllOrders();
  }, [limit, page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePageSizeChange = useCallback((_current: number, size: number) => {
    setLimit(size);
    setPage(1);
  }, []);

  const fetchAllOrders = async () => {
    setLoading(true);
    try {
      const service = new OrderService();
      const response = await service.getAllPaginated(page, limit);
      if (response.isSuccess) {
        setOrders(response.data.items);
        setTotalItems(response.data.totalCount);
      }
    } catch (error: any) {
      console.error('Erro ao ver pedidos:', error);
      notification.error({
        message: 'Erro ao ver pedidos',
        description: error.message || 'Erro desconhecido ao ver pedidos',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteOrder = async (id: string) => {
    try {
      setLoading(true);
      const service = new OrderService();
      const response = await service.delete(id);
      if (response.isSuccess) {
        notification.success({
          message: 'Pedido excluído com sucesso!',
        });
        fetchAllOrders();
      }
    } catch (error: any) {
      console.error('Erro ao excluir pedido:', error);
      notification.error({
        message: 'Erro ao excluir pedido',
        description: error.message || 'Erro desconhecido ao excluir pedido',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TitleOrder>Pedidos</TitleOrder>
      <ContentButtonOrder>
        <LinkNewOrder to={'/new-Order'}>
          <Button label="Criar novo pedido" disabled={false} loading={loading} />
        </LinkNewOrder>
      </ContentButtonOrder>
      <Table
        onPageChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        data={Orders}
        columns={columns}
        pageSize={limit}
        currentPage={page}
        showPagination={true}
        totalItems={totalItems}
        loading={loading}
        onClick={handleEditOrder}
      />
    </>
  );
};
