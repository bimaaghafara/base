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
import Classifieds from './modules/others/classifieds/classifieds';
import Donations from './modules/others/donations/donations';
import Magazine from './modules/others/magazine/magazine';
import Umrah from './modules/others/umrah/umrah';
import Scholarships from './modules/others/scholarships/scholarships';
import NewsActivities from './modules/others/news-activities/news-activities';
import Locals from './modules/others/locals/locals';

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
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/umrah" component={Umrah} />
        <Route exact path="/scholarships" component={Scholarships} />
        <Route exact path="/locals" component={Locals} />
        <Route exact path="/news-activities" component={NewsActivities} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/classifieds" component={Classifieds} />

        {/* not found must be placed in last */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
