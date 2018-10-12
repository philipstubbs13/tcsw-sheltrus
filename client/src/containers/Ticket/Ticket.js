// Global Import of React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Import qrcode placeholder
import qrCode from './qrcode.png';
// Import Tabs component
import Tabs from '../../components/Tabs';

// CSS in JS
const styles = {
  profilePic: {
    borderRadius: '50%',
    maxWidth: '100%',
    width: '200px',
    height: '200px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  qrCode: {
    maxWidth: '100%',
    width: '200px',
    height: '200px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  placeToStay: {
    marginTop: 10,
    alignSelf: 'flex-center',
  },
  checkInPageTitle: {
    textAlign: 'center',
    marginTop: 30,
  },
};

class Ticket extends Component {
  render() {
    // ES6 destructuring
    const { classes, photo } = this.props;

    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Typography variant="h5" gutterBottom className={classes.checkInPageTitle}>
              Have a smart phone? SCAN to check into shelter
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.checkInPageTitle}>
              No smart phone? CALL (952) 960-5416
            </Typography>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <img
                src={qrCode}
                alt="qr code"
                className={classes.qrCode}
              />
              <br />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <img
                src={photo}
                alt="profile pic"
                className={classes.profilePic}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Ticket.propTypes = {
  classes: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(Ticket);
