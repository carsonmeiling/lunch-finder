import React, { useContext} from 'react';
import SearchForm from './SearchForm';
import BusinessList from './BusinessList';
import {BizContext} from '../providers/BizProvider';




const Home = () => {
  const [biz, setBiz] = useContext(BizContext);

  console.log(biz)
  console.log(typeof biz)

  
  return(
    <>
    <div className="home-page">
      <h2 className="header">FORK AND SPOON</h2>
      <SearchForm />
    </div>
    <div className="bizList">

      {
        biz.map(business => (
          <BusinessList business={business} key={business.id}/>
          ))
          
        }
    </div>

    </>
  )
  
}

export default Home;
