import React, { useEffect, useState } from "react";
import Dividends from './components/Dividends'

function App() {


  const [dividends, setDividends] = useState([]);


  useEffect(() => {
    fetchDividends();
  }, []);


  const fetchDividends = () => {
    fetch("https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/1165755ed5d4399218423dfd08e68a6ae3d43d85/shares.json")
      .then((response) => response.json())
      .then((data) => setDividends(data))
      .catch((err) => console.error(err));
  };

    return (
      <div className="App">
          {dividends.map((dividends, i) =><Dividends  dividends={dividends} key= {i}/>)} 
      </div>
    );
  }
  
  export default App; 