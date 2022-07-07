import styled from 'styled-components'

export const ProductCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 300px;
    border-radius: 8px;
    width: 250px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 15px;
    margin-right: 13px;
    margin-bottom: 20px;
    transition: all 300ms ease-in-out;
    box-sizing: border-box;

    background: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        background-color: #fff;
        font-size: 12px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
        height: 55px;
        width: 150px;
        border-radius: 30px;
        cursor: pointer;
    }

    h2 {
        font-weight: 500;
        font-size: 13px;
        margin-right: 25px;
        margin-bottom: 5px;
        margin-left: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 120px;
        word-wrap: break-word;
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }

    h2:hover {
        text-decoration: underline;
        font-weight: 700;
    }

    p {
        font-weight: 700;
        color: #e91e63;
        margin-left: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100px;
    }

    button {
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
    }

    button:hover {
        transform: scale(1.2);
    }

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 450px) {
        max-width: 165px;
        min-width: 165px;

        div {
            min-width: 110px;
            max-width: 110px;
        }

        h2 {
            width: 80px;
        }

        p {
            width: 70px;
        }
    }
`