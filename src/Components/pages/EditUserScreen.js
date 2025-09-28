import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Layout from "../templates/layout/Layout";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../shared/data";
import { config } from "../../shared/data";

export default function EditUserScreen() {

    // const user = {
    //     username: "Baby Doido",
    //     email: "babydoido@gmail.com",
    //     profilePicture: "https://i.pinimg.com/222x/c1/e2/31/c1e23101b8ae4e6536a6326b14dea06b.jpg"
    // }
    const { user, setUser } = useContext(UserContext);
    const verifyUser = user.token === undefined;

    const [username, setUsername] = useState(verifyUser ? "" : user.name);
    const [email, setEmail] = useState(verifyUser ? "" : user.email);
    const [profilePicture, setProfilePicture] = useState(verifyUser ? "" : user.profilePicture);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (verifyUser) navigate('/login', { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function submitForm(event) {
        event.preventDefault();
        const newInfos = { userInfo: { _id: user._id, name: username, email, profilePicture }, password }

        if (!profilePicture.startsWith("http://") && !profilePicture.startsWith("https://")) {
            alert("Foto inválida!");
            return;
        }

        const headers = config(user.token, user.refreshToken);

        try {
            await axios.put(`${BASE_URL}/register`, newInfos, headers)

            let userLocal = JSON.parse(localStorage.getItem("user"))
            userLocal.name = username
            userLocal.profilePicture = profilePicture
            userLocal.email = email

            localStorage.setItem("user", JSON.stringify(userLocal))

            setUser(userLocal)

            alert("Atualização feita com sucesso!");
            navigate('/');
        } catch (error) {
            console.log(error);
            if (error.response.data.newToken) {
                let userLocal = JSON.parse(localStorage.getItem('user'))
                userLocal.token = error.response.data.newToken

                localStorage.setItem('user', JSON.stringify(userLocal))
                setUser({ ...userLocal })
                await submitForm(event)
            }

            alert("Erro ao atualizar informações!");
        }
    }

    return (
        <Layout>
            <AiOutlineArrowLeft style={{ fontSize: "25px", marginLeft: "10px" }} onClick={() => navigate('/user')}></AiOutlineArrowLeft>

            <Form onSubmit={submitForm}>
                <img src={verifyUser ? "" : user.profilePicture} alt="" />
                <Label>E-mail</Label>
                <Input type='email' placeholder="Insira seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <Label>Nome do usuário</Label>
                <Input type='text' placeholder="Insira seu nome de usuário" value={username} onChange={e => setUsername(e.target.value)} />
                <Label>Foto de perfil</Label>
                <Input type='text' placeholder="Insira o novo nome de usuário" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />
                <Label>Confirmar com senha</Label>
                <Input type='password' placeholder="Confirme a sua senha" value={password} onChange={e => setPassword(e.target.value)} />
                <Button>Atualizar informações</Button>
            </Form>
        </Layout>
    )
}

const Label = styled.p`
    color: black;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;

    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 15px;
    }
`

const Input = styled.input`
    border-radius: 5px;
    /* border: 0; */
    margin-bottom: 15px;
    height: 50px;
    padding-left: 15px;
    width: 90%;
    box-sizing: border-box;

    border: 1px solid #e91e63;
`

const Button = styled.button`
    border-radius: 5px;
    border: 0;
    height: 50px;
    background-color: #e91e63;
    color: white;
    font-weight: bold;
    font-size: 20px;

    width: 90%;
    box-sizing: border-box;
    margin-top: 10px;

    :hover{
        cursor: pointer;
    }
`