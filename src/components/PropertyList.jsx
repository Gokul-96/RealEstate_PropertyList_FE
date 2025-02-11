import React, { useState ,useEffect,useMemo} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';

const PropertyList = () => {

    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/property')
          .then(response => setProperties(response.data))
          .catch(error => console.error(error));
      }, []);

      const filteredProperties = useMemo(() => {
        return properties.filter(property =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }, [properties, searchQuery]);
  return (
    <div className='container mt-5'>
        <h1>Property Listings</h1>
        <div>
        <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <div >
        {filteredProperties.map(property=>(
<PropertyCard key={property._id} property={property}/>
        ))}
        
        
        
        </div>
       </div>
  )
}

export default PropertyList;