import { SetStateAction } from "react"

export type product = {
    id: number,
    name: string,
    image: string,
    price: number,
    category: string,
    stock?: number,
    amount?: number,
    createdAt?: Date
    updatedAt?: Date
}

export type notificationType = {
    message: string,
    type: 'success' | 'info' | 'danger' | ""
}

export type notificationItem = {
    notification: notificationType,
    setNotification: React.Dispatch<SetStateAction<notificationType>>
}
