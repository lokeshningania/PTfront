import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import './daterangepicker.css'
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  DatePicker
  
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop:theme.spacing(2),
    marginRight:theme.spacing(1),
    paddingTop:theme.spacing(0),
    display: 'block',
    height:40,
    color: theme.palette.text.secondary,
  },
}));


export default function MaterialUIPickers(props) {
  const classes = useStyles();
  // The first commit of Material-UI
  const today = Date.now()
  
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date(today));
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date(today));

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    props.getStartDateRange(date)
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    props.getEndDateRange(date)

    
  };

  return (
    <div className={classes.root}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <Grid container justify="flex-start">
        
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
        <DatePicker
            value={selectedStartDate} onChange={handleStartDateChange}
            InputProps={{
              disableUnderline: true,
             }}
        />
        </Paper>
        
        </Grid>
        <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
        <DatePicker
            value={selectedEndDate} onChange={handleEndDateChange}
            InputProps={{
              disableUnderline: true,
             }}
        />
        </Paper>
        </Grid>
      </Grid>
      
    </MuiPickersUtilsProvider>
    </div>
  );
}