import React, { useState } from 'react';
import '../Testimonials/Testimonials.css';
import comma from '../../assests/Testimonials/“.png';
import commaTwo from '../../assests/Testimonials/“ 2.png';
import personOne from '../../assests/Testimonials/Person 1.png';
import personTwo from '../../assests/Testimonials/Person 2.png';
import personThree from '../../assests/Testimonials/Person 3.png';
import { Carousel } from 'react-bootstrap';
import { CardsTestimonial } from './CardsTestimonial';
import { motion } from 'framer-motion';





const testimonialData = [
    { id: 1, image: personOne, content: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.", name: "Charlie Johnson" },
    { id: 2, image: personTwo, content: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.", name: "Elizabeth" },
    { id: 3, image: personThree, content: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.", name: "Charlotte" }
];


export const Testimonials = () => {
    const [carouselInterval, setCarouselInterval] = useState(5000);

    return (
        <div className='testimonials mt-5 full-height p-5 p-md-0'>
            <img src={comma} className='comma' alt="" />
            <img src={commaTwo} className='comma-2' alt="" />
            <motion.button
                initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                    x: { type: 'spring', stiffness: 90 },
                    ease: 'easeInOut'
                }}
                className="btn mb-1">Testimonials</motion.button>
            <motion.h2
                initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                    delay: 0.1,
                    y: { type: 'spring', stiffness: 90 },
                    ease: 'easeInOut'
                }}
                className='mx-3 mx-md-0 text-center'>What people say about us?</motion.h2>
            <motion.div
                initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                    y: { type: 'spring', stiffness: 50 },
                    ease: 'easeInOut'
                }}

                className='mt-4'>

                <Carousel interval={carouselInterval} pause={false}
                    onSlide={() => setCarouselInterval(3000)}
                >
                    {testimonialData.map((data) => (
                        <Carousel.Item key={data.id}>

                            <CardsTestimonial
                                person={data.image}
                                content={data.content}
                                name={data.name}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </motion.div>
        </div>
    )
};
