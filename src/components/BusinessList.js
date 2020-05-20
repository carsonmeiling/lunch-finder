import React, { useState } from 'react';
import Home from './Home';
import BusinessDetails from './BusinessDetails';
import { Link, Redirect } from 'react-router-dom';

const BusinessList = (props) => {
   const { bus } = props

   

   return(
      <>
         <Link to={`/business/${bus.id}`} bus={bus}>
            <div>
               <h2>{bus.name}</h2>
               <p> {bus.id}</p>
               <p>Price: {bus.price}</p>
               <p>Rating: {bus.rating}</p>
            </div>
         </Link>
      </>   )
   
}

export default BusinessList;