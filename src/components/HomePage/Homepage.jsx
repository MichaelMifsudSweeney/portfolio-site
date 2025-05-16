import React from 'react'
import { motion } from 'framer-motion'
import WorkCard from '../../components/WorkCard/WorkCard';
import { v4 as uuidv4 } from 'uuid';
import { container, item } from '../../utils/pageAnimation';
import Footer from '../Footer/Footer';
function Homepage() {

    const listOfWork = [
        {
            title: "2025 United Nations Development Programme's Annual Report",
            role: "Developer",
            stack: "React, Typescript, Tailwind, Framer Motion, AWS",
            description: "Custom Microsite to celebrate the launch of the UNDP's annual report.",
            links: [{ title: "Live", link: "https://report.hdr.undp.org/" }],
            img: "UNDP-2025-Hero"
        },
        {
            title: "LiUNA! 506 Apprenticeship Journeys",
            role: "Developer",
            stack: "React, Typescript, Tailwind, Framer Motion, Azure",
            description: "Custom Microsite to celebrate the launch of the UNDP's annual report.",
            links: [{ title: "Live", link: "https://journey.liuna506training.ca/" }],
            img: "Liuna-Training-Centre-Hero"
        },
        {
            title: "2024 United Nations Development Programme's Annual Report",
            role: "Developer",
            stack: "React, Typescript, Tailwind, Framer Motion, AWS",
            description: "Custom Microsite to celebrate the launch of the UNDP's annual report.",
            links: [{ title: "Live", link: "http://report2023-24.hdr.undp.org.s3-website-us-east-1.amazonaws.com/" }],
            img: "UNDPHero"
        },
        {
            title: "York University's Academic Innovation Modules",
            role: "Developer",
            stack: "React, SCSS, Framer-Motion, AWS Amplify",
            description: "Custom e-learning modules that include videos, surveys, and interactive activities.",
            links: [{ title: "Live", link: "https://www.academicinnovationmodules.com/" }],
            img: "YorkUModulesHero"
        },
        {
            title: "Sandbox Inc.",
            role: "Developer",
            stack: "Webflow, HTML, CSS, Javascript",
            description: "Custom Microsite to celebrate the launch of the UNDP's annual report.",
            links: [{ title: "Live", link: "https://www.sandboxinc.ca" }],
            img: "Sandbox-Website-2025-Hero"
        },
        {
            title: "UNICEF BIRD Lab",
            role: "Developer",
            stack: "Webflow, HTML, CSS, Javascript",
            description: "Webflow website for UNICEF’s Behavioural Insights Research and Design Lab including CMS and custom Javascript.",
            links: [{ title: "Live", link: "https://www.unicefbirdlab.org/" }],
            img: "BirdlabHero"
        },
        {
            title: "Tidbits",
            role: "Developer",
            stack: "SwiftUI, Swift, Firebase Firestore, Firestore Authentication",
            description: "A delightful, clean, rolodex app for iOS.",
            links: [{ title: "Details", link: "tidbits" }],
            img: "TidbitsHero"
        },
        {
            title: "Bored Games",
            role: "Developer/Designer",
            stack: "React, SCSS, AWS Amplify, Firebase Firestore, Firestore Authentication",
            description: "A  rental marketplace for board games.",
            links: [{ title: "Live", link: "https://www.bored-games.ca/home" }, { title: "Github", link: "https://github.com/MichaelMifsudSweeney/bored-games" }],
            img: "BoredGamesHero"
        },
        {
            title: "Design and Other Work",
            role: "Lead Designer/Developer",
            stack: "Figma, Sketch, Processing, Origami Studio, Illustrator",
            description: "Assorted Design work including launched designs, prototypes, data visualizations, and posters.",
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