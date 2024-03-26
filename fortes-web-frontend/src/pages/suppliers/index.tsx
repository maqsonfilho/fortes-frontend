import { IonIcon } from '@ionic/react';
import { notification } from 'antd';
import { newspaperOutline, pencilOutline, trashOutline } from 'ionicons/icons';
import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { Table } from '~/components/Table';
import SupplierService from '~/services/api/suppliers/SupplierService';
import { ContentButtonSupplier, LinkNewSupplier, TitleSupplier } from './style';
import SupplierModel from '~/services/api/suppliers/Supplier';
import { useNavigate } from 'react-router-dom';
import { Order } from '../orders';

export const Supplier: FC = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [Suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [, setEditingSupplier] = useState(null);
  const navigate = useNavigate(); 

  const columns = [
    {
      title: 'Razão Social',
      dataIndex: 'corporateReason',
      key: 'corporateReason',
    },
    {
      title: 'CNPJ',
      dataIndex: 'companyRegistrationNumber',
      key: 'companyRegistrationNumber',
    },
    {
      title: 'Estado',
      dataIndex: 'district',
      key: 'district',
    },
    {
      title: 'E-mail',
      dataIndex: 'contactEmail',
      key: 'contactEmail',
    },
    {
      title: 'Contato',
      dataIndex: 'contactName',
      key: 'contactName',
    },
    {
      title: 'Excluir',
      key: 'actions',
      render: (_text: any, record: any) => (
        <div onClick={() => fetchDeleteSupplier(record.id)}>
          <IonIcon icon={trashOutline} />
        </div>
      ),
    },
    {
      title: 'Editar',
        key: 'edit',
        render: (_text: any, record: SupplierModel) => (
          <div onClick={() => handleEditSupplier(record)}>
            <IonIcon icon={pencilOutline} />
          </div>
        ),
    },
    {
      title: 'Pedidos',
        key: 'edit',
        render: (_text: any, record: SupplierModel) => (
          <div onClick={() => handleSeeOrders(record)}>
            <IonIcon icon={newspaperOutline} />
          </div>
        ),
    }
  ];

  const handleEditSupplier = (supplier: SupplierModel) => {
    navigate('/edit-supplier', { state: { supplier } });
  };

  const handleSeeOrders = (supplier: SupplierModel) => {
    navigate('/supplier-orders', { state: { supplier } });
  };

  useEffect(() => {
    fetchAllSuppliers();
  }, [limit, page]);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePageSizeChange = useCallback((_current: number, size: number) => {
    setLimit(size);
    setPage(1);
  }, []);

  const fetchAllSuppliers = async () => {
    setLoading(true);
    try {
      const service = new SupplierService();
      const response = await service.getAllPaginated(page, limit);
      if (response.isSuccess) {
        setSuppliers(response.data.items);
        setTotalItems(response.data.totalCount);
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

  const fetchDeleteSupplier = async (id: string) => {
    try {
      setLoading(true);
      const service = new SupplierService();
      const response = await service.delete(id);
      if (response.isSuccess) {
        notification.success({
          message: 'Fornecedor excluído com sucesso!',
        });
        fetchAllSuppliers();
      }
    } catch (error: any) {
      console.error('Erro ao excluir fornecedor:', error);
      notification.error({
        message: 'Erro ao excluir fornecedor',
        description: error.message || 'Erro desconhecido ao excluir fornecedor',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Order />
    </>
  );
};
