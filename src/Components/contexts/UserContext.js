import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL, config } from "../../mock/data";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const userAuth = JSON.parse(localStorage.getItem("user"))

    if (user.token !== undefined) {
        localStorage.setItem("user", JSON.stringify(user))
    } else if (localStorage.getItem("user") !== null) {
        if (!userAuth.name || !userAuth.profilePicture || !userAuth.token) {
            localStorage.clear()
        } else {
            if (localStorage.getItem("cartLocal") !== null) {
                setUser(userAuth)

                const cartLocal = JSON.parse(localStorage.getItem("cartLocal"))

                insertCartLocal(cartLocal, userAuth.token, userAuth.refreshToken)
            } else {
                setUser(userAuth)
            }
        }
    }


    async function insertCartLocal(cartLocal, token, refreshToken) {
        const cartData = await axios.get(`${BASE_URL}/carts`, config(token, refreshToken))

        if(cartData.data === null) {
            await axios.post(`${BASE_URL}/carts`, { cartLocal }, config(token, refreshToken))

            localStorage.removeItem('cartLocal')
        } else {
            // FAZER A PARTE DE SE O USUARIO TIVER ITENS NO CARRINHO E INSERIR ITEMS DESLOGADO ASSIM PEGAR OS ITENS DO LOCALSTORAGE
            // const cartData = await axios.get(`${BASE_URL}/carts`, config(token, refreshToken))
            // await axios.put(`${BASE_URL}/carts/${cartData._id}`, { cartLocal }, config(token, refreshToken))

            localStorage.removeItem('cartLocal')
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;