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
    {/* <div className="pin">
      {text}
    </div>
    <div className="pulse">
      {text}
    </div> */}
    <div className="shelterPin">
      {text}
    </div>
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
      shelters,
    } = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBlNQbJHExNycQQQRotKkzcGD31jK6DduI' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {shelters.map(shelter => (
            <AnyReactComponent
              lat={shelter.geometry.y}
              lng={shelter.geometry.x}
              text={shelter.attributes.OBJECTID}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

// Check prop types
MapView.propTypes = {
  text: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  shelters: PropTypes.array.isRequired,
};

// Export component.
export default MapView;
