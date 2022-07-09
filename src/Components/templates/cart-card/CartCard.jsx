import { CardContent, CartCardWrapper, DeleteButton } from "./CartCardStyle";
import { FaTrash } from 'react-icons/fa'

export default function CartCard({ img, name, category, price, quantity, deleteCartProduct, productPage }) {
    return (
        <CartCardWrapper>
            <CardContent>
                <img src={img} alt="cart-card" />
                <div className="product-info">
                    <div>
                        <h1 onClick={() => productPage()}>{name}</h1>
                        <h2>{category}</h2>
                    </div>
                    <div>
                        <p>R$ {price}</p>
                        <h3>Quantidade: {quantity}</h3>
                    </div>
                </div>
            </CardContent>
            <DeleteButton onClick={() => deleteCartProduct()}>
                <FaTrash />
            </DeleteButton>
        </CartCardWrapper>
    )
}