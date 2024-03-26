import ModelBase from '../common/ModelBase';

interface Supplier extends ModelBase {
  corporateReason: string;
  companyRegistrationNumber: string;
  district: string;
  contactEmail: string;
  contactName: string;
  createdAt: Date;
}

export default Supplier;
