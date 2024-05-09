import React from 'react';
import star from '../../assests/Section 4/Star 1.png';
import user from '../../assests/Section 4/user.png';
import Gear from '../../assests/Section 4/Gear.png';
import AC from '../../assests/Section 4/AC.png';
import Door from '../../assests/Section 4/Door.png';
import '../Section 4/SectionFour.css';
import { motion } from 'framer-motion';

export const CarCards = ({ car, name, rating, reviews, Passagers, door, price, delay }) => { // Destructuring props object
    return (

        <motion.div 
        initial={{scale:0, y: 100}}
        whileInView={{scale:1, y:0}}
        transition={{
            delay: delay,
            type:'spring', 
            stiffness: 70,
            duration:0.5
        }}
        
        className="col car-card-wrapper">
            <div className="card rounded car-card">
            <div className="car-wrapper d-flex align-items-end " style={{ width: "100%", height: '12rem' }}>
                <img src={car} className="card-img-center mx-auto" alt="..." />
            </div>
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p className="card-text fw-semibold" style={{ fontSize: '0.75rem' }}>
                    <img src={star} className='me-2 img-fluid' style={{ width: '1rem' }} alt="" />
                    {rating}<span className='text-secondary fw-normal'>({reviews} reviews)</span>
                </p>
                <hr className='mb-1' />
                <div>
                    <div className="row row-cols-2 g-3">
                        <div className="col">
                            <img src={user} alt="" />
                            <span className='ms-1 text-secondary' style={{ fontSize: '0.7rem' }}>{Passagers} Passagers</span>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center ps-3">
                            <img src={Gear} alt="" style={{ float: "left" }} />
                            <span className='ms-1 text-secondary' style={{ fontSize: '0.7rem' }}>Auto</span>
                        </div>
                        <div className="col">
                            <img src={AC} alt="" />
                            <span className='ms-1 text-secondary' style={{ fontSize: '0.7rem' }}>Air Conditioning</span>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center ps-3">
                            <img src={Door} alt="" />
                            <span className='ms-1 text-secondary' style={{ fontSize: '0.7rem' }}>{door} Doors</span>
                        </div>
                    </div>
                    <hr className='mt-1' />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='m-0 text-secondary' style={{ fontSize: "0.8rem" }}>Price</p>
                    <h6 className='m-0 fw-semibold'>${price}<span className='text-secondary fw-light'>/day</span></h6>
                </div>
                <div className='text-center'>
                    <div className='btn btn-primary mt-3 mx-auto'>Rent Now <i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
        </div>
        </motion.div>
        
    );
};
