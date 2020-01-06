import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'

function Main(props) {

    const fetchDenver = () => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=denver`)
        .then(res => res.json())
        .then(data => {
            console.log('this is denver data', data)
            let denver= data.map(city => {
              return(
                <div key={city.name}>
                  <h1>{city.name}</h1>
                </div>
      
              )
            })
            console.log('denver- ', denver)
        })
    }
    const fetchColoradoSprings = () => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=colorado_springs`)
        .then(res => res.json())
        .then(coloradoSprings => {
            console.log('ColoradoSprings- ', coloradoSprings)
        })
    }

    return (
        <>
            <Link to='/Denver'>
                <h1>Denver</h1>
            </Link>
            <Link to='/springs'>
                <h1>Colorado Springs</h1>
            </Link>
        </>
    )
}
export default Main