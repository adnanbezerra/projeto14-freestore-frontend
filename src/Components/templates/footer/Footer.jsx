import { FooterWrapper } from "./FooterStyle";
import { FaHome, FaThLarge, FaUser, FaTags, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()

    return (
        <FooterWrapper>
            <div onClick={() => navigate('/')}>
                <FaHome className="footer-icon" />
                <p>Inicio</p>
            </div>
            <div onClick={() => navigate('/categories')}>
                <FaThLarge className="footer-icon" />
                <p>Categorias</p>
            </div>
            <div onClick={() => navigate('/user')}>
                <FaUser className="footer-icon" />
                <p>Perfil</p>
            </div>
            <div onClick={() => navigate('/sell')}>
                <FaTags className="footer-icon" />
                <p>Vender</p>
            </div>
            <div onClick={() => navigate('/cart')}>
                <FaShoppingCart className="footer-icon" />
                <p>Carrinho</p>
            </div>
        </FooterWrapper>
    )
}