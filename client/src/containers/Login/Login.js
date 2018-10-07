import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
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
    marginTop: 5,

  },
  loginPageTitle: {
    textAlign: 'center',
  },
	loginPageInfo: {
		textAlign: 'center',
		fontSize: 20,
	},
};

class Login extends Component {
	onChange = e => this.setState({ [e.target.name]: e.target.value });

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}

  render() {
    const { classes } = this.props;
		const { username, password } = this.state;

		return (
			<div>
				<SimpleNavBar />
				<div className="page">
					<Grid container direction="column" justify="center" spacing={16} className="page-container">
						<Grid item xs={12} sm={12} md={12} className={classes.placeToStay}>
							<Typography variant="display3" gutterBottom className={classes.loginPageTitle}>
								Sheltr
							</Typography>
							<Typography component="h4" className={classes.loginPageInfo}>
							Find or check in at a nearby homeless shelter.
							</Typography>
							<Typography component="h4" className={classes.loginPageInfo}>
							Enter your username and password to LOGIN.
							</Typography>
							<br />
							<TextField
								id="login-username"
								className={classes.textField}
								label="Username"
								style={{ margin: 8 }}
								fullWidth
								margin="normal"
								name="username"
								value={username}
								variant="outlined"
								onChange={this.onChange}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="login-password"
								className={classes.textField}
								label="Password"
								style={{ margin: 8 }}
								fullWidth
								name="password"
								type="password"
								margin="normal"
								onChange={this.onChange}
								value={password}
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