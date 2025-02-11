import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {useParams} from 'react-router-dom';
const PropertyDetail = () => {

    const [property, setProperty] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/property/${id}`)
          .then(response => setProperty(response.data))
          .catch(error => console.error(error));
      }, [id]);

     if (!property) return <div>Loading...</div>;
      
  return (
    <div>
  <h1>{property.title}</h1>
      <img src={property.images[0]} alt={property.title}  />
      <p>{property.description}</p>
      <p>Price: ₹{property.price}</p>
      <p>Location: {property.location}</p>
      <p>Contact: {property.contact}</p>
    </div>


    
  )
}

export default PropertyDetail