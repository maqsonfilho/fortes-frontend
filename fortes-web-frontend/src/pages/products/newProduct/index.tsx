import { zodResolver } from '@hookform/resolvers/zod';
import { notification } from 'antd';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import Button from '~/components/Button';
import { Label } from '~/components/Label';
import { TextField } from '~/components/TextField';
import { Product } from '~/services/api/products/Product';
import { ButtonContainer, ContainerNewProduct, ContentNewProduct } from '../style';
import ProductService from '~/services/api/products/ProductService';

const schema = z.object({
  code: z
    .string()
    .min(6, 'Deve ter no mínimo 6 caracteres')
    .regex(/^[a-zA-Z0-9_.-]*$/, 'Apenas letras e números são permitidos'),
  description: z.string().min(10, 'Deve ter no mínimo 10 caracteres'),
  value: z.coerce
    .number()
    .refine( (n) => n >= 0, { message: 'Valor deve ser maior que 0' })
});

export const NewProduct: FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Product>>({
    resolver: zodResolver(schema),
  });

  const companyService = new ProductService();

  const navigate = useNavigate();

  const onSubmit = async (formDataProduct: Partial<Product>) => {
    setLoading(true);
    try {
      const response = await companyService.create(formDataProduct as Product);
      if (response.isSuccess) {
        notification.success({
          message: 'Produto criado com sucesso!',
        });
        navigate('/products');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao criar produto',
        description: error.response?.data?.message || 'Erro desconhecido ao criar produto',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerNewProduct>
      <ContentNewProduct onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label hasError={!!errors.code}>Código</Label>
          <TextField placeholder="Código" {...register('code')} />
          {errors.code && <span className="error">{errors.code.message}</span>}
        </div>
        <div>
          <Label hasError={!!errors.description}>Descrição</Label>
          <TextField placeholder="Descrição" {...register('description')} />
          {errors.description && <span className="error">{errors.description.message}</span>}
        </div>
        <div>
          <Label hasError={!!errors.value}>Value</Label>
          <TextField placeholder="Valor" {...register('value')} />
          {errors.value && <span className="error">{errors.value.message}</span>}
        </div>
      </ContentNewProduct>

      <ButtonContainer>
        <Button label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
    </ContainerNewProduct>
  );
};
