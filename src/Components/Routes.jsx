import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartScreen from './pages/cart/CartScreen';
import CategoriesScreen from './pages/categories/CategoriesScreen';
import EditUserScreen from './pages/EditUserScreen';
import HomeScreen from './pages/home/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import Product from './pages/product/Product';
import RegisterScreen from './pages/RegisterScreen';
import UserScreen from './pages/UserScreen';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomeScreen />} />
                <Route path={'/login'} element={<LoginScreen />} />
                <Route path="/categories" element={<CategoriesScreen />} />
                <Route path="/categories/:category" element={<CategoriesScreen />} />
                <Route path="/product/:category/:id" element={<Product />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/user" element={<UserScreen />} />
                <Route path="/editUser" element={<EditUserScreen />} />
                <Route path="/cart" element={<CartScreen />} /> 
            </Routes>
        </BrowserRouter>
    )
}