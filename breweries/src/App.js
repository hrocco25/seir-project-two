import React, { Component } from 'react';
import './App.css';
import { isCompositeComponentWithType } from 'react-dom/test-utils';


class App extends Component{
  constructor() {
    super()
    this.state = {
      dataArr: []
    }
  }
 
  componentDidMount(){
    let city = "denver"
    fetch("https://api.openbrewerydb.org/breweries?by_city=denver")
    .then(results => results.json())
    .then(data => {
      console.log('this is data', data)
      let dataArr = data[0].name
      this.setState({dataArr})
    })
      
    
  }
  render(){
     
    return(
        <div>
        <h1>testing</h1>
        <h1>{this.state.dataArr}</h1>

        
        </div>
    )
  }
}



export default App;