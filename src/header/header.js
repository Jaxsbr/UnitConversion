import React from 'react';
import '../App.css';
import logo from '../logo.svg';

const over = `App-logo over`
const under = `Gear-logo under`
const titleUnit = `tile-text title-unit`
const titleConversion = `tile-text title-conversion`

const Header = () => {
  return (    
        <header className="App-header">
          <img src={'../gear.png'} className={under} alt="logo" />
          <img src={logo} className={over} alt="logo" />        
          <p className={titleUnit}>
            Unit
          </p>
          <p className={titleConversion}>
            Conversions
          </p>
        </header>      
  )
};

export default Header