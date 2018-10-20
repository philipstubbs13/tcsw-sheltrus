// Global Import of React
import React, { Component } from 'react';
// Importing React Router to add page routes.
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling.
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
// Import firebase
import firebase from 'firebase';
// import SimpleNavBar
import SimpleNavBar from '../../components/SimpleNavBar';
// import SnackbarMessage component
import SnackbarMessage from '../../components/SnackbarMessage';

// CSS in JS
const styles = {
  textField: {
    marginTop: 40,
  },
  placeToStay: {
    marginTop: 5,
  },
  loginPageTitle: {
    textAlign: 'center',
  },
  loginPageInfo: {
    textAlign: 'center',
    fontSize: 20,
  },
  loginGoogleInfo: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  forgotPasswordError: {
    color: 'var(--form-error-color)',
    textAlign: 'center',
  },
};

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      userEmail: '',
      forgotPasswordError: '',
      forgotPasswordErrorDetails: '',
      open: false,
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const {
      userEmail,
      forgotPasswordError,
      forgotPasswordErrorDetails,
      open,
    } = this.state;

    if (userEmail === '') {
      this.setState({
        forgotPasswordError: 'Enter your email to reset password.',
        forgotPasswordErrorDetails: '',
      });
      return;
    }

    const auth = firebase.auth();
    const emailAddress = userEmail;

    auth.sendPasswordResetEmail(emailAddress).then(() => {
      // Email sent.
    }).catch((error) => {
      // An error happened.
      // console.log(error);
      if (error.code === 'auth/invalid-email') {
        this.setState({
          forgotPasswordError: 'The email address entered is not valid.',
          forgotPasswordErrorDetails: 'Use the following format: someone@example.com.',
        });
        return;
      }

      if (error.code === 'auth/user-not-found') {
        this.setState({
          forgotPasswordError: 'There is no user record corresponding to this email.',
          forgotPasswordErrorDetails: 'The user might have been deleted or does not exist.',
        });
      }
    });
    this.setState({
      userEmail: '',
      forgotPasswordError: '',
      forgotPasswordErrorDetails: '',
      open: true,
    });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const {
      userEmail,
      forgotPasswordError,
      forgotPasswordErrorDetails,
      open,
    } = this.state;

    return (
      <div>
        <SimpleNavBar />
        <div className="page">
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
              <Typography variant="h2" gutterBottom className={classes.loginPageTitle}>
                Sheltr
              </Typography>
              <Typography variant="h6" className={classes.loginPageInfo}>
                Forgot password?
              </Typography>
              <p>
                We just need your registered email address to send you password reset instructions.
              </p>
              <br />
              <TextField
                id="forgot-password-email"
                className={classes.textField}
                label="Email"
                fullWidth
                margin="normal"
                name="userEmail"
                value={userEmail}
                variant="outlined"
                onChange={this.onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Typography variant="h6" className={classes.forgotPasswordError}>
                {forgotPasswordError}
              </Typography>
              <Typography variant="h6" className={classes.forgotPasswordError}>
                {forgotPasswordErrorDetails}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item className={classes.placeToStay} id="login-btn">
              <Button variant="contained" color="primary" className="login-button" onClick={this.onSubmit}>
                Reset Password
              </Button>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <SnackbarMessage
                  onClose={this.handleClose}
                  variant="success"
                  message="Check your email. Instructions to reset your password have been sent to your email."
                />
              </Snackbar>
            </Grid>
          </Grid>
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
              <a href="/">Back to LOGIN page</a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(ForgotPassword);
