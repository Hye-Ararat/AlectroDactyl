import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { checkAuth } from './Modules/auth'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {checkAuth() ? <DashboardContainer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/server/:uuid">
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


        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  );
}

export default App;
