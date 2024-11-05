import { SetStateAction } from "react"
import Product from "../../../../Components/Product"
import { product } from "../../../../utils/types"
import styles from './index.module.css'

type ProductContainerProps = {
    products: product[] | []
    setProducts: React.Dispatch<SetStateAction<product[] | []>>
}

export default function ProductContainer({ products, setProducts }: ProductContainerProps) {


    function handleChange(e: React.FormEvent<HTMLSelectElement>) {
        if (e.currentTarget.value === 'priceasc') {
            const sortedProducts = [...products];
            sortedProducts.sort((x, y) => x.price - y.price)
            setProducts(sortedProducts)

        }
        else if (e.currentTarget.value === 'pricedesc') {
            const sortedProducts = [...products];
            console.log('desc')
            sortedProducts.sort((x, y) => y.price - x.price)
            setProducts(sortedProducts)
        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.toprow}>
                <p className={styles.results}>Showing all {products?.length} results</p>
                <select className={styles.select} onChange={(e) => handleChange(e)}>
                    <option value="pricedesc">price descending</option>
                    <option value="priceasc">price ascending</option>
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
