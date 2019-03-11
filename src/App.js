import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userOutput: [
      { username: 'White', genre: 'FPS' },
      { username: 'Green', genre: 'RTS' },
      { username: 'Red', genre: 'MMO'}
    ], 
    otherState : 'some other value'
  }



  render() {
    return (
      <div className="App">
        <p>App main component.</p>
        <UserOutput username={this.state.userOutput[0].username} 
                    genre={this.state.userOutput[0].genre} />
        <UserOutput username={this.state.userOutput[1].username} 
                    genre={this.state.userOutput[1].genre}/>
        <UserOutput username={this.state.userOutput[2].username}
                    genre={this.state.userOutput[2].genre}/>
      </div>
    );
  }
}

export default App;
