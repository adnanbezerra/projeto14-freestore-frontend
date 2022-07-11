import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProducts } from "../../../functions/products"
import Layout from "../../templates/layout/Layout"
import PageTitle from "../../templates/page-title/PageTitle"
import ProductCard from "../../templates/product-card/ProductCard"
import { ProductsWrapper } from "./ProductsStyle"

export default function ProductsScreen() {
    const { name, seller, id } = useParams()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if(seller && id) {
            getProducts(setProducts, '', '', id)
        } else {
            getProducts(setProducts, '', name)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    return (
        <Layout>
            <ProductsWrapper>
                <PageTitle title={seller ? 'Produtos de' : 'Pesquisa'} subtitle={name ? name === 'all' ? 'Todos' : name : seller} />
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