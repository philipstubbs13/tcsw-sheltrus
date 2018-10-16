// https://github.com/google-map-react/google-map-react
// Global import of React
import React, { Component } from 'react';
// Import google map react component
import GoogleMapReact from 'google-map-react';
// import prop types
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const AnyReactComponent = ({ text }) => (
  <div>
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

  constructor() {
    super();
    this.state = {
      showInfo: false,
      markerNumber: '',
    };

    this.onChildClick = this.onChildClick.bind(this);
  }

  onChildClick = (props) => {
    const { id } = props;
    console.log(this.state);
    console.log(id);
    console.log(this.state);
    this.setState({
      markerNumber: id,
      showInfo: true,
    });
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props);
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
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBlNQbJHExNycQQQRotKkzcGD31jK6DduI' }}
            defaultCenter={center}
            defaultZoom={zoom}
            onChildClick={this.onChildClick}

          >
            {shelters.map(shelter => (
              <AnyReactComponent
                key={shelter.attributes.OBJECTID}
                lat={shelter.geometry.y}
                lng={shelter.geometry.x}
                text={shelter.attributes.OBJECTID}
                name={shelter.attributes.NAME}
                address={shelter.attributes.ADDRESS}
                city={shelter.attributes.CITY}
                zip={shelter.attributes.ZIP}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

// Check prop types
MapView.propTypes = {
  text: PropTypes.string.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  shelters: PropTypes.array.isRequired,
};

// Export component.
export default MapView;
