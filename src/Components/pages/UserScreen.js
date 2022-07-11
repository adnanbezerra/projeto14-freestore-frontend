import Layout from "../templates/layout/Layout";
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FiEdit2 } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, config } from "../../mock/data";

export default function UserScreen() {

    const { user } = useContext(UserContext);

    const [recentAquisitions, setRecentAquisitions] = useState([]);
    const navigate = useNavigate();

    const verifyUser = user.token === undefined;

    useEffect(() => {
        if (verifyUser) navigate('/login', {replace: true});
        else getSells(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getSells() {
        const headers = config(user.token, user.refresh)
        const id = user.id;
        axios.get(`${BASE_URL}/sells`, id, headers)
            .then(response => {
                setRecentAquisitions(response.data);
            })
            .error(error => {
                console.log(error);
            })
    }

    function renderAquisitions() {
        return (
            recentAquisitions.map(item => {
                return (
                    <RecentContainer>
                        <PictureDiv>
                            <img src={item.picture} alt="" />
                        </PictureDiv>
                        <RecentTexts>
                            <TitleText>{item.name}</TitleText>
                            <DescriptionText>{item.description}</DescriptionText>
                            <ValueText>R$ {item.price}</ValueText>
                        </RecentTexts>
                        <Button onClick={() => navigate(`navigate(/product/${item.category}/${item._id}`)}>Comprar novamente</Button>
                    </RecentContainer>
                )
            })
        )
    }

    return (
        <Layout>
            <Banner><p>Olá, <UserName>{verifyUser ? "" : user.username}</UserName>!</p> <UserConfig><img src={verifyUser ? "" : user.profilePicture} alt="" /> <Edit onClick={() => navigate('/edit')}><FiEdit2></FiEdit2></Edit>  </UserConfig></Banner>
            <Recents>Compras recentes</Recents>
            {recentAquisitions ? <CardContainer>{renderAquisitions()}</CardContainer> : <NoRecent>Nenhuma compra feita ainda!</NoRecent>}
            {/* <CardContainer>{renderAquisitions()}</CardContainer> */}
        </Layout>
    )
}

const Button = styled.button`
    margin-right: 10px;
    width: 115px;
    background-color: #e91e63;
    color: white;
    border: 0;
    border-radius: 5px;
    height: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ValueText = styled.p`

`

const DescriptionText = styled.p`
    margin-top: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 130px;
`

const TitleText = styled.p`
    font-size: 20px;
`

const RecentTexts = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    width: 130px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const PictureDiv = styled.div`
    img { 
        height: 80px;
        width: 80px;
        border-radius: 5px; 
        border: 1px solid #d1d1d1;
    }
`

const RecentContainer = styled.div`
    width: 95%;
    height: 120px;
    display: flex;
    border-radius: 5px;
    /* justify-content: center; */
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;

    background-color: #f5f5f5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const NoRecent = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 100px;
`

const Recents = styled.p`
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
    margin-bottom: 10px;
`

const Edit = styled.div`
    background-color: #e91e63;
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50px;
    left: -10px;

    border: 1px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const UserConfig = styled.div`

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

    img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }
`

const UserName = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: #e91e63;
`

const Banner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    padding: 0 20px;
    box-sizing: border-box;

    background-color: #ea88a8;
    font-size: 25px;
    font-weight: bold;

    margin-bottom: 20px;
`