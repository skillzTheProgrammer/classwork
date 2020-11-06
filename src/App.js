import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Form from './components/form';
import NoMatch from './components/noMatch';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Form} />
        <ProtectedRoute path='/dashboard/:username' component={Dashboard} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
