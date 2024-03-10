import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import {motion} from 'framer-motion'
function Navigation() {

    const navVarients = {
        hidden: { opacity: 0, y:5, transition:{type:"spring", duration:2, bounce:0, delay:1} },
        show: { opacity: 1, y:0, transition:{type:"spring", duration:2, bounce:0, delay:1} }
      }
      

    return (
        <motion.nav variants={navVarients} initial='hidden' animate="show" className='nav'>
            <Link className='nav__link' to='/'>
            <h6 className='nav__logo'>MMS</h6>
            </Link>
            <Link className='nav__about-link' to='/about'>
                <span className=''> About</span>
            </Link>
        </motion.nav>
    )
}

export default Navigation