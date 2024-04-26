import React from 'react'
import "../Footer/Footer.css"
import logo from "../../assests/white logo.png"
import location from "../../assests/footer/location.png"
import sms from "../../assests/footer/sms.png"
import call from "../../assests/footer/call.png"
import facebook from "../../assests/footer/facebook.png"
import instagram from "../../assests/footer/instagram.png"
import youtube from "../../assests/footer/youtube.png"

export const Footer = () => {
    return (
        <section className='footer p-3 p-md-5'>
            <div className='container footer-content-wrapper'>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-auto g-4 justify-content-between">
                    <div className="col">
                        <img src={logo} alt="" />
                        <div className="contact-details mt-3">
                            <div className='d-flex align-items-start mb-3 gap-1'>
                                <img src={location} className='img-fluid' alt="" />
                                <p className='footer-text-one'>1/52th Main Road, Vellore, Tamil Nadu, India</p>
                            </div>
                            <div className='d-flex mb-3 gap-1'>
                                <img src={call} className='img-fluid' alt="" />
                                <p className='footer-text-one'>+91 82208 15091</p>
                            </div>
                            <div className='d-flex mb-3 gap-1'>
                                <img src={sms} className='img-fluid' alt="" />
                                <p className='footer-text-one'>rentcars@gmail.com</p>
                            </div>
                        </div>

                    </div>
                    <div className="col d-flex flex-column align-items-start">
                        <h6 className='footer-heading'>Our Product</h6>
                        <ul className='footer-items m-0 p-0'>
                            <li>Career</li>
                            <li>Car</li>
                            <li>Packages</li>
                            <li>Features</li>
                            <li>Priceline</li>
                        </ul>
                    </div>
                    <div className="col d-flex flex-column align-items-start">
                        <h6 className='footer-heading'>Resources</h6>
                        <ul className='footer-items m-0 p-0'>
                            <li>Download</li>
                            <li>Help Centre</li>
                            <li>Guides</li>
                            <li>Partner Network</li>
                            <li>Cruises</li>
                            <li>Developer</li>
                        </ul>
                    </div>
                    <div className="col d-flex flex-column align-items-start">
                        <h6 className='footer-heading'>About Rentcars</h6>
                        <ul className='footer-items m-0 p-0'>
                            <li>Why choose us</li>
                            <li>Advertise</li>
                            <li>Our Story</li>
                            <li>Investor Relations</li>
                            <li>Press Center</li>
                        </ul>
                    </div>
                    <div className='col d-flex flex-column align-items-start'>
                        <h6 className='footer-heading'>Follow Us</h6>
                        <div className='d-flex gap-2'>
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                </div>
                <hr style={{color: '#575757', height: '5px'}} />
                <small className='copyrights'>Copyright 2023 ・ Rentcars, All Rights Reserved</small>
            </div>
        </section>
    )
}
