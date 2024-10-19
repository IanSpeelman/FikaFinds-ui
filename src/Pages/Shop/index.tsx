import Hero from "../../Components/Hero"
import Filter from "./Components/Filter"
import ProductContainer from "./Components/ProductContainer"
import styles from './index.module.css'

export default function Shop() {
    return (
        <>
            <Hero size="medium" header="SHOP" />
            <div className={styles.container}>
                <Filter />
                <div className={styles.line}></div>
                <ProductContainer />
            </div>
        </>
    )
}
