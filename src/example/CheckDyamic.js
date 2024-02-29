import React from 'react'
import { Link } from 'react-router-dom'

function CheckDyamic() {
    return (
        <>
            <nav>
                <p><Link to="/checkdynamic/1">User 1</Link></p>
                <p><Link to="/checkdynamic/2">User 2</Link></p>
                <p><Link to="/checkdynamic/3">User 3</Link></p>
            </nav>
        </>
    )
}

export default CheckDyamic