import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Main from "./components/main"
import Header from './components/header'
import Denver from './components/cities/denver'
import Springs from './components/cities/springs'
import Boulder from './components/cities/boulder'
import Arvada from './components/cities/arvada'
import Castle from './components/cities/castle'


class App extends Component{

  render(){
     
    return(
        <div>
          <nav>
            <Link to='/'>
              <Header />
            </Link>
            
          </nav>
          
          <main>
            <Route exact path='/' render={props=> <Main {...props} />}/>
            <Route path='/Boulder' render={props=> <Boulder {...props} />}/>
            <Route path='/Denver' render={props=> <Denver {...props} />}/>
            <Route path='/Springs' render={props=> <Springs {...props} />}/>
            <Route path='/Arvada' render={props=> <Arvada {...props} />}/>
            <Route path='/Castle' render={props=> <Castle {...props} />}/>
          </main>

        
        </div>
    )
  }
}



export default App;