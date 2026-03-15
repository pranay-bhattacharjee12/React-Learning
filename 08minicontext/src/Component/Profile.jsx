import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div>please log in</div>

    return <div>welcome {user.Username}</div>
}