// Global Import of React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import css
import './Help.css';

const styles = {
  placeToStay: {
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
  },
  helpContent: {
    fontSize: 18,
  },
  helpTopic: {
    marginTop: 30,
  },
};

const helpTopics = [
  {
    id: 0,
    title: 'My profile',
    content: `The My profile page is the first page that 
    appears when you log into the app. This page is 
    where you can find and include basic information
    about yourself, such as your name and a photo.
    This page helps shelters identify you when checking you in.`,
    icon: 'fas fa-user-circle fa-2x',
  },
  {
    id: 1,
    title: 'Shelters',
    content: "The Shelters page includes information about shelters in Minneapolis, including the name and address of each shelter. Tap the bed icon next to the shelter's name to find more information about a shelter like phone number, type of shelter, and any additional notes specific to that shelter. From the Shelters page, you can view the shelters using LIST VIEW (default view) or MAP VIEW, which shows the exact location of each shelter on a Google Map of Minneapolis.",
    icon: 'fas fa-bed fa-2x',
  },
  {
    id: 2,
    title: 'Check in',
    content:"The Check in page allows you to quickly and easily check into different shelters without having to fill out forms required to stay at a particular shelter. If you have a smart phone, the shelter will scan the QR code on this page to check you into the shelter. If you don't have a smart phone, you will need to call the number on this page when you arrive at the shelter so that the shelter can check you in.",
    icon: 'fas fa-user-check fa-2x',
  },
  {
    id: 3,
    title: 'Report error',
    content: 'If you find an error or any incorrect information while using the app, please report it. To report an error, tap the menu icon at the top of the page and then tap Report error. The Report error page contains a form where you can include a description of the error so that our team can correct it in a future release of the app.',
    icon: 'fas fa-exclamation-triangle fa-2x',
  },

];

class Help extends Component {
  render() {
    const { classes } = this.props;
    // console.log(this.props);

    return (
      <div>
        <div className="page">
          <Grid container direction="column" justify="center" spacing={16} className="page-container">
            <Grid item xs={12} className={classes.placeToStay}>
              <Typography variant="h4">Help</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.placeToStay}>
              {helpTopics.map(topic => (
                <ExpansionPanel className={classes.helpTopic}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}><i className={topic.icon} />
                      {' '}{topic.title}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.helpContent}>
                      {topic.content}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
              ;
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// Check prop types
Help.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Export component
export default withStyles(styles)(Help);
