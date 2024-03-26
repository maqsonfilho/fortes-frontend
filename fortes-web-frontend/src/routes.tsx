import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { MyThemeProvider } from './theme/MyThemeProvider';
import { Product } from './pages/products';
import { NewProduct } from './pages/products/newProduct';
import { EditProduct } from './pages/products/editProduct';
import { Supplier } from './pages/suppliers';
import { NewSupplier } from './pages/suppliers/newSupplier';
import { EditSupplier } from './pages/suppliers/editSupplier';
import { SupplierOrders } from './pages/supplier/supplierOrders';
import { Order } from './pages/orders';
import { NewOrder } from './pages/orders/newOrder';
import { EditOrder } from './pages/orders/editOrder';

export const AppRoutes = () => {
  return (
    <MyThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/suppliers" element={<Supplier />} />
        <Route path="/new-supplier" element={<NewSupplier />} />
        <Route path="/edit-supplier" element={<EditSupplier />} />
        <Route path="/supplier-orders" element={<SupplierOrders />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/new-order" element={<NewOrder />} />
        <Route path="/edit-order" element={<EditOrder />} />
      </Routes>
    </MyThemeProvider>
  );
};
