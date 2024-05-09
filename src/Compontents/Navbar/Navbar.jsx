import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css'
import logo from '../../assests/Logo.png'
import {Link} from 'react-scroll';

export const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <nav className={scrollPosition > 100 ? 'navbar navbar-expand-lg mt-0 mt-md-0 fixed-top white-bg' : 'navbar navbar-expand-lg mt-0 mt-md-3 fixed-top transparent-bg'}>
            <div className="container">
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto align-items-center mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <Link activeClass='navactive' to='hero' spy={true} smooth={true} offset={0} duration={50}  className="nav-link active">Become a renter</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link activeClass='navactive' to='cars' spy={true} smooth={true} offset={0} duration={50} className="nav-link active" aria-current="page" >Rental deals</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link activeClass='navactive' to='works' spy={true} smooth={true} offset={0} duration={50} className="nav-link active" aria-current="page" >How it work</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link activeClass='navactive' to='choose' spy={true} smooth={true} offset={20} duration={50} className="nav-link active" aria-current="page" >Why choose us</Link>
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
