import { MenuWrapper, Navbar, NavLink } from "./MenuStyle"
import { categories } from '../../../mock/data'
import { useNavigate } from "react-router-dom";

export default function Menu({ setWidth, setDisplay, display, width }) {
    const navigate = useNavigate()

    return (
        <MenuWrapper display={display}>
            <Navbar width={width}>
                <div className="navbar">
                    <NavLink to="/">Inicio</NavLink>
                    <section>
                        <h1 className="categories" onClick={() => navigate('/categories')}>Categorias</h1>
                        {categories.map((category, i) => <NavLink key={i} to={`/categories/${category.name}`}>{category.name}</NavLink>)}
                    </section>
                    <section>
                        <h1>Conta</h1>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Cadastrar-se</NavLink>
                        <NavLink to="/user">Minha Conta</NavLink>
                        <NavLink to="/cart">Carrinho</NavLink>
                        <NavLink to="/login">Logout</NavLink>
                    </section>
                </div>
            </Navbar>
            <div className="black-screen" onClick={() => { setWidth('0px'); setDisplay('none'); }} />
        </MenuWrapper>
    )
}