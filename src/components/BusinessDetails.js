import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {BizContext} from '../providers/BizProvider';


const BusinessDetails = (props) => {
   const [biz, setBiz] = useContext(BizContext);
   const [business, setBusiness] = useState({});

   useEffect(() => {
      getBiz()
   },[])


   const getBiz = () => {
      const currentBiz = biz.filter(b => b.id === +props.match.params.id)
      setBusiness(currentBiz[0])
      console.log(business)
   }

   return(
      <>

         <button onClick = {() => props.history.goBack()}>Go Back</button>
         <h1>Business Details</h1>
         {/* <p>name: {business.name}</p> */}
      
      </>
   )
}

export default BusinessDetails;

