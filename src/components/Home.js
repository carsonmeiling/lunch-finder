import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BusinessList from './BusinessList';
import BusinessDetails from './BusinessDetails';

const Home = () => {
  const [bus, setBus] = useState([])


  return(
    <div>
      <h2>Home Page</h2>
      <SearchForm setBus={setBus} />
      {
        bus.map(b => 
          <BusinessList bus={b} key={b.id}/>
          )
      }
    </div>


  )
  
}

export default Home;
