import React from 'react';
import './App.css';
import CreditCalc from './components/CreditCalc';
import OrderRecorder from './components/OrderRecorder';

function App() {
  return (
    <div className="App">
      <CreditCalc />
      <hr/>
      <OrderRecorder menu={[{firstDish: [{name: 'Бульйон', cost: 5, time: 20}, 
        {name: 'Борщ', cost: 7.5, time: 25}, 
        {name: 'Уха', cost: 6, time: 15}]}, 
        {secondDish: [{name: 'Пюре', cost: 8.5, time: 15}, 
        {name: 'Рис', cost: 9, time: 20}, 
        {name: 'Гречка', cost: 10.5, time: 30}]}
      ]}/>
    </div>
  );
}

export default App;
