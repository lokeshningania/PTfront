import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const today = Date.now()
  const [selectedDate, setSelectedDate] = React.useState(new Date(today));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="center">
        
        <DateTimePicker
            value={selectedDate} onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}