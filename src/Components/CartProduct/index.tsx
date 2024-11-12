import styles from './index.module.css'
import { cartItemType, notificationItem, shoppingCartType } from '../../utils/types'


type CartProductProps = {
    item: cartItemType,
    shoppingCart: shoppingCartType
    notificationItem: notificationItem
}



export default function CartProduct({ shoppingCart, item, notificationItem }: CartProductProps) {


    function removeSelf(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement
        const id = parseInt(target.dataset.id || "0")
        const items = shoppingCart.items.filter(item => item.product.id !== id)
        shoppingCart.setShoppingCart(items)
        localStorage.setItem('cart', JSON.stringify(items))
        notificationItem.setNotification({ message: 'Item removed from cart', type: 'info' })
    }


    function handleChange(change: number, e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement
        const id = parseInt(target.dataset.id || "0")
        const items = shoppingCart.items.map(item => {
            if (item.product.id === id) {
                if (item.amount + change > 0) {
                    item.amount += change
                }
            }
            return item
        })
        shoppingCart.setShoppingCart(items)
    }



    return (
        <div className={styles.container}>
            <img className={styles.image} src={item.product.image !== 'test' ? item.product.image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g'} alt={item.product.name} />
            <div className={styles.middle}>
                <p className={styles.product}>{item.product.name}</p>
                <p className={styles.amount}>{item.amount} x {item.product.price} SEK</p>
            </div>
            <div className={styles.input}>
                <p className={styles.inputControl} data-id={item.product.id} onClick={(e) => handleChange(1, e)}>+</p>
                <p className={styles.inputControl} data-id={item.product.id} onClick={(e) => handleChange(-1, e)}>-</p>
            </div>
            <div className={styles.remove} data-id={item.product.id} onClick={(e) => removeSelf(e)}>X</div>
        </div>
    )
}
