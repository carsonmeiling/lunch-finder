import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [bus, setBus] = useState([])

  useEffect (() => {
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
  })

  return(
    <div>
      {bus ? <h2>Data</h2> : <h2>No Data</h2>}
    </div>
  )
  
}

export default App;
