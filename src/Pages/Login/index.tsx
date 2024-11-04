import { SetStateAction, useEffect, useRef, useState } from "react";
import Hero from "../../Components/Hero";
import styles from './index.module.css'
const host = import.meta.env.VITE_AUTHENTICATION_HOST
import { useNavigate } from 'react-router-dom'
import { ItemsRefs, notificationItem } from "../../utils/types";
import { isValidEmail, isValidPassword, equalStrings } from "../../utils/CheckCredentials";


type LoginProps = {
    notification: notificationItem
    setToken: React.Dispatch<SetStateAction<string>>
}

export default function Login({ notification, setToken }: LoginProps) {

    const items = useRef<ItemsRefs>(
        {
            login: {
                email: null,
                password: null
            },
            register: {
                firstName: null,
                lastName: null,
                email: null,
                confirmEmail: null,
                password: null,
                confirmPassword: null
            }
        })

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    })
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    function setJwt(headers: Headers) {
        const token = headers.get("Authorization") || ""
        localStorage.setItem("Authorization-token", token)
        setToken(token)
        setLogin({
            email: "",
            password: ""
        })
        setRegister({
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: ""
        })

        navigate("/")


    }

    async function HandleLogIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (isValidEmail(login.email) && isValidPassword(login.password)) {
            const response = await fetch(`${host}/authentication/login`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...login
                })

            })
            if (response.ok) {
                setJwt(response.headers)
                notification.setNotification({ message: "You have been logged in!", type: "success" })
            }
        }
    }

    async function HandleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (isValidEmail(register.email) && isValidPassword(register.password)) {

            const response = await fetch(`${host}/authentication/register`, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...register
                })

            })
            if (response.ok) {
                setJwt(response.headers)
                notification.setNotification({ message: "You have successfully registered!", type: "success" })
            }
        }
    }

    function toggleInputStyles(element: HTMLInputElement | null, state: boolean) {
        if (element?.value.length || 0 > 0 && element !== null) {
            state ? element.classList.remove(styles.error) : element.classList.add(styles.error)
            state ? element.classList.add(styles.success) : element.classList.remove(styles.success)
        }
        else {
            if (element !== null) {
                element.classList.remove(styles.error)
                element.classList.remove(styles.success)
            }
        }
    }

    useEffect(() => {
        toggleInputStyles(items.current.register.email, isValidEmail(items.current.register.email?.value))
        toggleInputStyles(items.current.register.confirmEmail, equalStrings(items.current.register.email?.value, items.current.register.confirmEmail?.value))
        toggleInputStyles(items.current.register.password, isValidPassword(items.current.register.password?.value))
        toggleInputStyles(items.current.register.confirmPassword, equalStrings(items.current.register.password?.value, items.current.register.confirmPassword?.value))
        toggleInputStyles(items.current.register.firstName, true)
        toggleInputStyles(items.current.register.lastName, true)
    })

    return (
        <div className={styles.wrapper}>
            <Hero size="small" header="Log In!" />
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>Log In</h3>
                    <form className={styles.form} id="login" onSubmit={(e) => HandleLogIn(e)}>
                        <input ref={(e) => (items.current.login.email = e)} onChange={(e) => setLogin({ ...login, email: e.target.value })} value={login.email} type="text" className={styles.input} id="email" placeholder="E-Mail" />
                        <input ref={(e) => (items.current.login.password = e)} onChange={(e) => setLogin({ ...login, password: e.target.value })} value={login.password} type="password" className={styles.input} id="password" placeholder="Password" />
                        <button className={styles.button}>Log in!</button>
                    </form>
                </div>
                <div className={styles.section}>
                    <h3>Register</h3>
                    <form className={styles.form} id="register" onSubmit={(e) => HandleRegister(e)}>
                        <div className={styles.oneline}>
                            <input ref={(e) => (items.current.register.firstName = e)} onChange={(e) => setRegister({ ...register, firstName: e.target.value })} value={register.firstName} type="text" className={styles.input} id="firstname" placeholder="First Name" />
                            <input ref={(e) => (items.current.register.lastName = e)} onChange={(e) => setRegister({ ...register, lastName: e.target.value })} value={register.lastName} type="text" className={styles.input} id="lastname" placeholder="Last Name" />
                        </div>
                        <input ref={(e) => (items.current.register.email = e)} onChange={(e) => setRegister({ ...register, email: e.target.value })} value={register.email} type="text" className={styles.input} id="email" placeholder="E-Mail" />
                        <input ref={(e) => (items.current.register.confirmEmail = e)} onChange={(e) => setRegister({ ...register, confirmEmail: e.target.value })} value={register.confirmEmail} type="text" className={styles.input} id="emailconfirm" placeholder="Confirm E-Mail" />
                        <input ref={(e) => (items.current.register.password = e)} onChange={(e) => setRegister({ ...register, password: e.target.value })} value={register.password} type="password" className={styles.input} id="password" placeholder="Password" />
                        <input ref={(e) => (items.current.register.confirmPassword = e)} onChange={(e) => setRegister({ ...register, confirmPassword: e.target.value })} value={register.confirmPassword} type="password" className={styles.input} id="passwordconfirm" placeholder="Confirm Password" />
                        <button className={styles.button}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
