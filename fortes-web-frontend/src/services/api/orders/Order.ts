import ModelBase from '../common/ModelBase';

interface OrderModel extends ModelBase {
  code: string;
  date: Date;
  amount: number;
  totalValue: number;
  productId: string;
  supplierId: string;
}

export default OrderModel;
