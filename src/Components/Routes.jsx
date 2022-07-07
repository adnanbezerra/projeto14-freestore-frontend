import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoriesScreen from './pages/categories/CategoriesScreen';
import HomeScreen from './pages/home/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import Product from './pages/product/Product';
import RegisterScreen from './pages/RegisterScreen';

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
            </Routes>
        </BrowserRouter>
    )
}