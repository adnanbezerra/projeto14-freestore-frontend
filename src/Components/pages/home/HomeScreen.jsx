import { categories, carouselImages } from "../../../mock/data";
import CategoryCard from "../../templates/category-card/CategoryCard";
import Layout from "../../templates/layout/Layout";
import ProductCard from "../../templates/product-card/ProductCard";
import PageTitle from "../../templates/page-title/PageTitle";
import { HomeWrapper } from "./HomeStyle";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getProducts } from "../../../functions/products";

export default function HomeScreen() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <Layout>
            <HomeWrapper>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className="carousel">
                    {carouselImages.map((image, i) =>
                        <div key={i}>
                            <img style={{ height: '550px', objectFit: 'cover' }} src={image} alt="carousel" />
                        </div>
                    )}
                </Carousel>
                <div className="cards">
                    <PageTitle title="Comprar por" subtitle="Categoria" />
                    <div>
                        {categories.map((category, i) =>
                            <CategoryCard key={i} img={category.img} name={category.name}
                                onClick={() => navigate(`/categories/${category.name}`)} />
                        )}
                    </div>
                </div>
                <div className="all-products">
                    <PageTitle title="Todos" subtitle="Produtos" />
                    <div>
                        {products.map(product => 
                            <ProductCard key={product._id} backgroundImg={product.images[0]} name={product.name} price={product.price}
                                showProduct={() => navigate(`/product/${product.category}/${product._id}`)} />
                        )}
                    </div>
                </div>
            </HomeWrapper>
        </Layout>
    )
}