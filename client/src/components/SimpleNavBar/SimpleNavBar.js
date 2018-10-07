import React from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

function SimpleNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar">
        <Toolbar>
					<img src={Logo} alt="Sheltr app logo" id="app-logo"></img>
          <Typography variant="title" color="inherit" className={classes.grow} component={Link} to="/">
            Sheltr
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleNavBar);