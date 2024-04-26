import React from 'react'
import star from '../../assests/Testimonials/star.png'


export const CardsTestimonial = ({person, content, name}) => {
    return (
        <div>
            <div className="card testiomal-card mb-3" style={{ maxWidth: '700px' }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{maxHeight: '350px', border: 'soild'}}>
                        <img src={person} className="img-fluid rounded-start" style={{maxHeight: '100%', overflow: 'hidden'}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column justify-content-between" style={{height: '100%'}}>
                            <div className='mb-2 mb-sm-0'>
                                <h1 className="card-title mb-0 fw-medium">5.0 <small className='fs-6'>Stars</small></h1>
                                <img src={star} className='star-rating'  alt="" />
                            </div>
                            <p className="card-text text-body-secondary mb-2 mb-sm-0"><small>“{content}”</small> </p>
                            <div>
                                <p className='card-text fw-medium fs-5 mb-0'>{name}</p>
                                <p className='card-text text-body-secondary fs-6'><small>From Tamil Nadu, India.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
