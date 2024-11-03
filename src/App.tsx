import './App.css'
import About from './Pages/About/index.tsx'
import Contact from './Pages/Contact/index.tsx'
import Home from './Pages/Home/index.tsx'
import Layout from "./Pages/Layout/index.tsx"
import Shop from './Pages/Shop/index.tsx'
import Login from './Pages/Login/index.tsx'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { cartItemType, notificationItem, notificationType, shoppingCartType } from './utils/types.ts'
import Show from './Pages/Show/index.tsx'

function App() {

    const [notification, setNotification] = useState<notificationType>({ message: '', type: 'success' })
    const [cartItems, setCartItems] = useState<cartItemType[] | []>([])
    const notificationItem: notificationItem = {
        notification,
        setNotification
    }
    const shoppingCart: shoppingCartType = {
        items: cartItems,
        setShoppingCart: setCartItems
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<Layout shoppingCart={shoppingCart} notification={notificationItem} />} >
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login notification={notificationItem} />} />
                    <Route path="/show/:id" element={<Show shoppingCart={shoppingCart} />} />
                </Route>
            </Routes >
        </BrowserRouter >
    )
}

export default App
