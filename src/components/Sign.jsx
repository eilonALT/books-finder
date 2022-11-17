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
            <h1 >Books Finder</h1>
            <h2>Find your favorite books</h2>
            <div className="sign-form">
                <h1>Sign In now !</h1>
                <input type="text" placeholder="user name" onChange={(e) => {
                    setUsername(e.target.value)
                }} />
                <br />
                <input type="password" placeholder="password" onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                }} />
                <div className="form-buttons">
                    <button onClick={Signin}>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Sign