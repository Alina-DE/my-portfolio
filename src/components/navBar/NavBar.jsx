import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// styling
import "./NavBar.scss"

import { FaBars, FaTimes } from 'react-icons/fa';


function NavBar() {

    let [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="navbar"
            onMouseUp={() => setIsOpen(false)}
        >
            <NavLink exact to='/'>
                <h1 className="logo">Alina Reinalt</h1>
            </NavLink>

            <div className="nav-items" id={isOpen ? "" : "hidden"}>
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