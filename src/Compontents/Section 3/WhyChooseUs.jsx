import React from 'react'
import "../Section 3/SectionThree.css"


export const WhyChooseUs = ({image, title, para}) => {
  return (
    <div className='mb-4'>
      <div className="card_3 d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-center">
          <img src={image} className="img-fluid" alt="..." />
        </div>
        <div className="ms-3">
          <h6 className='fw-semibold mb-1'>{title}</h6>
          <p className='mb-0 text-secondary'>{para}</p>
        </div>
      </div>
    </div>
  )
}
