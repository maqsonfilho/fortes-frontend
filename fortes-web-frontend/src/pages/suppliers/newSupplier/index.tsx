import { zodResolver } from '@hookform/resolvers/zod';
import { notification } from 'antd';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { formatCNPJ } from '~/commons/helpers/formatUtils';
import Button from '~/components/Button';
import { Label } from '~/components/Label';
import { TextField } from '~/components/TextField';
import Supplier from '~/services/api/suppliers/Supplier';
import { ButtonContainer, ContainerNewSupplier, ContentNewSupplier } from '../style';
import SupplierService from '~/services/api/suppliers/SupplierService';

const schema = z.object({
  name: z.string().min(3, 'Deve ter no mínimo 3 caracteres'),
  description: z.string().min(1, 'É obrigatório'),
  registrationNumber: z
    .string()
    .min(1, 'É obrigatório')
    .refine((value) => /^\d{14}$/.test(value) || /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value), {
      message: 'CNPJ inválido',
    }),
  email: z.string().email('E-mail inválido').min(1, 'É obrigatório'),
  phone: z
    .string()
    .min(1, 'é obrigatório')
    .refine((value) => /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value), {
      message: 'Formato de telefone inválido',
    }),
});

export const NewSupplier: FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Partial<Supplier>>({
    resolver: zodResolver(schema),
  });

  const service = new SupplierService();

  const navigate = useNavigate();

  const onSubmit = async (formDataSupplier: Partial<Supplier>) => {
    setLoading(true);
    try {
      const response = await service.create(formDataSupplier as Supplier);
      if (response.isSuccess) {
        notification.success({
          message: 'Parceiro criado com sucesso!',
        });
        navigate('/suppliers');
      }
    } catch (error: any) {
      notification.error({
        message: 'Erro ao criar parceiro',
        description: error.response?.data?.message || 'Erro desconhecido ao criar parceiro',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerNewSupplier>
      <ContentNewSupplier onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label hasError={!!errors.corporateReason}>Razão Social</Label>
          <TextField placeholder="Razão Social" {...register('corporateReason')} />
          {errors.corporateReason && <span className="error">{errors.corporateReason.message}</span>}
        </div>
        <div>
          <Label hasError={!!errors.companyRegistrationNumber}>CNPJ</Label>
          <TextField
            placeholder="CNPJ"
            {...register('companyRegistrationNumber')}
            onChange={(e) => {
              const formattedValue = formatCNPJ(e.target.value);
              setValue('companyRegistrationNumber', formattedValue);
            }}/>
          {errors.companyRegistrationNumber && <span className="error">{errors.companyRegistrationNumber.message}</span>}
        </div>
        <div>
          <Label hasError={!!errors.district}>Estado</Label>
          <TextField placeholder="Estado" {...register('district')} />
          
          {errors.registrationNumber && <span className="error">{errors.registrationNumber.message}</span>}
        </div>
        <div>
          <Label hasError={!!errors.contactEmail}>E-mail</Label>
          <TextField placeholder="E-mail" {...register('contactEmail')} />
          {errors.contactEmail && <span className="error">{errors.contactEmail.message}</span>}
        </div>
        <div>
          <Label hasError={!!errors.contactName}>Contato</Label>
          <TextField placeholder="Contato" {...register('contactName')} />
          {errors.contactName && <span className="error">{errors.contactName.message}</span>}
        </div>
      </ContentNewSupplier>
      <ButtonContainer>
        <Button label="Criar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
    </ContainerNewSupplier>
  );
};
