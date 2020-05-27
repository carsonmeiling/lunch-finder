import React from 'react';
import { Link } from 'react-router-dom';

const BusinessList = (props) => {
   const { business } = props
   

   

   return(
      <>
            <div>
               <Link to={{
                  pathname:'/business',
                  state:{business},
                  }}>
               <h2>{business.name}</h2>
               <h4>Address: {business.location.address1} {business.location.city},{business.location.state} {business.location.zip_code}</h4>
               
               <p>Price: {business.price}</p>
               <p>Rating: {business.rating}</p>
               </Link>
            </div>
      </>   )
   
}

export default BusinessList;