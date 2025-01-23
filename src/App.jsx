
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(false);
  const [data, setData] = useState("");

  const handleClick = () => {
    setCount(count => !count);
  };

  useEffect(()=>{

    fetchdata();

    // fetch('https://thequoteshub.com/api/')
    // .then((response)=> response.json() )
    // .then((response)=> setData(response))
    // .catch((error)=> console.log(error))
    
    
  },[count]);

  const fetchdata = async() => {
    try{
      
      const response = await fetch('https://thequoteshub.com/api/');

      const result = await response.json();

      setData(result.text);
    }catch{
      throw new Error("Cant fetch API");
    }finally{
      console.log("FetchApi called");
    }
  }

  return (
    <div>
      <div id='container'>
        <h2>Quote Generator</h2>
        <p>{data}</p>
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
    
  )
}

export default App
