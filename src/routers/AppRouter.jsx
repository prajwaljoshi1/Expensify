import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExenseDashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const routes = (
<BrowserRouter>
  <div>
     <Header/>
     <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage}/>
        <Route path="/create" component={CreateExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route  component={NotFoundPage}/>
     </Switch>
  </div>
</BrowserRouter>
);