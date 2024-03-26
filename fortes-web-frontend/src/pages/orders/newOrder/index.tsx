import { Select, notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Label } from '~/components/Label';
import { TextField } from '~/components/TextField';
import OrderModel from '~/services/api/orders/Order';
import OrderService from '~/services/api/orders/OrderService';
import { ButtonContainer, ContainerNewOrder, ContentNewOrder } from '../style';
import ProductService from '~/services/api/products/ProductService';
import SupplierService from '~/services/api/suppliers/SupplierService';

export const NewOrder: FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm(
  );

  useEffect(() => {
    fetchAllProducts();
    fetchAllSuppliers();

  }, []);

  const handleChange = (attribute: string, event: any) => {
    setValue(attribute, event);
  }
  
  const onSubmit = async (formDataOrder: Partial<OrderModel>) => {
    setLoading(true);
    try {
      const service = new OrderService();
      const response = await service.create(formDataOrder as OrderModel);
      if (response.isSuccess) {
        notification.success({
          message: 'Pedido criada com sucesso!',
        });
        navigate('/orders');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao criar pedido',
        description: error.response?.data?.message || 'Erro desconhecido ao criar pedido',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const service = new ProductService();
      const response = await service.getAll();
      if (response.isSuccess) {
        setProducts(response.data);
      }
    } catch (error: any) {
      console.error('Erro ao ver produtos:', error);
      notification.error({
        message: 'Erro ao ver produtos',
        description: error.message || 'Erro desconhecido ao ver produtos',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAllSuppliers = async () => {
    try {
      const service = new SupplierService();
      const response = await service.getAll();
      if (response.isSuccess) {
        setSuppliers(response.data);
      }
    } catch (error: any) {
      console.error('Erro ao ver fornecedores:', error);
      notification.error({
        message: 'Erro ao ver fornecedores',
        description: error.message || 'Erro desconhecido ao ver fornecedores',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerNewOrder>
      <ContentNewOrder onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Código</Label>
          <TextField placeholder="Código" {...register('code')} />
        </div>
        <div>
          <Label hasError={!!errors.supplierId}>Fornecedor</Label>
          <Select
            {...register('supplierid')}
            style={{ width: 200 }}
            defaultValue={''}
            onChange={ (value) => handleChange('supplierid', value)}
          >
            {suppliers.map(supplier => (
            <Select.Option key={supplier.id}>
              {supplier.corporateReason}
            </Select.Option>
          ))}
        </Select>
        </div>
        <div>
          <Label>Produto</Label>
          <Select {...register('productid')}
          style={{ width: 200 }}
          defaultValue={''}
          onChange={ (value) => handleChange('productid', value)}
          >
            {products.map(product => (
            <Select.Option key={product.id}>
              {`${product.description} - ${product.value}`}
            </Select.Option>
          ))}
        </Select>
        </div>
        <div>
          <Label hasError={!!errors.amount}>Quantidade</Label>
          <TextField placeholder="Quantidade" {...register('amount')} />
        </div>
      </ContentNewOrder>
      <ButtonContainer>
        <Button label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
    </ContainerNewOrder>
  );
};
