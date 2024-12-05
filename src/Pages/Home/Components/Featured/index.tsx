import { useEffect, useState } from "react";
import { product } from "../../../../utils/types";
import Product from "../../../../Components/Product";
import styles from './index.module.css'
const host = import.meta.env.VITE_PRODUCT_HOST;

export default function Featured() {

    const [featured, setFeatured] = useState<product[] | []>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {

            const response = await fetch(`${host}/products`)
            if (response.ok) {
                const data = await response.json()
                const tmp = []
                const nums: number[] = []
                for (let i = 0; i < 3; i++) {
                    let num: number = Math.floor(Math.random() * data.length)
                    while (nums.includes(num)) {
                        num = Math.floor(Math.random() * data.length)
                    }

                    nums.push(num)
                    tmp.push(data[num])
                }

                setFeatured(tmp)
                setLoading(false)
            }
        })();
    }, [])

    if (!loading)
        return (
            <div className={styles.container}>
                <h3 className={styles.header}>FEATURED</h3>
                <div className={styles.products}>
                    {featured && featured.map(product => <Product key={Math.random()} product={product} />)}
                </div>
            </div>
        )
}
