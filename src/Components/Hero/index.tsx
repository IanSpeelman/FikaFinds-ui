import styles from './index.module.css'

type HeroProps = {
    size?: 'medium',
    header: string,
    subheader?: string,
    buttonText?: string
}

export default function Hero({ size, header, subheader, buttonText }: HeroProps) {
    return (
        <div className={`${styles.container} ${size === 'medium' ? styles.containerMedium : styles.containerLarge}`}>
            <div className={styles.content}>
                <h2 className={styles.header}>{header}</h2>
                <h3 className={styles.subheader}>{subheader}</h3>
                {buttonText && <a href='#' className={styles.button}>{buttonText}</a>}
            </div>
        </div>
    )
}
