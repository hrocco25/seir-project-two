import React, { Component } from 'react';
import axios from 'axios'
import './search.css';


class SearchName extends Component {

    constructor( props ){
        super( props )
        this.state= {
            query: '',
            results: {},
        }
    }

    fetchSearchResults = ( query ) => {
        const searchUrl= `https://api.openbrewerydb.org/breweries?by_name=${query}`
        axios.get( searchUrl)
            .then( res => {
                // console.log(res)
                this.setState( {
                    results: res.data,
                })
            })
    }

    handleOnInputChange = (e) => {
        const query = e.target.value
        if ( ! query ){
            this.setState( { query, results: {}} )
        } else{
          this.setState ( { query }, () =>{
            this.fetchSearchResults( query )
        } ) 
        }
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
        // console.log(this.state)
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    <input 
                        className='search-input'
                        type="text"
                        name= "query"
                        value= {query}
                        id="search-input"
                        placeholder='Search for a brewery..'
                        onChange={this.handleOnInputChange}
                    />
                </label>
                
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchName