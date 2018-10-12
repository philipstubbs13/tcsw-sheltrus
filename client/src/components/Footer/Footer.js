// Global import of React
import React from 'react';
// import prop types
import PropTypes from 'prop-types';
// import Material UI components and styling.
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: 'var(--main-bg-color)',
  },
  title: {
    marginBottom: 16,
    fontSize: 30,
    textAlign: 'center',
    color: 'var(--app-light-color)',
  },
  copyright: {
    color: 'var(--app-light-color)',
    textAlign: 'center',
  },
};

function Footer(props) {
  // ES6 destructuring
  const { classes } = props;

  return (
    <footer id="main-footer">
      <Card className={classes.card} color="inherit" direction="column" justify="center">
        <CardContent>
          <Typography variant="h6" className={classes.title} color="textSecondary">
            Sheltr
          </Typography>
          <Typography variant="h6" className={classes.copyright} color="textSecondary">
            Copyright &copy; 2018
          </Typography>
        </CardContent>
        <br />
        <CardActions>
          <a href="https://shelterus.co" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" size="large">Learn More</Button>
          </a>
        </CardActions>
      </Card>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export Footer component
export default withStyles(styles)(Footer);
