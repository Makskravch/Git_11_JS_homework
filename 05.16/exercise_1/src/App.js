import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductInfo from './components/productInfo';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" style={{width: 50 + "px", height: 50 + "px", backgroundColor: 'black', borderRadius: 50 + "%"}} />
      <ProductInfo title="Coffe" list={["Nescafe", "3.2 $", "30 months", "4.5 stars"]} />
      <ProductInfo title="Whiskey" list={["Jack Daniel's", "43.99 $", "infinity", "5 stars"]} />
      <MovieInfo day="Monday" data="2019.05.27" list={
        {
          1: {
            time: "12:00", 
            name: "Scary movie", 
            cost: "4.50$"
          },
          2: {
            time: "15:30", 
            name: "Hulk", 
            cost: "5.00$"
          },
          3: {
            time: "18:20", 
            name: "Godzilla", 
            cost: "6.50$"
          },
        }
      } />
      <MovieInfo day="Wednesday" data="2019.05.28" list={
        {
          1: {
            time: "18:00", 
            name: "Sherlock", 
            cost: "4.50$"
          },
          2: {
            time: "19:30", 
            name: "Saw 3", 
            cost: "5.00$"
          },
          3: {
            time: "20:20", 
            name: "Avengers", 
            cost: "6.50$"
          },
        }
      } />
    </div>
  );
}

export default App;
