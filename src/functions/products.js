import axios from "axios"
import { BASE_URL } from "../shared/data"

async function getProducts(setProducts, category = '', name = '', sellerId = '') {
    const productsOrSeller = name !== '' ? 
        `name=${name}` : category !== '' ? 
        `category=${category}` : sellerId !== '' ? 
        `sellerId=${sellerId}` : ''

    const productsData = await axios.get(`${BASE_URL}/products?${productsOrSeller}`)
    setProducts(productsData.data)
}

async function getProduct(setProduct, id) {
    const productData = await axios.get(`${BASE_URL}/products/${id}`)
    setProduct(productData.data)
}

export { getProducts, getProduct }