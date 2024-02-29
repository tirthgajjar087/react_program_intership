import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <>

            <nav>

                <Link to="/class_component"> Class Component </Link>
                <Link to="/function_component"> Function Component</Link>
                <Link to="/hook"> Hooks </Link>
                <Link to="/form">Simple form</Link>

            </nav>
            <button onClick={() => { navigate("/class_component") }}>Link  to Class Component</button>

            <Outlet />


        </>
    )
}

export default Navbar