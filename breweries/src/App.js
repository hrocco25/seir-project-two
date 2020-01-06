import React, { Component } from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import Main from "./components/main"
import Header from './components/header'
import Denver from './components/denver'
import Springs from './components/springs'

class App extends Component{

  render(){
     
    return(
        <div>
          <nav>
            <Link to='/'>
              <Header />
            </Link>
            
          </nav>
          
          {/* <h1>{this.state.dataArr}</h1> */}
          <main>
            <Route exact path='/' render={props=> <Main {...props} />}/>
            <Route path='/Denver' render={props=> <Denver {...props} />}/>
            <Route path='/Springs' render={props=> <Springs {...props} />}/>
          </main>

        
        </div>
    )
  }
}



export default App;