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
    const [cartItems, setCartItems] = useState<cartItemType[] | []>([{
        amount: 2, product: {
            id: 53,
            name: "Ian",
            image: "https://ianspeelman.com/assets/profile_picture-mHRzL_Nn.jpg",
            price: 999,
            category: "Awesome",
            description: "ian is an awesome individual",
            specifications: "age:27, aweosmeness:off the charts"
        }
    }])
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
                    <Route path="/show/:id" element={<Show />} />
                </Route>
            </Routes >
        </BrowserRouter >
    )
}

export default App
