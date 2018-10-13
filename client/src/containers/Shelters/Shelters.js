// Global Import of React
import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI Components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
// Import Tabs component
import Tabs from '../../components/Tabs';
// Import Shelter (singular) component
import Shelter from './Shelter';
// Import Map component
import Map from '../Map';
// Import css
import './Shelters.css';

// CSS in JS
const styles = {
  placeToStay: {
    marginTop: 10,
  },
  SheltersPageTitle: {
    textAlign: 'center',
  },
};

const API = 'https://gis.hennepin.us/arcgis/rest/services/HennepinData/PLACES/MapServer/8/query?where=1%3D1&outFields=*&outSR=4326&f=json';

class Shelters extends Component {
  constructor() {
    super();
    this.state = {
      shelters: [],
      showMap: false,
      buttonLabel: 'MAP VIEW',
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ shelters: data.features }));
    // console.log(this.state.shelters);
  }

  // On click handler for toggling Map/List view
  handleToggleMap = () => {
    // ES6 destructuring
    const {
      showMap,
      buttonLabel,
    } = this.state;

    // console.log("Toggle map");
    if (showMap) {
      this.setState({
        showMap: false,
        buttonLabel: 'MAP VIEW',
      });
    } else {
      this.setState({
        showMap: true,
        buttonLabel: 'LIST VIEW',
      });
    }
    console.log(showMap);
  }

  render() {
    const { classes } = this.props;
    const { shelters, buttonLabel, showMap } = this.state;
    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container justify="center" spacing={16} className="{classes.profileContainer}">
            <Grid item xs={12} className={classes.placeToStay}>
              <Typography variant="h5" gutterBottom className={classes.SheltersPageTitle}>
                Find a shelter
              </Typography>
              <Button variant="contained" color="primary" className="map-view-btn" onClick={this.handleToggleMap}>
                {buttonLabel}
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              {showMap
                ? (
                  <Map />
              )
              : (
                <div>
                  <Typography variant="h6" style={{ textAlign: 'center' }}>
                    Tap <i className="fas fa-bed" /> to
                    reserve a bed at a participating shelter.
                  </Typography>
                  <List>
                    {shelters.map(shelter => (
                      <Shelter
                        id={shelter.attributes.OBJECTID}
                        name={shelter.attributes.NAME}
                        address={shelter.attributes.ADDRESS}
                        city={shelter.attributes.CITY}
                        zip={shelter.attributes.ZIP}
                        type={shelter.attributes.SERV_TYPE}
                      />
                    ))}
                  </List>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Shelters.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(Shelters);
