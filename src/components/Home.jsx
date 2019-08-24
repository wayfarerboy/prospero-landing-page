import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header.jsx';
import Body from './Body.jsx';
import Form from './Form.jsx';
import strings from '../helpers/lang.js';

const useStyles = makeStyles(theme => ({
  content: {
    margin: theme.spacing(4, 0, 10),
  },
}));

const Home = ({ match: { params } }) => {
  const { form, body, header } = strings[params.formId];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header {...header} />
      <Grid container justify="center" className={classes.content}>
        <Grid item xs={12} sm={8} md={4} lg={3} xl={3}>
          <Body {...body} formId={params.formId} />
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={3} xl={3}>
          <Form {...form} formId={params.formId} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Home.displayName = 'Home';

export default Home;
