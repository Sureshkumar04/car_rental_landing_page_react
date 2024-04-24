import React from 'react'
import "../section 2/SectionTwo.css"

export const WorkingSteps = ({
  image,title,para
}) => {
  return (
    <div className='how-it-works d-flex flex-column align-items-center justify-content-center'>
      <div className='imgwrapper d-flex align=items-center justify-content-center rounded mb-4'>
        <img src={image} alt="" />
      </div>
      <h5 className='mb-3 fs-5'>{title}</h5>
      <p className='text-secondary'>{para}</p>
    </div>
  )
}
