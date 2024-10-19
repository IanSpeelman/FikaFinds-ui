import styles from './index.module.css'



export default function CartProduct() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" alt="Dalahäst" />
            <div className={styles.middle}>
                <p className={styles.product}>Dalahäst</p>
                <p className={styles.amount}>1 x 99 SEK</p>
            </div>
            <div className={styles.remove}>X</div>
        </div>
    )
}
