import React, { useEffect, useState } from 'react';
import './App.css';
import SelectPlace from './component/SelectPlace';
import {Header} from './component/Header';
function App() {
  let [getData, setgetData] = useState([{}])
  useEffect(() => {
    async function getApiData() {
      const data = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
      const result = await data.json();
      console.log(result)
      setgetData(result);
    }
    getApiData();
   
  }, []);

  return (
    <div >
      <Header/>
      <SelectPlace selectOpt={getData}  />
 
    </div>
  );
}

export default App;
