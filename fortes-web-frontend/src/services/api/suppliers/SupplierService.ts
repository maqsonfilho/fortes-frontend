import ApiService from '../common/ApiService';
import Supplier from './Supplier';

class SupplierService extends ApiService<Supplier> {
  constructor() {
    super('/api/supplier');
  }
}

export default SupplierService;
