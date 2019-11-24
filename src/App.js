import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from  "./LandingPage/LandingPage.js";
import Queries from './queries/queries.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage/>
        <Queries />
      </header>
    </div>
  );
}

export default App;
