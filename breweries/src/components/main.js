import React from 'react';
import{Link, Route, Switch } from 'react-router-dom'

function Main(){
   

    return(
        <div>
        <Link to='/location'>
            Search By Location
        </Link>
        <Link to ='/name'>
            Search By Name
        </Link>
             
        </div>
    )
}

export default Main