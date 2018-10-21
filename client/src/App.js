// Global import of React
import React, { Component } from 'react';
// Importing React Router to add page routes.
// Import third-party routing library (react-router-dom)
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// Import Material UI components and styling.
import { withStyles } from '@material-ui/core/styles';
// Import Lodash
import pick from 'lodash/pick';
// Import app pages
import firebase from 'firebase';
import Profile from './containers/Profile';
import Shelters from './containers/Shelters';
import Map from './containers/Map';
import Help from './containers/Help';
import IntakeForm from './containers/IntakeForm';
import Ticket from './containers/Ticket';
import Login from './containers/Login';
import Signup from './containers/Signup';
import About from './containers/About';
import ReportError from './containers/ReportError';
import ForgotPassword from './containers/ForgotPassword';
import DeleteAccount from './containers/DeleteAccount';
// import Footer component
import Footer from './components/Footer';
// Import NavBar component (when user is authenticated)
import NavBar from './components/NavBar';
// Import Tabs component (when user is authenticated)
import Tabs from './components/Tabs';
// import CSS for Login page that user will see if they are not authenticated.
import './containers/Login/Login.css';
// import Firebase configuration.
import { auth, provider, database } from './firebase-config';
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
};

class App extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null,
      username: '',
      userEmail: '',
      password: '',
      users: {},
      signUpError: '',
      signUpErrorDetails: '',
      loginError: '',
      loginErrorDetails: '',
    };

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
        this.usersRef = database.ref('/users');
        this.userRef = this.usersRef.child(user.uid);

        this.userRef.once('value').then((snapshot) => {
          if (snapshot.val()) return;
          const userData = pick(user, ['displayName', 'photoURL', 'email', 'uid']);
          this.userRef.set(userData);
        });

        this.usersRef.once('value', (snapshot) => {
          this.setState({ users: snapshot.val() });
        });
        // console.log(user);
      }
      this.setState({
        signUpError: '',
        signUpErrorDetails: '',
        loginError: '',
        loginErrorDetails: '',
        userEmail: '',
        password: '',
      });
    });
  }

    onSubmit = (e) => {
      e.preventDefault();

      const {
        userEmail,
        password,
        signUpError,
        SignUpErrorDetails,
        username,
        user,
      } = this.state;

      if (username === '') {
        this.setState({
          signUpError: 'Display name is required',
        });
        return;
      }

      if (userEmail === '') {
        this.setState({
          signUpError: 'Email address is required.',
        });
        return;
      }

      if (password === '') {
        this.setState({
          signUpError: 'Password is required.',
        });
        return;
      }

      // Register with firebase.
      // Register a new user
      firebase.auth().createUserWithEmailAndPassword(userEmail, password).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === 'auth/invalid-email') {
          this.setState({
            signUpError: 'The email address entered is not valid.',
            signUpErrorDetails: 'Use the following format: someone@example.com.',
          });
        } else {
          this.setState({
            signUpError: errorMessage,
            signUpErrorDetails: '',
          });
        }
      });
    };

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      signIn = () => {
        const {
          userEmail,
          password,
          loginError,
          loginErrorDetails,
        } = this.state;

        if (userEmail === '') {
          this.setState({
            loginError: 'Email address is required.',
            loginErrorDetails: '',
          });
          return;
        }

        if (password === '') {
          this.setState({
            loginError: 'Password is required.',
            loginErrorDetails: '',
          });
          return;
        }
        // Sign in existing user
        firebase.auth().signInWithEmailAndPassword(userEmail, password)
          .catch((err) => {
            // Handle errors
            // console.log(err);
            if (err.code === 'auth/invalid-email') {
              this.setState({
                loginError: 'The email address entered is not valid.',
                loginErrorDetails: 'Use the following format: someone@example.com.',
              });
              return;
            }

            if (err.code === 'auth/user-not-found') {
              this.setState({
                loginError: 'There is no user record corresponding to this email.',
                loginErrorDetails: 'The user might have been deleted or does not exist.',
              });
              return;
            }

            if (err.code === 'auth/wrong-password') {
              this.setState({
                loginError: 'Password is not correct.',
                loginErrorDetails: 'Verify that you entered your password correctly.',
              });
              return;
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
        const {
          user,
          username,
          userEmail,
          password,
          signUpError,
          signUpErrorDetails,
          loginError,
          loginErrorDetails,
        } = this.state;
        // const { classes } = this.props;
        // console.log(user);

        return (
          <div className="App">
            <Router>
              <div className="app-pages">
                {/* If the user is authenticated, make all routes available to the user. */}
                {user
                  ? (
                    <div>
                      <NavBar handleLogout={this.logout} />
                      <Tabs />
                      <Switch>
                        <Route
                          exact
                          path="/(|signup)/"
                          render={props => (
                            <Profile
                              {...props}
                              name={user.displayName}
                              email={user.email}
                              photo={user.photoURL}
                              uid={user.uid}
                            />
                          )}
                        />
                        <Route exact path="/help" component={Help} />
                        <Route exact path="/shelters" component={Shelters} />
                        <Route
                          exact
                          path="/error"
                          render={props => (
                            <ReportError
                              {...props}
                              name={user.displayName}
                              email={user.email}
                              photo={user.photoURL}
                              uid={user.uid}
                            />
                          )}
                        />
                        <Route exact path="/form/:id" component={IntakeForm} />
                        <Route
                          exact
                          path="/ticket"
                          render={props => (
                            <Ticket
                              {...props}
                              name={user.displayName}
                              uid={user.uid}
                            />
                          )}
                        />
                        <Route exact path="/map" component={Map} />
                        <Route exact path="/about" component={About} />
                        <Route
                          exact
                          path="/deleteaccount"
                          render={props => (
                            <DeleteAccount
                              {...props}
                              name={user.displayName}
                              email={user.email}
                              uid={user.uid}
                            />
                          )}
                        />
                      </Switch>
                    </div>
                  )
                  : (
                    // If the user is not authenticated,
                    // only show the login page and block all other routes.
                    <div>
                      <Switch>
                        <Route
                          exact
                          path="/"
                          render={props => (
                            <Login
                              {...props}
                              handleLogin={this.login}
                              handleSignIn={this.signIn}
                              username={username}
                              userEmail={userEmail}
                              onChange={this.handleChange}
                              password={password}
                              loginError={loginError}
                              loginErrorDetails={loginErrorDetails}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/signup"
                          render={props => (
                            <Signup
                              {...props}
                              handleLogin={this.login}
                              username={username}
                              userEmail={userEmail}
                              password={password}
                              onChange={this.handleChange}
                              onSubmit={this.onSubmit}
                              signUpError={signUpError}
                              signUpErrorDetails={signUpErrorDetails}
                            />
                          )}
                        />
                        <Route exact path="/forgotpassword" component={ForgotPassword} />
                      </Switch>
                    </div>
                  )}
                <Footer />
              </div>
            </Router>
          </div>
        );
      }
}

// Export the App component so that it can picked up and rendered from the index.js file.
export default withStyles(styles)(App);
