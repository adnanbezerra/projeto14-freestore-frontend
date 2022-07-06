import { HeaderWrapper } from "./HeaderStyle";
import logo from '../../assets/images/logo.png'
import { IoMenuSharp } from 'react-icons/io5'
import Menu from './../menu/Menu';
import { useState } from "react";

export default function Header() {
    const [width, setWidth] = useState('0px')
    const [display, setDisplay] = useState('none')

    return (
        <>
            <HeaderWrapper>
                <img src={logo} alt="logo" />
                <h1>FreeShop</h1>
                <div>
                    <IoMenuSharp className="menu" onClick={() => { setWidth('290px'); setDisplay('initial'); }} />
                </div>
            </HeaderWrapper>
            <Menu setDisplay={setDisplay} setWidth={setWidth} width={width} display={display} />
        </>
    )
}