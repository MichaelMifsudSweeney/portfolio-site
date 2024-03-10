import React from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import { container, item } from '../../utils/pageAnimation'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
function About() {
    return (
        <>
            
            <motion.div className='about'  variants={container} initial="hidden"
            animate="show"   exit={{ opacity: 0, transition: { duration: 0.5 } }}  onTransitionEnd={window.scrollTo(0, 0)}>
                <motion.h1 variants={item}  className='about__header'>Hello!</motion.h1>
                <motion.p variants={item}  className='about__paragraph'>I'm Mike! I'm a Product Designer turned Developer based out of Toronto.</motion.p>
                <motion.p variants={item}  className='about__paragraph'>I'm currently a Software Engineer at Sandbox Inc. </motion.p>
                <motion.p variants={item} className='about__paragraph'>I like making beautiful, useful experiences.</motion.p>
                <motion.p variants={item} className='about__paragraph'>In a previous life I was a Product Designer on Facebook Messenger.</motion.p>
                <motion.p variants={item} className='about__paragraph'>I have a Bachelor of Design from York University/Sheridan College and completed BrainStation's Web Development Bootcamp.
                </motion.p>
                <motion.p variants={item} className='about__paragraph'>I focus a lot on communication and have been known to enjoy explaining technical ideas to non-technical people.
                </motion.p>
                <motion.p variants={item} className='about__paragraph'>In my free time, I'm a musician, cat enthusiast, and Dungeons and Dragons player. 🕺 🐈 ⚔️
                </motion.p>
                <motion.p variants={item} className='about__paragraph'>Want to chat? Feel free to email me at michaelmifsudsweeney@gmail.com
                </motion.p>
                <Footer />
            </motion.div>
        </>
    )
}

export default About