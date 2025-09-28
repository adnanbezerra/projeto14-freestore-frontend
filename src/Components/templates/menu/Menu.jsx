import { MenuWrapper, Navbar, NavLink } from "./MenuStyle"
import { categories } from '../../../shared/data'
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Menu({ setWidth, setDisplay, display, width }) {
    const navigate = useNavigate()
    const [inputWidth, setInputWidth] = useState('0px')
    const [inputPadding, setInputPadding] = useState('0px')
    const [marginButton, setMarginButton] = useState('0px')
    const [search, setSearch] = useState('')
    const { user, setUser } = useContext(UserContext)
    const searchPrevented = search === '' ? 'all' : search

    const verifyUser = user.token === undefined;

    function showAndSearch() {
        setInputWidth('180px')
        setInputPadding('0px 0px 0px 15px')
        setMarginButton('-30px')

        if (search !== '') {
            navigate(`/products/${search}`)
        }
    }

    function logout() {
        localStorage.removeItem('user')
        setUser({})
        navigate('/')
    }

    return (
        <MenuWrapper display={display}>
            <Navbar width={width} inputWidth={inputWidth} inputPadding={inputPadding} marginButton={marginButton}>
                <div className="navbar">
                    <div>
                        <input type="text" value={search} placeholder="Pesquisar produto..."
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' ? navigate(`/products/${searchPrevented}`) : false}
                        />
                        <button onClick={showAndSearch}>
                            <BiSearchAlt />
                        </button>
                    </div>
                    <NavLink to="/">Inicio</NavLink>
                    <section>
                        <h1 className="categories" onClick={() => navigate('/categories')}>Categorias</h1>
                        {categories.map((category, i) => <NavLink key={i} to={`/categories/${category.name}`}>{category.name}</NavLink>)}
                    </section>
                    <section>
                        <h1>Conta</h1>
                        {verifyUser ? <NavLink to="/login">Login</NavLink> : ""}
                        {verifyUser ? <NavLink to="/register">Cadastrar-se</NavLink> : ""}
                        {verifyUser ? "" : <NavLink to="/user">Minha Conta</NavLink>}
                        {verifyUser ? "" : <NavLink to="/sell">Vender Produto</NavLink>}
                        {verifyUser ? "" : <NavLink to="/cart">Carrinho</NavLink>}
                        {user.token !== undefined ? <h3 onClick={logout}>Logout</h3> : ''}
                    </section>
                </div>
            </Navbar>
            <div className="black-screen" onClick={() => { setWidth('0px'); setDisplay('none'); }} />
        </MenuWrapper>
    )
}