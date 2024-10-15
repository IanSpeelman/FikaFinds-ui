import './App.css'
import About from './Pages/About/index.tsx'
import Contact from './Pages/Contact/index.tsx'
import Home from './Pages/Home/index.tsx'
import Layout from "./Pages/Layout/index.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
