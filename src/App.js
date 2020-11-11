import React, { useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Join from './components/Register/index';
import NoMatch from './components/noMatch';
import { DASHBOARD, LOGIN, REGISTER } from './routes/routes';
import ProtectedRoute from './utils/ProtectedRoute';



function App() {

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify({username: "michael", password: "classwork"}))
  }, []);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path={LOGIN} component={Form} />
        <Route path={DASHBOARD} component={Dashboard} />
        <Route path={REGISTER} component={Join} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
