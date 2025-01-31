import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Main App</h1>
      <Link to="/form">
        <button>Go to Form Page</button>
      </Link>
    </div>
  );
};

export default App;
