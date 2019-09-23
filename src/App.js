import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard'

const word = "Santipap";
class App extends Component {
  render() {
    return (
      <div>
        <div className="hint">
          <h1>Welcome to CardGame</h1>
          NOTE: It's id student
      </div>
        <WordCard value="5935512095" />
        <div className="hint">
          ------------------------------------
    </div>
      </div>
    );
  }
}
export default App;