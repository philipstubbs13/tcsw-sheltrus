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
// Import Tabs component
import Tabs from '../../components/Tabs';
// Import Intake Form Field component
import IntakeFormField from './IntakeFormField';
// import css
import './IntakeForm.css';

const styles = ({
  textField: {
    maxWidth: '100%',
  },
  formPageTitle: {
    textAlign: 'center',
    marginTop: 20,
  },
});

class IntakeForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="headline" className={classes.formPageTitle}>
                Click SUBMIT to book your bed now.
              </Typography>
              <br />
              <Button variant="contained" color="primary" className="book-bed-submit-button" fullWidth component={Link} to="/">
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography component="p">
                Your information will be sent directly to the shelter.
              </Typography>
              <IntakeFormField
                id="intake-name"
                label="Name"
                value="Josh Okogie"
              />
              <IntakeFormField
                id="intake-gender"
                label="Gender"
                value="Male"
              />
              <IntakeFormField
                id="intake-sex-orientation"
                label="Sexual Orientation"
                value="Heterosexual"
              />
              <IntakeFormField
                id="intake-dob"
                label="Date of Birth"
                value="09/01/1998"
              />
              <IntakeFormField
                id="intake-marital"
                label="Marital Status"
                value="Single"
              />
              <IntakeFormField
                id="intake-kids"
                label="Have kids?"
                value="Yes"
              />
              <IntakeFormField
                id="intake-pet"
                label="Have a pet"
                value="Dog"
              />
              <IntakeFormField
                id="intake-health-insurance"
                label="Have health insurance?"
                value="Yes"
              />
              <IntakeFormField
                id="intake-ss"
                label="Social security"
                value="xxx-xxx-3333"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
IntakeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(IntakeForm);
