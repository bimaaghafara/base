import React from 'react';

// styles
import './App.scss';

// pages
import Login from  './modules/auth/login';
import NotFound from './modules/auth/not-found';
import ChangePassword from './modules/auth/change-password';

// 3rd lib
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>Home</div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />ChangePassword
        <Route exact path="/login" component={Login} />
        <Route exact path="/change-password" component={ChangePassword} />

        {/* not found must be placed in last */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
