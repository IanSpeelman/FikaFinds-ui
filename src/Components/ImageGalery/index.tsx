import parseImageUrl from '../../utils/parseImageUrl'
import { product } from '../../utils/types'
import styles from './index.module.css'

type ImageGaleryProps = {
    product: product
}

export default function ImageGalery({ product }: ImageGaleryProps) {

    const images = parseImageUrl(product.image).slice(0, 5)


    return (<div className={styles.container}>
        <img src={images[0]} alt={product.name} className={styles.image} />
        <div className={styles.imageselector}>
            {images.length > 1 && images.map(image => <img src={image} alt={product.name} className={styles.handle} />)}
        </div>
    </div>
    )
}
