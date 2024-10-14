import './App.css'
import Layout from "./Pages/Layout/index.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<h1>hi there</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
