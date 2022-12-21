import React from 'react'
import './DesignWork.scss'
function DesignWork() {
  return (
    <div className="tidbits">
                <div className="tidbits__content">
                    
                    <h2 className='tidbits__title'>Design Work</h2>
                   
                    
                    
                    
                    
                    <img className='tidbits__img' src={require('../../assets/imgs/Polls-iOS-Old.png')} alt="" />
                    <p className="tidbits__caption">Redesign of Messenger Polls. The feature was designed to feel native on both iOS and Android.</p>
                    <img className='tidbits__img' src={require('../../assets/imgs/Polls-AND-Future.png')} alt="" />
                    <p className="tidbits__caption">Redesign of Messenger Polls as part of the Messenger visual redesign.</p>
                    <div className="video-wrapper"> <iframe src="https://player.vimeo.com/video/396814574?h=10ede90d84&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Messenger Live Location"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                    <p className="tidbits__caption">Visual refresh for Messenger Live Location. The above is a prototype that was used to help get a feel for the experience. Built in Origami Studio.</p>
                    
                    <img className='tidbits__img' src={require('../../assets/imgs/GradShowHours_Poster.jpg')} alt="" />
                    <p className="tidbits__caption">Data Visualization of my programs grad show hours. Each row is a specific student's hours over time. Within this you can see when meetings were held, as well as how much work went into the last few days. Coded in Processing and polished in Adobe Illustrator. </p>
                    <img className='tidbits__img' src={require('../../assets/imgs/textsFromAFriend.png')} alt="" />
                    
                    <p className="tidbits__caption">Data visualization of all the texts a friend and I sent. The blue is mine and the purple is their. A function to search the texts for specific words was created, currently the small circles are wheneveer we mentioned avocados. Built in Processing.</p>
                </div>
            </div>
  )
}

export default DesignWork