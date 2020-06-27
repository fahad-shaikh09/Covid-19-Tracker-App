import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Recovered</Paper>
           <Typography variant="subtitle1" gutterBottom>
             subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography> 
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Deaths</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Affected</Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
  
    
    
  
