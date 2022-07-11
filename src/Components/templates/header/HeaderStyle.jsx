import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;
    color: #212529;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 10px 0;
    /* box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2); */

    img {
        width: 50px;
        height: 35px;
        margin: 0 10px;
        cursor: pointer;
    }

    h1 {
        font-size: 38px;
        font-weight: bold;
        flex: 1;
        cursor: pointer;
    }

    div {
        display: flex;
    }

    .menu-area {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 50px;
        width: 50px;
        border-radius: 100%;
        background-color: #212529;
        margin-right: 10px;
        cursor: pointer;
    }

    .menu {
        color: #fff;
        font-size: 30px;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 100%;
        color: #fff;
        background-color: #212529;
        width: 50px;
        height: 50px;
        font-size: 20px;
        transition: all 200ms ease-in-out;
        margin-left: -30px;
        z-index: 3;
    }

    button:hover {
        transform: scale(1.1);
    }

    .search {
        display: flex;
        align-items: center;
    }

    input {
        height: 35px;
        border-radius: 8px;
        border: 1px solid #212529;
        outline: none;
        box-sizing: border-box;
        font-size: 14px;
        padding-left: 15px;
        width: 300px;
        transition: all 300ms ease-in-out;
    }

    @media screen and (max-width: 700px) {
        .search {
            display: none;
        }
    }
`

export const Search = styled.div`
    position: fixed;
    width: 275px;
    background-color: #fff;
    box-shadow: 0px 0px 4px 0px;
    max-height: 200px;
    margin-top: -15px;
    margin-left: 46.2%;
    z-index: 1;
    box-sizing: border-box;
    padding-bottom: 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    } 
  
    ::-webkit-scrollbar-thumb {   
        background-color: rgba(169, 169, 169, 0.3);   
    }

    h1 {
        border-bottom: 1px solid #212529;
        padding-bottom: 15px;
        margin-bottom: 15px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 20px;
        margin-top: 15px;
        cursor: pointer;
    }
`