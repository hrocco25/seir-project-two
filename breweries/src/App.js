import React from 'react';
import{Link, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Location from './components/search/location'
import Name from './components/search/name'



function App(){
  return(
        <div className='app'>
          <Link to ='/' style={{textDecoration: 'none', color: 'black'}}>
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