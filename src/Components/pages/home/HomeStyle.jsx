import styled from 'styled-components'

export const HomeWrapper = styled.div`
    .carousel {
        height: 550px;
        object-fit: cover;
    }

    .cards > div:last-child {
        display: flex;
        align-items: center;
        overflow-x: scroll;
        height: 280px;
        margin-top: -18px;
        margin-left: 17px;
    }

    .all-products > div:last-child {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;

        margin-top: 17px;
        margin-left: 17px;
        height: auto;
    }

    .cards > div:last-child::-webkit-scrollbar {
        height: 8px;
    } 
  
    .cards > div:last-child::-webkit-scrollbar-thumb {   
        background-color: rgba(169, 169, 169, 0.3);   
    }

    @media screen and (max-width: 450px) {
        .cards > div:last-child::-webkit-scrollbar {
            display: none;
        }

        .cards > div:last-child {
            height: 170px;
        }
    }
`