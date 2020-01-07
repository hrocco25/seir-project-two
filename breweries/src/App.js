import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Header from './components/header'
import Search from './search'


class App extends Component{

  render(){
     
    return(
        <div>
          <nav>
            
              <Header />
            
           
          </nav>

          <Search />
          
          

        
        </div>
    )
  }
}



export default App;