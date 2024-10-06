// src/App.js
import React from 'react';
import Signup from './Signup';
import Callback from './callback';
import Dashboard from './Dashboard';

function App() {
  const pathname = window.location.pathname;

  if (pathname === '/callback') {
    return <Callback />;
  } else if (pathname === '/dashboard') {
    return <Dashboard />;
  } else {
    return <Signup />;
  }
}

export default App;
