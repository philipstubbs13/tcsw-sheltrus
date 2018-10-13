// Global import of React
import React, { Component } from 'react';
// Import google map react component
import GoogleMapReact from 'google-map-react';
// import prop types
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
  }}
  >
    {text}
  </div>
);

class SimpleMap extends Component {
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
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text={text}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

// Check prop types
SimpleMap.propTypes = {
  text: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

// Export component.
export default SimpleMap;
