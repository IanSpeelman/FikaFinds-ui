import { orderResponse, cartItemType } from "../../../utils/types"
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

    useEffect(() => {
        async function getData() {
            order.OrderProducts.forEach(async product => {
                const response = await fetch(`${host}/products/${product.product}`)
                if (response.ok) {
                    const data = await response.json()
                    setProducts([...products, { amount: data.amount, product: data }])
                }
            });
        }
        getData()



    }, [order])

    function handleClick() {
        setExpanded(!expanded)
    }

    console.log('order', order.OrderProducts)
    console.log('products', products)

    return (
        <div className={styles.container}>
            <div className={styles.order}>
                <p className={styles.text}>order #{order.id}</p>
                <p className={styles.text}>status: {'processing'}</p>
                <p className={styles.text}>total: {'900SKEk'}</p>
                <button className={styles.button} onClick={handleClick}>view order</button>
            </div >
            <div className={`${!expanded && styles.hidden}`}>
                {products.length > 0 && products.map(product => <OrderProduct key={product.product.id} item={product} />)}
            </div>
        </div>
    )
}
