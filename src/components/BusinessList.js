import React from 'react';
import Home from './Home';
import { Link, Redirect } from 'react-router-dom';

const BusinessList = (props) => {
   const { bus } = props
   return(
      <>
         <div>
            <h2>{bus.name}</h2>
            <p>Price: {bus.price}</p>
            <p>Rating: {bus.rating}</p>
         </div>
      </>   )
   
}

export default BusinessList;