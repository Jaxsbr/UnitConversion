import React from 'react';
import logo from './logo.svg';
import './App.css';

const over = `App-logo over`
const under = `Gear-logo under`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'../gear.png'} className={under} alt="logo" />
        <img src={logo} className={over} alt="logo" />        
        <p className="tile-text">
          Unit Conversions
        </p>          
      </header>
    </div>
  );
}

export default App;
