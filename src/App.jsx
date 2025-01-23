
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(true);
  const [data, setData] = useState({});

  const handleClick = () => {
    setCount( !count);
  };

  useEffect(()=>{

    fetch('https://thequoteshub.com/api/')
    .then((response)=> response.json() )
    .then((response)=> setData(response))
    .catch((error)=> console.log(error))
    
    
  },[count]);

  return (
    <div>
      <div id='container'>
        <h2>Quote Generator</h2>
        <p>{data.text}</p>
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
    
  )
}

export default App
