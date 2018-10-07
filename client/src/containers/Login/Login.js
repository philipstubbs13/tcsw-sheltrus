import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import SimpleNavBar
import SimpleNavBar from '../../components/SimpleNavBar';
// import CSS
import './Login.css';

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
    marginTop: 15,

  },
  loginPageTitle: {
    textAlign: 'center',
  },
};

class Login extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div>
				<SimpleNavBar />
				<div className="page">
					<Grid container direction="column" justify="center" spacing={16} className="page-container">
						<Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
							<Typography variant="display3" gutterBottom className={classes.loginPageTitle}>
								Sheltr
							</Typography>
							<br />
							<TextField
								id="outlined-full-width"
								className={classes.textField}
								label="Username"
								style={{ margin: 8 }}
								fullWidth
								margin="normal"
								value=""
								variant="outlined"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="outlined-full-width"
								className={classes.textField}
								label="Password"
								style={{ margin: 8 }}
								fullWidth
								type="password"
								margin="normal"
								value=""
								variant="outlined"
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
							<Button variant="contained" color="primary" className="login-button" fullWidth>
								Login
							</Button>
						</Grid>
					</Grid>		
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Login);