import ModelBase from '../common/ModelBase';

export interface Product extends ModelBase {
  test: number;
  code: string;
  description: string;
  registrationDate: Date;
  value: number;
}

export default Product;
