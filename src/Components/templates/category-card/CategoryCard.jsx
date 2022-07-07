import { CategoryCardWrapper } from "./CategoryCardStyle";

export default function CategoryCard({ img, name, onClick }) {
    return (
        <CategoryCardWrapper onClick={() => onClick()}>
            <div>
                <img src={img} alt="category" />
            </div>
            <p>{name}</p>
        </CategoryCardWrapper>
    )
}   