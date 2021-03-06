import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem';
// import database
import { database } from '../../firebase-config';
// import css
import './ReportError.css';
// import ReportErrorField component
import ReportErrorField from './ReportErrorField';
// import SnackbarMessage component
import SnackbarMessage from '../../components/SnackbarMessage';

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
  reportErrorTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  aboutOverview: {
    width: '0%',
  },
  textField: {
    marginTop: 40,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  menu: {
    width: 200,
  },
};

const errorLocationList = [
  {
    value: 'My profile',
    label: 'My profile page',
  },
  {
    value: 'Shelters page - LIST VIEW',
    label: 'Shelters page - LIST VIEW',
  },
  {
    value: 'Shelters page - MAP VIEW',
    label: 'Shelters page - MAP VIEW',
  },
  {
    value: 'Check in',
    label: 'Check in page',
  },
  {
    value: 'About',
    label: 'About page',
  },
  {
    value: 'Help',
    label: 'Help page',
  },
];

class ReportError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorLocation: '',
      errorDescription: '',
      open: false,
    };

    this.reportErrorsRef = database.ref('/reporterrors');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { errorLocation, errorDescription } = this.state;
    const { uid, email, name } = this.props;

    this.reportErrorsRef.child(uid).push({
      errorLocation,
      errorDescription,
      email,
      name,
    });

    this.setState({
      open: true,
      errorLocation: '',
      errorDescription: '',
    });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, email, name } = this.props;
    const { errorLocation, errorDescription, open } = this.state;

    return (
      <div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
          <Grid item xs={12} className={classes.placeToStay}>
            <Typography variant="h4" className={classes.reportErrorTitle}>Report error</Typography>
            <p>Use this form to report an error if you find incorrect
              informaton about one or more of the shelters listed in the app.
            </p>
            <form className={classes.container}>
              <TextField
                id="errorLocation"
                name="errorLocation"
                select
                value={errorLocation}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
                label="Where is the error?"
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
              >
                {errorLocationList.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="errorDescription"
                name="errorDescription"
                value={errorDescription}
                onChange={this.handleChange}
                label="Error description"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
                rows={5}
                fullWidth
                rowsMax={8}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <ReportErrorField
                id="name"
                name="name"
                value={name}
                label="Name"
                type="text"
              />
              <ReportErrorField
                id="email"
                name="email"
                value={email}
                label="Email"
                type="email"
              />
              <Button
                variant="contained"
                color="primary"
                className="report-error-btn"
                onClick={this.onSubmit}
                disabled={!errorLocation || !errorDescription}
              >
                Report
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
                  message="Thank you for reporting the error!"
                />
              </Snackbar>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Check prop types
ReportError.propTypes = {
  classes: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(ReportError);
