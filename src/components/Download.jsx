import React from 'react';

import Header from './Header.jsx';
import Body from './Body.jsx';
import Form from './Form.jsx';

const Download = ({ header, body, form }) => (
  <AppWrapper>
    <Header {...header} />
    <Grid container spacing={2}>
      <Grid item>
        <Body {...body} />
      </Grid>
      <Grid item>
        <Form {...form} />
      </Grid>
    </Grid>
  </AppWrapper>
);

