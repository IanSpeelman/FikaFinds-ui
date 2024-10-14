import Product from "../../../../Components/Product";
import styles from './index.module.css'

export default function Featured() {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>FEATURED</h3>
            <div className={styles.products}>
                <Product product="Dalahäst" price="99 SEK" category="Dalarna" image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" />
                <Product product="Dalahäst" price="99 SEK" category="Dalarna" image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" />
                <Product product="Dalahäst" price="99 SEK" category="Dalarna" image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhik6ntKzUrb7GbmRt0laNt4TDv7p8sdfywfGt9JLMf_ZDrvuJWV6o_v4yFe42PP-luPrrAe-jl7Kg9IYPsLVEbHDvViAcW7CnyQeUWkF52g_NoB7o0dU68g" />
            </div>
        </div>
    )
}
