import Entity from '../common/ModelBase';

interface Supplier extends Entity {
  corporateReason: string;
  companyRegistrationNumber: string;
  registrationNumber: string;
  district: string;
  contactEmail: string;
  contactName: string;
}

export default Supplier;
