import styled from 'styled-components'

export const CartCardWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;

    img {
        width: 200px;
        height: 200px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        margin-right: 15px;
    }

    .product-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;

        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
        height: 200px;
        border-radius: 15px;
        padding: 20px;
        box-sizing: border-box;

        h1 {
            font-weight: 500;
            font-size: 20px;
            cursor: pointer;
            width: 180px;    
        }

        h1:hover {
            text-decoration: underline;
        }

        h2 {
            font-weight: 400;
            font-size: 17px;
            color: #666;
        }

        p {
            font-weight: 700;
            font-size: 20px;
            color: #e91e63;
            width: 150px;
        }

        h1, p {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        h3 {
            margin-top: 5px;
            font-weight: 400;
            font-size: 20px;
            color: #666;
        }
    }

    @media screen and (max-width: 600px) {
        img {
            width: 100px;
            height: 100px;
        }

        .product-info {
            height: 100px;
        }
    }
`

export const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;
    color: #fff;
    background-color: #212529;
    border-radius: 100%;
    position: relative;
    left: 100%;
    margin-top: -60px;
    margin-left: -50px;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`