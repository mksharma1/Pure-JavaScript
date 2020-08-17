import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';
class App extends Component {

  state={
    username :  'Mohit Pandit'
  }

  usernameChangedHandler =(event) =>{
    this.setState({username:event.target.value})
  }
  render() {
    return (
     <div className="App">
       <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Gunjan Ahuja" ></UserOutput>
      <UserOutput userName="Best Friends"></UserOutput>
     </div>
    );
  }
}

export default App;
