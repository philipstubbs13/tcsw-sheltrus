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
  button: {
    marginTop: 25,
    marginBottom: 25,
    padding: '1rem',
  },
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      progress: 0,
      uid: props.uid,
      avatarURL: '',
    };

    const { uid } = this.state;
    this.storageRef = storage.ref('/user-images').child(uid);
    this.userRef = database.ref('/users').child(uid);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // console.log(this.userRef.child('photoURL'));
    this.userRef.child('photoURL').on('value', (snapshot) => {
      this.setState({
        avatarURL: snapshot.val(),
      });
    });
  }

  handleSubmit(event) {
    const { uid } = this.state;
    const file = event.target.files[0];
    // console.log(file.name);
    const uploadTask = this.storageRef.child(file.name)
      .put(file, { contentType: file.type });

    uploadTask.on('state_changed', (snapshot) => {
      // console.log(`${snapshot.bytesTransferred / snapshot.totalBytes * 100}%`);
    });

    uploadTask.then((snapshot) => {
      // console.log(snapshot);
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        // console.log('File available at', downloadURL);
        database.ref('/users').child(uid).child('photoURL').set(downloadURL);
      });
    });
  }

  render() {
    const {
      classes,
      name,
    } = this.props;
    const { isUploading, avatarURL, progress } = this.state;

    return (
      <div>
        <div className="page">
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="h2">{name}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <img
                src={avatarURL}
                alt="profile pic"
                className={classes.profilePic}
              />
              <br />
              {isUploading && <p>Progress: {progress}</p>}
              <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                type="file"
                onChange={this.handleSubmit}
                hidden
              />
              <label id="upload-photo" htmlFor="outlined-button-file">
                <Button variant="outlined" component="span" className={classes.button} fullWidth>
                  Upload photo
                </Button>
              </label>
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
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(Profile);
