import { SetStateAction } from 'react'
import CartProduct from './CartProduct'
import styles from './index.module.css'
import { shoppingCartType } from '../../../../../../utils/types'


type CartProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    shoppingCart: shoppingCartType
}


export default function Cart({ isOpen, setIsOpen, shoppingCart }: CartProps) {

    function handleClose(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target == e.currentTarget) {
            setIsOpen(false)
        }
    }

    return (
        <div className={`${styles.container} ${isOpen ? styles.show : styles.hide}`} onClick={(e) => handleClose(e)}>
            <div className={`${styles.cart} ${isOpen ? styles.showposition : styles.hideposition}`}>
                <div className={styles.top}>
                    <p className={styles.title}>Shopping Cart</p>
                    <p className={styles.close} onClick={(e) => handleClose(e)}>X</p>
                </div>
                <div className={styles.products}>
                    {shoppingCart.items.map(item => <CartProduct key={item.product.id} item={item} />)}
                </div>
                <div className={styles.bottom}>
                    <div className={styles.total}>
                        <p>Total:</p>
                        <p>360SEK</p>
                    </div>
                    <button className={styles.button}>Checkout!</button>
                </div>
            </div>
        </div>
    )
}
