// Global Import of React
import React from 'react';
// Import Link component from react-router-dom to link pages.
import { Link } from 'react-router-dom';
// Import PropTypes
import PropTypes from 'prop-types';
// Import Material UI components and styling.
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = {
  root: {
    width: '100%',
    paddingTop: 10,
  },
  list: {
    width: 250,
    fontSize: 20,
    marginTop: 40,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    padding: 20,
    textAlign: 'center',
  },
  menuItem: {
    marginTop: 20,
  },
};

class Tabs extends React.Component {
  state = {
    value: 'recents',
    right: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const { value, right } = this.state;

    return (
      <div>
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} showLabels justify="center">
          <BottomNavigationAction label="My profile" value="recents" icon={<i className="fas fa-user-circle fa-2x" />} component={Link} to="/" />
          <BottomNavigationAction label="Find a shelter" value="favorites" icon={<i className="fas fa-bed fa-2x" />} component={Link} to="/shelters" />
          <BottomNavigationAction label="Check in" value="nearby" icon={<i className="fas fa-user-check fa-2x" />} component={Link} to="/ticket" />
          <BottomNavigationAction label="More" value="nearby" icon={<i className="fas fa-bars fa-2x" />} onClick={this.toggleDrawer('right', true)} />
        </BottomNavigation>
        <SwipeableDrawer
          anchor="right"
          open={right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
          className={classes.drawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <div className={classes.list}>
              <Typography variant="h5">
                Sheltr
              </Typography>
              <List>
                <ListItem className={classes.menuItem} component={Link} to="/help">
                  Help
                </ListItem>
                <ListItem className={classes.menuItem} component={Link} to="/about">
                  About
                </ListItem>
                <ListItem className={classes.menuItem} component={Link} to="/feedback">
                  Feedback
                </ListItem>
              </List>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(Tabs);
