import { useNavigate } from "react-router-dom"
import { orderRequest, user } from "../../utils/types"
import { useEffect, useState } from "react"
import Hero from "../../Components/Hero"
const host = import.meta.env.VITE_ORDERS_HOST

type ProfileProps = {
    user: user | null
}

export default function Profile({ user }: ProfileProps) {
    const navigate = useNavigate()
    const [orders, setOrders] = useState<orderRequest[] | []>([])


    useEffect(() => {
        async function getOrders() {
            const response = await fetch(`${host}/orders/user/${user?.id}`)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
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
        <div className="container">
            <Hero header='Profile' size="medium" />
            <h1>orders</h1>
            {orders && orders.map(order => <p key={order.id}>order id: {order.id}</p>)}

        </div>
    )
}
