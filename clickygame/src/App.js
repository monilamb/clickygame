import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
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
