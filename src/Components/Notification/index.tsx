import { useEffect } from 'react'
import { notificationItem } from '../../utils/types'
import styles from './index.module.css'

type NotificationProps = {
    notification: notificationItem,
}

export default function Notification({ notification }: NotificationProps) {

    const { message, type } = notification.notification


    useEffect(() => {

        if (message !== "") {
            setTimeout(() => {

                notification.setNotification({ type, message: "" })

            }, 3000)
        }

    }, [notification.notification.message])


    return (
        <div className={`${styles.container} ${styles[`${type}`]} ${message !== "" && styles.show}`}>
            <p className="message">{message}</p>
            <div className={styles.cross}><p>x</p></div>
        </div>
    )
}

