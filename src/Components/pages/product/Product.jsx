import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, getProducts } from "../../../functions/products";
import { BASE_URL, config } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import Layout from "../../templates/layout/Layout";
import ProductCard from "../../templates/product-card/ProductCard";
import ShowProductCard from "../../templates/show-product-card/ShowProductCard";
import PageTitle from './../../templates/page-title/PageTitle';
import { RelatedProdutcsWrapper } from "./ProductStyle";

export default function Product() {
    const { category, id } = useParams()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        getProducts(setProducts, category)
        getProduct(setProduct, id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    async function insertToCart() {
        if (quantity === 0) return alert('precisa colocar pelo menos 1 quantidade do produto')

        let insertProduct = { ...product }
        let productUpdate = { ...product }

        insertProduct.quantity = quantity
        productUpdate.quantity -= quantity

        if (user.token === undefined && localStorage.getItem('cartLocal') === null) {
            await axios.put(`${BASE_URL}/products/${productUpdate._id}`, productUpdate, config(user.token, user.refreshToken))

            localStorage.setItem('cartLocal', JSON.stringify([insertProduct]))

            navigate('/cart')
        } else if (user.token === undefined && localStorage.getItem('cartLocal') !== null) {
            let cartLocal = JSON.parse(localStorage.getItem('cartLocal'))

            const productOnCart = cartLocal.find(product => product._id === insertProduct._id)

            if (productOnCart !== undefined) {
                for (let i = 0; i < cartLocal.length; i++) {
                    if (cartLocal[i]._id === insertProduct._id) {
                        cartLocal[i].quantity += insertProduct.quantity
                    }
                }

                await axios.put(`${BASE_URL}/products/${productUpdate._id}`, productUpdate, config(user.token, user.refreshToken))

                localStorage.setItem('cartLocal', JSON.stringify(cartLocal))
            } else {
                await axios.put(`${BASE_URL}/products/${productUpdate._id}`, productUpdate, config(user.token, user.refreshToken))

                cartLocal.push(insertProduct)
                localStorage.setItem('cartLocal', JSON.stringify(cartLocal))
            }

            navigate('/cart')
        } else {
            try {
                const cartData = await axios.get(`${BASE_URL}/carts`, config(user.token, user.refreshToken))

                if (localStorage.getItem('cartLocal') === null) {
                    const isCart = cartData.data === null
                    const method = isCart ? 'post' : 'put'
                    const id = isCart ? '' : cartData.data._id

                    await axios.put(`${BASE_URL}/products/${productUpdate._id}`, productUpdate, config(user.token, user.refreshToken))
                    await axios[method](`${BASE_URL}/carts/${id}`, insertProduct, config(user.token, user.refreshToken))
                }

                navigate('/cart')
            } catch (err) {
                console.log(err)
                if (err.response.data.newToken) {
                    let userLocal = JSON.parse(localStorage.getItem('user'))
                    userLocal.token = err.response.data.newToken

                    localStorage.setItem('user', JSON.stringify(userLocal))
                    setUser({ ...userLocal })
                    window.location.reload()
                }
            }
        }
    }

    return (
        <Layout>
            <PageTitle title={category} subtitle={product.name} />
            <ShowProductCard
                images={product.images}
                name={product.name}
                category={product.category}
                description={product.description}
                price={product.price}
                seller={product.seller}
                amount={product.quantity}
                quantity={quantity}
                setQuantity={setQuantity}
                insertToCart={() => insertToCart()}
            />
            <PageTitle title="Produtos" subtitle="Relacionados" />
            <RelatedProdutcsWrapper>
                {products.map(product => {
                    if (product._id !== id) {
                        return (
                            <ProductCard key={product._id} backgroundImg={product.images[0]} name={product.name} price={product.price}
                                showProduct={() => navigate(`/product/${product.category}/${product._id}`)} />
                        )
                    }
                    return ''
                })}
            </RelatedProdutcsWrapper>
        </Layout>
    )
}