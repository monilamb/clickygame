import React, { Component } from 'react';
import './App.css';
import Squares from "./components/Squares";
import characters from "./characters.json";

class App extends Component {

  render() {
    return (
      <div>
      
      <Squares shuffled={characters}/>
      </div>
    );
  }
}

export default App;
