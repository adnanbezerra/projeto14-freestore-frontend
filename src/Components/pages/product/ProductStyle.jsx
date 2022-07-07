import styled from 'styled-components'

export const RelatedProdutcsWrapper = styled.div`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    height: 350px;

    &::-webkit-scrollbar {
        height: 8px;
    } 
  
    &::-webkit-scrollbar-thumb {   
        background-color: rgba(169, 169, 169, 0.3);   
    }

    @media screen and (max-width: 450px) {
        &::-webkit-scrollbar {
            display: none;
        }
    }
`