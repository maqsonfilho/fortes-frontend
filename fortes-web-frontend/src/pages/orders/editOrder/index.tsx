import { Select, notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import { Label } from '~/components/Label';
import { TextField } from '~/components/TextField';
import OrderModel from '~/services/api/orders/Order';
import OrderService from '~/services/api/orders/OrderService';
import { ContainerNewOrder, ContentNewOrder, ButtonContainer } from '../style';
import SupplierService from '~/services/api/suppliers/SupplierService';
import ProductService from '~/services/api/products/ProductService';

export const EditOrder: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const prevState = location.state;

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

    setValue('code', prevState.order.code);
    setValue('supplierid', prevState.order.supplierId);
    setValue('productid', prevState.order.productId);
    setValue('amount', prevState.order.amount);
    setValue('date', prevState.order.date);
    setValue('id', prevState.order.id);

  }, []);

  const handleChange = (attribute: string, event: any) => {
    setValue(attribute, event);
  }

  const onSubmit = async (formDataOrder: Partial<OrderModel>) => {
    setLoading(true);
    try {
      const service = new OrderService();
      const response = await service.update(formDataOrder as OrderModel);
      if (response.isSuccess) {
        notification.success({
          message: 'Pedido alterado com sucesso!',
        });
        navigate('/orders');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao alterar pedido',
        description: error.response?.data?.message || 'Erro desconhecido ao alterar pedido',
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

  const handleCancel = () => {
    navigate('/orders');
  }

  return (
    <ContainerNewOrder>
      <ContentNewOrder onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Código</Label>
          <TextField value={prevState.order.code} placeholder="Código" {...register('codigo')} />
        </div>
        <div>
          <Label hasError={!!errors.supplierId}>Fornecedor</Label>
          <Select
            {...register('supplierid')}
            style={{ width: 200 }}
            defaultValue={prevState.order.supplierId}
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
          defaultValue={prevState.order.productId}
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
          <TextField value={prevState.order.amount} placeholder="Quantidade" {...register('amount')} />
        </div>
      </ContentNewOrder>
      <ButtonContainer>
        <Button label="Alterar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
      <ButtonContainer>
        <Button label="Cancelar" loading={loading} onClick={handleCancel} />
      </ButtonContainer>
    </ContainerNewOrder>
  );
};
