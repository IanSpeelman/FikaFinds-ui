import { product } from '../../utils/types'
import styles from './index.module.css'

type ImageGaleryProps = {
    product: product
}

export default function ImageGalery({ product }: ImageGaleryProps) {
    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.imageselector}>
                <img src={product.image} alt={product.name} className={styles.handle} />
                <img src={product.image} alt={product.name} className={styles.handle} />
                <img src={product.image} alt={product.name} className={styles.handle} />
                <img src={product.image} alt={product.name} className={styles.handle} />
            </div>
        </div>
    )
}
