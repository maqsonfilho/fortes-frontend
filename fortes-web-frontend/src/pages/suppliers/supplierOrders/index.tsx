import { notification } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { Table } from '~/components/Table';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderService from '~/services/api/orders/OrderService';
import { TitleSupplier } from '../style';
import Supplier from '~/services/api/suppliers/Supplier';

export const SupplierOrders: FC = () => {
  const location = useLocation();
  const supplier = location.state.supplier as Supplier;  
  const [Orders, SetOrders] = useState([]);
  const [loading, setLoading] = useState(false);
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
    }
  ];
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const service = new OrderService();
      const response = await service.getBySupplierId(supplier.id);
      if (response.isSuccess) {
        SetOrders(response.data);
      }
    } catch (error: any) {
      notification.error({
        message: error.message,
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <TitleSupplier>{supplier.corporateReason} - Pedidos</TitleSupplier>

      <Table
        data={Orders}
        columns={columns}
        pageSize={50}
        currentPage={1}
        showPagination={false}
        loading={loading} 
        onPageChange={null} 
        onShowSizeChange={null}
        />
    </>
  );
};
