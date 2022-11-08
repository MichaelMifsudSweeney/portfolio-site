import React from 'react'
import { Link } from 'react-router-dom'
import './WorkCard.scss'
import { v4 as uuidv4 } from 'uuid';
function WorkCard({ portfolioPiece }) {
    return (
        <>
            <div className="work-card">
                <img className='work-card__img' src={require(`../../assets/imgs/${portfolioPiece.img}.png`)} alt="" />

                <div className="work-card__title-row">
                    <div className='work-card__title'>{portfolioPiece.title}</div>
                    <div className="work-card__links">
                        {portfolioPiece.links.map((link) => {

                            if(link.title === "Details") {
                                return <Link className='work-card__link' key= {uuidv4()} to={`/${link.link}`}>About</Link>
                            }
                            

                            return <a className='work-card__link' key= {uuidv4()} href={link.link}>{link.title}</a>
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