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
        margin-top: 64px;
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
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
    color: #fff;
    display: block;
`