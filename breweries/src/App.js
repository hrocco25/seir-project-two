import React from 'react';
import{Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import Location from './components/location'
import Name from './components/name'



function App(){
  return(
        <div>
          <Link to ='/'>
            <Header /> 
          </Link>
          
            <Route exact path='/' render= {props=> <Main {...props}/>}/>
            <Route path='/Location' render={props=> <Location {...props} />}/>
            <Route path='/Name' render={props=> <Name {...props} />}/>
          
          <Footer />
          
        </div>
    )

}




export default App;