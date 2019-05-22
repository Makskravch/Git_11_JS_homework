import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './components/Calc';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /><br/>
      <Calc title1='Перше число' title2='Друге число' title3='Знайти суму' title4='Результат' />
      <hr/>
      <Calc title1='First' title2='Second' title3='Get sum' title4='Result' />
      <hr/>
      <ToDo title='Зробити завтра' list={['Випити каву', 'Піти виспатись', 'Попрацювати']} />
    </div>
  );
}

export default App;
