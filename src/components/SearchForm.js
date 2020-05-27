import React, { useState, useContext } from 'react';
import axios from 'axios';
import { BizContext } from '../providers/BizProvider';


const SearchForm = (props) => {

  const [term , setTerm] = useState("")
  const [location , setLocation] = useState("")
  const [biz, setBiz] = useContext(BizContext)

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
        .then( res => {setBiz(res.data.businesses)

         console.log("biz")
         console.log(biz)
        
        })
        .catch( err => {console.log(err)
        })
  }

   return(
      <form onSubmit = {handleSubmit} className="search-form">
         <div className="search">
            <label className="label">Find</label>
            <input 
            className="input"
            type="text" 
            name="term"
            placeholder="Lunch, Tacos, American ..."
            value={term}
            onChange={e=>setTerm(e.target.value)}
            />
         </div>
         <div className="search">
            <label className="label">Near</label>
            <input 
            className="input"
            type="text" 
            name="location"
            placeholder="Zip, City, State ..."
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