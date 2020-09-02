import React,{createContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cardtemp from './Card';
import ChartInfo from './ChartInfo';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectPlace(props) {
  
  const classes = useStyles();
  const [state, setState] =useState({
    place: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
console.log(state.place)
var cases="";
var todayCases="";
var deaths="";
var todayDeaths="";
var recovered="";
var active="";
var critical="";
for(var i=0;i<props.selectOpt.length;i++){
  if(state.place===props.selectOpt[i].country){
         cases=props.selectOpt[i].cases
          todayCases=props.selectOpt[i].todayCases
          deaths=props.selectOpt[i].deaths
          todayDeaths=props.selectOpt[i].todayDeaths
         recovered=props.selectOpt[i].recovered
          active=props.selectOpt[i].active
          critical=props.selectOpt[i].critical
  }
      

}

  return (
    <div>
       <Cardtemp  
     todayCases={todayCases}
      deaths={deaths}
     todayDeaths={todayDeaths}
     recovered={recovered}
     active={active}
      critical={critical}
      cases={cases} 
     />
      <FormControl className={classes.formControl}>
      {/* <InputLabel htmlFor="age-native-simple">Place</InputLabel> */}
          Select Place
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'place',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
         
        {
          props.selectOpt.map((data,key)=>{
            return(
              <option key={key} value={data.country}>{data.country}</option>
            )
          })
        }
        
        </Select>
  
      </FormControl>
  
     <ChartInfo deaths={deaths} 
                 recovered={recovered}
                cases={cases}/>
      
    </div>
  );
}
