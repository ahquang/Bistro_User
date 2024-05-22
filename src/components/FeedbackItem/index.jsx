import React from 'react'
import "../../styles/components/_feedbackitem.scss"

const FeedbackItem = ({title, content, src, name, address}) => {
  return (
    <div className='feedback-item'>
        <div className="feedback-item__title">{title}</div>
        <div className="feedback-item__content">{content}</div>
        <div className="feedback-item__user">
            <div className="feedback-item__user__img"><i class="bi bi-person-circle"></i></div>
            <div className="feedback-item__user__info">
                <span className="feedback-item__user__info__name">{name}</span>
                <span className="feedback-item__user__info__address">{address}</span>
            </div>
        </div>
    </div>
  )
}

export default FeedbackItem