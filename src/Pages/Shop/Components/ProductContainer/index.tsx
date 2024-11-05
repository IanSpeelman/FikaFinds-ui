import { SetStateAction, useEffect, useRef } from "react"
import Product from "../../../../Components/Product"
import { product } from "../../../../utils/types"
import styles from './index.module.css'

type ProductContainerProps = {
    products: product[] | []
    setProducts: React.Dispatch<SetStateAction<product[] | []>>
}

export default function ProductContainer({ products, setProducts }: ProductContainerProps) {

    const select = useRef<HTMLSelectElement | null>(null)


    function sortAsc() {
        const sortedProducts = [...products];
        sortedProducts.sort((x, y) => x.price - y.price)
        setProducts(sortedProducts)
    }

    function sortDesc() {
        const sortedProducts = [...products];
        sortedProducts.sort((x, y) => y.price - x.price)
        setProducts(sortedProducts)
    }


    function handleChange(e: React.FormEvent<HTMLSelectElement>) {
        e.currentTarget.value === 'priceasc' && sortAsc()
        e.currentTarget.value === 'pricedesc' && sortDesc()
    }

    useEffect(() => {
        if (select.current !== null) {
            console.log(select.current.value)
            select.current.value === 'priceasc' && sortAsc()
            select.current.value === 'pricedesc' && sortDesc()
        }
    }, [products.length])


    return (
        <div className={styles.container}>
            <div className={styles.toprow}>
                <p className={styles.results}>Showing all {products?.length} results</p>
                <select ref={select} className={styles.select} onChange={(e) => handleChange(e)}>
                    <option value="priceasc">price ascending</option>
                    <option value="pricedesc">price descending</option>
                </select>
            </div>
            <div className={styles.products}>
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
                {products.length === 0 && <p className={styles.noProducts}>No products found!</p>}
            </div>
        </div>
    )
}
