import React from 'react';
import './App.css';
import FieldMiracles from './components/FieldMiracles';

function App() {
  const wordsArr = ['трава', 'друг', 'молоко', 'школа', 'схема']
  return (
    <div className="App">
      <FieldMiracles wordsArr={wordsArr} />
    </div>
  );
}

export default App;
