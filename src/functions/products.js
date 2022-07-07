import axios from "axios"
import { BASE_URL } from "../mock/data"

async function getProducts(setProducts, category = '') {
    const productsData = await axios.get(`${BASE_URL}/products?category=${category}`)
    setProducts(productsData.data)
}

export { getProducts }