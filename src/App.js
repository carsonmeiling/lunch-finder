import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [bus, setBus] = useState([])

  useEffect (() => {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3.businesses/search?location=${'utah'}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        params: {
          term: 'food',
        }
      })
        .then( res => {setBus(res.data)
          console.log(bus)
          debugger
        })
        .catch( err => {console.log(err)
          debugger
        })
  })

  return(
    <div>
      {bus ? <h2>Data</h2> : <h2>No Data</h2>}
    </div>
  )
  
}

export default App;
