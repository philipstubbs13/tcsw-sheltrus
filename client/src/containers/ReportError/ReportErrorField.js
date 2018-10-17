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
    marginTop: 40,
  },
});

class ReportErrorField extends Component {
  render() {
    const {
      classes,
      id,
      name,
      value,
      label,
      type,
    } = this.props;
    return (
      <TextField
        id={id}
        name={name}
        value={value}
        type={type}
        className={classes.textField}
        label={label}
        fullWidth
        margin="normal"
        variant="outlined"
        disabled
        readOnly
        InputLabelProps={{
          shrink: true,
          readOnly: true,
        }}
      />
    );
  }
}

// Check prop types
ReportErrorField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// Export component
export default withStyles(styles)(ReportErrorField);
