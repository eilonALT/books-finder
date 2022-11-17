import { useState, useEffect } from "react"

const Sign = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                <input type="password" placeholder="password" onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                }} />
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Sign