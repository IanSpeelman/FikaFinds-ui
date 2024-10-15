import Testemonial from './Components/Testemonial'
import styles from './index.module.css'
import jennifer from '/assets/images/Testemonials/jennifer.jpg'
import alicia from '/assets/images/Testemonials/alicia.jpeg'
import juan from '/assets/images/Testemonials/juan.jpeg'

export default function Testemonials() {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>WHAT OUR CUSTOMERS SAY</h3>
            <div className={styles.testemonials}>
                <Testemonial name="Jennefer Lewis" image={jennifer} text='Fast shipping and excellent customer service. The product was even  better than expected. I will definitely be a returning customer.' />
                <Testemonial name="Alicia Heart" image={alicia} text='Great user experience on your website. I found exactly what I was  looking for at a great price. I will definitely be telling my friends.' />
                <Testemonial name="Juan Carlos" image={juan} text='Thank you for the excellent shopping experience. It arrived quickly and  was exactly as described. I will definitely be shopping with you again  in the future.' />
            </div>
        </div>
    )
}
