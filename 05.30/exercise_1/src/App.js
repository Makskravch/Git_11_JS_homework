import React from 'react';
import './App.css';
import GuessNumber from './components/GuessNumber';

function App() {
  return (
    <div className="App">
      <GuessNumber firstPlayerName={'Sem'} secondPlayerName={'Jhon'} />
    </div>
  );
}

export default App;
