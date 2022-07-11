import { HeaderWrapper, Search } from "./HeaderStyle";
import logo from '../../assets/images/logo.png'
import { IoMenuSharp } from 'react-icons/io5'
import Menu from './../menu/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect } from "react";
import { getProducts } from "../../../functions/products";

export default function Header() {
    const [width, setWidth] = useState('0px')
    const [display, setDisplay] = useState('none')
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const searchPrevented = search === '' ? 'all' : search

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <>
            <HeaderWrapper>
                <div>
                    <img src={logo} alt="logo" onClick={() => navigate('/')} />
                    <h1 onClick={() => navigate('/')}>FreeShop</h1>
                </div>
                <div className="search">
                    <input type="text" value={search} placeholder="Pesquisar produto..." 
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? navigate(`/products/${searchPrevented}`) : false} 
                    />
                    <button onClick={() => navigate(`/products/${searchPrevented}`)}>
                        <BiSearchAlt />
                    </button>
                </div>
                <div className="menu-area">
                    <IoMenuSharp className="menu" onClick={() => { setWidth('290px'); setDisplay('initial'); }} />
                </div>
            </HeaderWrapper>
            <Menu setDisplay={setDisplay} setWidth={setWidth} width={width} display={display} />
            <Search>
                {search !== '' ? <h1 onClick={() => navigate('/products/all')}>Todos os produtos</h1> : ''}
                {products
                    .filter(product => search !== '' ? product.name.toLowerCase().includes(search.toLowerCase()) : '')
                    .map(product => 
                        <h1 onClick={() => navigate(`/product/${product.category}/${product._id}`)}>{product.name}</h1>
                )}
            </Search>
        </>
    )
}