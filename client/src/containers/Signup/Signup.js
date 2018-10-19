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
// import SimpleNavBar
import SimpleNavBar from '../../components/SimpleNavBar';
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
};

class Signup extends Component {
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // ES6 destructuring
    const {
      classes,
      handleLogin,
      username,
      password,
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
                Enter your username and password to LOGIN.
              </Typography>
              <br />
              <TextField
                id="login-username"
                className={classes.textField}
                label="Username"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                name="username"
                value={username}
                variant="outlined"
                onChange={this.onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="login-password"
                className={classes.textField}
                label="Password"
                style={{ margin: 8 }}
                fullWidth
                name="password"
                type="password"
                margin="normal"
                onChange={this.onChange}
                value={password}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" spacing={16} className="page-container">
            <Grid item className={classes.placeToStay} id="login-btn">
              <Button variant="contained" color="primary" className="login-button" component={Link} to="/profile">
                Login
              </Button>
            </Grid>
            <Grid item className={classes.placeToStay} id="signup-btn">
              <Button variant="contained" color="primary" className="login-button" component={Link} to="/sigup">
                Sign up
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
              <div className={classes.loginGoogleInfo}>
                <p>OR Login with Google to use the app.</p>
                <button type="submit" className="loginBtn loginBtn--google" onClick={handleLogin}>
                  Login with Google
                </button>
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
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
};

// Default prop types
Signup.defaultProps = {
  username: '',
  password: '',
};

// Export component
export default withStyles(styles)(Signup);
