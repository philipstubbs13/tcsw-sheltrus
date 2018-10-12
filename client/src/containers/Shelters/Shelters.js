// Global Import of React
import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI Components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Import Tabs component
import Tabs from '../../components/Tabs';

// CSS in JS
const styles = {
  placeToStay: {
    marginTop: 10,
    alignSelf: 'flex-center',
  },
  selectImageButton: {
    marginBottom: 30,
  },
  SheltersPageTitle: {
    textAlign: 'center',
  },
};

const API = 'https://gis.hennepin.us/arcgis/rest/services/HennepinData/PLACES/MapServer/8/query?where=1%3D1&outFields=*&outSR=4326&f=json';

class Shelters extends Component {
  constructor() {
    super();
    this.state = {
      shelters: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ shelters: data.features }));
    // console.log(this.state.shelters);
  }

  render() {
    const { classes } = this.props;
    const { shelters } = this.state;
    return (
      <div>
        <Tabs />
        <div className="page">
          <Grid container justify="center" spacing={16} className="{classes.profileContainer}">
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <Typography variant="h5" gutterBottom className={classes.SheltersPageTitle}>
                Find a shelter
              </Typography>
              <TextField
                id="outlined-full-width"
                label="Search"
                style={{ marginTop: 10 }}
                placeholder="Search for a place to stay..."
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Typography variant="h6">
                Tap <i className="fas fa-bed" /> to
                reserve a bed at a participating shelter.
                Each shelter has different booking times.
                Outside the times you can book a bed,
                the listing will say it is offline.
                Please come back later to book a bed.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              <List>
                {shelters.map(shelter => (
                  <ListItem key={shelter.attributes.OBJECTID}>
                    <ListItemText
                      primary={shelter.attributes.NAME}
                      secondary={shelter.attributes.ADDRESS}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Book a bed" component={Link} to="/form">
                        <i className="fas fa-bed" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Shelters.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(Shelters);
