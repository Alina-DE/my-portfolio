import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styling
import "./NavBar.scss"

import { FaBars, FaTimes } from 'react-icons/fa';


function NavBar() {

    let [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="navbar">
            <NavLink exact to='/'>
                <div className="logo">Alina Reinalt</div>
            </NavLink>

            <div className="nav-items" id={isOpen ? "" : "hidden"} onBlur={() => setIsOpen(false)}>
                <NavLink exact to='/about'>
                    <div>ABOUT</div>
                </NavLink>

                <NavLink exact to='/projects'>
                    <div>PROJECTS</div>
                </NavLink>

                <NavLink exact to='/contact'>
                    <div>CONTACT</div>
                </NavLink>
            </div>

            {/* menu icon for mobile screen */}
            <div className='nav-toggle' onClick={() => setIsOpen(!isOpen)} >
                {!isOpen ? <FaBars /> : <FaTimes />}  
            </div>
        </nav>
    )
}

export default NavBar