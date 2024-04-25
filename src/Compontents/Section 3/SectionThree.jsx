import React from 'react'
import '../Section 3/SectionThree.css'
import back from '../../assests/SectionThree/Vector.png'
import car from '../../assests/SectionThree/Audi 1.png'
import { WhyChooseUs } from './WhyChooseUs'
import image1 from "../../assests/SectionThree/wallet.png"
import image2 from "../../assests/SectionThree/user-tick.png"
import image3 from "../../assests/SectionThree/24-support.png"
import image4 from "../../assests/SectionThree/messages-2.png"


const carddata =[
    {id:1, image:image1, title:"Best price guaranteed", para:"Find a lower price? We’ll refund you 100% of the difference."},
    {id:2, image:image2, title:"Experience driver", para:"Don’t have driver? Don’t worry, we have many experienced driver for you."},
    {id:3, image:image3, title:"24 hour car delivery", para:"Book your car anytime and we will deliver it directly to you."},
    {id:4, image:image4, title:"24/7 technical support", para:"Have a question? Contact Rentcars support any time when you have problem."}
];


export const SectionThree = () => {
    return (
        <section className="full-height section_three row row-cols-1 row-cols-md-2 g-3 me-md-5 pe-md-5">
            <div className="left col position-relative">
                <img src={back} alt="" className='img-fluid' style={{ height: '100%' }} />
                <img src={car} className='position-absolute bottom-0 start-0 img-fluid me-5' alt="" />
            </div>
            <div className="right col d-flex flex-column align-items-center justify-content-center">
                <button class="btn mb-3">WHY CHOOSE US</button>
                <h2 className='mx-3 mx-md-0 text-center'>We offer the best experience with our rental deals</h2>
                <div className="card_container mt-3 mx-3 mx-md-0">
                    {carddata.map(cards =>(
                        <WhyChooseUs key={cards.id} image={cards.image} title={cards.title} para={cards.para} />
                    ))}
                    
                </div>
            </div>
        </section>
    )
}
