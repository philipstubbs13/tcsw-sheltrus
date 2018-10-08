// Global Import of React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Import Google Maps component
import GoogleMapsContainer from './GoogleMapsContainer';
// Import tabs component
import Tabs from '../../components/Tabs';

// CSS in JS
const styles = {
  placeToStay: {
    marginTop: 10,
    alignSelf: 'flex-center',
  },
  MapPageTitle: {
    textAlign: 'center',
  },
};

class Map extends Component {
  render() {
    // ES6 destructuring
    const { classes } = this.props;

    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container spacing={16} className={classes.mapContainer}>
            <Grid item justify="center" xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="headline" gutterBottom className={classes.MapPageTitle}>
                Map
              </Typography>
              <GoogleMapsContainer />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(Map);
