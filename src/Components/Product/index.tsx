import styles from './index.module.css'

type ProductProps = {
    product: string,
    image: string,
    price: string,
    category: string
}


export default function Product({ product, image, price, category }: ProductProps) {
    return (
        <a href='#' className={styles.container}>
            <img className={styles.image} src={image} alt={product} />
            <div className={styles.text}>
                <p className={styles.category}>{category}</p>
                <p className={styles.product}>{product}</p>
                <p className={styles.price}>{price}</p>
            </div>
        </a>
    )
}
