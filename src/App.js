import React,{useEffect,useState} from 'react';
import './App.css';
import Header from './component/Header';
import GlobalData from './component/GlobalData';
import Globalchart from './component/GlobalChart';
import Country from './component/CountryState';
import Countrychart from './component/Countrychart';
import Countryinfo from './component/CountryInfo'
function App() {
  let  [global,setGlobal] = useState([{}]);
 
  useEffect(() => {
     
      async function getData(){
        const responce=await fetch("https://api.thevirustracker.com/free-api?global=stats");
        const data=await responce.json();
        delete data.results[0].source
        console.log(data.results[0]);
        setGlobal(data.results[0]);
        
      }
      getData()

  }, []);

  return (
    <div >
         <Header />
         <GlobalData global={global}/>
          <Country>
            <Countryinfo/>
            <Countrychart/>
          </Country>
        
         
         
         
         
         {/* <Countryinfo />  */}
          {/* <Countrychart />  */}
   
    </div>
  );
}

export default App;
