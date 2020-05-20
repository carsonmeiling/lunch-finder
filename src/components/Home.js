import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BusinessList from './BusinessList';
import BusinessDetails from './BusinessDetails';

const Home = () => {
  const [bus, setBus] = useState([])

  // let itemsToRender = bus;
  // console.log(itemsToRender)
  // if (bus){
  //   itemsToRender = bus.map(b => {
  //     return <div key={b.id}>
  //       <h2>{b.name}</h2>
  //       <p>{b.rating}</p>
  //       <p>Price{b.price}</p>
  //       </div>
  //   })
  // }

  return(
    <div>
      <SearchForm setBus={setBus} />
      <h2>Home Page</h2>
      {
        bus.map(b => 
          <BusinessList bus={b}/>
          )
      }
    </div>


  )
  
}

export default Home;
