import React from 'react';
import{Link} from 'react-router-dom'
import './main.css'

function Main(){
   
    return(
        <div className='main' >
            <h2>Find the best breweries in your area!</h2>
            <h2>Search by:</h2>
            <div>
                <div className='mainLinks'>
                    <Link to='/location' style={{textDecoration: 'none', color:'black'}}>
                        <h2>City</h2>
                    </Link>
                </div>
                <div className='mainLinks'>
                    <Link to ='/name' style={{textDecoration: 'none', color: 'black'}}>
                    <h2>Name</h2>
                    </Link>  
                </div>
                 
            </div>
             
        </div>
    )
}

export default Main