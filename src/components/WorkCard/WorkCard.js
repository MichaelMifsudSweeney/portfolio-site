import React from 'react'
import { Link } from 'react-router-dom'
import './WorkCard.scss'
function WorkCard({ portfolioPiece }) {
    return (
        <>
            <div className="work-card">
                <img className='work-card__img' src={require(`../../assets/imgs/${portfolioPiece.img}.png`)} alt="" />
                <div className="work-card__title-row-and-info">
                    <div className="work-card__title-row">
                        <div className='work-card__title'>{portfolioPiece.title}</div>
                        <div className="work-card__links">
                            {portfolioPiece.links.map((link, index) => {

                                if (link.title === "Details") {
                                    return <Link className='work-card__link' key={index} to={`/${link.link}`}>About</Link>
                                }


                                return <a target="_blank" rel="noopener noreferrer" className='work-card__link' key={index} href={link.link}>{link.title}</a>
                            })}
                        </div>
                    </div>
                    <div className="work-card__info">
                        <p className="work-card__role">{portfolioPiece.role}</p>
                        <p className="work-card__stack">{portfolioPiece.stack}</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default WorkCard