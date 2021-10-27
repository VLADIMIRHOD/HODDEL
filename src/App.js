import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter";
import './style/App.css'

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
            <div>222</div>
        </BrowserRouter>
    )
}
export default App;