import React from 'react'
import google from '../../assests/DownloadApp/google.png'
import iphone from '../../assests/DownloadApp/iphone.png'
import "../DownloadApp/DownloadApp.css"
import { motion } from 'framer-motion'

export const DownloadApp = () => {
    return (
        <section className='download-app'>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col download-app-logo">
                    <div className="download-app-left ms-md-5">
                        <motion.div 
                         initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: 'spring', stiffness: 90 },
                            ease: 'easeInOut'
                        }}
                        
                        
                        className='container ms-md-5 d-flex flex-column'>
                            <button className="btn mb-1 fs-6 align-self-md-start align-self-center">Download</button>
                            <h1 className="fw-semibold download-title mb-2">Download Rentcars App for <span>FREE</span></h1>
                            <small>For faster, easier booking and exclusive deals.</small>
                            <img src={google} className='img-fluid mt-3' style={{width: '16rem', display: 'block'}} alt="" />
                        </motion.div>
                    </div>
                </div>
                <motion.div 
                 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                    x: { type: 'spring', stiffness: 90 },
                    ease: 'easeInOut'
                }}
                
                className="col text-center download-app-iphone-cantainer">
                    <img src={iphone} className='download-app-iphone' alt="" />
                </motion.div>
            </div>


        </section>
    )
}
