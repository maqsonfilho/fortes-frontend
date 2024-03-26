import { IonIcon } from '@ionic/react';
import notification from 'antd/es/notification';
import { trashOutline } from 'ionicons/icons';
import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from '~/components/Button';
import { Table } from '~/components/Table';
import ProductService from '~/services/api/products/ProductService';
import { ContentButtonProduct, LinkNewProduct, TitleProduct } from './style';

export const Product: FC = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'name',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Data de cadastro',
      dataIndex: 'registrationDate',
      key: 'registrationDate',
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_text: any, record: any) => (
        <div onClick={() => fetchDeleteProduct(record.id)}>
          <IonIcon icon={trashOutline} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchAllProducts();
  }, [limit, page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePageSizeChange = useCallback((_current: number, size: number) => {
    setLimit(size);
    setPage(1);
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const service = new ProductService();
      const response = await service.getAllPaginated(page, limit);
      if (response.isSuccess) {
        setProducts(response.data.items);
        setTotalItems(response.data.totalCount);
      }
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error);
      notification.error({
        message: 'Erro ao buscar produtos',
        description: error.message || 'Erro desconhecido ao buscar produtos',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteProduct = async (id: string) => {
    try {
      setLoading(true);
      const service = new ProductService();
      const response = await service.delete(id);
      if (response.isSuccess) {
        notification.success({
          message: 'Produto excluído com sucesso!',
        });
        fetchAllProducts();
      }
    } catch (error: any) {
      console.error('Erro ao excluir produto:', error);
      notification.error({
        message: 'Erro ao excluir produto',
        description: error.message || 'Erro desconhecido ao excluir produto',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TitleProduct>Produtos</TitleProduct>

      <ContentButtonProduct>
        <LinkNewProduct to={'/new-product'}>
          <Button label="Criar novo produto" disabled={false} loading={loading} />
        </LinkNewProduct>
      </ContentButtonProduct>

      <Table
        onPageChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        data={Products}
        columns={columns}
        pageSize={limit}
        currentPage={page}
        totalItems={totalItems}
        showPagination={true}
        loading={loading}
      />
    </>
  );
};
