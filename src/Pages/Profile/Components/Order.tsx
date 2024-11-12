import { orderResponse, cartItemType, orderProductResponse } from "../../../utils/types"
import OrderProduct from '../../../Components/OrderProduct'
import styles from './Order.module.css'
import { useState, useEffect } from 'react'
const host = import.meta.env.VITE_PRODUCT_HOST

type OrderProps = {
    order: orderResponse
}
export default function Order({ order }: OrderProps) {
    const [expanded, setExpanded] = useState(false)
    const [products, setProducts] = useState<cartItemType[] | []>([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (order.OrderProducts.length) {
            setTotal(order.OrderProducts.reduce((acc, product) => acc += (product.amount * product.price), 0))
        }
        let tmp: orderProductResponse[] = []
        async function getData() {
            order.OrderProducts.forEach(async product => {
                const response = await fetch(`${host}/products/${product.product}`)
                const data = await response.json()
                tmp.push({ ...product, product: data[0] })
            })
            setProducts(tmp)
        }
        getData()
    }, [order])

    function handleClick() {
        setExpanded(!expanded)
    }

    return (
        <div className={styles.container}>
            <div className={styles.order}>
                <p className={styles.text}>order #{order.id}</p>
                <p className={styles.text}>status: {'processing'}</p>
                <p className={styles.text}>total: {total}</p>
                <button className={styles.button} onClick={handleClick}>view order</button>
            </div >
            <div className={`${!expanded && styles.hidden} ${styles.products}`}>
                {products.length > 0 && products.map((product, i) => <OrderProduct key={product.product.id} order={order.OrderProducts[i]} item={product} />)}
            </div>
        </div>
    )
}
