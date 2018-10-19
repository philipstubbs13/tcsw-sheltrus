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
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
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
    this.state = {
      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: '',
      uid: props.uid,
    };
    console.log(this.state.uid);

    this.storageRef = storage.ref('/user-images').child(this.state.uid);
    this.userRef = database.ref('/users').child(this.state.uid);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = (filename) => {
    console.log("handle upload success");
    // const file = event.target.files[0];
		console.log(filename);
		const uploadTask = this.storageRef.child(filename)
			.put(filename);

		// uploadTask.on('state_changed', (snapshot) => {
		// 	console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
		// });

		uploadTask.then((snapshot) => {
			this.userRef.child('photoURL').set(snapshot.downloadURL);
		})
    // this.setState({ avatar: filename, progress: 100, isUploading: false });
    // firebase
    //   .storage()
    //   .ref('images')
    //   .child(filename)
    //   .getDownloadURL()
    //   .then(url => this.setState({ avatarURL: url }));
    // const uploadTask = this.storageRef.child(filename)
    //   .put(filename);
    // this.userRef.child('photoURL').set(filename);

    // this.userRef.child('photoURL').on('value', (snapshot) => {
		// 	this.setState({
		// 		avatarURL: snapshot.val()
		// 	});
		// });

    // uploadTask.on('state_changed', (snapshot) => {
    //   console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
    // });

    // uploadTask.then((snapshot) => {
    //   this.userRef.child('photoURL').set(snapshot.downloadURL);
    // });
  };

  handleSubmit(event) {
		const file = event.target.files[0];
		console.log(file.name);
		const uploadTask = this.storageRef.child(file.name)
			.put(file, { contentType: file.type });

		uploadTask.on('state_changed', (snapshot) => {
			console.log(snapshot.bytesTransferred / snapshot.totalBytes * 100 + '%');
		});

		uploadTask.then((snapshot) => {
			this.userRef.child('photoURL').set(snapshot.downloadURL);
		})
	}

  componentDidMount() {
    this.userRef.child('photoURL').on('value', (snapshot) => {
      this.setState({
        avatarURL: snapshot.val(),
      });
    });
    console.log(this.state.avatarURL);
  }

  render() {
    const { classes, name, photo, uid } = this.props;

    return (
      <div>
        <div className="page">
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="h2">{name}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <img
                src={this.state.avatarURL}
                alt="profile pic"
                className={classes.profilePic}
              />
              <br />
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              <label className="select-image-button" style={{
                backgroundColor: 'dodgerblue',
                color: 'white',
                padding: 10,
                borderRadius: 4,
                pointer: 'cursor',
              }}
              >
                Select an image
                {/* <FileUploader
                  hidden
                  accept="image/*"
                  name="avatar"
                  randomizeFilename
                  storageRef={firebase.storage().ref('images').child(uid)}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                /> */}
              </label>
              <input type="file" onChange={this.handleSubmit} />
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
