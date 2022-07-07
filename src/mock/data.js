import roupa1 from '../Components/assets/images/roupa1.jpg'
import roupa2 from '../Components/assets/images/roupa2.jpg'
import pc1 from '../Components/assets/images/pc1.jpg'
import tenis1 from '../Components/assets/images/tenis1.jpg'

import sports from '../Components/assets/images/category-sports.jpg'
import clothes from '../Components/assets/images/category-clothes.jpg'
import furniture from '../Components/assets/images/category-furniture.jpg'
import cosmetics from '../Components/assets/images/category-cosmetics.jpg'
import eletronics from '../Components/assets/images/category-eletronics.jpg'
import books from '../Components/assets/images/category-books.jpg'
import toys from '../Components/assets/images/category-toys.jpg'
import appliances from '../Components/assets/images/category-appliances.jpg'

const BASE_URL = 'http://localhost:5000'

const config = (token, refresh) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Refresh": `${refresh}`,
            "Access-Control-Allow-Origin": '*'
        }
    }
}

const categories = [
    { name: 'Esportes', img: sports },
    { name: 'Roupas', img: clothes },
    { name: 'Moveis', img: furniture },
    { name: 'Cosmeticos', img: cosmetics },
    { name: 'Eletronicos', img: eletronics },
    { name: 'Livros', img: books },
    { name: 'Brinquedos', img: toys },
    { name: 'Eletrodomesticos', img: appliances }
]

const carouselImages = [
    roupa1,
    roupa2,
    pc1, 
    tenis1
]

export { BASE_URL, config, categories, carouselImages }