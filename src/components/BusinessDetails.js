import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {BizContext} from '../providers/BizProvider';



const BusinessDetails = (props) => {
   const [biz, setBiz] = useContext(BizContext);
   const [business, setBusiness] = useState({});

   console.log(biz)

   return(
      <>
         <button onClick = {() => props.history.goBack()}>Go Back</button>
         <h2>{props.location.state.business.name}</h2>
      </>
   )
}

export default BusinessDetails;

