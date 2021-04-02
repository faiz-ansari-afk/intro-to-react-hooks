import React from 'react';
import Time from './components/Time'
import './App.css';

function App() {

  const [count,setCount] = React.useState(0);
  function increase(){
    setCount(count + 1)
  }
  function decrease(){
    setCount(count - 1)
  }
  
  
  
  return (
    <div className="container">
    <h1>{count}</h1>
    <button onClick={decrease} >-</button>
    <button onClick={increase} >+</button>
    <Time />
    
  </div>
  );
}

export default App;
