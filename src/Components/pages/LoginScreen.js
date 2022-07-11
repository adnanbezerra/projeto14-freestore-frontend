import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import logo from '../assets/images/logo.png';
import { BASE_URL } from '../../mock/data';

export default function TelaLogin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [forgotPassword, setForgotPassword] = useState(false)
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();
    const { resetPassword, sendedEmail } = useParams()

    useEffect(() => {
        if(!resetPassword && !resetPassword === 'reset-password') {
            navigate('/login', { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function submitForm(event) {
        event.preventDefault();
        const login = { email, password }

        axios.post('http://localhost:5000/login', login)
            .then(response => {
                navigate('/')
                setUser(response.data);
                window.location.reload()
            })
            .catch(error => {
                alert('Problema no login! Tente novamente.')
                console.log(error);
            })
    }

    async function sendEmailReset(e) {
        e.preventDefault()

        try {
            await axios.post(`${BASE_URL}/email-reset-password`, { email })

            alert(`Email de redefinição de senha enviado para o email: ${email}`)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    async function resetUserPassword(e) {
        e.preventDefault()

        try {
            await axios.post(`${BASE_URL}/reset-password`, { email: sendedEmail, password })

            alert('Senha redefinida!')
            navigate('/login')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <Container>
            <Title onClick={() => navigate('/')}> <img src={logo} alt={""} style={{ marginRight: '5px', marginBottom: '10px' }} /> FreeStore</Title>

            <Form onSubmit={resetPassword && resetPassword === 'reset-password' ? resetUserPassword : forgotPassword ? sendEmailReset : submitForm}>

            {resetPassword && resetPassword === 'reset-password' ? (
                <>
                    <Label>Nova Senha</Label>
                    <Input type={'password'} placeholder={'Digite sua nova senha'} value={password} onChange={e => setPassword(e.target.value)} />
                    <Button>Redefinir Senha</Button>
                </>
            ) : (
                <>
                    <Label>E-mail</Label>
                    <Input type={"email"} placeholder={'E-mail'} value={email} onChange={e => setEmail(e.target.value)} />
                    {forgotPassword ? (
                        <>
                            <h3 onClick={() => setForgotPassword(false)}>Voltar</h3>
                            <Button>Enviar email para redefinição de senha</Button>
                        </>
                    ) : (
                        <>
                            <Label>Senha</Label>
                            <Input type={'password'} placeholder={'Senha'} value={password} onChange={e => setPassword(e.target.value)} />
                            <h3 onClick={() => setForgotPassword(true)}>Esqueceu a senha?</h3>
                            <Button>Login</Button>
                        </>
                    )}
                </>
            )}

            </Form>

            <Register>Primeira vez? <Link to='/register' style={{ fontWeight: 'bold', color: '#e91e63' }}>Registre-se agora!</Link></Register>

        </Container >
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

    h3 {
        text-decoration: underline;
        color: #fff;
        font-weight: 200;
        margin-bottom: 15px;
        cursor: pointer;
        width: fit-content;
    }

    h3:hover {
        filter: brightness(0.8);
    }
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