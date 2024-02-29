import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <>

            <nav className='main_nav'>

                <Link to="/class_component"> Class Component </Link>
                <Link to="/function_component"> Function Component</Link>
                <Link to="/hook"> Hooks </Link>
                <Link to="/form">Simple form</Link>
                <Link to="/dynamicroute/:id">Dynamic routing</Link>

            </nav>

            <Outlet />


        </>
    )
}

export default Navbar