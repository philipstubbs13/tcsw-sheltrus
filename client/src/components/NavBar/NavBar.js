import React from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../sheltr-b2.svg';

const styles = {
  root: {
    flexGrow: 1,
    fontSize: 30,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  const { handleLogout } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <img src={Logo} alt="Sheltr app logo" id="app-logo" />
          <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/">
            Sheltr
          </Typography>
          <Button color="inherit" onClick={handleLogout} component={Link} to="/">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Check prop types.
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

// export component
export default withStyles(styles)(NavBar);
