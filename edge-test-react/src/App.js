import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const { msg } = { ...props };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {msg}
        </p>
      </header>
    </div>
  );
}

export default App;
