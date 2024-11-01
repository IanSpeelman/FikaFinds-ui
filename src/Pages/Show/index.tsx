import { useParams } from "react-router-dom"
import styles from './index.module.css'
import { useEffect } from "react"



export default function Show() {

    return (
        <div className={styles.container}>
            <div className={styles.imagecontainer}>
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" alt="test" className={styles.image} />
                <div className={styles.imageselector}> <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" alt="test" className={styles.handle} />
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" alt="test" className={styles.handle} />
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" alt="test" className={styles.handle} />
                    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" alt="test" className={styles.handle} />
                </div>
            </div>
            <div className={styles.product}>
                <p className={styles.categorie}>categorie</p>
                <h3 className={styles.productname}>productname</h3>
                <p className={styles.price}>99</p>
                <p className={styles.description}>The Dalahäst, or Dala horse, is a traditional Swedish carved wooden horse, typically painted in bright colors with intricate patterns. Originating from the Dalarna region, these figures were initially hand-carved as children's toys in the 17th century. Over time, they became a symbol of Swedish culture and craftsmanship, often painted in vibrant red with floral designs in white, green, and blue. Dala horses represent a connection to Sweden's rural history and are still cherished as decorative and symbolic items worldwide.</p>
                <div className={styles.addcart}>
                    <div className={styles.inputgroup}>
                        <p className={styles.inputControl}>+</p>
                        <p className={styles.inputControl}>1</p>
                        <p className={styles.inputControl}>-</p>
                    </div>
                    <p className={styles.button}>ADD TO CART</p>
                </div>
            </div>
            <div className={styles.specifications}>
                <h4 className={styles.title}>specifications:</h4>
                <ul className={styles.list}>
                    <li className={styles.listitem}><b>Material: </b>Solid pine wood, sustainably sourced</li>
                    <li className={styles.listitem}><b>height: </b>15CM (availeble in 10cm, 20cm and 30cm)</li>
                    <li className={styles.listitem}><b>color: </b>Classic swedish red with hand painted designs</li>
                    <li className={styles.listitem}><b>finish: </b>no. swedish</li>
                </ul>
            </div>
        </div>
    )
}
