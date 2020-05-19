import React from 'react';
import Home from './Home';

const BusinessList = (businesses) => (

   
      <>
         {
            businesses.map(b => 
               <h1>{b.title}</h1>
            )
         }
      </>
   
)

export default BusinessList;