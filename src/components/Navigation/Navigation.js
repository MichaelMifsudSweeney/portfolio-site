import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import { motion } from 'framer-motion'
import logo from '../../assets/imgs/logo.svg'
import backChevron from '../../assets/imgs/backChevron.svg'
function Navigation() {

    const navVarients = {
        hidden: { opacity: 0, y: 5, transition: { type: "spring", duration: 2, bounce: 0, delay: 1 } },
        show: { opacity: 1, y: 0, transition: { type: "spring", duration: 2, bounce: 0, delay: 1 } }
    }


    return (
        <motion.nav variants={navVarients} initial='hidden' animate="show" className='nav'>
            <div className="nav__logo-and-back-chevron">
                <Link className='nav__link' to='/'>
                    <img className='nav__logo' src={logo} alt="" />
                </Link>
                {/* <img className='nav__back-chevron' src={backChevron} alt="" /> */}
            </div>
            <Link className='nav__about-link' to='/about'>
                <span className=''> About</span>
            </Link>
        </motion.nav>
    )
}

export default Navigation