// Global Import of React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Import database from firebase config file.
import { database } from '../../firebase-config';
// Import qrcode placeholder
import qrCode from './qrcode.png';
// Import placeholder profile image (if user doesn't have profile photo)
import profilePic from '../Profile/profile.png';

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
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      userPhoto: '',
      uid: props.uid,
    };

    const { uid } = this.state;
    this.userRef = database.ref('/users').child(uid);
  }

  componentDidMount() {
    // If the user has a photo that they uploaded previously,
    // Grab that photo from firebase and display it.
    // Else, if there is no photo to grab from firebase,
    // Then display a placeholder profile pic.
    this.userRef.child('photoURL').on('value', (snapshot) => {
      if (snapshot.val()) {
        this.setState({
          userPhoto: snapshot.val(),
        });
      } else {
        this.setState({
          userPhoto: profilePic,
        });
      }
    });
  }

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const { userPhoto } = this.state;

    return (
      <div>
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
                src={userPhoto}
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
  uid: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(Ticket);
