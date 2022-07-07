import styled from 'styled-components'

export const ShowProductWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    margin-bottom: 50px;

    .product-images {
        border-radius: 8px;
        width: 69%;
        height: 550px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    }

    .product-infos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-radius: 15px;
        width: 30%;
        height: 550px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }

    h3, h4 {
        color: #666;
        font-weight: 400;
        font-size: 17px;
    }

    p {
        word-wrap: break-word;
        height: 100px;
        width: 100%;
        overflow-y: scroll;
        margin: 15px 0;
        font-weight: 300;
        color: #666;
    }

    p::-webkit-scrollbar {
        display: none;
    }

    .cart {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        margin-left: -20px;
        outline: none;
        border: none;
        padding: 15px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 25px;
        color: #fff;
        background-color: #212529;
        transition: all 300ms ease-in-out;
        width: 60px;
        height: 60px;
        align-self: flex-end;
    }

    .cart:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 950px) {
        flex-direction: column;

        .product-images {
            width: 100%;
        }

        .product-infos {
            width: 90%;
            position: relative;
            margin-top: -50px;
        }
    }
`

export const PriceAndName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    h1, h2 {
        font-size: 25px;
        font-weight: 600;
    }

    h2 {
        color: #e91e63;
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;

    h2 {
        color: #666;
        font-weight: 700;
        font-size: 18px;
        margin-right: 10px;
    }

    div {
        display: flex;
        align-items: center;
        height: 20px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff;
        background-color: #666;
        outline: none;
        border: none;
        font-size: 25px;
        font-weight: 700;
        border-radius: 100%;
        height: 35px;
        width: 35px;
        cursor: pointer;
        transition: all 200ms ease-in-out;
    }

    button:hover {
        transform: scale(1.1);
    }

    span {
        margin-top: -5px;
    }

    .quantity {
        color: #666;
        font-size: 15px;
        background-color: #fff;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
        margin: 0 8px;
        cursor: initial;
    }

    .quantity span {
        margin-top: 0;
    }

    .quantity:hover {
        transform: scale(1);
    }
`