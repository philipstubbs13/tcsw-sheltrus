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
import { storage, database } from '../../firebase-config';
// import css
import './Profile.css';

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
  constructor(props) {
    super(props);

    this.storageRef = storage.ref('/user-images').child(props.uid);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // const file = event.target.file;
    console.log(event);
    // const uploadTask = this.storageRef.child(file)
    //   .put(file, { contentType: file.type });

    // uploadTask.on('state_changed', (snapshot) => {
    //   console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
    // });

    // uploadTask.then((snapshot) => {
    //   this.userRef.child('photoURL').set(snapshot.downloadURL);
    // });
  }

  render() {
    const { classes, name, photo } = this.props;
    // console.log(this.props);

    return (
      <div>
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
              <Button
                fullWidth
                containerElement='label'
                variant="contained"
                color="primary" className="select-image-button"
              >
                Select an image
                <input type="file" hidden />
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
