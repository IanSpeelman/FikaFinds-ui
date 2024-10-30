import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { notificationItem } from "../../utils/types"
import Notification from "../../Components/Notification"


type LayoutProps = {
    notification: notificationItem
}


export default function Layout({ notification }: LayoutProps) {
    return (
        <>
            <Notification notification={notification} />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
