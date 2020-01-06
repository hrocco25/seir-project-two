import React from 'react';
import {Link} from 'react-router-dom'


function Main() {

    return (
     <div>
         <Link to='/Denver'>
                <h1>Denver</h1>
            </Link>
            <Link to='/springs'>
                <h1>Colorado Springs</h1>
            </Link>
            <Link to='/boulder'>
                <h1>Boulder</h1>
            </Link>
            <Link to='/arvada'>
                <h1>Arvada</h1>
            </Link>
            <Link to='/castle'>
                <h1>Castle Rock</h1>
            </Link>
           
        
     </div>
            
    )
}
export default Main