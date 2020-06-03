/*eslint no-unused-vars: "off"*/
// Dependencies
import React, { useState } from 'react';

// Images
import logo from './logo.svg';

// Style
import './App.css';

function App() {
  // Local state
  const [open, setOpen] = useState(false);

  // Method to handle onclick
  const handleClick = () => {
    alert('clicked!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span
          className="App-link"
          onClick={handleClick}
        >
          Click here!
        </span>
      </header>
    </div>
  );
}

export default App;
