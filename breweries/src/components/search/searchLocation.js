import React, { Component } from 'react';
import { formatPhoneNumber } from 'react-phone-number-input';
import axios from 'axios'
import './search.css';


class SearchLocation extends Component {

    constructor( props ){
        super( props )
        this.state= {
            // query2: '',
            query: '',
            results: {},
        }
    }

    fetchSearchResults = ( query, query2 ) => {
        const searchUrl= `https://api.openbrewerydb.org/breweries?by_city=${query}&&per_page=100`
        
        axios.get( searchUrl)
            .then( res => {
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
                        let phone = `+1` + result.phone
                        return(
                            <div key= { result.id } className="result-item" style={{border: "black solid .1em"}}>
                                <a className='name' href= { result.website_url } target="_blank" rel="noopener noreferrer">{result.name}</a>
                                <p>{result.street} {result.city}, {result.state}</p>
                                <p>{formatPhoneNumber(`${phone}`)}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render(){
        const { query } = this.state
        return (
            <div className="container">
                <label className="search-label" htmlFor="search-input">
                    <input 
                        className='search-input'
                        type="text"
                        name= "query"
                        value= {query}
                        id="search-input"
                        placeholder='Search by city...'
                        onChange={this.handleOnInputChange}
                    />
                </label>
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default SearchLocation