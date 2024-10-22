import Product from "../../../../Components/Product"
import { product } from "../../../../utils/types"
import styles from './index.module.css'

type ProductContainerProps = {
    products: product[] | []
}

export default function ProductContainer({ products }: ProductContainerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.toprow}>
                <p className={styles.results}>Showing all {products?.length} results</p>
                <select className={styles.select}>
                    <option value="pricedesc">price descending</option>
                    <option value="priceasc">price ascending</option>
                    <option value="pricedesc">popularity descending</option>
                    <option value="priceasc">popularity ascending</option>
                    <option value="pricedesc">rating descending</option>
                    <option value="priceasc">rating ascending</option>
                </select>
            </div>
            <div className={styles.products}>
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}
