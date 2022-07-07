import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../../functions/products";
import Layout from "../../templates/layout/Layout";
import ProductCard from "../../templates/product-card/ProductCard";
import ShowProductCard from "../../templates/show-product-card/ShowProductCard";
import PageTitle from './../../templates/page-title/PageTitle';
import { RelatedProdutcsWrapper } from "./ProductStyle";

export default function Product() {
    const { category, id } = useParams()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts, category)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <PageTitle title={category} subtitle="produto" />
            <ShowProductCard />
            <PageTitle title="Produtos" subtitle="Relacionados" />
            <RelatedProdutcsWrapper>
                {products.map(product => {
                    if(product._id !== id) {
                        return (
                            <ProductCard key={product._id} backgroundImg={product.image} name={product.name} price={product.price}
                                showProduct={() => navigate(`/product/${product.category}/${product._id}`)} sendToCart={() => navigate('/categories')} />
                        )
                    }
                    return <></>
                })}
            </RelatedProdutcsWrapper>
        </Layout>
    )
}