import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={Home} />
      </header>
    </div>
  );
}

export default App;
