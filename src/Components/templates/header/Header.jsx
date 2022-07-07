import { HeaderWrapper } from "./HeaderStyle";
import logo from '../../assets/images/logo.png'
import { IoMenuSharp } from 'react-icons/io5'
import Menu from './../menu/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [width, setWidth] = useState('0px')
    const [display, setDisplay] = useState('none')

    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <img src={logo} alt="logo" onClick={() => navigate('/')} />
                <h1 onClick={() => navigate('/')}>FreeShop</h1>
                <div>
                    <IoMenuSharp className="menu" onClick={() => { setWidth('290px'); setDisplay('initial'); }} />
                </div>
            </HeaderWrapper>
            <Menu setDisplay={setDisplay} setWidth={setWidth} width={width} display={display} />
        </>
    )
}