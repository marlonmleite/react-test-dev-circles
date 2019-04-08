import React, { Component } from 'react';
import Button from '../../components/Button'
import logo from '../../commons/assets/logo.svg';
import './App.css';

const onClick = () => alert('button clicked')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Button onClick={onClick}>Normal Button</Button>
            <Button onClick={onClick} primary>Primary Button</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
