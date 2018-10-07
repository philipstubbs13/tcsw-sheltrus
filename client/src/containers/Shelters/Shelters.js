import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// Import navbar component
import NavBar from '../../components/NavBar';
import Tabs from '../../components/Tabs';

const styles = {
	btnText: {
		marginLeft: 10,
	},
  placeToStay: {
    marginTop: 10,
    alignSelf: 'flex-center',

  },
  selectImageButton: {
    marginBottom: 30,
  },
  SheltersPageTitle: {
    textAlign: 'center',
  },
};

class Shelters extends Component {
  render() {
    const { classes } = this.props;

		return (
			<div>
				<Tabs />
				<div className="page">
					<Grid container justify="center" spacing={16} className="{classes.profileContainer}">
						<Grid item justify="center" xs={12} sm={12} md={6} className={classes.placeToStay}>
							<Typography variant="headline" gutterBottom className={classes.SheltersPageTitle}>
								Find a shelter
							</Typography>
							<TextField
								id="outlined-full-width"
								label="Search"
								style={{ marginTop: 10 }}
								placeholder="Search for a place to stay..."
								fullWidth
								margin="normal"
								variant="outlined"
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<Typography component="p">
								To book a bed, click <i className="fas fa-bed"></i> to reserve a bed at a participating shelter.
								Each shelter has different booking times. Outside the times you can book a bed, the listing will say it is offline.
								Please come back later to book a bed.
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
							<List>
								<ListItem>
									<ListItemText primary="People Serving People" secondary="614 3rd St S, Minneapolis, MN 55415" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="St. Anne's Place" secondary="2634 Russell Ave N, Minneapolis, MN 55411" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="Simpson Emergency Shelter" secondary="2740 1st Ave S, Minneapolis, MN 55408" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="Mary's Place" secondary="401 7th St N, Minneapolis, MN 55405" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="St. Stephen's Emergency Shelter" secondary="2211 Clinton Ave S, Minneapolis, MN 55404" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="Salvation Army - Harbor Light" secondary="1010 Currie Ave N, Minneapolis, MN 55403" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="Our Savior's Shelter" secondary="2219 Chicago Ave S, Minneapolis, MN 55404" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
								<ListItem>
									<ListItemText primary="Avenues for Homeless Youth" secondary="7210 76th Ave N, Brooklyn Park, MN 55428" />
										<ListItemSecondaryAction>
											<IconButton aria-label="Book a bed" component={Link} to ="/form">
												<i className="fas fa-bed"></i>
											</IconButton>
										</ListItemSecondaryAction>
								</ListItem>
							</List>

						</Grid>
					</Grid>		
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Shelters);