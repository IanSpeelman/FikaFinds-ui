import { useNavigate } from "react-router-dom"
import { orderResponse, user } from "../../utils/types"
import { useEffect, useState } from "react"
import Order from "../Profile/Components/Order"
import Hero from "../../Components/Hero"
import styles from './index.module.css'

const host = import.meta.env.VITE_ORDERS_HOST

type ProfileProps = {
    user: user | null
}

export default function Profile({ user }: ProfileProps) {
    const navigate = useNavigate()
    const [orders, setOrders] = useState<orderResponse[] | []>([])


    useEffect(() => {
        async function getOrders() {
            const response = await fetch(`${host}/orders/user/${user?.id}`, {
                headers: {
                    'Authorization': localStorage.getItem('Authorization-token') || ''
                },
            })
            if (response.ok) {
                const data = await response.json()
                setOrders(data)
            }
        }

        if (!user) {
            navigate('/login')
        }
        else {
            getOrders()
        }
    }, [user])

    return (
        <div className={styles.container}>
            <Hero header='Profile' size="medium" />
            <div className={styles.orders}>
                <h1>Orders</h1>
                {orders.length > 0 && orders.map(order => <Order key={order.id} order={order} />)}
                {!orders.length && <p>No orders found</p>}
            </div>
        </div>
    )
}
