import Order from './Order';
import ApiService from '../common/ApiService';
import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '~/@types/services/common';

class OrderService extends ApiService<Order> {
  constructor() {
    super('/api/order');
  }

  async getBySupplierId(supplierId: string) {
    try {
      const response: AxiosResponse<ApiResponse<Order[]>> = await axios.get<ApiResponse<Order[]>>(
        `${this.baseUrl}/supplier?supplierId=${supplierId}`,
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

}
  
export default OrderService;