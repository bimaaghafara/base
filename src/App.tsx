import React from 'react';

// styles
import './App.scss';

// pages
import Login from  './modules/auth/login';
import NotFound from './modules/auth/not-found/not-found';

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
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
