import React from 'react';
import './App.css';
import MiracleField from './components/miracle-fild'

function App() {
  let wordsArr = ['aplle', 'orange', 'kiwi', 'bananna']
  return (
    <div className="App">
      <MiracleField wordsArr={wordsArr} />
    </div>
  );
}

export default App;
