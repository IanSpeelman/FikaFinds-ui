import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { notificationItem, shoppingCartType } from "../../utils/types"
import Notification from "../../Components/Notification"
import { user } from "../../utils/types"
import { SetStateAction } from "react"


type LayoutProps = {
    user: user | null,
    setToken: React.Dispatch<SetStateAction<string>>
    notification: notificationItem,
    shoppingCart: shoppingCartType
}


export default function Layout({ user, setToken, notification, shoppingCart }: LayoutProps) {
    return (
        <>
            <Notification notification={notification} />
            <Header user={user} setToken={setToken} shoppingCart={shoppingCart} notificationItem={notification} />
            <Outlet />
            <Footer />
        </>
    )
}
