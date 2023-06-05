import React from 'react'

const title = ({ title, subTitle }) => {
  return (
    <div className='Title'>
      <h3>{title}</h3>

      <p className='container'>{subTitle}</p>
      <br />
    </div>
  )
}

export default title
