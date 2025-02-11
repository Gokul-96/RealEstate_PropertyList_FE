import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = ({property}) => {
  return (
    <div>
        <div>
        <img src={property.image} alt= {property.title}/>
        
        <h4>{property.title}</h4>
        <p>{property.location}</p>
        <p>₹{property.price}</p>
        <Link to={`property/${property._id}`}>View Details</Link>
        </div>
        </div>
  )
}

export default PropertyCard