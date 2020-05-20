import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SearchForm = (props) => {

  const [term , setTerm] = useState("")
  const [location , setLocation] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault();
      search(term, location)
      
   }

   const search = (term, location) => {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
          term,
          location,
          limit: 5,
        }
      })
        .then( res => {props.setBus(res.data.businesses)
        
        })
        .catch( err => {console.log(err)
        })
  }

   return(
      <form onSubmit = {handleSubmit} className="search-form">
         <div className="search">
            <label>Find</label>
            <input 
            type="text" 
            name="term"
            value={term}
            onChange={e=>setTerm(e.target.value)}
            />
         </div>
         <div className="search">
            <label>Near</label>
            <input 
            type="text" 
            name="location"
            value={location}
            onChange={e=>setLocation(e.target.value)}
            />
         </div>
         <div>
            <button type="submit" className='submit-btn'>Search</button>
         </div>
      </form>
   )
}

export default SearchForm;