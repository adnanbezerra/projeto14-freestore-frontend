import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../templates/layout/Layout";
import PageTitle from "../../templates/page-title/PageTitle";
import { PaymentCard, PurchaseWrapper } from "./PurchaseStyle";
import { GiSwipeCard } from 'react-icons/gi'
import { RiBarcodeLine } from 'react-icons/ri'
import axios from "axios";
import { BASE_URL, config } from "../../../mock/data";
import UserContext from "../../contexts/UserContext";
import { IoCheckmarkCircle } from "react-icons/io5";
import dayjs from "dayjs";
import { ThreeCircles } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function PurchaseScreen() {
    const location = useLocation()
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const [isFinalize, setIsFinalize] = useState(false)
    const [loading, setLoading] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('')
    const { user, setUser } = useContext(UserContext)
    const [payment, setPayment] = useState([
        { method: 'Cartão de Crédito', choose: false, icon: <GiSwipeCard className="icon" /> },
        { method: 'Cartão de Débito', choose: false, icon: <GiSwipeCard className="icon" /> },
        { method: 'Boleto', choose: false, icon: <RiBarcodeLine className="icon" /> }
    ])

    useEffect(() => {
        if (location.state) {
            setTotal(location.state.total)
        } else {
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function chooseMethod(index) {
        for (let i = 0; i < payment.length; i++) {
            if (payment[i].choose === true) {
                payment[i].choose = false
            }
        }
        payment[index].choose = true
        setPayment([...payment])
        setPaymentMethod(payment[index].method)
    }

    async function buyProducts() {
        const sell = { ...location.state, paymentMethod, date: dayjs().format('DD/MM/YYYY') }

        try {
            setLoading(true)

            await axios.post(`${BASE_URL}/sells`, sell, config(user.token, user.refreshToken))
            await axios.delete(`${BASE_URL}/carts/${location.state.userId}`, config(user.token, user.refreshToken))

            setLoading(false)
            setIsFinalize(true)

            setTimeout(() => navigate('/'), 2500)
        } catch (err) {
            console.log(err)

            if (err.response.data.newToken) {
                let userLocal = JSON.parse(localStorage.getItem('user'))
                userLocal.token = err.response.data.newToken
    
                localStorage.setItem('user', JSON.stringify(userLocal))
                setUser({ ...userLocal })
                await buyProducts()
            }

            alert('falha')
            setLoading(false)
        }
    }

    return (
        <Layout>
            {isFinalize ? '' : <PageTitle title="Preço" subtitle="Total" />}
            <PurchaseWrapper>
                {isFinalize ? (
                    <div className="finalized">
                        <IoCheckmarkCircle className="check" />
                        <h3>Compra Finalizada!</h3>
                    </div>
                ) : (
                    <>
                        <h1>R$ {total}</h1>
                        <h2>Metodo de pagamento</h2>
                        <div className="payment">
                            {payment.map((pay, i) =>
                                <PaymentCard key={i} methodSelected={pay.choose} onClick={() => chooseMethod(i)}>
                                    {pay.icon}
                                    <p>{pay.method}</p>
                                </PaymentCard>
                            )}
                        </div>
                        <div className="buy-button" onClick={buyProducts}>{loading ? <ThreeCircles color="#fff" width="40px" height="40px" /> : 'Comprar'}</div>
                    </>
                )}
            </PurchaseWrapper>
        </Layout>
    )
}