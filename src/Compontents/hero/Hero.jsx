import React from 'react'
import '../hero/Hero.css'
import Google from '../../assests/home/google play.png'
import Car from '../../assests/home/car 2 1.png'
import mark from '../../assests/home/Vector 1.png'
import {Element} from 'react-scroll';


export const Hero = () => {
    return (
        <Element id='hero'>
            <section className=' hero full-height my-5 pt-5 my-md-0 pt-md-0 position-relative'>
                <div className="row row-cols-1 row-cols-md-2 full-height g-0 align-items-center justify-content-center">
                    <div className='col align-self-center'>
                        <h1 className='mb-3 display-5 display-md-4 fw-semibold hero-title'>Find,book and rent a car <span className='position-relative'>Easily <img src={mark} className='position-absolute  top-50 pt-3 end-0 img-fluid' style={{ width: '100%' }} alt="" /></span></h1>
                        <p className='mb-4 hero-para'>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                        <img className='mb-4' src={Google} alt="" />
                    </div>
                    <div className='col align-self-end position-relative hero_back_main_img' >    
                        <img src={Car} className='img-fluid mb-5 pb-5 mb-md-5 pb-md-0 d-inline-block' alt="" />
                    </div>
                </div>
                <div className="location justify-content-between row position-absolute bottom-0 mb-5 py-2 rounded d-none d-lg-flex">
                    <div className="col d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-location-dot fs-2 me-3"></i>
                        <div>
                            <p className='mb-0'>Location</p>
                            <input type="text bg-transparent" placeholder='Your location' />
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-calendar-days fs-2 me-3"></i>
                        <div>
                            <p className='mb-0'>Pickup date</p>
                            <input type="text bg-transparent" placeholder='Enter date' />
                        </div>
                    </div>
                    <div className="col d-flex align-items-center border-0 justify-content-center">
                        <i class="fa-solid fa-calendar-days fs-2 me-3"></i>
                        <div>
                            <p className='mb-0'>Return date</p>
                            <input type="text bg-transparent" placeholder='Enter date' />
                        </div>
                    </div>
                    <div className="col d-flex align-items-center border-0 justify-content-center">
                        <button className='btn btn-primary'>Search</button>
                    </div>


                </div>
            </section>
            <div className="row container gy-4 d-flex d-lg-none position-relative mobile">
                <div className="col-12 d-flex align-items-center border-bottom justify-content-center">
                    <i class="fa-solid fa-location-dot fs-2 me-3"></i>
                    <div>
                        <p className='mb-0'>Location</p>
                        <input type="text bg-transparent" placeholder='Your location' />
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center border-end justify-content-center">
                    <i class="fa-solid fa-calendar-days fs-2 me-3"></i>
                    <div>
                        <p className='mb-0'>Pickup date</p>
                        <input type="text bg-transparent" placeholder='Enter date' />
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center border-0 justify-content-center">
                    <i class="fa-solid fa-calendar-days fs-2 me-3"></i>
                    <div>
                        <p className='mb-0'>Return date</p>
                        <input type="text bg-transparent" placeholder='Enter date' />
                    </div>
                </div>
                <div className="col-12 border-top pt-2 mb-4 d-flex align-items-center border-0 justify-content-center">
                    <button className='btn btn-primary'>Search</button>
                </div>
            </div>
            
        </Element>
      )
}