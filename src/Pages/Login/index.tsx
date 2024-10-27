import Hero from "../../Components/Hero";
import styles from './index.module.css'

export default function Login() {
    function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <div className={styles.wrapper}>
            <Hero size="small" header="Log In!" />
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Log In</h3>
                    <form className={styles.form} onSubmit={(e) => HandleSubmit(e)}>
                        <input type="text" className={styles.input} id="email" placeholder="E-Mail" />
                        <input type="password" className={styles.input} id="password" placeholder="Password" />
                        <button className={styles.button}>Log in!</button>
                    </form>
                </div>
                <div className={styles.section}>
                    <h3>Register</h3>
                    <form className={styles.form} onSubmit={(e) => HandleSubmit(e)}>
                        <div className={styles.oneline}>
                            <input type="text" className={styles.input} id="name" placeholder="First Name" />
                            <input type="text" className={styles.input} id="lastname" placeholder="Last Name" />
                        </div>
                        <input type="text" className={styles.input} id="email" placeholder="E-Mail" />
                        <input type="text" className={styles.input} id="emailconfirm" placeholder="Confirm E-Mail" />
                        <input type="password" className={styles.input} id="password" placeholder="Password" />
                        <input type="password" className={styles.input} id="passwordconfirm" placeholder="Confirm Password" />
                        <button className={styles.button}>Register</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
