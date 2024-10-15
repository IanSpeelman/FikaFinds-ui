import styles from './index.module.css'


export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><a className={styles.link} href='#'>HOME</a></li>
                        <li className={styles.li}><a className={styles.link} href='#'>ABOUT</a></li>
                        <li className={styles.li}><a className={styles.link} href='#'>SHOP</a></li>
                        <li className={styles.li}><a className={styles.link} href='#'>CONTACT</a></li>
                    </ul>
                </nav>
                <h1 className={styles.title}>FIKA FINDS</h1>
                <p>Copyright © 2024 Fika Finds</p>
            </div>
        </footer>
    )
}
