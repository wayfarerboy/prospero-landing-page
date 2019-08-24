import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: 240,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    '& h2': {
      color: theme.palette.primary.contrastText,
      opacity: 0.87,
      marginBottom: theme.spacing(2),
    },
    '& h4': {
      color: theme.palette.primary.contrastText,
      opacity: 0.87,
    },
  },
}));

const Header = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center" className={classes.wrapper}>
      <Grid item>
        <Typography align="center" variant="h2">{title}</Typography>
        <Typography align="center" variant="h4">{subtitle}</Typography>
      </Grid>
    </Grid>
  );
};

Header.displayName = 'Header';

export default Header;
