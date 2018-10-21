import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// Import firebase
import firebase from 'firebase';
// import database
import { database } from '../../firebase-config';
// import css
import './DeleteAccount.css';

const styles = {
  placeToStay: {
    width: '100%',
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
  deleteAccountCheckbox: {
    marginTop: 20,
  },
  formGroup: {
    marginTop: 10,
  },
  deleteAccountTitle: {
    textAlign: 'center',
  },
  deleteAccountInfo: {
    textAlign: 'center',
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
      deleteFeedback: '',
      open: false,
      checked: false,
    };

    this.deleteAccountRef = database.ref('/deleteaccount');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCheckChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { deleteReason, deleteFeedback } = this.state;
    const { uid, email, name } = this.props;

    this.deleteAccountRef.child(uid).push({
      deleteReason,
      deleteFeedback,
      email,
      name,
    });

    this.setState({
      open: true,
      deleteReason: '',
      deleteFeedback: '',
    });

    const user = firebase.auth().currentUser;
    console.log(user);

    user.delete().then(() => {
      // User deleted.
      this.props.history.push('/');
    }).catch((error) => {
      // An error happened.
      console.log(error);
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
    const { deleteReason, open, checked, deleteFeedback } = this.state;

    return (
      <div className="page">
        <Grid container direction="column" spacing={24} className="page-container">
          <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
            <Typography variant="h4" className={classes.deleteAccountTitle}>Delete your account</Typography>
            <div className={classes.deleteAccountInfo}>
              <p>Hi, we're sorry to hear you'd like to delete your account.</p>
              <p>Deleting your account will permanently delete your
                Shelter user account and all the data associated with it.
              </p>
              <p>This cannot be reversed, so make sure you're sure this is what you want to do.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
            <div className={classes.formGroup}>
              <Typography variant="h6">
                Why are you deleting your account?
              </Typography>
              <TextField
                id="deleteReason"
                name="deleteReason"
                select
                value={deleteReason}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: false,
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
            </div>
            <div className={classes.formGroup}>
              <Typography variant="h6">
                Your feedback matters. Is there anything else you'd like us to know.
              </Typography>
              <TextField
                id="deleteFeedback"
                name="deleteFeedback"
                value={deleteFeedback}
                onChange={this.handleChange}
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
            </div>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checked}
                  onChange={this.handleCheckChange('checked')}
                  value="checked"
                  color="primary"
                />
              )}
              label="Yes, I'm sure I want to permanently delete my account."
              className={classes.deleteAccountCheckbox}
            />
            <Button
              variant="contained"
              color="secondary"
              className="delete-account-btn"
              onClick={this.onSubmit}
              disabled={!checked}
            >
              Permanently delete my account
            </Button>
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
