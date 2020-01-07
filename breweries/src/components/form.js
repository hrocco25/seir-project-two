import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state =  {
        query: null,
        city: '',
    } 
  }
    searchHandler = (e) =>{
      e.preventDefault()
      console.log('e.target.value', e.target.value)
      this.setState( {city: e.target.value} )
    }
    // search = city =>{
    //   const urlCity=
    //   const url = `https://api.openbrewerydb.org/breweries?by_city=${city}`

    //   fetch(url)
    //   .then(results =>results.json)
    //   .then(data =>{
    //     console.log('testing', data)
    //   })
    // }

    render () {

      console.log('city state-', this.state.city)
     
      return (
        <div>
          <form>
            <input 
            type='text'
            placeholder = 'search for a city..'
            onChange={this.searchHandler}
            ></input>
          </form>
        </div>
      )
    }
  }
export default Form