import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Component/Router/routes';
import './App.css';
import Navbar from './Component/navigation/nav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
