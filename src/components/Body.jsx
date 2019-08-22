import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  body: {
    whiteSpace: 'preline',
  },
}));

const Body = ({ title, body }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" className={classes.body}>
        {subtitle}
      </Typography>
    </React.Fragment>
  );
};

Header.displayName = 'Body';

export default Body;
