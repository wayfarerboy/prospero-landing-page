import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonBase from '@material-ui/core/ButtonBase';

import Logo from './Logo.jsx';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
    },
  },

  wrapper: {
    background: theme.palette.background.default,
    height: '100%',
    width: '100%',
    color: theme.palette.text.primary,
  },

  content: {
    paddingTop: 64,
  },

  button: {
    top: 6,
    position: 'relative',
    height: 50,
  },
  logo: {
    width: 'auto',
    height: '100%',
    '& > svg': {
      fill: 'inherit',
      width: 'auto',
      color: 'inherit',
      height: '100%',
    },
  },
}));

const AppWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar color="default">
        <Toolbar>
          <ButtonBase className={classes.button} href="https://prospero.digital">
            <Logo className={classes.logo} />
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

AppWrapper.displayName = 'AppWrapper';

export default AppWrapper;
