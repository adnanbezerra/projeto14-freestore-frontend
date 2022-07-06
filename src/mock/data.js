const BASE_URL = 'http://localhost:5000'

const config = (token) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": '*'
        }
    }
}

const categories = [
    'Esportes',
    'Roupas',
    'furniture',
    'cosmetics',
    'eletronics',
    'books',
    'toys',
    'appliances'
]

export { BASE_URL, config, categories }