import { product } from '../../utils/types'
import styles from './index.module.css'

type ProductProps = {
    product: product,
}


export default function Product({ product }: ProductProps) {
    return (
        <a href='#' className={styles.container}>
            <img className={styles.image} src={product.image === "test" ? "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" : product.image} alt={product.name} />
            <div className={styles.text}>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.product}>{product.name}</p>
                <p className={styles.price}>{product.price}</p>
            </div>
        </a>
    )
}
