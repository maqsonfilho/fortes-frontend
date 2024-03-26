import ModelBase from '../common/ModelBase';

export interface Product extends ModelBase {
  code: string;
  description: string;
  registrationDate: Date;
  createdAt: Date;
  value: number;
}

export default Product;
