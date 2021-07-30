import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginContainer from './components/auth/LoginContainer';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { checkAuth } from './Modules/auth'
function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
      <Switch>
        <Route exact path="/auth/login">
          <LoginContainer />
        </Route>
        {/* <Route exact path="/server/:uuid">
          {checkAuth() ? <ServerContainer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/new/server/:uuid">
          {checkAuth() ? <ServerNewContainer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/server/:uuid/files">
          {checkAuth() ? <FilesContainer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/server/:uuid/files/edit">
          {checkAuth() ? <FileEditorContainer /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login" exact component={() => <AuthContainer />} />
        <Route exact path="/sidebar" exact component={() => <SideBar />} />


        <Route path="*" component={NotFound} /> */}

      </Switch>
      </ThemeProvider>
      
    </Router>
  );
}

export default App;
