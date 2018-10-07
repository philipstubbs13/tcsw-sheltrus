import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import profilePhoto from '../Profile/profile.png';
import qrCode from '../Ticket/qrcode.png';
import Typography from '@material-ui/core/Typography';
// Import navbar component
import NavBar from '../../components/NavBar';
import Tabs from '../../components/Tabs';
// import App css file
import '../../App.css';

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
	qrCode: {
		maxWidth: '100%',
		width: '200px',
		height: '200px',
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 2,
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
    marginTop: 10,
    alignSelf: 'flex-center',

  },
	checkInPageTitle: {
		textAlign: 'center',
		marginTop: 30,
	},
};

class Ticket extends Component {
  render() {
    const { classes, photo } = this.props;

		return (
			<div>
				<Tabs />
				<div className="page">
					<Grid container direction="column" justify="center" spacing={16} className="page-container">
						<Typography variant="headline" gutterBottom className={classes.checkInPageTitle}>
								Have a smart phone? SCAN to check into shelter
						</Typography>
						<Typography variant="headline" gutterBottom className={classes.checkInPageTitle}>
								No smart phone? CALL (952) 960-5416
						</Typography>
						<Grid item  xs={12} sm={12} md={6} className={classes.placeToStay}>
							<img
								src={qrCode}
								alt="qr code"
								className={classes.qrCode}
							/>
							<br />
						</Grid>
						<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
							<img
								src={photo}
								alt="profile pic"
								className={classes.profilePic}
							/>
						</Grid>
					</Grid>		
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Ticket);