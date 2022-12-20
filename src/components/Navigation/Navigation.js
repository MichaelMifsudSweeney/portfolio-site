import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
function Navigation() {
    return (
        <nav className='nav'>
            <Link className='nav__link' to='/'>
            <h6 className='nav__logo'>MMS</h6>
            </Link>
            <Link className='nav__about-link' to='/about'>
                <span className=''> About</span>
            </Link>
        </nav>
    )
}

export default Navigation