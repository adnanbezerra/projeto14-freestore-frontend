import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import logo from '../assets/images/logo.png';
import { BASE_URL } from '../../mock/data';

export default function RegisterScreen() {

    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const { setUser } = useContext(UserContext);
    const [disable, setDisable] = useState(false);
    const [profilePicture, setProfilePicture] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        arePasswordsEqual();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password, confirmPassword])

    function submitForm(event) {
        event.preventDefault();

        if (!profilePicture.startsWith('https://') && !profilePicture.startsWith("http://")) {
            alert("Link da foto de perfil inválido!")
            return;
        }

        const login = { email, password, profilePicture, name }

        axios.post(`${BASE_URL}/register`, login)
            .then(response => {
                navigate('/')
                setUser(response.data);
            })
            .catch(error => {
                alert('Problema no cadastro! Tente novamente.')
                console.log(error)
            })

    }

    function handleSetPassword(newPassword) {
        setPassword(newPassword);
    }

    function handleSetConfirmPassword(newPassword) {
        setConfirmPassword(newPassword);
    }

    function arePasswordsEqual() {
        if (confirmPassword === "") setDisable(false);
        else if (confirmPassword !== "" && confirmPassword === password) setDisable(false);
        else setDisable(true);
    }

    function getButton() {
        return (disable ? <Button disabled={true}>Registrar-se</Button> : <Button disabled={false}>Registrar-se</Button>)
    }

    return (
        <Container>
            <Title onClick={() => navigate('/')}> <img src={logo} alt={""} style={{ marginRight: '5px', marginBottom: '10px' }} /> FreeStore</Title>

            <Form onSubmit={submitForm}>

                <Label>Nome</Label>
                <Input type={"text"} placeholder={'Insira seu nome'} value={name} onChange={e => setName(e.target.value)} />
                <Label>E-mail</Label>
                <Input type={"email"} placeholder={'Insira seu e-mail'} value={email} onChange={e => setEmail(e.target.value)} />
                <Label>Foto de perfil</Label>
                <Input type='text' placeholder={'Link para sua foto de perfil'} value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />
                <Label>Senha</Label>
                <Input type={'password'} placeholder={'Insira sua senha'} value={password} onChange={e => handleSetPassword(e.target.value)} />
                <Label>Confirmar senha</Label>
                <Input type={"password"} placeholder={'Confirme sua senha'} value={confirmPassword} onChange={e => handleSetConfirmPassword(e.target.value)} />

                {getButton()}

            </Form>

            <Register>Já tem uma conta? <Link to='/login' style={{ fontWeight: 'bold', color: '#e91e63' }}>Faça login!</Link></Register>

        </Container>
    )
}

const Register = styled.p`
    color: white;
    font-size: 16px;
    margin-bottom: 20px;
`

const Label = styled.p`
    color: white;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
`

const Button = styled.button`
    border-radius: 5px;
    border: 0;
    height: 50px;
    background-color: ${props => props.disabled ? "#E96894" : "#e91e63"};
    color: white;
    font-weight: bold;
    font-size: 20px;

    :hover{
        cursor: pointer;
    }
`

const Input = styled.input`
    border-radius: 5px;
    border: 0;
    margin-bottom: 15px;
    height: 50px;
    padding-left: 15px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 15px;
`

const Title = styled.div`
    font-size: 35px;
    font-weight: bold;
    color: white;
    margin-bottom: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212529;
`