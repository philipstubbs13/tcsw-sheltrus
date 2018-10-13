// Global import of React.
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import material ui styling and components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

class Shelter extends Component {
  render() {
    const { id, name, address } = this.props;
    return (
      <ListItem key={id}>
        <ListItemText
          primary={name}
          secondary={address}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Find a shelter" component={Link} to={`/form/${id}`}>
            <i className="fas fa-bed" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

// Check prop types
Shelter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

// export component.
export default Shelter;
