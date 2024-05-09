import React from 'react'
import "../Section 3/SectionThree.css"
import { motion } from 'framer-motion'


export const WhyChooseUs = ({ image, title, para, delay }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
        delay: delay,
        y:{type:'spring', stiffness: 70},
        ease: 'easeInOut'
      }}
      className='mb-4'>
      <div className="card_3 d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-center">
          <img src={image} className="img-fluid" alt="..." />
        </div>
        <div className="ms-3">
          <h6 className='fw-semibold mb-1'>{title}</h6>
          <p className='mb-0 text-secondary'>{para}</p>
        </div>
      </div>
    </motion.div>
  )
}
