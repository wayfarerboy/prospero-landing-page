import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import AppWrapper from './AppWrapper.jsx';
import Home from './Home.jsx';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffeb3b' },
    secondary: { main: '#01bcd5' },
    type: 'dark',
  },
  typography: {
    fontFamily: '"Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <BrowserRouter>
        <Route path="/form/:formId" exact component={Home} />
      </BrowserRouter>
    </AppWrapper>
  </ThemeProvider>
);

App.displayName = 'App';

export default App;
