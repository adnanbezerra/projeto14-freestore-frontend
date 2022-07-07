import styled from 'styled-components'

export const CategoryCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-right: 20px;
    margin-top: 2px;

    div {
        height: 200px;
        width: 200px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.17);
        cursor: pointer;
        transition: all 300ms ease-in-out;
    }

    div:hover {
        transform: translateY(-8%);
    }

    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 5px;
    }

    p {
        margin: 10px 0;
        font-size: 15px;
        font-weight: 700;
        width: 200px;
    }

    @media screen and (max-width: 450px) {
        div {
            height: 100px;
            width: 100px;
        }

        p {
            width: 100px;
        }
    }
`