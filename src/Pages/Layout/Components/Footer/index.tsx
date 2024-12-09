import styles from './index.module.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link to="/" className={styles.link}>HOME</Link></li>
                        <li className={styles.li}><Link to="/about" className={styles.link}>ABOUT</Link></li>
                        <li className={styles.li}><Link to="/shop" className={styles.link}>SHOP</Link></li>
                        <li className={styles.li}><Link to="/contact" className={styles.link}>CONTACT</Link></li>
                    </ul>
                </nav>
                <h1 className={styles.title}>FIKA FINDS</h1>
                <p>test Copyright © 2024 Fika Finds</p>
            </div>
        </footer>
    )
}
