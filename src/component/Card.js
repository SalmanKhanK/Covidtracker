import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    root: {
        minWidth: 200,

        width: 25
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    recovered: {
     
        marginRight: 20,
        marginBottom: 30,
        margin:5,
        color: "#81c784",
        borderColor: "#81c784",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderBottom: "15px solid rgb(34,139,34)"
      },
      infected: {
    
        marginRight: 20,
        marginBottom: 30,
        color: "#4fc3f7",
        borderColor: "#4fc3f7",
        transition: "0.3s",
        margin:5,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderBottom: "15px solid rgb(34,34,139)"
      },
      deaths: {
       
        marginBottom: 30,
        marginRight:20,
        color: "#e57373",
        borderColor: "#e57373",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderBottom: "15px solid rgb(139,34,34)"
      },
    pos: {
        marginBottom: 12,
    },
  
});

export default function Cardtemp(props) {
     
    const classes = useStyles();

    return (
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3}  className={classes.infected} >
            <CardContent>
                    <Typography  gutterBottom>Infected People</Typography>
                    <Typography>
                       <CountUp start={0} end={props.cases} duration={3} separator="," /> <br/>
                       TodayCases :<span><CountUp start={0} end={props.todayCases} duration={3} separator="," /></span>
                    </Typography>
                    <Typography>{new Date().toDateString()}</Typography>
                    <Typography variant="body1">Number of Total cases of COVID-19</Typography>
                </CardContent>
               
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={classes.deaths} >

                <CardContent>
                    <Typography color="body1" gutterBottom>Deaths</Typography>
                    <Typography >
                 <CountUp start={0} end={props.deaths} duration={3} separator="," /><br/>
                    TodayDeaths :<span><CountUp start={0} end={props.todayDeaths} duration={3} separator="," /></span>
                    </Typography>
                    <Typography color="overline">{new Date().toDateString()}</Typography>
                    <Typography variant="body1">Number of Deaths of COVID-19</Typography>
                </CardContent>

            </Grid>
            <Grid item component={Card} xs={12} md={3}  className={(classes.cardSpacing,classes.recovered)}  >

                <CardContent>
                    <Typography color="body1" gutterBottom>Recovered People & active</Typography>
                    <Typography>
                    <CountUp start={0} end={props.recovered} duration={3} separator="," /><br/>
                       Active :<span><CountUp start={0} end={props.active} duration={3} separator="," /></span><br/>
                       Critical :<span><CountUp start={0} end={props.critical} duration={3} separator="," /></span>
                    </Typography>
                    <Typography color="overline">{new Date().toDateString()}</Typography>
                    <Typography variant="body1">Number of Recovered of COVID-19</Typography>
                </CardContent>

               

            </Grid>

        </Grid>
    );
}
