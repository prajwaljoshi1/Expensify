import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () =>{
   return (
      <div>
      DASHBOARD 
      </div>)
};

const AddExpensePage = () =>{
   return (
      <div>
      ADD 
      </div>)
};


const EditExpensePage = () =>{
   return (
      <div>
      EDIT 
      </div>)
};


const HelpPage = () =>{
   return (
      <div>
      HELP 
      </div>)
};

const NotFoundPage = () =>{
   return (
      <div>
      404! - <Link to="/">Go Home</Link>
      </div>)
};

const Header = () => {
   return <header>
            <h1>Expensify</h1>
            <NavLink exact={true} activeClassName="is-active" to="/">Dashboard</NavLink>
            <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
            <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
            <NavLink activeClassName="is-active" to="/help">Help</NavLink>
         </header>;
}
const routes = (

  
 <BrowserRouter>
   <div>
      <Header/>
      <Switch>
         <Route exact={true} path="/" component={ExpenseDashboardPage}/>
         <Route path="/create" component={AddExpensePage}/>
         <Route path="/edit" component={EditExpensePage}/>
         <Route path="/help" component={HelpPage}/>
         <Route  component={NotFoundPage}/>
      </Switch>
   </div>
 </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));


import React from 'react'


