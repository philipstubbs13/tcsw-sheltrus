import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import database
import { database } from '../../firebase-config';
// import css
import './ReportError.css';

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
};

class ReportError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorlocation: '',
      errorDescription: '',
    };

    this.reportErrorsRef = database.ref('/reporterrors');

  //   this.onChildClick = this.onChildClick.bind(this);
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
  };

  render() {
    const { classes, email, name } = this.props;
    const { errorLocation, errorDescription } = this.state;

    return (
      <div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
          <Grid item xs={12} className={classes.placeToStay}>
            <Typography variant="h4" className={classes.reportErrorTitle}>Report error</Typography>
            <p>Use this form to report an error if you...</p>
            <ul>
              <li>Find incorrect information in your profile OR</li>
              <li>Find incorrect informaton about one or more of the
                shelters listed in the app.
              </li>
            </ul>
            <form className={classes.container}>
              <TextField
                id="errorLocation"
                name="errorLocation"
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
              />
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
              <TextField
                id="name"
                name="name"
                value={name}
                label="Name"
                type="text"
                className={classes.textField}
                margin="normal"
                fullWidth
                variant="outlined"
                disabled
                readOnly
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="error-email"
                name="email"
                value={email}
                label="Email"
                type="email"
                className={classes.textField}
                margin="normal"
                fullWidth
                variant="outlined"
                disabled
                readOnly
                InputLabelProps={{
                  shrink: true,
                }}
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
};

// Export component
export default withStyles(styles)(ReportError);
