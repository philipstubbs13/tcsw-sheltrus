// Global import of React
import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// Importing React Router to add page routes.
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Import pages
import Profile from './containers/Profile';
import Shelters from './containers/Shelters';
import Map from './containers/Map';
import Help from './containers/Help';
import Login from './containers/Login';
import IntakeForm from './containers/IntakeForm';
import Ticket from './containers/Ticket';
import Grid from '@material-ui/core/Grid';
// import Footer component
import Footer from './components/Footer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import SimpleNavBar
import SimpleNavBar from './components/SimpleNavBar';
// import CSS
import './containers/Login/Login.css';
// import Firebase
import { auth, provider } from './firebase-config';
import NavBar from './components/NavBar';

// Import top level css file for app
import './App.css';

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
	loginGoogleInfo: {
		textAlign: 'center',
		fontSize: 20,
		marginTop: 20,
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
			username: '',
			password: '',
		}
	
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		// When the user signs in, this checks the Firebase database to see
		// if they were already previously authenticated.
		// If they were, we set their user details back into the state.
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			}
		});
	}

	// Handles authentication with firebase.
	// Here we call the signInWithPopup method from the auth module,
	// and pass in our provider (remember this refers to the Google Auth Provider).
	// Now, when you click the 'login' button, it will trigger a popup
	// that gives us the option to sign in with a Google account
	// signInWithPopup has a promise API that allows us to call
	// .then on it and pass in a callback.
	// This callback will be provided with a result object that contains,
	// among other things, a property called .user that has all the
	// information about the user who has just successfully signed in
	// including their name and user photo. We then store this inside of the state using setState.
	login() {
		auth.signInWithPopup(provider)
			.then((result) => {
				// console.log(result);
				const user = result.user;
				this.setState({
					user,
				});
			});
	}

	// We call the signOut method on auth,
	// and then using the Promise API
	// we remove the user from our application's state.
	// With this.state.user now equal to null,
	// the user will see the Log In button instead of the Log Out button.
	logout() {
		auth.signOut()
			.then(() => {
				this.setState({
					user: null,
				});
			});
	}

  render() {
		// ES6 destructuring
		const { user, username, password } = this.state;
		const { classes } = this.props;
		console.log(user);

    return (
      <div className="App">
        <BrowserRouter>
          <div className="app-pages">
					{user
						? (
							<div>
								<NavBar handleLogout={this.logout}/>
								<Switch>
									<Route exact path="/" component={Profile} />
									<Route exact path="/help" component={Help} />
									<Route exact path="/shelters" component={Shelters} />
									<Route exact path="/form" component={IntakeForm} />
									<Route exact path="/ticket" component={Ticket} />
									<Route exact path="/map" component={Map} />
								</Switch>
							</div>
							)
						: (
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
											<Button variant="contained" color="primary" className="login-button" fullWidth component={Link} to="/profile">
												Login
											</Button>
											<div className={classes.loginGoogleInfo}>
											<p>OR Login with Google to use the app.</p>
											<button type="submit" className="loginBtn loginBtn--google" onClick={this.login}>
												Login with Google
                      </button>
										</div>
										</Grid>
									</Grid>		
								</div>
							</div>
						)}
					<Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default withStyles(styles)(App);
