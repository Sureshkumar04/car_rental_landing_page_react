import React from 'react'
import '../Section 3/SectionThree.css'
import back from '../../assests/SectionThree/Vector.png'
import car from '../../assests/SectionThree/Audi 1.png'
import { WhyChooseUs } from './WhyChooseUs'
import image1 from "../../assests/SectionThree/wallet.png"
import image2 from "../../assests/SectionThree/user-tick.png"
import image3 from "../../assests/SectionThree/24-support.png"
import image4 from "../../assests/SectionThree/messages-2.png"
import { Element } from 'react-scroll';
import { motion } from 'framer-motion'



const carddata = [
    { id: 1, image: image1, title: "Best price guaranteed", para: "Find a lower price? We’ll refund you 100% of the difference." , delay : 0.2},
    { id: 2, image: image2, title: "Experience driver", para: "Don’t have driver? Don’t worry, we have many experienced driver for you." , delay : 0.4},
    { id: 3, image: image3, title: "24 hour car delivery", para: "Book your car anytime and we will deliver it directly to you." , delay : 0.6},
    { id: 4, image: image4, title: "24/7 technical support", para: "Have a question? Contact Rentcars support any time when you have problem." , delay : 0.8}
];


export const SectionThree = () => {
    return (
        <Element id='choose'>
            <section className="full-height section_three row row-cols-1 row-cols-md-2 g-3 me-md-5 pe-md-5">
                <div className="left col position-relative">
                    <img src={back} alt="" className='img-fluid' style={{ height: '100%' }} />
                    <motion.img

                        initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                            x: { type: 'spring', stiffness: 90 },
                            ease: 'easeIn'
                        }}
                        src={car} className='position-absolute bottom-0 start-0 img-fluid me-5' alt="" />
                </div>
                <div className="right col d-flex flex-column align-items-center justify-content-center">
                    <motion.button 
                     initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{

                        ease: 'easeInOut'
                    }}
                    
                    class="btn mb-3">WHY CHOOSE US</motion.button>
                    <motion.h2 
                     initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{
                        delay:0.1,
                       
                        ease: 'easeInOut'
                    }}
                    
                    className='mx-3 mx-md-0 text-center'>We offer the best experience with our rental deals</motion.h2>
                    <div className="card_container mt-3 mx-3 mx-md-0">
                        {carddata.map(cards => (
                            <WhyChooseUs key={cards.id} image={cards.image} title={cards.title} para={cards.para} />
                        ))}

                    </div>
                </div>
            </section>
        </Element>

    )
}
