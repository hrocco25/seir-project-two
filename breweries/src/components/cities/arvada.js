import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Arvada(){
    const [brewery, setBrewery] = useState([])
   
    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/breweries?by_city=arvada")
            .then(res =>{
                console.log('test',res)
                setBrewery(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])

    return(
        <div>
            <div>
                {brewery.map(brewery =>(
                    <div key={brewery.name}>
                       <p>{brewery.name}</p>
                        <p>{brewery.brewery_type}</p> 
                        <p>{brewery.street} {brewery.city} {brewery.state}</p>
                        <p>{brewery.phone}</p>
                        <p>{brewery.website_url}</p>
                    </div>                    
                ))}
            </div>
        </div>
    )
}

export default Arvada