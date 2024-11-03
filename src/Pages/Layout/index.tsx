import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { notificationItem, shoppingCartType } from "../../utils/types"
import Notification from "../../Components/Notification"


type LayoutProps = {
    notification: notificationItem
    shoppingCart: shoppingCartType
}


export default function Layout({ notification, shoppingCart }: LayoutProps) {
    return (
        <>
            <Notification notification={notification} />
            <Header shoppingCart={shoppingCart} />
            <Outlet />
            <Footer />
        </>
    )
}
