import React from 'react';
import './App.css';
import PairsManager from './components/PairsManager'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PairsManager />
      </BrowserRouter>
    </div>
  );
}

export default App;
