import { useEffect, useState } from 'react'
import { notificationItem } from '../../utils/types'
import styles from './index.module.css'

type NotificationProps = {
    notification: notificationItem,
}

export default function Notification({ notification }: NotificationProps) {

    const { message, type } = notification.notification
    const [text, setText] = useState("")



    useEffect(() => {

        if (message !== "") {
            setText(message)
            setTimeout(() => {

                notification.setNotification({ type, message: "" })

            }, 3000)
        }

    }, [message, type, notification])


    return (
        <div className={`${styles.container} ${styles[`${type}`]} ${message !== "" && styles.show}`}>
            <p className="message">{text}</p>
            <div className={styles.cross}><p>x</p></div>
        </div>
    )
}

