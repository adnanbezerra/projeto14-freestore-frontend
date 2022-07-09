import styled from 'styled-components'

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0 20px;
    height: ${({ isEmpty }) => !isEmpty ? '0px' : '100vh'};

    .carts {
        margin-bottom: 30px;
    }

    .no-products {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }

    .no-products h1 {
        font-weight: 400;
        font-size: 25px;
    }
`

export const CartButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -80px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 43px;
        border-radius: 30px;
        color: #fff;
        background-color: #e91e63;
        margin-bottom: 25px;
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    div:hover {
        transform: scale(1.01);
    }

    .total {
        justify-content: space-between;

        border-radius: 15px;
        background-color: #f9f9f9;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
        padding: 20px;
        box-sizing: border-box;
        cursor: initial;
    }

    .total:hover {
        transform: scale(1);
    }

    .total h1 {
        color: #212529;
    }

    .total p {
        color: #e91e63;
        font-weight: 700;
    }

    @media screen and (max-width: 450px) {
        margin-bottom: -20px;
    }
`