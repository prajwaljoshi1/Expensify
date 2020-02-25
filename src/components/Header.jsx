import React from 'react';


const Header = () => {
  return <header>
           <h1>Expensify</h1>
           <NavLink exact={true} activeClassName="is-active" to="/">Dashboard</NavLink>
           <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
           <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
           <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        </header>;
}


export default Header;