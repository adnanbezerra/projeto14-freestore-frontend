import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, config } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import CartCard from "../../templates/cart-card/CartCard";
import Layout from "../../templates/layout/Layout";
import PageTitle from "../../templates/page-title/PageTitle";
import { CartButtons, CartWrapper } from "./CartStyle";

export default function CartScreen() {
    const navigate = useNavigate()
    const [productsOnCart, setProductsOnCart] = useState([])
    const [cartId, setCartId] = useState('')
    const [userId, setUserId] = useState('')
    const [total, setTotal] = useState(0)
    const isEmpty = productsOnCart.length > 0
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        getCartProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getCartProducts() {
        if (user.token === undefined && localStorage.getItem('cartLocal') !== null) {
            const cartLocal = JSON.parse(localStorage.getItem('cartLocal'))

            setProductsOnCart(cartLocal)
            totalCart(cartLocal)
        } else {
            const cartData = await axios.get(`${BASE_URL}/carts`, config(user.token, user.refreshToken))

            setProductsOnCart(cartData.data.productsOnCart)
            setCartId(cartData.data._id)
            setUserId(cartData.data.userId)
            totalCart(cartData.data.productsOnCart)
        }
    }

    async function deleteCartProduct(id, quantity) {
        const productData = await axios.get(`${BASE_URL}/products/${id}`, config(user.token, user.refreshToken))
        let productUpdate = productData.data
        productUpdate.quantity += quantity

        if (user.token === undefined && localStorage.getItem('cartLocal') !== null) {
            await axios.put(`${BASE_URL}/products/${productUpdate._id}`, productUpdate, config(user.token, user.refreshToken))

            for (let i = 0; i < productsOnCart.length; i++) {
                if (productsOnCart[i]._id === id) {
                    productsOnCart.splice(i, 1)
                }
            }

            localStorage.setItem('cartLocal', JSON.stringify(productsOnCart))
            totalCart(productsOnCart)
            setProductsOnCart([...productsOnCart])
        } else {
            try {
                await axios.put(`${BASE_URL}/products/${productUpdate._id}`, productUpdate, config(user.token, user.refreshToken))
                await axios.delete(`${BASE_URL}/carts/${cartId}/${id}`, config(user.token, user.refreshToken))
    
                for (let i = 0; i < productsOnCart.length; i++) {
                    if (productsOnCart[i]._id === id) {
                        productsOnCart.splice(i, 1)
                    }
                }
    
                totalCart(productsOnCart)
                setProductsOnCart([...productsOnCart])
            } catch (error) {
                if (error.response.data.newToken) {
                    let userLocal = JSON.parse(localStorage.getItem('user'))
                    userLocal.token = error.response.data.newToken
    
                    localStorage.setItem('user', JSON.stringify(userLocal))
                    setUser({ ...userLocal })
                    await deleteCartProduct(id, quantity)
                }
            }
        }
    }

    function totalCart(cart) {
        let total = 0

        for (let i = 0; i < cart.length; i++) {
            total += (cart[i].price * cart[i].quantity)
        }

        setTotal(total.toFixed(2))
    }

    function finalizePurchase() {
        if (localStorage.getItem('cartLocal') !== null) {
            navigate('/login')
        } else {
            navigate('/finalize-purchase', { state: { userId, productsOnCart, total } })
        }
    }

    return (
        <Layout>
            <PageTitle title="Meu" subtitle="Carrinho" />
            <CartWrapper isEmpty={isEmpty}>
                {isEmpty ? (
                    <>
                        <div className="carts">
                            {productsOnCart.map(product =>
                                <CartCard key={product._id}
                                    category={product.category} img={product.images[0]} name={product.name} price={product.price} quantity={product.quantity}
                                    deleteCartProduct={() => deleteCartProduct(product._id, product.quantity)}
                                    productPage={() => navigate(`/product/${product.category}/${product._id}`)} />
                            )}
                        </div>
                        <CartButtons>
                            <div className="total">
                                <h1>Total</h1>
                                <p>R$ {total}</p>
                            </div>
                            <div onClick={() => navigate('/categories')}>Adicionar mais itens</div>
                            <div onClick={finalizePurchase}>Prosseguir</div>
                        </CartButtons>
                    </>
                ) : <div className="no-products"><h1>Ainda n??o tem nenhum produto no seu carrinho...</h1></div>}
            </CartWrapper>
        </Layout>
    )
}