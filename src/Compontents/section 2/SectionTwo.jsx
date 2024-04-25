import React from 'react'
import '../section 2/SectionTwo.css'
import { WorkingSteps } from './WorkingSteps'
import image1 from '../../assests/SectionTwo/location-tick.png'
import image2 from '../../assests/SectionTwo/calendar.png'
import image3 from '../../assests/SectionTwo/car.png'
import image4 from '../../assests/SectionTwo/Frame 29.png'



export const SectionTwo = () => {
    return (
        <section className='full-height sectiontwo'>
            <div className="text-center">
                <button className='btn mb-md-5 mb-2'>How it Works</button>
                <h2 className='mx-3 mx-md-2'>Rent with following 3 working steps</h2>
                <div className="row row-cols-1 g-2 gx-md-5 align-items-center justify-content-center mt-4">
                    <WorkingSteps className="col" image={image1} title="Choose location" para="Choose your and find your best car" />
                    <WorkingSteps className="col" image={image2} title="Pick-up date" para="Select your pick up date and time to book your car" />
                    <WorkingSteps className="col" image={image3} title="Book your car" para="Book your car and we will deliver it directly to you" />
                </div>



            </div>

                <img src={image4} className='mt-5 img-fluid' style={{width:'100vw'}} alt="" />
        </section>
    )
}
