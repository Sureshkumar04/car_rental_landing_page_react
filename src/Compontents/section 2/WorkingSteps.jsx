import React from 'react'
import "../section 2/SectionTwo.css"
import { motion } from 'framer-motion'

export const WorkingSteps = ({
  image,title,para,delay
}) => {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{delay: delay, duration: 0.5,
      x: { type: 'spring', stiffness: 90 },
      ease: 'easeInOut'
  }} className='how-it-works d-flex flex-column align-items-center justify-content-center'>
      <div className='imgwrapper d-flex align=items-center justify-content-center rounded mb-4'>
        <img src={image} alt="" />
      </div>
      <h5 className='mb-1 mb-md-3 fs-5'>{title}</h5>
      <p className='text-secondary'>{para}</p>
    </motion.div>
  )
}
