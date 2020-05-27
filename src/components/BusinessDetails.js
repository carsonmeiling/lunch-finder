import React from 'react';



const BusinessDetails = (props) => {

   return(
      <>
         <button onClick = {() => props.history.goBack()}>Back to Results</button>
         <h2>{props.location.state.business.name}</h2>
      </>
   )
}

export default BusinessDetails;

