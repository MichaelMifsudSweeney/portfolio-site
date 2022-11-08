import React from 'react'
import './Tidbits.scss'
function Tidbits() {
    return (
        <>
            <div className="tidbits">
                <div className="tidbits__content">
                    <img className='tidbits__img' src={require('../../assets/imgs/TidbitsHero.png')} alt="" />
                    <h2 className='tidbits__title'>Tidbits</h2>
                    <p className="tidbits__description">
                        Tidbits is a clean, delightful rolodex app that was launched into beta testing.
                    </p>
                    <h3 className="tidbits__subhead">
                        TECHNOLOGY
                    </h3>
                    <p className="tidbits__description">
                        Built in Swift/SwiftUI with Firebase as the backend, utilizing services such as firestore, authentication, and storage.
                    </p>
                    <h3 className="tidbits__subhead">
                        FEATURES
                    </h3>
                    <ul>
                        <li className="tidbits__list-item">Creating a contact and optionally add a display photo</li>
                        <li className="tidbits__list-item">Creating a tidbit with a corresponding icon</li>
                        <li className="tidbits__list-item">Reading from the Firebase Firestore database</li>
                        <li className="tidbits__list-item">Update contacts or tidbits</li>
                        <li className="tidbits__list-item">Deleting contacts or tidbits</li>
                        <li className="tidbits__list-item">Anonymous account authentication</li>
                        <li className="tidbits__list-item">Sign In with Apple</li>
                    </ul>
                    <h3 className="tidbits__subhead">
                        SCREENSHOTS
                    </h3>
                    <img className='tidbits__img' src={require('../../assets/imgs/TidbitsScreenshot1.png')} alt="" />
                    <p className="tidbits__caption">Contacts</p>
                    <img className='tidbits__img' src={require('../../assets/imgs/TidbitsScreenshot2.png')} alt="" />
                    <p className="tidbits__caption">Viewing and Adding Tidbits</p>
                    <img className='tidbits__img' src={require('../../assets/imgs/TidbitsScreenshot3.png')} alt="" />
                    
                    <p className="tidbits__caption">Apple Sign in</p>
                </div>
            </div>
            
        </>
    )
}

export default Tidbits