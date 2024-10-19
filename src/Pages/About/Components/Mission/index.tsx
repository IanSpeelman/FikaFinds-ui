import styles from './index.module.css'


export default function Mission() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="/assets/images/fika.jpg" alt="fika" />
            <div className={styles.info}>
                <h2>OUR MISSION</h2>
                <p>At Fika Finds, we are dedicated to bringing the warmth and simplicity of Swedish culture into your everyday life. We aim to provide high-quality, thoughtfully crafted products that inspire moments of joy, relaxation, and togetherness—just like a perfect fika.</p>
            </div>
        </div>
    )
}
