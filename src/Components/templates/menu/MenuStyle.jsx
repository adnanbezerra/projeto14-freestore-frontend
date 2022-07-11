import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuWrapper = styled.div`
    .black-screen {
        width: 100%;
        display: ${({ display }) => display};
        background-color: #000;
        opacity: 0.5;
        height: 100vh;
        position: fixed;
        z-index: 2;
        top: 0;
    }
`

export const Navbar = styled.div`
    width: ${({ width }) => width};
    height: 100vh;
    z-index: 3;
    background-color: #212529;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    transition: all 400ms ease-in-out;

    .navbar {
        margin-top: 35px;
        margin-left: 25px;
    }

    h1 {
        font-weight: 200;
        font-size: 24px;
        margin: 15px 0;
    }

    .categories {
        cursor: pointer;
    }
    
    button {
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 100%;
        color: #fff;
        background-color: #666;
        width: 50px;
        height: 50px;
        font-size: 20px;
        transition: all 200ms ease-in-out;
        margin-left: ${({ marginButton }) => marginButton};
    }

    button:hover {
        transform: scale(1.1);
    }

    .navbar > div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    input {
        height: 35px;
        border-radius: 8px;
        border: none;
        outline: none;
        box-sizing: border-box;
        font-size: 14px;
        width: ${({ inputWidth }) => inputWidth};
        padding: ${({ inputPadding }) => inputPadding};
        transition: all 300ms ease-in-out;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
    color: #fff;
    display: block;
`