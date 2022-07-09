import styled from 'styled-components'

export const PurchaseWrapper = styled.div`
    padding: 0 17px;

    h1 {
        font-weight: 700;
        font-size: 30px;
        color: #e91e63;
        margin-bottom: 15px;
    }

    h2 {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 15px;
    }

    .payment {
        margin-bottom: 35px;
    }

    .buy-button {
        display: flex;
        justify-content: center;
        align-items: center;

        outline: none;
        border: none;
        height: 50px;
        width: 100%;
        color: #fff;
        font-size: 16px;
        text-align: center;
        background-color: #e91e63;
        border-radius: 30px;
        font-weight: 700;
        cursor: pointer;
        transition: all 400ms ease-in-out;
    }

    .buy-button:hover {
        background-color: #e95e97;
    }

    .finalized {
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }   

    .finalized h3 {
        margin-top: 30px;
        font-weight: 700;
        font-size: 40px;
    }

    .finalized .check {
        font-size: 100px;
        color: #04b604;
        animation-name: check;
        animation-duration: 1s;
        animation-timing-function: linear;
    }

    @keyframes check {
        25% {
            transform: scale(0);
        }
        50% {
            transform: scale(0.5);
        }
        90% {
            transform: scaleX(0.2);
        }
        100% {
            transform: scale(1.1);
        }
    }
`

export const PaymentCard = styled.div`
    display: flex;
    align-items: center;

    height: 50px;
    width: 100%;
    border-radius: 30px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    font-size: 16px;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    background-color: ${({ methodSelected }) => methodSelected ? '#e91e63' : 'transparent'};
    color: ${({ methodSelected }) => methodSelected ? '#fff' : '#212529'};

    :hover {
        transform: scale(1.005);
    }

    .icon {
        font-size: 30px;
    }

    p {
        font-size: 18px;
        margin-left: 15px;
        font-weight: 600;
    }
`