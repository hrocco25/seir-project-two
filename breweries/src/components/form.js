import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state =  {
        
        city: ''
    } 
  }
    searchHandler = (e) =>{
      e.preventDefault()
      console.log('e.target.value', e.target.value)
      this.setState( {city: e.target.value} )
    }
    render () {
     
      return (
        <div>
          
         
          <form>
            <input 
            type='text'
            placeholder = 'search'
            onChange={this.searchHandler}
            ></input>
          </form>
          
        </div>
      )
    }
  }
export default Form