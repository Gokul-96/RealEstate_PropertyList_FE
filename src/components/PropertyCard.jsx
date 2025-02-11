import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = ({property}) => {
  return (
   
    <div className='col-md-6 col-lg-4 col-sm-12 mb-4'>
        {/* h-100 -all carts equal height */}
        <div className="card h-100"> 
        <img src={property.image} alt= {property.title}/>
        <div className="card-body">
        <h4 className='"card-title"'>{property.title}</h4>
        <p className='"card-text"'>{property.location}</p>
        <p className="card-text">₹{property.price}</p>
        <Link to={`property/${property._id}`} className="btn btn-dark">View Details</Link>
        </div>
        </div>
        </div>
       
  )
}

export default PropertyCard