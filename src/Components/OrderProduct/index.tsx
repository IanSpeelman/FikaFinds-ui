import styles from './index.module.css'
import { cartItemType, orderProductResponse } from '../../utils/types'


type OrderProductProps = {
    item: cartItemType,
    order: orderProductResponse,
}



export default function OrderProduct({ item, order }: OrderProductProps) {


    return (
        <div className={styles.container}>
            <img className={styles.image} src={item.product.image !== 'test' ? item.product.image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g'} alt={item.product.name} />
            <div className={styles.middle}>
                <p className={styles.product}>{item.product.name}</p>
                <p className={styles.amount}>{item.amount} x {order.price} SEK</p>
            </div>
        </div>
    )
}
