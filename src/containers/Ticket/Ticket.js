import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import profilePhoto from '../Profile/profile.png';
import qrCode from '../Ticket/qrcode.png';
import Typography from '@material-ui/core/Typography';
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
    marginTop: 30,
    alignSelf: 'flex-center',

  },
  selectImageButton: {
    marginBottom: 30,
  },
};

class Ticket extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div className="page">
        <Grid container direction="column" justify="center" spacing={16} className="page-container">
					<Grid item direction="column" justify="center" xs={12} sm={12} md={6} className={classes.placeToStay}>
					  <Typography variant="headline" gutterBottom className={classes.loginPageTitle}>
              If you have a smart phone, scan to check into shelter
            </Typography>
						<img
              src={qrCode}
              alt="qr code"
              className={classes.qrCode}
            />
            <br />
					</Grid>
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
						<img
              src={profilePhoto}
              alt="profile pic"
              className={classes.profilePic}
            />
          </Grid>
        </Grid>		
			</div>
		)
	}
}

export default withStyles(styles)(Ticket);