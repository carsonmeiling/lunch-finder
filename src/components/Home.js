import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SeachForm from './SearchForm';

const Home = () => {
  const [bus, setBus] = useState([])
  

  const search = (term,location) => {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
          term: 'food',
          location: 'SLC',
          limit: 20,
        }
      })
        .then( res => {setBus(res.data)
          console.log(bus)
        })
        .catch( err => {console.log(err)
        })
  }

  return(
    <div>
      <h2>Home/landing page</h2>
      <SeachForm />
    </div>


  )
  
}

export default Home;
