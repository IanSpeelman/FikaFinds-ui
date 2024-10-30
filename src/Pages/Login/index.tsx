import { useState } from "react";
import Hero from "../../Components/Hero";
import styles from './index.module.css'
const host = import.meta.env.VITE_AUTHENTICATION_HOST
console.log(import.meta.env)

export default function Login() {

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    })




    function HandleLogIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('login')
    }

    async function HandleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await fetch(`${host}/authentication/register`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...register
            })

        })
        const data = response.headers
        console.log(data)
    }
    return (
        <div className={styles.wrapper}>
            <Hero size="small" header="Log In!" />
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Log In</h3>
                    <form className={styles.form} id="login" onSubmit={(e) => HandleLogIn(e)}>
                        <input type="text" className={styles.input} id="email" placeholder="E-Mail" />
                        <input type="password" className={styles.input} id="password" placeholder="Password" />
                        <button className={styles.button}>Log in!</button>
                    </form>
                </div>
                <div className={styles.section}>
                    <h3>Register</h3>
                    <form className={styles.form} id="register" onSubmit={(e) => HandleRegister(e)}>
                        <div className={styles.oneline}>
                            <input onChange={(e) => setRegister({ ...register, firstName: e.target.value })} value={register.firstName} type="text" className={styles.input} id="firstname" placeholder="First Name" />
                            <input onChange={(e) => setRegister({ ...register, lastName: e.target.value })} value={register.lastName} type="text" className={styles.input} id="lastname" placeholder="Last Name" />
                        </div>
                        <input onChange={(e) => setRegister({ ...register, email: e.target.value })} value={register.email} type="text" className={styles.input} id="email" placeholder="E-Mail" />
                        <input onChange={(e) => setRegister({ ...register, confirmEmail: e.target.value })} value={register.confirmEmail} type="text" className={styles.input} id="emailconfirm" placeholder="Confirm E-Mail" />
                        <input onChange={(e) => setRegister({ ...register, password: e.target.value })} value={register.password} type="password" className={styles.input} id="password" placeholder="Password" />
                        <input onChange={(e) => setRegister({ ...register, confirmPassword: e.target.value })} value={register.confirmPassword} type="password" className={styles.input} id="passwordconfirm" placeholder="Confirm Password" />
                        <button className={styles.button}>Register</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
