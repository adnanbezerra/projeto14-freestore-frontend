import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Layout from "../templates/layout/Layout";
import axios from "axios";
import { BASE_URL, config } from "../../shared/data";

export default function CreateProduct() {

    const { user, setUser } = useContext(UserContext);
    const verifyUser = user.token === undefined;
    const navigate = useNavigate();
    const [category, setCategory] = useState("Esportes");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [imageThree, setImageThree] = useState("");
    const [imageFour, setImageFour] = useState("");

    const categories = [
        {
            name: 'Esportes',
            value: 'Esportes'
        },
        {
            name: 'Roupas',
            value: 'Roupas'
        },
        {
            name: 'Móveis',
            value: 'Moveis'
        },
        {
            name: 'Cosméticos',
            value: 'Cosmeticos'
        },
        {
            name: 'Eletrônicos',
            value: 'Eletronicos'
        },
        {
            name: 'Livros',
            value: 'Livros'
        },
        {
            name: 'Brinquedos',
            value: 'Brinquedos'
        },
        {
            name: 'Eletrodomésticos',
            value: 'Eletrodomesticos'
        }
    ]

    useEffect(() => {
        if (verifyUser) navigate('/login', { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function submitForm(e) {
        e.preventDefault();

        let images = [imageOne, imageTwo, imageThree, imageFour];
        let finalImages = []

        for(let i = 0; i < images.length; i++) {
            if (images[i].startsWith('https://')) {
                finalImages.push(images[i])  
            } else if(images[i] !== '' && !images[i].startsWith('https://')) {
                return alert('insira uma url de imagem valida')
            }
        }

        const header = config(verifyUser ? "" : user.token, verifyUser ? "" : user.refreshToken)

        const seller = verifyUser ? "" : user.name;

        const newProduct = { name, seller, sellerId: user._id, description, price, quantity, category, images: finalImages }

        try {
            await axios.post(`${BASE_URL}/new-product`, newProduct, header)

            alert("Produto cadastrado com sucesso!");
            navigate("/");
        } catch (error) {
            console.error(error);
            if (error.response.data.newToken) {
                let userLocal = JSON.parse(localStorage.getItem('user'))
                userLocal.token = error.response.data.newToken

                localStorage.setItem('user', JSON.stringify(userLocal))
                setUser({ ...userLocal })
                await submitForm(e)
            }
        }
    }

    function handlePriceChange(e) {
        const entrance = parseFloat(e.target.value)
        if (isNaN(entrance)) return;
        if (typeof entrance === 'number') setPrice(entrance);
    }

    function handleQuantityChange(e) {
        const entrance = parseFloat(e.target.value)
        if (isNaN(entrance)) return;
        if (entrance % 1 !== 0) return;
        if (typeof entrance === 'number') setQuantity(entrance);
    }

    return (
        <Layout>
            <Form onSubmit={submitForm}>
                <Title>Cadastre o seu produto para venda!</Title>
                <Label>Nome do produto</Label>
                <Input value={name} onChange={e => setName(e.target.value)} required />
                <Label>Descrição do item</Label>
                <Input value={description} onChange={e => setDescription(e.target.value)} required />
                <Label>Preço</Label>
                <Input type='number' min='0' step='0.01' value={price} onChange={e => handlePriceChange(e)} required />
                <Label>Quantidade de itens</Label>
                <Input type='number' min='0' step='1' value={quantity} onChange={e => handleQuantityChange(e)} required />
                <Label>Selecione a categoria</Label>
                <SelectContainer>
                    <Select onChange={e => setCategory(e.target.value)}>
                        {categories.map(option => {
                            return (
                                <option value={option.value}>{option.name}</option>
                            )
                        })}
                    </Select>
                </SelectContainer>

                <Label>Insira a foto 1 (Obrigatório)</Label>
                <Input value={imageOne} onChange={e => setImageOne(e.target.value)} required />

                <Label>Insira a foto 2 (Opcional)</Label>
                <Input value={imageTwo} onChange={e => setImageTwo(e.target.value)} />

                <Label>Insira a foto 3 (Opcional)</Label>
                <Input value={imageThree} onChange={e => setImageThree(e.target.value)} />

                <Label>Insira a foto 4 (Opcional)</Label>
                <Input value={imageFour} onChange={e => setImageFour(e.target.value)} />

                <Button>Vender produto!</Button>
            </Form>
        </Layout>
    )
}

const Title = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: #e91e63;
    margin-bottom: 10px;
    text-align: center;
`

const Select = styled.select`
    width: 90%;
    height: 50px;
    background-color: white;
    border: 1px solid #e91e63;
    border-radius: 5px;
    padding-left: 10px;
    font-weight: bold;
`

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
`

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