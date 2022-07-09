import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Layout from "../templates/layout/Layout";
import axios from "axios";
import { BASE_URL, config } from "../../mock/data";

export default function CreateProduct() {

    const { user } = useContext(UserContext);
    const verifyUser = user === undefined;
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const categories = [
        {
            name: 'Esportes',
            value: 'esportes'
        },
        {
            name: 'Roupas',
            value: 'roupas'
        },
        {
            name: 'Móveis',
            value: 'moveis'
        },
        {
            name: 'Cosméticos',
            value: 'cosmeticos'
        },
        {
            name: 'Eletrônicos',
            value: 'eletronicos'
        },
        {
            name: 'Livros',
            value: 'livros'
        },
        {
            name: 'Brinquedos',
            value: 'brinquedos'
        },
        {
            name: 'Eletrodomésticos',
            value: 'eletrodomesticos'
        }
    ]

    // useEffect(() => {
    //     if (verifyUser) navigate('/login', { replace: true });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    function submitForm(e) {
        e.preventDefault();

        const header = config(verifyUser ? "" : user.token, verifyUser ? "" : user.refresh)

        const newProduct = { name, description, price, quantity, category }
        axios.post(`${BASE_URL}/sells`, newProduct, header)
            .then( response => {
                alert("Produto cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    function handlePriceChange(e) {
        if(typeof e.target.value === 'number') setPrice(e.target.value);
    }

    function handleQuantityChange(e) {
        if(typeof e.target.value === 'number') setQuantity(e.target.value);
    }

    return (
        <Layout>
            <Form onSubmit={submitForm}>
                <Title>Cadastre o seu produto para venda!</Title>
                <Label>Nome do produto</Label>
                <Input value={name} onChange={e => setName(e.target.value)} />
                <Label>Descrição do item</Label>
                <Input value={description} onChange={e => setDescription(e.target.value)} />
                <Label>Preço</Label>
                <Input type='number' value={price} onChange={e => handlePriceChange(e)} />
                <Label>Quantidade de itens</Label>
                <Input type='number' value={quantity} onChange={e => handleQuantityChange(e)} />
                <Label>Selecione a categoria</Label>
                <SelectContainer>
                    <Select onChange={e => setCategory(e.target.value)}>
                        {categories.map(option => {
                            <option>Que palhaçada é essa?</option>
                            return (
                                <option value={option.value}>{option.name}</option>
                            )
                        })}
                    </Select>
                </SelectContainer>

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