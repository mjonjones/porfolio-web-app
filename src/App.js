import React from 'react';
import PropTypes from 'prop-types';
import Nav from './components/nav/Nav'

const App = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="content">{children}</div>

    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
