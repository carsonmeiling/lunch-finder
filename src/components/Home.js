import React, {useState, useEffect, useContext} from 'react';
import SearchForm from './SearchForm';
import BusinessList from './BusinessList';
import BusinessDetails from './BusinessDetails';
import {BizContext} from '../providers/BizProvider';



const Home = () => {
  // const [bus, setBus] = useState([])
  const [biz, setBiz] = useContext(BizContext);

  console.log(biz)
  console.log(typeof biz)

  return(
    <div className="home-page">
      <h2 className="header">Meal Finder</h2>
      {/* <SearchForm setBus={setBus} /> */}
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
