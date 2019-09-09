import React ,{Component} from 'react';
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
    <WordCard value="Santipap"/>
    </div>
    );
   }
   
 }

export default App;
