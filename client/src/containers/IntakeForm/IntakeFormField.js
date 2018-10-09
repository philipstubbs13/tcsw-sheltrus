// Global Import of React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// CSS in JS
const styles = ({
  textField: {
    maxWidth: '100%',
  },
});

class IntakeFormField extends Component {
  render() {
    const {
      classes,
      label,
      id,
      value,
    } = this.props;
    return (
      <TextField
        id={id}
        className={classes.textField}
        label={label}
        fullWidth
        margin="normal"
        value={value}
        variant="outlined"
        disabled
        InputLabelProps={{
          shrink: true,
          readOnly: true,
        }}
      />
    );
  }
}

// Check prop types
IntakeFormField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(IntakeFormField);
