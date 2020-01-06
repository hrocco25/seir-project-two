import React, { Component } from 'react';


class Boulder extends Component{
    constructor() {
        super()
        this.state = {
        dataArr: []
        }
    }
 
  componentDidMount(){
    // let city = "denver"
    fetch("https://api.openbrewerydb.org/breweries?by_city=boulder")
    .then(results => results.json())
    .then(data => {
      console.log('this is data', data)
      let dataArr = data.map(city => {
        return(
          <div key={city.name}>
            <p>{city.name}</p>
            <p>{city.brewery_type}</p>
            <p>{city.street} {city.city} {city.state}</p>
            <p>{city.phone}</p>
            <p>{city.website_url}</p>
          </div>


        )
      })
      // let dataArr = data[1].name
      this.setState({dataArr})
    })
      
    
  }

    render(){
       
      return(
          <div>
            Boulder
            {this.state.dataArr}
          
          </div>
      )
    }
  }
  
  
  
  export default Boulder;