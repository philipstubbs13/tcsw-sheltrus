import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import profilePhoto from './profile.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
	profileInfo: {
		marginTop: 30,
	},
	profilePic: {
		borderRadius: '50%',
		maxWidth: '100%',
		width: '200px',
		height: '200px',
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 3,
	},
	btnText: {
		marginLeft: 10,
	},
	textField: {
		marginTop: 40,
	},
  needPlaceButton: {
    padding: 20,
  },
  placeToStay: {
    marginTop: 30,

  },
  selectImageButton: {
    marginBottom: 30,
  },
};

class Profile extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div className="page">
        <Grid container spacing={16} className="page-container">
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
						<img
              src={profilePhoto}
              alt="profile pic"
              className={classes.profilePic}
            />
            <br />
            <Button variant="contained" color="primary" className={classes.selectImageButton}>
              Select image
            </Button>
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Name"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              value="John Smith"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
					</Grid>
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
            <Button variant="contained" color="primary" className={classes.needPlaceButton} fullWidth>
              I need a place to stay
            </Button>
          </Grid>
        </Grid>		
			</div>
		)
	}
}

export default withStyles(styles)(Profile);
