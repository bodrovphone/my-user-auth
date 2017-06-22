import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import '../static/App.css';

const App = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>

    </div>

    {children}

  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;