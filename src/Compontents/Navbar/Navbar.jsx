import React from 'react'
import '../Navbar/Navbar.css'
import logo from 'F:/React Project/car_rental/src/assests/Logo.png'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-0 mt-md-3 fixed-top">
            <div className="container">
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto align-items-center mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <button className="nav-link active" aria-current="page" >Become a renter</button>
                        </li>
                        <li className="nav-item me-3">
                            <button className="nav-link active" aria-current="page" >Rental deals</button>
                        </li>
                        <li className="nav-item me-3">
                            <button className="nav-link active" aria-current="page" >How it work</button>
                        </li>
                        <li className="nav-item me-3">
                            <button className="nav-link active" aria-current="page" >Why choose us</button>
                        </li>
                        
                    </ul>
                    <div className='text-center'>
                        <button className='btn'>Sign In</button>
                        <button className='btn btn-primary'>Sign up</button>
                    </div>

                </div>
            </div>
        </nav>
    )
}