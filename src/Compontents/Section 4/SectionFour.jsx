import React from 'react'
import carddata from './CarsData.js'
import "../Section 4/SectionFour.css"


import "../Section 4/SectionFour.css"
import { CarCards } from './CarCards'


export const SectionFour = () => {
    return (
        <section className='full-height section-4 mt-5 d-flex flex-column align-items-center justify-content-center'>
            <button class="btn mb-3">POPULAR RENTAL DEALS</button>
            <h2 className='mx-3 mx-md-0 text-center'>Most popular cars rental deals</h2>
            <div className="popular-cars-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
                {carddata.map(
                    data => (

                        <CarCards key={data.id} car={data.car} name={data.name} rating={data.rating} reviews={data.reviews} Passagers={data.Passagers} door={data.door} price={data.price}  />
                )
                )}


            </div>
        </section>
    )
}
