import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Signature from './Signature.jsx';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(2, 2),
  },
  body: { whiteSpace: 'preline' },
}));

const Body = ({ subtitle, title, body }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h5" paragraph>{title}</Typography>
      <Typography variant="body1" className={classes.body} style={{ whiteSpace: 'pre-line' }}>
        {body}
      </Typography>
      <Signature />
    </div>
  );
};

Body.displayName = 'Body';

export default Body;
