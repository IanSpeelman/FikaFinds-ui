import { SetStateAction } from "react"
import { JwtPayload } from "jwt-decode"

export type product = {
    id: number,
    name: string,
    image: string,
    price: number,
    category: string,
    specifications: string,
    description: string,
    stock?: number,
    amount?: number,
    createdAt?: Date
    updatedAt?: Date
}

export type parsedSpecifications = string[][]

export type notificationType = {
    message: string,
    type: 'success' | 'info' | 'danger' | ""
}

export type notificationItem = {
    notification: notificationType,
    setNotification: React.Dispatch<SetStateAction<notificationType>>
}

export type cartItemType = {
    amount: number,
    product: product
}

export type shoppingCartType = {
    items: cartItemType[] | [],
    setShoppingCart: React.Dispatch<SetStateAction<cartItemType[]>>
}

export interface user extends JwtPayload {
    email: string,
    firstName: string
}

export interface LoginRefs {
    email: HTMLInputElement | null; // Type for email input
    password: HTMLInputElement | null; // Type for password input
}

export interface RegisterRefs {
    firstName: HTMLInputElement | null; // Type for email input
    lastName: HTMLInputElement | null; // Type for email input
    email: HTMLInputElement | null; // Type for email input
    confirmEmail: HTMLInputElement | null; // Type for confirm email input
    password: HTMLInputElement | null; // Type for password input
    confirmPassword: HTMLInputElement | null; // Type for confirm password input
}

export interface ItemsRefs {
    login: LoginRefs; // Reference to login fields
    register: RegisterRefs; // Reference to register fields
}
