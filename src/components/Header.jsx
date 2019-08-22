import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: 120,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Header = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center" className={classes.wrapper}>
      <Grid item>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h4">{subtitle}</Typography>
      </Grid>
    </Grid>
  );
};

Header.displayName = 'Header';

export default Header;
