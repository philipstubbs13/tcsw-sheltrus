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
import Snackbar from '@material-ui/core/Snackbar';
// Import Intake Form Field component
import IntakeFormField from './IntakeFormField';
// Import SimpleMap component
import SimpleMap from './SimpleMap';
// import css
import './IntakeForm.css';
// import SnackbarMessage component
import SnackbarMessage from '../../components/SnackbarMessage';

const styles = ({
  textField: {
    maxWidth: '100%',
  },
  formPageTitle: {
    textAlign: 'center',
    marginTop: 20,
  },
  typography: {
    useNextVariants: true,
  },
  moreShelterInfo: {
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
  },
  shelterName: {
    textAlign: 'center',
    marginTop: 40,
  },
  readOnlyInfo: {
    marginTop: 40,
  },
  requestShelter: {
    display: 'flex',
  },
});

const API = 'https://gis.hennepin.us/arcgis/rest/services/HennepinData/PLACES/MapServer/8/query?where=1%3D1&outFields=*&outSR=4326&f=json';

class IntakeForm extends Component {
  constructor() {
    super();
    this.state = {
      shelters: [],
      open: false,
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ shelters: data.features }));
    // console.log(this.state.shelters);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { open } = this.state;
    this.setState({
      open: true,
    });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, match } = this.props;
    const { shelters, open } = this.state;
    // console.log(this.props);
    // console.log(shelters);

    return (
      <div>
        <div className="page">
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Grid container justify="center" direction="column">
                <Typography variant="h6" className={classes.formPageTitle}>
                Tap REQUEST BED to request a bed now.
                </Typography>
                <br />
                <div>
                  {shelters.filter(shelter => shelter.attributes.OBJECTID == match.params.id).map(shelter => (
                    <div key={shelter.attributes.OBJECTID} className={classes.selectedShelter}>
                      <Grid container justify="center" spacing={16}>
                        <Button variant="contained" color="primary" className="book-bed-submit-button" onClick={this.onSubmit}>
                          Request Bed
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
                            message="Thank you! Your request has been submitted. It can take up to 1 to 2 hours to confirm your request."
                          />
                        </Snackbar>
                      </Grid>
                      <div className={classes.shelterName}>
                        <Typography variant="h4">{shelter.attributes.NAME}</Typography>
                      </div>
                      <Grid container spacing={16}>
                        <Grid item xs={6}>
                          <div className={classes.moreShelterInfo}>
                            <Typography variant="h6">Location</Typography>
                            <Typography variant="subtitle1">{shelter.attributes.ADDRESS}</Typography>
                            <Typography variant="subtitle1">{shelter.attributes.CITY}, MN {shelter.attributes.ZIP}</Typography>
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className={classes.moreShelterInfo}>
                            <Typography variant="h6">Phone</Typography>
                            <Typography variant="subtitle1">{shelter.attributes.PHONE}</Typography>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div className={classes.moreShelterInfo}>
                            <Typography variant="h6">More info</Typography>
                            <Typography variant="subtitle1"><a href={shelter.attributes.WEB_SITE} target="_blank" rel="noopener noreferrer">{shelter.attributes.WEB_SITE}</a></Typography>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div className={classes.moreShelterInfo}>
                            <Typography variant="h6">Type</Typography>
                            <Typography variant="subtitle1">{shelter.attributes.SERV_TYPE} - {shelter.attributes.SUB_SERV_TYPE}</Typography>
                          </div>
                        </Grid>
                      </Grid>
                      <div className={classes.moreShelterInfo}>
                        <Typography variant="h6">Notes</Typography>
                        <Typography variant="subtitle1">{shelter.attributes.NOTES}</Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              {shelters.filter(shelter => shelter.attributes.OBJECTID == match.params.id).map(shelter => (
                <SimpleMap lng={shelter.geometry.x} lat={shelter.geometry.y} text={shelter.attributes.NAME} />
              ))}
              <div className={classes.readOnlyInfo}>
                <Typography variant="h6">
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
              </div>
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
  match: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(IntakeForm);
