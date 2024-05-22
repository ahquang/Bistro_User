import React from 'react'
import "../../styles/components/_title.scss"

const Title = ({children}) => {
  return (
    <div className='title-main'>{children}</div>
  )
}

export default Title