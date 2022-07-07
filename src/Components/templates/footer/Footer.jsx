import { FooterWrapper } from "./FooterStyle";
import { FaHome, FaThLarge, FaUser, FaTags, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()

    return (
        <FooterWrapper>
            <div>
                <FaHome onClick={() => navigate('/')} className="footer-icon" />
                <p>Inicio</p>
            </div>
            <div>
                <FaThLarge onClick={() => navigate('/categories')} className="footer-icon" />
                <p>Categorias</p>
            </div>
            <div>
                <FaUser onClick={() => navigate('/user')} className="footer-icon" />
                <p>Perfil</p>
            </div>
            <div>
                <FaTags onClick={() => navigate('/sell')} className="footer-icon" />
                <p>Vender</p>
            </div>
            <div>
                <FaShoppingCart onClick={() => navigate('/cart')} className="footer-icon" />
                <p>Carrinho</p>
            </div>
        </FooterWrapper>
    )
}