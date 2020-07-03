import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Paper className={classes.root}>
      <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
         <Tab value="/game" style={{fontWeight: "bold", color: "white"}} label="Isolation Game" />
          <Tab style={{fontWeight: "bold", color: "white"}} label="Rules" />
          <Tab style={{fontWeight: "bold", color: "white"}} label="About" />
          
        </Tabs>
      </Paper>
    </ThemeProvider>

      <Switch>
        <Route path="/game">
        <h1>Hey</h1>
        </Route>
      </Switch>
      </BrowserRouter>

  );
}