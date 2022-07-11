import Layout from "../../templates/layout/Layout";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getProducts } from "../../../functions/products";
import PageTitle from "../../templates/page-title/PageTitle";
import { categories } from "../../../mock/data";
import CategoryCard from "../../templates/category-card/CategoryCard";
import ProductCard from "../../templates/product-card/ProductCard";
import { CategoriesWrapper } from "./CategoriesStyle";

export default function CategoriesScreen() {
    const { category } = useParams()
    const navigate = useNavigate()
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        if(category !== undefined) {
            getProducts(setProductsByCategory, category)
        }
    }, [category])

    return (
        <Layout>
            <PageTitle title={category !== undefined ? "Produtos" : "Categorias dos"} subtitle={category !== undefined ? category : "Produtos"} />
            <CategoriesWrapper>
                {category ? (
                    <div className="products-category">
                        {productsByCategory.map(product =>  
                            <ProductCard key={product._id} backgroundImg={product.images[0]} name={product.name} price={product.price}
                                showProduct={() => navigate(`/product/${product.category}/${product._id}`)} />
                        )}
                    </div>
                ) : (
                    <div className="categories">
                        {categories.map((category, i) => 
                            <CategoryCard key={i} img={category.img} name={category.name}
                                        onClick={() => { getProducts(setProductsByCategory, category.name); navigate(`/categories/${category.name}`); }} />
                        )}
                    </div>
                )}
            </CategoriesWrapper>
        </Layout>
    )
}