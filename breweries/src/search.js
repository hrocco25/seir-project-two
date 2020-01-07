import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {

    constructor( props ){
        super( props )
        this.state= {
            query: '',
            results: {},
            loading: false,
            message: '',
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
                // const resultNotFoundMessage = ! res.data.hits.length
                console.log(res)
            })
            .catch( error => {
                if( axios.isCancel(error) || error){
                    this.setState( {
                        loading: false,
                        message: 'Failed to fetch the data, please check the network'
                    })
                }
            })

    }

    handleOnInputChange = (e) => {
        // e.preventDefault()
        const query = e.target.value
        this.setState ( { query : query , loading: true, message: "" }, () =>{
            this.fetchSearchResults( query )
        } )
        console.log(query)

    }

    render(){

        const { query } = this.state
        console.log(this.state)
        return (
            <div className="container">
                <h2 className="heading">Live Search: React Application</h2>
                <label className="search-label" htmlFor="search-input">
                    <input 
                        type="text"
                        name= "query"
                        value= {query}
                        id="search-input"
                        placeholder='Search..'
                        onChange={this.handleOnInputChange}
                    />
                    
                </label>
            </div>
        )
    }
}

export default Search