import Hero from "../../Components/Hero"
import Filter from "./Components/Filter"
import ProductContainer from "./Components/ProductContainer"
import styles from './index.module.css'
import { product } from "../../utils/types"
import { useState, useEffect } from "react"
const host = import.meta.env.VITE_PRODUCT_HOST

export default function Shop() {

    const [products, setProducts] = useState<product[] | []>([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${host}/products`)
                if (response.ok) {

                }
                const results = await response.json()
                setProducts(results)
                setCount(results.length)
            } catch (err) {
                console.log(err)
            }

        }
        getData()

    }, [])


    return (
        <>
            <Hero size="medium" header="SHOP" />
            <div className={styles.container}>
                <Filter products={products} setProducts={setProducts} />
                <div className={styles.line}></div>
                <ProductContainer products={products} setProducts={setProducts} count={count} />
            </div>
        </>
    )
}
