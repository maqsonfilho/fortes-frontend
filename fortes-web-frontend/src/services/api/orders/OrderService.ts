import Order from './Order';
import ApiService from '../common/ApiService';

class OrderService extends ApiService<Order> {
    constructor() {
      super('/api/order');
    }
  }
  
export default OrderService;