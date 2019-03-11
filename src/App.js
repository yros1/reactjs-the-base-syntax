import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App main component.</p>
        <UserOutput />
        <UserOutput />
        <UserOutput />

      </div>
    );
  }
}

export default App;
