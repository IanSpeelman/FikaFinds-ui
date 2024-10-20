import { SetStateAction } from 'react'
import CartProduct from './CartProduct'
import styles from './index.module.css'


type CartProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}


export default function Cart({ isOpen, setIsOpen }: CartProps) {

    function handleClose() {
        setIsOpen(false)
    }

    if (isOpen)
        return (
            <div className={styles.container}>
                <div className={styles.cart}>
                    <div className={styles.top}>
                        <p className={styles.title}>Shopping Cart</p>
                        <p className={styles.close} onClick={handleClose}>X</p>
                    </div>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
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
