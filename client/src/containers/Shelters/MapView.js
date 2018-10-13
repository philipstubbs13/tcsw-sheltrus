// https://github.com/google-map-react/google-map-react
// Global import of React
import React, { Component } from 'react';
// Import google map react component
import GoogleMapReact from 'google-map-react';
// import prop types
import PropTypes from 'prop-types';
// import css
import './MapView.css';

const AnyReactComponent = ({ text }) => (
  <div>
    <div className="pin" />
    <div className="pulse" />
  </div>
);

class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 44.9778,
      lng: -93.2650,
    },
    zoom: 12,
  };

  render() {
    // console.log(this.props);
    const {
      lat,
      lng,
      text,
      center,
      zoom,
    } = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBlNQbJHExNycQQQRotKkzcGD31jK6DduI' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent lat="44.97739398423485" lng="-93.26016642652104" />
          <AnyReactComponent lat="44.95223611579655" lng="-93.27699235207683" />
          <AnyReactComponent lat="44.981477790713" lng="-93.28126724625996" />
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = props => {
  return <div className=".pin"></div>
}

// Check prop types
MapView.propTypes = {
  text: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

// Export component.
export default MapView;
