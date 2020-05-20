import React from 'react';
import { useHistory } from 'react-router-dom';

const BusinessDetails = (props) => {
   const { bus } = props

   return(
      <>
         <button onClick = {() => props.history.goBack()}>Go Back</button>
         <h1>Business Details</h1>
         <p>name: {bus}</p>
      
      </>
   )
}

export default BusinessDetails;

