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
// Import css
import './Shelters.css';

// CSS in JS
const styles = {
  placeToStay: {
    marginTop: 10,
    alignSelf: 'flex-center',
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
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ shelters: data.features }));
    // console.log(this.state.shelters);
  }

  render() {
    const { classes } = this.props;
    const { shelters } = this.state;
    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container justify="center" spacing={16} className="{classes.profileContainer}">
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="h5" gutterBottom className={classes.SheltersPageTitle}>
                Find a shelter
              </Typography>
              <Typography variant="h6">
                Tap <i className="fas fa-bed" /> to
                reserve a bed at a participating shelter.
                Each shelter has different booking times.
                Outside the times you can book a bed,
                the listing will say it is offline.
                Please come back later to book a bed.
              </Typography>
              <Button variant="contained" color="primary" className="map-view-btn" fullWidth component={Link} to="/map">
                Map View
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
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
