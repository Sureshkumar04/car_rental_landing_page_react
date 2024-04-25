import React from 'react'
import '../Testimonials/Testimonials.css'
import comma from '../../assests/Testimonials/“.png'
import commaTwo from '../../assests/Testimonials/“ 2.png'
import { CardsTestimonial } from './CardsTestimonial'
import personOne from '../../assests/Testimonials/Person 1.png'
import personTwo from '../../assests/Testimonials/Person 2.png'
import personThree from '../../assests/Testimonials/Person 3.png'


const testiomalData = [
    { id: 1, image: personOne, content: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.", name: "Charlie Johnson" },
    { id: 1, image: personTwo, content: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.", name: "Elizabeth" },
    { id: 1, image: personThree, content: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.", name: "Charlotte" }
]

export const Testimonials = () => {
    return (
        <div className='testimonials mt-5 full-height'>
            <img src={comma} className='comma' alt="" />
            <img src={commaTwo} className='comma-2' alt="" />
            <button className="btn mb-1">Testimonials</button>
            <h2 className='mx-3 mx-md-0 text-center'>What peole say about us?</h2>
            <div className='mt-4'>

                {testiomalData.map(data => (
                    <CardsTestimonial key={data.id}  person={data.image} content={data.content} name={data.name} />
                ))}

            </div>
        </div>
    )
}
