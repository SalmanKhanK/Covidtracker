import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        textAlign:"center",
     
    },
});
export const Header = () => {
  
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.root}>COVID 19 TRACKER APP</h1>
        </div>
    )
}
