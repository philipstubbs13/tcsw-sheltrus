import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import css
import './IntakeForm.css';

const styles = theme => ({
	btnText: {
		marginLeft: 10,
	},
  textField: {
    maxWidth: '100%',
  },
});

class IntakeForm extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div className="page">
        <Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
            <Typography variant="headline">
              Click SUBMIT to book your bed now.
            </Typography>
            <br />
						<Button variant="contained" color="primary" className='book-bed-submit-button' fullWidth>
              Submit
            </Button>
					</Grid>
					<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
            <Typography component="p">
              Your information will be sent directly to the shelter.
            </Typography>
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Name"
              fullWidth
              margin="normal"
              value="Josh Okogie"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Gender"
              fullWidth
              margin="normal"
              value="Male"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Sexual Orientation"
              fullWidth
              margin="normal"
              value="Heterosexual"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Date of Birth"
              fullWidth
              margin="normal"
              value="09/01/1998"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Marital Status"
              fullWidth
              margin="normal"
              value="Single"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Have Kids?"
              fullWidth
              margin="normal"
              value="No"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Have a pet?"
              fullWidth
              margin="normal"
              value="Dog"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Have health insurance?"
              fullWidth
              margin="normal"
              value="Yes"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-full-width"
              className={classes.textField}
              label="Social security"
              fullWidth
              margin="normal"
              value="xxx-xxx-3333"
              variant="outlined"
              disabled
              InputLabelProps={{
                shrink: true,
                readOnly: true,
              }}
            />


          </Grid>
        </Grid>		
			</div>
		)
	}
}

export default withStyles(styles)(IntakeForm);