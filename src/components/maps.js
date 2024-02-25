import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '600px',
};
const center = {
  lat: 12.971599, // default latitude
  lng: 77.594566, // default longitude
};
const handleClick=function(){
  alert("Alpine Viva, Seegahalli, Sai Gardens, Bengaluru, Karnataka- 560067");
}
const Maps = () => {
  const [LocationPosition, setLocationPosition]=useState({});
  useEffect(()=>{
    if(!navigator.geolocation){
      alert("Geolocation not supported");
    }else{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLocationPosition({
          ...position,
          defaultLatitude: position.coords.latitude,
          defaultLongitude: position.coords.longitude,
        });
      });
    }
  },[])  ;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB3A1drlB1oboKiNIHHb-_t4ou9-jIFgxU',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <div onClick={handleClick}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onClick={handleClick}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Maps;