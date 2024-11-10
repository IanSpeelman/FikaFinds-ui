import styles from './index.module.css'
import Hero from "../../Components/Hero";

export default function Order() {
    return (
        <>
            <Hero header="Order!" size="medium" />
            <div className={styles.container}>
                <div className={styles.products}>
                    <p>placeholder content</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.payment}>
                    <h3 className={styles.header}>Payment method:</h3>
                    <div className={styles.paymentMethod}>
                        <input type="radio" name="paymentMethod" value='creditCard' id='mastercard' />
                        <label htmlFor='mastercard'><img className={styles.paymentIcon} src="/assets/mastercard.svg" alt="" /></label>
                    </div>
                    <div className={styles.paymentMethod}>
                        <input type="radio" name="paymentMethod" value='swish' id='swish' />
                        <label htmlFor='swish'><img className={styles.paymentIcon} src="/assets/swish.svg" alt="" /></label>
                    </div>
                    <div className={styles.paymentMethod}>
                        <input type="radio" name="paymentMethod" value='paypal' id='paypal' />
                        <label htmlFor='paypal'><img className={styles.paymentIcon} src="/assets/paypal.svg" alt="" /></label>
                    </div>
                    <div className={styles.price}>Total: 360SEK</div>
                    <button className={styles.button}>CONFIRM ORDER</button>
                </div>
            </div>
        </>
    )
}
