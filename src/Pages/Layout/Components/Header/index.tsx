import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Components/Cart'
import styles from './index.module.css'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        setIsOpen(true)
    }


    return (
        <header>
            <div className={styles.container}>
                <h1 className={styles.title}>FIKA FINDS</h1>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link to="/" className={styles.link}>HOME</Link></li>
                        <li className={styles.li}><Link to="/about" className={styles.link}>ABOUT</Link></li>
                        <li className={styles.li}><Link to="/shop" className={styles.link}>SHOP</Link></li>
                        <li className={styles.li}><Link to="/contact" className={styles.link}>CONTACT</Link></li>
                        <div className={styles.icons}>
                            <div className={styles.icon} onClick={handleOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                                </svg>
                                <div className={styles.cartOverlay}>4</div>
                            </div>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-personscale" viewBox="0 0 22 22">
                                    <path d="M11 11C12.4322 11 13.8057 10.4311 14.8184 9.41839C15.8311 8.40569 16.4 7.03218 16.4 5.60001C16.4 4.16784 15.8311 2.79433 14.8184 1.78164C13.8057 0.768939 12.4322 0.200012 11 0.200012C9.56784 0.200012 8.19433 0.768939 7.18164 1.78164C6.16894 2.79433 5.60001 4.16784 5.60001 5.60001C5.60001 7.03218 6.16894 8.40569 7.18164 9.41839C8.19433 10.4311 9.56784 11 11 11ZM14.6 5.60001C14.6 6.55479 14.2207 7.47047 13.5456 8.1456C12.8705 8.82073 11.9548 9.20001 11 9.20001C10.0452 9.20001 9.12956 8.82073 8.45443 8.1456C7.7793 7.47047 7.40001 6.55479 7.40001 5.60001C7.40001 4.64523 7.7793 3.72956 8.45443 3.05443C9.12956 2.3793 10.0452 2.00001 11 2.00001C11.9548 2.00001 12.8705 2.3793 13.5456 3.05443C14.2207 3.72956 14.6 4.64523 14.6 5.60001ZM21.8 20C21.8 21.8 20 21.8 20 21.8H2.00001C2.00001 21.8 0.200012 21.8 0.200012 20C0.200012 18.2 2.00001 12.8 11 12.8C20 12.8 21.8 18.2 21.8 20ZM20 19.9928C19.9982 19.55 19.7228 18.218 18.5024 16.9976C17.3288 15.824 15.1202 14.6 11 14.6C6.87981 14.6 4.67121 15.824 3.49761 16.9976C2.27721 18.218 2.00361 19.55 2.00001 19.9928H20Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
            <div className={styles.line}></div>
            <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}
