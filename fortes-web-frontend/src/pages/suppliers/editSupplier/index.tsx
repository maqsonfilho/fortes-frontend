import { notification } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '~/components/Button';
import { Label } from '~/components/Label';
import { TextField } from '~/components/TextField';
import { ContainerNewSupplier, ContentNewSupplier, ButtonContainer } from '../style';
import Supplier from '~/services/api/suppliers/Supplier';
import SupplierService from '~/services/api/suppliers/SupplierService';
import { formatCNPJ } from '~/commons/helpers/formatUtils';

export const EditSupplier: FC = () => {
  const location = useLocation();
  const supplier = location.state.supplier as Supplier;

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
    setValue('code', supplier.corporateReason);
    setValue('companyRegistrationNumber', supplier.companyRegistrationNumber);
    setValue('district', supplier.district);
    setValue('contactEmail', supplier.contactEmail);
    setValue('contactName', supplier.contactName);
    setValue('createdAt', supplier.createdAt);
    setValue('id', supplier.id);
  }, []);

  const onSubmit = async (formDataSupplier: Partial<Supplier>) => {
    setLoading(true);
    try {
      const service = new SupplierService();
      const response = await service.update(formDataSupplier as Supplier);
      if (response.isSuccess) {
        notification.success({
          message: 'Produto alterado com sucesso!',
        });
        navigate('/Suppliers');
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
    navigate('/Suppliers');
  }

  return (
    <ContainerNewSupplier>
      <ContentNewSupplier onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label hasError={!!errors.corporateReason}>Razão Social</Label>
          <TextField value={supplier.corporateReason} placeholder="Razão Social" {...register('corporateReason')} />
        </div>
        <div>
          <Label hasError={!!errors.companyRegistrationNumber}>CNPJ</Label>
          <TextField value={supplier.companyRegistrationNumber}
            placeholder="CNPJ"
            {...register('companyRegistrationNumber')}
            onChange={(e) => {
              const formattedValue = formatCNPJ(e.target.value);
              setValue('companyRegistrationNumber', formattedValue);
            }}/>
        </div>
        <div>
          <Label hasError={!!errors.district}>Estado</Label>
          <TextField value={supplier.district} placeholder="Estado" {...register('district')} />
        </div>
        <div>
          <Label hasError={!!errors.contactEmail}>E-mail</Label>
          <TextField value={supplier.contactEmail}  placeholder="E-mail" {...register('contactEmail')} />
        </div>
        <div>
          <Label hasError={!!errors.contactName}>Contato</Label>
          <TextField value={supplier.contactName} placeholder="Contato" {...register('contactName')} />
        </div>
      </ContentNewSupplier>
      <ButtonContainer>
        <Button label="Alterar" loading={loading} onClick={handleSubmit(onSubmit)} />
      </ButtonContainer>
      <ButtonContainer>
        <Button label="Cancelar" loading={loading} onClick={handleCancel} />
      </ButtonContainer>
    </ContainerNewSupplier>
  );
};
