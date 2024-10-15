import styles from './index.module.css'


export default function TrustTags() {
    return (
        <div className={styles.container}>
            <div className={styles.tag}>
                <div className={styles.backdrop}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" /></svg>
                </div>
                <div className={styles.text}>
                    <h6 className={styles.header}>SECURE PAYMENT</h6>
                    <p className={styles.message}>All our payments are ssl secured</p>
                </div>
            </div>
            <div className={styles.tag}>
                <div className={styles.backdrop}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z" /></svg>
                </div>
                <div className={styles.text}>
                    <h6 className={styles.header}>DELIVERED WITH CARE</h6>
                    <p className={styles.message}>Super fast shipping to your door</p>
                </div>
            </div>
            <div className={styles.tag}>
                <div className={styles.backdrop}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" /></svg>
                </div>
                <div className={styles.text}>
                    <h6 className={styles.header}>EXCELLENT SERVICE</h6>
                    <p className={styles.message}>Live chat and phone support</p>
                </div>
            </div>
        </div>
    )
}
