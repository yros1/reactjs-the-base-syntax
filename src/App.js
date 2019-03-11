import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userOutput: [
      { username: 'White', genre: 'FPS' },
      { username: 'Black', genre: 'RTS' },
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
        { username: 'White', genre: 'FPS' },
        { username: event.target.value, genre: 'Sport' },
        { username: 'Red', genre: 'MMO'}
      ] 
    })
  }
  render() {

    const buttonInlineStyle = {
      backgroundColor: '#4CAF50',
      border: '2px solid blue',
      color: 'white',
      padding: '15px 32px',
      textalign: 'center',
      textdecoration: 'none',
      display: 'inline-block',
      fontsize: '16px',
      margin: '4px 2px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <UserInput username={this.state.userOutput[1].username} 
                   changed={this.usernameChangedHandler}>input component</UserInput>
        <UserOutput username={this.state.userOutput[0].username} 
                    genre={this.state.userOutput[0].genre} />
        <UserOutput username={this.state.userOutput[1].username} 
                    genre={this.state.userOutput[1].genre}/>
        <UserOutput username={this.state.userOutput[2].username}
                    genre={this.state.userOutput[2].genre}/>
        <button style = {buttonInlineStyle}
                onClick={this.switchUserNameHandler.bind(this, 'Brown')}> Switch Username</button>

                {/* this is a one way of binding */}
        {/* <button style = {buttonInlineStyle}
                onClick={() => this.switchUserNameHandler('Brown')}> Switch Username</button> */}
      </div>
    );
  }
}

export default App;
