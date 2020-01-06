import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
// import cities from './data.json'

function Main(props) {

    // let sidebar = {cities}.map(item => {
    //     return(
    //         <div  key={item.title}>
    //             <Link to={'/show/' + item.cities}>
    //                 {item.title}
    //             </Link>
    //         </div>
    //     )
    //   })

    return (
        <>
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
        </>
    )
}
export default Main