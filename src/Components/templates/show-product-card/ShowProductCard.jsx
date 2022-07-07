import { PriceAndName, Quantity, ShowProductWrapper } from "./ShowProductCardStyle";
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from "react";

export default function ShowProductCard({ img, name, price, category, seller, description }) {
    const [quantity, setQuantity] = useState(0)

    return (
        <ShowProductWrapper>
            <div className="product-images">
                <img src={img} alt="product-show" />
            </div>
            <div className="product-infos">
                <PriceAndName>
                    <h1>{name}</h1>
                    <h2>R$ {price}</h2>
                </PriceAndName>

                <div>
                    <h3>Categoria: {category}</h3>
                    <h4>Vendedor: {seller}</h4>
                </div>

                <p>{description}</p>

                <Quantity>
                    <h2>Quantidade</h2>
                    <div>
                        <button onClick={() => setQuantity(quantity + 1)}><span>+</span></button>
                        <button className="quantity"><span>{quantity}</span></button>
                        <button onClick={() => setQuantity(quantity - 1)}><span>-</span></button>
                    </div>
                </Quantity>
                <button className="cart"><FaShoppingCart /></button>
            </div>
        </ShowProductWrapper>
    )
}