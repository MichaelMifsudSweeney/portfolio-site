import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkCard from '../../components/WorkCard/WorkCard';
import { v4 as uuidv4 } from 'uuid';
import { container, item } from '../../utils/pageAnimation';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
function Homepage() {

    const listOfWork = [
        {
            title: "Bored Games",
            role: "Lead Developer/Designer",
            stack: "React, SCSS, AWS Amplify, Firebase Firestore, Firestore Authentication",
            description: "A  rental marketplace for board games",
            links: [{ title: "Live", link: "https://www.bored-games.ca/home" }, { title: "Github", link: "https://github.com/MichaelMifsudSweeney/bored-games" }],
            img: "BoredGamesHero"
        },
        {
            title: "Tidbits",
            role: "Lead Developer",
            stack: "SwiftUI, Swift, Firebase Firestore, Firestore Authentication",
            description: "A delightful, clean, rolodex app for iOS",
            links: [{ title: "Details", link: "tidbits" }],
            img: "TidbitsHero"
        },
        {
            title: "Custom Wordle",
            role: "Lead Developer/Designer",
            stack: "HTML, SCSS, Firebase Firestore, AWS Amplify",
            description: "Make your friends their very own Wordle!",
            links: [{ title: "Live", link: "https://www.custom-wordle.com/" }, { title: "Github", link: "https://github.com/MichaelMifsudSweeney/Custom-Wordle" }],
            img: "CustomWordleHero"
        },
        {
            title: "Design and Other Work",
            role: "Lead Designer/Developer",
            stack: "Figma, Sketch, Processing, Origami Studio, Illustrator",
            description: "Assorted Design work including launched designs, prototypes, data visualizations, and posters",
            links: [{ title: "See more", link: "design" }],
            img: "MoreHero"
        }
    ]

    return (
        <>
        
            <motion.main variants={container} initial="hidden"
                animate="show" exit={{ opacity: 0, transition: { duration: 0.5 } }} onTransitionEnd={window.scrollTo(0, 0)} className='homepage'>
                <motion.header variants={item} className='header'>
                    <h1 className='header__title'>Mike Mifsud-Sweeney</h1>
                    <p className='header__about'>Software Developer with experience designing products at Meta. Currently working at Sandbox Inc.</p>
                    <p className='header__about'>Feel free to email me at <b> michaelmifsudsweeney@gmail.com </b> if you'd like to chat. </p>
                </motion.header>
                <motion.h3 variants={item} className='section__subtitle'>WORK</motion.h3>
                <motion.div variants={item} className="listOfPortfolioPieces">
                    {listOfWork.map((portfolioPiece) => {
                        return <WorkCard portfolioPiece={portfolioPiece} key={uuidv4()} />
                    })}
                </motion.div>
                <Footer />
            </motion.main>
        </>
    )
}

export default Homepage