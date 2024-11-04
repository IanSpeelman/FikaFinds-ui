import { Link } from 'react-router-dom'
import styles from './index.module.css'

type HeroProps = {
    size?: 'medium' | 'small',
    header: string,
    subheader?: string,
    buttonText?: string
    action?: string
}

export default function Hero({ size, header, subheader, buttonText, action }: HeroProps) {
    return (
        <div className={`${styles.container} ${size ? styles[`container${size}`] : styles.containerlarge}`}>
            <div className={styles.content}>
                <h2 className={styles.header}>{header}</h2>
                {subheader && <h3 className={styles.subheader}>{subheader}</h3>}
                {buttonText && action && <Link to={action} className={styles.button}>{buttonText}</Link>}
            </div>
        </div>
    )
}
