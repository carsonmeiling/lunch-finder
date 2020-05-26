import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {BizContext} from '../providers/BizProvider';
import axios from 'axios';



const BusinessDetails = (props) => {
   const [biz, setBiz] = useContext(BizContext);
   const [business, setBusiness] = useState({});

  


   // const getBiz = () => {
   //    const currentBiz = biz.filter(b => b.id === props.match.params.id)
   //    setBusiness(currentBiz[0])
   //    debugger
   //    console.log(business)
   // }

   return(
      <>

         <button onClick = {() => props.history.goBack()}>Go Back</button>
         <h2>{props.location.state.business.name}</h2>
      
      </>
   )
}

export default BusinessDetails;

