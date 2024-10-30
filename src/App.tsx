import './App.css'
import About from './Pages/About/index.tsx'
import Contact from './Pages/Contact/index.tsx'
import Home from './Pages/Home/index.tsx'
import Layout from "./Pages/Layout/index.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop/index.tsx'
import Login from './Pages/Login/index.tsx'
import { useState } from 'react'
import { notificationItem, notificationType } from './utils/types.ts'

function App() {

    const [notification, setNotification] = useState<notificationType>({ message: '', type: 'success' })
    const notificationItem: notificationItem = {
        notification,
        setNotification
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout notification={notificationItem} />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes >
        </BrowserRouter >
    )
}

export default App
