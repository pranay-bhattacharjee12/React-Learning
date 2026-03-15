import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const hadleSubmit = (e) => {
        e.preventDefault();
        setUser({ Username, password })
    }

    return (
        <div>
            <h1>Login</h1>
            <input
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
            />

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
            />
            <button onClick={hadleSubmit}>Login</button>
        </div>
    )
}

export default Login