import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import covid from '../covidpic.jpg'
import '../App.css';
const useStyles = makeStyles((theme) => ({
 
  title: {
     textAlign:"center"
  },
 
 
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.title}>
            <h1>C<img src={covid} id="covidpic" width={40} height={25} />VID-19 </h1>
    </div>
  );
}
