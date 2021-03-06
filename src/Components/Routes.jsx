import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartScreen from './pages/cart/CartScreen';
import CategoriesScreen from './pages/categories/CategoriesScreen';
import CreateProduct from './pages/SellProductScreen';
import EditUserScreen from './pages/EditUserScreen';
import HomeScreen from './pages/home/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import Product from './pages/product/Product';
import PurchaseScreen from './pages/purchase/PurchaseScreen';
import RegisterScreen from './pages/RegisterScreen';
import UserScreen from './pages/UserScreen';
import ProductsScreen from './pages/products/ProductsScreen';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomeScreen />} />
                <Route path={'/login'} element={<LoginScreen />} />
                <Route path={'/login/:resetPassword/:sendedEmail'} element={<LoginScreen />} />
                <Route path="/categories" element={<CategoriesScreen />} />
                <Route path="/categories/:category" element={<CategoriesScreen />} />
                <Route path="/product/:category/:id" element={<Product />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/user" element={<UserScreen />} />
                <Route path="/editUser" element={<EditUserScreen />} />
                <Route path="/cart" element={<CartScreen />} /> 
                <Route path="/finalize-purchase" element={<PurchaseScreen />} />
                <Route path="/sell" element={<CreateProduct />} />
                <Route path="/products/:name" element={<ProductsScreen />} />
                <Route path="/products/:seller/:id" element={<ProductsScreen />} />
            </Routes>
        </BrowserRouter>
    )
}