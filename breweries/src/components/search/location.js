import React from 'react';
import SearchLocation from './searchLocation';
import './search.css'

function Location(){
   

    return(
        <div className='search'>
            <h1>Search by location of brewery</h1>
            <SearchLocation />
        </div>
    )
}

export default Location