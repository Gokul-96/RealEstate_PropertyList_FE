import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PropertyCard from './PropertyCard';

const PropertyList = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/property')
          .then(response => setProperties(response.data))
          .catch(error => console.error(error));
      }, []);
  return (
    <div className='container mt-5'>
        <h1>Property Listings</h1>
        <div >
        {properties.map(property=>(
<PropertyCard key={property._id} property={property}/>
        ))}
        
        
        
        </div>
       </div>
  )
}

export default PropertyList;