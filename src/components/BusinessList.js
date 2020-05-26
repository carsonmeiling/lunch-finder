import React, { useState, useContext } from 'react';
import Home from './Home';
import { Link, Redirect } from 'react-router-dom';
import {BizContext} from '../providers/BizProvider';
import BusinessDetails from './BusinessDetails';

const BusinessList = (props) => {
   const { business } = props
   // const [biz, setBiz] = useContext(BizContext)
   // console.log(biz)

   

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