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

  switchUserNameHandler = (userName) => {
    this.setState({
      userOutput: [
        { username: userName, genre: 'FPS' },
        { username: 'Green', genre: 'Sport' },
        { username: 'Red', genre: 'MMO'}
      ] 
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      userOutput: [
        { username: 'Pink', genre: 'FPS' },
        { username: event.target.value, genre: 'Sport' },
        { username: 'Red', genre: 'MMO'}
      ] 
    })
  }
  render() {
    return (
      <div className="App">
        <p>App main component.</p>
        <UserInput changed={this.usernameChangedHandler}>input component</UserInput>


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
