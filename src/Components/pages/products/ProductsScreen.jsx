import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProducts } from "../../../functions/products"
import Layout from "../../templates/layout/Layout"
import PageTitle from "../../templates/page-title/PageTitle"
import ProductCard from "../../templates/product-card/ProductCard"
import { ProductsWrapper } from "./ProductsStyle"

export default function ProductsScreen() {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getProducts(setProducts, '', name)
    }, [name])

    return (
        <Layout>
            <ProductsWrapper>
                <PageTitle title="Pesquisa" subtitle={name === 'all' ? 'Todos' : name} />
                <div className="products">
                    {products.map(product => 
                        <ProductCard key={product._id} 
                            backgroundImg={product.images[0]} 
                            name={product.name} 
                            price={product.price}
                            showProduct={() => navigate(`/product/${product.category}/${product._id}`)}
                        />
                    )}
                </div>
            </ProductsWrapper>
        </Layout>
    )
}