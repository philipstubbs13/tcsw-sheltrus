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
// Import firebase
import firebase from 'firebase';
// import database
import { database } from '../../firebase-config';
// import ReportErrorField component
import ReportErrorField from '../ReportError/ReportErrorField';
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
  deleteReason: {
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

const deleteReasonDropDown = [
  {
    value: 'Trouble getting started',
    label: 'Trouble getting started',
  },
  {
    value: 'Created a second account',
    label: 'Created a second account',
  },
  {
    value: 'I do not find the app useful',
    label: 'I do not find the app useful',
  },
  {
    value: 'I am no longer homeless',
    label: 'I am no longer homeless',
  },
  {
    value: 'Privacy concern',
    label: 'Privacy concern',
  },
  {
    value: 'Something else',
    label: 'Something else',
  },
];

class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteReason: '',
      open: false,
    };

    this.deleteAccountRef = database.ref('/deleteaccout');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { deleteReason } = this.state;
    const { uid, email, name } = this.props;

    this.deleteAccountRef.child(uid).push({
      deleteReason,
      email,
      name,
    });

    this.setState({
      open: true,
      deleteReason: '',
    });

    const user = firebase.auth().currentUser;
    console.log(user);

    user.delete().then(() => {
      // User deleted.
    }).catch((error) => {
      // An error happened.
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
    const { deleteReason, open } = this.state;

    return (
      <div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
          <Grid item xs={12} className={classes.placeToStay}>
            <Typography variant="h4" className={classes.reportErrorTitle}>Delete your account</Typography>
            <p>Hi, we're sorry to hear you'd like to delete your account.</p>
            <p>Deleting your account will permanently delete your Shelter user account and all the data associated with it.</p>
            <p>This cannot be reversed, so make sure you're sure this is what you want to do.</p>
            <Grid container spacing={16} justify="center">
              <Grid item xs={6} className={classes.deleteReason}>
                <Typography variant="h6">
                  Why are you deleting your account?
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.deleteReason}>
                <TextField
                  id="deleteReason"
                  name="deleteReason"
                  select
                  value={deleteReason}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                >
                  {deleteReasonDropDown.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className="report-error-btn"
                  onClick={this.onSubmit}
                >
                  Permanently delete my account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Check prop types
DeleteAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(DeleteAccount);
