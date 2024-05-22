import React from 'react'
import Title from '../Title'
import "../../styles/components/_inforitem.scss"

const InforItem = ({title, content}) => {
  return (
    <div className='infor__item'>
        <Title>{title}</Title>
        <span>{content}</span>
    </div>
  )
}

export default InforItem