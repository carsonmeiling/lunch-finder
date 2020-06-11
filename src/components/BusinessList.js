import React from 'react';
import { Link } from 'react-router-dom';

const BusinessList = (props) => {
   const { business } = props
   

   

   return(
      <>
         <div className="bizCard">
            <Link 
                  className="link"
                  to={{
                  pathname:'/business',
                  state:{business},
                  }}>
               <h2 className="bizTitle">{business.name}</h2>
               <h4 className="bizAddress"></h4>
               
               <p className="bizPrice">Price: {business.price}</p>
               <p className="bizRating">Rating: {business.rating}/5</p>
            </Link>
         </div>
         <hr/>
      </>  
   )
   
}

export default BusinessList;