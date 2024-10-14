import './App.css'
import Home from './Pages/Home/index.tsx'
import Layout from "./Pages/Layout/index.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/hi" element={<h1>hi</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
