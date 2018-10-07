import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GoogleMapsContainer from './GoogleMapsContainer';

const styles = {
	btnText: {
		marginLeft: 10,
	},
  placeToStay: {
    marginTop: 10,
    alignSelf: 'flex-center',

  },
  selectImageButton: {
    marginBottom: 30,
  },
  MapPageTitle: {
    textAlign: 'center',
  },
};

class Map extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div className="page">
        <Grid container spacing={16} className={classes.mapContainer}>
					<Grid item justify="center" xs={12} sm={12} md={6} className={classes.placeToStay}>
					  <Typography variant="headline" gutterBottom className={classes.MapPageTitle}>
              Map
            </Typography>
            {/* <TextField
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
            /> */}
            <GoogleMapsContainer />
					</Grid>
        </Grid>		
			</div>
		)
	}
}

export default withStyles(styles)(Map);