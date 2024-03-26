import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { MyThemeProvider } from './theme/MyThemeProvider';
import { Product } from './pages/products';
import { NewProduct } from './pages/products/newProduct';
import { Supplier } from './pages/suppliers';
import { NewSupplier } from './pages/suppliers/newSupplier';
import { Order } from './pages/orders';
import { NewOrder } from './pages/orders/newOrder';

export const AppRoutes = () => {
  return (
    <MyThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/suppliers" element={<Supplier />} />
        <Route path="/new-supplier" element={<NewSupplier />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/new-order" element={<NewOrder />} />
      </Routes>
    </MyThemeProvider>
  );
};
