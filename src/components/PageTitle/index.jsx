import React from 'react'
import Title from '../Title'
import "../../styles/components/_pagetitle.scss"

const PageTitle = ({title}) => {
  return (
    <div className="page__title">
        <Title>{title}</Title>
        <span>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </span>
    </div>
  )
}

export default PageTitle