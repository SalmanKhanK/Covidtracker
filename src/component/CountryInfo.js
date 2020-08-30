import React,{useEffect,useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import '../App.css';
import {Context} from './CountryState';
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

export default function Countryinfo() {
  let {death,totalcases,recovered}=useContext(Context);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
          <h1 className="blue">Total Cases</h1>
         <h3><CountUp start={0} end={Number(totalcases)} duration={3} separator="," /></h3>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
          <h1 className="Red">Deaths</h1>
         
          <h3><CountUp start={0} end={Number(death)} duration={3} separator="," /></h3>
          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper className={classes.paper}>
          <h1 className="recovered">Recovered</h1>
          <h3><CountUp start={0} end={Number(recovered)} duration={3} separator="," /></h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
