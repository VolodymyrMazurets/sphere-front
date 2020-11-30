import "./ProfileViewMap.scss";

import React from "react";

// import { GoogleMap, LoadScript } from "@react-google-maps/api";


// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

export const ProfileViewMap: React.FC = () => {
  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  return (
    <>
      <span className="ProfileViewMap__small-title">
        Heat Map of Tagged Locations
      </span>
      {/* <LoadScript googleMapsApiKey="AIzaSyC3bq8jHl8N_nF_i2EJJpYX8JHbqa70t1g">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        </GoogleMap>
      </LoadScript> */}
    </>
  );
};
