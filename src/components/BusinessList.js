import React from 'react';

const BusinessList = (props) => {

   return(
      <>
         <h1>Business Search List</h1>
         {
            props.bus.map(b => {
               <h1>{b.title}</h1>
            })
         }
      </>
   )
}

export default BusinessList;