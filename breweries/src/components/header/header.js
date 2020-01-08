import React from 'react';
import './header.css';

function Header(props) {

    return (
        <div>
            <div className='header'>
                <h1>Breweries</h1>
                <img 
                    className="beerIcon"
                    src="https://image.flaticon.com/icons/svg/1974/1974060.svg" 
                    alt="beer icon" 
                    >

                </img>
            </div>
            <div className='img'>
                <img 
                    className='mainImg'
                    src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt='brewery img'
                    >
                </img>    
            </div>
            
        </div>
    )
}
export default Header