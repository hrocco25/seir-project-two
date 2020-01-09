import React from 'react';
import SearchName from './searchName';
import './search.css'

function Name(){
   
    return(
        <div className="search">
            <h1>Search by name of brewery:</h1>
            <SearchName />
        </div>
    )
}

export default Name