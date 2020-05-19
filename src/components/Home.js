import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BusinessList from './BusinessList';

const Home = () => {
  const [bus, setBus] = useState([])

  // useEffect (() => {
  //     axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  //       },
  //       params: {
  //         term: 'food',
  //         location: 'SLC',
  //         limit: 5,
  //       }
  //     })
  //       .then( res => {setBus(res.data.businesses)
  //         console.log(bus)
        
  //       })
  //       .catch( err => {console.log(err)
  //       })
  // },[])

  let itemsToRender = bus;
  console.log(itemsToRender)
  if (bus){
    itemsToRender = bus.map(b => {
      return <div key={b.id}>
        <h2>{b.name}</h2>
        <p>{b.rating}</p>
        <p>Price{b.price}</p>
        </div>
    })
  }
  return(
    <div>
      <SearchForm setBus={setBus} />
      <h2>Home/landing page</h2>
      <div>{itemsToRender}</div>
    </div>


  )
  
}

export default Home;
