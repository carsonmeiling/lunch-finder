import React, {useState, useEffect, useContext} from 'react';
import SearchForm from './SearchForm';
import BusinessList from './BusinessList';
import BusinessDetails from './BusinessDetails';
import {BizContext} from '../providers/BizProvider';



const Home = () => {
  const [biz, setBiz] = useContext(BizContext);

  console.log(biz)
  console.log(typeof biz)

  
  return(
    <div className="home-page">
      <h2 className="header">Business Search</h2>
      <SearchForm />
      {
        biz.map(business => (
          <BusinessList business={business} key={business.id}/>
          ))
      
        }
    </div>


  )
  
}

export default Home;
