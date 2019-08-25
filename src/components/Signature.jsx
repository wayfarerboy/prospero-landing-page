import React from 'react';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2, 0),
  },
  signature: {
    fontSize: '6.5rem',
  },
  avatar: {
    width: '80%',
    height: 'auto',
    maxWidth: 160,
    boxShadow: theme.shadows[6],
    margin: '0 auto',
  },
}));

const Signature = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.wrapper}>
      <Grid item>
        <SvgIcon viewBox="0 0 34.75 24.49" fontSize="inherit" className={classes.signature}>
          <path d="M17.54 0c-1.88.04-4.04.71-6.84 2.12a23.16 23.16 0 00-7.95 6.2C.87 10.6 0 12.14 0 13.2c0 .86.64 1.76 1.26 1.76.26 0 .19-.16-.21-.48-1.17-.95-.66-2.63 1.7-5.57a26.4 26.4 0 0110.92-7.85c4.83-1.7 9.18.02 8.3 3.28-.48 1.8-2.88 4.56-6.1 7.04-1.74 1.34-2.3 1.66-3.85 2.12-1.13.34-1.17.33-1.17-.22 0-.87.74-5.16 1.16-6.72.43-1.56.13-2.17-.31-.65a51.23 51.23 0 00-1.26 6.56l-.18 1.6-2.15.69c-2.73.86-4.67 1.7-4.67 2.02 0 .78 2.78.43 5.26-.66.78-.35 1.44-.63 1.45-.63.02 0 .05 1.48.07 3.29.04 3.74.27 5.7.67 5.7.17 0 .21-.24.12-.59-.1-.32-.25-2.38-.34-4.57l-.16-3.98 1.7-1.08c.94-.58 2.44-1.31 3.34-1.61l1.62-.55-.77 1.06c-1 1.39-1.25 2.65-.69 3.51.97 1.48 2.4 1.43 4.03-.15.53-.5.9-.7 1.02-.52.32.52 1.48.3 2.14-.41.35-.38.95-1.3 1.32-2.05.66-1.31.67-1.32.53-.4-.22 1.35.21 2.35 1 2.35.75 0 1.22-.5 2.12-2.25l.68-1.32.01 1.26c.01 1.08.09 1.25.55 1.25.33 0 .85-.44 1.36-1.17l.82-1.17.86.9c.88.94 1.12 1.01 2.25.65.56-.18.5-.22-.46-.24-.86-.02-1.21-.17-1.52-.64-.58-.88-.53-1.65.28-3.88.56-1.57.71-2.5.74-4.42.02-1.61-.08-2.54-.3-2.76-.18-.18-.4-.25-.5-.16-.49.5-1.2 4.1-1.33 6.8-.12 2.54-.25 3.23-.77 4.13-1.33 2.35-1.92 1.95-1.45-.99.33-2.02.34-2.34.07-2.34-.1 0-.49.85-.84 1.88-.75 2.2-1.95 4.2-2.51 4.2-.64 0-.76-1.16-.34-3.44.24-1.32.3-2.1.13-2.04-.15.05-.71 1.1-1.25 2.35-1.16 2.7-1.99 3.93-2.64 3.93-.78 0-.81-.64-.13-2 .72-1.41.85-2.76.28-2.76-.45 0-1.22 1.84-1.22 2.92 0 1.2-1.9 3.16-3.06 3.16-.99 0-1.7-.75-1.7-1.78 0-1.35 2.01-4.04 3.02-4.04.56 0 3.06-1.1 3.06-1.35 0-.65-2.37.03-3.46.99-.39.33-3.42 1.5-3.42 1.3 0-.04.66-.58 1.47-1.19 2.09-1.58 4.28-3.88 5.17-5.42 1.62-2.82.64-5.04-2.5-5.7A7.47 7.47 0 0017.54 0zm15.3 2.53c.58 0 .07 4.9-.7 6.68l-.37.86-.01-1.46c-.01-1.77.75-6.08 1.08-6.08zm-11.56 7.74c.06.01.02.06-.11.15-.65.4-1.77.68-1.46.36a2.6 2.6 0 011.06-.44c.27-.06.44-.09.5-.07zm.36 1.8c.03.02.05.15.05.4 0 .28-.12.69-.27.9-.2.3-.22.19-.1-.4.14-.6.25-.91.32-.9zm-9.42 1.61c.05 0 .09.01.11.03.05.05-.26.3-.7.55-.45.27-.78.35-.78.18 0-.24 1-.76 1.37-.76zm-2.14.75c.13 0 .24.13.24.28 0 .53-3.48 1.93-5.01 2.03-1.4.1-1.44.08-.81-.28.7-.4 5.17-2.03 5.58-2.03z" fill="currentColor" />
        </SvgIcon>
        <Typography variant="body1">Dr Paul Sutton</Typography>
        <Typography variant="body2">
          Founder and Artistic Director<br />
          C&amp;T and Prospero
        </Typography>
      </Grid>
      <Grid item xs>
        <Avatar src="/avatar.jpg" alt="Paul Sutton photo" className={classes.avatar} />
      </Grid>
    </Grid>
  );
};

Signature.displayName = 'Signature';

export default Signature;
