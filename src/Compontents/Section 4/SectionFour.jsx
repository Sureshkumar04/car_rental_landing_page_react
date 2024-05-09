import React from 'react'
import carddata from './CarsData.js'
import "../Section 4/SectionFour.css"
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import "../Section 4/SectionFour.css"
import { CarCards } from './CarCards'


export const SectionFour = () => {
    return (
        <Element id='cars'>
            <section className='full-height section-4 mt-5 d-flex flex-column align-items-center justify-content-center'>
                <motion.button 
                 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                    x: { type: 'spring', stiffness: 90 },
                    ease: 'easeInOut'
                }}
                class="btn mb-3">POPULAR RENTAL DEALS</motion.button>
                <motion.h2 
                 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{delay:0.1,
                    y: { type: 'spring', stiffness: 90 },
                    ease: 'easeInOut'
                }}
                className='mx-3 mx-md-0 text-center'>Most popular cars rental deals</motion.h2>
                <div className="popular-cars-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
                    {carddata.map(
                        data => (

                            <CarCards key={data.id} car={data.car} name={data.name} rating={data.rating} reviews={data.reviews} Passagers={data.Passagers} door={data.door} price={data.price} delay={data.delay} />
                        )
                    )}


                </div>
            </section>
        </Element>

    )
}
