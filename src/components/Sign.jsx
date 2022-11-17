import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Sign = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const Signin = () => {
        navigate("/home")
        localStorage.setItem("username", username)
    }
    return (
        <div className="sign">
            <h1>Books Finder</h1>
            <h2>Find your favorite books</h2>
            <div className="form">
                <h3>Sign In</h3>
                <input type="text" placeholder="user name" onChange={(e) => {
                    setUsername(e.target.value)
                    // console.log(username)
                }} />
                <br/>
                <input type="password" placeholder="password" onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                }} />
                <br/>
                <button onClick={Signin}>Sign In</button>
                <br/>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Sign