import ApiService from '../common/ApiService';
import Product from './Product';

class ProductService extends ApiService<Product> {
  constructor() {
    super('/api/product');
  }
}

export default ProductService;
