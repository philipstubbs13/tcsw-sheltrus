// Global Import of React
import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import css
import './Profile.css';
// Import Tabs component
import Tabs from '../../components/Tabs';

const styles = {
  profileInfo: {
    marginTop: 30,
  },
  profilePic: {
    borderRadius: '50%',
    maxWidth: '100%',
    width: '200px',
    height: '200px',
    borderColor: 'var(--app-dark-color)',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  placeToStay: {
    marginTop: 10,
  },
};

class Profile extends Component {
  render() {
    const { classes, name, photo } = this.props;
    // console.log(this.props);

    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="h2">{name}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <img
                src={photo}
                alt="profile pic"
                className={classes.profilePic}
              />
              <br />
              <Button fullWidth variant="contained" color="primary" className="select-image-button">
                Select image
              </Button>
              <br />
              <Button variant="contained" color="primary" className="need-place-button" fullWidth component={Link} to="/shelters">
                I need a place to stay
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(Profile);
