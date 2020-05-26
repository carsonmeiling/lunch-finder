import React, { useState, useContext } from 'react';
import Home from './Home';
import BusinessDetails from './BusinessDetails';
import { Link, Redirect } from 'react-router-dom';
import {BizContext} from '../providers/BizProvider';

const BusinessList = (props) => {
   const { business } = props
   // const [biz, setBiz] = useContext(BizContext)
   // console.log(biz)

   

   return(
      <>
         <Link to={`/business/${business.id}`}>
            <div>
               <h2>{business.name}</h2>
               <p> {business.id}</p>
               <p>Price: {business.price}</p>
               <p>Rating: {business.rating}</p>
            </div>
         </Link>
      </>   )
   
}

export default BusinessList;