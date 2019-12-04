import React from 'react';

// styles
import './App.scss';

// pages
import Home from './modules/common/home/home';
import NotFound from './modules/common/not-found';
import Login from  './modules/auth/login';
import ChangePassword from './modules/auth/change-password';
import CreateAccount from './modules/auth/create-account';
import VerifyEmail from './modules/auth/verify-email';

// 3rd lib
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/verify-email" component={VerifyEmail} />

        {/* not found must be placed in last */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
