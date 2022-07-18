import React from 'react'
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
export const Maps = ({lati,longi,google}) => {
    const containerStyle = {
        // position: "relative",
        width: "70%",
        height: "300px",
        // marginTop: "2px",
      };
  return (
  
    <Map
    containerStyle={containerStyle}
    google={google}
    // google={props.google}
    initialCenter={{
      lat: lati,
      lng:longi,
    }}
    center={{
        lat: lati,
      lng:longi,
    }}
  >
    <Marker
    // icon={icon}
   
      position={{
        lat: lati,
        lng:longi,
      }}
    />
  </Map>
  )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAjWgrHRcV7bUMwiVCo7mT2KUa9SIoZwEI",
  })(Maps);