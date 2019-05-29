import React from 'react';
import './App.css';
import PredictionViewer from './components/PredictionViewer';

function App() {
  return (
    <div className="App">
      <PredictionViewer predictions={['love', 'money', 'party', 'car', 'happy']} />
    </div>
  );
}

export default App;
