import { ProductCardWrapper } from "./ProductCardStyle";
import { FaShoppingCart } from 'react-icons/fa'

export default function ProductCard({ backgroundImg, name, price, showProduct }) {
    return (
        <ProductCardWrapper backgroundImage={backgroundImg}>
            <div onClick={() => showProduct()}>
                <h2>{name}</h2>
                <p>R$ {price}</p>
            </div>
            <button onClick={() => showProduct()}>
                <FaShoppingCart />
            </button>
        </ProductCardWrapper>
    )   
}