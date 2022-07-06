import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;

    background-color: #fff;
    color: #212529;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 10px 0;
    /* box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2); */

    img {
        width: 50px;
        height: 35px;
        margin: 0 10px;
    }

    h1 {
        font-size: 38px;
        font-weight: bold;
        flex: 1;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 50px;
        width: 50px;
        border-radius: 100%;
        background-color: #212529;
        margin-right: 10px;
        cursor: pointer;
    }

    .menu {
        color: #fff;
        font-size: 30px;
    }
`