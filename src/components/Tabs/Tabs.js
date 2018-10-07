import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} showLabels="true" fullWidth justify="center">
        <BottomNavigationAction label="My profile" value="recents" icon={<i className="fas fa-user-circle fa-2x"></i>} component={Link} to=
        "/profile"/>
        <BottomNavigationAction label="Book a bed" value="favorites" icon={<i className="fas fa-bed fa-2x"></i>} component={Link} to="/shelters"/>
        <BottomNavigationAction label="Check in" value="nearby" icon={<i className="fas fa-map-marker-alt fa-2x"></i>} component={Link} to="/ticket" />
        <BottomNavigationAction label="Resources" value="nearby" icon={<i className="fas fa-bars fa-2x"></i>} component={Link} to="/" />
      </BottomNavigation>
    );
  }
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabs);