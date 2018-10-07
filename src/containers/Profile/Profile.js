import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import profilePhoto from './profile.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import css
import '../../App.css';
import './Profile.css';

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
  placeToStay: {
    marginTop: 30,
  },
};

class Profile extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
						<img
              src={profilePhoto}
              alt="profile pic"
              className={classes.profilePic}
            />
            <br />
            <Button fullWidth variant="contained" color="primary" className="select-image-button">
              Select image
            </Button>
						<br />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Name"
              fullWidth
              margin="normal"
              value="Josh Okogie"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
								readOnly: true,
              }}
							disabled
            />
					</Grid>
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
            <Button variant="contained" color="primary" className="need-place-button" fullWidth component={Link} to="/shelters">
              I need a place to stay
            </Button>
          </Grid>
        </Grid>		
			</div>
		)
	}
}

export default withStyles(styles)(Profile);
