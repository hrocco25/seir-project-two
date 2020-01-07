import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Castle(){
    const [city, setCity] = useState([])
    const [type, setType] = useState([])

    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/breweries?by_city=castle_rock")
            .then(res =>{
                console.log('test',res)
                setCity(res.data)
                setType(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])

    return(
        <div>
            <div>
                {city.map(city =>(
                    <p key={city.name}>{city.name}</p>
                    
                ))}
            </div>
            <div>
                {type.map(type =>(
                    <p key={type.name}>{type.brewery_type}</p>
                ))}
            </div>


        </div>
    )
}

export default Castle

//     constructor() {
//         super()
//         this.state = {
//         dataArr: []
//         }
//     }
 
//   componentDidMount(){
//     fetch("https://api.openbrewerydb.org/breweries?by_city=castle_rock")
//     .then(results => results.json())
//     .then(data => {
//       console.log('this is data', data)
//       let dataArr = data.map(city => {
//         return(
//           <div key={city.name}>
//             <p>{city.name}</p>
//             <p>{city.brewery_type}</p>
//             <p>{city.street} {city.city} {city.state}</p>
//             <p>{city.phone}</p>
//             <p>{city.website_url}</p>
//           </div>


//         )
//       })
   
//       this.setState({dataArr})
//     })
      
    
//   }

//     render(){
       
//       return(
//           <div>
//             Boulder Breweries
//             {this.state.dataArr}
          
//           </div>
//       )
//     }
//   }
  
  
  
//   export default Castle;