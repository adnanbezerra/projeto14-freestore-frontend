import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: none;
    height: 67px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #fff;
    z-index: 1;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        margin-top: 5px;
    }

    .footer-icon {
        font-size: 23px;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    .footer-icon:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 450px) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #252525;
    }
`