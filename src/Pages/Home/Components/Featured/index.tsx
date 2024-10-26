import Product from "../../../../Components/Product";
import styles from './index.module.css'

export default function Featured() {

    const product = {
        id: 42069,
        name: "testname",
        image: "test",
        price: 99,
        category: "test",
    }


    return (
        <div className={styles.container}>
            <h3 className={styles.header}>FEATURED</h3>
            <div className={styles.products}>
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </div>
    )
}
