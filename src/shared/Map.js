import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const key = "AIzaSyCUpSURd8THx7maUBM-WgzUD5YCDzlahSI";
const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%`, width: "100%" }} />,
    containerElement: <div style={{ height: `400px`, width: "100%" }} />,
    mapElement: <div style={{ height: `100%`, width: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: Number(props.lat), lng: Number(props.lon) }}
  >
    <Marker position={{ lat: Number(props.lat), lng: Number(props.lon) }} />
  </GoogleMap>
));
export default MyMapComponent;
