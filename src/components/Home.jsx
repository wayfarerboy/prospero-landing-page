import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

import Thumbnail from './Thumbnail.jsx';
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
  const { form, body, header, success } = strings[params.formId];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet>
        <title>{`Prospero - ${header.title}`}</title>
      </Helmet>
      <Header {...(params.success ? { ...success.header, download: success.download } : header)} />
      <Grid
        container
        justify="center"
        wrap={params.success ? 'wrap-reverse' : 'wrap'}
        spacing={2}
        className={classes.content}
      >
        <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
          <Body {...(params.success ? success : body)} formId={params.formId} />
        </Grid>
        { (!params.success || !!success.download) && <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
          { !params.success && <Form {...form} formId={params.formId} /> }
          { !!params.success && <Thumbnail download={success.download} thumbnail={success.thumbnail} /> }
        </Grid> }
      </Grid>
    </React.Fragment>
  );
};

Home.displayName = 'Home';

export default Home;
