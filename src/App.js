import React, { useState } from "react"
import Auth from "./components/auth/auth"
import Week from "./components/task/week.jsx"
import './style/App.css'

function App() {
    let [authProtect, setAuthProtect] = useState(false)
    return (authProtect ? <Week/>  :<Auth authProtect={setAuthProtect}/>)
}
export default App;