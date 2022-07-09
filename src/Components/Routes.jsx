import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoriesScreen from './pages/categories/CategoriesScreen';
import CreateProduct from './pages/SellProductScreen';
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
                <Route path="/edit-user" element={<EditUserScreen />} />
                <Route path="/sell" element={<CreateProduct />} />
            </Routes>
        </BrowserRouter>
    )
}