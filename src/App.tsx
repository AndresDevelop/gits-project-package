import React from "react";
import { Route, Switch as Router } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { lightTheme } from "./theme/index";

import Home from "./pages/Home/Home";
import Git from "./pages/Git/Git";
import CreateGits from "./pages/CreateGits/CreateGits";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Header></Header>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-gits">
            <CreateGits />
          </Route>
          <Route exact path="/:id">
            <Git />
          </Route>
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
