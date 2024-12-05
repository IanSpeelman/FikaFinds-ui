import './App.css'
import About from './Pages/About/index.tsx'
import Contact from './Pages/Contact/index.tsx'
import Home from './Pages/Home/index.tsx'
import Layout from "./Pages/Layout/index.tsx"
import Shop from './Pages/Shop/index.tsx'
import Login from './Pages/Login/index.tsx'
import Profile from './Pages/Profile/index.tsx'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { cartItemType, notificationItem, notificationType, shoppingCartType } from './utils/types.ts'
import Show from './Pages/Show/index.tsx'
import { jwtDecode } from 'jwt-decode'
import { user } from './utils/types.ts'
import Order from './Pages/Orders/index.tsx'

function App() {
    let cart

    try {
        cart = JSON.parse(localStorage.getItem('cart') || '')
    }
    catch (err) { }
    const [token, setToken] = useState(localStorage.getItem('Authorization-token') || "")
    const [user, setUser] = useState<user | null>(null)


    useEffect(() => {

        const decodedToken = jwtDecode<user | null>(token)
        if (decodedToken) {
            if (decodedToken.exp > (Math.floor(Date.now() / 1000))) {
                setUser(jwtDecode<user>(token) || null)
            }
            else {
                setUser(null)
            }

        }
        // if (decodedToken?.exp > (Math.floor(Date.now() / 1000))) {
    }, [token])



    const [notification, setNotification] = useState<notificationType>({ message: '', type: 'success' })
    const [cartItems, setCartItems] = useState<cartItemType[] | []>(cart || [])
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
                <Route element={<Layout user={user} setToken={setToken} shoppingCart={shoppingCart} notification={notificationItem} />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login user={user} setToken={setToken} notification={notificationItem} />} />
                    <Route path="/show/:id" element={<Show notificationItem={notificationItem} shoppingCart={shoppingCart} />} />
                    <Route path="/profile" element={<Profile user={user} />} />
                    <Route path="/order" element={<Order cart={shoppingCart} notification={notificationItem} user={user} />} />
                </Route>
            </Routes >
        </BrowserRouter >
    )
}

export default App
