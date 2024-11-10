import styles from './index.module.css'
import Hero from "../../Components/Hero";
import { shoppingCartType, notificationItem, user } from '../../utils/types';
import CartProduct from '../../Components/CartProduct';
import { Link } from 'react-router-dom';

type OrderProps = {
    cart: shoppingCartType
    notification: notificationItem
    user: user
}



export default function Order({ cart, notification, user }: OrderProps) {

    const total = cart.items.reduce((acc, curr) => {
        return acc + (curr.amount * curr.product.price)
    }, 0)

    function sendOrder() {
        console.log('order sent :)')
    }



    return (
        <>
            <Hero header="Order!" size="medium" />
            <div className={styles.container}>
                <div className={styles.products}>
                    {cart.items.length > 0 && cart.items.map(item => <CartProduct key={item.product.id} item={item} shoppingCart={cart} notificationItem={notification} />)}
                    {cart.items.length === 0 && <p>no items in cart</p>}
                </div>
                <div className={styles.line}></div>
                <div className={styles.payment}>
                    <h3 className={styles.header}>Payment method:</h3>
                    <div className={styles.paymentMethod}>
                        <input type="radio" name="paymentMethod" value='creditCard' id='mastercard' />
                        <label className={styles.label} htmlFor='mastercard'><img className={styles.paymentIcon} src="/assets/mastercard.svg" alt="" /></label>
                    </div>
                    <div className={styles.paymentMethod}>
                        <input type="radio" name="paymentMethod" value='swish' id='swish' />
                        <label className={styles.label} htmlFor='swish'><img className={styles.paymentIcon} src="/assets/swish.svg" alt="" /></label>
                    </div>
                    <div className={styles.paymentMethod}>
                        <input type="radio" name="paymentMethod" value='paypal' id='paypal' />
                        <label className={styles.label} htmlFor='paypal'><img className={styles.paymentIcon} src="/assets/paypal.svg" alt="" /></label>
                    </div>
                    <div className={styles.price}>Total: {total}SEK</div>
                    {user && <button className={styles.button} onClick={sendOrder}>CONFIRM ORDER!</button>}
                    {!user && <Link to='/login' className={styles.button}>Login to order</Link>}
                </div>
            </div>
        </>
    )
}
