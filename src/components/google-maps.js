
import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';


export default function (props) {
  return (

      <GoogleMapLoader
        containerElement={
          <div style={{ height: "100%"}} />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={10}
            defaultCenter={{ lat: props.lat, lng: props.lon }}>
          </GoogleMap>
        }
      />

  );
}
