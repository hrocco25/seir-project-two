import React, { Component } from 'react';
import axios from 'axios'
import Results from './components/results'

class Search extends Component {

    constructor( props ){
        super( props )
        this.state= {
            query: '',
            results: {},
        }

        this.cancel= ''
    }

    fetchSearchResults = ( query ) => {
        const searchUrl= `https://api.openbrewerydb.org/breweries?by_city=${query}`

        if (this.cancel ) {
            this.cancel.cancel()
        }

        this.cancel =axios.CancelToken.source()

        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        } )
            .then( res => {
                console.log(res)
                this.setState( {
                    results: res.data,
                    loading: false
                })
            })
            .catch( error => {
                if( axios.isCancel(error) || error){
                    this.setState( {
                        loading: false,
                    })
                }
            })

    }



    handleOnInputChange = (e) => {
        const query = e.target.value
        if ( ! query ){
            this.setState( { query, results: {}} )
        } else{
          this.setState ( { query : query }, () =>{
            this.fetchSearchResults( query )
        } )
          
        }
        console.log(query)

    }

    renderSearchResults = () => {
        const { results } = this.state
        if ( Object.keys (results).length && results.length){
            return(
                <div className='results-container'>
                    {results.map( result => {
                        return(
                            <div key= { result.id } className="result-item">
                                <a className='name' href= { result.website_url } target="_blank">{result.name}</a>
                                <p>{result.street} {result.city}, {result.state}</p>
                                <p>{result.phone}</p>
                                <p></p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render(){

        const { query } = this.state
        console.log(this.state)
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    <input 
                        type="text"
                        name= "query"
                        value= {query}
                        id="search-input"
                        placeholder='Search for city..'
                        onChange={this.handleOnInputChange}
                    />
                    
                  
                    
                </label>
                <Results />
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default Search