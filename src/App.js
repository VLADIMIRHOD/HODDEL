import React, { useState } from "react"
import Auth from "./components/auth/auth"
import Main from "./components/Main/Main"
import './style/App.css'

function App() {
    let [authProtect, setAuthProtect] = useState(true)
    return (authProtect ? 
    <Main/>
    :<Auth authProtect={setAuthProtect}/>)
}
export default App;