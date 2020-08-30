import React,{useEffect,useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Globalchart from './GlobalChart';
import '../App.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:50,
    maxWidth:1000,
    margin:"0 auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"auto"
  },
}));

export default function GlobalData(props) {

  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
          <h1 className="blue">Total Cases</h1>
         <h3>{props.global.total_cases}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
          <h1 className="Red">Deaths</h1>
          <h3>{props.global.total_deaths}</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
          <h1 className="recovered">Recovered</h1>
          <h3>{props.global.total_recovered}</h3>
          </Paper>
        </Grid>
      </Grid>
      <Globalchart total_cases={props.global.total_cases} death={props.global.total_deaths} total_recovered={props.global.total_recovered} /> 
    </div>
    
  );
}
