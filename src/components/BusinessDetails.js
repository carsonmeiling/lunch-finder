import React from 'react';
import {
   withScriptjs,
   withGoogleMap,
   GoogleMap,
   Marker} from 'react-google-maps';

   



const BusinessDetails = (props) => {
   const biz = props.location.state.business

   const background = {
      backgroundImage: `url(${biz.image_url})`
   }

   const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={14} defaultCenter={{ lat: biz.coordinates.latitude, lng: biz.coordinates.longitude }}>
          {props.isMarkerShown && (
            <Marker position={{ lat: biz.coordinates.latitude, lng: biz.coordinates.longitude }} />
          )}
        </GoogleMap>
      ))
    );


   return(
      <div className="bizPage">
         <button className="back" onClick = {() => props.history.goBack()}>Back to Results</button>
         
         <div className="businessDetails">
            <h2 className='bizName' >{biz.name}</h2>

            <p className="bizDetails">Address:{biz.location.address1} {biz.location.city}, {biz.location.state} {biz.location.zip_code}</p>
            <p className="bizDetails">Phone Number:{biz.phone}</p>
            <p className="bizDetails">Price:{biz.price}</p>
            <p className="bizDetails">Rating:{biz.rating}</p>
            
         </div>
         <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />

      </div>
   )
}


export default BusinessDetails;

