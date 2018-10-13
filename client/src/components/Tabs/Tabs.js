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

const styles = {
  root: {
    width: '100%',
    paddingTop: 10,
  },
};

class Tabs extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} showLabels justify="center">
        <BottomNavigationAction label="My profile" value="recents" icon={<i className="fas fa-user-circle fa-2x" />} component={Link} to="/" />
        <BottomNavigationAction label="Find a shelter" value="favorites" icon={<i className="fas fa-bed fa-2x" />} component={Link} to="/shelters" />
        <BottomNavigationAction label="Check in" value="nearby" icon={<i className="fas fa-user-check fa-2x" />} component={Link} to="/ticket" />
        <BottomNavigationAction label="Map" value="nearby" icon={<i className="fas fa-map-marker-alt fa-2x" />} component={Link} to="/map" />
      </BottomNavigation>
    );
  }
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(Tabs);
