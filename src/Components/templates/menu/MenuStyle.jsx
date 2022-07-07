import styled from 'styled-components'

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
`