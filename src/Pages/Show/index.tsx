import { useParams, useNavigate } from "react-router-dom"
import styles from './index.module.css'
import { useEffect } from "react"
const host = import.meta.env.VITE_PRODUCT_HOST
import { notificationItem, product, shoppingCartType } from "../../utils/types"
import { useState } from "react"
import parseSpecifications from "../../utils/parseSpecifications"
import ImageGalery from "../../Components/ImageGalery"


type ShowProps = {
    notificationItem: notificationItem
    shoppingCart: shoppingCartType
}



export default function Show({ notificationItem, shoppingCart }: ShowProps) {
    const navigate = useNavigate()
    const { id } = useParams()

    const [product, setProduct] = useState<product | null>(null)
    const [amount, setAmount] = useState(1)


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${host}/products/${id}`)
                if (response.ok) {
                    const data = await response.json()
                    if (data[0].image === "test") {
                        setProduct({ ...data[0], image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" })
                    }
                    else {
                        setProduct(data[0])
                    }
                }
                else {
                    navigate('/shop')
                }

            } catch (err) {
                navigate('/shop')
            }
        })();

    }, [id])


    function handleChange(change: number) {
        if (amount + change > 0) {
            setAmount(amount + change)
        }
    }


    function addToCart() {
        if (product) {
            let flag = false
            let items = shoppingCart.items
            items = items.map(item => {
                if (product.id === item.product.id) {
                    item.amount += amount
                    flag = true
                }
                return item
            })
            if (!flag) {
                items = [...items, { amount, product }]
            }
            shoppingCart.setShoppingCart(items)
            localStorage.setItem('cart', JSON.stringify(items))
            notificationItem.setNotification({ message: 'Item added to cart', type: 'success' })
        }
    }


    if (product !== null) {
        return (
            <div className={styles.container}>
                <h3 className={styles.mobileproductname}>{product.name}</h3>
                <ImageGalery product={product} />
                <div className={styles.product}>
                    <p className={styles.categorie}>{product.category}</p>
                    <h3 className={styles.productname}>{product.name}</h3>
                    <p className={styles.price}>{product.price}</p>
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.addcart}>
                        <div className={styles.inputgroup}>
                            <p className={styles.inputControl} onClick={() => handleChange(-1)}>-</p>
                            <p className={styles.inputControl}>{amount}</p>
                            <p className={styles.inputControl} onClick={() => handleChange(1)}>+</p>
                        </div>
                        <p className={styles.button} onClick={addToCart}>ADD TO CART</p>
                    </div>
                </div>
                <div className={styles.specifications}>
                    <h4 className={styles.title}>specifications:</h4>
                    <ul className={styles.list}>
                        {parseSpecifications(product.specifications).map(spec => <li key={spec[0]}><b>{spec[0]}:</b> {spec[1]}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
