import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import AppDrawer from './components/AppDrawer';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
   
      <BrowserRouter>
       <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppDrawer></AppDrawer>
    </ThemeProvider>

      <Switch>
        <Route path="/game">
        <h1>Hey</h1>
        </Route>
      </Switch>
      </BrowserRouter>

  );
}