import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="About">
      <h1>ABOUT</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">To home</Link>
    </div>
  );
}

export default About;
