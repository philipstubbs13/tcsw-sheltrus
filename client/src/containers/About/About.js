// Global import of React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import css
import './About.css';
// import logo
import Logo from '../../sheltr-b2.svg';

const styles = {
  placeToStay: {
    marginTop: 10,
    width: '70%',
    textAlign: 'center',
  },
  appInfo: {
    marginTop: 30,
    width: '30%',
    textAlign: 'center',
  },
  appDetails: {
    marginTop: 20,
  },
  aboutTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  aboutOverview: {
    width: '0%',
  },
};

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
          <Grid item xs={12} className={classes.placeToStay}>
            <Typography variant="h4" className={classes.aboutTitle}>About Sheltr</Typography>
            <div>
              <Grid container spacing={16} justify="center">
                <Grid item xs={6} className={classes.placeToStay}>
                  <img src={Logo} alt="Sheltr app logo" className="app-logo" />
                </Grid>
                <Grid item xs={6} className={classes.placeToStay}>
                  <Typography className={classes.appDetails} variant="subtitle">App version 1.0.0</Typography>
                  <Typography className={classes.appDetails} variant="subtitle">Copyright &copy; 2018</Typography>
                </Grid>
                <Grid item xs={12} className={classes.aboutOverview}>
                  <p>
                    Do you have trouble finding a place to sleep at night?
                    Sheltr is a mobile and web-based app that you can use on the go
                    with your phone or in a location with a public computer
                    (like a public library). The app provides you with an easy and quick
                    way to find and check into different shelters around Minneapolis.
                    When you look up shelters using the app, the app gives you information
                    like address, a map showing the exact location, phone number, and
                    who the shelter serves (youth, families, etc.).
                  </p>
                  <p>For more information, visit <a href="https://shelterus.co" target="_blank" rel="noopener noreferrer">shelterus.co</a></p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Check prop types
About.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(About);
