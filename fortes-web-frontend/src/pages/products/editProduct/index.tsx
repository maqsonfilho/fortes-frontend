import { notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import { Label } from '~/components/Label';
import { TextField } from '~/components/TextField';
import { ContainerNewProduct, ContentNewProduct, ButtonContainer } from '../style';
import ProductService from '~/services/api/products/ProductService';
import Product from '~/services/api/products/Product';

export const EditProduct: FC = () => {
  const location = useLocation();
  const product = location.state.product as Product;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm(
  );

  useEffect(() => {

    setValue('code', product.code);
    setValue('value', product.value);
    setValue('registrationDate', product.registrationDate);
    setValue('description', product.description);
    setValue('createdAt', product.createdAt);
    setValue('id', product.id);

  }, []);

  const onSubmit = async (formDataProduct: Partial<Product>) => {
    setLoading(true);
    try {
      const service = new ProductService();
      const response = await service.update(formDataProduct as Product);
      if (response.isSuccess) {
        notification.success({
          message: 'Produto alterado com sucesso!',
        });
        navigate('/products');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao alterar produto',
        description: error.response?.data?.message || 'Erro desconhecido ao alterar pediprodutodo',
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleCancel = () => {
    navigate('/products');
  }

  return (
    <ContainerNewProduct>
      <ContentNewProduct onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Código</Label>
          <TextField value={product.code} placeholder="Código" {...register('code')} />
        </div>
        <div>
          <Label>Descrição</Label>
          <TextField value={product.description} placeholder="Descrição" {...register('description')} />
        </div>
        <div>
          <Label hasError={!!errors.valor}>Valor</Label>
          <TextField value={product.value} placeholder="Valor" {...register('value')} />
        </div>
      </ContentNewProduct>
      <ButtonContainer>
        <Button label="Alterar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
      <ButtonContainer>
        <Button label="Cancelar" loading={loading} onClick={handleCancel} />
      </ButtonContainer>
    </ContainerNewProduct>
  );
};
