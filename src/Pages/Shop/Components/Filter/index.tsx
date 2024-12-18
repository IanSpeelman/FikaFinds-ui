import styles from './index.module.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { SetStateAction, useState, useEffect } from 'react';
import { product } from '../../../../utils/types';


type FilterProps = {
    products: product[] | []
    setProducts: React.Dispatch<SetStateAction<product[] | []>>
}


export default function Filter({ products, setProducts }: FilterProps) {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(100)
    const [query, setQuery] = useState("")
    const [range, setRange] = useState<{ min: number, max: number }>({ min: minPrice, max: maxPrice })
    const [allProducts, setAllProducts] = useState<product[] | []>([])
    const [loaded, setLoaded] = useState(false)
    const [reload, setReload] = useState(false)




    function lowPrice(arr: product[]) {
        return arr.reduce((acc, cur) => cur.price < acc ? cur.price : acc, Infinity)
    }

    function highPrice(arr: product[]) {
        return arr.reduce((acc, cur) => cur.price > acc ? cur.price : acc, -Infinity)
    }

    // function checkMinValue(e: React.ChangeEvent<HTMLInputElement>) {
    //     if (parseInt(e.target.value) < range.max) {
    //         setRange({ ...range, min: parseInt(e.target.value) })
    //     }
    //     else {
    //         setRange({ ...range, min: range.max - 1 })
    //     }
    // }
    // function checkMaxValue(e: React.ChangeEvent<HTMLInputElement>) {
    //     if (parseInt(e.target.value) > range.min) {
    //         setRange({ ...range, max: parseInt(e.target.value) })
    //     }
    //     else {
    //         setRange({ ...range, max: range.min + 1 })
    //     }
    // }

    function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }



    useEffect(() => {

        if (!loaded && products.length > 0) {
            setMinPrice(lowPrice(products))
            setMaxPrice(highPrice(products))
            setRange({ min: lowPrice(products), max: highPrice(products) })
            setAllProducts(products)
            setLoaded(true)
        }
        const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(query.toLowerCase()) && range.min <= product.price && range.max >= product.price)
        setProducts(filteredProducts)

    }, [query, products.length, reload])

    return (
        <div className={styles.container}>
            <div className={styles.inputgroup}>
                <input type="text" className={styles.input} value={query} onChange={(e) => handleQueryChange(e)} id="seach" placeholder='Search Products' />
                <button className={styles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.searchicon} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </button>
            </div>
            <div className={styles.pricefilter}>
                <h3 className={styles.title}>Filter by price</h3>
                <div className={styles.pricefilter}>
                    <Slider value={[range.min, range.max]} allowCross={false} range min={minPrice} max={maxPrice} onChange={(e) => {
                        if (Array.isArray(e)) {
                            setRange({ min: e[0], max: e[1] })
                            setReload(!reload)
                        }
                    }}
                        handleStyle={[{ backgroundColor: "#5C7F3F", borderWidth: "0px", opacity: "1" }, { backgroundColor: "#5C7F3F", borderWidth: "0px", opacity: "1" }]}
                        trackStyle={[{ backgroundColor: "#354A24" }]} />
                    <div className={styles.priceinputs}>
                        <div className={styles.priceinput}>
                            <input type="text" value={range.min} max={range.max} className={styles.priceinput} disabled />
                        </div>
                        <div className={styles.priceinput}>
                            <input type="text" value={range.max} max={range.min} className={styles.priceinput} disabled />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

