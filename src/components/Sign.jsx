import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Sign = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const Signin = () => {
        if (username !== "" && password !== "") {
            navigate("/home")
            localStorage.setItem("username", username)
        }
        else {
            alert("Please enter username and password")
        }

    }
    return (
        <div className="sign">
            <div className="sign_left_container">
                <h1 >Books Finder</h1>
                <h2>Find your favorite books now</h2>
            </div>
            <div className="sign-form">
                <h1>Sign In </h1>
                <input type="text" placeholder="User Name..." onChange={(e) => {
                    setUsername(e.target.value)
                }} />
                <br />
                <input type="password" placeholder="Password..." onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                }} />
                <div className="form-buttons">
                    <button onClick={Signin}>Sign In</button>
                    <button onClick={() => { alert("not available yet") }}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Sign