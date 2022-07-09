import { PriceAndName, Quantity, ShowProductWrapper } from "./ShowProductCardStyle";
import { FaShoppingCart } from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel";

export default function ShowProductCard({ images, name, price, category, seller, description, amount, insertToCart, quantity, setQuantity }) {
    function restringeQuantity(action) {
        if(action === '+') {
            if(quantity < amount) {
                setQuantity(quantity + 1)
            }
        } else {
            if(quantity > 0) {
                setQuantity(quantity - 1)
            }
        }
    }

    return (
        <ShowProductWrapper>
            <div className="product-images">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className="carousel">
                    {images ? images.map((image, i) =>
                        <div key={i}>
                            <img style={{ height: '550px', objectFit: 'contain' }} src={image} alt="carousel-product" />
                        </div>
                    ) : ''}
                </Carousel>
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
                        <button onClick={() => restringeQuantity('+')}><span>+</span></button>
                        <button className="quantity"><span>{quantity}</span></button>
                        <button onClick={() => restringeQuantity('-')}><span>-</span></button>
                    </div>
                </Quantity>
                {amount === 0 ? <h3 style={{ color: 'red' }}>Produto indisponivel</h3> : <h3>Quantidade disponível: {amount}</h3>}
                <button className="cart" onClick={() => amount === 0 ? false : insertToCart()}><FaShoppingCart /></button>
            </div>
        </ShowProductWrapper>
    )
}