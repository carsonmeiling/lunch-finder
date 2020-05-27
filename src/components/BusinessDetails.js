import React from 'react';



const BusinessDetails = (props) => {
      const biz = props.location.state.business

      const background = {
         backgroundImage: `url(${biz.image_url})`
      }
   return(
      <div className="bizPage">
         <button className="back" onClick = {() => props.history.goBack()}>Back to Results</button>
         {/* <div style={background}>

         </div> */}
         <div className="businessDetails">
            <h2 className='bizName' >{biz.name}</h2>

            <p className="bizDetails">Address:{biz.location.address1} {biz.location.city}, {biz.location.state} {biz.location.zip_code}</p>
            <p className="bizDetails">Phone Number:{biz.phone}</p>
            <p className="bizDetails">Price:{biz.price}</p>
            <p className="bizDetails">Rating:{biz.rating}</p>
            
         </div>

      </div>
   )
}


export default BusinessDetails;

