import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import profilePhoto from './profile.png';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import css
import '../../App.css';
import './Profile.css';
// Import navbar component
import NavBar from '../../components/NavBar';
import Tabs from '../../components/Tabs';

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
    marginTop: 10,
  },
};

class Profile extends Component {
  render() {
    const { classes, name, photo } = this.props;
		console.log(this.props);

		return (
			<div>
				<Tabs />
				<div className="page">
					<Grid container direction="column" justify="center" spacing={16} className="page-container">
						<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
							<Typography variant="display3">{name}</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
							<img
								src={photo}
								alt="profile pic"
								className={classes.profilePic}
							/>
							<br />
							<Button fullWidth variant="contained" color="primary" className="select-image-button">
								Select image
							</Button>
							<br />
							<Button variant="contained" color="primary" className="need-place-button" fullWidth component={Link} to="/shelters">
								I need a place to stay
							</Button>
						</Grid>
					</Grid>		
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Profile);
