import React,{useEffect,useState,createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import NativeSelect from '@material-ui/core/NativeSelect';
import { Container } from '@material-ui/core';
import Countryinfo from './CountryInfo';
import Countrychart from './Countrychart';
const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    display:'flex',
    justifyContent:"center",
    alignItems:"center"


   
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export const Context=createContext();
export default function Country({children}) {
    const [country, setCountry] = useState([{}]);
     
    let [countryName,setcountryName]=useState("");
    useEffect(() => {
      
        async function fetchData(){
            const responce=await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            const data=await responce.json();
            console.log(Object.values(Object.values(data.countryitems[0]))); 
            setCountry(Object.values(Object.values(data.countryitems[0])));
        }
     fetchData();
    }, [])
  const classes = useStyles();
  const getCountry=(event)=>{
    setcountryName(event.target.value);
    
  }
 let deathsCount="";
 let totalrecoverd="";
 let totalcases="";
  console.log(countryName);
  function Deaths(){
  for(var i=0;i<country.length;i++){
    if(countryName===country[i].title){
           deathsCount=country[i].total_deaths
           totalrecoverd=country[i].total_recovered
           totalcases=country[i].total_cases
    }
  }
  }
  Deaths()
  return (
    <div>
   {/* <Container maxWidth="md"> */}
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          name="country"
          value={countryName}
          onChange={getCountry}
          inputProps={{ 'aria-label': 'country' }}
        >
          <option value="" disabled>
            Global Report
          </option>
          {
            
               country.map((key,ind)=>{
                  return(
                    
                    <option  key={ind} value={country[ind].title}>
                           
                           {country[ind].title}
                    </option>
                  ) 
               }) 
               
           } 
        </NativeSelect>
      </FormControl> 
      {/* </Container> */}
      {/* <Countryinfo death={deathsCount}  recovered={totalrecoverd} totalcases={totalcases} /> */}
      <Context.Provider value={{
           death:deathsCount,
           recovered:totalrecoverd,
           totalcases:totalcases

      }}>
             {children}
      </Context.Provider>
      
       {/* <Countrychart death={deathsCount} recovered={totalrecoverd} totalcases={totalcases} /> */}
    </div>
  );
}
