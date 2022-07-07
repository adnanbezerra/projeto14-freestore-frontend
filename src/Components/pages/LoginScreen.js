import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import logo from '../assets/images/logo.png';

export default function TelaLogin() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const { setUser } = useContext(UserContext);


    const navigate = useNavigate();

    function submitForm(event) {
        event.preventDefault();
        const login = {email, password}

        axios.post('http://localhost:5000/login', login)
            .then( response => {
                navigate('/')
                setUser(response.data);
            })
            .catch( error => {
                alert('Problema no login! Tente novamente.')
                console.log(error);
            })

    }

    return (
        <Container>
            <Title> <img src={logo} alt={""} style={{marginRight: '5px', marginBottom: '10px'}} /> FreeStore</Title>

            <Form onSubmit={submitForm}>

                <Label>E-mail</Label>
                <Input type={"email"} placeholder={'E-mail'} value={email} onChange={e => setEmail(e.target.value)} />
                <Label>Senha</Label>
                <Input type={'password'} placeholder={'Senha'} value={password} onChange={e => setPassword(e.target.value)} />
                <Button>Login</Button>

            </Form>

            <Register>Primeira vez? <Link to='/register' style={{ fontWeight: 'bold', color: '#e91e63' }}>Registre-se agora!</Link></Register>

        </Container>
    )
}

const Register = styled.p`
    color: white;
    font-size: 16px;
    position: fixed;
    bottom: 25px;
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
    background-color: #e91e63;
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
    display: flex;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212529;
`