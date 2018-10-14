import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
          <Grid item xs={12} className={classes.placeToStay}>
            <Typography variant="h4" className={classes.reportErrorTitle}>Report error</Typography>
            <Typography variant="subtitle" className={classes.reportErrorTitle}>
              Use this form to report an error if you find incorrect
              information in your profile or find incorrect information
              about one or more of the shelters listed in the app.
            </Typography>
            <form className={classes.container}>
              <TextField
                id="where-is-error"
                name="error-location"
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
                id="error-description"
                name="error-description"
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
                id="error-email"
                name="error-emai"
                label="Email (optional)"
                type="email"
                className={classes.textField}
                margin="normal"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant="contained" color="primary" className="report-error-btn">
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
