import React from 'react'
import './WorkCard.scss'
function WorkCard({ portfolioPiece }) {
    return (
        <>
            <div className="work-card">
                <img className='work-card__img' src={portfolioPiece.img} alt="" />

                <div className="work-card__title-row">
                    <div className='work-card__title'>{portfolioPiece.title}</div>
                    <div className="work-card__links">
                        {portfolioPiece.links.map((link) => {
                            return <a className='work-card__link' href={link.link}>{link.title}</a>
                        })}
                    </div>
                </div>
                <div className="work-card__info">
                    <p className="work-card__role">{portfolioPiece.role}</p>
                    <p className="work-card__stack">{portfolioPiece.stack}</p>
                    <p className="work-card__description">{portfolioPiece.description}</p>
                </div>

            </div>
        </>


    )
}

export default WorkCard