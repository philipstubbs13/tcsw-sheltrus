import React from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
		backgroundColor: '#007fff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 30,
		textAlign: 'center',
		color: '#fff',
  },
  pos: {
    marginBottom: 12,
  },
	copyright: {
		color: '#fff',
		textAlign: 'center',
	},
};

function Footer(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
		<footer id="main-footer">
			<Card className={classes.card} color="inherit" direction="column" justify="center" >
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
						Sheltr
					</Typography>
					<Typography className={classes.copyright} color="textSecondary">
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

export default withStyles(styles)(Footer);