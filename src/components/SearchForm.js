import React, { useState } from 'react';


const SearchForm = () => {
   const [find , setFind] = useState("");
   const [near , setNear] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      

   }

   return(
      <form onSubmit = {handleSubmit}>
         <div>
            <label>Find</label>
            <input 
            type="text" 
            name="find"
            value={find}
            onChange={e=>setFind(e.target.value)}
            />
         </div>
         <div>
            <label>Near</label>
            <input 
            type="text" 
            name="near"
            value={near}
            onChange={e=>setNear(e.target.value)}
            />
         </div>
         <div>
            <button type="submit">Search</button>
         </div>
      </form>
   )
}

export default SearchForm;