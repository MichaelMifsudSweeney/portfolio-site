import React from 'react'
import './Tidbits.scss'
import {motion} from 'framer-motion'
import { container, item } from '../../utils/pageAnimation'
function Tidbits() {
    return (
        <>
            <motion.div className='tidbits'  variants={container} initial="hidden"
            animate="show"   exit={{ opacity: 0, transition: { duration: 0.5 } }}  onTransitionEnd={window.scrollTo(0, 0)}>
                <div className="tidbits__content">
                    <motion.img  variants={item} className='tidbits__img' src={require('../../assets/imgs/TidbitsHero.png')} alt="" />
                    <motion.h2  variants={item} className='tidbits__title'>Tidbits</motion.h2>
                    <motion.p  variants={item} className="tidbits__description">
                        Tidbits is a clean, delightful rolodex app that was launched into beta testing.
                    </motion.p>
                    <motion.h3  variants={item} className="tidbits__subhead">
                        TECHNOLOGY
                    </motion.h3>
                    <motion.p  variants={item} className="tidbits__description">
                        Built in Swift/SwiftUI with Firebase as the backend, utilizing services such as firestore, authentication, and storage.
                    </motion.p>
                    <motion.h3  variants={item} className="tidbits__subhead">
                        FEATURES
                    </motion.h3>
                    <motion.ul variants={item} >
                        <li className="tidbits__list-item">Creating a contact and optionally add a display photo</li>
                        <li className="tidbits__list-item">Creating a tidbit with a corresponding icon</li>
                        <li className="tidbits__list-item">Reading from the Firebase Firestore database</li>
                        <li className="tidbits__list-item">Update contacts or tidbits</li>
                        <li className="tidbits__list-item">Deleting contacts or tidbits</li>
                        <li className="tidbits__list-item">Anonymous account authentication</li>
                        <li className="tidbits__list-item">Sign In with Apple</li>
                    </motion.ul>
                    <motion.h3  variants={item} className="tidbits__subhead">
                        SCREENSHOTS
                    </motion.h3>
                    <motion.img variants={item} className='tidbits__img' src={require('../../assets/imgs/TidbitsScreenshot1.png')} alt="" />
                    <motion.p  variants={item} className="tidbits__caption">Contacts</motion.p>
                    <motion.img  variants={item} className='tidbits__img' src={require('../../assets/imgs/TidbitsScreenshot2.png')} alt="" />
                    <motion.p  variants={item} className="tidbits__caption">Viewing and Adding Tidbits</motion.p>
                    <motion.img  variants={item} className='tidbits__img' src={require('../../assets/imgs/TidbitsScreenshot3.png')} alt="" />
                    
                    <motion.p  variants={item} className="tidbits__caption">Apple Sign in</motion.p>

                    <motion.div  variants={item}><iframe style={{ border: 'none', width: '100%', minHeight: "400px" }} src="https://player.vimeo.com/video/802793218?h=c044dd4d3b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Tidbits"></iframe></motion.div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </motion.div>
            
        </>
    )
}

export default Tidbits