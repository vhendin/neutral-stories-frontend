import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </header>
    </div>
  );
}

export default App;
