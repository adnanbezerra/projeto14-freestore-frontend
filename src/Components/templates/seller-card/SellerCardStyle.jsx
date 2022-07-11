import styled from 'styled-components'

export const SellerCardWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;

    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
    min-width: 250px;
    height: 300px;
    border-radius: 5px;
    margin-right: 13px;
    margin-left: 2px;
    transition: all 200ms ease-in-out;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    background: url(${({ backgroundImg }) => backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    :hover {
        transform: translateY(5%);
    }

    div {
        background-color: #212529;
        width: 150px;
        font-size: 20px;
        color: #fff;
        padding: 15px;
        border-radius: 30px;
        text-align: center;
    }

    h1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media screen and (max-width: 450px) {
        height: 250px;
        min-width: 200px;

        div {
            width: 100px;
        }
    }
`