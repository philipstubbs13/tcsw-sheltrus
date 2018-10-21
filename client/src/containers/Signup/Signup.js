// Global Import of React
import React, { Component } from 'react';
// Importing React Router to add page routes.
// Import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling.
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import SimpleNavBar
import SimpleNavBar from '../../components/SimpleNavBar';
import Modal from '../../components/Modal';
// import CSS
import './Signup.css';

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
  signUpError: {
    color: 'var(--form-error-color)',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 20,
  },
  dialogButtons: {
    marginTop: 30,
  },
};

class Signup extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  onModalClose = () => {
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    // ES6 destructuring
    const {
      classes,
      username,
      userEmail,
      password,
      onChange,
      onSubmit,
      signUpError,
      signUpErrorDetails,
      show,
      toggleModal,
      verifyEmail,
      user,
    } = this.props;

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
                Find or check in at a nearby shelter.
              </Typography>
              <Typography variant="h6" className={classes.loginPageInfo}>
                Provide an email address and password to SIGN UP.
              </Typography>
              <br />
              <TextField
                id="username"
                className={classes.textField}
                label="Display name"
                fullWidth
                margin="normal"
                name="username"
                value={username}
                type="text"
                variant="outlined"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="This is the name that will be displayed within the app."
              />
              <TextField
                id="userEmail"
                className={classes.textField}
                label="Email"
                fullWidth
                margin="normal"
                name="userEmail"
                value={userEmail}
                type="email"
                variant="outlined"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="signup-password"
                className={classes.textField}
                label="Password"
                fullWidth
                name="password"
                type="password"
                margin="normal"
                onChange={onChange}
                value={password}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Typography variant="h6" className={classes.signUpError}>
                {signUpError}
              </Typography>
              <Typography variant="h6" className={classes.signUpError}>
                {signUpErrorDetails}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" spacing={16} className="page-container">
            <Grid item className={classes.placeToStay} id="signup-btn">
              <Button variant="contained" color="primary" className="login-button" onClick={onSubmit} component={Link} to="/">
                Sign up
              </Button>
              {show ? (
                <Modal>
                  <DialogTitle id="scroll-dialog-title">Thank you for signing up!</DialogTitle>
                  <DialogContent>
                    <DialogContentText className={classes.modalText}>
                      Thank you for signing up. You&#39;re account is almost ready for you to use. There is just one more step.
                    </DialogContentText>
                    <DialogContentText className={classes.modalText}>
                      We have sent you a confirmation email. Please check your email and click the link to verify your email address.
                    </DialogContentText>
                    <DialogContentText className={classes.modalText}>
                      After you verify your email, you are ready to go. Just login and you can begin using the app.
                    </DialogContentText>
                    <DialogActions className={classes.dialogButtons}>
                      <Button onClick={verifyEmail} color="primary">
                        Resend confirmation email
                      </Button>
                      <Button onClick={this.onModalClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </DialogContent>
                </Modal>
              ) : null}
            </Grid>
          </Grid>
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
              <div className={classes.loginGoogleInfo}>
                <Button variant="contained" color="primary" className="login-button" component={Link} to="/">
                  Already set up an account? Go back and LOGIN
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  userEmail: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  signUpError: PropTypes.string,
  signUpErrorDetails: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
};

// Default prop types
Signup.defaultProps = {
  username: '',
  password: '',
  signUpError: '',
  signUpErrorDetails: '',
};

// Export component
export default withStyles(styles)(Signup);
