import React from 'react'
import "../../styles/components/_aboutitem.scss"
const AboutItem = ({icon, title}) => {
  return (
    <div className='about__item'>
        <img src={icon} alt="" />
        <div className="about__item__info">
            <span className="about__item__info__title">{title}</span>
            <span className="about__item__info__content">In the new era of technology we look in the future with certainty life.</span>
        </div>
    </div>
  )
}

export default AboutItem