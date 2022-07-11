import { SellerCardWrapper } from "./SellerCardStyle";

export default function SellerCard({ backgroundImg, sellerProducts, seller }) {
    return (
        <SellerCardWrapper backgroundImg={backgroundImg} onClick={() => sellerProducts()}>
            <div>
                <h1>{seller}</h1>
            </div>
        </SellerCardWrapper>
    )
}