import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import './daterangepicker.css'
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const today = Date.now()
  
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date(today));
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date(today));

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="flex-start">
        
        <DateTimePicker
            value={selectedStartDate} onChange={handleStartDateChange}
        />
        <p className='dateto'> {' => '} </p>
        <DateTimePicker
            value={selectedEndDate} onChange={handleEndDateChange}
        />
      </Grid>
      
    </MuiPickersUtilsProvider>
  );
}