import { useState } from 'react'
import parseImageUrl from '../../utils/parseImageUrl'
import { product } from '../../utils/types'
import styles from './index.module.css'

type ImageGaleryProps = {
    product: product
}

export default function ImageGalery({ product }: ImageGaleryProps) {

    const imageArray = parseImageUrl(product.image).slice(0, 5)
    const [images, setImages] = useState(imageArray)

    function switchImage(e: React.MouseEvent<HTMLImageElement>) {
        const src = e.currentTarget.src
        if (src !== images[0]) {
            const index = images.findIndex(item => item === src)
            let newArray = [...images]
            newArray.splice(index, 1)
            newArray.splice(0, 0, src)
            setImages(newArray)
        }
    }



    return (<div className={styles.container}>
        <img src={images[0]} alt={product.name} className={styles.image} />
        <div className={styles.imageselector}>
            {images.length > 1 && imageArray.map(image => <img src={image} key={Math.random()} onClick={(e) => switchImage(e)} alt={product.name} className={styles.handle} />)}
        </div>
    </div>
    )
}
