import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import AppWrapper from './AppWrapper.jsx';
import Home from './Home.jsx';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffeb3b' },
    secondary: { main: '#01bcd5' },
    // type: 'dark',
  },
  typography: {
    fontFamily: '"Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link async="true" href="https://fonts.googleapis.com/css?family=Catamaran:300,400,500&amp;display=swap" rel="stylesheet"/>
    </Helmet>
    <AppWrapper>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </AppWrapper>
  </ThemeProvider>
);

App.displayName = 'App';

export default App;
